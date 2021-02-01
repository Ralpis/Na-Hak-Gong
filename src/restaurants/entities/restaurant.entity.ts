import { Field, InputType, ObjectType } from '@nestjs/graphql';
import { IsString, Length } from 'class-validator';
import { CoreEntity } from 'src/common/entities/core.entity';
import { Column, Entity, ManyToOne } from 'typeorm';
import { Category } from './category.entity';
@InputType({ isAbstract: true })
@ObjectType()
@Entity()
export class Restaurant extends CoreEntity {
  @IsString()
  @Field(type => String)
  @Column()
  @Length(5)
  name: string;

  @Field(type => String)
  @Column()
  @IsString()
  coverImage: string;

  @Field(type => String)
  @Column()
  @IsString()
  address: string;

  @Field(type => String)
  @Column()
  @IsString()
  ownerName: string;

  @Field(type => String)
  @Column()
  @IsString()
  categoryName: string;

  @ManyToOne(
    type => Category,
    category => category.restaurants,
  )
  @Field(type => Category)
  category: Category;
}
