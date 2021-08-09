import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';
import { IsNumber, IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, OneToOne, RelationId } from 'typeorm';
import { Restaurant } from './restaurant.entity';

@ObjectType()
class DishOption {
  @Field(type => String)
  name: string;

  @Field(type => [String])
  choice: string[];

  @Field(type => Int)
  price: number;
}

@InputType('DishInputType', { isAbstract: true })
@ObjectType()
@Entity()
export class Dish extends CoreEntity {
  @Field(type => String)
  @Column()
  @IsString()
  @Length(5)
  name: string;

  @Field(type => Int)
  @Column()
  @IsNumber()
  price: number;

  @Field(type => String)
  @Column()
  @IsString()
  photo: string;

  @Field(type => String)
  @Column()
  @Length(5, 140)
  description: string;

  @Field(type => [Restaurant], { nullable: true })
  @OneToOne(
    type => Restaurant,
    restaurant => restaurant.menu,
    { onDelete: 'CASCADE' },
  )
  restaurant: Restaurant[];

  @RelationId((dish: Dish) => dish.restaurant)
  restaurantid: number;

  @Field(type => [DishOption])
  @Column({ type: 'json' })
  options: DishOption[];
}
