export default class JsonHandler {
    constructor(config, key = 'key', value = 'value') {
        this.config = config;
        this.key = key;
        this.value = value;
    }
    /**
     * 获取格式化后的JSON数据
     * @param {*} keyword 
     * @param {*} key 
     * @param {*} value 
     */
    get(keyword, key = 'value', value = 'text') {
        let res = this.config[keyword];
        if (key == this.key && value == this.value) {
            return res;
        }
        let new_res = [];
        for (let obj of res) {
            let item = {};
            item[key] = obj[this.key];
            item[value] = obj[this.value];
            new_res.push(item);
        }
        return new_res;
    }
    /**
     * 通过key获取value
     * @param keyword
     * @param key
     * @returns {*}
     */
    val(keyword, key) {
        let value;
        for (let obj of this.config[keyword]) {
            if (obj[this.key] == key) {
                value = obj[this.value];
                break;
            }
        }
        return value;
    }
    /**
     * 通过value获取key
     * @param keyword
     * @param value
     * @returns {*}
     */
    key(keyword, value) {
        let key;
        for (let obj of this.config[keyword]) {
            if (obj[this.value] == value) {
                key = obj[this.key];
                break;
            }
        }
        return key;
    }
}