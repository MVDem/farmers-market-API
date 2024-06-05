import { Test, TestingModule } from '@nestjs/testing';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { ProductsService } from './products.service';
import { Product } from './products.model';
import * as dotenv from 'dotenv';

import * as fs from 'fs';
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

  /*
  it('should return all product names', async () => {
    const result = await service.getAllProductNames();
    expect(result).toBeInstanceOf(Array);
    if (result.length > 0) {
      expect(result[0]).toHaveProperty('name');
    }
  });*/
  /*
  it('should return all product names and match the expected JSON response', async () => {
    const result = await service.getAllProductNames();
    
    // Load the expected response from the JSON file
    const expectedFilePath = path.resolve('/home/user/project/responses/getAllProductNamesResponse.json');
    const expectedData = JSON.parse(fs.readFileSync(expectedFilePath, 'utf-8'));

    expect(result).toEqual(expectedData);
  });*/

  it('should return all product names and match the expected JSON response', async () => {
    const result = await service.getAllProductNames();
    
    // Используем относительный путь к файлу относительно текущего рабочего каталога
    const expectedFilePath = path.resolve(__dirname, '..', 'responses', 'getAllProductNamesResponse.json');
    const expectedData = JSON.parse(fs.readFileSync(expectedFilePath, 'utf-8'));

    expect(result).toEqual(expectedData);
    //toEqual проверяет именно содержимое объектов а не ссылка на них
    //https://jestjs.io/docs/expect
  });
});


// Переопределяем функцию printFailureSummary для вывода только номера строки
/*
const { formatTestResults } = require('@jest/test-result');

const printFailureSummary = (result, options) => {
  const { message, failureMessage } = result;
  const { currentTestName } = options;
  const { message: msg, stack } = failureMessage;
  const formattedStack = formatTestResults(result, options);

  const errorMsg = `${currentTestName}\n\n${msg}\n\n${formattedStack}`;

  console.log(errorMsg);
};

module.exports = { printFailureSummary };*/

module.exports = {
  // Другие настройки...
  verbose: false, // Установка в false выводит более компактные сообщения об ошибках
};
