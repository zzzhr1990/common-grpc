// package: services
// file: store/cloudstore.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as store_cloudstore_pb from "../store/cloudstore_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface ICloudStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ICloudStoreServiceService_ICreate;
    get: ICloudStoreServiceService_IGet;
    update: ICloudStoreServiceService_IUpdate;
    batchGet: ICloudStoreServiceService_IBatchGet;
    getDownloadAddress: ICloudStoreServiceService_IGetDownloadAddress;
    batchDownloadAddress: ICloudStoreServiceService_IBatchDownloadAddress;
    createWcsUploadToken: ICloudStoreServiceService_ICreateWcsUploadToken;
    onFileUpload: ICloudStoreServiceService_IOnFileUpload;
}

interface ICloudStoreServiceService_ICreate extends grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore> {
    path: string; // "/services.CloudStoreService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
}
interface ICloudStoreServiceService_IGet extends grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore> {
    path: string; // "/services.CloudStoreService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
}
interface ICloudStoreServiceService_IUpdate extends grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore> {
    path: string; // "/services.CloudStoreService/Update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
}
interface ICloudStoreServiceService_IBatchGet extends grpc.MethodDefinition<store_cloudstore_pb.CloudStoreList, store_cloudstore_pb.CloudStoreList> {
    path: string; // "/services.CloudStoreService/BatchGet"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStoreList>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStoreList>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStoreList>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStoreList>;
}
interface ICloudStoreServiceService_IGetDownloadAddress extends grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore> {
    path: string; // "/services.CloudStoreService/GetDownloadAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
}
interface ICloudStoreServiceService_IBatchDownloadAddress extends grpc.MethodDefinition<common_common_entity_pb.StringListEntity, store_cloudstore_pb.CloudStoreList> {
    path: string; // "/services.CloudStoreService/BatchDownloadAddress"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<common_common_entity_pb.StringListEntity>;
    requestDeserialize: grpc.deserialize<common_common_entity_pb.StringListEntity>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStoreList>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStoreList>;
}
interface ICloudStoreServiceService_ICreateWcsUploadToken extends grpc.MethodDefinition<store_cloudstore_pb.UploadTokenRequest, store_cloudstore_pb.WcsUploadToken> {
    path: string; // "/services.CloudStoreService/CreateWcsUploadToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.UploadTokenRequest>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.UploadTokenRequest>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.WcsUploadToken>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.WcsUploadToken>;
}
interface ICloudStoreServiceService_IOnFileUpload extends grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore> {
    path: string; // "/services.CloudStoreService/OnFileUpload"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    requestDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
    responseSerialize: grpc.serialize<store_cloudstore_pb.CloudStore>;
    responseDeserialize: grpc.deserialize<store_cloudstore_pb.CloudStore>;
}

export const CloudStoreServiceService: ICloudStoreServiceService;

export interface ICloudStoreServiceServer {
    create: grpc.handleUnaryCall<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
    get: grpc.handleUnaryCall<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
    update: grpc.handleUnaryCall<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
    batchGet: grpc.handleUnaryCall<store_cloudstore_pb.CloudStoreList, store_cloudstore_pb.CloudStoreList>;
    getDownloadAddress: grpc.handleUnaryCall<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
    batchDownloadAddress: grpc.handleUnaryCall<common_common_entity_pb.StringListEntity, store_cloudstore_pb.CloudStoreList>;
    createWcsUploadToken: grpc.handleUnaryCall<store_cloudstore_pb.UploadTokenRequest, store_cloudstore_pb.WcsUploadToken>;
    onFileUpload: grpc.handleUnaryCall<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
}

export interface ICloudStoreServiceClient {
    create(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    create(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    create(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    get(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    get(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    get(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    update(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    update(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    update(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    batchGet(request: store_cloudstore_pb.CloudStoreList, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    batchGet(request: store_cloudstore_pb.CloudStoreList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    batchGet(request: store_cloudstore_pb.CloudStoreList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    getDownloadAddress(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    getDownloadAddress(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    getDownloadAddress(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    batchDownloadAddress(request: common_common_entity_pb.StringListEntity, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    batchDownloadAddress(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    batchDownloadAddress(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    onFileUpload(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    onFileUpload(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    onFileUpload(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
}

export class CloudStoreServiceClient extends grpc.Client implements ICloudStoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public create(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public create(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public get(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public get(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public get(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public update(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public update(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public update(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public batchGet(request: store_cloudstore_pb.CloudStoreList, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public batchGet(request: store_cloudstore_pb.CloudStoreList, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public batchGet(request: store_cloudstore_pb.CloudStoreList, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public getDownloadAddress(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public getDownloadAddress(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public getDownloadAddress(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public batchDownloadAddress(request: common_common_entity_pb.StringListEntity, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public batchDownloadAddress(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public batchDownloadAddress(request: common_common_entity_pb.StringListEntity, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStoreList) => void): grpc.ClientUnaryCall;
    public createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    public createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    public createWcsUploadToken(request: store_cloudstore_pb.UploadTokenRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.WcsUploadToken) => void): grpc.ClientUnaryCall;
    public onFileUpload(request: store_cloudstore_pb.CloudStore, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public onFileUpload(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
    public onFileUpload(request: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_cloudstore_pb.CloudStore) => void): grpc.ClientUnaryCall;
}
