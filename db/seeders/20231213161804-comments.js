/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Comments',
      [
        {
          text: 'krasota kakaya',
          userID: 1,
          photoID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'krasotaaaaaaa',
          userID: 2,
          photoID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          text: 'krasivo ochen',
          userID: 3,
          photoID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Comments', null, {});
  },
};
