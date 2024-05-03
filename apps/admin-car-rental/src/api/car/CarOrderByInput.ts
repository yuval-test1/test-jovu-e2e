import { SortOrder } from "../../util/SortOrder";

export type CarOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rentalPricePerDay?: SortOrder;
  status?: SortOrder;
  registrationNumber?: SortOrder;
  make?: SortOrder;
  model?: SortOrder;
};
