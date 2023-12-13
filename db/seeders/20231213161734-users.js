const bcrypt = require('bcrypt');
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Users',
      [
        {
          name: 'Rost',
          mail: '1@2345',
          password: await bcrypt.hash('1', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Pasha',
          mail: '1@234',
          password: await bcrypt.hash('1', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          name: 'Vitya',
          mail: '1@23',
          password: await bcrypt.hash('1', 10),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
