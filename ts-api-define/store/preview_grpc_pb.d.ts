// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: store/preview.proto

import * as store_preview_pb from "../store/preview_pb";
import * as grpc from "grpc";

interface IPreviewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<store_preview_pb.Preview, store_preview_pb.Preview>;
  get: grpc.MethodDefinition<store_preview_pb.Preview, store_preview_pb.Preview>;
  update: grpc.MethodDefinition<store_preview_pb.Preview, store_preview_pb.Preview>;
  batchGet: grpc.MethodDefinition<store_preview_pb.Preview, store_preview_pb.Preview>;
  getPreviewAddress: grpc.MethodDefinition<store_preview_pb.Preview, store_preview_pb.Preview>;
}

export const PreviewServiceService: IPreviewServiceService;

export class PreviewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: store_preview_pb.Preview, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  create(argument: store_preview_pb.Preview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  create(argument: store_preview_pb.Preview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.Preview, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.Preview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.Preview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.Preview, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.Preview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.Preview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  batchGet(argument: store_preview_pb.Preview, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  batchGet(argument: store_preview_pb.Preview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  batchGet(argument: store_preview_pb.Preview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  getPreviewAddress(argument: store_preview_pb.Preview, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  getPreviewAddress(argument: store_preview_pb.Preview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
  getPreviewAddress(argument: store_preview_pb.Preview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.Preview>): grpc.ClientUnaryCall;
}
