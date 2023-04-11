const superagent = require('superagent');

const baseUrl = "https://mern-ecommerce.sdet.school/api";

describe("Test address endpoints", ()=> {
    let token;
    beforeEach(async ()=> {
        // Login as  Olsen  X
        const reqBody = {
            email: "Olsen.X@gmail.com",
            password: "Password1"
          }
          try {
            const response = await superagent.post(baseUrl+"/auth/login").send(reqBody);
            token = response.body.token;
          } catch (error) {
            console.log("catch?")
            console.error(error.message);
          }
    });
    
    it("should run test",()=>{
        console.log(token);
    })
});