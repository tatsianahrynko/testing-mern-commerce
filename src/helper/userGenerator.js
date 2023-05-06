import { faker } from '@faker-js/faker';
//const { faker } = require('@faker-js/faker');

const randomUser = () => {
    return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        password: 'Password1'
    };
};
const randomaddress = () => {
    return {

        isDefault: false,
        street: faker.address.streetAddress(),
        city: faker.address.city(),
        state: faker.address.state(),
        country: 'USA',
        zipCode: faker.address.zipCode(),         
    };
};

export default { randomUser, randomaddress };
//module.exports = { randomUser, randomaddress };       
        
        