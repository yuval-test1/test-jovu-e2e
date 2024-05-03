import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FeedbackRatingServiceBase } from "./base/feedbackRating.service.base";

@Injectable()
export class FeedbackRatingService extends FeedbackRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
