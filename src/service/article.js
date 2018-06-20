import axios from 'axios';

export default {
	async List(){
		return await axios( 'http://127.0.0.1:7001' ).then( res => res.data.data );
	},

	async Publish( formData ){
		return await axios.post( 'http://127.0.0.1:7001/publish', formData ).then( res => res.data );
	}
};