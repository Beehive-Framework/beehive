const inlineCodeMini = require('@xes/inline-code-mini/inline-code-mini');

export function initInlineCode() {
  return inlineCodeMini({
    template: './index.html',
    filename: 'index.html',
    eventid: 'pangu_oa_web',
    routerMode: 'hash',
    pwa: false, // 是否使用serviceWorker
    hasLog: true, // 默认人true 含有inline 日志上报功能,false为不含有.
    domainNamePool: [
      {
        reg: /^static/,
        domains: getDomainNamePool()
      }
    ]
  })
}

const getDomainNamePool = () => {
  const environment = getEnvironment();
  if (['prod', 'grey-test'].indexOf(environment) !== -1) {
    return [
      'static0.xesimg.com',
      'static1.xesimg.com',
      'static2.xesimg.com',
      'static3.xesimg.com',
      'static4.xesimg.com',
      'static5.xesimg.com',
      'static6.xesimg.com',
      'static7.xesimg.com',
      'static8.xesimg.com',
      'static9.xesimg.com',
      'static10.xesimg.com'];
  } else if (environment === 'dev-test') {
    return [
      'static0-test.xesimg.com',
      'static1-test.xesimg.com',
      'static2-test.xesimg.com',
      'static3-test.xesimg.com',
      'static4-test.xesimg.com',
      'static5-test.xesimg.com',
      'static6-test.xesimg.com',
      'static7-test.xesimg.com',
      'static8-test.xesimg.com',
      'static9-test.xesimg.com',
      'static10-test.xesimg.com'];
  }
  return [];
};

const getEnvironment = function () {
  const nodeDev = process.env.NODE_ENV;
  const dpDev = process.env.DP_ENV;
  if (nodeDev === 'production' && dpDev === 'prod') {
    // 线上正式环境
    return 'prod';
  } else if(nodeDev === 'production' && dpDev === 'grey')  {
    console.warn('env', 'MODE_ENV:', nodeDev, '| DP_ENV:', dpDev);
    return 'grey-test';
  } else if(nodeDev === 'production' && dpDev === 'test')  {
    console.warn('env', 'MODE_ENV:', nodeDev, '| DP_ENV:', dpDev);
    return 'dev-test';
  } else {
    return 'dev';
  }
};
