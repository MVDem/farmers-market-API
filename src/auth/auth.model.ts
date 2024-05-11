import { ApiProperty } from '@nestjs/swagger';
import { Table, Model, Column, DataType, HasOne } from 'sequelize-typescript';
import { Farmer } from 'src/farmers/farmers.model';

interface AuthCreationAttrs {
  email: string;
  password: string;
  role: string;
}

@Table({ tableName: 'auth' })
export class Auth extends Model<Auth, AuthCreationAttrs> {
  @ApiProperty({ example: '1', description: 'Unique id' })
  @Column({
    type: DataType.INTEGER,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
  })
  id: number;

  @ApiProperty({ example: 'user@gmail.com', description: 'email' })
  @Column({
    type: DataType.STRING,
    unique: true,
    allowNull: false,
  })
  email: string;

  @ApiProperty({ example: '123456789', description: 'User password' })
  @Column({
    type: DataType.STRING,
    allowNull: false,
  })
  password: string;

  @ApiProperty({ example: 'castomer | farmer', description: 'User role' })
  @Column({
    type: DataType.STRING,
    defaultValue: 'castomer',
  })
  role: string;

  // @ForeignKey(() => Farmer)
  // @ApiProperty({ example: '2', description: 'uniqu id from Farmers table' })
  // @Column({
  //   type: DataType.INTEGER,
  // })
  // farmer_id: number;

  // @BelongsTo(() => Farmer)
  // farmers: Farmer;

  @HasOne(() => Farmer)
  farmer: Farmer;
}
