// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: store/preview.proto

import * as store_preview_pb from "../store/preview_pb";
import * as grpc from "grpc";

interface IPreviewServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
  get: grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
  update: grpc.MethodDefinition<store_preview_pb.MediaPreview, store_preview_pb.MediaPreview>;
}

export const PreviewServiceService: IPreviewServiceService;

export class PreviewServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: store_preview_pb.MediaPreview, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  create(argument: store_preview_pb.MediaPreview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  create(argument: store_preview_pb.MediaPreview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.MediaPreview, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.MediaPreview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  get(argument: store_preview_pb.MediaPreview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.MediaPreview, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.MediaPreview, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
  update(argument: store_preview_pb.MediaPreview, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_preview_pb.MediaPreview>): grpc.ClientUnaryCall;
}
