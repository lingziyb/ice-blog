import axios from 'axios';

export default {
	async List(){
		return await axios( '/getList' ).then( res => res.data.data );
	},

	async Publish( formData ){
		return await axios.post( '/publish', formData ).then( res => res.data );
	},

	async GetDetail( id ){
		return await axios.post( '/getDetail', { id } ).then( res => res.data.data );
	},

	async Edit( formData ){
		return await axios.post( '/editArticle', formData ).then( res => res.data );
	},

	async Remove( id ){
		return await axios.post( '/removeArticle', { id } ).then( res => res.data );
	}
};