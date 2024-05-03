import { RentalUpdateManyWithoutCustomersInput } from "./RentalUpdateManyWithoutCustomersInput";
import { OrderUpdateManyWithoutCustomersInput } from "./OrderUpdateManyWithoutCustomersInput";

export type CustomerUpdateInput = {
  rentals?: RentalUpdateManyWithoutCustomersInput;
  email?: string | null;
  licenseNumber?: string | null;
  lastName?: string | null;
  phone?: string | null;
  address?: string | null;
  firstName?: string | null;
  orders?: OrderUpdateManyWithoutCustomersInput;
};
