import React from 'react';
import Logo from '../Logo';

export default () => {
	return (
		<div
			style={{
				margin: '0 auto',
				textAlign: 'center',
				lineHeight: '36px',
				display: 'flex',
				alignItems: 'center',
				justifyContent: 'space-between',
				padding: '10px'
			}}
		>
			<div style={{filter: 'grayscale(100%)', opacity: 0.8}}>
				<Logo isDark/>
			</div>
			<div
				style={{
					color: '#999',
					lineHeight: 1.5,
					fontSize: 12,
					textAlign: 'right',
				}}
			>
				© 2018 版权所有
			</div>
		</div>
	);
};
