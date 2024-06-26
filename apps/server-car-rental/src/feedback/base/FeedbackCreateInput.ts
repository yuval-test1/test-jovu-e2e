/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsOptional, ValidateNested } from "class-validator";
import { RentalWhereUniqueInput } from "../../rental/base/RentalWhereUniqueInput";
import { Type } from "class-transformer";

@InputType()
class FeedbackCreateInput {
  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  comments?: string | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rating?: string | null;

  @ApiProperty({
    required: false,
    type: () => RentalWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => RentalWhereUniqueInput)
  @IsOptional()
  @Field(() => RentalWhereUniqueInput, {
    nullable: true,
  })
  rental?: RentalWhereUniqueInput | null;
}

export { FeedbackCreateInput as FeedbackCreateInput };
