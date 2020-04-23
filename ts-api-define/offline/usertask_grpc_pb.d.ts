// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/usertask.proto

import * as offline_usertask_pb from "../offline/usertask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IUserTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  add: grpc.MethodDefinition<offline_usertask_pb.AddUserTaskRequest, common_common_entity_pb.Int64Entity>;
  list: grpc.MethodDefinition<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList>;
  delete: grpc.MethodDefinition<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity>;
  get: grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
  getListeners: grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTaskList>;
  updateListener: grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
  deleteListeners: grpc.MethodDefinition<offline_usertask_pb.UserTask, common_common_entity_pb.Int64Entity>;
}

export const UserTaskServiceService: IUserTaskServiceService;

export class UserTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  add(argument: offline_usertask_pb.AddUserTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
}
