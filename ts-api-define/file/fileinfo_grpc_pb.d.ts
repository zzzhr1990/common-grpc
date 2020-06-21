// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/fileinfo.proto

import * as file_fileinfo_pb from "../file/fileinfo_pb";
import * as grpc from "grpc";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_fileinfo_pb.FileInfo, file_fileinfo_pb.FileInfo>;
  createInternal: grpc.MethodDefinition<file_fileinfo_pb.FileInfo, file_fileinfo_pb.FileInfo>;
  list: grpc.MethodDefinition<file_fileinfo_pb.FileInfoListRequest, file_fileinfo_pb.FileInfoListResponse>;
  listInternal: grpc.MethodDefinition<file_fileinfo_pb.FileInfoListRequest, file_fileinfo_pb.FileInfoListResponse>;
  rename: grpc.MethodDefinition<file_fileinfo_pb.FileInfo, file_fileinfo_pb.FileInfo>;
}

export const FileServiceService: IFileServiceService;

export class FileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: file_fileinfo_pb.FileInfo, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  create(argument: file_fileinfo_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  create(argument: file_fileinfo_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_fileinfo_pb.FileInfo, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_fileinfo_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  createInternal(argument: file_fileinfo_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  list(argument: file_fileinfo_pb.FileInfoListRequest, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  list(argument: file_fileinfo_pb.FileInfoListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  list(argument: file_fileinfo_pb.FileInfoListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_fileinfo_pb.FileInfoListRequest, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_fileinfo_pb.FileInfoListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  listInternal(argument: file_fileinfo_pb.FileInfoListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfoListResponse>): grpc.ClientUnaryCall;
  rename(argument: file_fileinfo_pb.FileInfo, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  rename(argument: file_fileinfo_pb.FileInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
  rename(argument: file_fileinfo_pb.FileInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_fileinfo_pb.FileInfo>): grpc.ClientUnaryCall;
}
