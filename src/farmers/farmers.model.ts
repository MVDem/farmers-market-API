import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Model,
  DataType,
  Table,
  HasMany,
  ForeignKey,
  BelongsTo,
} from 'sequelize-typescript';
import { Offer } from 'src/offers/offers.model';
import { Auth } from 'src/auth/auth.model';

interface FarmerCreationAtributes {
  name: string;
  description: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinateLat: number;
  coordinateLong: number;
  offers: string;
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
    allowNull: true,
  })
  name: string;

  @ApiProperty({
    example: 'Farmer in the city',
    description: 'Description of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description: string;

  @ApiProperty({
    example: 'Qiryat Shemona',
    description: 'City name of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  city: string;

  @ApiProperty({
    example: 'lorem ipsum dolor sit amet, consectetur adipiscing',
    description: 'Address of farmer',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
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
    allowNull: true,
  })
  phone: string;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate latitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  coordinateLat: number;

  @ApiProperty({
    example: '739745.6585827',
    description: 'Coordinate longitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  coordinateLong: number;

  @ForeignKey(() => Auth)
  @ApiProperty({
    example: '2',
    description: 'uniqu id from user table',
  })
  @Column({
    type: DataType.INTEGER,
  })
  userId: number;

  @BelongsTo(() => Auth)
  user: Auth;

  @HasMany(() => Offer)
  offers: Offer[];
  @ApiProperty({
    example:
      'https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png',
    description: 'Image URL',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageURL: string;
}
