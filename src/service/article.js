import axios from 'axios';

export default {
	async List(){
		return await axios( 'http://127.0.0.1:7001' ).then( res => res.data.data );
	},

	async Publish( formData ){
		return await axios.post( 'http://127.0.0.1:7001/publish', formData ).then( res => res.data );
	},

	async GetDetail( id ){
		return await axios.post( 'http://127.0.0.1:7001/getDetail', { id } ).then( res => res.data.data );
	},

	async Edit( id ){
		return await axios.post( 'http://127.0.0.1:7001/editArticle', { id } ).then( res => res.data );
	},

	async Remove( id ){
		return await axios.post( 'http://127.0.0.1:7001/removeArticle', { id } ).then( res => res.data );
	}
};