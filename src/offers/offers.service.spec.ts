import { Test, TestingModule } from '@nestjs/testing';
import { OffersService } from './offers.service';
import { Farmer } from 'src/farmers/farmers.model';
import { Product } from 'src/products/products.model';

describe('DealsService', () => {
  let service: OffersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [OffersService],
    }).compile();

    service = module.get<OffersService>(OffersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
