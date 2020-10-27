// package: services
// file: bill/bill.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as bill_bill_pb from "../bill/bill_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IOrderServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IOrderServiceService_ICreate;
    list: IOrderServiceService_IList;
    listPlan: IOrderServiceService_IListPlan;
    get: IOrderServiceService_IGet;
    getPayment: IOrderServiceService_IGetPayment;
    update: IOrderServiceService_IUpdate;
    complete: IOrderServiceService_IComplete;
    fail: IOrderServiceService_IFail;
    cancel: IOrderServiceService_ICancel;
    batchAsyncTask: IOrderServiceService_IBatchAsyncTask;
}

interface IOrderServiceService_ICreate extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_IList extends grpc.MethodDefinition<bill_bill_pb.OrderListRequest, bill_bill_pb.OrderListResponse> {
    path: "/services.OrderService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.OrderListRequest>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.OrderListRequest>;
    responseSerialize: grpc.serialize<bill_bill_pb.OrderListResponse>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.OrderListResponse>;
}
interface IOrderServiceService_IListPlan extends grpc.MethodDefinition<bill_bill_pb.PlanListRequest, bill_bill_pb.PlanListResponse> {
    path: "/services.OrderService/ListPlan";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.PlanListRequest>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.PlanListRequest>;
    responseSerialize: grpc.serialize<bill_bill_pb.PlanListResponse>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.PlanListResponse>;
}
interface IOrderServiceService_IGet extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_IGetPayment extends grpc.MethodDefinition<bill_bill_pb.Payment, bill_bill_pb.Payment> {
    path: "/services.OrderService/GetPayment";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Payment>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Payment>;
    responseSerialize: grpc.serialize<bill_bill_pb.Payment>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Payment>;
}
interface IOrderServiceService_IUpdate extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_IComplete extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Complete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_IFail extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Fail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_ICancel extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/Cancel";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}
interface IOrderServiceService_IBatchAsyncTask extends grpc.MethodDefinition<bill_bill_pb.Order, bill_bill_pb.Order> {
    path: "/services.OrderService/BatchAsyncTask";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<bill_bill_pb.Order>;
    requestDeserialize: grpc.deserialize<bill_bill_pb.Order>;
    responseSerialize: grpc.serialize<bill_bill_pb.Order>;
    responseDeserialize: grpc.deserialize<bill_bill_pb.Order>;
}

export const OrderServiceService: IOrderServiceService;

export interface IOrderServiceServer {
    create: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    list: grpc.handleUnaryCall<bill_bill_pb.OrderListRequest, bill_bill_pb.OrderListResponse>;
    listPlan: grpc.handleUnaryCall<bill_bill_pb.PlanListRequest, bill_bill_pb.PlanListResponse>;
    get: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    getPayment: grpc.handleUnaryCall<bill_bill_pb.Payment, bill_bill_pb.Payment>;
    update: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    complete: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    fail: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    cancel: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
    batchAsyncTask: grpc.handleUnaryCall<bill_bill_pb.Order, bill_bill_pb.Order>;
}

export interface IOrderServiceClient {
    create(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    create(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    create(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    list(request: bill_bill_pb.OrderListRequest, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    list(request: bill_bill_pb.OrderListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    list(request: bill_bill_pb.OrderListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    listPlan(request: bill_bill_pb.PlanListRequest, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    listPlan(request: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    listPlan(request: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    get(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    get(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    get(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    getPayment(request: bill_bill_pb.Payment, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    getPayment(request: bill_bill_pb.Payment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    getPayment(request: bill_bill_pb.Payment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    update(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    update(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    update(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    complete(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    complete(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    complete(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    fail(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    fail(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    fail(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    cancel(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    cancel(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    cancel(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    batchAsyncTask(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    batchAsyncTask(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    batchAsyncTask(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
}

export class OrderServiceClient extends grpc.Client implements IOrderServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public create(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public create(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public list(request: bill_bill_pb.OrderListRequest, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    public list(request: bill_bill_pb.OrderListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    public list(request: bill_bill_pb.OrderListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.OrderListResponse) => void): grpc.ClientUnaryCall;
    public listPlan(request: bill_bill_pb.PlanListRequest, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    public listPlan(request: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    public listPlan(request: bill_bill_pb.PlanListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.PlanListResponse) => void): grpc.ClientUnaryCall;
    public get(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public get(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public get(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public getPayment(request: bill_bill_pb.Payment, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    public getPayment(request: bill_bill_pb.Payment, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    public getPayment(request: bill_bill_pb.Payment, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Payment) => void): grpc.ClientUnaryCall;
    public update(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public update(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public update(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public complete(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public complete(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public complete(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public fail(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public fail(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public fail(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public cancel(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public cancel(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public cancel(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public batchAsyncTask(request: bill_bill_pb.Order, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public batchAsyncTask(request: bill_bill_pb.Order, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
    public batchAsyncTask(request: bill_bill_pb.Order, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: bill_bill_pb.Order) => void): grpc.ClientUnaryCall;
}
