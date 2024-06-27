'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers for Farmer 5
      {
        unit: 'liter',
        price: 8,
        imageURL: null,
        // imageURL: 'offers/buttermilk_offer.jpg',
        isActive: true,
        description_EN:
          'Our cultured buttermilk is a tangy and smooth dairy product, perfect for baking, cooking, or enjoying as a refreshing drink. It is rich in probiotics, supporting digestive health while adding a distinctive flavor to your recipes.',
        description_HE:
          'החמאה המתורבתת שלנו היא מוצר חלב חלק וחמצמץ, מושלם לאפייה, בישול או לשתייה מרעננת. היא עשירה בפרוביוטיקה, תומכת בבריאות העיכול ומוסיפה טעם ייחודי למתכונים שלכם.',
        farmerId: 5,
        productId: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Buttermilk',
        name_HE: 'חמאה מתורבתת',
      },
      {
        unit: '150 g',
        price: 25,
        imageURL: null,
        // imageURL: 'offers/whipped_cream_offer.jpg',
        isActive: true,
        description_EN:
          'Our whipped cream is light, fluffy, and perfect for topping desserts or adding to your coffee. Made from the finest cream, it offers a luxurious texture and rich flavor that enhances both sweet and savory dishes.',
        description_HE:
          'הקצפת הקלילה והאוורירית שלנו מושלמת לקישוט קינוחים או להוספה לקפה שלכם. עשויה מהשמנת המשובחת ביותר, היא מציעה מרקם יוקרתי וטעם עשיר שמשלים מנות מתוקות ומלוחות כאחד.',
        farmerId: 5,
        productId: 49,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Whipped Cream',
        name_HE: 'קצפת',
      },
      {
        unit: '200 g',
        price: 18,
        imageURL: null,
        // imageURL: 'offers/ricotta_offer.jpg',
        isActive: true,
        description_EN:
          'Our smooth ricotta cheese is crafted from fresh, high-quality milk. It has a light and creamy texture, making it ideal for use in lasagna, pastries, or as a delightful spread on toast. Its mild flavor complements both sweet and savory dishes.',
        description_HE:
          'גבינת הריקוטה החלקה שלנו מיוצרת מחלב טרי ואיכותי. יש לה מרקם קל ושמנתי, מה שהופך אותה למושלמת לשימוש בלזניה, מאפים או כממרח נהדר על טוסט. טעמה העדין מתאים למנות מתוקות ומלוחות כאחד.',
        farmerId: 5,
        productId: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Ricotta Cheese',
        name_HE: 'גבינת ריקוטה',
      },
      {
        unit: 'liter',
        price: 20,
        imageURL: null,
        // imageURL: 'offers/sour_cream_offer.jpg',
        isActive: true,
        description_EN:
          'Our tangy sour cream is perfect for adding a zesty flavor to your dishes. With a smooth and creamy consistency, it’s great for dips, baked potatoes, or enhancing the taste of your favorite recipes. Its rich texture complements a variety of meals.',
        description_HE:
          'השמנת החמוצה החמצמצה שלנו מושלמת להוספת טעם חריף למנותיכם. עם מרקם חלק ושמנתי, היא נהדרת לטבילות, תפוחי אדמה אפויים או לשיפור טעמם של המתכונים האהובים עליכם. המרקם העשיר שלה מתאים למגוון רחב של מנות.',
        farmerId: 5,
        productId: 47,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Sour Cream',
        name_HE: 'שמנת חמוצה',
      },
      {
        unit: 'liter',
        price: 14,
        imageURL: null,
        // imageURL: 'offers/kefir_offer.jpg',
        isActive: true,
        description_EN:
          'Our probiotic-rich kefir is a fermented dairy product that offers numerous health benefits. It has a tangy taste and a creamy texture, making it a perfect choice for smoothies or as a refreshing drink that supports gut health and boosts immunity.',
        description_HE:
          'הקפיר העשיר בפרוביוטיקה שלנו הוא מוצר חלב מותסס שמציע יתרונות בריאותיים רבים. יש לו טעם חמצמץ ומרקם שמנתי, מה שהופך אותו לבחירה מושלמת לשייקים או לשתייה מרעננת שתומכת בבריאות המעי ומחזקת את המערכת החיסונית.',
        farmerId: 5,
        productId: 46,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Kefir',
        name_HE: 'קפיר',
      },
      {
        unit: '350 g',
        price: 8,
        imageURL: null,
        // imageURL: 'offers/cottage_cheese_offer.jpg',
        isActive: true,
        description_EN:
          'Our fresh cottage cheese is made from high-quality milk and offers a soft, crumbly texture. It’s ideal for breakfast bowls, snacks, or adding to salads. Its light and slightly tangy flavor makes it a versatile ingredient in a balanced diet.',
        description_HE:
          "גבינת הקוטג' הטרייה שלנו עשויה מחלב איכותי ומציעה מרקם רך ומתפורר. היא אידיאלית לקערות ארוחת בוקר, חטיפים או להוספה לסלטים. טעמה הקליל והחמצמץ הופך אותה למרכיב רב שימושי בתזונה מאוזנת.",
        farmerId: 5,
        productId: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cottage Cheese',
        name_HE: 'גבינת קוטג׳',
      },
      {
        unit: 'liter',
        price: 12,
        imageURL: null,
        // imageURL: 'offers/cream_offer.jpg',
        isActive: true,
        description_EN:
          'Our rich and thick cream is perfect for enhancing the flavor of your cooking and baking. It has a luxurious texture that is great for whipping or adding a smooth, creamy element to sauces and desserts. It brings a touch of indulgence to any recipe.',
        description_HE:
          'השמנת העשירה והסמיכה שלנו מושלמת לשיפור הטעם של הבישול והאפייה שלכם. יש לה מרקם יוקרתי שמתאים להקצפה או להוספת אלמנט חלק ושמנתי לרטבים ולקינוחים. היא מעניקה נגיעה של פינוק לכל מתכון.',
        farmerId: 5,
        productId: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cream',
        name_HE: 'שמנת',
      },
      {
        unit: '400 g',
        price: 15,
        imageURL: null,
        // imageURL: 'offers/butter_offer.jpg',
        isActive: true,
        description_EN:
          'Our creamy fresh butter is made from the finest cream and is perfect for spreading, cooking, and baking. Its rich flavor and smooth texture make it a versatile ingredient that enhances the taste of breads, pastries, and a variety of dishes.',
        description_HE:
          'החמאה הטרייה והקרמית שלנו מיוצרת מהשמנת המשובחת ביותר ומושלמת למריחה, בישול ואפייה. טעמה העשיר ומרקמה החלק הופכים אותה למרכיב רב שימושי שמשפר את טעמם של לחמים, מאפים ומגוון מנות.',
        farmerId: 5,
        productId: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Butter',
        name_HE: 'חמאה',
      },
      {
        unit: 'liter',
        price: 25,
        imageURL: null,
        // imageURL: 'offers/yogurt_offer.jpg',
        isActive: true,
        description_EN:
          'Our natural yogurt is made with fresh milk and live cultures, offering a creamy texture and a mild, tangy flavor. It’s ideal for breakfast, snacks, or as a base for smoothies. Its probiotic content supports gut health and overall well-being.',
        description_HE:
          'היוגורט הטבעי שלנו מיוצר מחלב טרי ותרבויות חיות, ומציע מרקם קרמי וטעם עדין וחמצמץ. הוא אידיאלי לארוחת בוקר, חטיפים או כבסיס לשייקים. תכולת הפרוביוטיקה שלו תומכת בבריאות המעי וברווחה הכללית.',
        farmerId: 5,
        productId: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Yogurt',
        name_HE: 'יוגורט',
      },
      {
        unit: 'liter',
        price: 10,
        imageURL: null,
        // imageURL: 'offers/milk_offer.jpg',
        isActive: true,
        description_EN:
          'Our fresh whole milk comes from pasture-raised cows and is rich in essential nutrients. It has a creamy texture and a pure, refreshing taste, making it a perfect choice for drinking, cooking, and baking, or as a nutritious addition to your daily diet.',
        description_HE:
          'החלב הטרי שלנו מגיע מפרות מרעה והוא עשיר בחומרי תזונה חיוניים. יש לו מרקם שמנתי וטעם טהור ומרענן, מה שהופך אותו לבחירה מושלמת לשתייה, בישול ואפייה, או כתוספת תזונתית לדיאטה היומית שלכם.',
        farmerId: 5,
        productId: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Milk',
        name_HE: 'חלב',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
