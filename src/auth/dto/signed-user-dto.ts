import { ApiProperty } from '@nestjs/swagger';
import {FarmerDto} from '../../farmers/dtos/farmer.dto';

export class SignedUserDto {
  @ApiProperty({ example: '1', description: 'Id of user in auth repository' })
  id: number;

  @ApiProperty({ example: 'user@gmail.com', description: 'Email of user' })
  email: string;

  @ApiProperty({ example: 'customer | farmer', description: 'User role' })
  role: string;

  @ApiProperty({
    type: FarmerDto,
    description: 'Farmer details associated with user',
    required: false,
  })
  farmer?: FarmerDto;
}
