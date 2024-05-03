import { CarWhereUniqueInput } from "../car/CarWhereUniqueInput";
import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";

export type OrderUpdateInput = {
  status?: "Option1" | null;
  rentalEnd?: string | null;
  car?: CarWhereUniqueInput | null;
  rentalStart?: string | null;
  customer?: CustomerWhereUniqueInput | null;
};
