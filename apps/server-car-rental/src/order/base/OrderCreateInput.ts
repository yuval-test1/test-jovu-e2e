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
import { EnumOrderStatus } from "./EnumOrderStatus";
import { IsEnum, IsOptional, IsString, ValidateNested } from "class-validator";
import { CarWhereUniqueInput } from "../../car/base/CarWhereUniqueInput";
import { Type } from "class-transformer";
import { CustomerWhereUniqueInput } from "../../customer/base/CustomerWhereUniqueInput";

@InputType()
class OrderCreateInput {
  @ApiProperty({
    required: false,
    enum: EnumOrderStatus,
  })
  @IsEnum(EnumOrderStatus)
  @IsOptional()
  @Field(() => EnumOrderStatus, {
    nullable: true,
  })
  status?: "Option1" | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rentalEnd?: string | null;

  @ApiProperty({
    required: false,
    type: () => CarWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CarWhereUniqueInput)
  @IsOptional()
  @Field(() => CarWhereUniqueInput, {
    nullable: true,
  })
  car?: CarWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  rentalStart?: string | null;

  @ApiProperty({
    required: false,
    type: () => CustomerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CustomerWhereUniqueInput)
  @IsOptional()
  @Field(() => CustomerWhereUniqueInput, {
    nullable: true,
  })
  customer?: CustomerWhereUniqueInput | null;
}

export { OrderCreateInput as OrderCreateInput };
