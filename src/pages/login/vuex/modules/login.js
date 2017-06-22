import {DO_LOGIN, UPDATE_INFO} from '../mutation_types';

const state = {
    isLoaded: true,
    code: '',
    notice: '',
    news: [],
    operate: 1, // 1为登陆 2为注册
    loginType: 'user' // user用户登陆, message短信登陆
};

const mutations = {
    [DO_LOGIN]: function (_state, news) {
        console.log(news);
        _state.news = news.data;
    },
    [UPDATE_INFO]: function (_state, info) {
        _state[info.name] = info.val;
    }
};

export default {
    state,
    mutations
};
