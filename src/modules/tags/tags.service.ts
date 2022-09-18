import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateTags, DeleteDto, UpdateTags } from './tags.dto';
import { Tags, TagsDocument } from 'schema';
import { CustomException } from 'config/exception.config';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tags.name) private readonly model: Model<TagsDocument>,
  ) {}

  async getAll(): Promise<Tags[]> {
    const data = await this.model.find({ active: true }).exec();
    return data;
  }

  async findOne(id: string): Promise<Tags> {
    return await this.model.findById(id).exec();
  }

  async create(create: CreateTags): Promise<Tags> {
    return await new this.model({
      ...create,
    }).save();
  }

  async update(data: UpdateTags): Promise<Tags> {
    const menu = await this.model.findOneAndUpdate({ _id: data._id }, data, {
      new: true,
    });
    return menu;
  }

  async delete(data: DeleteDto): Promise<any> {
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
