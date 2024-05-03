import { Rental } from "../rental/Rental";

export type Feedback = {
  id: string;
  createdAt: Date;
  updatedAt: Date;
  comments: string | null;
  rating: string | null;
  rental?: Rental | null;
};
