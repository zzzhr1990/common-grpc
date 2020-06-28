// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/filesystem.proto

import * as file_filesystem_pb from "../file/filesystem_pb";
import * as grpc from "grpc";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
  createInternal: grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
  list: grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
  listInternal: grpc.MethodDefinition<file_filesystem_pb.FileInfoListRequest, file_filesystem_pb.FileInfoListResponse>;
  trash: grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
  delete: grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
  rename: grpc.MethodDefinition<file_filesystem_pb.FileInfo, file_filesystem_pb.FileInfo>;
}

export const FileServiceService: IFileServiceService;

export class FileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: file_filesystem_pb.FileInfo, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  create(argument: file_filesystem_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  create(argument: file_filesystem_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_filesystem_pb.FileInfo, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_filesystem_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_filesystem_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  list(argument: file_filesystem_pb.FileInfoListRequest, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  list(argument: file_filesystem_pb.FileInfoListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  list(argument: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_filesystem_pb.FileInfoListRequest, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_filesystem_pb.FileInfoListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_filesystem_pb.FileInfoListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  trash(argument: file_filesystem_pb.FileInfo, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  trash(argument: file_filesystem_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  trash(argument: file_filesystem_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  delete(argument: file_filesystem_pb.FileInfo, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  delete(argument: file_filesystem_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  delete(argument: file_filesystem_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  rename(argument: file_filesystem_pb.FileInfo, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  rename(argument: file_filesystem_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
  rename(argument: file_filesystem_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_filesystem_pb.FileInfo>): grpc.ClientUnaryCall;
}
