/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Albums',
      [
        {
          title: 'leto',
          count: 0,
          isOpen: true,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'Zima',
          count: 0,
          isOpen: true,
          userID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'vesna',
          count: 0,
          isOpen: true,
          userID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Albums', null, {});
  },
};
