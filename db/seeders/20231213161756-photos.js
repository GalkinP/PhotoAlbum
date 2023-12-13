/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert(
      'Photos',
      [
        {
          title: 'улица',
          img: 'https://www.travelto.group/images/blog/1618784111_28-funart_pro-p-nochnoi-sankt-peterburg-krasivie-mesta-fot-31.jpg',
          description: 'kek',
          albumID: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'улица',
          img: 'https://yulatrip.ru/wp-content/uploads/2020/12/piter9.jpg',
          description: 'kek',
          albumID: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: 'улица',
          img: 'https://traveling.by/files/tours/2021/11/d60ca3cdcd6efa7bc6d8a6ee13c16bcf-thumb-600x390-crop.jpg',
          description: 'kek',
          albumID: 3,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Photos', null, {});
  },
};
