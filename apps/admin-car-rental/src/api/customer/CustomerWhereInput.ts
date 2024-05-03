import { StringFilter } from "../../util/StringFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { OrderListRelationFilter } from "../order/OrderListRelationFilter";
import { FeedbackRatingListRelationFilter } from "../feedbackRating/FeedbackRatingListRelationFilter";

export type CustomerWhereInput = {
  id?: StringFilter;
  rentals?: RentalListRelationFilter;
  email?: StringNullableFilter;
  licenseNumber?: StringNullableFilter;
  lastName?: StringNullableFilter;
  phone?: StringNullableFilter;
  address?: StringNullableFilter;
  firstName?: StringNullableFilter;
  orders?: OrderListRelationFilter;
  feedbackRatings?: FeedbackRatingListRelationFilter;
};
