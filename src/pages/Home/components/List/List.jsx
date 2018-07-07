import React, { Component } from 'react';
import './List.scss';
import { Button } from '@icedesign/base';
import ArticleService from '../../../../service/article';
import Tip from '../../../../components/Tip';

export default class List extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			isShowTip: false,
			tipVal: '编辑成功'
		}
	}

	goArticle( id ) {
		console.log( 'article', this.props.history );
		this.props.history.push( `/article/${id}` );
	}

	async edit( id ) {
		this.props.history.push( {
			pathname: '/publish',
			query: { id },
		} );
	}

	async remove( id, index ) {
		const res = await ArticleService.Remove( id );
		this.props.remove( index );
		this.setState( { isShowTip: true, tipVal: '删除成功' } );
		setTimeout( () => {
			this.setState( { isShowTip: false } )
		}, 3000 );
	}

	renderBtn( item, index ) {
		if ( this.props.isLogin ) {
			return (
				<div className="btns">
					<Button onClick={this.edit.bind( this, item.id )}
							type="secondary">修改</Button>
					<Button onClick={this.remove.bind( this, item.id, index )}
							type="normal"
							shape="warning">删除</Button>
				</div>
			)
		} else {
			return '';
		}
	}

	render() {
		return (
			<div className="home-list">
				<Tip title={this.state.tipVal} visible={this.state.isShowTip}></Tip>

				<ul className="home-list-ul">
					{
						this.props.articles && this.props.articles.map( ( item, index ) => {
							return (
								<li className="li" key={index}>
									{this.renderBtn( item, index )}
									<h1 onClick={this.goArticle.bind( this, item.id )}>{item.title}</h1>
									<div className="content" dangerouslySetInnerHTML={{ __html: item.content }}></div>
									<span className='time'>发布时间：{item.createTime} </span>
								</li>
							)
						} )
					}
				</ul>
			</div>
		)
	}
}