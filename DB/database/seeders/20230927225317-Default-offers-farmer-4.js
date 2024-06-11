'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      {
        unit: 'kg',
        price: 60,
        image: 'offers/cheddar_offer.jpg',
        isActive: true,
        description_EN: 'Aged cheddar cheese',
        description_HE: "גבינת צ'דר מיושנת",
        farmerId: 4,
        productId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cheddar Cheese',
        name_HE: 'גבינת צ׳דר',
      },
      {
        unit: 'kg',
        price: 55,
        image: 'offers/mozzarella_offer.jpg',
        isActive: true,
        description_EN: 'Fresh mozzarella cheese',
        description_HE: 'גבינת מוצרלה טרייה',
        farmerId: 4,
        productId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Mozzarella Cheese',
        name_HE: 'גבינת מוצרלה',
      },
      {
        unit: 'kg',
        price: 65,
        image: 'offers/parmesan_offer.jpg',
        isActive: true,
        description_EN: 'Rich and nutty parmesan cheese',
        description_HE: 'גבינת פרמזן עשירה ואגוזית',
        farmerId: 4,
        productId: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Parmesan Cheese',
        name_HE: 'גבינת פרמזן',
      },
      {
        unit: 'kg',
        price: 58,
        image: 'offers/blue_cheese_offer.jpg',
        isActive: true,
        description_EN: 'Tangy blue cheese',
        description_HE: 'גבינה כחולה חמוצה',
        farmerId: 4,
        productId: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Blue Cheese',
        name_HE: 'גבינה כחולה',
      },
      {
        unit: 'kg',
        price: 62,
        image: 'offers/brie_offer.jpg',
        isActive: true,
        description_EN: 'Creamy brie cheese',
        description_HE: 'גבינת ברי שמנת',
        farmerId: 4,
        productId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Brie Cheese',
        name_HE: 'גבינת ברי',
      },
      {
        unit: 'kg',
        price: 57,
        image: 'offers/gouda_offer.jpg',
        isActive: true,
        description_EN: 'Smoked gouda cheese',
        description_HE: 'גבינת גאודה מעושנת',
        farmerId: 4,
        productId: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Gouda Cheese',
        name_HE: 'גבינת גאודה',
      },
      {
        unit: 'kg',
        price: 64,
        image: 'offers/gruyere_offer.jpg',
        isActive: true,
        description_EN: 'Savory gruyere cheese',
        description_HE: 'גבינת גרוייר טעימה',
        farmerId: 4,
        productId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Gruyere Cheese',
        name_HE: 'גבינת גרוייר',
      },
      {
        unit: 'kg',
        price: 70,
        image: 'offers/feta_offer.jpg',
        isActive: true,
        description_EN: 'Crumbly feta cheese',
        description_HE: 'גבינת פטה מתפוררת',
        farmerId: 4,
        productId: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Feta Cheese',
        name_HE: 'גבינת פטה',
      },
      {
        unit: 'kg',
        price: 50,
        image: 'offers/swiss_cheese_offer.jpg',
        isActive: true,
        description_EN: 'Classic Swiss cheese',
        description_HE: 'גבינה שוויצרית קלאסית',
        farmerId: 4,
        productId: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Swiss Cheese',
        name_HE: 'גבינה שוויצרית',
      },
      {
        unit: 'kg',
        price: 63,
        image: 'offers/provolone_offer.jpg',
        isActive: true,
        description_EN: 'Mild provolone cheese',
        description_HE: 'גבינת פרובולונה עדינה',
        isActive: true,
        farmerId: 4,
        productId: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Provolone Cheese',
        name_HE: 'גבינת פרובולונה',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
