'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      {
        unit: '200 g',
        price: 15,
        imageURL: null,
        // imageURL: 'offers/cheddar_offer.jpg',
        isActive: true,
        description_EN:
          'This aged cheddar cheese is known for its sharp and tangy flavor, making it perfect for adding a rich taste to sandwiches, burgers, and various recipes. It has been carefully matured to achieve a distinct and robust profile that cheese lovers appreciate.',
        description_HE:
          "גבינת צ'דר מיושנת זו ידועה בטעם החמצמץ והחריף שלה, מה שהופך אותה למושלמת להוספת טעם עשיר לסנדוויצ'ים, המבורגרים ומגוון מתכונים. היא הושרה בקפידה כדי להשיג פרופיל טעם ייחודי שמעריצי גבינות מעריכים.",
        farmerId: 4,
        productId: 31,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cheddar Cheese',
        name_HE: 'גבינת צ׳דר',
      },
      {
        unit: '350 g',
        price: 55,
        imageURL: null,
        // imageURL: 'offers/mozzarella_offer.jpg',
        isActive: true,
        description_EN:
          'Our fresh mozzarella cheese is made from high-quality milk and offers a delicate, creamy texture that melts beautifully. It is ideal for pizzas, salads, and caprese dishes, delivering a mild, milky flavor that complements a wide range of ingredients.',
        description_HE:
          'גבינת המוצרלה הטרייה שלנו מיוצרת מחלב איכותי ומציעה מרקם עדין ושמנתי שנמס בצורה יפה. היא מושלמת לפיצות, סלטים ומנות קפרזה, ומספקת טעם עדין וחלבי שמשלים מגוון רחב של מרכיבים.',
        farmerId: 4,
        productId: 32,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Mozzarella Cheese',
        name_HE: 'גבינת מוצרלה',
      },
      {
        unit: '400 g',
        price: 65,
        imageURL: null,
        // imageURL: 'offers/parmesan_offer.jpg',
        isActive: true,
        description_EN:
          'Rich and nutty, our parmesan cheese is aged to perfection, offering a robust flavor and crumbly texture. Ideal for grating over pasta, salads, and soups, it provides an umami boost that enhances the taste of any dish with its savory notes.',
        description_HE:
          'גבינת הפרמזן העשירה שלנו בעלת טעם אגוזי ומרקם מתפורר. היא מיושנת באופן מושלם ומספקת טעם עז שמוסיף עוצמה למנות כמו פסטה, סלטים ומרקים. היא מעניקה תוספת של אומאמי שמעשירה את טעמן של כל מנות.',
        farmerId: 4,
        productId: 33,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Parmesan Cheese',
        name_HE: 'גבינת פרמזן',
      },
      {
        unit: '400 g',
        price: 58,
        imageURL: null,
        // imageURL: 'offers/blue_cheese_offer.jpg',
        isActive: true,
        description_EN:
          'This tangy blue cheese is characterized by its bold, pungent flavor and creamy texture. Perfect for pairing with fruits, nuts, or crusty bread, it provides a distinctive taste that is both sharp and creamy, adding a gourmet touch to your dishes.',
        description_HE:
          'גבינה כחולה חמוצה זו מאופיינת בטעם חריף ומרקם שמנתי. היא מושלמת לשילוב עם פירות, אגוזים או לחם כפרי, ומספקת טעם ייחודי שמשלב חריפות ושמנתיות, ומעניקה נגיעה גורמה למנותיכם.',
        farmerId: 4,
        productId: 34,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Blue Cheese',
        name_HE: 'גבינה כחולה',
      },
      {
        unit: '150 g',
        price: 20,
        imageURL: null,
        // imageURL: 'offers/brie_offer.jpg',
        isActive: true,
        description_EN:
          'Our creamy brie cheese offers a delicate and buttery flavor with a slight hint of earthiness. It has a soft, spreadable texture that makes it perfect for pairing with crackers, fruits, or as part of a cheese board, delivering a luxurious taste experience.',
        description_HE:
          'גבינת הברי השמנתית שלנו מציעה טעם עדין וחמאתי עם נגיעה קלה של ארציות. יש לה מרקם רך שניתן למרוח אותו, מה שהופך אותה למושלמת לשילוב עם קרקרים, פירות או כחלק מלוח גבינות, ומספקת חוויית טעם יוקרתית.',
        farmerId: 4,
        productId: 35,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Brie Cheese',
        name_HE: 'גבינת ברי',
      },
      {
        unit: '1 kg',
        price: 50,
        imageURL: null,
        // imageURL: 'offers/gouda_offer.jpg',
        isActive: true,
        description_EN:
          'Our smoked gouda cheese is crafted from high-quality milk and smoked to achieve a rich, deep flavor. With a semi-hard texture and a smooth, creamy finish, it is perfect for adding a touch of smokiness to sandwiches, salads, and cheese platters.',
        description_HE:
          "גבינת הגאודה המעושנת שלנו מיוצרת מחלב איכותי ומעושנת כדי להשיג טעם עמוק ועשיר. יש לה מרקם חצי קשה וגימור חלק ושמנתי, והיא מושלמת להוספת נגיעה מעושנת לסנדוויצ'ים, סלטים ומגשי גבינות.",
        farmerId: 4,
        productId: 36,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Gouda Cheese',
        name_HE: 'גבינת גאודה',
      },
      {
        unit: '1 kg',
        price: 64,
        imageURL: null,
        // imageURL: 'offers/gruyere_offer.jpg',
        isActive: true,
        description_EN:
          'Savory and nutty, our gruyere cheese offers a rich flavor profile that is both sweet and slightly salty. Its smooth, creamy texture makes it ideal for melting, making it a favorite for fondues, gratins, and gourmet sandwiches.',
        description_HE:
          "גבינת הגרוייר שלנו בעלת טעם עשיר שמשלב מתיקות ומעט מליחות. המרקם החלק והשמנתי שלה מושלם להמסה, והיא פופולרית במיוחד לפונדו, גרטנים וסנדוויצ'ים גורמה.",
        farmerId: 4,
        productId: 37,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Gruyere Cheese',
        name_HE: 'גבינת גרוייר',
      },
      {
        unit: '400 g',
        price: 70,
        imageURL: null,
        // imageURL: 'offers/feta_offer.jpg',
        isActive: true,
        description_EN:
          'This crumbly feta cheese is made from fresh sheep and goat milk, providing a tangy and slightly salty flavor. It is perfect for adding a burst of flavor to salads, pastries, and Mediterranean dishes, enhancing their taste with its distinct and bold profile.',
        description_HE:
          'גבינת פטה מתפוררת זו מיוצרת מחלב כבשים ועיזים טרי, ומספקת טעם חמצמץ וקצת מלוח. היא מושלמת להוספת פרץ של טעם לסלטים, מאפים ומנות ים תיכוניות, ומשפרת את טעמן בפרופיל הטעם הייחודי והעז שלה.',
        farmerId: 4,
        productId: 38,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Feta Cheese',
        name_HE: 'גבינת פטה',
      },
      {
        unit: '350 g',
        price: 50,
        imageURL: null,
        // imageURL: 'offers/swiss_cheese_offer.jpg',
        isActive: true,
        description_EN:
          'Our classic Swiss cheese is known for its mild, nutty flavor and signature holes. With a firm texture and a smooth, creamy finish, it is perfect for slicing onto sandwiches, melting into fondue, or enjoying as a snack with fresh fruit.',
        description_HE:
          "גבינה שוויצרית קלאסית שלנו ידועה בטעם האגוזי והעדין שלה ובחורים הייחודיים שלה. יש לה מרקם קשה וגימור חלק ושמנתי, והיא מושלמת לחיתוך לסנדוויצ'ים, להמסה לפונדו או להנאה כחטיף עם פירות טריים.",
        farmerId: 4,
        productId: 39,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Swiss Cheese',
        name_HE: 'גבינה שוויצרית',
      },
      {
        unit: '250 g',
        price: 63,
        imageURL: null,
        // imageURL: 'offers/provolone_offer.jpg',
        isActive: true,
        description_EN:
          'Our mild provolone cheese offers a smooth and semi-soft texture with a gentle, savory flavor. It is perfect for melting in sandwiches, adding to pizzas, or serving with a charcuterie board, bringing a subtle yet delicious taste to any meal.',
        description_HE:
          "גבינת הפרובולונה העדינה שלנו מציעה מרקם חלק וחצי רך עם טעם עדין ומלוח. היא מושלמת להמסה בסנדוויצ'ים, להוספה לפיצות או להגיש עם מגש בשרים, ומוסיפה טעם עדין אך טעים לכל ארוחה.",
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
