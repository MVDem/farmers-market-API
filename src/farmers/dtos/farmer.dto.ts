import { ApiProperty } from "@nestjs/swagger";

export class FarmerDto {
    @ApiProperty({ example: '1', description: 'Id of farmer' })
    id: number;
  
    @ApiProperty({ example: 'John Doe', description: 'Name of farmer' })
    name: string;
  
    @ApiProperty({
      example: 'Farmer in the city',
      description: 'Description of farmer',
    })
    description: string;
  
    @ApiProperty({
      example: 'Qiryat Shemona',
      description: 'City name of farmer',
    })
    city: string;
  
    @ApiProperty({ example: '123 Farm Street', description: 'Address of farmer' })
    address: string;
  
    @ApiProperty({ example: 'farmer@gmail.com', description: 'Email of farmer' })
    email: string;
  
    @ApiProperty({ example: '0555555555', description: 'Phone of farmer' })
    phone: string;
  
    @ApiProperty({
      example: '739745.6585827',
      description: 'Coordinate latitude of farmer',
    })
    coordinateLat: number;
  
    @ApiProperty({
      example: '739745.6585827',
      description: 'Coordinate longitude of farmer',
    })
    coordinateLong: number;
  
    @ApiProperty({ example: '1', description: 'User id associated with farmer' })
    userId: number;
  
    @ApiProperty({
      example: 'farmers/logos/img.jpg',
      description: 'Public id of image in Cloudinary',
    })
    logoURL: string;

    @ApiProperty({
      example: 'farmers/logos/img.jpg',
      description: 'Public id of image in Cloudinary',
    })
    coverURL: string;
  }
  