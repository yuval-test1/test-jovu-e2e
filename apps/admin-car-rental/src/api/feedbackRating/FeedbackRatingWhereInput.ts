import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type FeedbackRatingWhereInput = {
  id?: StringFilter;
  rating?: StringNullableFilter;
  customer?: CustomerWhereUniqueInput;
  comment?: StringNullableFilter;
  order?: OrderWhereUniqueInput;
};
