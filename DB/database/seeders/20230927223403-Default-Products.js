'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', [
      {
        categoryId: 1,
        name_EN: 'Apple',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/1',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        categoryId: 1,
        name_EN: 'Broccoli',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/3',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        categoryId: 1,
        name_EN: 'Cucumber',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/4',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        categoryId: 1,
        name_EN: 'Tomato',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/5',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        categoryId: 1,
        name_EN: 'Spinach',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/6',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        categoryId: 1,
        name_EN: 'Onion',
        name_HE: '',
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        imageURL: 'products/7',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
