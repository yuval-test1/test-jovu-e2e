import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { FeedbackRatingService } from "./feedbackRating.service";
import { FeedbackRatingControllerBase } from "./base/feedbackRating.controller.base";

@swagger.ApiTags("feedbackRatings")
@common.Controller("feedbackRatings")
export class FeedbackRatingController extends FeedbackRatingControllerBase {
  constructor(protected readonly service: FeedbackRatingService) {
    super(service);
  }
}
