// package: services
// file: file/filesystem.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as file_filesystem_pb from "../file/filesystem_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileServiceService_ICreate;
    createInternal: IFileServiceService_ICreateInternal;
    list: IFileServiceService_IList;
    listInternal: IFileServiceService_IListInternal;
    trash: IFileServiceService_ITrash;
    delete: IFileServiceService_IDelete;
    rename: IFileServiceService_IRename;
}

interface IFileServiceService_ICreate extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_ICreateInternal extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/CreateInternal"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_IList extends grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse> {
    path: string; // "/services.FileService/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfoListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfoListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListResponse>;
}
interface IFileServiceService_IListInternal extends grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse> {
    path: string; // "/services.FileService/ListInternal"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfoListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfoListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListResponse>;
}
interface IFileServiceService_ITrash extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Trash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_IDelete extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}
interface IFileServiceService_IRename extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Rename"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    createInternal: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    list: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    listInternal: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    trash: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    delete: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    rename: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
}

export interface IFileServiceClient {
    create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    createInternal(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    createInternal(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    createInternal(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public createInternal(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public createInternal(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public createInternal(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
}

interface IFileNoticeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    onProgress: IFileNoticeServiceService_IOnProgress;
    onComplete: IFileNoticeServiceService_IOnComplete;
    onError: IFileNoticeServiceService_IOnError;
    onCancel: IFileNoticeServiceService_IOnCancel;
}

interface IFileNoticeServiceService_IOnProgress extends grpc.MethodDefinition<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress> {
    path: string; // "/services.FileNoticeService/OnProgress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
}
interface IFileNoticeServiceService_IOnComplete extends grpc.MethodDefinition<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress> {
    path: string; // "/services.FileNoticeService/OnComplete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
}
interface IFileNoticeServiceService_IOnError extends grpc.MethodDefinition<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress> {
    path: string; // "/services.FileNoticeService/OnError"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
}
interface IFileNoticeServiceService_IOnCancel extends grpc.MethodDefinition<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress> {
    path: string; // "/services.FileNoticeService/OnCancel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskProgress>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskProgress>;
}

export const FileNoticeServiceService: IFileNoticeServiceService;

export interface IFileNoticeServiceServer {
    onProgress: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
    onComplete: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
    onError: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
    onCancel: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
}

export interface IFileNoticeServiceClient {
    onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
}

export class FileNoticeServiceClient extends grpc.Client implements IFileNoticeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
}
