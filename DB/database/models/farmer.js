// src/models/farmer.model.ts

import { Table, Column, Model, DataType, ForeignKey, BelongsTo, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Offer } from 'src/offers/offer.model'; // Подставьте правильный путь к модели Offer
import { Auth } from 'src/auth/auth.model'; // Подставьте правильный путь к модели Auth

interface FarmerCreationAttributes {
  name: string;
  description: string;
  city: string;
  address: string;
  email: string;
  phone: string;
  coordinateLat: number;
  coordinateLong: number;
  userId: number;
  logoURL: string;
  coverURL: string;
}

@Table({ tableName: 'farmers' })
export class Farmer extends Model<Farmer, FarmerCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Unique id. Must be a number' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
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
    example: 739745.6585827,
    description: 'Coordinate latitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  coordinateLat: number;

  @ApiProperty({
    example: 739745.6585827,
    description: 'Coordinate longitude of farmer',
  })
  @Column({
    type: DataType.FLOAT,
    allowNull: true,
  })
  coordinateLong: number;

  @ForeignKey(() => Auth)
  @ApiProperty({
    example: 2,
    description: 'Unique id from user table',
  })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
  })
  userId: number;

  @BelongsTo(() => Auth)
  user: Auth;

  @HasMany(() => Offer)
  deals: Offer[];

  @ApiProperty({
    example: 'farmers/logo.png',
    description: 'Logo URL',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  logoURL: string;

  @ApiProperty({
    example: 'farmers/logo.png',
    description: 'Cover URL',
    required: false,
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  coverURL: string;
}
