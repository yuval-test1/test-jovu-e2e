import { Customer as TCustomer } from "../api/customer/Customer";

export const CUSTOMER_TITLE_FIELD = "lastName";

export const CustomerTitle = (record: TCustomer): string => {
  return record.lastName?.toString() || String(record.id);
};
