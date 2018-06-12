import React, {Component} from 'react';
import LandingIntroBanner from './components/LandingIntroBanner';
import List from './components/List';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

export default class Home extends Component {
	static displayName = 'Home';

	constructor(props) {
		super(props);
		this.state = {};
	}

	render() {
		return (
			<div className="home-page" style={{background: '#fff'}}>
				<LandingIntroBanner />
          		<List />
				<Footer />
			</div>
		);
	}
}
