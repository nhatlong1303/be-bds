import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';
export type TagsDocument = Tags & Document;

@Schema({ timestamps: true, collection: 'tags' })
export class Tags {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  slug: string;

  @Prop({ required: true })
  active: boolean;
}

export const TagsSchema = SchemaFactory.createForClass(Tags);
