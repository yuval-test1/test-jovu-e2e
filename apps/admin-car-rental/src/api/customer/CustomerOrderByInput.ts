import { SortOrder } from "../../util/SortOrder";

export type CustomerOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  email?: SortOrder;
  licenseNumber?: SortOrder;
  lastName?: SortOrder;
  phone?: SortOrder;
  address?: SortOrder;
  firstName?: SortOrder;
};
