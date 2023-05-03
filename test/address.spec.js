/* eslint-disable no-undef */
const chai = require('chai'); //imported chai
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect =  chai.expect;
const casual = require('casual'); 
const { url } = require('inspector');
const superagent = require('superagent');
const clientAddress = require('../src/client/address');
const clientAuth = require('../src/client/auth');
const { User } = require('..//src/users/user');

const baseUrl = 'https://mern-ecommerce.sdet.school/api';

// eslint-disable-next-line no-undef
describe.skip('Test address endpoints', () => {
    let token; //token undefined
    beforeEach(async () => {    
        
        const reqBody = {
            // email: "tatianautest@gmail.com",
            // password: "qwEsz_123"
            email: 'Myrtle_Ullrich@gmail.com',
            password: 'Password1'
        };
        try {
            const response = await clientAuth.login(reqBody); 
            token = (response.body.token);
        }catch (error) {
            
            console.error(error.message);
        }
    });

    it('should add address to user', async () => {
      
        const { street, city, state } = casual; //distructors
        const zip =  casual.zip(5);

        const addressOpt = { //request body
            isDefault: true,
            address: street,
            city: city,
            state: state,
            country: 'US',
            zipCode: zip

        };
        let response; // to make it visible outside
        //making a call

        const opts = {
            token,
            address: addressOpt
        };
        //console.log(opts);

        try {
            response = await clientAddress.addAddress(opts);   
        }catch(err) {
            console.log(err.message);
        }
        console.log(response.body);
        expect(response.body).to.containSubset({
            success: true,
            message: 'Address has been added successfully!',
            address: {
                isDefault: true,
                address: street,
                city: city,
                state: state,
                country: 'US',
                zipCode: zip,
                user: '6435b24a3ea9a80035112d6e',
                __v: 0
            }    
        });
    });

    it('should register user', async() => {
        const opts = {
            'email': 'user11111111@email.com',
            'firstName': 'Harold',
            'lastName': 'Olsen',
            'password': 'Password1'        
        };
        let response;
        try {
            response = await clientAuth.register(opts);   
        }catch(err) {
            console.log(err);
        }
        console.log(response);
    });
    it('should create a User', async() => {     
        const user = await User.createUser();
        const addressResponse = await user.addAddress();
        console.log(user);
        console.log(addressResponse.body);
    });      
});