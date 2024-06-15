'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert('products', [
      // Products for Vegetables
      {
        categoryId: 1, // Vegetables
        name_EN: 'Carrot',
        name_HE: 'גזר',
        description_EN: 'Fresh organic carrots',
        description_HE: 'גזר אורגני טרי',
        imageURL: 'products/vegetables/carrot.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Tomato',
        name_HE: 'עגבנייה',
        description_EN: 'Ripe and juicy tomatoes',
        description_HE: 'עגבניות בשלות ועסיסיות',
        imageURL: 'products/vegetables/tomato.jpg', // Add this image to the products folder
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Cucumber',
        name_HE: 'מלפפון',
        description_EN: 'Crisp and fresh cucumbers',
        description_HE: 'מלפפונים פריכים וטריים',
        imageURL: 'products/vegetables/cucumber.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Bell Pepper',
        name_HE: 'פלפל',
        description_EN: 'Colorful bell peppers',
        description_HE: 'פלפלים צבעוניים',
        imageURL: 'products/vegetables/bell_pepper.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Broccoli',
        name_HE: 'ברוקולי',
        description_EN: 'Nutritious broccoli florets',
        description_HE: 'שתיית ופרחי ברוקולי',
        imageURL: 'products/vegetables/broccoli.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Spinach',
        name_HE: "ספינג'",
        description_EN: 'Tender baby spinach leaves',
        description_HE: "עלים רכים של ספינג'",
        imageURL: 'products/vegetables/spinach.WebP',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Potato',
        name_HE: 'תפוח אדמה',
        description_EN: 'Versatile potatoes for cooking',
        description_HE: 'תפוחי אדמה רב תכליתיים לבישול',
        imageURL: 'products/vegetables/potato.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Onion',
        name_HE: 'בצל',
        description_EN: 'Pungent and flavorful onions',
        description_HE: 'בצל חזק וטעים',
        imageURL: 'products/vegetables/onion.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Lettuce',
        name_HE: 'חסה',
        description_EN: 'Crisp and refreshing lettuce leaves',
        description_HE: 'עלים פריכים ומרעננים של חסה',
        imageURL: 'products/vegetables/lettuce.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 1, // Vegetables
        name_EN: 'Zucchini',
        name_HE: 'קישוא',
        description_EN: 'Versatile zucchini for cooking',
        description_HE: 'קישואים רב תכליתיים לבישול',
        imageURL: 'products/vegetables/zucchini.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Fruits
      {
        categoryId: 2, // Fruits
        name_EN: 'Apple',
        name_HE: 'תפוח',
        description_EN: 'Crisp and sweet apples',
        description_HE: 'תפוחים פריכים ומתוקים',
        imageURL: 'products/fruits/apple.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Banana',
        name_HE: 'בננה',
        description_EN: 'Ripe and creamy bananas',
        description_HE: 'בננות רכות וקרמיות',
        imageURL: 'products/fruits/banana.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Orange',
        name_HE: 'תפוז',
        description_EN: 'Juicy and tangy oranges',
        description_HE: 'תפוחים עסיסיים ומרעננים',
        imageURL: 'products/fruits/orange.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Grapes',
        name_HE: 'ענבים',
        description_EN: 'Sweet and juicy grapes',
        description_HE: 'ענבים מתוקים ועסיסיים',
        imageURL: 'products/fruits/grapes.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Strawberry',
        name_HE: 'תות',
        description_EN: 'Plump and flavorful strawberries',
        description_HE: 'תותים רכים וטעימים',
        imageURL: 'products/fruits/strawberry.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Pineapple',
        name_HE: 'אננס',
        description_EN: 'Sweet and tropical pineapple',
        description_HE: 'אננס מתוק וטרופי',
        imageURL: 'products/fruits/pineapple.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Mango',
        name_HE: 'מנגו',
        description_EN: 'Juicy and aromatic mango',
        description_HE: 'מנגו מעורר ועסיסי',
        imageURL: 'products/fruits/mango.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Kiwi',
        name_HE: 'קיווי',
        description_EN: 'Tangy and refreshing kiwi',
        description_HE: 'קיווי חמצמץ ומרענן',
        imageURL: 'products/fruits/kiwi.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Pear',
        name_HE: 'אגס',
        description_EN: 'Sweet and juicy pears',
        description_HE: 'אגסים מתוקים ועסיסיים',
        imageURL: 'products/fruits/pear.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 2, // Fruits
        name_EN: 'Peach',
        name_HE: 'אפרסק',
        description_EN: 'Juicy and fragrant peaches',
        description_HE: 'אפרסקים עסיסיים וריחניים',
        imageURL: 'products/fruits/peach.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Meat
      {
        categoryId: 3, // Meat
        name_EN: 'Beef Steak',
        name_HE: 'סטייק בקר',
        description_EN: 'Tender and flavorful beef steak',
        description_HE: 'סטייק בקר רך וטעים',
        imageURL: 'products/meat/beef_steak.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Chicken Breast',
        name_HE: 'חזה עוף',
        description_EN: 'Boneless and skinless chicken breast',
        description_HE: 'חזה עוף ללא עצמות וללא עור',
        imageURL: 'products/meat/chicken_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Lamb Chop',
        name_HE: 'צלעות כבש',
        description_EN: 'Juicy and tender lamb chops',
        description_HE: 'צלעות כבש עסיסיות ורכות',
        imageURL: 'products/meat/lamb_chop.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Pork Ribs',
        name_HE: 'צלעות חזיר',
        description_EN: 'Succulent and flavorful pork ribs',
        description_HE: 'צלעות חזיר מרגיעות וטעימות',
        imageURL: 'products/meat/pork_ribs.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Ground Beef',
        name_HE: 'בשר בקר מטוגן',
        description_EN: 'Lean ground beef for versatile cooking',
        description_HE: 'בשר בקר טחון טחון לבישול מגוון',
        imageURL: 'products/meat/ground_beef.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Turkey Breast',
        name_HE: 'חזה הודו',
        description_EN: 'Lean and tender turkey breast',
        description_HE: 'חזה הודו טחון ורך',
        imageURL: 'products/meat/turkey_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Duck Breast',
        name_HE: 'חזה ברווז',
        description_EN: 'Rich and succulent duck breast',
        description_HE: 'חזה ברווז רך ועשיר',
        imageURL: 'products/meat/duck_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Veal Chop',
        name_HE: 'צלעות עגל',
        description_EN: 'Tender and delicate veal chops',
        description_HE: 'צלעות עגל רכות ועדינות',
        imageURL: 'products/meat/veal_chop.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Salami',
        name_HE: 'סלמי',
        description_EN: 'Savory and flavorful salami slices',
        description_HE: 'חתיכות סלמי טעימות ומרירות',
        imageURL: 'products/meat/salami.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 3, // Meat
        name_EN: 'Bacon',
        name_HE: 'בקון',
        description_EN: 'Crispy and smoky bacon strips',
        description_HE: 'רצועות בקון צריכות ומעושנות',
        imageURL: 'products/meat/bacon.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Cheese
      {
        categoryId: 4, // Cheese
        name_EN: 'Cheddar Cheese',
        name_HE: "גבינת צ'דר",
        description_EN: 'Sharp and aged cheddar cheese',
        description_HE: "גבינת צ'דר מוזקת ומיושנת",
        imageURL: 'products/cheese/cheddar_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Mozzarella Cheese',
        name_HE: 'גבינת מוצרלה',
        description_EN: 'Soft and creamy mozzarella cheese',
        description_HE: 'גבינת מוצרלה רכה וקרמית',
        imageURL: 'products/cheese/mozzarella_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Parmesan Cheese',
        name_HE: 'גבינת פרמזן',
        description_EN: 'Sharp and nutty parmesan cheese',
        description_HE: 'גבינת פרמזן מוזקת ואגוזית',
        imageURL: 'products/cheese/parmesan_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Brie Cheese',
        name_HE: 'גבינת ברי',
        description_EN: 'Creamy and mild brie cheese',
        description_HE: 'גבינת ברי קרמית ורכה',
        imageURL: 'products/cheese/brie_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Camembert Cheese',
        name_HE: 'גבינת קממבר',
        description_EN: 'Soft and creamy camembert cheese',
        description_HE: 'גבינת קממבר רכה וקרמית',
        imageURL: 'products/cheese/camembert_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Gouda Cheese',
        name_HE: 'גבינת גודה',
        description_EN: 'Semi-hard and nutty gouda cheese',
        description_HE: 'גבינת גודה חצי קשה ואגוזית',
        imageURL: 'products/cheese/gouda_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Blue Cheese',
        name_HE: 'גבינת בלו',
        description_EN: 'Bold and tangy blue cheese',
        description_HE: 'גבינת בלו עזה ומתובלת',
        imageURL: 'products/cheese/blue_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Swiss Cheese',
        name_HE: 'גבינת שוויצרית',
        description_EN: 'Holey and nutty swiss cheese',
        description_HE: 'גבינת שוויצרית עם חורים ואגוזית',
        imageURL: 'products/cheese/swiss_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Feta Cheese',
        name_HE: 'גבינת פטה',
        description_EN: 'Salty and crumbly feta cheese',
        description_HE: 'גבינת פטה מלוחה וקרירה',
        imageURL: 'products/cheese/feta_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 4, // Cheese
        name_EN: 'Goat Cheese',
        name_HE: 'גבינת עיזים',
        description_EN: 'Tangy and creamy goat cheese',
        description_HE: 'גבינת עיזים מתובלת וקרמית',
        imageURL: 'products/cheese/goat_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Dairy
      {
        categoryId: 5, // Dairy
        name_EN: 'Milk',
        name_HE: 'חלב',
        description_EN: 'Fresh and nutritious cow milk',
        description_HE: 'חלב טרי ומזין מבקר',
        imageURL: 'products/dairy/milk.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Yogurt',
        name_HE: 'יוגורט',
        description_EN: 'Creamy and delicious yogurt',
        description_HE: 'יוגורט קרמי וטעים',
        imageURL: 'products/dairy/yogurt.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Cheese Spread',
        name_HE: 'ממרח גבינה',
        description_EN: 'Smooth and creamy cheese spread',
        description_HE: 'ממרח גבינה חלק וקרמי',
        imageURL: 'products/dairy/cheese_spread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Butter',
        name_HE: 'חמאה',
        description_EN: 'Rich and creamy butter',
        description_HE: 'חמאה רכה וקרמית',
        imageURL: 'products/dairy/butter.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Sour Cream',
        name_HE: 'קרם חמוץ',
        description_EN: 'Tangy and rich sour cream',
        description_HE: 'קרם חמוץ מתוק ועשיר',
        imageURL: 'products/dairy/sour_cream.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Whipped Cream',
        name_HE: 'קרם מתוק',
        description_EN: 'Light and fluffy whipped cream',
        description_HE: 'קרם מתוק רך ואוורירי',
        imageURL: 'products/dairy/whipped_cream.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Cottage Cheese',
        name_HE: "גבינת קוטג'",
        description_EN: 'Soft and crumbly cottage cheese',
        description_HE: "גבינת קוטג' רכה וגריזלית",
        imageURL: 'products/dairy/cottage_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Cream Cheese',
        name_HE: 'גבינת שמנת',
        description_EN: 'Smooth and spreadable cream cheese',
        description_HE: 'גבינת שמנת חלקה ומתפשטת',
        imageURL: 'products/dairy/cream_cheese.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Evaporated Milk',
        name_HE: 'חלב מרוכז',
        description_EN: 'Concentrated and creamy evaporated milk',
        description_HE: 'חלב מרוכז רך ומרוכז',
        imageURL: 'products/dairy/evaporated_milk.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 5, // Dairy
        name_EN: 'Condensed Milk',
        name_HE: 'חלב ממותק',
        description_EN: 'Sweet and thick condensed milk',
        description_HE: 'חלב ממותק עבה ומתוק',
        imageURL: 'products/dairy/condensed_milk.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Bread
      {
        categoryId: 6, // Bread
        name_EN: 'Whole Wheat Bread',
        name_HE: 'לחם חיטה מלאה',
        description_EN: 'Healthy whole wheat bread',
        description_HE: 'לחם חיטה מלאה בריא',
        imageURL: 'products/bread/whole_wheat_bread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Baguette',
        name_HE: 'באגט',
        description_EN: 'Classic French baguette',
        description_HE: 'באגט צרפתי קלאסי',
        imageURL: 'products/bread/baguette.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Rye Bread',
        name_HE: 'לחם שיפון',
        description_EN: 'Dense and flavorful rye bread',
        description_HE: 'לחם שיפון דחוס וטעים',
        imageURL: 'products/bread/rye_bread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Sourdough Bread',
        name_HE: 'לחם שאור',
        description_EN: 'Tangy and crusty sourdough bread',
        description_HE: 'לחם שאור חמוץ ופריך',
        imageURL: 'products/bread/sourdough_bread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Multigrain Bread',
        name_HE: 'לחם רב דגנים',
        description_EN: 'Hearty multigrain bread',
        description_HE: 'לחם רב דגנים מזין',
        imageURL: 'products/bread/multigrain_bread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Ciabatta',
        name_HE: "צ'באטה",
        description_EN: 'Italian ciabatta bread',
        description_HE: "לחם צ'באטה איטלקי",
        imageURL: 'products/bread/ciabatta.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Pita Bread',
        name_HE: 'פיתה',
        description_EN: 'Soft and fluffy pita bread',
        description_HE: 'פיתה רכה וקלילה',
        imageURL: 'products/bread/pita_bread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Brioche',
        name_HE: 'בריוש',
        description_EN: 'Rich and buttery brioche',
        description_HE: 'בריוש עשיר וחמאתי',
        imageURL: 'products/bread/brioche.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Cornbread',
        name_HE: 'לחם תירס',
        description_EN: 'Sweet and moist cornbread',
        description_HE: 'לחם תירס מתוק ולח',
        imageURL: 'products/bread/cornbread.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 6, // Bread
        name_EN: 'Naan',
        name_HE: 'נאן',
        description_EN: 'Soft and chewy naan bread',
        description_HE: 'לחם נאן רך וגבישי',
        imageURL: 'products/bread/naan.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Fish
      {
        categoryId: 7, // Fish
        name_EN: 'Salmon',
        name_HE: 'סלמון',
        description_EN: 'Fresh Atlantic salmon',
        description_HE: 'סלמון אטלנטי טרי',
        imageURL: 'products/fish/salmon.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Tuna',
        name_HE: 'טונה',
        description_EN: 'Fresh tuna steaks',
        description_HE: 'סטייקים טריים של טונה',
        imageURL: 'products/fish/tuna.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Trout',
        name_HE: 'פורל',
        description_EN: 'Farm-raised rainbow trout',
        description_HE: 'פורל קשת מגידול חקלאי',
        imageURL: 'products/fish/trout.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Cod',
        name_HE: 'קוד',
        description_EN: 'Wild-caught Atlantic cod',
        description_HE: 'קוד אטלנטי שנלכד בטבע',
        imageURL: 'products/fish/cod.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Haddock',
        name_HE: 'הדוק',
        description_EN: 'Fresh haddock fillets',
        description_HE: 'פילה הדוק טרי',
        imageURL: 'products/fish/haddock.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Mackerel',
        name_HE: 'מקרל',
        description_EN: 'Rich and flavorful mackerel',
        description_HE: 'מקרל עשיר וטעים',
        imageURL: 'products/fish/mackerel.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Sardines',
        name_HE: 'סרדינים',
        description_EN: 'Fresh and nutritious sardines',
        description_HE: 'סרדינים טריים ומזינים',
        imageURL: 'products/fish/sardines.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Tilapia',
        name_HE: 'טילאפיה',
        description_EN: 'Farm-raised tilapia fillets',
        description_HE: 'פילה טילאפיה מגידול חקלאי',
        imageURL: 'products/fish/tilapia.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Sea Bass',
        name_HE: 'בס ים',
        description_EN: 'Delicious sea bass fillets',
        description_HE: 'פילה בס ים טעים',
        imageURL: 'products/fish/seabass.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 7, // Fish
        name_EN: 'Halibut',
        name_HE: 'הליבוט',
        description_EN: 'Premium quality halibut',
        description_HE: 'הליבוט איכותי במיוחד',
        imageURL: 'products/fish/halibut.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      // Products for Poultry
      {
        categoryId: 8, // Poultry
        name_EN: 'Chicken Breast',
        name_HE: 'חזה עוף',
        description_EN: 'Boneless, skinless chicken breast',
        description_HE: 'חזה עוף ללא עצמות ועור',
        imageURL: 'products/poultry/chicken_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Chicken Thighs',
        name_HE: 'ירכי עוף',
        description_EN: 'Juicy and tender chicken thighs',
        description_HE: 'ירכי עוף עסיסיות ורכות',
        imageURL: 'products/poultry/chicken_thighs.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Whole Chicken',
        name_HE: 'עוף שלם',
        description_EN: 'Fresh whole chicken for roasting',
        description_HE: 'עוף שלם טרי לצלייה',
        imageURL: 'products/poultry/whole_chicken.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Turkey Breast',
        name_HE: 'חזה הודו',
        description_EN: 'Lean and tender turkey breast',
        description_HE: 'חזה הודו רזה ורך',
        imageURL: 'products/poultry/turkey_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Duck Breast',
        name_HE: 'חזה ברווז',
        description_EN: 'Rich and flavorful duck breast',
        description_HE: 'חזה ברווז עשיר וטעים',
        imageURL: 'products/poultry/duck_breast.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Chicken Wings',
        name_HE: 'כנפי עוף',
        description_EN: 'Perfect for grilling or frying',
        description_HE: 'מושלם לצלייה או טיגון',
        imageURL: 'products/poultry/chicken_wings.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Ground Chicken',
        name_HE: 'עוף טחון',
        description_EN: 'Versatile ground chicken for various recipes',
        description_HE: 'עוף טחון רב תכליתי למתכונים שונים',
        imageURL: 'products/poultry/ground_chicken.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Turkey Legs',
        name_HE: 'רגלי הודו',
        description_EN: 'Savory turkey legs for roasting',
        description_HE: 'רגלי הודו מלוחים לצלייה',
        imageURL: 'products/poultry/turkey_legs.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Chicken Drumsticks',
        name_HE: 'שוקי עוף',
        description_EN: 'Juicy and tender drumsticks',
        description_HE: 'שוקי עוף עסיסיות ורכות',
        imageURL: 'products/poultry/chicken_drumsticks.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        categoryId: 8, // Poultry
        name_EN: 'Cornish Hen',
        name_HE: 'תרנגול קורניש',
        description_EN: 'Tender and flavorful Cornish hen',
        description_HE: 'תרנגול קורניש רך וטעים',
        imageURL: 'products/poultry/cornish_hen.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface) {
    await queryInterface.bulkDelete('products', null, {});
  },
};
