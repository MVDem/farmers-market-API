'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('offers', [
      // Offers from the first file
      {
        unit: '200 g',
        price: 15,
        imageURL: null,
        isActive: true,
        description_EN:
          'This mature cheddar cheese offers a tangy and bold flavor, perfect for enriching sandwiches, burgers, and recipes. It has been aged with care to develop a distinctive and robust character cherished by cheese enthusiasts.',
        description_HE:
          "גבינת צ'דר מיושנת זו מציעה טעם חמצמץ ונועז, מושלמת להעשיר סנדוויצ'ים, המבורגרים ומתכונים. היא הושרה בקפידה כדי לפתח אופי ייחודי ועז שמוערך על ידי חובבי גבינות.",
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our mozzarella cheese is crafted from top-grade milk and boasts a creamy, delicate texture that melts beautifully. Ideal for pizzas, salads, and caprese, it offers a mild, milky taste that pairs well with various ingredients.',
        description_HE:
          'גבינת המוצרלה שלנו מיוצרת מחלב איכותי ומציעה מרקם עדין ושמנתי שנמס בקלות. מושלמת לפיצות, סלטים ומנות קפרזה, ומציעה טעם עדין וחלבי שמשלים מגוון מרכיבים.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our parmesan cheese is rich and nutty, aged to perfection for a robust flavor and crumbly texture. Ideal for grating over pasta, salads, and soups, it enhances the taste with its savory umami notes.',
        description_HE:
          'גבינת הפרמזן שלנו עשירה ובעלת טעם אגוזי ומרקם מתפורר, מיושנת במקצועיות לטעם עז. מושלמת לגירוד על פסטה, סלטים ומרקים, ומעשירה את הטעם עם נגיעות אומאמי מעודנות.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'This bold blue cheese features a pungent flavor and creamy texture, making it perfect for pairing with fruits, nuts, or crusty bread. Its unique taste adds a gourmet touch to any dish.',
        description_HE:
          'גבינה כחולה זו מאופיינת בטעם חריף ומרקם שמנתי, מושלמת לשילוב עם פירות, אגוזים או לחם כפרי. הטעם הייחודי שלה מוסיף נגיעה גורמה לכל מנה.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our brie cheese offers a delicate buttery flavor with a slight earthy hint. It has a soft, spreadable texture perfect for pairing with crackers, fruits, or a cheese board, providing a luxurious taste.',
        description_HE:
          'גבינת הברי שלנו מציעה טעם חמאתי עדין עם רמז קל של ארציות. יש לה מרקם רך ונוח למריחה, מושלמת לשילוב עם קרקרים, פירות או לוח גבינות, ומספקת טעם יוקרתי.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our smoked gouda cheese is crafted from premium milk and smoked for a rich, deep flavor. With a semi-hard texture and a smooth, creamy finish, it adds a smoky touch to sandwiches, salads, and cheese platters.',
        description_HE:
          "גבינת הגאודה המעושנת שלנו מיוצרת מחלב משובח ומעושנת כדי להשיג טעם עמוק ועשיר. יש לה מרקם חצי קשה וגימור חלק ושמנתי, והיא מוסיפה נגיעה מעושנת לסנדוויצ'ים, סלטים ומגשי גבינות.",
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our gruyere cheese is savory and nutty, offering a rich flavor profile that is both sweet and slightly salty. Its smooth, creamy texture is ideal for melting, making it a favorite for fondues, gratins, and gourmet sandwiches.',
        description_HE:
          "גבינת הגרוייר שלנו משלבת טעמים עשירים עם מתיקות ומליחות קלה. המרקם החלק והשמנתי שלה מושלם להמסה, והיא פופולרית במיוחד לפונדו, גרטנים וסנדוויצ'ים גורמה.",
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our feta cheese, made from fresh sheep and goat milk, provides a tangy and slightly salty flavor. Perfect for salads, pastries, and Mediterranean dishes, it enhances their taste with its bold profile.',
        description_HE:
          'גבינת פטה שלנו מיוצרת מחלב כבשים ועיזים טרי ומציעה טעם חמצמץ וקצת מלוח. מושלמת לסלטים, מאפים ומנות ים תיכוניות, ומעשירה את טעמן בפרופיל עז וייחודי.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our Swiss cheese is known for its mild, nutty flavor and characteristic holes. With a firm texture and a smooth, creamy finish, it is perfect for slicing, melting into fondue, or enjoying as a snack.',
        description_HE:
          'גבינה שוויצרית שלנו ידועה בטעם עדין ואגוזי ובחורים האופייניים שלה. יש לה מרקם קשה וגימור חלק ושמנתי, והיא מושלמת לחיתוך, להמסה בפונדו או כחטיף טעים.',
        farmerId: 11,
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
        isActive: true,
        description_EN:
          'Our provolone cheese offers a smooth and semi-soft texture with a gentle, savory flavor. It is perfect for melting in sandwiches, adding to pizzas, or serving with a charcuterie board.',
        description_HE:
          "גבינת הפרובולונה שלנו מציעה מרקם חלק וחצי רך עם טעם עדין ומלוח. היא מושלמת להמסה בסנדוויצ'ים, להוסיף לפיצות או להגיש עם לוח נקניקים.",
        farmerId: 11,
        productId: 40,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Provolone Cheese',
        name_HE: 'גבינת פרובולונה',
      },
      {
        unit: '500 g',
        price: 50,
        imageURL: null,
        isActive: true,
        description_EN:
          'Our camembert cheese has a creamy, buttery texture with a mild, earthy flavor. Ideal for baking, spreading on bread, or pairing with fruits and nuts, it provides a rich, decadent experience.',
        description_HE:
          'גבינת הקממבר שלנו בעלת מרקם שמנתי וחמאתי וטעם עדין וארצי. מושלמת לאפייה, למריחה על לחם או לשילוב עם פירות ואגוזים, והיא מספקת חוויית טעם עשירה ומפנקת.',
        farmerId: 11,
        productId: 41,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Camembert Cheese',
        name_HE: 'גבינת קממבר',
      },
      // Offers from the second file
      {
        unit: '100 g',
        price: 18,
        imageURL: null,
        isActive: true,
        description_EN:
          'Freshly baked whole grain bread with a crisp crust and soft, flavorful interior. Perfect for sandwiches or as a complement to any meal, providing a wholesome and satisfying taste.',
        description_HE:
          "לחם דגנים מלאים אפוי טרי עם קרום פריך ופנים רך וטעים. מושלם לסנדוויצ'ים או כתוספת לכל ארוחה, ומספק טעם בריא ומשביע.",
        farmerId: 11,
        productId: 29,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Whole Grain Bread',
        name_HE: 'לחם דגנים מלאים',
      },
      {
        unit: '100 g',
        price: 17,
        imageURL: null,
        isActive: true,
        description_EN:
          'A traditional loaf with a dense, hearty crumb and a crisp, flavorful crust. This bread is perfect for toasting or as a side to soups and salads, offering a rustic, homely taste.',
        description_HE:
          'כיכר לחם מסורתית עם פירור צפוף ועשיר וקרום פריך וטעים. הלחם הזה מושלם לקלייה או כתוספת למרקים וסלטים, ומציע טעם כפרי ומחבק.',
        farmerId: 11,
        productId: 30,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Traditional Loaf Bread',
        name_HE: 'כיכר לחם מסורתית',
      },
      {
        unit: '200 g',
        price: 18,
        imageURL: null,
        isActive: true,
        description_EN:
          'Homemade blueberry jam made with fresh, locally sourced blueberries. This jam offers a sweet and tangy flavor, perfect for spreading on toast or adding to desserts.',
        description_HE:
          'ריבת אוכמניות ביתית עשויה מאוכמניות טריות ומקומיות. ריבה זו מציעה טעם מתוק וחמצמץ, מושלמת למריחה על לחם או להוספה לקינוחים.',
        farmerId: 11,
        productId: 42,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Blueberry Jam',
        name_HE: 'ריבת אוכמניות',
      },
      {
        unit: '200 g',
        price: 17,
        imageURL: null,
        isActive: true,
        description_EN:
          'Rich and creamy strawberry jam made from ripe, hand-picked strawberries. Ideal for spreading on pastries or adding to yogurt, this jam delivers a burst of fruity sweetness.',
        description_HE:
          'ריבת תות עשירה ושמנתית עשויה מתותים בשלים שנקטפו ידנית. מושלמת למריחה על מאפים או להוספה ליוגורט, ריבה זו מספקת פרץ של מתיקות פרותית.',
        farmerId: 11,
        productId: 43,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Strawberry Jam',
        name_HE: 'ריבת תות',
      },
      {
        unit: '100 g',
        price: 20,
        imageURL: null,
        isActive: true,
        description_EN:
          'A sweet and tart raspberry jam, made from fresh, local raspberries. Perfect for spreading on bread, mixing into sauces, or as a filling for baked goods.',
        description_HE:
          'ריבת פטל מתוקה וחמצמצה, עשויה מפטל טרי ומקומי. מושלמת למריחה על לחם, לערבוב ברטבים, או כמילוי למאפים.',
        farmerId: 11,
        productId: 44,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Raspberry Jam',
        name_HE: 'ריבת פטל',
      },
      {
        unit: '400 g',
        price: 25,
        imageURL: null,
        isActive: true,
        description_EN:
          'Our tangy goat cheese offers a creamy, spreadable texture with a distinct flavor. Perfect for adding to salads, spreading on bread, or using as a topping for pizzas.',
        description_HE:
          'גבינת העזים שלנו בעלת טעם חמצמץ ומרקם קרמי למריחה קלה. מושלמת להוספה לסלטים, למריחה על לחם, או כתוספת לפיצות.',
        farmerId: 11,
        productId: 45,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goat Cheese',
        name_HE: 'גבינת עזים',
      },
      {
        unit: '250 g',
        price: 23,
        imageURL: null,
        isActive: true,
        description_EN:
          'This creamy ricotta cheese is perfect for adding to pasta dishes, using in desserts, or spreading on toast. Its smooth texture and mild flavor make it a versatile ingredient.',
        description_HE:
          'גבינת הריקוטה השמנתית שלנו מושלמת להוספה למנות פסטה, לשימוש בקינוחים או למריחה על לחם. המרקם החלק והטעם העדין שלה הופכים אותה למרכיב רב-שימושי.',
        farmerId: 11,
        productId: 46,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Ricotta Cheese',
        name_HE: 'גבינת ריקוטה',
      },
      {
        unit: '200 g',
        price: 18,
        imageURL: null,
        isActive: true,
        description_EN:
          'Freshly baked multigrain bread with a nutty, hearty flavor and a soft, moist crumb. Ideal for sandwiches or as a side to soups and stews.',
        description_HE:
          "לחם רב דגנים אפוי טרי עם טעם אגוזי ועשיר ופירור רך ולח. מושלם לסנדוויצ'ים או כתוספת למרקים ותבשילים.",
        farmerId: 11,
        productId: 47,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Multigrain Bread',
        name_HE: 'לחם רב דגנים',
      },
      {
        unit: '500 g',
        price: 35,
        imageURL: null,
        isActive: true,
        description_EN:
          'This artisanal sourdough bread is crafted with a tangy flavor and a chewy, flavorful crust. Perfect for sandwiches, toasting, or as a complement to cheeses and spreads.',
        description_HE:
          "לחם מחמצת בעבודת יד עם טעם חמצמץ וקרום לעיס ועשיר בטעם. מושלם לסנדוויצ'ים, לקלייה או כתוספת לגבינות וממרחים.",
        farmerId: 11,
        productId: 48,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Sourdough Bread',
        name_HE: 'לחם מחמצת',
      },
      {
        unit: '300 g',
        price: 25,
        imageURL: null,
        isActive: true,
        description_EN:
          'Our cheddar cheese offers a rich and tangy flavor with a smooth, firm texture. Perfect for grating over dishes, melting in sauces, or enjoying on its own.',
        description_HE:
          "גבינת הצ'דר שלנו מציעה טעם עשיר וחמצמץ עם מרקם חלק ויציב. מושלמת לגרד על מנות, להמסה ברטבים או ליהנות ממנה בפני עצמה.",
        farmerId: 11,
        productId: 49,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Cheddar Cheese',
        name_HE: 'גבינת צ׳דר',
      },
      {
        unit: '200 g',
        price: 22,
        imageURL: null,
        isActive: true,
        description_EN:
          'Creamy and tangy goat cheese, ideal for adding to salads, spreading on bread, or serving as an appetizer with crackers and fruits.',
        description_HE:
          'גבינת עזים קרמית וחמצמצה, מושלמת להוספה לסלטים, למריחה על לחם או להגשה כמנה ראשונה עם קרקרים ופירות.',
        farmerId: 11,
        productId: 50,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goat Cheese',
        name_HE: 'גבינת עזים',
      },
      {
        unit: '250 g',
        price: 20,
        imageURL: null,
        isActive: true,
        description_EN:
          'This feta cheese has a crumbly texture and a salty, tangy flavor. Perfect for salads, adding to savory pies, or serving as a topping for pizzas.',
        description_HE:
          'לגבינת הפטה שלנו יש מרקם מתפורר וטעם מלוח וחמצמץ. מושלמת לסלטים, להוספה לפשטידות מלוחות או להגשה כתוספת לפיצות.',
        farmerId: 11,
        productId: 51,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Feta Cheese',
        name_HE: 'גבינת פטה',
      },
      {
        unit: '200 g',
        price: 21,
        imageURL: null,
        isActive: true,
        description_EN:
          'Our mozzarella cheese is soft and milky, perfect for melting on pizzas, adding to salads, or enjoying fresh with tomatoes and basil.',
        description_HE:
          'גבינת המוצרלה שלנו רכה וחלבית, מושלמת להמסה על פיצות, להוספה לסלטים או להנאה טרייה עם עגבניות ובזיליקום.',
        farmerId: 11,
        productId: 52,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Mozzarella Cheese',
        name_HE: 'גבינת מוצרלה',
      },
      {
        unit: '150 g',
        price: 20,
        imageURL: null,
        isActive: true,
        description_EN:
          'Rich and creamy goat cheese with a tangy flavor. Ideal for salads, spreading on bread, or serving as a topping for pizzas.',
        description_HE:
          'גבינת עזים עשירה ושמנתית עם טעם חמצמץ. מושלמת לסלטים, למריחה על לחם או כתוספת לפיצות.',
        farmerId: 11,
        productId: 53,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Goat Cheese',
        name_HE: 'גבינת עזים',
      },
      {
        unit: '200 g',
        price: 15,
        imageURL: null,
        isActive: true,
        description_EN:
          'A light and fluffy ricotta cheese, ideal for adding to pasta dishes, spreading on bread, or using in desserts.',
        description_HE:
          'גבינת ריקוטה קלה ואוורירית, מושלמת להוספה למנות פסטה, למריחה על לחם או לשימוש בקינוחים.',
        farmerId: 11,
        productId: 54,
        createdAt: new Date(),
        updatedAt: new Date(),
        name_EN: 'Ricotta Cheese',
        name_HE: 'גבינת ריקוטה',
      },
    ]);
  },
  async down(queryInterface) {
    await queryInterface.bulkDelete('offers', null, {});
  },
};
