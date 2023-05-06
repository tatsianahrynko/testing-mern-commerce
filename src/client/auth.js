import superagent from 'superagent';
//const superagent = require('superagent');

const baseUrl = 'https://mern-ecommerce.sdet.school/api';

/**
 * Adding address to user
 * @param {object} opts - parans passed in
 * @param {string} opts.email - user's email
 * @param {string} opts.password- user's password
 * @returns {Promise<object>}
 */

export const login = async (opts) => {

    if(opts.email === null || opts.password === null) {
        throw new Error('login: required param not passed');        
    }
    const body = {
        email: opts.email,
        password: opts.password
    };
    return superagent.post(baseUrl + '/auth/login').send(body);
};
/**
 * Adding address to user
 * 
 * @param {object} userInfo - parans passed in
 * @param {boolean} [userInfo.isSubscribed] - false by default
 * @param {string} userInfo.email - user's email
 * @param {string} userInfo.firstName - first name
 * @param {string} userInfo.lastName - last name 
 * @param {string} userInfo.password - user's password
 * 
 * @returns {Promise<object>}
 */

export const register = (userInfo) => {
    return superagent.post(baseUrl + '/auth/register').send(userInfo);
};

//export default { login, register };
//module.exports = { login, register };
