// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: system/system.proto

import * as system_system_pb from "../system/system_pb";
import * as grpc from "grpc";

interface ISystemInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  info: grpc.MethodDefinition<system_system_pb.ClientInfo, system_system_pb.SystemInfo>;
}

export const SystemInfoServiceService: ISystemInfoServiceService;

export class SystemInfoServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  info(argument: system_system_pb.ClientInfo, callback: grpc.requestCallback<system_system_pb.SystemInfo>): grpc.ClientUnaryCall;
  info(argument: system_system_pb.ClientInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<system_system_pb.SystemInfo>): grpc.ClientUnaryCall;
  info(argument: system_system_pb.ClientInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<system_system_pb.SystemInfo>): grpc.ClientUnaryCall;
}
