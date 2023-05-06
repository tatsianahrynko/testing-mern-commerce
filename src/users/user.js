import helper from '../helper/userGenerator.js';
import auth from '../client/auth.js';
import address from '../client/address.js';
// const helper = require('../helper/userGenerator');
// const auth = require('../client/auth');
// const address = require('../client/address');

class User {
    /**
     * Constructor for User class
     * @param {object} opts - params passed in
     * @param {string} opts.email - email
     * @param {string} opts.firstName - first name
     * @param {string} opts.lastName - last name
     * @param {string} opts.password - password
     * @param {string} opts.id - user id
     * @param {string} opts.role - user role
     * @param {string} opts.token - user token 
     */
    constructor(opts={}) {        
        this.email = opts.email;
        this.firstName = opts.firstName;
        this.lastName = opts.lastName;
        this.password = opts.password;
        this.id = opts.id;
        this.role = opts.role;
        this.token = opts.token;
    }
    static async createUser(opts = {}) {
        const randomUser = helper.randomUser();
        const userOpt = {
            email: opts.email ||randomUser.email,            
            firstName: opts.firstName||randomUser.firstName,
            lastName: opts.lastName||randomUser.lastName,
            password: opts.password || randomUser.password
        };
        const resp = await auth.register(userOpt);
        //console.log(resp.body);
        userOpt.id = resp.body.user.id;
        userOpt.role = resp.body.user.role;
        userOpt.token = resp.body.token;
        return new User(userOpt); //'new' operator reserves memory             
    }
    async addAddress(opts = {}) {
        const randomaddress = helper.randomaddress();
        const addressOpts = {
            token: this.token,
            address: {
                isDefault: opts.isDefault || randomaddress.isDefault,
                address: opts.street || randomaddress.street,
                city: opts.city || randomaddress.city,
                state: opts.state || randomaddress.state,
                country: opts.country || randomaddress.country,
                zipCode: opts.zip || randomaddress.zipCode
            }
        }; 
        return address.addAddress(addressOpts);

    }

    /**
 * Get user Order
 */

}
export default { User };
//module.exports = { User };
