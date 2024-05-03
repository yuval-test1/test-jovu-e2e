import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type FeedbackWhereInput = {
  id?: StringFilter;
  comments?: StringNullableFilter;
  rating?: StringNullableFilter;
  rental?: RentalWhereUniqueInput;
};
