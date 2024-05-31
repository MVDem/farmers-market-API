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

interface OffersCreationAtributes {
  unit: string;
  price: number;
  image: string;
  isActive: boolean;
  description_EN: string;
  description_HEB: string;
  farmerId: number;
}

@Table({ tableName: 'offers' })
export class Offer extends Model<Offer, OffersCreationAtributes> {
  @ApiProperty({ example: '1', description: 'Unic id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

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
  description_HEB: string;

  @ForeignKey(() => Farmer)
  @Column({ type: DataType.INTEGER })
  farmerId: number;

  @BelongsTo(() => Farmer)
  farmer: Farmer;
}
