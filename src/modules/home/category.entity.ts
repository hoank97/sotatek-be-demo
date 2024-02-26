import { Exclude } from 'class-transformer';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

export const TableName = 'categories';

@Entity(TableName)
export class Category {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column()
  name: string;

  @Column()
  slug: string;

  @Column()
  iconClass: string;

  @Column()
  isActive: boolean;

  @CreateDateColumn()
  createdAt: string;

  @UpdateDateColumn()
  updatedAt: string;

  @Exclude()
  @DeleteDateColumn()
  deletedAt: string;

  constructor(partial: Partial<Category>) {
    Object.assign(this, partial);
  }
}
