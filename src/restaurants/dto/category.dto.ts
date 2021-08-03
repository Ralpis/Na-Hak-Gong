import { Field, ObjectType } from "@nestjs/graphql";
import { CoreOutput } from "src/common/dtos/output.dto";
import { Category } from "../entities/category.entity";



@ObjectType()
export class CategoryInput {
    @Field(type => String)
    slug:string;
}


@ObjectType()
export class CategoryOutput extends CoreOutput{
    @Field(tpye=> Category ,{nullable:true})
    category?:Category;
}