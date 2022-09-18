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
import { MenuService } from './menu.service';
import { CreateMenu, DeleteMenu, UpdateMenu } from './menu.dto';
import { CustomException } from 'config/exception.config';

@Controller('menu')
export class MenuController {
  constructor(private readonly service: MenuService) {}

  @Get()
  async getAll() {
    const data = await this.service.getAll();
    return CustomException({
      statusCode: 200,
      data: data,
    });
  }

  @Post()
  async create(@Body() createTags: CreateMenu) {
    const newData = await this.service.create(createTags);
    return CustomException({
      statusCode: 200,
      data: newData,
    });
  }

  @Put()
  async update(@Body() update: UpdateMenu) {
    const data = await this.service.update(update);
    return CustomException({
      statusCode: 200,
      data: data,
    });
  }

  @Delete()
  async delete(@Body() update: DeleteMenu) {
    return await this.service.delete(update);
  }
}
