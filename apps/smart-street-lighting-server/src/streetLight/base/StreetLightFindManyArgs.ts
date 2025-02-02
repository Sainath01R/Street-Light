/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { StreetLightWhereInput } from "./StreetLightWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { StreetLightOrderByInput } from "./StreetLightOrderByInput";

@ArgsType()
class StreetLightFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => StreetLightWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => StreetLightWhereInput, { nullable: true })
  @Type(() => StreetLightWhereInput)
  where?: StreetLightWhereInput;

  @ApiProperty({
    required: false,
    type: [StreetLightOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [StreetLightOrderByInput], { nullable: true })
  @Type(() => StreetLightOrderByInput)
  orderBy?: Array<StreetLightOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { StreetLightFindManyArgs as StreetLightFindManyArgs };
