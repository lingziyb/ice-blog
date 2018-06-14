import React, {Component} from 'react';
import './Article.scss';

export default class Article extends Component {
	static displayName = 'Article';

	constructor(props) {
		super(props);
		this.state = {
			article: {
				title: 'CNAME 接入 Cloudflare CDN',
				author: 'lingzi',
				time: '2018-06-08',
				readNum: '1223',
				content: []
			}
		};
	}

	render() {
		return (
			<div className="article-page">
				<header className="article-head">
					<div
						className="article-head-background"
						style={{
							backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528558103368&di=d1c77dc99766e4353efc650eef48adb4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F02%2F20161002113406_jJTu2.png)',
							backgroundPosition: 'center',
						}}
					/>
					<div className="article-head-info">
						<h2>{this.state.article.title}</h2>
						<p>{this.state.article.author} {this.state.article.time} {this.state.article.readNum}次阅读</p>
					</div>
				</header>


				<article class="article-con">
					<p>其实，我小时候一直很畏惧舞台。 </p>

					<p>记得，初一开学典礼，因为成绩好，参加军训的演讲。拿着演讲稿的手随着声音一直在颤抖。
						记得，初三纸时装秀，我穿着最好看的衣服，上台了之后马上就下台。大家都说我应该转一圈。
						各种神奇的回忆。</p>

					<p>总之，特别不喜欢被人盯着的感觉。</p>

					<p>然而，自从上了大学，我就特别喜欢挑战自我。
						做自己以前不喜欢做的事。
						越来越喜欢这种，一开始不擅长，到最后做得很好的感觉。</p>

					<p>就像这次的走秀，算是我第一次在没有失败的前提下，直接会有有很好的舞台表现。</p>

					<p>总结下这次走秀的速成要领： </p>

					<ol>
						<li>心态。
							以前，上台都希望自己表现好一些，越想越紧张。这次，我没有想要太亮眼的动作，正常发挥即可。当我这么想的时候，我就完全没有心里负担了，而是轻松上台。
							送几句上台前很能缓解紧张的话：
							（1）没人会关注你，大家其实都在玩手机。
							（2）就算出糗了，大家下一秒就忘记了。事实就是如此。
						</li>
						<li>动作。
							我没有选择<strong>临时抱佛脚式</strong>的训练，而是选择找重点。
							（1）关键时候笑一下，这个特别重要，需要亮点
							（2）形态：脚步迈大，走得慢一些、肩膀打开不驼背、手往后摆大一些，不用往前摆太多。其实，这几点没那么重要。不是专业的舞台，感觉自然就好，不用特别在意。
						</li>
						<li>形象。
							回来看了小伙伴的视频，台上的我风格正好比较独特。我走比较可爱路线，同台没有人和我撞型，就能比较抓眼球。
						</li>
						<li>其它
							上台的时候我其实微笑有点抽搐，但是似乎观众并没有人看到。所以，不要怕！
						</li>
					</ol>

					<p>我并不想成为什么网红，我只想培养我的表现力！特别是在工作中、生活中，很多地方都很重要！</p>

					<p>附上这次的图片吧，站在这次的经验上继续加油！</p>
				</article>

			</div>
		);
	}
}
