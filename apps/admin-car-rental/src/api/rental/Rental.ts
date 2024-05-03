import { Car } from "../car/Car";
import { Customer } from "../customer/Customer";
import { Feedback } from "../feedback/Feedback";

export type Rental = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  totalPrice: number | null;
  startDate: Date | null;
  endDate: Date | null;
  car?: Car | null;
  customer?: Customer | null;
  feedbacks?: Array<Feedback>;
};
