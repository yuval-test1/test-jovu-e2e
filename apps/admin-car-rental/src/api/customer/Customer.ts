import { Rental } from "../rental/Rental";

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
};
