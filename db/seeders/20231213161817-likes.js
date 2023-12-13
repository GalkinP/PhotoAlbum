/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Likes',
      [
        {
          plus: '+',
          photoID: 1,
          userID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          plus: '+',
          photoID: 1,
          userID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          plus: '+',
          photoID: 1,
          userID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Likes', null, {});
  },
};
