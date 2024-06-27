'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 6
      {
        unit: '1 unit',
        price: 19,
        imageURL: null,
        // imageURL: 'offers/breadsticks_offer.jpg',
        isActive: true,
        description_EN:
          'Enjoy the crispy goodness of these breadsticks, perfect for snacking or dipping in your favorite sauces.',
        description_HE:
          'תיהנה מקטיפת בצק המקלות האלה, אידיאליות לחטיפים או לשטיפת רוטבים האהובים עליך.',
        farmerId: 6,
        productId: 60,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Breadsticks',
        name_HE: 'מקלות לחם',
      },
      {
        unit: '1 unit',
        price: 7,
        imageURL: null,
        // imageURL: 'offers/brioche_offer.jpg',
        isActive: true,
        description_EN:
          'Indulge in the rich and buttery flavor of this brioche bread, perfect for breakfast or as a sweet treat.',
        description_HE:
          'תיהנה מהטעם העשיר והחמאתי של לחם הבריוש, אידיאלי לארוחת בוקר או כמנה מתוקה.',
        farmerId: 6,
        productId: 59,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Brioche Bread',
        name_HE: 'לחם בריוש',
      },
      {
        unit: '1 unit',
        price: 24,
        imageURL: null,
        // imageURL: 'offers/ciabatta_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the authentic taste of Italy with this ciabatta bread, perfect for sandwiches or alongside your favorite pasta dish.',
        description_HE:
          "תיהנה מהטעם האותנטי של איטליה עם לחם הצ'יאבטה, אידיאלי לכריכים או לצד צליית הפסטה האהובה עליך.",
        farmerId: 6,
        productId: 58,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Ciabatta Bread',
        name_HE: 'לחם ציאבטה',
      },
      {
        unit: '5 units',
        price: 16,
        imageURL: null,
        // imageURL: 'offers/focaccia_offer.jpg',
        isActive: true,
        description_EN:
          'Delight in the herbed goodness of this focaccia bread, perfect for pairing with soups or salads.',
        description_HE:
          "תיהנה מהטעם המועשר בתבלינים של לחם הפוקצ'ה, אידיאלי להתאמה עם מרקים או סלטים.",
        farmerId: 6,
        productId: 57,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Focaccia Bread',
        name_HE: 'לחם פוקצ׳ה',
      },
      {
        unit: '10 units',
        price: 9,
        imageURL: null,
        // imageURL: 'offers/pita_offer.jpg',
        isActive: true,
        description_EN:
          'Enjoy the soft and fluffy texture of this pita bread, perfect for stuffing with your favorite fillings.',
        description_HE:
          'תיהנה מהטקסטורה הרכה והאוורירית של פיתה זו, אידיאלית למילוי במלואם במילויים המועדפים עליך.',
        farmerId: 6,
        productId: 56,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Pita Bread',
        name_HE: 'פיתה',
      },
      {
        unit: '1 unit',
        price: 22,
        imageURL: null,
        // imageURL: 'offers/multigrain_bread_offer.jpg',
        isActive: true,
        description_EN:
          'Nourish your body with this nutritious multigrain bread, perfect for sandwiches or toast.',
        description_HE:
          'תזין את גופך בלחם רב דגנים מזין זה, אידיאלי לכריכים או טוסט.',
        farmerId: 6,
        productId: 55,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Multigrain Bread',
        name_HE: 'לחם רב דגנים',
      },
      {
        unit: '1 unit',
        price: 30,
        imageURL: null,
        // imageURL: 'offers/rye_bread_offer.jpg',
        isActive: true,
        description_EN:
          'Savor the hearty flavor of this rye bread, perfect for sandwiches or alongside a hearty soup.',
        description_HE:
          'תיהנה מהטעם העשיר של לחם השיפון, אידיאלי לכריכים או לצד מרק עשיר.',
        farmerId: 6,
        productId: 54,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Rye Bread',
        name_HE: 'לחם שיפון',
      },
      {
        unit: '1 unit',
        price: 18,
        imageURL: null,
        // imageURL: 'offers/sourdough_offer.jpg',
        isActive: true,
        description_EN:
          'Experience the traditional taste of sourdough bread, perfect for toast or sandwiches.',
        description_HE:
          'חווי את הטעם המסורתי של לחם המחמצת, אידיאלי לטוסט או לכריך.',
        farmerId: 6,
        productId: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Sourdough Bread',
        name_HE: 'לחם מחמצת',
      },
      {
        unit: '1 unit',
        price: 20,
        imageURL: null,
        // imageURL: 'offers/baguette_offer.jpg',
        isActive: true,
        description_EN:
          'Enjoy the crispy crust and soft interior of this French baguette, perfect for sandwiches or to accompany a meal.',
        description_HE:
          'תיהנה מהקליפה הצרפתית והפנימית הרכה של הבאגט הצרפתי הזה, אידיאלי לכריכים או להפליא במנה.',
        farmerId: 6,
        productId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'French Baguette',
        name_HE: 'באגט צרפתי',
      },
      {
        unit: '1 unit',
        price: 25,
        imageURL: null,
        // imageURL: 'offers/whole_wheat_bread_offer.jpg',
        isActive: true,
        description_EN:
          'Satisfy your cravings with this freshly baked whole wheat bread, perfect for sandwiches or toasting.',
        description_HE:
          'תשבע את התשוקות שלך עם לחם מחיטה מלאה טרי, אידיאלי לכריכים או טוסט.',
        farmerId: 6,
        productId: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Whole Wheat Bread',
        name_HE: 'לחם מחיטה מלאה',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
