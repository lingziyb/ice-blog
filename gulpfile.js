const gulp = require( 'gulp' );
const sftp = require( 'gulp-sftp' );

// 服务器上的nginx静态文件目录： /usr/share/nginx/
gulp.task( 'upload', function ( callback ) {
	console.log( 22, process.env );
	console.log( 33, process.env.SSH_USER );
	console.log( 44, process.env.SSH_PASSWORD );

	return gulp.src( 'build/**/*' ).pipe(
		sftp( {
			host: '39.106.114.29',
			user: process.env.SSH_USER,
			pass: process.env.SSH_PASSWORD,
			port: 22,
			remotePath: '/usr/share/nginx/html/ice-blog/'
		} )
	);
} );
