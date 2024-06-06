import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';

interface CategoryCreationAtributes {
  subcategory: string;
  nameENG: string;
  nameHEB: string;
  photo: string;
  descriptionENG: string;
  descriptionHEB: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAtributes> {
  @ApiProperty({ example: '1', description: 'Unic id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffe', description: 'Subcategory of product' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  subcategory: string;

  @ApiProperty({ example: 'Coffe', description: 'NameENG of subcategory ENG' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  nameENG: string;

  @ApiProperty({ example: 'קפה', description: 'NameHEB of subcategory HEB' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nameHEB: string;

  @ApiProperty({ example: 'Coffe', description: 'DescriptionENG of subcategory ENG' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descriptionENG: string;

  @ApiProperty({ example: 'קפה', description: 'DescriptionHEB of subcategory HEB' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descriptionHEB: string;

  @ApiProperty({
    example: 'http://Photo.com/photo.jpg',
    description: 'Photo of subcategory',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  photo: string;
}
