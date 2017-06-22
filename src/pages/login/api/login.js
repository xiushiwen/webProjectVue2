import axios from 'axios';
import {checkStatus, parseJSON} from 'common/utils';
export default {
    doLogin (query, callback) {
        axios.post('/user', query)
        .then(checkStatus)
        .then(parseJSON)
        .then((info) => {
            callback({
                code: info.code,
                notice: info.notice,
                data: info.data || {}
            });
        }, (response) => {
            callback({
                code: 0,
                notice: '网络异常'
            });
        })
        .catch(function (err) {
            callback({
                code: 0,
                notice: err
            });
        });
    }
};

