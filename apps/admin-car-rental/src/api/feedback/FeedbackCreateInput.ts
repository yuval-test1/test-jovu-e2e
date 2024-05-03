import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type FeedbackCreateInput = {
  comments?: string | null;
  rating?: string | null;
  rental?: RentalWhereUniqueInput | null;
};
