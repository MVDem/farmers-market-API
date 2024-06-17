import { ApiProperty } from '@nestjs/swagger';
import { Column, Model, DataType, Table, HasMany } from 'sequelize-typescript';
import { Product } from 'src/products/products.model';

interface CategoryCreationAtributes {
  name_EN: string;
  name_HE: string;
  imageURL: string;
  description_EN: string;
  description_HE: string;
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

  @ApiProperty({ example: 'Coffe', description: 'name_EN of category ENG' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Name_HE of category HEB' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name_HE: string;

  @ApiProperty({
    example: 'Coffe',
    description: 'DescriptionENG of category EN',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_EN: string;

  @ApiProperty({
    example: 'קפה',
    description: 'DescriptionHEB of category HE',
  })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description_HE: string;

  @ApiProperty({
    example: 'categories/public_id.jpg',
    description: 'Public id of imageURL of category',
  })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageURL: string;

  @HasMany(() => Product)
  products: Product[];
}
