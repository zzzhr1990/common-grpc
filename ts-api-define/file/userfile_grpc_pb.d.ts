// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/userfile.proto

import * as file_userfile_pb from "../file/userfile_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  get: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  page: grpc.MethodDefinition<file_userfile_pb.UserFilePageRequest, file_userfile_pb.UserFilePageResponse>;
  list: grpc.MethodDefinition<file_userfile_pb.UserFileListRequest, file_userfile_pb.UserFileListResponse>;
  createTrash: grpc.MethodDefinition<file_userfile_pb.TrashRequest, common_common_entity_pb.Int64Entity>;
  pageTrash: grpc.MethodDefinition<file_userfile_pb.CommonPageRequest, file_userfile_pb.TrashPageResponse>;
  listTrash: grpc.MethodDefinition<file_userfile_pb.CommonListRequest, file_userfile_pb.TrashListResponse>;
  getTrash: grpc.MethodDefinition<file_userfile_pb.TrashInfo, file_userfile_pb.TrashInfo>;
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
  createTrash(argument: file_userfile_pb.TrashRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  createTrash(argument: file_userfile_pb.TrashRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  createTrash(argument: file_userfile_pb.TrashRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.CommonPageRequest, callback: grpc.requestCallback<file_userfile_pb.TrashPageResponse>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.CommonPageRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashPageResponse>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.CommonPageRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashPageResponse>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.CommonListRequest, callback: grpc.requestCallback<file_userfile_pb.TrashListResponse>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.CommonListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashListResponse>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.CommonListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashListResponse>): grpc.ClientUnaryCall;
  getTrash(argument: file_userfile_pb.TrashInfo, callback: grpc.requestCallback<file_userfile_pb.TrashInfo>): grpc.ClientUnaryCall;
  getTrash(argument: file_userfile_pb.TrashInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashInfo>): grpc.ClientUnaryCall;
  getTrash(argument: file_userfile_pb.TrashInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashInfo>): grpc.ClientUnaryCall;
}
