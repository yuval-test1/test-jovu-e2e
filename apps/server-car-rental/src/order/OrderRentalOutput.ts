import { ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ObjectType("OrderRentalOutputObject")
class OrderRentalOutput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    orderId!: string;
}

export { OrderRentalOutput as OrderRentalOutput };