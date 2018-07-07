import React, { Component } from 'react';
import './Publish.scss';
import { Form, Input, Button, Checkbox, Field, Upload } from "@icedesign/base";
import ReactQuill from 'react-quill';
import Tip from '../../components/Tip';
import 'react-quill/dist/quill.snow.css';
import ArticleService from '../../service/article';

const FormItem = Form.Item;

export default class Publish extends Component {
	static displayName = 'Publish';

	field = new Field( this, {
		deepReset: true // 打开清楚特殊类型模式(fileList是数组需要特别开启)
	} );

	constructor( props ) {
		super( props );

		this.state = {
			text: '',
			tip: {
				isShow: false,
				val: '发布成功!',
				icon: 'success'
			},
			article: {
				title: '',
				content: ''
			},
			articleId: ''
		};

	}

	async componentDidMount() {
		if ( this.props.location.query && this.props.location.query.id ) {
			this.setState( { articleId: this.props.location.query.id } );
			const article = await ArticleService.GetDetail( this.props.location.query.id );
			this.field.setValues( {
				...article,
				banner: JSON.parse( article.banner )
			} );
		}
	}

	async handleSubmit() {
		let obj = this.field.getValues();
		obj.banner = JSON.stringify( obj.banner );

		const res = await ArticleService[ this.state.articleId ? 'Edit' : 'Publish' ]( obj );

		this.setState( { tip: { isShow: true, val: res.msg, icon: res.status == 200 ? 'success' : 'warning' } } );
		setTimeout( () => {
			this.setState( { tip: { isShow: false } } );
			if ( res.status == 200 ) this.props.history.push( '/' );
		}, 3000 );
	}

	handleChange( value ) {
		this.setState( { text: value } )
	}

	render() {
		const { init, getValue } = this.field;
		const formItemLayout = {
			labelCol: {
				fixedSpan: 10
			},
			wrapperCol: {
				span: 14
			}
		};

		// 编辑器配置
		const editorToolbar = {
			toolbar: [
				[ 'link', 'image' ],
				[ 'bold', 'italic', 'underline' ],        // toggled buttons
				[ 'blockquote', 'code-block' ],
				[ { 'list': 'ordered' }, { 'list': 'bullet' }, { 'indent': '-1' }, { 'indent': '+1' } ],
				[ { 'script': 'sub' }, { 'script': 'super' } ],      // superscript/subscript
				[ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
				[ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],
				[ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
				[ { 'align': [] } ]
			]
		};
		const onSuccess = ( info ) => {
			console.log( "---------上传成功---------", info );


			this.field.setValues( { banner: info.data } );
		}

		return (
			<div className="publish-page">
				<Tip title={this.state.tip.val} iconType={this.state.tip.icon} visible={this.state.tip.isShow}></Tip>

				<Form direction="ver" field={this.field}>
					<FormItem label="上传头图：" {...formItemLayout}>
						<Upload className='upload'
								action="/api/upload"
								accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
								listType="text-image"
								onSuccess={onSuccess}
								fileList={ getValue( 'banner' ) && getValue( 'banner' ).length > 0 ? getValue( 'banner' ) : [] }
								{...init( "banner" )}
						>
							<Button type="primary" style={{ margin: "0 0 10px" }}>
								上传文件
							</Button>
						</Upload>
					</FormItem>
					<FormItem label="文章标题：" required {...formItemLayout}>
						<Input placeholder="请输入标题"
							   {...init( "title", {
								   rules: [ { required: true, message: "不能为空" } ]
							   } )}
						/>
					</FormItem>

					<FormItem label="文章内容：" required {...formItemLayout} help="随便写点什么">
						<ReactQuill onChange={this.handleChange.bind( this )} modules={editorToolbar}
									value={this.state.text} placeholder="开始创作"
									{...init( "content" )} />
					</FormItem>
					<FormItem label=" " {...formItemLayout}>
						<Button type="primary" onClick={this.handleSubmit.bind( this )}>
							确定
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}
