import { InputType, OmitType } from '@nestjs/graphql';
import { Restaurant } from '../entities/restaurant.entity';

/*
 *** restaurant DTO
 ***
 ***
 */
@InputType()
export class CreateRestaurantDto extends OmitType(
  Restaurant,
  ['id'],
  InputType,
) {}
