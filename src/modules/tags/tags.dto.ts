import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class BaseTagsDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  slug: string;

  @ApiProperty({ type: Boolean, default: true })
  @IsBoolean()
  active: boolean;
}

export class CreateTags extends BaseTagsDto {}

export class UpdateTags extends BaseTagsDto {
  @ApiProperty({ type: String })
  @IsString()
  _id: string;
}

export class DeleteDto {
  @ApiProperty({ type: String })
  @IsString()
  _id: string;
}
