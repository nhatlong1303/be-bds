import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  Query,
} from '@nestjs/common';
import { TagsService } from './tags.service';
import { CreateTags, DeleteDto, UpdateTags } from './tags.dto';
import { CustomException } from 'config/exception.config';

@Controller('tags')
export class TagsController {
  constructor(private readonly service: TagsService) {}

  @Get()
  async getAll() {
    const data = await this.service.getAll();
    return CustomException({
      statusCode: 200,
      data: data,
    });
  }

  @Post()
  async create(@Query() createTags: CreateTags) {
    const newData = await this.service.create(createTags);
    return CustomException({
      statusCode: 200,
      data: newData,
    });
  }

  @Put()
  async update(@Body() update: UpdateTags) {
    const data = await this.service.update(update);
    return CustomException({
      statusCode: 200,
      data: data,
    });
  }

  @Delete()
  async delete(@Body() update: DeleteDto) {
    return await this.service.delete(update);
  }
}
