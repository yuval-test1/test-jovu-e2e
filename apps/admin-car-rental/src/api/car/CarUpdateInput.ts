import { RentalUpdateManyWithoutCarsInput } from "./RentalUpdateManyWithoutCarsInput";
import { OrderUpdateManyWithoutCarsInput } from "./OrderUpdateManyWithoutCarsInput";

export type CarUpdateInput = {
  rentals?: RentalUpdateManyWithoutCarsInput;
  rentalPricePerDay?: number | null;
  status?: "Option1" | null;
  registrationNumber?: string | null;
  make?: string | null;
  model?: string | null;
  orders?: OrderUpdateManyWithoutCarsInput;
};
