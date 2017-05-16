// Adding the Sequelize module in order to create tables in our database

var Sequelize = require('sequelize');

var connection = new Sequelize('makersbnb', 'baileykursar', 'elephant', {
  dialect: 'postgres'
});

var User = connection.define('user', {
  name:     Sequelize.STRING,
  email:    Sequelize.STRING,
  password: Sequelize.STRING
});

connection.sync().then(function () {
  User.create({
    name:     'Bailey',
    email:    'fake@email.com',
    password: 'password',
  });
});

// connection.sync().then(function () {
//   User.findById(1).then(function(user) {
//     console.log(user.dataValues);
//   })
// })
//
// connection.sync().then(function () {
//   User.findAll().then(function(users) {
//     console.log(users.length);
//   })
// })
