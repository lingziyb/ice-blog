import Mock from 'mockjs';

console.log( '=====加载mock=====' );

Mock.mock( /\/getList/, 'get', [
	{
		banner: [ { "imgURL": "http://lingliblog.oss-cn-shenzhen.aliyuncs.com/egg-blog-upload/banner/bg.jpg" } ],
		content: '<h3><strong>需求描述：</strong></h3><p>博客能发布文章，但是有一个令人不满意的地方。</p><p>编辑器内部的图片插入是base64的，这样的话我的数据库得存多少啊，所以要把它替换成图片链接。</p><p><br></p><h2>编辑器实践流程：</h2><p class="ql-indent-1">1、一开始在npm上搜react富文本编辑器，就选择了React-Quill，看它的github star也挺多的。</p><p>2、有一天我突然想在编辑器里发表一张大图，瞬间就报错了：<span style="color: rgb(230, 0, 0);">“413 Payload Too Large”。</span></p><p>3、去查了下资料是太大了，而且图片是转成base64的。然后查看了它的官方资料暂不支持。这下就只能换编辑器了。</p><p>4、接下来要试试这个braft-editor，后面抽时间调研换一下。</p><p class="ql-indent-1"><br></p><p>braft-editor：<a href="https://github.com/margox/braft-editor " target="_blank">https://github.com/margox/braft-editor&nbsp;</a></p><p>选择这个是摘自文章：<a href="https://cloud.tencent.com/developer/article/1148171" target="_blank">https://cloud.tencent.com/developer/article/1148171</a></p>',
		createTime: "2018-07-07 14:30:15",
		id: 1,
		title: "编辑器替换",
		updateTime: "2018-07-07 22:12:08"
	},
	{
		banner: [ { "imgURL": "http://lingliblog.oss-cn-shenzhen.aliyuncs.com/egg-blog-upload/banner/bg.jpg" } ],
		content: '<h3><strong>需求描述：</strong></h3><p>博客能发布文章，但是有一个令人不满意的地方。</p><p>编辑器内部的图片插入是base64的，这样的话我的数据库得存多少啊，所以要把它替换成图片链接。</p><p><br></p><h2>编辑器实践流程：</h2><p class="ql-indent-1">1、一开始在npm上搜react富文本编辑器，就选择了React-Quill，看它的github star也挺多的。</p><p>2、有一天我突然想在编辑器里发表一张大图，瞬间就报错了：<span style="color: rgb(230, 0, 0);">“413 Payload Too Large”。</span></p><p>3、去查了下资料是太大了，而且图片是转成base64的。然后查看了它的官方资料暂不支持。这下就只能换编辑器了。</p><p>4、接下来要试试这个braft-editor，后面抽时间调研换一下。</p><p class="ql-indent-1"><br></p><p>braft-editor：<a href="https://github.com/margox/braft-editor " target="_blank">https://github.com/margox/braft-editor&nbsp;</a></p><p>选择这个是摘自文章：<a href="https://cloud.tencent.com/developer/article/1148171" target="_blank">https://cloud.tencent.com/developer/article/1148171</a></p>',
		createTime: "2018-07-07 14:30:15",
		id: 2,
		title: "编辑器替换",
		updateTime: "2018-07-07 22:12:08"
	},
	{
		banner: [ { "imgURL": "http://lingliblog.oss-cn-shenzhen.aliyuncs.com/egg-blog-upload/banner/bg.jpg" } ],
		content: '<h3><strong>需求描述：</strong></h3><p>博客能发布文章，但是有一个令人不满意的地方。</p><p>编辑器内部的图片插入是base64的，这样的话我的数据库得存多少啊，所以要把它替换成图片链接。</p><p><br></p><h2>编辑器实践流程：</h2><p class="ql-indent-1">1、一开始在npm上搜react富文本编辑器，就选择了React-Quill，看它的github star也挺多的。</p><p>2、有一天我突然想在编辑器里发表一张大图，瞬间就报错了：<span style="color: rgb(230, 0, 0);">“413 Payload Too Large”。</span></p><p>3、去查了下资料是太大了，而且图片是转成base64的。然后查看了它的官方资料暂不支持。这下就只能换编辑器了。</p><p>4、接下来要试试这个braft-editor，后面抽时间调研换一下。</p><p class="ql-indent-1"><br></p><p>braft-editor：<a href="https://github.com/margox/braft-editor " target="_blank">https://github.com/margox/braft-editor&nbsp;</a></p><p>选择这个是摘自文章：<a href="https://cloud.tencent.com/developer/article/1148171" target="_blank">https://cloud.tencent.com/developer/article/1148171</a></p>',
		createTime: "2018-07-07 14:30:15",
		id: 3,
		title: "编辑器替换",
		updateTime: "2018-07-07 22:12:08"
	}
] );

Mock.mock( /\/getUserInfo/, 'post', {
	msg: "未登录",
	status: 201
} );
