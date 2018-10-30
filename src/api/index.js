/**
 * 接口地址
 */
let urlPre = 'http://yoha-admin.test';
export default {
    'test':{
        'send':urlPre + "/admin/test"
    },
    'login':{
        'captcha': urlPre + "/admin/captcha",
        'reg': urlPre + "/admin/reg"
    },
}
