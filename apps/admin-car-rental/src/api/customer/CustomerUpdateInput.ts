import { RentalUpdateManyWithoutCustomersInput } from "./RentalUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  rentals?: RentalUpdateManyWithoutCustomersInput;
  email?: string | null;
  licenseNumber?: string | null;
  lastName?: string | null;
  phone?: string | null;
  address?: string | null;
  firstName?: string | null;
};
