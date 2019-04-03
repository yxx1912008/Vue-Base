import {

} from './mutation-types.js'



export default {

	getBanner: async function({
		commit,
		state
	}) { //获取首页海报,
		uni.request({
			url: state.baseUrl + ApiData.banner.url,
			method: 'POST',
			success: function(res) {
				commit(SET_INDEX_BANNER, res.data.data)
			}
		});
	},

}
