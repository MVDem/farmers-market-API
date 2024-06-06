import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditProductDto } from './dtos/editProduct.dto';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dtos/createProduct.dto';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product) private productRepository: typeof Product) {}

  async create(dto: CreateProductDto) {
    const product = await this.productRepository.create(dto);
    if (!product) {
      throw new HttpException(
        'The product was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    console.log('Create product:', product);
    return product;
  }

  async updateProduct(dto: EditProductDto , id: string){
    const isUpdated = await this.productRepository.update(dto, {
        where: { id },
      });
      if (isUpdated[0] === 0) {
        throw new HttpException(
          'Product with this id is not found',
          HttpStatus.NOT_FOUND,
        );
      } else {
        const product = await this.productRepository.findOne({ where: { id } });
        console.log('Update product:', product);
        return product;
      }
    }

    async getOne(id: number) {
        const product = await this.productRepository.findOne({ where: { id } });
        if (!product) {
          throw new HttpException(
            'Product with this id is not found',
            HttpStatus.NOT_FOUND,
          );
        }
        console.log('Get product by id:', product);
        return product;
      }
    
      async deleteProduct(id: string) {
        const product = await this.productRepository.destroy({ where: { id } });
        if (!product) {
          throw new HttpException(
            'Farmer with this id is not found',
            HttpStatus.NOT_FOUND,
          );
        }
        console.log('Delete product by id:', product);
        return product;
      }
}
