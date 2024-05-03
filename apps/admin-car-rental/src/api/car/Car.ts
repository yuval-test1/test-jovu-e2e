import { Rental } from "../rental/Rental";

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
};
