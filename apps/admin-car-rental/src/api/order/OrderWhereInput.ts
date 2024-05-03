import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { FeedbackRatingListRelationFilter } from "../feedbackRating/FeedbackRatingListRelationFilter";

export type OrderWhereInput = {
  id?: StringFilter;
  status?: "Option1";
  rentalEnd?: StringNullableFilter;
  car?: CarWhereUniqueInput;
  rentalStart?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  feedbackRatings?: FeedbackRatingListRelationFilter;
};
