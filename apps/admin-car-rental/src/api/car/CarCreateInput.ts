import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";
import { OrderCreateNestedManyWithoutCarsInput } from "./OrderCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  rentals?: RentalCreateNestedManyWithoutCarsInput;
  rentalPricePerDay?: number | null;
  status?: "Option1" | null;
  registrationNumber?: string | null;
  make?: string | null;
  model?: string | null;
  orders?: OrderCreateNestedManyWithoutCarsInput;
};
