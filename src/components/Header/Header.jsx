import React, { Component } from 'react';
import { Input, Balloon, Icon, Button } from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';
import { Link } from 'react-router-dom';
import Login from '../Login';

const MENUS = [
	{
		name: '登录',
	},
	{
		name: 'lingzi',
		children: [
			{
				name: '发布',
				path: '/publish',
			},
			{
				name: '退出',
				path: '/logout',
			},
		],
	}
];

export default class Header extends Component {

	constructor( props ) {
		super( props );
		this.state = {
			isOpenLogin: false
		};
	}

	toLogin() {
		this.setState( {
			isOpenLogin: true
		} );
	}

	closeLogin() {
		this.setState( {
			isOpenLogin: false
		} );
	}

	renderBalloonContent = ( menu ) => {
		return (
			<Menu.Item>
				<Balloon
					className="header-balloon-content"
					closable={false}
					triggerType="click"
					trigger={
						<a>
							{menu.name}{' '}
							<Icon
								size="xxs"
								type="arrow-down-filling"
								className="arrow-down-filling-icon"
							/>
						</a>
					}
				>
					{menu.children.map( ( subMenu ) => {
						return (
							<a href="#" className="custom-sub-menu">
								{subMenu.name}
							</a>
						);
					} )}
				</Balloon>
				<Login visible={this.state.isOpenLogin} closeLogin={this.closeLogin.bind( this )}></Login>
			</Menu.Item>
		);
	};

	renderMenuItem = () => {
		return MENUS.map( ( menu ) => {
			if ( menu.children ) {
				return this.renderBalloonContent( menu );
			}
			return (
				<Menu.Item key={menu.path}>
					{
						menu.path ? (<Link to={menu.path}>{menu.name}</Link>) : (
								<div onClick={this.toLogin.bind( this )}>{menu.name}</div>)
					}
				</Menu.Item>
			);
		} );
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
			</div>
		);
	}
}
