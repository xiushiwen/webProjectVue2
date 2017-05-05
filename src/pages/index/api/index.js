// import axios from 'axios';

export default {
  getHotNews (query, callback) {
    // axios.get('http://mt-api.flight.test.sankuai.com/getfeeandrefundamount/iphone/4/kxmb_mt/?orderid=11917032315057337679632&deviceid=ios-xion3pqgs8q&dptoken=&mttoken=zXdysdfu16xmKEgZwkpFmN88Q_UAAAAAmwIAAIILHsE4htjBmWhKFAo3QH-BWR2LZIIaMKzklWJ4uBERGzdnXjxzznoCuXS_NwsHWw&userid=29051981&uuid=5BF99559AFD83E6796B00920CE3868A4751331A8F178BFF398A64145331D4BD5&login=').then(function (response) {
    //   const data = response.data;
    //   callback({
    //     code: data.apiCode,
    //     data: data.data || {},
    //     notice: data.msg || ''
    //   });
    // }, function (response) {
    //   callback({
    //     code: 0,
    //     data: {},
    //     notice: '网络异常'
    //   });
    // });
    callback({
      code: 0,
      data: [{
        title: '测试测测测错错错错错错错错错错错错错错'
      }, {
        title: '测试测测测错错错错错错错错错错错错错错2'
      }, {
        title: '测试测测测错错错错错错错错错错错错错错3'
      }],
      notice: query
    });
  }
};
