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
import { Car } from "./Car";
import { CarCountArgs } from "./CarCountArgs";
import { CarFindManyArgs } from "./CarFindManyArgs";
import { CarFindUniqueArgs } from "./CarFindUniqueArgs";
import { CreateCarArgs } from "./CreateCarArgs";
import { UpdateCarArgs } from "./UpdateCarArgs";
import { DeleteCarArgs } from "./DeleteCarArgs";
import { RentalFindManyArgs } from "../../rental/base/RentalFindManyArgs";
import { Rental } from "../../rental/base/Rental";
import { OrderFindManyArgs } from "../../order/base/OrderFindManyArgs";
import { Order } from "../../order/base/Order";
import { CarService } from "../car.service";
@graphql.Resolver(() => Car)
export class CarResolverBase {
  constructor(protected readonly service: CarService) {}

  async _carsMeta(
    @graphql.Args() args: CarCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [Car])
  async cars(@graphql.Args() args: CarFindManyArgs): Promise<Car[]> {
    return this.service.cars(args);
  }

  @graphql.Query(() => Car, { nullable: true })
  async car(@graphql.Args() args: CarFindUniqueArgs): Promise<Car | null> {
    const result = await this.service.car(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Car)
  async createCar(@graphql.Args() args: CreateCarArgs): Promise<Car> {
    return await this.service.createCar({
      ...args,
      data: args.data,
    });
  }

  @graphql.Mutation(() => Car)
  async updateCar(@graphql.Args() args: UpdateCarArgs): Promise<Car | null> {
    try {
      return await this.service.updateCar({
        ...args,
        data: args.data,
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

  @graphql.Mutation(() => Car)
  async deleteCar(@graphql.Args() args: DeleteCarArgs): Promise<Car | null> {
    try {
      return await this.service.deleteCar(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => [Rental], { name: "rentals" })
  async findRentals(
    @graphql.Parent() parent: Car,
    @graphql.Args() args: RentalFindManyArgs
  ): Promise<Rental[]> {
    const results = await this.service.findRentals(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }

  @graphql.ResolveField(() => [Order], { name: "orders" })
  async findOrders(
    @graphql.Parent() parent: Car,
    @graphql.Args() args: OrderFindManyArgs
  ): Promise<Order[]> {
    const results = await this.service.findOrders(parent.id, args);

    if (!results) {
      return [];
    }

    return results;
  }
}
