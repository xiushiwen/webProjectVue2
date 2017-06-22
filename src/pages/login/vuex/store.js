import Vue from 'vue';
import Vuex from 'vuex';
import login from './modules/login';
import actions from './actions';
import createLogger from 'vuex/dist/logger';

Vue.use(Vuex);
Vue.config.debug = true;

const debug = process.env.NODE_ENV !== 'production';

export default new Vuex.Store({
    actions,
    modules: {
        login
    },
    strict: debug,
    plugins: debug ? [createLogger()] : []
});
