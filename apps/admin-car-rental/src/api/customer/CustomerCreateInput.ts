import { RentalCreateNestedManyWithoutCustomersInput } from "./RentalCreateNestedManyWithoutCustomersInput";
import { OrderCreateNestedManyWithoutCustomersInput } from "./OrderCreateNestedManyWithoutCustomersInput";

export type CustomerCreateInput = {
  rentals?: RentalCreateNestedManyWithoutCustomersInput;
  email?: string | null;
  licenseNumber?: string | null;
  lastName?: string | null;
  phone?: string | null;
  address?: string | null;
  firstName?: string | null;
  orders?: OrderCreateNestedManyWithoutCustomersInput;
};
