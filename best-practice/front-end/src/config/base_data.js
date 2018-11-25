/**
 * 配置数据
 * @type {{sex: *[], user_type: *[], user_state: *[], auth_type: *[], role_state: *[]}}
 */
const config = require('../../static/basedata.json');


/**
 * 通过Key获取配置数据
 * @param key,[key],[value]
 * @returns array
 *
 */
const get = (keyword,key='value',value='text') => {
    let res = config[keyword];
    if (key == 'key' && value == 'value'){
        return res;
    }
    let new_res = [];
    for (let obj of res) {
        let item = {};
        item[key] = obj.key;

        item[value] = obj.value;
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
const val = (keyword,key) => {
    let value;
    for (let obj of config[keyword]) {
        if (obj.key == key){
            value = obj.value;
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
const key = (keyword,value) => {
    let key;
    for (let obj of config[keyword]) {
        if (obj.value == value){
            key = obj.key;
            break;
        }
    }
    return key;
}

export default {get,val,key};