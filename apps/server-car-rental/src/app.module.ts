import { Module } from "@nestjs/common";

import {
  OpenTelemetryModule,
  PipeInjector,
  ControllerInjector,
  EventEmitterInjector,
  GraphQLResolverInjector,
  GuardInjector,
} from "@amplication/opentelemetry-nestjs";

import { HttpInstrumentation } from "@opentelemetry/instrumentation-http";
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-grpc";
import { BatchSpanProcessor } from "@opentelemetry/sdk-trace-node";
import { CarModule } from "./car/car.module";
import { CustomerModule } from "./customer/customer.module";
import { FeedbackModule } from "./feedback/feedback.module";
import { RentalModule } from "./rental/rental.module";
import { OrderModule } from "./order/order.module";
import { HealthModule } from "./health/health.module";
import { PrismaModule } from "./prisma/prisma.module";
import { SecretsManagerModule } from "./providers/secrets/secretsManager.module";
import { ServeStaticModule } from "@nestjs/serve-static";
import { ServeStaticOptionsService } from "./serveStaticOptions.service";
import { ConfigModule, ConfigService } from "@nestjs/config";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";

@Module({
  controllers: [],
  imports: [
    CarModule,
    CustomerModule,
    FeedbackModule,
    RentalModule,
    OrderModule,
    HealthModule,
    PrismaModule,
    SecretsManagerModule,
    ConfigModule.forRoot({ isGlobal: true }),
    ServeStaticModule.forRootAsync({
      useClass: ServeStaticOptionsService,
    }),
    GraphQLModule.forRootAsync<ApolloDriverConfig>({
      driver: ApolloDriver,
      useFactory: (configService: ConfigService) => {
        const playground = configService.get("GRAPHQL_PLAYGROUND");
        const introspection = configService.get("GRAPHQL_INTROSPECTION");
        return {
          autoSchemaFile: "schema.graphql",
          sortSchema: true,
          playground,
          introspection: playground || introspection,
        };
      },
      inject: [ConfigService],
      imports: [ConfigModule],
    }),
    OpenTelemetryModule.forRoot({
      serviceName: "CarRentalService",
      spanProcessor: new BatchSpanProcessor(new OTLPTraceExporter()),
      instrumentations: [
        new HttpInstrumentation({
          requestHook: (span, request) => {
            if (request.method)
              span.setAttribute("http.method", request.method);
          },
        }),
      ],

      traceAutoInjectors: [
        ControllerInjector,
        EventEmitterInjector,
        GraphQLResolverInjector,
        GuardInjector,
        PipeInjector,
      ],
    }),
  ],
  providers: [],
})
export class AppModule {}
