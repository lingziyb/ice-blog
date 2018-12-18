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
				content: [],
				banner: ''
			}
		};
	}

	async componentDidMount() {
		let article = await ArticleService.GetDetail( this.props.match.params.id );
		article.banner = JSON.parse( article.banner )[ 0 ].imgURL;
		this.setState( { article } );
	}

	render() {
		return (
			<div className="article-page">
				<header className="article-head">
					<div
						className="article-head-background"
						style={{
							backgroundImage: 'url(' + this.state.article.banner + ')',
						}}
					/>
					<div className="article-head-info">
						<h2>{this.state.article.title}</h2>
						<p>逍遥哥哥的灵儿 &nbsp; <span>{this.state.article.updateTime} &nbsp; 1314次阅读</span></p>
					</div>
				</header>
				<article className="article-con ql-editor"
						 dangerouslySetInnerHTML={{ __html: this.state.article.content }}></article>

			</div>
		);
	}
}
