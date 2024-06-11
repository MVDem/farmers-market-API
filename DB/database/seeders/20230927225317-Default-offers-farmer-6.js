'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 6
      {
        unit: 'unit',
        price: 25,
        image: 'offers/whole_wheat_bread_offer.jpg',
        isActive: true,
        description_EN: 'Freshly baked whole wheat bread',
        description_HE: 'לחם מחיטה מלאה טרי',
        farmerId: 6,
        productId: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 20,
        image: 'offers/baguette_offer.jpg',
        isActive: true,
        description_EN: 'Crispy French baguette',
        description_HE: 'באגט צרפתי פריך',
        farmerId: 6,
        productId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 18,
        image: 'offers/sourdough_offer.jpg',
        isActive: true,
        description_EN: 'Traditional sourdough bread',
        description_HE: 'לחם מחמצת מסורתי',
        farmerId: 6,
        productId: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 30,
        image: 'offers/rye_bread_offer.jpg',
        isActive: true,
        description_EN: 'Hearty rye bread',
        description_HE: 'לחם שיפון עשיר',
        farmerId: 6,
        productId: 54,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 22,
        image: 'offers/multigrain_bread_offer.jpg',
        isActive: true,
        description_EN: 'Nutritious multigrain bread',
        description_HE: 'לחם רב דגנים מזין',
        farmerId: 6,
        productId: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 28,
        image: 'offers/pita_offer.jpg',
        isActive: true,
        description_EN: 'Soft and fluffy pita bread',
        description_HE: 'פיתה רכה ואוורירית',
        farmerId: 6,
        productId: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 26,
        image: 'offers/focaccia_offer.jpg',
        isActive: true,
        description_EN: 'Herbed focaccia bread',
        description_HE: "לחם פוקצ'ה עם עשבי תיבול",
        farmerId: 6,
        productId: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 24,
        image: 'offers/ciabatta_offer.jpg',
        isActive: true,
        description_EN: 'Italian ciabatta bread',
        description_HE: "לחם צ'יאבטה איטלקי",
        farmerId: 6,
        productId: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 27,
        image: 'offers/brioche_offer.jpg',
        isActive: true,
        description_EN: 'Rich brioche bread',
        description_HE: 'לחם בריוש עשיר',
        farmerId: 6,
        productId: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'unit',
        price: 19,
        image: 'offers/breadsticks_offer.jpg',
        isActive: true,
        description_EN: 'Crispy breadsticks',
        description_HE: 'מקלות לחם פריכים',
        farmerId: 6,
        productId: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
