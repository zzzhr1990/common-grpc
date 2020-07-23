// package: services
// file: ext/video.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "grpc";
import * as ext_video_pb from "../ext/video_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IVideoExtServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IVideoExtServiceService_Icreate;
    get: IVideoExtServiceService_Iget;
    getOrEmpty: IVideoExtServiceService_IgetOrEmpty;
    update: IVideoExtServiceService_Iupdate;
    getPreview: IVideoExtServiceService_IgetPreview;
}

interface IVideoExtServiceService_Icreate extends grpc.MethodDefinition<ext_video_pb.VideoExt, common_common_entity_pb.BoolEntity> {
    path: string; // "/services.VideoExtService/create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    requestDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
    responseSerialize: grpc.serialize<common_common_entity_pb.BoolEntity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.BoolEntity>;
}
interface IVideoExtServiceService_Iget extends grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt> {
    path: string; // "/services.VideoExtService/get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    requestDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
    responseSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    responseDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
}
interface IVideoExtServiceService_IgetOrEmpty extends grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt> {
    path: string; // "/services.VideoExtService/getOrEmpty"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    requestDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
    responseSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    responseDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
}
interface IVideoExtServiceService_Iupdate extends grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt> {
    path: string; // "/services.VideoExtService/update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    requestDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
    responseSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    responseDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
}
interface IVideoExtServiceService_IgetPreview extends grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.PreviewInfo> {
    path: string; // "/services.VideoExtService/getPreview"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<ext_video_pb.VideoExt>;
    requestDeserialize: grpc.deserialize<ext_video_pb.VideoExt>;
    responseSerialize: grpc.serialize<ext_video_pb.PreviewInfo>;
    responseDeserialize: grpc.deserialize<ext_video_pb.PreviewInfo>;
}

export const VideoExtServiceService: IVideoExtServiceService;

export interface IVideoExtServiceServer {
    create: grpc.handleUnaryCall<ext_video_pb.VideoExt, common_common_entity_pb.BoolEntity>;
    get: grpc.handleUnaryCall<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
    getOrEmpty: grpc.handleUnaryCall<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
    update: grpc.handleUnaryCall<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
    getPreview: grpc.handleUnaryCall<ext_video_pb.VideoExt, ext_video_pb.PreviewInfo>;
}

export interface IVideoExtServiceClient {
    create(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    create(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    create(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    get(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    get(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    get(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    getOrEmpty(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    update(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    update(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    update(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    getPreview(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
    getPreview(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
    getPreview(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
}

export class VideoExtServiceClient extends grpc.Client implements IVideoExtServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public create(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public create(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.BoolEntity) => void): grpc.ClientUnaryCall;
    public get(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public get(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public get(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public getOrEmpty(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public update(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public update(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public update(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.VideoExt) => void): grpc.ClientUnaryCall;
    public getPreview(request: ext_video_pb.VideoExt, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
    public getPreview(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
    public getPreview(request: ext_video_pb.VideoExt, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: ext_video_pb.PreviewInfo) => void): grpc.ClientUnaryCall;
}
