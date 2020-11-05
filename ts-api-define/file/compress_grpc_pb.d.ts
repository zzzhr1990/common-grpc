// package: services
// file: file/compress.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as file_compress_pb from "../file/compress_pb";

interface IZipFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    createZipDownload: IZipFileServiceService_ICreateZipDownload;
    getZipDownload: IZipFileServiceService_IGetZipDownload;
    getZipDetail: IZipFileServiceService_IGetZipDetail;
}

interface IZipFileServiceService_ICreateZipDownload extends grpc.MethodDefinition<file_compress_pb.CreateZipDownloadRequest, file_compress_pb.ZipDownloadInfo> {
    path: "/services.ZipFileService/CreateZipDownload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_compress_pb.CreateZipDownloadRequest>;
    requestDeserialize: grpc.deserialize<file_compress_pb.CreateZipDownloadRequest>;
    responseSerialize: grpc.serialize<file_compress_pb.ZipDownloadInfo>;
    responseDeserialize: grpc.deserialize<file_compress_pb.ZipDownloadInfo>;
}
interface IZipFileServiceService_IGetZipDownload extends grpc.MethodDefinition<file_compress_pb.ZipDownloadInfo, file_compress_pb.ZipDownloadInfo> {
    path: "/services.ZipFileService/GetZipDownload";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_compress_pb.ZipDownloadInfo>;
    requestDeserialize: grpc.deserialize<file_compress_pb.ZipDownloadInfo>;
    responseSerialize: grpc.serialize<file_compress_pb.ZipDownloadInfo>;
    responseDeserialize: grpc.deserialize<file_compress_pb.ZipDownloadInfo>;
}
interface IZipFileServiceService_IGetZipDetail extends grpc.MethodDefinition<file_compress_pb.ZipDownloadInfo, file_compress_pb.ZipDownloadDetail> {
    path: "/services.ZipFileService/GetZipDetail";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<file_compress_pb.ZipDownloadInfo>;
    requestDeserialize: grpc.deserialize<file_compress_pb.ZipDownloadInfo>;
    responseSerialize: grpc.serialize<file_compress_pb.ZipDownloadDetail>;
    responseDeserialize: grpc.deserialize<file_compress_pb.ZipDownloadDetail>;
}

export const ZipFileServiceService: IZipFileServiceService;

export interface IZipFileServiceServer {
    createZipDownload: grpc.handleUnaryCall<file_compress_pb.CreateZipDownloadRequest, file_compress_pb.ZipDownloadInfo>;
    getZipDownload: grpc.handleUnaryCall<file_compress_pb.ZipDownloadInfo, file_compress_pb.ZipDownloadInfo>;
    getZipDetail: grpc.handleUnaryCall<file_compress_pb.ZipDownloadInfo, file_compress_pb.ZipDownloadDetail>;
}

export interface IZipFileServiceClient {
    createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    getZipDownload(request: file_compress_pb.ZipDownloadInfo, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    getZipDownload(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    getZipDownload(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    getZipDetail(request: file_compress_pb.ZipDownloadInfo, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
    getZipDetail(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
    getZipDetail(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
}

export class ZipFileServiceClient extends grpc.Client implements IZipFileServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public createZipDownload(request: file_compress_pb.CreateZipDownloadRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public getZipDownload(request: file_compress_pb.ZipDownloadInfo, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public getZipDownload(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public getZipDownload(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadInfo) => void): grpc.ClientUnaryCall;
    public getZipDetail(request: file_compress_pb.ZipDownloadInfo, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
    public getZipDetail(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
    public getZipDetail(request: file_compress_pb.ZipDownloadInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: file_compress_pb.ZipDownloadDetail) => void): grpc.ClientUnaryCall;
}
