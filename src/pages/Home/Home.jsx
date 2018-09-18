import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import List from './components/List';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ArticleService from '../../service/article';
import UserService from '../../service/user';
// import './mock';

export default class Home extends Component {
	static displayName = 'Home';

	constructor( props ) {
		super( props );
		this.state = {
			articles: [],
			user: {}
		};
	}

	async componentDidMount() {
		const articles = await ArticleService.List();
		const user = await UserService.GetUserInfo();

		if ( user.status == 200 ) {
			this.setState( { articles, user: user.data } );
		} else {
			this.setState( { articles } );
		}
	}

	remove( index ) {
		this.state.articles.splice( index, 1 );
	}

	setUser( user ) {
		this.setState( { user } );
	}

	render() {
		return (
			<div className="home-page" style={{ background: '#fff' }}>
				<Header history={this.props.history} user={this.state.user} setUser={this.setUser.bind( this )}/>
				<LandingIntroBanner />
				<List history={this.props.history} remove={this.remove.bind( this )} articles={this.state.articles}
					  isLogin={this.state.user.userId ? true : false}/>
				<Footer />
			</div>
		);
	}
}
