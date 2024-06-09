import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';

interface CategoryCreationAtributes {
  nameENG: string;
  nameHEB: string;
  photo: string;
  descriptionENG: string;
  descriptionHEB: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAtributes> {
  @ApiProperty({ example: '1', description: 'Unique id. Must be a string' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffe', description: 'NameENG of category ENG' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  nameENG: string;

  @ApiProperty({ example: 'קפה', description: 'NameHEB of category HEB' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  nameHEB: string;

  @ApiProperty({
    example: 'Coffe',
    description: 'DescriptionENG of category ENG',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  descriptionENG: string;

  @ApiProperty({
    example: 'קפה',
    description: 'DescriptionHEB of category HEB',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  descriptionHEB: string;

  @ApiProperty({
    example: 'categories/public_id.jpg',
    description: 'Public id of image of category',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageURL: string;
}
