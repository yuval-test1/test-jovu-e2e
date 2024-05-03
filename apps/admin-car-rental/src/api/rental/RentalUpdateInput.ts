import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackUpdateManyWithoutRentalsInput } from "./FeedbackUpdateManyWithoutRentalsInput";

export type RentalUpdateInput = {
  totalPrice?: number | null;
  startDate?: Date | null;
  endDate?: Date | null;
  car?: CarWhereUniqueInput | null;
  customer?: CustomerWhereUniqueInput | null;
  feedbacks?: FeedbackUpdateManyWithoutRentalsInput;
};
