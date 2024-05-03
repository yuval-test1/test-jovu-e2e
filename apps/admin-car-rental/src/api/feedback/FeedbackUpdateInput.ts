import { RentalWhereUniqueInput } from "../rental/RentalWhereUniqueInput";

export type FeedbackUpdateInput = {
  comments?: string | null;
  rating?: string | null;
  rental?: RentalWhereUniqueInput | null;
};
