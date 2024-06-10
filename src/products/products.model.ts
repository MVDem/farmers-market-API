import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';

interface ProductCreationAtributes {
  category: string;
  name_EN: string;
  name_HE: string;
  photo: string;
  description_EN: string;
  description_HE: string;
}

@Table({ tableName: 'products' })
export class Product extends Model<Product, ProductCreationAtributes> {
  @ApiProperty({ example: '1', description: 'Unique id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffe-black', description: 'Category of a product' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  category: string;


  @ApiProperty({ example: 'Coffe', description: 'Name of a product in English' })
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

  @ApiProperty({ example: 'Coffe', description: 'Description of a product in English' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Description of a product in Hebrew' })
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
  photo: string;
}
