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
    get: IFileServiceService_IGet;
    list: IFileServiceService_IList;
    listInternal: IFileServiceService_IListInternal;
    trash: IFileServiceService_ITrash;
    delete: IFileServiceService_IDelete;
    copy: IFileServiceService_ICopy;
    move: IFileServiceService_IMove;
    rename: IFileServiceService_IRename;
    recover: IFileServiceService_IRecover;
    deleteTrash: IFileServiceService_IDeleteTrash;
    listTrash: IFileServiceService_IListTrash;
    getTrash: IFileServiceService_IGetTrash;
    clearTrash: IFileServiceService_IClearTrash;
    createLabel: IFileServiceService_ICreateLabel;
    getLabel: IFileServiceService_IGetLabel;
    deleteLabel: IFileServiceService_IDeleteLabel;
    listLabel: IFileServiceService_IListLabel;
    addLabelToFiles: IFileServiceService_IAddLabelToFiles;
    removeLabelFromFiles: IFileServiceService_IRemoveLabelFromFiles;
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
interface IFileServiceService_IGet extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo> {
    path: string; // "/services.FileService/Get"
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
interface IFileServiceService_ITrash extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Trash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IDelete extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_ICopy extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Copy"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IMove extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Move"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IRename extends grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Rename"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IRecover extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/Recover"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IDeleteTrash extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/DeleteTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IListTrash extends grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.TrashInfoListResponse> {
    path: string; // "/services.FileService/ListTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.FileInfoListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.FileInfoListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TrashInfoListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TrashInfoListResponse>;
}
interface IFileServiceService_IGetTrash extends grpc.MethodDefinition<file_filesystem_pb.TrashInfo, file_filesystem_pb.TrashInfo> {
    path: string; // "/services.FileService/GetTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TrashInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TrashInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TrashInfo>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TrashInfo>;
}
interface IFileServiceService_IClearTrash extends grpc.MethodDefinition<file_filesystem_pb.TrashInfo, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/ClearTrash"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TrashInfo>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TrashInfo>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_ICreateLabel extends grpc.MethodDefinition<file_filesystem_pb.Label, file_filesystem_pb.Label> {
    path: string; // "/services.FileService/CreateLabel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.Label>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.Label>;
    responseSerialize: grpc.serialize<file_filesystem_pb.Label>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.Label>;
}
interface IFileServiceService_IGetLabel extends grpc.MethodDefinition<file_filesystem_pb.Label, file_filesystem_pb.Label> {
    path: string; // "/services.FileService/GetLabel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.Label>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.Label>;
    responseSerialize: grpc.serialize<file_filesystem_pb.Label>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.Label>;
}
interface IFileServiceService_IDeleteLabel extends grpc.MethodDefinition<file_filesystem_pb.BatchLabelRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/DeleteLabel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchLabelRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchLabelRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IListLabel extends grpc.MethodDefinition<file_filesystem_pb.LabelListRequest, file_filesystem_pb.LabelListResponse> {
    path: string; // "/services.FileService/ListLabel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.LabelListRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.LabelListRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.LabelListResponse>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.LabelListResponse>;
}
interface IFileServiceService_IAddLabelToFiles extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/AddLabelToFiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}
interface IFileServiceService_IRemoveLabelFromFiles extends grpc.MethodDefinition<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult> {
    path: string; // "/services.FileService/RemoveLabelFromFiles"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskRequest>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskRequest>;
    responseSerialize: grpc.serialize<file_filesystem_pb.BatchFileTaskResult>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.BatchFileTaskResult>;
}

export const FileServiceService: IFileServiceService;

export interface IFileServiceServer {
    create: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    get: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
    list: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    listInternal: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
    trash: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    delete: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    copy: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    move: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    rename: grpc.handleUnaryCall<file_filesystem_pb.FileInfo, file_filesystem_pb.BatchFileTaskResult>;
    recover: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    deleteTrash: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    listTrash: grpc.handleUnaryCall<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.TrashInfoListResponse>;
    getTrash: grpc.handleUnaryCall<file_filesystem_pb.TrashInfo, file_filesystem_pb.TrashInfo>;
    clearTrash: grpc.handleUnaryCall<file_filesystem_pb.TrashInfo, file_filesystem_pb.BatchFileTaskResult>;
    createLabel: grpc.handleUnaryCall<file_filesystem_pb.Label, file_filesystem_pb.Label>;
    getLabel: grpc.handleUnaryCall<file_filesystem_pb.Label, file_filesystem_pb.Label>;
    deleteLabel: grpc.handleUnaryCall<file_filesystem_pb.BatchLabelRequest, file_filesystem_pb.BatchFileTaskResult>;
    listLabel: grpc.handleUnaryCall<file_filesystem_pb.LabelListRequest, file_filesystem_pb.LabelListResponse>;
    addLabelToFiles: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
    removeLabelFromFiles: grpc.handleUnaryCall<file_filesystem_pb.BatchFileTaskRequest, file_filesystem_pb.BatchFileTaskResult>;
}

