import {GET_HOT_NEWS} from '../mutation_types';

const state = {
  isLoaded: true,
  code: '',
  notice: '',
  news: []
};

const mutations = {
  [GET_HOT_NEWS]: function (_state, news) {
    console.log(news);
    _state.news = news.data;
  }
};

export default {
  state,
  mutations
};
