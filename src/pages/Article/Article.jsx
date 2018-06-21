import React, { Component } from 'react';
import './Article.scss';
import ArticleService from '../../service/article';

export default class Article extends Component {
	static displayName = 'Article';

	constructor( props ) {
		super( props );
		this.state = {
			article: {
				title: 'CNAME 接入 Cloudflare CDN',
				author: 'lingzi',
				updateTime: '2018-06-08',
				readNum: '1223',
				content: []
			}
		};
	}

	async componentDidMount() {
		const article = await ArticleService.GetDetail( this.props.match.params.id );
		this.setState( { article } );
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
						<p>lingzi {this.state.article.updateTime} 1314次阅读</p>
					</div>
				</header>
				<article className="article-con"
						 dangerouslySetInnerHTML={{ __html: this.state.article.content }}></article>

			</div>
		);
	}
}
