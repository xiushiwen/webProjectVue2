import * as types from './mutation_types';
import index from '../api/index';

// 同步获取
export default {
  getHotNews ({commit}, query) {
    index.getHotNews(Object.assign({}, query), (data) => {
      commit(types.GET_HOT_NEWS, data);
    });
  }
};
