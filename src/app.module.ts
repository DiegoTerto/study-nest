import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://0.0.0.0:27017/study-nest'),
    ProductsModule,
  ],
})
export class AppModule {}
