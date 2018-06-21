import React, { Component } from 'react';
import './Login.scss';
import { Input } from '@icedesign/base';

export default class Login extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			// visible: false
		};
	}

	render() {
		if ( this.props.visible ) {
			return (
				<div className="login-page" onClick={this.props.closeLogin}>
					<div className="box">
						<div className="l">
							<span>签名</span>
							<Input trim size="large" placeholder="Large"/>
							<Input trim htmlType="password" size="large" defaultValue="abcd"/>
						</div>
						<div className="r"></div>
					</div>
				</div>
			);
		} else {
			return ('');
		}

	}
}
