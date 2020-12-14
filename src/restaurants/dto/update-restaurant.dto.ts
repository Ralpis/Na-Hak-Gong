import { InputType, PartialType } from '@nestjs/graphql';
import { CreateRestaurantDto } from './create-restaurant.dto';

@InputType()
export class UpdateREstaurantDto extends PartialType(CreateRestaurantDto) {}
