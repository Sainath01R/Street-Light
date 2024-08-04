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
import { PedestrianWhereUniqueInput } from "./PedestrianWhereUniqueInput";
import { ValidateNested } from "class-validator";
import { Type } from "class-transformer";
import { PedestrianUpdateInput } from "./PedestrianUpdateInput";

@ArgsType()
class UpdatePedestrianArgs {
  @ApiProperty({
    required: true,
    type: () => PedestrianWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => PedestrianWhereUniqueInput)
  @Field(() => PedestrianWhereUniqueInput, { nullable: false })
  where!: PedestrianWhereUniqueInput;

  @ApiProperty({
    required: true,
    type: () => PedestrianUpdateInput,
  })
  @ValidateNested()
  @Type(() => PedestrianUpdateInput)
  @Field(() => PedestrianUpdateInput, { nullable: false })
  data!: PedestrianUpdateInput;
}

export { UpdatePedestrianArgs as UpdatePedestrianArgs };
