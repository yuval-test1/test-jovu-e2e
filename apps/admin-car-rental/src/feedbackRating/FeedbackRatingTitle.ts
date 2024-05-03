import { FeedbackRating as TFeedbackRating } from "../api/feedbackRating/FeedbackRating";

export const FEEDBACKRATING_TITLE_FIELD = "rating";

export const FeedbackRatingTitle = (record: TFeedbackRating): string => {
  return record.rating?.toString() || String(record.id);
};
