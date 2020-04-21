// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/parse.proto

import * as offline_parse_pb from "../offline/parse_pb";
import * as grpc from "grpc";

interface ITaskParseServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  parse: grpc.MethodDefinition<offline_parse_pb.ParseTaskRequest, offline_parse_pb.ParseTaskResponse>;
}

export const TaskParseServiceService: ITaskParseServiceService;

export class TaskParseServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  parse(argument: offline_parse_pb.ParseTaskRequest, callback: grpc.requestCallback<offline_parse_pb.ParseTaskResponse>): grpc.ClientUnaryCall;
  parse(argument: offline_parse_pb.ParseTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_parse_pb.ParseTaskResponse>): grpc.ClientUnaryCall;
  parse(argument: offline_parse_pb.ParseTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_parse_pb.ParseTaskResponse>): grpc.ClientUnaryCall;
}
