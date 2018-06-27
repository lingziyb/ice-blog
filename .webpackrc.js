const proxyTarget = 'http://127.0.0.1:7001';

module.exports = {
	devServer: {
		proxy: {
			'/**': {
				target: proxyTarget,
				changeOrigin: true,
				bypass: function ( req, res, proxyOpt ) {
					res.set( 'X-ICE-PROXY', 'on' );
					res.set( 'X-ICE-PROXY-BY', proxyTarget );
				},
			}
		}
	}
};