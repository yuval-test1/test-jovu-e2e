import { CustomerWhereUniqueInput } from "../customer/CustomerWhereUniqueInput";
import { OrderWhereUniqueInput } from "../order/OrderWhereUniqueInput";

export type FeedbackRatingCreateInput = {
  rating?: string | null;
  customer?: CustomerWhereUniqueInput | null;
  comment?: string | null;
  order?: OrderWhereUniqueInput | null;
};
