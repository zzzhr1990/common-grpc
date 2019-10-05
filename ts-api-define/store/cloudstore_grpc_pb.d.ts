// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: store/cloudstore.proto

import * as store_cloudstore_pb from "../store/cloudstore_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface ICloudStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  tryCreate: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  get: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  change: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  getOrEmpty: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  getInnerDownloadAddress: grpc.MethodDefinition<common_common_entity_pb.StringEntity, common_common_entity_pb.StringEntity>;
}

export const CloudStoreServiceService: ICloudStoreServiceService;

export class CloudStoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  create(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  create(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  tryCreate(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  tryCreate(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  tryCreate(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  change(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  change(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  change(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getOrEmpty(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getOrEmpty(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getOrEmpty(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getInnerDownloadAddress(argument: common_common_entity_pb.StringEntity, callback: grpc.requestCallback<common_common_entity_pb.StringEntity>): grpc.ClientUnaryCall;
  getInnerDownloadAddress(argument: common_common_entity_pb.StringEntity, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.StringEntity>): grpc.ClientUnaryCall;
  getInnerDownloadAddress(argument: common_common_entity_pb.StringEntity, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.StringEntity>): grpc.ClientUnaryCall;
}
