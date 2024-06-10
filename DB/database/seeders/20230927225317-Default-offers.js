'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      {
        unit: 'kg',
        price: 3.5,
        image: 'products/a57e42-600x600_b99quk',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        farmerId: 1,
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 1,
        farmerId: 1,
      },
      {
        unit: 'kg',
        price: 4.0,
        image: 'products/50fb7d-600x600_fgq4qq',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 2,
        farmerId: 1,
      },
      {
        unit: 'kg',
        price: 2.0,
        image: 'products/6_zjlcdk',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 1,
        farmerId: 3,
      },
      {
        unit: 'kg',
        price: 2.5,
        image: 'products/1_xc498g',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 4,
        farmerId: 1,
      },
      {
        unit: 'kg',
        price: 3.0,
        image: 'products/5_qcycqy',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        farmerId: 1,
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 1,
        farmerId: 3,
      },
      {
        unit: 'kg',
        price: 1.5,
        image: 'products/3c7919-600x600_ej7j3f',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        productId: 5,
        farmerId: 3,
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
      },
      {
        unit: 'kg',
        price: 3.2,
        image: 'products/5_qcycqy',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 5,
        farmerId: 3,
      },
      {
        unit: 'kg',
        price: 4.2,
        image: 'products/bec8ad-600x600_ujekd9',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        farmerId: 4,
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 6,
        farmerId: 3,
      },
      {
        unit: 'kg',
        price: 2.3,
        image: 'products/a57e42-600x600_b99quk',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 3,
        farmerId: 4,
      },
      {
        unit: 'kg',
        price: 2.7,
        image: 'products/6_zjlcdk',
        isActive: true,
        description_EN:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        description_HE:
          'Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus quibusdam quia natus laborum unde ex.',
        createdAt: '2024-03-14T15:51:12.409Z',
        updatedAt: '2024-03-14T15:51:12.409Z',
        productId: 2,
        farmerId: 3,
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
