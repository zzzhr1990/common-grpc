// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/usertask.proto

import * as offline_usertask_pb from "../offline/usertask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IUserTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  add: grpc.MethodDefinition<offline_usertask_pb.AddUserTaskRequest, offline_usertask_pb.UserTaskList>;
  list: grpc.MethodDefinition<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList>;
  delete: grpc.MethodDefinition<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity>;
  get: grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
  complete: grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
  error: grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
  syncTask: grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
  getListeners: grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListenerList>;
  updateListener: grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
  deleteListeners: grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
  fakeCopy: grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
  clear: grpc.MethodDefinition<offline_usertask_pb.ClearTaskRequest, common_common_entity_pb.Int64Entity>;
}

export const UserTaskServiceService: IUserTaskServiceService;

export class UserTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  add(argument: offline_usertask_pb.AddUserTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  add(argument: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  list(argument: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTaskList>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  delete(argument: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  get(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  complete(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  complete(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  complete(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  error(argument: offline_usertask_pb.UserTask, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  error(argument: offline_usertask_pb.UserTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  error(argument: offline_usertask_pb.UserTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.UserTask>): grpc.ClientUnaryCall;
  syncTask(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  syncTask(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  syncTask(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<offline_usertask_pb.TaskListenerList>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListenerList>): grpc.ClientUnaryCall;
  getListeners(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListenerList>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  updateListener(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteListeners(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  fakeCopy(argument: offline_usertask_pb.TaskListener, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  fakeCopy(argument: offline_usertask_pb.TaskListener, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  fakeCopy(argument: offline_usertask_pb.TaskListener, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_usertask_pb.TaskListener>): grpc.ClientUnaryCall;
  clear(argument: offline_usertask_pb.ClearTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  clear(argument: offline_usertask_pb.ClearTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  clear(argument: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
}
