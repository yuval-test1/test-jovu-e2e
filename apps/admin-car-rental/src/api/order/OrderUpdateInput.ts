import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackRatingUpdateManyWithoutOrdersInput } from "./FeedbackRatingUpdateManyWithoutOrdersInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  rentalEnd?: string | null;
  car?: CarWhereUniqueInput | null;
  rentalStart?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  feedbackRatings?: FeedbackRatingUpdateManyWithoutOrdersInput;
};