export interface IFileServiceClient {
    create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    move(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    move(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    move(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    recover(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    recover(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    recover(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    listTrash(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    listTrash(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    listTrash(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    getTrash(request: file_filesystem_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    getTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    getTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_filesystem_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    clearTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    createLabel(request: file_filesystem_pb.Label, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    createLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    createLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    getLabel(request: file_filesystem_pb.Label, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    getLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    getLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    deleteLabel(request: file_filesystem_pb.BatchLabelRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    deleteLabel(request: file_filesystem_pb.BatchLabelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    deleteLabel(request: file_filesystem_pb.BatchLabelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    listLabel(request: file_filesystem_pb.LabelListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    listLabel(request: file_filesystem_pb.LabelListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    listLabel(request: file_filesystem_pb.LabelListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
}

export class FileServiceClient extends grpc.Client implements IFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public create(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public get(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfo) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public list(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public listInternal(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.FileInfoListResponse) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public trash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public delete(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public copy(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public move(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public move(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public move(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public rename(request: file_filesystem_pb.FileInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public recover(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public recover(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public recover(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public deleteTrash(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_filesystem_pb.FileInfoListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    public listTrash(request: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfoListResponse) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_filesystem_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public getTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TrashInfo) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_filesystem_pb.TrashInfo, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public clearTrash(request: file_filesystem_pb.TrashInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public createLabel(request: file_filesystem_pb.Label, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public createLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public createLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public getLabel(request: file_filesystem_pb.Label, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public getLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public getLabel(request: file_filesystem_pb.Label, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.Label) => void): grpc.ClientUnaryCall;
    public deleteLabel(request: file_filesystem_pb.BatchLabelRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public deleteLabel(request: file_filesystem_pb.BatchLabelRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public deleteLabel(request: file_filesystem_pb.BatchLabelRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public listLabel(request: file_filesystem_pb.LabelListRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    public listLabel(request: file_filesystem_pb.LabelListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    public listLabel(request: file_filesystem_pb.LabelListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.LabelListResponse) => void): grpc.ClientUnaryCall;
    public addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public addLabelToFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
    public removeLabelFromFiles(request: file_filesystem_pb.BatchFileTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.BatchFileTaskResult) => void): grpc.ClientUnaryCall;
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
interface IFileNoticeServiceService_IOnComplete extends grpc.MethodDefinition<file_filesystem_pb.TaskCompleteEvent, file_filesystem_pb.TaskCompleteEvent> {
    path: string; // "/services.FileNoticeService/OnComplete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskCompleteEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskCompleteEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskCompleteEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskCompleteEvent>;
}
interface IFileNoticeServiceService_IOnError extends grpc.MethodDefinition<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent> {
    path: string; // "/services.FileNoticeService/OnError"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
}
interface IFileNoticeServiceService_IOnCancel extends grpc.MethodDefinition<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent> {
    path: string; // "/services.FileNoticeService/OnCancel"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    requestDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseSerialize: grpc.serialize<file_filesystem_pb.TaskStatusUpdateEvent>;
    responseDeserialize: grpc.deserialize<file_filesystem_pb.TaskStatusUpdateEvent>;
}

export const FileNoticeServiceService: IFileNoticeServiceService;

export interface IFileNoticeServiceServer {
    onProgress: grpc.handleUnaryCall<file_filesystem_pb.TaskProgress, file_filesystem_pb.TaskProgress>;
    onComplete: grpc.handleUnaryCall<file_filesystem_pb.TaskCompleteEvent, file_filesystem_pb.TaskCompleteEvent>;
    onError: grpc.handleUnaryCall<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent>;
    onCancel: grpc.handleUnaryCall<file_filesystem_pb.TaskStatusUpdateEvent, file_filesystem_pb.TaskStatusUpdateEvent>;
}

export interface IFileNoticeServiceClient {
    onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
}

export class FileNoticeServiceClient extends grpc.Client implements IFileNoticeServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public onProgress(request: file_filesystem_pb.TaskProgress, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onProgress(request: file_filesystem_pb.TaskProgress, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskProgress) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onComplete(request: file_filesystem_pb.TaskCompleteEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskCompleteEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onError(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
    public onCancel(request: file_filesystem_pb.TaskStatusUpdateEvent, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_filesystem_pb.TaskStatusUpdateEvent) => void): grpc.ClientUnaryCall;
}
