// package: services
// file: task/task.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as task_task_pb from "../task/task_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface ISimpleTaskCenterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISimpleTaskCenterServiceService_Icreate;
    fetch: ISimpleTaskCenterServiceService_Ifetch;
    complete: ISimpleTaskCenterServiceService_Icomplete;
    update: ISimpleTaskCenterServiceService_Iupdate;
    error: ISimpleTaskCenterServiceService_Ierror;
    get: ISimpleTaskCenterServiceService_Iget;
    reset: ISimpleTaskCenterServiceService_Ireset;
}

interface ISimpleTaskCenterServiceService_Icreate extends grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask> {
    path: string; // "/services.SimpleTaskCenterService/create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
    responseSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    responseDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
}
interface ISimpleTaskCenterServiceService_Ifetch extends grpc.MethodDefinition<task_task_pb.FetchRequest, task_task_pb.FetchResponse> {
    path: string; // "/services.SimpleTaskCenterService/fetch"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.FetchRequest>;
    requestDeserialize: grpc.deserialize<task_task_pb.FetchRequest>;
    responseSerialize: grpc.serialize<task_task_pb.FetchResponse>;
    responseDeserialize: grpc.deserialize<task_task_pb.FetchResponse>;
}
interface ISimpleTaskCenterServiceService_Icomplete extends grpc.MethodDefinition<task_task_pb.SimpleTask, common_common_entity_pb.BoolEntity> {
    path: string; // "/services.SimpleTaskCenterService/complete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}
interface ISimpleTaskCenterServiceService_Iupdate extends grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask> {
    path: string; // "/services.SimpleTaskCenterService/update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
    responseSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    responseDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
}
interface ISimpleTaskCenterServiceService_Ierror extends grpc.MethodDefinition<task_task_pb.ErrorTask, task_task_pb.ErrorTask> {
    path: string; // "/services.SimpleTaskCenterService/error"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.ErrorTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.ErrorTask>;
    responseSerialize: grpc.serialize<task_task_pb.ErrorTask>;
    responseDeserialize: grpc.deserialize<task_task_pb.ErrorTask>;
}
interface ISimpleTaskCenterServiceService_Iget extends grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask> {
    path: string; // "/services.SimpleTaskCenterService/get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
    responseSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    responseDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
}
interface ISimpleTaskCenterServiceService_Ireset extends grpc.MethodDefinition<task_task_pb.ErrorTask, task_task_pb.SimpleTask> {
    path: string; // "/services.SimpleTaskCenterService/reset"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<task_task_pb.ErrorTask>;
    requestDeserialize: grpc.deserialize<task_task_pb.ErrorTask>;
    responseSerialize: grpc.serialize<task_task_pb.SimpleTask>;
    responseDeserialize: grpc.deserialize<task_task_pb.SimpleTask>;
}

export const SimpleTaskCenterServiceService: ISimpleTaskCenterServiceService;

export interface ISimpleTaskCenterServiceServer {
    create: grpc.handleUnaryCall<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
    fetch: grpc.handleUnaryCall<task_task_pb.FetchRequest, task_task_pb.FetchResponse>;
    complete: grpc.handleUnaryCall<task_task_pb.SimpleTask, common_common_entity_pb.BoolEntity>;
    update: grpc.handleUnaryCall<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
    error: grpc.handleUnaryCall<task_task_pb.ErrorTask, task_task_pb.ErrorTask>;
    get: grpc.handleUnaryCall<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
    reset: grpc.handleUnaryCall<task_task_pb.ErrorTask, task_task_pb.SimpleTask>;
}

export interface ISimpleTaskCenterServiceClient {
    create(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    create(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    create(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    fetch(request: task_task_pb.FetchRequest, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    fetch(request: task_task_pb.FetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    fetch(request: task_task_pb.FetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    complete(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    complete(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    complete(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    update(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    update(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    update(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    error(request: task_task_pb.ErrorTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    error(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    error(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    get(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    get(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    get(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    reset(request: task_task_pb.ErrorTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    reset(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    reset(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
}

export class SimpleTaskCenterServiceClient extends grpc.Client implements ISimpleTaskCenterServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public create(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public create(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public fetch(request: task_task_pb.FetchRequest, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    public fetch(request: task_task_pb.FetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    public fetch(request: task_task_pb.FetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.FetchResponse) => void): grpc.ClientUnaryCall;
    public complete(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public complete(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public complete(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public update(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public update(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public update(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public error(request: task_task_pb.ErrorTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    public error(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    public error(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.ErrorTask) => void): grpc.ClientUnaryCall;
    public get(request: task_task_pb.SimpleTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public get(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public get(request: task_task_pb.SimpleTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public reset(request: task_task_pb.ErrorTask, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public reset(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
    public reset(request: task_task_pb.ErrorTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: task_task_pb.SimpleTask) => void): grpc.ClientUnaryCall;
}
