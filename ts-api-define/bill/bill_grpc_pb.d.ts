// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: bill/bill.proto

import * as bill_bill_pb from "../bill/bill_pb";
import * as grpc from "grpc";

interface ISubscribeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<bill_bill_pb.Subscribe, bill_bill_pb.Subscribe>;
  list: grpc.MethodDefinition<bill_bill_pb.SubscribeListRequest, bill_bill_pb.SubscribeListResponse>;
  listPlan: grpc.MethodDefinition<bill_bill_pb.PlanListRequest, bill_bill_pb.PlanListResponse>;
  check: grpc.MethodDefinition<bill_bill_pb.Subscribe, bill_bill_pb.Subscribe>;
  update: grpc.MethodDefinition<bill_bill_pb.Subscribe, bill_bill_pb.Subscribe>;
  complete: grpc.MethodDefinition<bill_bill_pb.Subscribe, bill_bill_pb.Subscribe>;
}

export const SubscribeServiceService: ISubscribeServiceService;

export class SubscribeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: bill_bill_pb.Subscribe, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  create(argument: bill_bill_pb.Subscribe, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  create(argument: bill_bill_pb.Subscribe, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.SubscribeListRequest, callback: grpc.requestCallback<bill_bill_pb.SubscribeListResponse>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.SubscribeListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.SubscribeListResponse>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.SubscribeListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.SubscribeListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  check(argument: bill_bill_pb.Subscribe, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  check(argument: bill_bill_pb.Subscribe, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  check(argument: bill_bill_pb.Subscribe, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Subscribe, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Subscribe, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Subscribe, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Subscribe, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Subscribe, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Subscribe, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Subscribe>): grpc.ClientUnaryCall;
}
