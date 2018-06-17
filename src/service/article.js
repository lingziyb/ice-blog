import axios from 'axios';

export default {
	async list(){
		return await axios('http://127.0.0.1:7001/list').then(res => res.data);
	}
};