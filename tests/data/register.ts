import { faker } from "@faker-js/faker";

const firstName = faker.person.firstName();
const lastName = faker.person.lastName();
export const userName = faker.internet.userName({ firstName: firstName, lastName: lastName });
export const password = faker.internet.password();

export const RegisterUserData = {
    firstName: firstName,
    lastName: lastName,
    address: faker.location.streetAddress(),
    city: faker.location.city(),
    state: faker.location.state(),
    zipCode: faker.location.zipCode(),
    phoneNo: faker.phone.number(),
    ssn: "SN-123",
    userName: userName,
    password: password,
    confirm: password
}