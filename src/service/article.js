import axios from 'axios';

export default {
	async List(){

		// mock时
		// return await axios.get( '/api/getList' ).then( res => res.data );

		// 去除mock
		return await axios.get( '/api/getList' ).then( res => res.data.data );
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