const bcrypt = require('bcrypt');

const hashedPassword = bcrypt.hashSync('password', 10);

module.exports = {
  up: (queryInterface) => {
    const objects = {
      email: 'trailblaizer34@gmail.com',
      username: 'akugbeoncode',
      password: hashedPassword,
      lastname: 'Ode',
      firstname: 'Akugbe',
      sex: 'male',
      role: 'super user',
      createdAt: new Date(),
      updatedAt: new Date()
    };
    queryInterface.bulkInsert('Users', [objects], {});
    // console.log('===============>', objects);
  },
  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
