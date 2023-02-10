const { User } = require('../models');

// creating user data
const userData = [
  {
    userName: "blogger",
    email: "blogger@gmail.com",
    password: "password1"
  },
  {
    userName: "expert",
    email: "expert@gmail.com",
    password: "password2"
  },
  {
    userName: "user",
    email: "user@gmail.com",
    password: "password3"
  },
  {
    userName: "visitor",
    email: "avisitor@gmail.com",
    password: "password4"
  },
  {
    userName: "guest",
    email: "guest@gmail.com",
    password: "password5"
  },
  {
    userName: "profy",
    email: "profy@gmail.com",
    password: "password6"
  }

]

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;