const chai = require('chai'); //imported chai
const chaiSubset = require('chai-subset');
chai.use(chaiSubset);
const expect =  chai.expect;
const casual = require('casual'); 
const { url } = require('inspector');
const superagent = require('superagent');

const baseUrl = "https://mern-ecommerce.sdet.school/api"

describe("Test address endpoints", ()=> {
    let token; //token now undefined
    beforeEach(async ()=> {    
        
        const reqBody = {
            email: "tatianautest@gmail.com",
            password: "qwEsz_123"
          }
          try {
            const response = await superagent.post(baseUrl + "/auth/login").send(reqBody);
            token = (response.body.token);
          }catch (error) {
            console.log("catch?")
            console.error(error.message);
          }
    });
    it("should add address to user", async ()=>{
      // const street = casual.street;
      // const city = casual.city;
      //const state = casual.state
      const {street , city, state} = casual; //distructors
      const zip =  casual.zip(5);

        const addressOpt = { //request body
          isDefault: true,
          address: street,
          city: city,
          state: state,
          country: "US",
          zipCode: zip
}
//console.log("addressOpt", addressOpt);
let response; // to make it visible outside
//making a call
try {
  response = await superagent.post(baseUrl+"/address/add")
  .set({
    Authorization: token
  })
  .send(addressOpt)
   
}catch(err){
  console.log(err.message)
}
//console.log(response.body)
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
})
    })
});