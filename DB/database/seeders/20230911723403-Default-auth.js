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
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'john@gmail.com',
        password: hashPassword,
        role: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'alice@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'charlie@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'david@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'eve@gmail.com',
        password: hashPassword,
        role: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'frank@gmail.com',
        password: hashPassword,
        role: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'grace@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'heidi@gmail.com',
        password: hashPassword,
        role: 'CUSTOMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'ivan@gmail.com',
        password: hashPassword,
        role: 'FARMER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('auth', {
      email: [
        'bob@gmail.com',
        'john@gmail.com',
        'alice@gmail.com',
        'charlie@gmail.com',
        'david@gmail.com',
        'eve@gmail.com',
        'frank@gmail.com',
        'grace@gmail.com',
        'heidi@gmail.com',
        'ivan@gmail.com'
      ],
    });
  }
};
