import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';


interface ProductCreationAtributes {
    category: string;
    nameENG: string;
    nameHEB: string;
    photo: string;
    descriptionENG: string;
    descriptionHEB: string;
  }
  
  @Table({ tableName: 'products' })
  export class Product extends Model<Product, ProductCreationAtributes> {
    @ApiProperty({ example: '1', description: 'Unic id. Must be a string' })
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ApiProperty({ example: 'Coffe-black', category: 'Category of product' })
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    category: string;

    @ApiProperty({ example: 'Coffe', nameENG: 'Name of product ENG' })
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    nameENG: string;

    @ApiProperty({ example: 'קפה', nameHEB: 'Name of product HEB' })
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    nameHEB: string;
  
    @ApiProperty({ example: 'Coffe', descriptionENG: 'Name of product ENG' })
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    descriptionENG: string;

    @ApiProperty({ example: 'קפה', descriptionHEB: 'Name of product HEB' })
    @Column({
      type: DataType.STRING,
      allowNull: true,
    })
    descriptionHEB: string;
  
    @ApiProperty({
      example: 'http://Photo.com/photo.jpg',
      description: 'Photo of product',
    })
    @Column({
      type: DataType.STRING,
      allowNull: false,
    })
    photo: string;
  
}
