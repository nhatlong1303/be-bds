import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type MenuDocument = Menu & Document;

@Schema({ timestamps: true, collection: 'menu' })
export class Menu {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  router: string;

  @Prop({ required: false })
  parent_id: string;

  @Prop()
  active: boolean;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
