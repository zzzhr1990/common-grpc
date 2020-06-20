// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/filetask.proto

import * as file_filetask_pb from "../file/filetask_pb";
import * as grpc from "grpc";

interface IFileTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_filetask_pb.FileTask, file_filetask_pb.FileTask>;
  list: grpc.MethodDefinition<file_filetask_pb.FileTask, file_filetask_pb.FileTaskListResponse>;
}

export const FileTaskServiceService: IFileTaskServiceService;

export class FileTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: file_filetask_pb.FileTask, callback: grpc.requestCallback<file_filetask_pb.FileTask>): grpc.ClientUnaryCall;
  create(argument: file_filetask_pb.FileTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filetask_pb.FileTask>): grpc.ClientUnaryCall;
  create(argument: file_filetask_pb.FileTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filetask_pb.FileTask>): grpc.ClientUnaryCall;
  list(argument: file_filetask_pb.FileTask, callback: grpc.requestCallback<file_filetask_pb.FileTaskListResponse>): grpc.ClientUnaryCall;
  list(argument: file_filetask_pb.FileTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filetask_pb.FileTaskListResponse>): grpc.ClientUnaryCall;
  list(argument: file_filetask_pb.FileTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filetask_pb.FileTaskListResponse>): grpc.ClientUnaryCall;
}
