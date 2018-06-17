import React, {Component} from 'react';
import './Publish.scss';
import {Form, Input, Button, Checkbox, Field, Upload} from "@icedesign/base";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const FormItem = Form.Item;

export default class Publish extends Component {
	static displayName = 'Publish';

	constructor(props) {
		super(props);
		this.field = new Field(this);

		this.state = {text: ''};
		this.handleChange = this.handleChange.bind(this);
	}

	handleSubmit() {
		console.log("收到表单值：", this.field.getValues());
	}

	handleChange(value) {
		this.setState({text: value})
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

		const editorToolbar = {
			toolbar: [
				['link', 'image'],
				['bold', 'italic', 'underline'],        // toggled buttons
				['blockquote', 'code-block'],
				[{'list': 'ordered'}, {'list': 'bullet'}],
				[{'script': 'sub'}, {'script': 'super'}],      // superscript/subscript
				[{'indent': '-1'}, {'indent': '+1'}],          // outdent/indent
				[{'header': [1, 2, 3, 4, 5, 6, false]}],
				[{'color': []}, {'background': []}],          // dropdown with defaults from theme
				[{'align': []}]
			]
		};

		function beforeUpload(info) {
			console.log("beforeUpload callback : ", info);
		}

		function onChange(info) {
			console.log("onChane callback : ", info);
		}

		return (
			<div className="publish-page">
				<Form direction="ver" field={this.field}>
					<FormItem label="上传头图：" {...formItemLayout}>
						<Upload
							action="//next-upload.shuttle.alibaba.net/upload" // 该接口仅作测试使用，业务请勿使用
							accept="image/png, image/jpg, image/jpeg, image/gif, image/bmp"
							listType="text"
							beforeUpload={beforeUpload}
							onChange={onChange}
							{...init("upload", {
								valueName: "fileList",
								getValueFromEvent: this.getValueFromFile
							})}
						>
							<Button type="primary" style={{margin: "0 0 10px"}}>
								上传文件
							</Button>
						</Upload>
					</FormItem>
					<FormItem label="文章标题：" required {...formItemLayout}>
						<Input placeholder="请输入标题"
							   {...init("title", {
								   rules: [{required: true, message: "不能为空"}]
							   })}
						/>
					</FormItem>

					<FormItem label="文章内容：" required {...formItemLayout} help="随便写点什么">
						<ReactQuill onChange={this.handleChange} modules={editorToolbar}
									value={this.state.text} placeholder="开始创作"
									{...init("content")} />
					</FormItem>
					<FormItem label=" " {...formItemLayout}>
						<Button type="primary" onClick={this.handleSubmit.bind(this)}>
							确定
						</Button>
					</FormItem>
				</Form>
			</div>
		);
	}
}
