const { User } = require('../models');

const userData = [
    {
        "username": "Lela",
        "email": "lela@gmail.com",
        "password": "password12345"
    },
    {
        "username": "Nate",
        "email": "nate@gmail.com",
        "password": "password23456"
    },
    {
        "username": "Shari",
        "email": "shari@gmail.com",
        "password": "password34567"
    },
    {
        "username": "Jay",
        "email": "jay@gmail.com",
        "password": "password45678"
    }
]

const seedUsers = () => User.bulkCreate(userData, {individualHooks: true, returning: true});

module.exports = seedUsers;
