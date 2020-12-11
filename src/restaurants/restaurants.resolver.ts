import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RestaurantService } from 'src/restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query(returns => [Restaurant])
  restaurnts(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(returns => Boolean)
  createRestaurant(@Args() CreateRestaurantDto: CreateRestaurantDto): boolean {
    console.log(CreateRestaurantDto);
    return true;
  }
}
