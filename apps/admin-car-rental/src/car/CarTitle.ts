import { Car as TCar } from "../api/car/Car";

export const CAR_TITLE_FIELD = "registrationNumber";

export const CarTitle = (record: TCar): string => {
  return record.registrationNumber?.toString() || String(record.id);
};
