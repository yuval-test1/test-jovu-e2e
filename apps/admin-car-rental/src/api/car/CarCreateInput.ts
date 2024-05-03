import { RentalCreateNestedManyWithoutCarsInput } from "./RentalCreateNestedManyWithoutCarsInput";

export type CarCreateInput = {
  rentals?: RentalCreateNestedManyWithoutCarsInput;
  rentalPricePerDay?: number | null;
  status?: "Option1" | null;
  registrationNumber?: string | null;
  make?: string | null;
  model?: string | null;
};
