import axios from 'axios';

export default {
	async List(){
		return await axios( '/api/getList' ).then( res => res.data.data );
	},

	async Publish( formData ){
		return await axios.post( '/api/publish', formData ).then( res => res.data );
	},

	async GetDetail( id ){
		return await axios.post( '/api/getDetail', { id } ).then( res => res.data.data );
	},

	async Edit( formData ){
		return await axios.post( '/api/editArticle', formData ).then( res => res.data );
	},

	async Remove( id ){
		return await axios.post( '/api/removeArticle', { id } ).then( res => res.data );
	}
};