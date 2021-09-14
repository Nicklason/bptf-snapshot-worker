import { Test, TestingModule } from '@nestjs/testing';
import { SchemaModule } from '../schema/schema.module';
import { ListingService } from './listing.service';

describe('ListingService', () => {
  let service: ListingService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [SchemaModule],
      providers: [
        {
          provide: ListingService,
          useValue: {},
        },
      ],
    }).compile();

    service = module.get<ListingService>(ListingService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
