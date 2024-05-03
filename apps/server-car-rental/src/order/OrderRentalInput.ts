import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
class OrderRentalInput {
    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    customerId!: string;

    @Field(() => String)
    @ApiProperty({
        required: true,
        type: () => String
    })
    @Type(() => String)
    carId!: string;

    @Field(() => Date)
    @Type(() => Date)
    rentalStartDate!: Date;

    @Field(() => Date)
    @Type(() => Date)
    rentalEndDate!: Date;
}

export { OrderRentalInput as OrderRentalInput };