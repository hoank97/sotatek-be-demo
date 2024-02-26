import { Injectable } from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { Repository } from 'typeorm';
import { Product } from './entities/product.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class ProductsService {
  constructor(
    @InjectRepository(Product) private readonly bannerRepo: Repository<Product>,
    // private readonly dataSource: DataSource,
  ) {}


  findAll() {
    return this.bannerRepo.find({
      order: {
        orderNumber: 'ASC',
      },
    });
  }

  create(createProductDto: CreateProductDto) {
    return 'This action adds a new product';
  }


  findOne(id: number) {
    return `This action returns a #${id} product`;
  }

  remove(id: number) {
    return `This action removes a #${id} product`;
  }
}
