/* eslint-disable no-invalid-this */
import qs from 'querystring';

(function (self) {
    let params = qs.parse(location.search.slice(1));

    self.HFE_FLIGHT = {
        is_h5: params.h5_source === 'tmc'
    };
})(typeof window !== 'undefined' ? window : this);
