import React, { Component } from 'react';
import './Publish.scss';
import { Form, Input, Button, Checkbox, Field, Upload, Notice } from "@icedesign/base";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import ArticleService from '../../service/article';

const FormItem = Form.Item;

export default class Publish extends Component {
	static displayName = 'Publish';

	field = new Field( this );

	constructor( props ) {
		super( props );

		this.state = {
			text: '',
			isShowTip: false
		};
		this.handleChange = this.handleChange.bind( this );
	}

	async handleSubmit() {
		console.log( "收到表单值：", this.field.getValues() );

		const res = await ArticleService.Publish( this.field.getValues() );

		console.log( "收到表单值：", res );
		this.setState( { isShowTip: true } );
		setTimeout( () => {
			this.setState( { isShowTip: false } )
		}, 3000 );
	}

	handleChange( value ) {
		this.setState( { text: value } )
	}

	render() {
		const init = this.field.init;
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
				[ { 'list': 'ordered' }, { 'list': 'bullet' } ],
				[ { 'script': 'sub' }, { 'script': 'super' } ],      // superscript/subscript
				[ { 'indent': '-1' }, { 'indent': '+1' } ],          // outdent/indent
				[ { 'header': [ 1, 2, 3, 4, 5, 6, false ] } ],
				[ { 'color': [] }, { 'background': [] } ],          // dropdown with defaults from theme
				[ { 'align': [] } ]
			]
		};

		const onSuccess = ( info ) => {
			console.log( "---------上传成功---------" );
			this.field.setValues( { banner: info.imgURL } );
		}

		return (
			<div className="publish-page">

				<Notice title="发布成功!" iconType="success" visible={this.state.isShowTip}
						style={{ marginBottom: '60px' }}></Notice>

				<Form direction="ver" field={this.field}>
					<FormItem label="上传头图：" {...formItemLayout}>
						<Upload
							action="http://127.0.0.1:7001/upload"
							accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
							listType="text-image"
							onSuccess={onSuccess}
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
						<ReactQuill onChange={this.handleChange} modules={editorToolbar}
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
