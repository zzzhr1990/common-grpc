// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: bill/bill.proto

import * as bill_bill_pb from "../bill/bill_pb";
import * as grpc from "grpc";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
  list: grpc.MethodDefinition<bill_bill_pb.OrderListRequest, bill_bill_pb.OrderListResponse>;
  listPlan: grpc.MethodDefinition<bill_bill_pb.PlanListRequest, bill_bill_pb.PlanListResponse>;
  get: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
  update: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
  complete: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
  fail: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
  cancel: grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order>;
}

export const OrderServiceService: IOrderServiceService;

export class OrderServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  create(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  create(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.OrderListRequest, callback: grpc.requestCallback<bill_bill_pb.OrderListResponse>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.OrderListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.OrderListResponse>): grpc.ClientUnaryCall;
  list(argument: bill_bill_pb.OrderListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.OrderListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  listPlan(argument: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.PlanListResponse>): grpc.ClientUnaryCall;
  get(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  get(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  get(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  update(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  complete(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  fail(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  fail(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  fail(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  cancel(argument: bill_bill_pb.Order, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  cancel(argument: bill_bill_pb.Order, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
  cancel(argument: bill_bill_pb.Order, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<bill_bill_pb.Order>): grpc.ClientUnaryCall;
}
