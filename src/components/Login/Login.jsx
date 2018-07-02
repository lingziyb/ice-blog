import React, { Component } from 'react';
import './Login.scss';
import { Input, Button } from '@icedesign/base';
import UserService from '../../service/user';
import Tip from '../../components/Tip';

export default class Login extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			username: '',
			password: '',
			isShowTip: false,
			tipVal: '提示'
		};
	}

	prevent( e ) {
		e.stopPropagation();
		e.preventDefault();
	}

	async login() {
		const { username, password } = this.state;
		if ( !username || !password ) {
			this.setState( { isShowTip: true, tipVal: '请填写完整' } );
			setTimeout( () => {
				this.setState( { isShowTip: false } );
			}, 1500 );
		}

		const res = await UserService.Login( { username, password } );
		this.setState( { isShowTip: true, tipVal: res.msg } );
		setTimeout( () => {
			this.setState( { isShowTip: false } );
			if ( res.status == 200 ) this.props.closeLogin();
		}, 1500 );
	}

	loginByEnter( e ) {
		if ( e.key == 'Enter' ) this.login();
	}

	render() {
		if ( this.props.visible ) {
			return (
				<div className="login-page" onClick={this.props.closeLogin}>
					<Tip title={this.state.tipVal} visible={this.state.isShowTip}></Tip>

					<div className="box" onClick={this.prevent.bind( this )}>
						<div className="l">
							<h2>签名</h2>

							<Input trim size="large" placeholder="用户名" value={this.state.username}
								   onChange={value => {
									   this.setState( { username: value } )
								   }}
							/>
							<Input trim size="large" placeholder="密码" htmlType="password"
								   value={this.state.password}
								   onChange={value => {
									   this.setState( { password: value } )
								   }}
								   onKeyDown={this.loginByEnter.bind( this )}
							/>

							<Button size="large" onClick={this.login.bind( this )}>登录</Button>
						</div>
						<div className="r">
							<span className="top top-1"></span>
							<span className="top top-2"></span>
							<span className="top top-3"></span>
							<span className="top top-4"></span>
							<span className="top top-5"></span>
							L
							<span className="bot bot-1"></span>
							<span className="bot bot-2"></span>
							<span className="bot bot-3"></span>
							<span className="bot bot-4"></span>
						</div>
					</div>
				</div>
			);
		} else {
			return ('');
		}

	}
}
