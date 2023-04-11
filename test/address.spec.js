const { url } = require('inspector');
const superagent = require('superagent');

const baseUrl = "https://mern-ecommerce.sdet.school/api"

describe("Test address endpoints", ()=> {
    let token; //token now undefined
    beforeEach(async ()=> {
        
        //login as Tatsiana
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
    it("should run test", ()=>{
        console.log(token);
    })
});