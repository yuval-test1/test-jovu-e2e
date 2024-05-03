import { SortOrder } from "../../util/SortOrder";

export type RentalOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  totalPrice?: SortOrder;
  startDate?: SortOrder;
  endDate?: SortOrder;
  carId?: SortOrder;
  customerId?: SortOrder;
};
