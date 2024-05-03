import { Rental } from "../rental/Rental";
import { Order } from "../order/Order";

export type Car = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  rentals?: Array<Rental>;
  rentalPricePerDay: number | null;
  status?: "Option1" | null;
  registrationNumber: string | null;
  make: string | null;
  model: string | null;
  orders?: Array<Order>;
};
