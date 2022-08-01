const faker = require("faker");
const express = require("express");
const app = express();
const port = 8000;

const generateUser = () => ({
  _id: faker.datatype.uuid(),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  phoneNumber: faker.phone.phoneNumber(),
  email: faker.internet.email(),
  password: faker.internet.password(),
});

const generateCompany = () => ({
  _id: faker.datatype.uuid(),
  name: faker.company.companyName(),
  address: {
    street: faker.address.streetAddress(),
    city: faker.address.cityName(),
    state: faker.address.state(),
    zipcode: faker.address.zipCode(),
    country: faker.address.country(),
  },

});

// make sure these lines are above any app.get or app.post code blocks
// Allows us to access POST data
app.use( express.json() );
app.use( express.urlencoded({ extended: true }) );

// Route for generating a new user
app.get("/api/users/new", (req, res) => {
  const newUser = generateUser();
  res.json(newUser);
});

// Route for generating a new company
app.get("/api/companies/new", (req, res) => {
  const newCompany = generateCompany();
  res.json(newCompany);
});

//Route for generating a new user and company
app.get("/api/user/company", (req,res) => {
  const newUser = generateUser();
  const newCompany = generateCompany();
  // Taking the new User and the new Company, and returning an object with each of those values in it.
  const returnResults = {
    user: newUser,
    company: newCompany,
  };
  res.json(returnResults);
});

// this needs to be below the other code blocks
app.listen( port, () => console.log(`Listening on port: ${port}`) );