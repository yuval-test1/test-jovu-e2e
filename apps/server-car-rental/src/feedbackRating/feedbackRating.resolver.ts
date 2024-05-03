import * as graphql from "@nestjs/graphql";
import { FeedbackRatingResolverBase } from "./base/feedbackRating.resolver.base";
import { FeedbackRating } from "./base/FeedbackRating";
import { FeedbackRatingService } from "./feedbackRating.service";

@graphql.Resolver(() => FeedbackRating)
export class FeedbackRatingResolver extends FeedbackRatingResolverBase {
  constructor(protected readonly service: FeedbackRatingService) {
    super(service);
  }
}
