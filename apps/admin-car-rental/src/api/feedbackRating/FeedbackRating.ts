import { Customer } from "../customer/Customer";
import { Order } from "../order/Order";

export type FeedbackRating = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rating: string | null;
  customer?: Customer | null;
  comment: string | null;
  order?: Order | null;
};
