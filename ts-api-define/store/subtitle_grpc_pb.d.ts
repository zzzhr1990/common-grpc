// package: services
// file: store/subtitle.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as store_subtitle_pb from "../store/subtitle_pb";

interface ISubtitleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ISubtitleServiceService_ICreate;
    get: ISubtitleServiceService_IGet;
    getList: ISubtitleServiceService_IGetList;
    update: ISubtitleServiceService_IUpdate;
}

interface ISubtitleServiceService_ICreate extends grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle> {
    path: "/services.SubtitleService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    requestDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
    responseSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    responseDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
}
interface ISubtitleServiceService_IGet extends grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle> {
    path: "/services.SubtitleService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    requestDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
    responseSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    responseDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
}
interface ISubtitleServiceService_IGetList extends grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.SubtitleListResponse> {
    path: "/services.SubtitleService/GetList";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    requestDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
    responseSerialize: grpc.serialize<store_subtitle_pb.SubtitleListResponse>;
    responseDeserialize: grpc.deserialize<store_subtitle_pb.SubtitleListResponse>;
}
interface ISubtitleServiceService_IUpdate extends grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle> {
    path: "/services.SubtitleService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    requestDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
    responseSerialize: grpc.serialize<store_subtitle_pb.Subtitle>;
    responseDeserialize: grpc.deserialize<store_subtitle_pb.Subtitle>;
}

export const SubtitleServiceService: ISubtitleServiceService;

export interface ISubtitleServiceServer {
    create: grpc.handleUnaryCall<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
    get: grpc.handleUnaryCall<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
    getList: grpc.handleUnaryCall<store_subtitle_pb.Subtitle, store_subtitle_pb.SubtitleListResponse>;
    update: grpc.handleUnaryCall<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
}

export interface ISubtitleServiceClient {
    create(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    create(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    create(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    get(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    get(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    get(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    getList(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    getList(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    getList(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    update(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    update(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    update(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
}

export class SubtitleServiceClient extends grpc.Client implements ISubtitleServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public create(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public create(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public get(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public get(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public get(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public getList(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    public getList(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.SubtitleListResponse) => void): grpc.ClientUnaryCall;
    public update(request: store_subtitle_pb.Subtitle, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public update(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
    public update(request: store_subtitle_pb.Subtitle, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_subtitle_pb.Subtitle) => void): grpc.ClientUnaryCall;
}
