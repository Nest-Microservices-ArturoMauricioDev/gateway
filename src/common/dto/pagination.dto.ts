import { Type } from 'class-transformer';
import { IsNumber, IsOptional, IsPositive, Min } from 'class-validator';

export class PaginationDto {
  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  page?: number = 1;

  @IsPositive()
  @IsOptional()
  @Type(() => Number)
  @IsNumber({
    maxDecimalPlaces: 0,
  })
  limit?: number = 10;
}
