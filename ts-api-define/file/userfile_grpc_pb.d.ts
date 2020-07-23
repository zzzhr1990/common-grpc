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
    flushStore: IFileServiceService_IFlushStore;
    updateCount: IFileServiceService_IUpdateCount;
    get: IFileServiceService_IGet;
    uploadToken: IFileServiceService_IUploadToken;
    rename: IFileServiceService_IRename;
    lock: IFileServiceService_ILock;
    releaseLock: IFileServiceService_IReleaseLock;
    trash: IFileServiceService_ITrash;
    delete: IFileServiceService_IDelete;
    copy: IFileServiceService_ICopy;
    move: IFileServiceService_IMove;
    recover: IFileServiceService_IRecover;
    list: IFileServiceService_IList;
    listInternal: IFileServiceService_IListInternal;
    deleteTrash: IFileServiceService_IDeleteTrash;
    listTrash: IFileServiceService_IListTrash;
    getTrash: IFileServiceService_IGetTrash;
    clearTrash: IFileServiceService_IClearTrash;
}

interface IFileServiceService_ICreate extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: string; // "/services.FileService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IFlushStore extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: string; // "/services.FileService/FlushStore"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IUpdateCount extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: string; // "/services.FileService/UpdateCount"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IGet extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: string; // "/services.FileService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_IUploadToken extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UploadTokenResponse> {
    path: string; // "/services.FileService/UploadToken"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UploadTokenResponse>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UploadTokenResponse>;
}
interface IFileServiceService_IRename extends grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile> {
    path: string; // "/services.FileService/Rename"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
}
interface IFileServiceService_ILock extends grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity> {
    path: string; // "/services.FileService/Lock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}
interface IFileServiceService_IReleaseLock extends grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity> {
    path: string; // "/services.FileService/ReleaseLock"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFile>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFile>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}
interface IFileServiceService_ITrash extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/Trash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_IDelete extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_ICopy extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/Copy"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_IMove extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/Move"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_IRecover extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/Recover"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_IList extends grpc.MethodDefinition<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse> {
    path: string; // "/services.FileService/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFileListRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFileListRequest>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFileListResponse>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFileListResponse>;
}
interface IFileServiceService_IListInternal extends grpc.MethodDefinition<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse> {
    path: string; // "/services.FileService/ListInternal"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFileListRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFileListRequest>;
    responseSerialize: grpc.serialize<file_userfile_pb.UserFileListResponse>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.UserFileListResponse>;
}
interface IFileServiceService_IDeleteTrash extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/DeleteTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IFileServiceService_IListTrash extends grpc.MethodDefinition<file_userfile_pb.UserFileListRequest, file_userfile_pb.TrashListResponse> {
    path: string; // "/services.FileService/ListTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.UserFileListRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.UserFileListRequest>;
    responseSerialize: grpc.serialize<file_userfile_pb.TrashListResponse>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.TrashListResponse>;
}
interface IFileServiceService_IGetTrash extends grpc.MethodDefinition<file_userfile_pb.TrashInfo, file_userfile_pb.TrashInfo> {
    path: string; // "/services.FileService/GetTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.TrashInfo>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.TrashInfo>;
    responseSerialize: grpc.serialize<file_userfile_pb.TrashInfo>;
    responseDeserialize: grpc.deserialize<file_userfile_pb.TrashInfo>;
}
interface IFileServiceService_IClearTrash extends grpc.MethodDefinition<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity> {
    path: string; // "/services.FileService/ClearTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_userfile_pb.BathFileRequest>;
    requestDeserialize: grpc.deserialize<file_userfile_pb.BathFileRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    flushStore: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    updateCount: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    get: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    uploadToken: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UploadTokenResponse>;
    rename: grpc.handleUnaryCall<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
    lock: grpc.handleUnaryCall<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity>;
    releaseLock: grpc.handleUnaryCall<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity>;
    trash: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    delete: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    copy: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    move: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    recover: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    list: grpc.handleUnaryCall<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse>;
    listInternal: grpc.handleUnaryCall<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse>;
    deleteTrash: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
    listTrash: grpc.handleUnaryCall<file_userfile_pb.UserFileListRequest, file_userfile_pb.TrashListResponse>;
    getTrash: grpc.handleUnaryCall<file_userfile_pb.TrashInfo, file_userfile_pb.TrashInfo>;
    clearTrash: grpc.handleUnaryCall<file_userfile_pb.BathFileRequest, common_common_entity_pb.Int64Entity>;
}

export interface IFileServiceClient {
    create(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    flushStore(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    flushStore(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    flushStore(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    updateCount(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    updateCount(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    updateCount(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    uploadToken(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    uploadToken(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    uploadToken(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    lock(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    lock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    lock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    releaseLock(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    releaseLock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    releaseLock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    trash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    trash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    trash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    copy(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    copy(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    copy(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    move(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    move(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    move(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    recover(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    recover(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    recover(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    list(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    listTrash(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    listTrash(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    listTrash(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    getTrash(request: file_userfile_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    getTrash(request: file_userfile_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    getTrash(request: file_userfile_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public create(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public flushStore(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public flushStore(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public flushStore(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public updateCount(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public updateCount(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public updateCount(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public get(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public uploadToken(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    public uploadToken(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    public uploadToken(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UploadTokenResponse) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public rename(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFile) => void): grpc.ClientUnaryCall;
    public lock(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public lock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public lock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public releaseLock(request: file_userfile_pb.UserFile, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public releaseLock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public releaseLock(request: file_userfile_pb.UserFile, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public trash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public trash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public trash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public copy(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public copy(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public copy(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public move(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public move(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public move(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public recover(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public recover(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public recover(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public list(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.UserFileListResponse) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_userfile_pb.UserFileListRequest, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashListResponse) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_userfile_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_userfile_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_userfile_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_userfile_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_userfile_pb.BathFileRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_userfile_pb.BathFileRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}
