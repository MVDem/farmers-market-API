// src/models/offer.model.ts

import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Farmer } from 'src/farmers/farmer.model'; // Подставьте правильный путь к модели Farmer
import { Product } from 'src/products/product.model'; // Подставьте правильный путь к модели Product

interface OffersCreationAttributes {
  name_EN: string;
  name_HE: string;
  unit: string;
  price: number;
  imageURL: string;
  isActive: boolean;
  description_EN: string;
  description_HE: string;
  farmerId: number;
  productId: number;
}

@Table({ tableName: 'offers' })
export class Offer extends Model<Offer, OffersCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Unique id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffee', description: 'Name of an offer/product in English' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Name of an offer/product in Hebrew' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name_HE: string;

  @ApiProperty({ example: 'kg', description: 'Unit' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  unit: string;

  @ApiProperty({ example: 100, description: 'Price in NIS' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  price: number;

  @ApiProperty({ example: 'http://', description: 'Custom product image URL' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  imageURL: string;

  @ApiProperty({ example: true, description: 'Display/Hide deal on the market' })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;

  @ApiProperty({ example: 'Lorem ', description: 'English description for product' })
  @Column({
    type: DataType.STRING(512),
    allowNull: true,
  })
  description_EN: string;

  @ApiProperty({ example: 'Lorem ', description: 'Hebrew description for product' })
  @Column({
    type: DataType.STRING(512),
    allowNull: true,
  })
  description_HE: string;

  @ForeignKey(() => Farmer)
  @Column({ type: DataType.INTEGER })
  farmerId: number;

  @BelongsTo(() => Farmer)
  farmer: Farmer;

  @ForeignKey(() => Product)
  @Column({ type: DataType.INTEGER })
  productId: number;

  @BelongsTo(() => Product)
  product: Product;
}
