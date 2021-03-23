import axios from 'axios';
import { message } from 'ant-design-vue';

if (process.env.NODE_ENV !== 'development') {
    const axiosInstance = axios.create({
        timeout: 100000
    });
}

const axiosInstance = axios



const statusCodeMap = {
    '403': '没有权限',
    '404': '该接口不存在',
    '405': '使用了错误的请求方法'
}

const errorCodeMap = {
    '10001': '没有登录: 10001',
    '10002': '参数错误: 10002',
    '10003': '权限不足: 10003'
}


const commonFetch = async (options={}) => {
    const defaultOpts = {
        errorHandler: 'default',
        statusHandler: 'default',
        defaultErrorMessage: '系统错误',
        errorTip: message.error,
        method: 'get'
    }

    const opts = Object.assign(defaultOpts, options);
    opts.onloading && opts.onloading('show');
    const data = await axiosInstance({
        url: opts.url,
        method: opts.method,
        params: opts.params
    }).catch(function (err) {
        /*
         * 请求!=200的情况
         */
        if (opts.statusHandler === 'default') {
            if (statusCodeMap[err.status]) {
                opts.errorTip(statusCodeMap[err.status])
            }
            else {
                opts.errorTip(opts.defaultErrorMessage)
            }

        }
        opts.onerror && opts.onerror(err)
    });

    if (!data || !data.data) {
        return false
    }

    /*
     * 请求==200的情况
     */


    if (data.data.code !== 200) {
        if (opts.errorHandler === 'default') {
            if (errorCodeMap[data.data.code]) {
                opts.errorTip(errorCodeMap[data.data.code])
            }
            else {
                opts.errorTip(opts.defaultErrorMessage)
            }

        }
        opts.onerror && opts.onerror(data.stat)
    }
    else {
        opts.onsuccess && opts.onsuccess(data);
    }
    opts.onloading && opts.onloading('hide');

    return data.data;
}

export default commonFetch