// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: store/subtitle.proto

import * as store_subtitle_pb from "../store/subtitle_pb";
import * as grpc from "grpc";

interface ISubtitleServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
  get: grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
  getList: grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.SubtitleListResponse>;
  update: grpc.MethodDefinition<store_subtitle_pb.Subtitle, store_subtitle_pb.Subtitle>;
}

export const SubtitleServiceService: ISubtitleServiceService;

export class SubtitleServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: store_subtitle_pb.Subtitle, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  create(argument: store_subtitle_pb.Subtitle, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  create(argument: store_subtitle_pb.Subtitle, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  get(argument: store_subtitle_pb.Subtitle, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  get(argument: store_subtitle_pb.Subtitle, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  get(argument: store_subtitle_pb.Subtitle, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  getList(argument: store_subtitle_pb.Subtitle, callback: grpc.requestCallback<store_subtitle_pb.SubtitleListResponse>): grpc.ClientUnaryCall;
  getList(argument: store_subtitle_pb.Subtitle, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.SubtitleListResponse>): grpc.ClientUnaryCall;
  getList(argument: store_subtitle_pb.Subtitle, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.SubtitleListResponse>): grpc.ClientUnaryCall;
  update(argument: store_subtitle_pb.Subtitle, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  update(argument: store_subtitle_pb.Subtitle, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
  update(argument: store_subtitle_pb.Subtitle, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<store_subtitle_pb.Subtitle>): grpc.ClientUnaryCall;
}
