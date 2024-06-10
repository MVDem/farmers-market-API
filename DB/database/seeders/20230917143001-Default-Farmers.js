'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('farmers', [
      {
        name: "Bob's Farm",
        description:
          'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ',
        city: 'New York',
        address: '1234 Main St',
        email: 'farmer@gmail.com',
        phone: '123-456-7890',
        coordinateLat: null,
        coordinateLong: null,
        userId: 1,
        logoURL: 'farmers/logos/logo2_vdsi5y',
        coverURL: 'farmers/covers/2',
        createdAt: '2024-06-05T10:34:44.158Z',
        updatedAt: '2024-06-05T10:34:44.158Z',
      },
      {
        name: "Alice's Farm",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Los Angeles',
        address: '5678 Elm St',
        email: 'alice@gmail.com',
        phone: '987-654-3210',
        coordinateLat: null,
        coordinateLong: null,
        userId: 2,
        logoURL: 'farmers/logos/22',
        coverURL: 'farmers/covers/3',
        createdAt: '2024-06-05T10:34:44.158Z',
        updatedAt: '2024-06-05T10:34:44.158Z',
      },
      {
        name: "Charlie's Farm",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'Chicago',
        address: '9101 Oak St',
        email: 'charlie@gmail.com',
        phone: '555-123-4567',
        coordinateLat: null,
        coordinateLong: null,
        userId: 3,
        logoURL: 'farmers/logos/3',
        coverURL: 'farmers/covers/4',
        createdAt: '2024-06-05T10:34:44.158Z',
        updatedAt: '2024-06-05T10:34:44.158Z',
      },
      {
        name: "David's Farm",
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        city: 'San Francisco',
        address: '1212 Pine St',
        email: 'david@gmail.com',
        phone: '111-222-3333',
        coordinateLat: null,
        coordinateLong: null,
        userId: 4,
        logoURL: 'farmers/logos/4',
        coverURL: 'farmers/covers/5',
        createdAt: '2024-06-05T10:34:44.158Z',
        updatedAt: '2024-06-05T10:34:44.158Z',
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
