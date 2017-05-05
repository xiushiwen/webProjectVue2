/* eslint-disable no-invalid-this */
import qs from 'querystring';

(function (self) {
  let params = qs.parse(location.search.slice(1));

  self.HFE_FLIGHT = {
    is_h5: params.h5_source === 'tmc', // 目前差旅需要使用网页版
    source: params.h5_source || 'dianping',
    tmc_url: location.protocol + '//jiudian.meituan.com/',
    old_url: 'https://i.meituan.com/awp/hfe/hfe-i-flight/',
    api_url_prefix: 'https://api-m.kuxun.cn/',
    api_url_inter_prefix: 'https://iflight.meituan.com/',
    api_cites: 'https://iflight.meituan.com/inter/city/all',
    api_holiday_price: 'https://api-m.kuxun.cn/getLowPriceCalendar/',
    order_detail_url: 'https://i.meituan.com/awp/hfe/hfe-dianping-flight/order-detail/index.html',
    special_flight: 'https://dianpingm.kuxun.cn/plane-speciallist.html',
    user_order: 'https://dianpingm.kuxun.cn/user-order.html',
    voucher: 'https://i.meituan.com/awp/h5/traffic/voucher/index.html',
    user_login_url: 'https://dianpingm.kuxun.cn/',
    inter_order_detail_url: 'https://iflight.meituan.com',
    api_url_valid_ticket: 'https://mt-api.kuxun.cn/',
    api_order_detail: 'https://mt-api.kuxun.cn/',
    tmc_fe_url: location.protocol + '//awp.meituan.com/h5/biz-trip/',
    kf_url: location.protocol + '//kf.dianping.com/',
    all_card_type: {
      '0': '身份证',
      '1': '护照',
      '6': '其他'
    },
    inter_planesizes: {
      1: '大型机',
      2: '中型机',
      3: '小型机'
    },
    all_inter_card_type: {
      '1': '护照',
      '2': '港澳通行证',
      '3': '台湾通行证',
      '4': '台胞证',
      '5': '回乡证',
      '6': '国际海员证'
    },
    invoice_types: {
      1: '行程单+保险发票',
      2: '行程单',
      3: '不提供行程单',
      4: '保险发票'
    },
    rare_chinese: ['兀', '嗀', '﨎', '﨏', '﨑', '﨓', '﨔', '礼', '﨟', '蘒', '﨡', '﨣', '﨤', '﨧', '﨨', '﨩'],
    allowTicketNum: ['999', '876', '811', '866', '731', '784', '781', '859', '895', '826', '836', '987', '898', '929', '088', '856', '902', '389', '878', '018', '822', '324', '774', '479', '880', '847', '833', '089', '891', '893', '938', '912', '299', '886', '872', '871', '661', '989', '856', '389', '730', '666']
  };
})(typeof window !== 'undefined' ? window : this);
