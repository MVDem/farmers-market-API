'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('categories', [
      {
        name_EN: 'Vegetables',
        name_HE: 'ירקות',
        description_EN: 'Fresh and organic vegetables',
        description_HE: 'ירקות טריים ואורגניים',
        imageURL: 'categories/vegetables.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Fruits',
        name_HE: 'פירות',
        description_EN: 'Juicy and ripe fruits',
        description_HE: 'פירות עסיסיים ובשלים',
        imageURL: 'categories/fruits.jpg', // Add this image to the categories folder
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Meat',
        name_HE: 'בשר',
        description_EN: 'High-quality meat products',
        description_HE: 'מוצרי בשר באיכות גבוהה',
        imageURL: 'categories/meat.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Cheese',
        name_HE: 'גבינה',
        description_EN: 'Various kinds of cheese',
        description_HE: 'מגוון סוגי גבינות',
        imageURL: 'categories/cheese.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Dairy',
        name_HE: 'מוצרי חלב',
        description_EN: 'Dairy products from local farms',
        description_HE: 'מוצרי חלב מחוות מקומיות',
        imageURL: 'categories/dairy.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Bread',
        name_HE: 'לחם',
        description_EN: 'Freshly baked bread and pastries',
        description_HE: 'לחם ומאפים טריים',
        imageURL: 'categories/bread.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Fish',
        name_HE: 'דגים',
        description_EN: 'Fresh and smoked fish',
        description_HE: 'דגים טריים ומעושנים',
        imageURL: 'categories/fish.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name_EN: 'Poultry',
        name_HE: 'עופות',
        description_EN: 'Chicken and other poultry products',
        description_HE: 'עוף ומוצרי עופות אחרים',
        imageURL: 'categories/poultry.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('categories', {
      name_EN: [
        'Vegetables',
        'Fruits',
        'Meat',
        'Cheese',
        'Dairy',
        'Bread',
        'Fish',
        'Poultry',
      ],
    });
  },
};
