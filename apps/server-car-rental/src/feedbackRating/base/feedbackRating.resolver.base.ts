/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { FeedbackRating } from "./FeedbackRating";
import { FeedbackRatingCountArgs } from "./FeedbackRatingCountArgs";
import { FeedbackRatingFindManyArgs } from "./FeedbackRatingFindManyArgs";
import { FeedbackRatingFindUniqueArgs } from "./FeedbackRatingFindUniqueArgs";
import { CreateFeedbackRatingArgs } from "./CreateFeedbackRatingArgs";
import { UpdateFeedbackRatingArgs } from "./UpdateFeedbackRatingArgs";
import { DeleteFeedbackRatingArgs } from "./DeleteFeedbackRatingArgs";
import { Customer } from "../../customer/base/Customer";
import { Order } from "../../order/base/Order";
import { FeedbackRatingService } from "../feedbackRating.service";
@graphql.Resolver(() => FeedbackRating)
export class FeedbackRatingResolverBase {
  constructor(protected readonly service: FeedbackRatingService) {}

  async _feedbackRatingsMeta(
    @graphql.Args() args: FeedbackRatingCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [FeedbackRating])
  async feedbackRatings(
    @graphql.Args() args: FeedbackRatingFindManyArgs
  ): Promise<FeedbackRating[]> {
    return this.service.feedbackRatings(args);
  }

  @graphql.Query(() => FeedbackRating, { nullable: true })
  async feedbackRating(
    @graphql.Args() args: FeedbackRatingFindUniqueArgs
  ): Promise<FeedbackRating | null> {
    const result = await this.service.feedbackRating(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FeedbackRating)
  async createFeedbackRating(
    @graphql.Args() args: CreateFeedbackRatingArgs
  ): Promise<FeedbackRating> {
    return await this.service.createFeedbackRating({
      ...args,
      data: {
        ...args.data,

        customer: args.data.customer
          ? {
              connect: args.data.customer,
            }
          : undefined,

        order: args.data.order
          ? {
              connect: args.data.order,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => FeedbackRating)
  async updateFeedbackRating(
    @graphql.Args() args: UpdateFeedbackRatingArgs
  ): Promise<FeedbackRating | null> {
    try {
      return await this.service.updateFeedbackRating({
        ...args,
        data: {
          ...args.data,

          customer: args.data.customer
            ? {
                connect: args.data.customer,
              }
            : undefined,

          order: args.data.order
            ? {
                connect: args.data.order,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => FeedbackRating)
  async deleteFeedbackRating(
    @graphql.Args() args: DeleteFeedbackRatingArgs
  ): Promise<FeedbackRating | null> {
    try {
      return await this.service.deleteFeedbackRating(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Customer, {
    nullable: true,
    name: "customer",
  })
  async getCustomer(
    @graphql.Parent() parent: FeedbackRating
  ): Promise<Customer | null> {
    const result = await this.service.getCustomer(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.ResolveField(() => Order, {
    nullable: true,
    name: "order",
  })
  async getOrder(
    @graphql.Parent() parent: FeedbackRating
  ): Promise<Order | null> {
    const result = await this.service.getOrder(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }
}