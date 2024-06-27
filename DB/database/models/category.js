import { Table, Column, Model, DataType, HasMany } from 'sequelize-typescript';
import { ApiProperty } from '@nestjs/swagger';
import { Product } from 'src/products/products.model';

interface CategoryCreationAttributes {
  name_EN: string;
  name_HE: string;
  imageURL: string;
  description_EN: string;
  description_HE: string;
}

@Table({ tableName: 'categories' })
export class Category extends Model<Category, CategoryCreationAttributes> {
  @ApiProperty({ example: 1, description: 'Unique id. Must be a number' })
  @Column({
    type: DataType.INTEGER,
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'Coffee', description: 'Name of the category in English' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  })
  name_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Name of the category in Hebrew' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  name_HE: string;

  @ApiProperty({ example: 'Coffee', description: 'Description of the category in English' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  description_EN: string;

  @ApiProperty({ example: 'קפה', description: 'Description of the category in Hebrew' })
  @Column({
    type: DataType.STRING,
    allowNull: true,
  })
  description_HE: string;

  @ApiProperty({ example: 'categories/public_id.jpg', description: 'Public id of imageURL of category' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  imageURL: string;

  @HasMany(() => Product)
  products: Product[];
}
