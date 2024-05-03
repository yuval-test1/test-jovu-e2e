import { Order as TOrder } from "../api/order/Order";

export const ORDER_TITLE_FIELD = "rentalEnd";

export const OrderTitle = (record: TOrder): string => {
  return record.rentalEnd?.toString() || String(record.id);
};
