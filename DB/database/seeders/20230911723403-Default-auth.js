'use strict';

const bcrypt = require('bcryptjs');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    const hashPassword = await bcrypt.hash('123456', 5);
    await queryInterface.bulkInsert('auth', [
      {
        email: 'bob@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        email: 'john@gmail.com',
        password: hashPassword,
        role: 'CUSTOMER',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        email: 'alice@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        email: 'charlie@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
      },
      {
        email: 'david@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: '2022-01-17T04:33:12.000Z',
        updatedAt: '2022-01-17T04:33:12.000Z',
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
