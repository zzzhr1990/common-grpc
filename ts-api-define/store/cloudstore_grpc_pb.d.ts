// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: store/cloudstore.proto

import * as store_cloudstore_pb from "../store/cloudstore_pb";
import * as grpc from "grpc";

interface ICloudStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  get: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  update: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  batchGet: grpc.MethodDefinition<store_cloudstore_pb.CloudStoreList, store_cloudstore_pb.CloudStoreList>;
}

export const CloudStoreServiceService: ICloudStoreServiceService;

export class CloudStoreServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  create(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  create(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  get(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  update(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  update(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  update(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  batchGet(argument: store_cloudstore_pb.CloudStoreList, callback: grpc.requestCallback<store_cloudstore_pb.CloudStoreList>): grpc.ClientUnaryCall;
  batchGet(argument: store_cloudstore_pb.CloudStoreList, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStoreList>): grpc.ClientUnaryCall;
  batchGet(argument: store_cloudstore_pb.CloudStoreList, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStoreList>): grpc.ClientUnaryCall;
}
