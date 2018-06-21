import React, { Component } from 'react';
import './Login.scss';

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
					login
				</div>
			);
		} else {
			return ('');
		}

	}
}
