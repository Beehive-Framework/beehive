import ajax from '../utils/ajax';


export async function zhiyinlouLogin (ctx) {
    const bigFishUrl = 'https://app.xesv5.com/bigfish/v1/get/userInfo'
    const SSO_URL = ctx.opts.ssoUrl || bigFishUrl;
    const ssoToken = location.href.query.token;
  // return ajax.post(SSO_URL, {token}, {headers: {isHideErrorTips: 1, isHideTips: 1}});
   const await res = ajax.post(SSO_URL, {token}, {headers: {isHideTips: 1}});
}

token: this.$route.query.token || ''