// package: services
// file: file/filetask.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as file_filetask_pb from "../file/filetask_pb";

interface IFileTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileTaskServiceService_ICreate;
    list: IFileTaskServiceService_IList;
}

interface IFileTaskServiceService_ICreate extends grpc.MethodDefinition<file_filetask_pb.FileTask, file_filetask_pb.FileTask> {
    path: "/services.FileTaskService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filetask_pb.FileTask>;
    requestDeserialize: grpc.deserialize<file_filetask_pb.FileTask>;
    responseSerialize: grpc.serialize<file_filetask_pb.FileTask>;
    responseDeserialize: grpc.deserialize<file_filetask_pb.FileTask>;
}
interface IFileTaskServiceService_IList extends grpc.MethodDefinition<file_filetask_pb.FileTask, file_filetask_pb.FileTaskListResponse> {
    path: "/services.FileTaskService/List";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filetask_pb.FileTask>;
    requestDeserialize: grpc.deserialize<file_filetask_pb.FileTask>;
    responseSerialize: grpc.serialize<file_filetask_pb.FileTaskListResponse>;
    responseDeserialize: grpc.deserialize<file_filetask_pb.FileTaskListResponse>;
}

export const FileTaskServiceService: IFileTaskServiceService;

export interface IFileTaskServiceServer {
    create: grpc.handleUnaryCall<file_filetask_pb.FileTask, file_filetask_pb.FileTask>;
    list: grpc.handleUnaryCall<file_filetask_pb.FileTask, file_filetask_pb.FileTaskListResponse>;
}

export interface IFileTaskServiceClient {
    create(request: file_filetask_pb.FileTask, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    create(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    create(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    list(request: file_filetask_pb.FileTask, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
}

export class FileTaskServiceClient extends grpc.Client implements IFileTaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: file_filetask_pb.FileTask, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    public create(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    public create(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTask) => void): grpc.ClientUnaryCall;
    public list(request: file_filetask_pb.FileTask, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filetask_pb.FileTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filetask_pb.FileTaskListResponse) => void): grpc.ClientUnaryCall;
}
