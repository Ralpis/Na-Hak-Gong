import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { RestaurantService } from 'src/restaurants.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { Restaurant } from './entities/restaurant.entity';

@Resolver(of => Restaurant)
export class RestaurantResolver {
  constructor(private readonly restaurantService: RestaurantService) {}
  @Query(returns => [Restaurant])
  restaurnts(): Promise<Restaurant[]> {
    return this.restaurantService.getAll();
  }

  @Mutation(returns => Boolean)
  async createRestaurant(
    @Args('input') CreateRestaurantDto: CreateRestaurantDto,
  ): Promise<boolean> {
    console.log(CreateRestaurantDto);
    try {
      console.log(CreateRestaurantDto);
      await this.restaurantService.createRestaurant(CreateRestaurantDto);
      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  @Mutation(returns => Boolean)
  async updateRestaurant(
    @Args('input') UpdateRestaurantDto: UpdateRestaurantDto,
  ) {
    try {
      await this.restaurantService.updateRestaurant(UpdateRestaurantDto);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  }
}
