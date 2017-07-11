/* eslint-disable no-invalid-this */
import qs from 'querystring';

(function (self) {
    let params = qs.parse(location.search.slice(1));

    self.GLOBALS_LOGIN = {
        is_h5: Boolean(params.h5),
        from_page: params.fromPage
    };
})(typeof window !== 'undefined' ? window : this);
