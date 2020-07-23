// package: services
// file: share/share.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as share_share_pb from "../share/share_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IFileShareServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IFileShareServiceService_Icreate;
    cancel: IFileShareServiceService_Icancel;
    getOrEmpty: IFileShareServiceService_IgetOrEmpty;
    save: IFileShareServiceService_Isave;
}

interface IFileShareServiceService_Icreate extends grpc.MethodDefinition<share_share_pb.FileShare, share_share_pb.FileShare> {
    path: string; // "/services.FileShareService/create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<share_share_pb.FileShare>;
    requestDeserialize: grpc.deserialize<share_share_pb.FileShare>;
    responseSerialize: grpc.serialize<share_share_pb.FileShare>;
    responseDeserialize: grpc.deserialize<share_share_pb.FileShare>;
}
interface IFileShareServiceService_Icancel extends grpc.MethodDefinition<share_share_pb.FileShare, common_common_entity_pb.BoolEntity> {
    path: string; // "/services.FileShareService/cancel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<share_share_pb.FileShare>;
    requestDeserialize: grpc.deserialize<share_share_pb.FileShare>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}
interface IFileShareServiceService_IgetOrEmpty extends grpc.MethodDefinition<share_share_pb.FileShare, share_share_pb.FileShare> {
    path: string; // "/services.FileShareService/getOrEmpty"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<share_share_pb.FileShare>;
    requestDeserialize: grpc.deserialize<share_share_pb.FileShare>;
    responseSerialize: grpc.serialize<share_share_pb.FileShare>;
    responseDeserialize: grpc.deserialize<share_share_pb.FileShare>;
}
interface IFileShareServiceService_Isave extends grpc.MethodDefinition<share_share_pb.ShareSaveRequest, share_share_pb.FileShare> {
    path: string; // "/services.FileShareService/save"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<share_share_pb.ShareSaveRequest>;
    requestDeserialize: grpc.deserialize<share_share_pb.ShareSaveRequest>;
    responseSerialize: grpc.serialize<share_share_pb.FileShare>;
    responseDeserialize: grpc.deserialize<share_share_pb.FileShare>;
}

export const FileShareServiceService: IFileShareServiceService;

export interface IFileShareServiceServer {
    create: grpc.handleUnaryCall<share_share_pb.FileShare, share_share_pb.FileShare>;
    cancel: grpc.handleUnaryCall<share_share_pb.FileShare, common_common_entity_pb.BoolEntity>;
    getOrEmpty: grpc.handleUnaryCall<share_share_pb.FileShare, share_share_pb.FileShare>;
    save: grpc.handleUnaryCall<share_share_pb.ShareSaveRequest, share_share_pb.FileShare>;
}

export interface IFileShareServiceClient {
    create(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    create(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    create(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    cancel(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    cancel(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    cancel(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    save(request: share_share_pb.ShareSaveRequest, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    save(request: share_share_pb.ShareSaveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    save(request: share_share_pb.ShareSaveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
}

export class FileShareServiceClient extends grpc.Client implements IFileShareServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public create(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public create(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public cancel(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public cancel(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public cancel(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: share_share_pb.FileShare, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: share_share_pb.FileShare, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: share_share_pb.FileShare, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public save(request: share_share_pb.ShareSaveRequest, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public save(request: share_share_pb.ShareSaveRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
    public save(request: share_share_pb.ShareSaveRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: share_share_pb.FileShare) => void): grpc.ClientUnaryCall;
}
