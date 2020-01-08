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
  getDownloadAddress: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
  createWcsUploadToken: grpc.MethodDefinition<store_cloudstore_pb.UploadTokenRequest, store_cloudstore_pb.WcsUploadToken>;
  onFileUpload: grpc.MethodDefinition<store_cloudstore_pb.CloudStore, store_cloudstore_pb.CloudStore>;
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
  getDownloadAddress(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getDownloadAddress(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  getDownloadAddress(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  createWcsUploadToken(argument: store_cloudstore_pb.UploadTokenRequest, callback: grpc.requestCallback<store_cloudstore_pb.WcsUploadToken>): grpc.ClientUnaryCall;
  createWcsUploadToken(argument: store_cloudstore_pb.UploadTokenRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.WcsUploadToken>): grpc.ClientUnaryCall;
  createWcsUploadToken(argument: store_cloudstore_pb.UploadTokenRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.WcsUploadToken>): grpc.ClientUnaryCall;
  onFileUpload(argument: store_cloudstore_pb.CloudStore, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  onFileUpload(argument: store_cloudstore_pb.CloudStore, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
  onFileUpload(argument: store_cloudstore_pb.CloudStore, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_cloudstore_pb.CloudStore>): grpc.ClientUnaryCall;
}
