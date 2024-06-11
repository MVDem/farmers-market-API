import { ApiProperty } from '@nestjs/swagger';
import {
  BelongsTo,
  Column,
  DataType,
  ForeignKey,
  Table,
  Model,
} from 'sequelize-typescript';
import { Farmer } from 'src/farmers/farmers.model';
import { Product } from 'src/products/products.model';

interface OffersCreationAttributes {
  name_EN: string;
  name_HE: string;
  unit: string;
  price: number;
  image: string;
  isActive: boolean;
  description_EN: string;
  description_HE: string;
  farmerId: number;
  productId: number;
}

@Table({ tableName: 'offers' })
export class Offer extends Model<Offer, OffersCreationAttributes> {
  @ApiProperty({ example: '1', description: 'Unic id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffee', description: 'Name of a offer/product in English' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name_EN: string;


  @ApiProperty({ example: 'קפה', description: 'Name of a offer/product in Hebrew' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name_HE: string;

  @ApiProperty({ example: 'kg', description: 'unit' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  unit: string;

  @ApiProperty({ example: '100', description: 'Price in NIS' })
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
  image: string;

  @ApiProperty({
    example: 'true',
    description: 'Display/Hide deal on the market',
  })
  @Column({
    type: DataType.BOOLEAN,
    allowNull: false,
  })
  isActive: boolean;

  @ApiProperty({
    example: 'Lorem ',
    description: 'English description for product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description_EN: string;

  @ApiProperty({
    example: 'Lorem ',
    description: 'Hebrew description for product',
  })
  @Column({
    type: DataType.STRING,
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

  @BelongsTo(() => Product, { foreignKey: 'productId', targetKey: 'id' })
  product: Product;
}
