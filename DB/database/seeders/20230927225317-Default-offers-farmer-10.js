'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Mixed offers for Farmer 10
      {
        unit: '1 kg',
        price: 139,
        imageURL: null,
        isActive: true,
        description_EN: 'Indulge in the rich, savory taste of fresh duck meat, perfect for creating gourmet dishes at home. This premium quality duck meat is tender and full of flavor, ideal for roasting or grilling.',
        description_HE: 'מגוון בשרים איכותיים וטריים מעשירים את תפריט הבשר שלך ומאפשרים לך להכין ארוחות רבות וטעימות.',
        farmerId: 10,
        productId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Duck',
        name_HE: 'ברווז',
      },
      {
        unit: '1 kg',
        price: 79,
        imageURL: null,
        isActive: true,
        description_EN: 'Premium quality beef, sourced from grass-fed cattle, perfect for a variety of dishes. Enjoy its rich flavor and tender texture in your favorite recipes.',
        description_HE: 'בשר בקר איכותי, שמקורו בבקר רועה עשב, מושלם למגוון מנות. תהנו מהטעם העשיר והמרקם הרך במתכונים האהובים עליכם.',
        farmerId: 10,
        productId: 21,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Beef',
        name_HE: 'בקר',
      },
      {
        unit: '900 g',
        price: 169,
        imageURL: null,
        isActive: true,
        description_EN: 'Enjoy the rich flavor and tender texture of duck thighs, perfect for roasting, grilling, or braising. These duck thighs are a gourmet delight, adding a touch of luxury to any meal.',
        description_HE: 'מגוון בשרים איכותיים וטריים מעשירים את תפריט הבשר שלך ומאפשרים לך להכין ארוחות רבות וטעימות.',
        farmerId: 10,
        productId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Duck Thighs',
        name_HE: 'ברווז',
      },
      {
        unit: '2 kg',
        price: 49,
        imageURL: null,
        isActive: true,
        description_EN: 'Fresh and tender chicken, raised without antibiotics, providing a healthy and delicious option for your meals. Perfect for roasting, grilling, or frying.',
        description_HE: 'עוף טרי ורך, גידול ללא אנטיביוטיקה, מספק אפשרות בריאה וטעימה לארוחות שלכם. מושלם לצלייה, גריל או טיגון.',
        farmerId: 10,
        productId: 22,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Chicken',
        name_HE: 'עוף',
      },
      // {
      //   unit: '1 kg',
      //   price: 99,
      //   imageURL: null,
      //   isActive: true,
      //   description_EN: 'Treat yourself to the delicate taste and tender texture of grouse breast, ideal for elegant culinary creations. Perfect for those special occasions, this premium grouse breast will impress any guest.',
      //   description_HE: 'התענג על הטעם העדין והטקסטורה הרכה של חזה עוף יער, אידיאלי ליצירת יצירות קולינריות אלגנטיות.',
      //   farmerId: 10,
      //   productId: 80,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   name_EN: 'Grouse Breast',
      //   name_HE: 'חזה עוף יער',
      // },
      {
        unit: '1 kg',
        price: 269,
        imageURL: null,
        isActive: true,
        description_EN: 'Rich and flavorful bison meat, known for its robust taste and lean profile. Perfect for grilling or slow-cooking to bring out its natural flavors, making any meal special.',
        description_HE: 'בשר ביסון עשיר וטעים, ידוע בטעם החזק והפרופיל הרזה שלו. מושלם לגריל או לבישול איטי להבלטת הטעמים הטבעיים שלו.',
        farmerId: 10,
        productId: 28,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Bison',
        name_HE: 'ביסון',
      },
      {
        unit: '1 kg',
        price: 149,
        imageURL: null,
        isActive: true,
        description_EN: 'Fresh duck meat, known for its rich and distinctive flavor. Perfect for gourmet dishes, it adds a unique touch to your culinary creations and delights the palate.',
        description_HE: 'בשר ברווז טרי, ידוע בטעם העשיר והייחודי שלו. מושלם למנות גורמה, הוא מוסיף נגיעה ייחודית ליצירות הקולינריות שלכם.',
        farmerId: 10,
        productId: 26,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Duck',
        name_HE: 'ברווז',
      },
      // {
      //   unit: '3 kg',
      //   price: 79,
      //   imageURL: null,
      //   isActive: true,
      //   description_EN: 'Delight in the rich, flavorful taste of chicken wings, perfect for appetizers or main dishes. These wings are ideal for parties, gatherings, or a delicious snack.',
      //   description_HE: 'תיהנה מהטעם העשיר והטעים של כנפי עוף, אידיאלי למנות ראשיות או כנוי.',
      //   farmerId: 10,
      //   productId: 76,
      //   createdAt: new Date(),
      //   updatedAt: new Date(),
      //   name_EN: 'Chicken Wings',
      //   name_HE: 'כנפי עוף',
      // },
      {
        unit: '1 kg',
        price: 139,
        imageURL: null,
        isActive: true,
        description_EN: 'Savory goat meat, a versatile and nutritious choice for various dishes. Its unique flavor is perfect for stews, curries, and other traditional recipes that require a rich, distinctive taste.',
        description_HE: 'בשר עז טעים, בחירה מגוונת ומזינה למגוון מנות. הטעם הייחודי שלו מושלם לתבשילים, קארי ומתכונים מסורתיים אחרים.',
        farmerId: 10,
        productId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goat',
        name_HE: 'עז',
      },
      {
        unit: '1 kg',
        price: 79,
        imageURL: null,
        isActive: true,
        description_EN: 'Exotic elk meat, prized for its lean and tender qualities. It offers a rich, gamey flavor that is perfect for those seeking a unique culinary experience and a break from the ordinary.',
        description_HE: 'בשר אייל אקזוטי, מוערך בזכות איכויותיו הרזות והרכות. מציע טעם עשיר וייחודי, מושלם למי שמחפש חוויה קולינרית ייחודית.',
        farmerId: 10,
        productId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Elk',
        name_HE: 'אייל',
      },
      {
        unit: '2 kg',
        price: 89,
        imageURL: null,
        isActive: true,
        description_EN: 'Enjoy the tender, juicy taste of turkey breast, perfect for roasting or grilling for a delicious meal. Ideal for a healthy and satisfying meal for the whole family.',
        description_HE: 'תיהנה מהטעם הרך והעשיר של חזה הודו, אידיאלי לצלייה או טיגון לארוחה טעימה.',
        farmerId: 10,
        productId: 72,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Turkey Breast',
        name_HE: 'חזה הודו',
      },
      {
        unit: '500 g',
        price: 59,
        imageURL: null,
        isActive: true,
        description_EN: 'Lean rabbit meat, a healthy and tender option for various recipes. Known for its mild flavor and high nutritional value, it is perfect for those seeking a leaner protein.',
        description_HE: 'בשר ארנב רזה, אפשרות בריאה ורכה למגוון מתכונים. ידוע בטעם העדין והערך התזונתי הגבוה שלו, מושלם למי שמחפש חלבון רזה יותר.',
        farmerId: 10,
        productId: 27,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Rabbit',
        name_HE: 'ארנב',
      },
      {
        unit: '1 kg',
        price: 145,
        imageURL: null,
        isActive: true,
        description_EN: 'Savor the tender, succulent taste of goose breast, perfect for creating exquisite, gourmet dishes. Ideal for special occasions or a luxurious treat.',
        description_HE: 'מגוון בשרים איכותיים וטריים מעשירים את תפריט הבשר שלך ומאפשרים לך להכין ארוחות רבות וטעימות.',
        farmerId: 10,
        productId: 75,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goose Breast',
        name_HE: 'חזה אווז',
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
