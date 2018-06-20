import React, {Component} from 'react';
import {Input, Balloon, Icon} from '@icedesign/base';
import Menu from '@icedesign/menu';
import Logo from '../Logo';
import './Header.scss';
import {Link} from 'react-router-dom'

const MENUS = [
	{
		name: '发布',
		path: '/publish',
	},
	{
		name: '文档',
		path: '/ice/docs',
	},
	{
		name: '工具',
		children: [
			{
				name: 'ICEWORKS',
				path: '/ice/iceworks',
			},
			{
				name: 'Playground',
				path: '/ice/playground',
			},
		],
	}
];

export default class Header extends Component {
	renderBalloonContent = (menu) => {
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
					{menu.children.map((subMenu) => {
						return (
							<a href="#" className="custom-sub-menu">
								{subMenu.name}
							</a>
						);
					})}
				</Balloon>
			</Menu.Item>
		);
	};

	renderMenuItem = () => {
		return MENUS.map((menu) => {
			if (menu.children) {
				return this.renderBalloonContent(menu);
			}
			return (
				<Menu.Item key={menu.path}>
					<Link to={menu.path}>{menu.name}</Link>
				</Menu.Item>
			);
		});
	};

	render() {
		return (
			<div className="header-container">
				<div className="header-content">
					<Logo />
					<div className="header-navbar">
						<div className="header-search-input">
							<Input placeholder="全局搜索"/>
						</div>
						<Menu className="header-navbar-menu" mode="horizontal">
							{this.renderMenuItem()}
						</Menu>
					</div>
				</div>
			</div>
		);
	}
}
