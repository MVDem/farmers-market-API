import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import * as dotenv from 'dotenv';
//import { Offer } from 'src/offers/offers.model';

import * as fs from 'fs';//
import * as path from 'path';

// Установка verbose: false для Jest прямо внутри файла спецификации (spec)
//-jest.spyOn(global.console, 'log').mockImplementation(() => {});

dotenv.config({ path: '.development.env' });



describe('ProductsService', () => {
  let service: ProductsService;
  let module: TestingModule;

  beforeEach(async () => {
    module = await Test.createTestingModule({
      imports: [
        ConfigModule.forRoot({
          isGlobal: true,
          envFilePath: '.development.env',
        }),
        SequelizeModule.forRoot({
          dialect: 'postgres',
          host: process.env.POSTGRES_HOST,
          port: Number(process.env.POSTGRESS_PORT),
          username: process.env.POSTGRES_USER,
          password: process.env.POSTGRES_PASSWORD,
          database: process.env.POSTGRES_DATABASE,
          autoLoadModels: true,
          synchronize: true,
          logging: false, // Отключение логов
        }),
        SequelizeModule.forFeature([Product]),
      ],
      providers: [ProductsService],
    }).compile();

    service = module.get<ProductsService>(ProductsService);
  });

  afterEach(async () => {
    await module.close();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return all product names', async () => {
    // Кофейные продукты
    await service.create({
      category: "Single-Origin",
      nameENG: "Kenya AA",
      nameHEB: "קניה AA",
      descriptionENG: "A bright and fruity coffee with a citrusy acidity.",
      descriptionHEB: "קפה בהיר ופירותי עם חומציות הדרית.",
      photo: "http://photo.com/photo_coffee_kenya_aa.jpg"
    });
  
    await service.create({
      category: "Espresso",
      nameENG: "Italian Espresso",
      nameHEB: "אספרסו איטלקי",
      descriptionENG: "A rich and bold espresso with a creamy texture.",
      descriptionHEB: "אספרסו עשיר ונועז עם מרקם קרמי.",
      photo: "http://photo.com/photo_coffee_italian_espresso.jpg"
    });
  
    await service.create({
      category: "Blends",
      nameENG: "Breakfast Blend",
      nameHEB: "תערובת ארוחת בוקר",
      descriptionENG: "A balanced blend perfect for a morning pick-me-up.",
      descriptionHEB: "תערובת מאוזנת שמתאימה להמרצת הבוקר.",
      photo: "http://photo.com/photo_coffee_breakfast_blend.jpg"
    });
  
    // Молочные продукты
    await service.create({
      category: "Cheese",
      nameENG: "Gouda",
      nameHEB: "גאודה",
      descriptionENG: "A semi-hard cheese with a springy texture and caramel-like flavor.",
      descriptionHEB: "גבינה חצי-קשה עם מרקם קפיצי וטעם קרמלי.",
      photo: "http://photo.com/photo_cheese_gouda.jpg"
    });
  
    await service.create({
      category: "Milk",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_dairy_whole_milk.jpg"
    });
  
    // Сельскохозяйственная продукция
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_agri_granny_smith.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots perfect for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_agri_organic_carrot.jpg"
    });
  });

  it('should return all product names', async () => {
    // Fresh Produce
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Salmon Fillet",
      nameHEB: "פילה סלמון",
      descriptionENG: "Fresh and tender salmon fillets ideal for grilling and baking.",
      descriptionHEB: "פילה סלמון טרי ועדין שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_salmon_fillet.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Shrimp",
      nameHEB: "שרימפס",
      descriptionENG: "Juicy and succulent shrimp perfect for seafood dishes.",
      descriptionHEB: "שרימפס עסיסי ומתאים למאכלי ים.",
      photo: "http://photo.com/photo_shrimp.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Pork Chops",
      nameHEB: "צלעות חזיר",
      descriptionENG: "Tender and flavorful pork chops ideal for grilling.",
      descriptionHEB: "צלעות חזיר רכות וטעימות שמתאימות לצלייה.",
      photo: "http://photo.com/photo_pork_chops.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Bacon",
      nameHEB: "בייקון",
      descriptionENG: "Crispy and savory bacon perfect for breakfast.",
      descriptionHEB: "בייקון קריספי וטעים שמתאים לארוחת בוקר.",
      photo: "http://photo.com/photo_bacon.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Turkey Breast",
      nameHEB: "חזה הודו",
      descriptionENG: "Lean and tender turkey breast for roasting.",
      descriptionHEB: "חזה הודו רזה ועדין שמתאים לצלייה.",
      photo: "http://photo.com/photo_turkey_breast.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Tilapia Fillet",
      nameHEB: "פילה טילפיה",
      descriptionENG: "Mild and flaky tilapia fillets ideal for baking.",
      descriptionHEB: "פילה טילפיה עדין ומתאים לאפייה.",
      photo: "http://photo.com/photo_tilapia_fillet.jpg"
    });
  
    // Baked Goods
    await service.create({
      category: "Bakery",
      nameENG: "Whole Wheat Bread",
      nameHEB: "לחם חיטה מלאה",
      descriptionENG: "Nutritious whole wheat bread perfect for sandwiches.",
      descriptionHEB: "לחם חיטה מלאה מזין שמתאים לכריכים.",
      photo: "http://photo.com/photo_whole_wheat_bread.jpg"
    });
  
    await service.create({
      category: "Bakery",
      nameENG: "Bagels",
      nameHEB: "בייגלים",
      descriptionENG: "Soft and chewy bagels ideal for breakfast.",
      descriptionHEB: "בייגלים רכים וטעימים שמתאימים לארוחת בוקר.",
      photo: "http://photo.com/photo_bagels.jpg"
    });
  

    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Salmon Fillet",
      nameHEB: "פילה סלמון",
      descriptionENG: "Fresh and tender salmon fillets ideal for grilling and baking.",
      descriptionHEB: "פילה סלמון טרי ועדין שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_salmon_fillet.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Shrimp",
      nameHEB: "שרימפס",
      descriptionENG: "Juicy and succulent shrimp perfect for seafood dishes.",
      descriptionHEB: "שרימפס עסיסי ומתאים למאכלי ים.",
      photo: "http://photo.com/photo_shrimp.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Pork Chops",
      nameHEB: "צלעות חזיר",
      descriptionENG: "Tender and flavorful pork chops ideal for grilling.",
      descriptionHEB: "צלעות חזיר רכות וטעימות שמתאימות לצלייה.",
      photo: "http://photo.com/photo_pork_chops.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Bacon",
      nameHEB: "בייקון",
      descriptionENG: "Crispy and savory bacon perfect for breakfast.",
      descriptionHEB: "בייקון קריספי וטעים שמתאים לארוחת בוקר.",
      photo: "http://photo.com/photo_bacon.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Turkey Breast",
      nameHEB: "חזה הודו",
      descriptionENG: "Lean and tender turkey breast for roasting.",
      descriptionHEB: "חזה הודו רזה ועדין שמתאים לצלייה.",
      photo: "http://photo.com/photo_turkey_breast.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Tilapia Fillet",
      nameHEB: "פילה טילפיה",
      descriptionENG: "Mild and flaky tilapia fillets ideal for baking.",
      descriptionHEB: "פילה טילפיה עדין ומתאים לאפייה.",
      photo: "http://photo.com/photo_tilapia_fillet.jpg"
    });
  
    // Baked Goods
    await service.create({
      category: "Bakery",
      nameENG: "Whole Wheat Bread",
      nameHEB: "לחם חיטה מלאה",
      descriptionENG: "Nutritious whole wheat bread perfect for sandwiches.",
      descriptionHEB: "לחם חיטה מלאה מזין שמתאים לכריכים.",
      photo: "http://photo.com/photo_whole_wheat_bread.jpg"
    });
  
    await service.create({
      category: "Bakery",
      nameENG: "Bagels",
      nameHEB: "בייגלים",
      descriptionENG: "Soft and chewy bagels ideal for breakfast.",
      descriptionHEB: "בייגלים רכים וטעימים שמתאימים לארוחת בוקר.",
      photo: "http://photo.com/photo_bagels.jpg"
    });
  
 
    // Fresh Produce
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Salmon Fillet",
      nameHEB: "פילה סלמון",
      descriptionENG: "Fresh and tender salmon fillets ideal for grilling and baking.",
      descriptionHEB: "פילה סלמון טרי ועדין שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_salmon_fillet.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Shrimp",
      nameHEB: "שרימפס",
      descriptionENG: "Juicy and succulent shrimp perfect for seafood dishes.",
      descriptionHEB: "שרימפס עסיסי ומתאים למאכלי ים.",
      photo: "http://photo.com/photo_shrimp.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Pork Chops",
      nameHEB: "צלעות חזיר",
      descriptionENG: "Tender and flavorful pork chops ideal for grilling.",
      descriptionHEB: "צלעות חזיר רכות וטעימות שמתאימות לצלייה.",
      photo: "http://photo.com/photo_pork_chops.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Bacon",
      nameHEB: "בייקון",
      descriptionENG: "Crispy and savory bacon perfect for breakfast.",
      descriptionHEB: "בייקון קריספי וטעים שמתאים לארוחת בוקר.",
      photo: "http://photo.com/photo_bacon.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Turkey Breast",
      nameHEB: "חזה הודו",
      descriptionENG: "Lean and tender turkey breast for roasting.",
      descriptionHEB: "חזה הודו רזה ועדין שמתאים לצלייה.",
      photo: "http://photo.com/photo_turkey_breast.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Tilapia Fillet",
      nameHEB: "פילה טילפיה",
      descriptionENG: "Mild and flaky tilapia fillets ideal for baking.",
      descriptionHEB: "פילה טילפיה עדין ומתאים לאפייה.",
      photo: "http://photo.com/photo_tilapia_fillet.jpg"
    });
  
    // Baked Goods
    await service.create({
      category: "Bakery",
      nameENG: "Whole Wheat Bread",
      nameHEB: "לחם חיטה מלאה",
      descriptionENG: "Nutritious whole wheat bread perfect for sandwiches.",
      descriptionHEB: "לחם חיטה מלאה מזין שמתאים לכריכים.",
      photo: "http://photo.com/photo_whole_wheat_bread.jpg"
    });
  
    await service.create({
      category: "Bakery",
      nameENG: "Bagels",
      nameHEB: "בייגלים",
      descriptionENG: "Soft and chewy bagels ideal for breakfast.",
      descriptionHEB: "בייגלים רכים וטעימים שמתאימים לארוחת בוקר.",
      photo: "http://photo.com/photo_bagels.jpg"
    });


    // Fresh Produce
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Salmon Fillet",
      nameHEB: "פילה סלמון",
      descriptionENG: "Fresh and tender salmon fillets ideal for grilling and baking.",
      descriptionHEB: "פילה סלמון טרי ועדין שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_salmon_fillet.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Shrimp",
      nameHEB: "שרימפס",
      descriptionENG: "Juicy and succulent shrimp perfect for seafood dishes.",
      descriptionHEB: "שרימפס עסיסי ומתאים למאכלי ים.",
      photo: "http://photo.com/photo_shrimp.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Pork Chops",
      nameHEB: "צלעות חזיר",
      descriptionENG: "Tender and flavorful pork chops ideal for grilling.",
      descriptionHEB: "צלעות חזיר רכות וטעימות שמתאימות לצלייה.",
      photo: "http://photo.com/photo_pork_chops.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Bacon",
      nameHEB: "בייקון",
      descriptionENG: "Crispy and savory bacon perfect for breakfast.",
      descriptionHEB: "בייקון קריספי וטעים שמתאים לארוחת בוקר.",
      photo: "http://photo.com/photo_bacon.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Turkey Breast",
      nameHEB: "חזה הודו",
      descriptionENG: "Lean and tender turkey breast for roasting.",
      descriptionHEB: "חזה הודו רזה ועדין שמתאים לצלייה.",
      photo: "http://photo.com/photo_turkey_breast.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Tilapia Fillet",
      nameHEB: "פילה טילפיה",
      descriptionENG: "Mild and flaky tilapia fillets ideal for baking.",
      descriptionHEB: "פילה טילפיה עדין ומתאים לאפייה.",
      photo: "http://photo.com/photo_tilapia_fillet.jpg"
    });
  
    // Baked Goods
    await service.create({
      category: "Bakery",
      nameENG: "Whole Wheat Bread",
      nameHEB: "לחם חיטה מלאה",
      descriptionENG: "Nutritious whole wheat bread perfect for sandwiches.",
      descriptionHEB: "לחם חיטה מלאה מזין שמתאים לכריכים.",
      photo: "http://photo.com/photo_whole_wheat_bread.jpg"
    });
  
    await service.create({
      category: "Bakery",
      nameENG: "Bagels",
      nameHEB: "בייגלים",
      descriptionENG: "Soft and chewy bagels ideal for breakfast.",
      descriptionHEB: "בייגלים רכים וטעימים שמתאימים לארוחת בוקר.",
      photo: "http://photo.com/photo_bagels.jpg"
    });
  
    // Fresh Produce
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cucumber",
      nameHEB: "מלפפון",
      descriptionENG: "Crisp and refreshing cucumbers perfect for salads and snacks.",
      descriptionHEB: "מלפפונים פריכים ומרעננים שמתאימים לסלטים ונשנושים.",
      photo: "http://photo.com/photo_cucumber.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Bell Pepper",
      nameHEB: "פלפל מתוק",
      descriptionENG: "Colorful and crunchy bell peppers ideal for salads and stir-fries.",
      descriptionHEB: "פלפלים מתוקים צבעוניים ופריכים שמתאימים לסלטים ומוקפצים.",
      photo: "http://photo.com/photo_bell_pepper.jpg"
    });
  
    // Continue adding entries for more products...
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Mozzarella Cheese",
      nameHEB: "גבינת מוצרלה",
      descriptionENG: "Soft and creamy mozzarella cheese perfect for pizzas and salads.",
      descriptionHEB: "גבינת מוצרלה רכה וקרמית שמתאימה לפיצות וסלטים.",
      photo: "http://photo.com/photo_mozzarella_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cottage Cheese",
      nameHEB: "גבינת קוטג'",
      descriptionENG: "Creamy cottage cheese ideal for a healthy snack.",
      descriptionHEB: "גבינת קוטג' קרמית שמתאימה לנשנוש בריא.",
      photo: "http://photo.com/photo_cottage_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Sour Cream",
      nameHEB: "שמנת חמוצה",
      descriptionENG: "Rich and tangy sour cream perfect for dips and baking.",
      descriptionHEB: "שמנת חמוצה עשירה וחמצמצה שמתאימה למטבלים ואפייה.",
      photo: "http://photo.com/photo_sour_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Swiss Cheese",
      nameHEB: "גבינה שוויצרית",
      descriptionENG: "Mild and nutty Swiss cheese ideal for sandwiches.",
      descriptionHEB: "גבינה שוויצרית עדינה ואגוזית שמתאימה לכריכים.",
      photo: "http://photo.com/photo_swiss_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cream Cheese",
      nameHEB: "גבינת שמנת",
      descriptionENG: "Smooth and creamy cream cheese perfect for bagels and desserts.",
      descriptionHEB: "גבינת שמנת חלקה וקרמית שמתאימה לבייגלים וקינוחים.",
      photo: "http://photo.com/photo_cream_cheese.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });

    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
    //---------------------------------------------------------------------------------
  
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Salmon Fillet",
      nameHEB: "פילה סלמון",
      descriptionENG: "Fresh and tender salmon fillets ideal for grilling and baking.",
      descriptionHEB: "פילה סלמון טרי ועדין שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_salmon_fillet.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Shrimp",
      nameHEB: "שרימפס",
      descriptionENG: "Juicy and succulent shrimp perfect for seafood dishes.",
      descriptionHEB: "שרימפס עסיסי ומתאים למאכלי ים.",
      photo: "http://photo.com/photo_shrimp.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Pork Chops",
      nameHEB: "צלעות חזיר",
      descriptionENG: "Tender and flavorful pork chops ideal for grilling.",
      descriptionHEB: "צלעות חזיר רכות וטעימות שמתאימות לצלייה.",
      photo: "http://photo.com/photo_pork_chops.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Bacon",
      nameHEB: "בייקון",
      descriptionENG: "Crispy and savory bacon perfect for breakfast.",
      descriptionHEB: "בייקון קריספי וטעים שמתאים לארוחת בוקר.",
      photo: "http://photo.com/photo_bacon.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Turkey Breast",
      nameHEB: "חזה הודו",
      descriptionENG: "Lean and tender turkey breast for roasting.",
      descriptionHEB: "חזה הודו רזה ועדין שמתאים לצלייה.",
      photo: "http://photo.com/photo_turkey_breast.jpg"
    });
  
    await service.create({
      category: "Seafood",
      nameENG: "Tilapia Fillet",
      nameHEB: "פילה טילפיה",
      descriptionENG: "Mild and flaky tilapia fillets ideal for baking.",
      descriptionHEB: "פילה טילפיה עדין ומתאים לאפייה.",
      photo: "http://photo.com/photo_tilapia_fillet.jpg"
    });
  
    // Baked Goods
    await service.create({
      category: "Bakery",
      nameENG: "Whole Wheat Bread",
      nameHEB: "לחם חיטה מלאה",
      descriptionENG: "Nutritious whole wheat bread perfect for sandwiches.",
      descriptionHEB: "לחם חיטה מלאה מזין שמתאים לכריכים.",
      photo: "http://photo.com/photo_whole_wheat_bread.jpg"
    });
  
    await service.create({
      category: "Bakery",
      nameENG: "Bagels",
      nameHEB: "בייגלים",
      descriptionENG: "Soft and chewy bagels ideal for breakfast.",
      descriptionHEB: "בייגלים רכים וטעימים שמתאימים לארוחת ב",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });

    // Fresh Produce
    await service.create({
      category: "Fruits",
      nameENG: "Granny Smith Apple",
      nameHEB: "תפוח גרני סמיט",
      descriptionENG: "Crisp and tart green apples perfect for snacking and baking.",
      descriptionHEB: "תפוחים ירוקים פריכים וחמוצים שמתאימים לנשנוש ואפייה.",
      photo: "http://photo.com/photo_granny_smith.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Navel Orange",
      nameHEB: "תפוז נבל",
      descriptionENG: "Juicy and sweet oranges ideal for fresh juice and snacking.",
      descriptionHEB: "תפוזים עסיסיים ומתוקים שמתאימים למיץ טרי ונשנוש.",
      photo: "http://photo.com/photo_navel_orange.jpg"
    });
  
    await service.create({
      category: "Fruits",
      nameENG: "Cavendish Banana",
      nameHEB: "בננה קוונדיש",
      descriptionENG: "Classic bananas perfect for snacking and smoothies.",
      descriptionHEB: "בננות קלאסיות שמתאימות לנשנוש ושייקים.",
      photo: "http://photo.com/photo_cavendish_banana.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Organic Carrot",
      nameHEB: "גזר אורגני",
      descriptionENG: "Fresh organic carrots ideal for salads and cooking.",
      descriptionHEB: "גזרים אורגניים טריים שמתאימים לסלטים ובישול.",
      photo: "http://photo.com/photo_organic_carrot.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Russet Potato",
      nameHEB: "תפוח אדמה ראסט",
      descriptionENG: "Starchy potatoes perfect for baking and mashing.",
      descriptionHEB: "תפוחי אדמה עמילניים שמתאימים לאפייה וריסוק.",
      photo: "http://photo.com/photo_russet_potato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cherry Tomato",
      nameHEB: "עגבניות שרי",
      descriptionENG: "Sweet and juicy cherry tomatoes ideal for salads.",
      descriptionHEB: "עגבניות שרי מתוקות ועסיסיות שמתאימות לסלטים.",
      photo: "http://photo.com/photo_cherry_tomato.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Cucumber",
      nameHEB: "מלפפון",
      descriptionENG: "Crisp and refreshing cucumbers perfect for salads and snacks.",
      descriptionHEB: "מלפפונים פריכים ומרעננים שמתאימים לסלטים ונשנושים.",
      photo: "http://photo.com/photo_cucumber.jpg"
    });
  
    await service.create({
      category: "Vegetables",
      nameENG: "Bell Pepper",
      nameHEB: "פלפל מתוק",
      descriptionENG: "Colorful and crunchy bell peppers ideal for salads and stir-fries.",
      descriptionHEB: "פלפלים מתוקים צבעוניים ופריכים שמתאימים לסלטים ומוקפצים.",
      photo: "http://photo.com/photo_bell_pepper.jpg"
    });
  
    // Dairy Products
    await service.create({
      category: "Dairy",
      nameENG: "Whole Milk",
      nameHEB: "חלב מלא",
      descriptionENG: "Rich and creamy whole milk perfect for drinking and cooking.",
      descriptionHEB: "חלב מלא עשיר וקרמי שמתאים לשתייה ולבישול.",
      photo: "http://photo.com/photo_whole_milk.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cheddar Cheese",
      nameHEB: "גבינת צ'דר",
      descriptionENG: "Aged cheddar cheese with a sharp and tangy flavor.",
      descriptionHEB: "גבינת צ'דר מיושנת עם טעם חד וחמוץ.",
      photo: "http://photo.com/photo_cheddar_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Greek Yogurt",
      nameHEB: "יוגורט יווני",
      descriptionENG: "Thick and creamy Greek yogurt perfect for a healthy snack.",
      descriptionHEB: "יוגורט יווני עבה וקרמי שמתאים לנשנוש בריא.",
      photo: "http://photo.com/photo_greek_yogurt.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Unsalted Butter",
      nameHEB: "חמאה ללא מלח",
      descriptionENG: "High-quality unsalted butter ideal for baking and cooking.",
      descriptionHEB: "חמאה ללא מלח באיכות גבוהה שמתאימה לאפייה ובישול.",
      photo: "http://photo.com/photo_unsalted_butter.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Heavy Cream",
      nameHEB: "שמנת כבדה",
      descriptionENG: "Rich heavy cream perfect for making sauces and desserts.",
      descriptionHEB: "שמנת כבדה עשירה שמתאימה להכנת רטבים וקינוחים.",
      photo: "http://photo.com/photo_heavy_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Classic Kefir",
      nameHEB: "קפיר קלאסי",
      descriptionENG: "Fermented milk drink rich in probiotics, ideal for gut health.",
      descriptionHEB: "משקה חלב מותסס עשיר בפרוביוטיקה, מתאים לבריאות המעיים.",
      photo: "http://photo.com/photo_classic_kefir.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Mozzarella Cheese",
      nameHEB: "גבינת מוצרלה",
      descriptionENG: "Soft and creamy mozzarella cheese perfect for pizzas and salads.",
      descriptionHEB: "גבינת מוצרלה רכה וקרמית שמתאימה לפיצות וסלטים.",
      photo: "http://photo.com/photo_mozzarella_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cottage Cheese",
      nameHEB: "גבינת קוטג'",
      descriptionENG: "Creamy cottage cheese ideal for a healthy snack.",
      descriptionHEB: "גבינת קוטג' קרמית שמתאימה לנשנוש בריא.",
      photo: "http://photo.com/photo_cottage_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Sour Cream",
      nameHEB: "שמנת חמוצה",
      descriptionENG: "Rich and tangy sour cream perfect for dips and baking.",
      descriptionHEB: "שמנת חמוצה עשירה וחמצמצה שמתאימה למטבלים ואפייה.",
      photo: "http://photo.com/photo_sour_cream.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Swiss Cheese",
      nameHEB: "גבינה שוויצרית",
      descriptionENG: "Mild and nutty Swiss cheese ideal for sandwiches.",
      descriptionHEB: "גבינה שוויצרית עדינה ואגוזית שמתאימה לכריכים.",
      photo: "http://photo.com/photo_swiss_cheese.jpg"
    });
  
    await service.create({
      category: "Dairy",
      nameENG: "Cream Cheese",
      nameHEB: "גבינת שמנת",
      descriptionENG: "Smooth and creamy cream cheese perfect for bagels and desserts.",
      descriptionHEB: "גבינת שמנת חלקה וקרמית שמתאימה לבייגלים וקינוחים.",
      photo: "http://photo.com/photo_cream_cheese.jpg"
    });
  
    // Meat and Seafood
    await service.create({
      category: "Meat",
      nameENG: "Chicken Breast",
      nameHEB: "חזה עוף",
      descriptionENG: "Lean and versatile chicken breast for grilling and baking.",
      descriptionHEB: "חזה עוף רזה ורב-שימושי שמתאים לצלייה ואפייה.",
      photo: "http://photo.com/photo_chicken_breast.jpg"
    });
  
    await service.create({
      category: "Meat",
      nameENG: "Ground Beef",
      nameHEB: "בשר טחון",
      descriptionENG: "High-quality ground beef perfect for burgers and meatloaf.",
      descriptionHEB: "בשר טחון איכותי שמתאים להמבורגרים וכדורי בשר.",
      photo: "http://photo.com/photo_ground_beef.jpg"
    });



//"http://photo.com/photo_whole_milk.jpg"
//await service.create({
////  category: "Seafood",
 // nameENG: "Salmon Fillet",
    
  const result = await service.getAllProductNames();
    expect(result).toBeInstanceOf(Array);
    expect(result.length).toBeGreaterThan(0);
    expect(result[0]).toHaveProperty('name');
  });
});