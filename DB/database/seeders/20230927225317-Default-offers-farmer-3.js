'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 3
      {
        unit: 'kg',
        price: 50,
        image: 'offers/beef_offer.jpg',
        isActive: true,
        description_EN: 'Premium quality beef',
        description_HE: 'בשר בקר איכותי',
        farmerId: 3,
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 40,
        image: 'offers/chicken_offer.jpg',
        isActive: true,
        description_EN: 'Fresh and tender chicken',
        description_HE: 'עוף טרי ורך',
        farmerId: 3,
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 60,
        image: 'offers/lamb_offer.jpg',
        isActive: true,
        description_EN: 'Tender lamb meat',
        description_HE: 'בשר כבש רך',
        farmerId: 3,
        productId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 45,
        image: 'offers/pork_offer.jpg',
        isActive: true,
        description_EN: 'Juicy pork cuts',
        description_HE: 'נתחי חזיר עסיסיים',
        farmerId: 3,
        productId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 55,
        image: 'offers/veal_offer.jpg',
        isActive: true,
        description_EN: 'Tender veal meat',
        description_HE: 'בשר עגל רך',
        farmerId: 3,
        productId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 48,
        image: 'offers/duck_offer.jpg',
        isActive: true,
        description_EN: 'Fresh duck meat',
        description_HE: 'בשר ברווז טרי',
        farmerId: 3,
        productId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 52,
        image: 'offers/rabbit_offer.jpg',
        isActive: true,
        description_EN: 'Lean rabbit meat',
        description_HE: 'בשר ארנב רזה',
        farmerId: 3,
        productId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 65,
        image: 'offers/bison_offer.jpg',
        isActive: true,
        description_EN: 'Rich and flavorful bison meat',
        description_HE: 'בשר ביסון עשיר וטעים',
        farmerId: 3,
        productId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 35,
        image: 'offers/goat_offer.jpg',
        isActive: true,
        description_EN: 'Savory goat meat',
        description_HE: 'בשר עז טעים',
        farmerId: 3,
        productId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        unit: 'kg',
        price: 70,
        image: 'offers/elk_offer.jpg',
        isActive: true,
        description_EN: 'Exotic elk meat',
        description_HE: 'בשר אייל אקזוטי',
        farmerId: 3,
        productId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
