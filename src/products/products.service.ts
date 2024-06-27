import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { EditProductDto } from './dtos/editProduct.dto';
import { Product } from './products.model';
import { InjectModel } from '@nestjs/sequelize';
import { CreateProductDto } from './dtos/createProduct.dto';
import { Category } from '../categories/categories.model';
import { CloudinaryService } from '../cloudinary/cloudinary.service';
import { PROPERTY_DEPS_METADATA } from '@nestjs/common/constants';

@Injectable()
export class ProductsService {
  constructor(
    @InjectModel(Product) private productRepository: typeof Product,
    private cloudinary: CloudinaryService,
  ) {}

  async create(dto: CreateProductDto, file?: Express.Multer.File) {
    const product = await this.productRepository.create(dto);
    if (!product) {
      throw new HttpException(
        'The product was not created',
        HttpStatus.BAD_REQUEST,
      );
    }

    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(
        file,
        product.id,
      );
      product.imageURL = public_id;
      await product.save();
      product.imageURL = url;
    }
    console.log('Create product:', product);
    return product;
  }

  async updateProduct(
    id: number,
    dto: EditProductDto,
    file?: Express.Multer.File,
  ) {
    let imageURL = '';
    if (file) {
      const { public_id, url } = await this.uploadImageToCloudinary(file, id);
      dto.imageURL = public_id;
      imageURL = url;
    }

    const [numberOfAffectedRows, affectedRows] =
      await this.productRepository.update(dto, {
        where: { id },
        returning: true,
      });
    if (numberOfAffectedRows === 0) {
      throw new HttpException(
        'Product with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    } else {
      const product = affectedRows[0];
      product.imageURL = imageURL;
      console.log('Update product:', product);
      return product;
    }
  }

  async getOne(id: number) {
    const product = await this.productRepository.findOne({
      where: { id },
      include: [
        {
          model: Category,
          attributes: [
            'id',
            'name_EN',
            'name_HE',
            'description_EN',
            'description_HE',
            'imageURL',
          ],
        },
      ],
    });
    if (!product) {
      throw new HttpException(
        'Product with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }

    product.imageURL = product.imageURL
      ? await this.cloudinary.getPathToImg(product.imageURL)
      : '';
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

  private async uploadImageToCloudinary(
    file: Express.Multer.File,
    productId: number,
  ) {
    const result = await this.cloudinary.uploadImage(
      file,
      'products',
      productId.toString(),
    );
    console.log('Upload image:', result, file);
    if (!result) {
      throw new HttpException('Image was not uploaded', HttpStatus.BAD_REQUEST);
    }
    return result;
  }

  async getAll() {
    const productsArr = await this.productRepository.findAll();
    if (!productsArr) {
      throw new HttpException(
        'Product with this id is not found',
        HttpStatus.NOT_FOUND,
      );
    }
    return productsArr;
  }
}
