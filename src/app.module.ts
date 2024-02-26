import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service'
import { TypeOrmModule } from '@nestjs/typeorm';
import dataSourceDefaultOptions from 'ormconfig';
import { HomeModule } from './modules/home/home.module';
import { ProductsModule } from './modules/products/products.module';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: () => dataSourceDefaultOptions,
    }),
    HomeModule,
    ProductsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
