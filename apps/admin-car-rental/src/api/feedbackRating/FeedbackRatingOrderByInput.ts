import { SortOrder } from "../../util/SortOrder";

export type FeedbackRatingOrderByInput = {
  id?: SortOrder;
  createdAt?: SortOrder;
  updatedAt?: SortOrder;
  rating?: SortOrder;
  customerId?: SortOrder;
  comment?: SortOrder;
  orderId?: SortOrder;
};
