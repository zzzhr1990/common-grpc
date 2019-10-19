// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/userfile.proto

import * as file_userfile_pb from "../file/userfile_pb";
import * as grpc from "grpc";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  get: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  page: grpc.MethodDefinition<file_userfile_pb.UserFilePageRequest, file_userfile_pb.UserFilePageResponse>;
  list: grpc.MethodDefinition<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse>;
}

export const FileServiceService: IFileServiceService;

export class FileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  create(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  create(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  page(argument: file_userfile_pb.UserFilePageRequest, callback: grpc.requestCallback<file_userfile_pb.UserFilePageResponse>): grpc.ClientUnaryCall;
  page(argument: file_userfile_pb.UserFilePageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePageResponse>): grpc.ClientUnaryCall;
  page(argument: file_userfile_pb.UserFilePageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePageResponse>): grpc.ClientUnaryCall;
  list(argument: file_userfile_pb.UserFileListRequest, callback: grpc.requestCallback<file_userfile_pb.UserFileListResponse>): grpc.ClientUnaryCall;
  list(argument: file_userfile_pb.UserFileListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileListResponse>): grpc.ClientUnaryCall;
  list(argument: file_userfile_pb.UserFileListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileListResponse>): grpc.ClientUnaryCall;
}
