import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';
import { join } from 'path';

import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    RestaurantsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'a1',
      password: '12345',
      database: 'nuber-eats',
      synchronize: true,
      logging: true,
    }),

    GraphQLModule.forRoot({
      autoSchemaFile: join(process.cwd(), 'src/chema.gql'),
    }),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
