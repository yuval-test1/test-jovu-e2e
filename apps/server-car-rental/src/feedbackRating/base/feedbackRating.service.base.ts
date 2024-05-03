/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  FeedbackRating as PrismaFeedbackRating,
  Customer as PrismaCustomer,
  Order as PrismaOrder,
} from "@prisma/client";

export class FeedbackRatingServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.FeedbackRatingCountArgs, "select">
  ): Promise<number> {
    return this.prisma.feedbackRating.count(args);
  }

  async feedbackRatings<T extends Prisma.FeedbackRatingFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackRatingFindManyArgs>
  ): Promise<PrismaFeedbackRating[]> {
    return this.prisma.feedbackRating.findMany<Prisma.FeedbackRatingFindManyArgs>(
      args
    );
  }
  async feedbackRating<T extends Prisma.FeedbackRatingFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackRatingFindUniqueArgs>
  ): Promise<PrismaFeedbackRating | null> {
    return this.prisma.feedbackRating.findUnique(args);
  }
  async createFeedbackRating<T extends Prisma.FeedbackRatingCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackRatingCreateArgs>
  ): Promise<PrismaFeedbackRating> {
    return this.prisma.feedbackRating.create<T>(args);
  }
  async updateFeedbackRating<T extends Prisma.FeedbackRatingUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackRatingUpdateArgs>
  ): Promise<PrismaFeedbackRating> {
    return this.prisma.feedbackRating.update<T>(args);
  }
  async deleteFeedbackRating<T extends Prisma.FeedbackRatingDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.FeedbackRatingDeleteArgs>
  ): Promise<PrismaFeedbackRating> {
    return this.prisma.feedbackRating.delete(args);
  }

  async getCustomer(parentId: string): Promise<PrismaCustomer | null> {
    return this.prisma.feedbackRating
      .findUnique({
        where: { id: parentId },
      })
      .customer();
  }

  async getOrder(parentId: string): Promise<PrismaOrder | null> {
    return this.prisma.feedbackRating
      .findUnique({
        where: { id: parentId },
      })
      .order();
  }
}
