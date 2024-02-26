import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Category } from './category.entity';

@Injectable()
export class HomeService {
  constructor(
    @InjectRepository(Category) private categoryRepo: Repository<Category>,
  ) {
  }

  async listCategories() {
    const categories = await this.categoryRepo.createQueryBuilder('cat')
      .where('cat.isActive = 1')
      .getMany();

    return categories
  }
}
