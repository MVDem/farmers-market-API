import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dtos/createProduct.dto';
import { EditProductDto } from './dtos/editProduct.dto';
import { ProductDto } from './dtos/product.dto';
import { ListProductDto } from './dtos/listProducts.dto';

interface IProduct {
  category?: string;
  nameENG?: string;
  nameHEB?: string;
  descriptionENG?: string;
  descriptionHEB?: string;
  photo?: string;
  id: number;
}

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private ProductRepository: typeof Product,
  ) {}

  async create(dto: CreateProductDto) {
    console.log('Create product:', dto);

    const productData: IProduct = {
      category: dto.category,
      nameENG: dto.nameENG,
      nameHEB: dto.nameHEB,
      descriptionENG: dto.descriptionENG,
      descriptionHEB: dto.descriptionHEB,
      photo: dto.photo,
      id: 0
    };

    const product = await this.ProductRepository.create(productData);
    if (!product) {
      throw new HttpException(
        'The product was not created',
        HttpStatus.BAD_REQUEST,
      );
    }
    // console.log('Create product:', product);
    return product;
  }

  async updateProduct(
    dto: EditProductDto, 
    id: number)  {
    const product = await this.ProductRepository.findOne({ where: { id } });
    if (!product) {
      throw new HttpException(
        'The product was not founded',
        HttpStatus.BAD_REQUEST,
      );
    }

    const productData: IProduct = { ...dto, id: product.id };

    const isUpdated = await this.ProductRepository.update(productData, {
      where: { id },
    });
    if (isUpdated[0] === 0) {
      throw new HttpException('The product was not updated', HttpStatus.NOT_FOUND);
    }

    const updateproduct = await this.ProductRepository.findOne({
      where: { id },
    });
    console.log('Updated product:', updateproduct);
    return updateproduct;
  }

  async getOne(id: number) {
    const product = await this.ProductRepository.findOne({ 
      where: { id },
      include: { all: true },
    });
    if (!product) {
      throw new HttpException(
        'Product with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Get product by id:', product);
    return product;
  }

  async deleteProduct(id: number) {
    const product = await this.ProductRepository.destroy({ where: { id } });
    if (!product) {
      throw new HttpException(
        'Farmer with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    console.log('Delete product by id:', product);
    return product;
  }

  async getAllProductNames(): Promise<{ name: string }[]> {
    const response = await this.ProductRepository.findAll();

    if (!response || response.length === 0) {
      throw new HttpException('Nothing to display', HttpStatus.NOT_FOUND);
    }

    const names = response.map((product) => ({ name: product.nameENG }));
    return names;
  };

  /*

  async getAllProductNames(): Promise<ListProductDto> {
    const response = await this.ProductRepository.findAll();

    if (!response || response.length === 0) {
      throw new HttpException('Nothing to display', HttpStatus.NOT_FOUND);
    }
    const rows = response;

    const products: ProductDto[] = rows.map((product) => {
      const {
        id,
        category,
        nameENG,
        nameHEB,
        descriptionENG,
        descriptionHEB,
        photo,
      } = product;
      return {
        id,
        nameENG,
        category,
        nameHEB,
        descriptionENG,
        descriptionHEB,
        photo,
      };
    });

    return {
      products,
    };
*/
  }
//}
