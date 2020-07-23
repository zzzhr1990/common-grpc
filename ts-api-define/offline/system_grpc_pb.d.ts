// package: services
// file: offline/system.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as offline_system_pb from "../offline/system_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface ISystemTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISystemTaskServiceService_Icreate;
    update: ISystemTaskServiceService_Iupdate;
    get: ISystemTaskServiceService_Iget;
    getList: ISystemTaskServiceService_IgetList;
    getDetail: ISystemTaskServiceService_IgetDetail;
    fetch: ISystemTaskServiceService_Ifetch;
    uploadFile: ISystemTaskServiceService_IuploadFile;
    updateFile: ISystemTaskServiceService_IupdateFile;
    complete: ISystemTaskServiceService_Icomplete;
    error: ISystemTaskServiceService_Ierror;
}

interface ISystemTaskServiceService_Icreate extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask> {
    path: string; // "/services.SystemTaskService/create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
}
interface ISystemTaskServiceService_Iupdate extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask> {
    path: string; // "/services.SystemTaskService/update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
}
interface ISystemTaskServiceService_Iget extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask> {
    path: string; // "/services.SystemTaskService/get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
}
interface ISystemTaskServiceService_IgetList extends grpc.MethodDefinition<common_common_entity_pb.StringListEntity, offline_system_pb.SystemTaskList> {
    path: string; // "/services.SystemTaskService/getList"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_entity_pb.StringListEntity>;
    requestDeserialize: grpc.deserialize<common_common_entity_pb.StringListEntity>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTaskList>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTaskList>;
}
interface ISystemTaskServiceService_IgetDetail extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTaskDetail> {
    path: string; // "/services.SystemTaskService/getDetail"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTaskDetail>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTaskDetail>;
}
interface ISystemTaskServiceService_Ifetch extends grpc.MethodDefinition<offline_system_pb.SystemTaskFetchRequest, offline_system_pb.SystemTaskList> {
    path: string; // "/services.SystemTaskService/fetch"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTaskFetchRequest>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTaskFetchRequest>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTaskList>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTaskList>;
}
interface ISystemTaskServiceService_IuploadFile extends grpc.MethodDefinition<offline_system_pb.TaskFile, offline_system_pb.TaskFile> {
    path: string; // "/services.SystemTaskService/uploadFile"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.TaskFile>;
    requestDeserialize: grpc.deserialize<offline_system_pb.TaskFile>;
    responseSerialize: grpc.serialize<offline_system_pb.TaskFile>;
    responseDeserialize: grpc.deserialize<offline_system_pb.TaskFile>;
}
interface ISystemTaskServiceService_IupdateFile extends grpc.MethodDefinition<offline_system_pb.TaskFile, offline_system_pb.TaskFile> {
    path: string; // "/services.SystemTaskService/updateFile"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.TaskFile>;
    requestDeserialize: grpc.deserialize<offline_system_pb.TaskFile>;
    responseSerialize: grpc.serialize<offline_system_pb.TaskFile>;
    responseDeserialize: grpc.deserialize<offline_system_pb.TaskFile>;
}
interface ISystemTaskServiceService_Icomplete extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask> {
    path: string; // "/services.SystemTaskService/complete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
}
interface ISystemTaskServiceService_Ierror extends grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask> {
    path: string; // "/services.SystemTaskService/error"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    requestDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
    responseSerialize: grpc.serialize<offline_system_pb.SystemTask>;
    responseDeserialize: grpc.deserialize<offline_system_pb.SystemTask>;
}

export const SystemTaskServiceService: ISystemTaskServiceService;

export interface ISystemTaskServiceServer {
    create: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
    update: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
    get: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
    getList: grpc.handleUnaryCall<common_common_entity_pb.StringListEntity, offline_system_pb.SystemTaskList>;
    getDetail: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTaskDetail>;
    fetch: grpc.handleUnaryCall<offline_system_pb.SystemTaskFetchRequest, offline_system_pb.SystemTaskList>;
    uploadFile: grpc.handleUnaryCall<offline_system_pb.TaskFile, offline_system_pb.TaskFile>;
    updateFile: grpc.handleUnaryCall<offline_system_pb.TaskFile, offline_system_pb.TaskFile>;
    complete: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
    error: grpc.handleUnaryCall<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
}

export interface ISystemTaskServiceClient {
    create(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    create(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    create(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    update(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    update(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    update(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    get(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    get(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    get(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    getList(request: common_common_entity_pb.StringListEntity, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    getList(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    getList(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    getDetail(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    getDetail(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    getDetail(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    fetch(request: offline_system_pb.SystemTaskFetchRequest, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    fetch(request: offline_system_pb.SystemTaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    fetch(request: offline_system_pb.SystemTaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    uploadFile(request: offline_system_pb.TaskFile, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    uploadFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    uploadFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    updateFile(request: offline_system_pb.TaskFile, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    updateFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    updateFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    complete(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    complete(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    complete(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    error(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    error(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    error(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
}

export class SystemTaskServiceClient extends grpc.Client implements ISystemTaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public create(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public create(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public getList(request: common_common_entity_pb.StringListEntity, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public getList(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public getList(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public getDetail(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    public getDetail(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    public getDetail(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskDetail) => void): grpc.ClientUnaryCall;
    public fetch(request: offline_system_pb.SystemTaskFetchRequest, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public fetch(request: offline_system_pb.SystemTaskFetchRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public fetch(request: offline_system_pb.SystemTaskFetchRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTaskList) => void): grpc.ClientUnaryCall;
    public uploadFile(request: offline_system_pb.TaskFile, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public uploadFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public uploadFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public updateFile(request: offline_system_pb.TaskFile, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public updateFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public updateFile(request: offline_system_pb.TaskFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.TaskFile) => void): grpc.ClientUnaryCall;
    public complete(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public complete(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public complete(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_system_pb.SystemTask, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
    public error(request: offline_system_pb.SystemTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_system_pb.SystemTask) => void): grpc.ClientUnaryCall;
}
