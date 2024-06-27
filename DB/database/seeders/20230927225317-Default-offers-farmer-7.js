'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 7
      {
        unit: '2 kg',
        price: 179,
        imageURL: null,
        // imageURL: 'offers/swordfish_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the juicy, flavorful taste of swordfish steaks, perfect for grilling or pan-searing.',
        description_HE:
          'תיהנה מהטעם העשיר והטעים של סטייקי חרבי ים, אידיאלי לצלייה או טיגון במחבת.',
        farmerId: 7,
        productId: 70,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Swordfish Steaks',
        name_HE: 'סטייקי חרבי ים',
      },
      {
        unit: '1 kg',
        price: 89,
        imageURL: null,
        // imageURL: 'offers/halibut_offer.jpg',
        isActive: true,
        description_EN:
          'Indulge in the tender, succulent taste of halibut steaks, perfect for grilling, baking, or broiling.',
        description_HE:
          'תיהנה מהטעם הרך והעשיר של סטייקי חליבוט, אידיאלי לצלייה, אפייה או צלייה על גריל.',
        farmerId: 7,
        productId: 69,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Halibut Steaks',
        name_HE: 'סטייקי חליבוט',
      },
      {
        unit: '900 g',
        price: 72,
        imageURL: null,
        // imageURL: 'offers/cod_offer.jpg',
        isActive: true,
        description_EN:
          'Enjoy the flaky, mild taste of cod fillets, perfect for baking, frying, or grilling.',
        description_HE:
          'תיהנה מהטעם הפריך והעדין של פילה קוד, אידיאלי לאפייה, טיגון או צלייה על גריל.',
        farmerId: 7,
        productId: 68,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cod Fillets',
        name_HE: 'פילה קוד',
      },
      {
        unit: '1 kg',
        price: 179,
        imageURL: null,
        // imageURL: 'offers/mussels_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the fresh, plump taste of mussels, perfect for steaming, sautéing, or adding to pasta.',
        description_HE:
          'תיהנה מהטעם הטרי והמתוסס של צדפים, אידיאלי לבישול בקיסריה, בסיר או להוספה לפסטה.',
        farmerId: 7,
        productId: 67,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Mussels',
        name_HE: 'צדפים',
      },
      {
        unit: '900 g',
        price: 99,
        imageURL: null,
        // imageURL: 'offers/octopus_offer.jpg',
        isActive: true,
        description_EN:
          'Delight in the tender, flavorful taste of octopus tentacles, perfect for grilling, braising, or frying.',
        description_HE:
          'תיהנה מהטעם הרך והעשיר של טנטקלי תמנון, אידיאלי לצלייה, בישול ארוך או טיגון.',
        farmerId: 7,
        productId: 66,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Octopus Tentacles',
        name_HE: 'טנטקלי תמנון',
      },
      {
        unit: '300 g',
        price: 59,
        imageURL: null,
        // imageURL: 'offers/lobster_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the succulent taste of lobster tails, perfect for grilling, broiling, or steaming.',
        description_HE:
          'תיהנה מהטעם העסיסי של זנבות לובסטר, אידיאלי לצלייה, צלייה או בישול בקיסריה.',
        farmerId: 7,
        productId: 65,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Lobster Tails',
        name_HE: 'זנבות לובסטר',
      },
      {
        unit: '1 kg',
        price: 175,
        imageURL: null,
        // imageURL: 'offers/crab_offer.jpg',
        isActive: true,
        description_EN:
          'Enjoy the delicious taste of crab meat, perfect for salads, pasta, or crab cakes.',
        description_HE:
          'תיהנה מהטעם הטעים של בשר סרטן, אידיאלי לסלטים, פסטה או עוגיות סרטן.',
        farmerId: 7,
        productId: 64,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Crab Meat',
        name_HE: 'בשר סרטן',
      },
      {
        unit: '2 kg',
        price: 80,
        imageURL: null,
        // imageURL: 'offers/shrimp_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the fresh, succulent taste of shrimp, perfect for stir-fries, pasta, or shrimp cocktails.',
        description_HE:
          'תיהנה מהטעם הטרי והעסיסי של שרימפס, אידיאלי לסוגיות, פסטה או קוקטיילי שרימפס.',
        farmerId: 7,
        productId: 63,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Shrimp',
        name_HE: 'שרימפס',
      },
      {
        unit: '1 kg',
        price: 169,
        imageURL: null,
        // imageURL: 'offers/tuna_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the fresh, rich taste of tuna steaks, perfect for grilling, searing, or sushi.',
        description_HE:
          'תיהנה מהטעם העשיר והטרי של סטייקי טונה, אידיאלי לצלייה, טיגון או סושי.',
        farmerId: 7,
        productId: 62,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Tuna Steaks',
        name_HE: 'סטייקי טונה',
      },
      {
        unit: '2 kg',
        price: 179,
        imageURL: null,
        // imageURL: 'offers/salmon_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the fresh, flavorful taste of salmon fillets, perfect for baking, grilling, or pan-searing.',
        description_HE:
          'תיהנה מהטעם הטרי והטעים של פילה סלמון, אידיאלי לאפייה, צלייה או טיגון במחבת.',
        farmerId: 7,
        productId: 61,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Salmon Fillets',
        name_HE: 'פילה סלמון',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
