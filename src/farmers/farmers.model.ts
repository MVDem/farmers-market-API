import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';
import { Deal } from 'src/deals/deal.model';

interface FarmerCreationAtributes {
  name: string;
  description: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinateLat: number;
  coordinateLong: number;
  products: string;
}

@Table({ tableName: 'farmers' })
export class Farmer extends Model<Farmer, FarmerCreationAtributes> {
  @ApiProperty({ example: '1', description: 'Unic id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'John Doe', description: 'Name of farmer' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name: string;

  @ApiProperty({
    example: 'Farmer in the city',
    description: 'Description of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description: string;

  @ApiProperty({
    example: 'Qiryat Shemona',
    description: 'City name of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  city: string;

  @ApiProperty({
    example: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    description: 'Address of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  address: string;

  @ApiProperty({ example: 'farmer@gmail.com', description: 'Email of farmer' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '0555555555', description: 'Phone of farmer' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  phone: string;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate latitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  coordinateLat: number;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate longitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: false,
  })
  coordinateLong: number;

  @HasMany(() => Deal)
  deals: Deal[];
}
