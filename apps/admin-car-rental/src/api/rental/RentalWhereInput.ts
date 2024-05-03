import { StringFilter } from "../../util/StringFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackListRelationFilter } from "../feedback/FeedbackListRelationFilter";

export type RentalWhereInput = {
  id?: StringFilter;
  totalPrice?: FloatNullableFilter;
  startDate?: DateTimeNullableFilter;
  endDate?: DateTimeNullableFilter;
  car?: CarWhereUniqueInput;
  customer?: CustomerWhereUniqueInput;
  feedbacks?: FeedbackListRelationFilter;
};
