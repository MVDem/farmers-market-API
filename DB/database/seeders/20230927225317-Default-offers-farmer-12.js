'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 1 (with farmerId changed to 12)
      {
        unit: '1 kg',
        price: 20,
        imageURL: null,
        isActive: true,
        description_EN:
          'Fresh, organic carrots harvested from our farm, ensuring top quality and flavor. Perfect for salads, stews, and juicing.',
        description_HE:
          'גזרים אורגניים טריים שנגזרו מהחווה שלנו, מבטיחים איכות וטעם מעולים. מושלמים לסלטים, ציוד ויצירתיות בבישול.',
        farmerId: 12,
        productId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Carrot',
        name_HE: 'גזר',
      },
      {
        unit: '2 kg',
        price: 15,
        imageURL: null,
        isActive: true,
        description_EN:
          'Ripe, juicy tomatoes picked at peak ripeness for exceptional taste and texture. Ideal for sauces, salads, and fresh eating.',
        description_HE:
          'עגבניות בשלות ועסיסיות, נקטפות בשיא השלמותן לטעם ולטקסטורה מעולים. אידיאליות לרוטבים, סלטים וצריכה טרייה.',
        farmerId: 12,
        productId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Tomato',
        name_HE: 'עגבנייה',
      },
      {
        unit: '3 kg',
        price: 18,
        imageURL: null,
        isActive: true,
        description_EN:
          'Crisp, fresh cucumbers grown under optimal conditions, delivering exceptional crunch and taste. Perfect for salads and pickling.',
        description_HE:
          'מלפפונים פריכים וטריים שגדלו בתנאים אופטימליים, מספקים קריספיות וטעם יוצא דופן. מושלמים לסלטים ולמילוי.',
        farmerId: 12,
        productId: 3,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cucumber',
        name_HE: 'מלפפון',
      },
      {
        unit: '1 kg',
        price: 2,
        imageURL: null,
        isActive: true,
        description_EN:
          'Colorful bell peppers bursting with sweetness and vibrant flavors. Grown organically for superior quality and nutritional value.',
        description_HE:
          'פלפלים צבעוניים שמבצעים עלייה במתיקות וטעמים חיים. גדלים אורגנית לאיכות גבוהה וערך תזונתי מרבי.',
        farmerId: 12,
        productId: 4,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Bell Pepper',
        name_HE: 'פלפל',
      },
      {
        unit: '2 kg',
        price: 25,
        imageURL: null,
        isActive: true,
        description_EN:
          'Nutritious broccoli florets packed with vitamins and minerals. Grown naturally to retain freshness and health benefits.',
        description_HE:
          'שתיית ברוקולי עשירים בויטמינים ומינרלים. גדלים בצורה טבעית לשמירה על טריות ועל יתרונות הבריאות.',
        farmerId: 12,
        productId: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Broccoli',
        name_HE: 'ברוקולי',
      },
      {
        unit: '500 g',
        price: 12,
        imageURL: null,
        isActive: true,
        description_EN:
          'Tender baby spinach leaves freshly harvested for exceptional delicacy and taste. Perfect for salads, smoothies, and cooking.',
        description_HE:
          'עלים רכים של ספינג׳ המיוצרים בטריות ומספקים טעם איכותי ורכות מובחרים. מושלמים לסלטים, סימוזי ובישול.',
        farmerId: 12,
        productId: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Spinach',
        name_HE: 'ספינג׳',
      },
      {
        unit: '3 kg',
        price: 10,
        imageURL: null,
        isActive: true,
        description_EN:
          'Versatile potatoes grown with care, offering superb texture and flavor for various culinary applications.',
        description_HE:
          'תפוחי אדמה רבי תכליתיים שנגדלים באהבה ומספקים טקסטורה וטעם יוצא דופן ליישומים במטבח.',
        farmerId: 12,
        productId: 7,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Potato',
        name_HE: 'תפוח אדמה',
      },
      {
        unit: '2 kg',
        price: 8,
        imageURL: null,
        isActive: true,
        description_EN:
          'Pungent, flavorful onions cultivated for their distinctive taste and culinary versatility.',
        description_HE:
          'בצל חזק וטעים המתפתח במיוחד לטעמיו המיוחדים ולהשתמשות רחבת הידיים בבישול.',
        farmerId: 12,
        productId: 8,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Onion',
        name_HE: 'בצל',
      },
      {
        unit: '500 g',
        price: 10,
        imageURL: null,
        isActive: true,
        description_EN:
          'Crisp, refreshing lettuce leaves grown with care for exceptional taste and nutritional value.',
        description_HE:
          'עלים פריכים ומרעננים של חסה המגדלים באהבה לטעם ולערך התזונתי המופלג.',
        farmerId: 12,
        productId: 9,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Lettuce',
        name_HE: 'חסה',
      },
      {
        unit: '1 kg',
        price: 14,
        imageURL: null,
        isActive: true,
        description_EN:
          'Versatile zucchini grown for exceptional texture and flavor, perfect for various culinary creations.',
        description_HE:
          'קישואים רבי תכליתיים שגדלים לטקסטורה וטעם איכותיים לייצורים בבישול.',
        farmerId: 12,
        productId: 10,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Zucchini',
        name_HE: 'קישוא',
      },
      // Offers from the second file (with farmerId changed to 12)
      {
        unit: '1 kg',
        price: 50,
        imageURL: null,
        isActive: true,
        description_EN:
          'Premium quality beef sourced from pasture-raised cattle, ensuring tenderness and rich flavor for gourmet dishes and hearty meals.',
        description_HE:
          'בשר בקר באיכות גבוהה שמגיע מבקרים שנגדלו במרעה, מבטיח רכות וטעם עשיר למנות גורמה וארוחות בריאות.',
        farmerId: 12,
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Beef',
        name_HE: 'בקר',
      },
      {
        unit: '1 kg',
        price: 40,
        imageURL: null,
        isActive: true,
        description_EN:
          'Fresh, tender chicken meat raised with care for optimal flavor and juiciness. Perfect for roasting, grilling, or adding to salads.',
        description_HE:
          'בשר עוף טרי ורך שגדל בתנאים מיוחדים לטעם ולמרקם מעולים. מושלם לצלייה, בישול ולהוספה לסלטים.',
        farmerId: 12,
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Chicken',
        name_HE: 'עוף',
      },
      {
        unit: '1 kg',
        price: 60,
        imageURL: null,
        isActive: true,
        description_EN:
          'Tender lamb meat known for its delicate texture and rich flavor. Raised sustainably for exceptional quality and taste.',
        description_HE:
          'בשר כבש רך שמכונה על טקסטורה עדינה וטעם עשיר. גדל בדרך שמקיימת את האיכות והטעם המיוחדים.',
        farmerId: 12,
        productId: 23,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Lamb',
        name_HE: 'כבש',
      },
      {
        unit: '900 g',
        price: 55,
        imageURL: null,
        isActive: true,
        description_EN:
          'Tender veal meat prized for its mild flavor and succulent texture. Raised ethically for superior tenderness and taste.',
        description_HE:
          'בשר עגל רך המעוניין על טעם רך וטקסטורה ססגונית. גדל באופן אתי לרכות וטעם מעולים.',
        farmerId: 12,
        productId: 25,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Veal',
        name_HE: 'עגל',
      },
      {
        unit: '500 g',
        price: 70,
        imageURL: null,
        isActive: true,
        description_EN:
          'Exotic elk meat known for its lean protein and unique flavor profile. Sourced sustainably for exceptional quality and nutrition.',
        description_HE:
          'בשר אייל אקזוטי המכונה על חלבון טרי ופרופיל טעמים ייחודי. גדל בדרך שמקיימת את האיכות והערך התזונתי המיוחדים.',
        farmerId: 12,
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
