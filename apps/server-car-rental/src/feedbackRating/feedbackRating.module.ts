import { Module } from "@nestjs/common";
import { FeedbackRatingModuleBase } from "./base/feedbackRating.module.base";
import { FeedbackRatingService } from "./feedbackRating.service";
import { FeedbackRatingController } from "./feedbackRating.controller";
import { FeedbackRatingResolver } from "./feedbackRating.resolver";

@Module({
  imports: [FeedbackRatingModuleBase],
  controllers: [FeedbackRatingController],
  providers: [FeedbackRatingService, FeedbackRatingResolver],
  exports: [FeedbackRatingService],
})
export class FeedbackRatingModule {}
