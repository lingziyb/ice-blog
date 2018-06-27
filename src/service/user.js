import axios from 'axios';

export default {
	async Login( { username, password } ){
		return await axios.post( '/login', { username, password } ).then( res => res.data );
	},

	async GetUserInfo(){
		return await axios.post( '/getUserInfo' ).then( res => res.data );
	},

	async Logout(){
		return await axios.post( '/logout' ).then( res => res.data );
	},
};