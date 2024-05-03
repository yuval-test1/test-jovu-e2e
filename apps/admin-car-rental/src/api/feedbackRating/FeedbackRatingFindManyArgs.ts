import { FeedbackRatingWhereInput } from "./FeedbackRatingWhereInput";
import { FeedbackRatingOrderByInput } from "./FeedbackRatingOrderByInput";

export type FeedbackRatingFindManyArgs = {
  where?: FeedbackRatingWhereInput;
  orderBy?: Array<FeedbackRatingOrderByInput>;
  skip?: number;
  take?: number;
};
