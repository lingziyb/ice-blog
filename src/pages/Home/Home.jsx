import React, { Component } from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import List from './components/List';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import ArticleService from '../../service/article';

export default class Home extends Component {
	static displayName = 'Home';

	constructor( props ) {
		super( props );
		this.state = {
			articles: []
		};
	}

	async componentDidMount() {
		const articles = await ArticleService.List();
		this.setState( { articles } );
	}

	remove( index ) {
		this.state.articles.splice( index, 1 );
	}

	render() {
		return (
			<div className="home-page" style={{ background: '#fff' }}>
				<Header />
				<LandingIntroBanner />
				<List history={this.props.history} remove={this.remove.bind( this )} articles={this.state.articles}/>
				<Footer />
			</div>
		);
	}
}
