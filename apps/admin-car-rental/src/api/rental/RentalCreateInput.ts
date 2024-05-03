import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackCreateNestedManyWithoutRentalsInput } from "./FeedbackCreateNestedManyWithoutRentalsInput";

export type RentalCreateInput = {
  totalPrice?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  car?: CarWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  feedbacks?: FeedbackCreateNestedManyWithoutRentalsInput;
};
