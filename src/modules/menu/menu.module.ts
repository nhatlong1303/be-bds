import { Module } from '@nestjs/common';
import { MenuController } from './menu.controller';
import { MenuService } from './menu.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from 'schema';

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [MongooseModule.forFeature([{ name: Menu.name, schema: MenuSchema }])],
})
export class MenuModule {}
