// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: share/share.proto

import * as share_share_pb from "../share/share_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IFileShareServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<share_share_pb.FileShare, share_share_pb.FileShare>;
  cancel: grpc.MethodDefinition<share_share_pb.FileShare, common_common_entity_pb.BoolEntity>;
  getOrEmpty: grpc.MethodDefinition<share_share_pb.FileShare, share_share_pb.FileShare>;
  save: grpc.MethodDefinition<share_share_pb.ShareSaveRequest, share_share_pb.FileShare>;
}

export const FileShareServiceService: IFileShareServiceService;

export class FileShareServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: share_share_pb.FileShare, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  create(argument: share_share_pb.FileShare, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  create(argument: share_share_pb.FileShare, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  cancel(argument: share_share_pb.FileShare, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  cancel(argument: share_share_pb.FileShare, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  cancel(argument: share_share_pb.FileShare, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  getOrEmpty(argument: share_share_pb.FileShare, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  getOrEmpty(argument: share_share_pb.FileShare, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  getOrEmpty(argument: share_share_pb.FileShare, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  save(argument: share_share_pb.ShareSaveRequest, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  save(argument: share_share_pb.ShareSaveRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
  save(argument: share_share_pb.ShareSaveRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<share_share_pb.FileShare>): grpc.ClientUnaryCall;
}
