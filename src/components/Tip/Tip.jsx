import React, { Component } from 'react';
import { Notice } from '@icedesign/base';
import './Tip.scss';

export default class Tip extends Component {

	constructor( props ) {
		super( props );
	}

	render() {
		return (
			<div className="c-tip">
				<Notice className="notice" title={this.props.title} iconType="success"
						visible={this.props.visible}></Notice>
			</div>
		);
	}
}
