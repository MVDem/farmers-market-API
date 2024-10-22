import { ApiProperty, OmitType } from "@nestjs/swagger";
import { EditFarmerDto } from "./editFarmer.dto";

export class FarmerDto extends EditFarmerDto {
    @ApiProperty({ example: '1', description: 'Id of farmer' })
    id: number;
  
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

    constructor(data: Partial<FarmerDto>) {
      super();
      Object.assign(this, data);
    }
  }
  