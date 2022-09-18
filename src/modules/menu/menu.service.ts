import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateMenu, DeleteMenu, UpdateMenu } from './menu.dto';
import { Menu, MenuDocument } from 'schema';
import { CustomException } from 'config/exception.config';

@Injectable()
export class MenuService {
  constructor(
    @InjectModel(Menu.name) private readonly model: Model<MenuDocument>,
  ) {}

  async getAll(): Promise<Menu[]> {
    const data = await this.model.find({ active: true }).exec();
    return data;
  }

  async findOne(id: string): Promise<Menu> {
    return await this.model.findById(id).exec();
  }

  async create(create: CreateMenu): Promise<Menu> {
    return await new this.model({
      ...create,
    }).save();
  }

  async update(data: UpdateMenu): Promise<Menu> {
    const menu = await this.model.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
    return menu;
  }

  async delete(data: DeleteMenu): Promise<any> {
    const menu = await this.model.findOne({ _id: data._id }).exec();
    if (!menu) {
      return CustomException({ statusCode: 400, message: 'Not found' });
    }
    await this.model.deleteOne({ _id: data._id }).exec();
    return CustomException({
      statusCode: 200,
      message: 'success',
    });
  }
}
