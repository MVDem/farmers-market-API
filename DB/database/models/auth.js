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

  @ApiProperty({ example: 'CUSTOMER | FARMER', description: 'User role' })
  @Column({
    type: DataType.STRING,
    defaultValue: 'CUSTOMER',
  })
  role: string;

  @HasOne(() => Farmer)
  farmer: Farmer;
}
