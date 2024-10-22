// src/models/product.model.ts

import { Table, Column, Model, DataType, ForeignKey, BelongsTo } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Category } from 'src/categories/category.model'; // Подставьте правильный путь к модели Category

interface ProductCreationAttributes {
  categoryId: number;
  name_EN: string;
  name_HE: string;
  imageURL: string;
  description_EN: string;
  description_HE: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Unique id. Must be a number' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({
    example: 'Coffee',
    description: 'Name of a product in English',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  name_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Name of a product in Hebrew' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name_HE: string;

  @ApiProperty({
    example: 'Coffee',
    description: 'Description of a product in English',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_EN: string;

  @ApiProperty({
    example: 'קפה',
    description: 'Description of a product in Hebrew',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description_HE: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo of a product',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageURL: string;

  @ForeignKey(() => Category)
  @Column({ type: DataType.INTEGER, allowNull: false })
  categoryId: number;

  @BelongsTo(() => Category, { foreignKey: 'categoryId', targetKey: 'id' })
  category: Category;
}
