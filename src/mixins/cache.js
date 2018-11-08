import storage from 'good-storage';
import config from '@/config';

class cache {
    constructor(key, session) {
        this.key = key;
        if (session) {
            this.storage = storage.session;
        } else {
            this.storage = storage;
        }
    }

    get(key, defaultValue = null) {

        return this.storage.get(this.key + key, defaultValue);
    }
    set(key, value) {
        this.storage.set(this.key + key, value);
    }
}

export default new cache(config.cachePre);
