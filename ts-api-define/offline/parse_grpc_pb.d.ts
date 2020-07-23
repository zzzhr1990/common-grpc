// package: services
// file: offline/parse.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as offline_parse_pb from "../offline/parse_pb";

interface ITaskParseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    parse: ITaskParseServiceService_Iparse;
}

interface ITaskParseServiceService_Iparse extends grpc.MethodDefinition<offline_parse_pb.ParseTaskRequest, offline_parse_pb.ParseTaskResponse> {
    path: string; // "/services.TaskParseService/parse"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_parse_pb.ParseTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_parse_pb.ParseTaskRequest>;
    responseSerialize: grpc.serialize<offline_parse_pb.ParseTaskResponse>;
    responseDeserialize: grpc.deserialize<offline_parse_pb.ParseTaskResponse>;
}

export const TaskParseServiceService: ITaskParseServiceService;

export interface ITaskParseServiceServer {
    parse: grpc.handleUnaryCall<offline_parse_pb.ParseTaskRequest, offline_parse_pb.ParseTaskResponse>;
}

export interface ITaskParseServiceClient {
    parse(request: offline_parse_pb.ParseTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
    parse(request: offline_parse_pb.ParseTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
    parse(request: offline_parse_pb.ParseTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
}

export class TaskParseServiceClient extends grpc.Client implements ITaskParseServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public parse(request: offline_parse_pb.ParseTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
    public parse(request: offline_parse_pb.ParseTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
    public parse(request: offline_parse_pb.ParseTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_parse_pb.ParseTaskResponse) => void): grpc.ClientUnaryCall;
}
