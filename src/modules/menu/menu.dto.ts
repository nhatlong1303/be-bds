import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsBoolean } from 'class-validator';

export class BaseMenuDto {
  @ApiProperty({ type: String })
  @IsString()
  name: string;

  @ApiProperty({ type: String })
  @IsString()
  slug: string;

  @ApiProperty({ type: String })
  @IsBoolean()
  router: string;

  @ApiProperty({ type: String })
  @IsBoolean()
  parent_id: boolean;

  @ApiProperty({ type: Boolean, default: true })
  @IsBoolean()
  active: boolean;
}

export class CreateMenu extends BaseMenuDto {}

export class UpdateMenu extends BaseMenuDto  {
  @ApiProperty({ type: String })
  @IsString()
  _id: string;
}

export class DeleteMenu {
  @ApiProperty({ type: String })
  @IsString()
  _id: string;
}
