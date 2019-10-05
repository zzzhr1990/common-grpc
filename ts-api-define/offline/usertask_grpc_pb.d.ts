// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/usertask.proto

import * as offline_usertask_pb from "../offline/usertask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IOfflineUserTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  add: grpc.MethodDefinition<offline_usertask_pb.AddUserOfflineTaskRequest, offline_usertask_pb.UserOfflineTaskResponse>;
  page: grpc.MethodDefinition<offline_usertask_pb.PageUserOfflineTaskRequest, offline_usertask_pb.UserOfflineTaskPage>;
  list: grpc.MethodDefinition<offline_usertask_pb.ListUserOfflineTaskRequest, offline_usertask_pb.UserOfflineTaskList>;
  delete: grpc.MethodDefinition<offline_usertask_pb.DeleteTasksRequest, common_common_entity_pb.Int64Entity>;
}

export const OfflineUserTaskServiceService: IOfflineUserTaskServiceService;

export class OfflineUserTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  add(argument: offline_usertask_pb.AddUserOfflineTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskResponse>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserOfflineTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskResponse>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserOfflineTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskResponse>): grpc.ClientUnaryCall;
  page(argument: offline_usertask_pb.PageUserOfflineTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskPage>): grpc.ClientUnaryCall;
  page(argument: offline_usertask_pb.PageUserOfflineTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskPage>): grpc.ClientUnaryCall;
  page(argument: offline_usertask_pb.PageUserOfflineTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskPage>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserOfflineTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserOfflineTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserOfflineTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserOfflineTaskList>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteTasksRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteTasksRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteTasksRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
}
