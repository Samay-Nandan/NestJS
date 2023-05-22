import { IsString, IsNotEmpty, IsNumber } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';
export class UpdateProductDto {
  @IsString()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  readonly name?: string;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  readonly price?: number;

  @IsNumber()
  @IsNotEmpty()
  @ApiProperty({ required: false })
  readonly quantity?: number;
}
