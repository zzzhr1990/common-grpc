// package: services
// file: file/userfile.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as file_userfile_pb from "../file/userfile_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileServiceService_ICreate;
    get: IFileServiceService_IGet;
    update: IFileServiceService_IUpdate;
    rename: IFileServiceService_IRename;
}

interface IFileServiceService_ICreate extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: "/services.FileService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IGet extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: "/services.FileService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IUpdate extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: "/services.FileService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IRename extends grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.BatchTaskResult> {
    path: "/services.FileService/Rename";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BatchTaskResult>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BatchTaskResult>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    get: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    update: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    rename: grpc.handleUnaryCall<file_userfile_pb.UserFile, common_common_entity_pb.BatchTaskResult>;
}

export interface IFileServiceClient {
    create(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    update(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    update(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    update(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public update(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public update(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public update(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BatchTaskResult) => void): grpc.ClientUnaryCall;
}
