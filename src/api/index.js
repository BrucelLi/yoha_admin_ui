/**
 * 接口地址
 */
import config from '@/config';
let urlPre = config.apiUrl;
export default {
    'test':{
        'send':urlPre + "/admin/test"
    },
    'login':{
        'captcha': urlPre + "/admin/captcha",
        'reg': urlPre + "/admin/reg"
    },
}
