// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: ext/video.proto

import * as ext_video_pb from "../ext/video_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IVideoExtServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<ext_video_pb.VideoExt, common_common_entity_pb.BoolEntity>;
  get: grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
  getOrEmpty: grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
  update: grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.VideoExt>;
  getPreview: grpc.MethodDefinition<ext_video_pb.VideoExt, ext_video_pb.PreviewInfo>;
}

export const VideoExtServiceService: IVideoExtServiceService;

export class VideoExtServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: ext_video_pb.VideoExt, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  create(argument: ext_video_pb.VideoExt, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  create(argument: ext_video_pb.VideoExt, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  get(argument: ext_video_pb.VideoExt, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  get(argument: ext_video_pb.VideoExt, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  get(argument: ext_video_pb.VideoExt, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  getOrEmpty(argument: ext_video_pb.VideoExt, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  getOrEmpty(argument: ext_video_pb.VideoExt, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  getOrEmpty(argument: ext_video_pb.VideoExt, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  update(argument: ext_video_pb.VideoExt, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  update(argument: ext_video_pb.VideoExt, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  update(argument: ext_video_pb.VideoExt, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.VideoExt>): grpc.ClientUnaryCall;
  getPreview(argument: ext_video_pb.VideoExt, callback: grpc.requestCallback<ext_video_pb.PreviewInfo>): grpc.ClientUnaryCall;
  getPreview(argument: ext_video_pb.VideoExt, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.PreviewInfo>): grpc.ClientUnaryCall;
  getPreview(argument: ext_video_pb.VideoExt, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<ext_video_pb.PreviewInfo>): grpc.ClientUnaryCall;
}
