'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      {
        unit: 'kg',
        price: 50,
        imageURL: 'offers/beef_offer.jpg',
        isActive: true,
        description_EN: 'Premium quality beef',
        description_HE: 'בשר בקר איכותי',
        farmerId: 3,
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Beef',
        name_HE: 'בקר',
      },
      {
        unit: 'kg',
        price: 40,
        imageURL: 'offers/chicken_offer.jpg',
        isActive: true,
        description_EN: 'Fresh and tender chicken',
        description_HE: 'עוף טרי ורך',
        farmerId: 3,
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Chicken',
        name_HE: 'עוף',
      },
      {
        unit: 'kg',
        price: 60,
        imageURL: 'offers/lamb_offer.jpg',
        isActive: true,
        description_EN: 'Tender lamb meat',
        description_HE: 'בשר כבש רך',
        farmerId: 3,
        productId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Lamb',
        name_HE: 'כבש',
      },
      {
        unit: 'kg',
        price: 45,
        imageURL: 'offers/pork_offer.jpg',
        isActive: true,
        description_EN: 'Juicy pork cuts',
        description_HE: 'נתחי חזיר עסיסיים',
        farmerId: 3,
        productId: 24,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Pork',
        name_HE: 'חזיר',
      },
      {
        unit: 'kg',
        price: 55,
        imageURL: 'offers/veal_offer.jpg',
        isActive: true,
        description_EN: 'Tender veal meat',
        description_HE: 'בשר עגל רך',
        farmerId: 3,
        productId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Veal',
        name_HE: 'עגל',
      },
      {
        unit: 'kg',
        price: 48,
        imageURL: 'offers/duck_offer.jpg',
        isActive: true,
        description_EN: 'Fresh duck meat',
        description_HE: 'בשר ברווז טרי',
        farmerId: 3,
        productId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Duck',
        name_HE: 'ברווז',
      },
      {
        unit: 'kg',
        price: 52,
        imageURL: 'offers/rabbit_offer.jpg',
        isActive: true,
        description_EN: 'Lean rabbit meat',
        description_HE: 'בשר ארנב רזה',
        farmerId: 3,
        productId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Rabbit',
        name_HE: 'ארנב',
      },
      {
        unit: 'kg',
        price: 65,
        imageURL: 'offers/bison_offer.jpg',
        isActive: true,
        description_EN: 'Rich and flavorful bison meat',
        description_HE: 'בשר ביסון עשיר וטעים',
        farmerId: 3,
        productId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Bison',
        name_HE: 'ביסון',
      },
      {
        unit: 'kg',
        price: 35,
        imageURL: 'offers/goat_offer.jpg',
        isActive: true,
        description_EN: 'Savory goat meat',
        description_HE: 'בשר עז טעים',
        farmerId: 3,
        productId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goat',
        name_HE: 'עז',
      },
      {
        unit: 'kg',
        price: 70,
        imageURL: 'offers/elk_offer.jpg',
        isActive: true,
        description_EN: 'Exotic elk meat',
        description_HE: 'בשר אייל אקזוטי',
        farmerId: 3,
        productId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Elk',
        name_HE: 'אייל',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};