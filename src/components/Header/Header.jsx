import React, { Component } from 'react';
import { Input, Balloon, Icon, Button } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';
import Login from '../Login';
import UserService from '../../service/user';

export default class Header extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			isOpenLogin: false,
		};
	}

	toLogin() {
		this.setState( {
			isOpenLogin: true
		} );
	}

	async closeLogin() {
		this.setState( { isOpenLogin: false } );
		const user = await UserService.GetUserInfo();
		if ( user.status == 200 ) this.props.setUser( user.data );
	}

	toPublish() {
		this.props.history.push( '/publish' );
	}

	async logout() {
		const res = await UserService.Logout();
		if ( res.status == 200 ) this.props.setUser( {} );
	}

	renderMenuItem = () => {
		if ( !this.props.user.userId ) {
			return (
				<Menu.Item>
					<div onClick={this.toLogin.bind( this )}>登录</div>
				</Menu.Item>
			);
		} else {
			return (
				<Menu.Item>
					<Balloon
						className="header-balloon-content"
						closable={false}
						triggerType="click"
						trigger={
							<a>
								{this.props.user.username}
								<Icon
									size="xxs"
									type="arrow-down-filling"
									className="arrow-down-filling-icon"
								/>
							</a>
						}>
						<a href="javascript:void(0)" className="custom-sub-menu" onClick={this.toPublish.bind( this )}>发布</a>
						<a href="javascript:void(0)" className="custom-sub-menu"
						   onClick={this.logout.bind( this )}>退出</a>
					</Balloon>
				</Menu.Item>
			)
		}
	};

	render() {
		return (
			<div className="header-container">
				<div className="header-content">
					<Logo />
					<div className="header-navbar">
						<Menu className="header-navbar-menu" mode="horizontal">
							{this.renderMenuItem()}
						</Menu>
					</div>
				</div>

				<Login visible={this.state.isOpenLogin}
					   closeLogin={this.closeLogin.bind( this )}></Login>
			</div>
		);
	}
}
