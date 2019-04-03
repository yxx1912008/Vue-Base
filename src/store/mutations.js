/**
 *mutations数据处理 
 */
import {
	SET_INDEX_BANNER,
	SET_WILL_BRING,
	SET_LIVE_GOODS,
	SET_GOOD_DETAIL,
	UPDATE_LIVE_GOODS,
	SET_GOOD_DESC
} from './mutation-types.js'

export default {

	[SET_INDEX_BANNER](state, list) { //设置首页海报列表
		state.topBanners = list;
	},


}
