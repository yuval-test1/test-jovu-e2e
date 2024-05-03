import { StringFilter } from "../../util/StringFilter";
import { RentalListRelationFilter } from "../rental/RentalListRelationFilter";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type CarWhereInput = {
  id?: StringFilter;
  rentals?: RentalListRelationFilter;
  rentalPricePerDay?: FloatNullableFilter;
  status?: "Option1";
  registrationNumber?: StringNullableFilter;
  make?: StringNullableFilter;
  model?: StringNullableFilter;
};
