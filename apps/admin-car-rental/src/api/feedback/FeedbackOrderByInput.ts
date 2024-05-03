import { SortOrder } from "../../util/SortOrder";

export type FeedbackOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  comments?: SortOrder;
  rating?: SortOrder;
  rentalId?: SortOrder;
};
