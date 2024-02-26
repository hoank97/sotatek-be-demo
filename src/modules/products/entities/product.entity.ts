import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('banners')
export class Product {
  @PrimaryGeneratedColumn('increment')
  id: number;

  @Column({ type: 'json' })
  info: any;

  @Column()
  orderNumber: number;

  @CreateDateColumn()
  createdAt: string;
}
