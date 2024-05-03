import { SortOrder } from "../../util/SortOrder";

export type OrderOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  status?: SortOrder;
  rentalEnd?: SortOrder;
  carId?: SortOrder;
  rentalStart?: SortOrder;
  customerId?: SortOrder;
};
