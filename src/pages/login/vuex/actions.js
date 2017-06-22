import * as types from './mutation_types';
import login from '../api/login';

export default {
    doLogin ({commit}, query) {
        login.doLogin(Object.assign({}, query), (data) => {
            commit(types.DO_LOGIN, data);
        });
    },
    updateInfo ({commit}, info) {
        commit(types.UPDATE_INFO, info);
    }
};
