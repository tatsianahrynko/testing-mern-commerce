const superagent = require('superagent');


const baseUrl = "https://mern-ecommerce.sdet.school/api";

/**
 * Adding address to user
 * @param {object} opts - parans passed in
 * @param {string} opts.token -user token
 * @param {object} opts.address - user's address
 * @returns {Promise<object>}
 */

const addAddress = async (opts) =>{
    const authHeader = {
        Authorization: opts.token 
    }

    if(opts.token === null) {
        throw new Error("addAddress: token required param");
        
    }
    return superagent.post(baseUrl + "/address/add").set(authHeader).send(opts.address)
}

module.exports = {addAddress};
