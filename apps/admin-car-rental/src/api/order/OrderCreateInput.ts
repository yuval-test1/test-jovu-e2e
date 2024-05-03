import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackRatingCreateNestedManyWithoutOrdersInput } from "./FeedbackRatingCreateNestedManyWithoutOrdersInput";

export type OrderCreateInput = {
  status?: "Option1" | null;
  rentalEnd?: string | null;
  car?: CarWhereUniqueInput | null;
  rentalStart?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  feedbackRatings?: FeedbackRatingCreateNestedManyWithoutOrdersInput;
};
