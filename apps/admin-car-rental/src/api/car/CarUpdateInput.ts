import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  rentals?: RentalUpdateManyWithoutCarsInput;
  rentalPricePerDay?: number | null;
  status?: "Option1" | null;
  registrationNumber?: string | null;
  make?: string | null;
  model?: string | null;
};
