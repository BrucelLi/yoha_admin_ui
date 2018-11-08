import config from '../config';
import storage from 'good-storage';

export default {
    methods: {
        /**
         * 返回时间
         * @param fmt
         * @returns {*}
         */
        formatDate(fmt) {
            let date = new Date();
            if (/(y+)/.test(fmt)) {
                fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
            }
            let o = {
                'm+': date.getMonth() + 1,
                'd+': date.getDate(),
                'h+': date.getHours(),
                'i+': date.getMinutes(),
                's+': date.getSeconds()
            };
            for (let k in o) {
                if (new RegExp(`(${k})`).test(fmt)) {
                    let str = o[k] + '';
                    fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : this.padLeftZero(str));
                }
            }
            return fmt;
        },
        padLeftZero(str) {
            return ('00' + str).substr(str.length);
        },

        /**
         * 路由跳转函数
         * @param path
         * @param type 跳转方式, false: 内部路由, true: 外部url
         * @param replace 是否记录历史记录, false: 记录, true: 不记录
         */
        jump(path, type = false, replace = false) {
            if (typeof path === 'object') {
                if (replace) {
                    console.log('replace');
                    this.$router.replace(path)
                } else {
                    console.log('push');
                    this.$router.push(path)
                }
            } else {
                if (type) {
                    if (replace) {
                        window.location.replace(path)
                    } else {
                        window.location.href = path
                    }
                } else {
                    // 因为线上多目录的问题,在这里统一添加一个路由前缀
                    if (path.indexOf('/') === 0) {
                        path = `${config.routePrefix}${path}`
                    } else {
                        path = `${config.routePrefix}/${path}`
                    }
                    if (replace) {
                        console.log('replace');
                        this.$router.replace(path)
                    } else {
                        console.log('push');
                        this.$router.push(path)
                    }
                }
            }
        },
        /**
         * 拨打电话
         * @param phoneNumber
         */
        call(phoneNumber) {
            if (!phoneNumber) {
                this.$auxiliary.toast('未找到电话号码!');
                return false
            }
            window.location.href = 'tel://' + phoneNumber
        },
        /**
         * 获取缓存
         * @param key
         * @param defaultValue
         * @returns {*}
         */
        getCache(key, defaultValue = null) {
            let cacheKey = config.cachePre + key;
            return storage.get(cacheKey, defaultValue)
        },
        /**
         * 设置缓存
         * @param key
         * @param value
         * @returns {*}
         */
        setCache(key, value) {
            let cacheKey = config.cachePre + key;
            return storage.set(cacheKey, value)
        },
        /**
         * 获取session缓存
         * @param key
         * @param defaultValue
         * @returns {*}
         */
        getSessionCache(key, defaultValue = null) {
            let cacheKey = config.cachePre + key;
            return storage.session.get(cacheKey, value)
        },
        /**
         * 设置session缓存
         * @param key
         * @param value
         * @returns {*}
         */
        setSessionCache(key, value) {
            let cacheKey = config.cachePre + key;
            return storage.session.set(cacheKey, value)
        }
    }
}