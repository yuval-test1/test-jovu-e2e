import { Car } from "../car/Car";
import { Customer } from "../customer/Customer";

export type Order = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  status?: "Option1" | null;
  rentalEnd: string | null;
  car?: Car | null;
  rentalStart: string | null;
  customer?: Customer | null;
};
