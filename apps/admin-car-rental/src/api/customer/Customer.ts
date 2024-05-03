import { Rental } from "../rental/Rental";
import { Order } from "../order/Order";

export type Customer = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rentals?: Array<Rental>;
  email: string | null;
  licenseNumber: string | null;
  lastName: string | null;
  phone: string | null;
  address: string | null;
  firstName: string | null;
  orders?: Array<Order>;
};
