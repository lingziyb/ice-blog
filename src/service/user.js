import axios from 'axios';

export default {
	async Login( { username, password } ){
		return await axios.post( '/api/login', { username, password } ).then( res => res.data );
	},

	async GetUserInfo(){
		return await axios.post( '/api/getUserInfo' ).then( res => res.data );
	},

	async Logout(){
		return await axios.post( '/api/logout' ).then( res => res.data );
	},
};