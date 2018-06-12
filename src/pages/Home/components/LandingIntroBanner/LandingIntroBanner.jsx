import React, {Component} from 'react';
import {Button} from '@icedesign/base';
import './LandingIntroBanner.scss';
import {enquire} from 'enquire-js';

export default class LandingIntroBanner extends Component {
	static displayName = 'LandingIntroBanner';

	static propTypes = {};

	static defaultProps = {};

	constructor(props) {
		super(props);
		this.state = {
			isMobile: false
		};
	}

	componentDidMount() {
		this.scaleScreen();
	}

	scaleScreen() {
		const isMobile = 'screen and (max-width: 720px)';

		enquire.register(isMobile, {
			match: () => {
				this.setState({
					isMobile: true
				});
			},
			unmatch: () => {
				this.setState({
					isMobile: false
				});
			}
		});
	}

	render() {
		return (
			<div className="landing-intro-banner" style={{height: this.state.isMobile === true ? '40vh' : '100vh'}}>
				<div
					className="landing-intro-banner-background"
					style={{
						backgroundImage: 'url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1528558103368&di=d1c77dc99766e4353efc650eef48adb4&imgtype=0&src=http%3A%2F%2Fimg4.duitang.com%2Fuploads%2Fitem%2F201610%2F02%2F20161002113406_jJTu2.png)',
						backgroundPosition: 'center',

					}}
				/>
				<div className="landing-intro-banner-content-wrapper">
					<div className="landing-intro-banner-content">
						<h2 style={this.state.isMobile === true ? styles.smallTitle : styles.title}>Lingzi</h2>
						<p style={this.state.isMobile === true ? styles.smallSubTitle : styles.subTitle}>
							风景这边独好 ， 阅人无数不如行万里路
						</p>
						<div
							className="landing-intro-banner-buttons"
							style={{textAlign: 'center', marginTop: 70}}
						>
						</div>
					</div>
				</div>
			</div>
		);
	}
}

const styles = {
	title: {
		textAlign: 'center',
		fontSize: '46px',
		letterSpacing: '4px',
		lineHeight: '60px',
		color: '#fff',
		marginBottom: '30px',
	},
	smallTitle:{
		textAlign: 'center',
		fontSize: '25px',
		letterSpacing: '4px',
		lineHeight: '60px',
		color: '#fff',
		marginBottom: '10px',
	},
	subTitle: {
		fontSize: '30px',
		margin: '0px',
		color: '#fff',
		textShadow: '#C8C8C8 1px 1px 2px',
		textAlign: 'center',
		lineHeight: '30px',
	},
	smallSubTitle: {
		fontSize: '19px',
		margin: '0px',
		color: '#fff',
		textShadow: '#C8C8C8 1px 1px 2px',
		textAlign: 'center',
		lineHeight: '30px',
	}
};
