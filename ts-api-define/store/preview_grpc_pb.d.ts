// package: services
// file: store/preview.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as store_preview_pb from "../store/preview_pb";

interface IPreviewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IPreviewServiceService_ICreate;
    get: IPreviewServiceService_IGet;
    update: IPreviewServiceService_IUpdate;
}

interface IPreviewServiceService_ICreate extends grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview> {
    path: string; // "/services.PreviewService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    requestDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
    responseSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    responseDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
}
interface IPreviewServiceService_IGet extends grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview> {
    path: string; // "/services.PreviewService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    requestDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
    responseSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    responseDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
}
interface IPreviewServiceService_IUpdate extends grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview> {
    path: string; // "/services.PreviewService/Update"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    requestDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
    responseSerialize: grpc.serialize<store_preview_pb.MediaPreview>;
    responseDeserialize: grpc.deserialize<store_preview_pb.MediaPreview>;
}

export const PreviewServiceService: IPreviewServiceService;

export interface IPreviewServiceServer {
    create: grpc.handleUnaryCall<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
    get: grpc.handleUnaryCall<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
    update: grpc.handleUnaryCall<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
}

export interface IPreviewServiceClient {
    create(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    create(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    create(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    get(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    get(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    get(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    update(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    update(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    update(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
}

export class PreviewServiceClient extends grpc.Client implements IPreviewServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public create(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public create(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public get(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public get(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public get(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public update(request: store_preview_pb.MediaPreview, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public update(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
    public update(request: store_preview_pb.MediaPreview, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_preview_pb.MediaPreview) => void): grpc.ClientUnaryCall;
}
