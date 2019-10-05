// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: remotetask/task.proto

import * as remotetask_task_pb from "../remotetask/task_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IRemoteTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<remotetask_task_pb.RemoteTask, remotetask_task_pb.RemoteTask>;
  fetch: grpc.MethodDefinition<remotetask_task_pb.FetchRequest, remotetask_task_pb.FetchResponse>;
  delete: grpc.MethodDefinition<remotetask_task_pb.SimpleRemoteTaskRequest, common_common_entity_pb.BoolEntity>;
  complete: grpc.MethodDefinition<remotetask_task_pb.SimpleRemoteTaskRequest, common_common_entity_pb.BoolEntity>;
  update: grpc.MethodDefinition<remotetask_task_pb.RemoteTask, common_common_entity_pb.BoolEntity>;
  error: grpc.MethodDefinition<remotetask_task_pb.RemoteTaskErrorRequest, common_common_entity_pb.BoolEntity>;
  list: grpc.MethodDefinition<remotetask_task_pb.ListRequest, remotetask_task_pb.FetchResponse>;
  get: grpc.MethodDefinition<remotetask_task_pb.RemoteTask, remotetask_task_pb.RemoteTask>;
  reset: grpc.MethodDefinition<remotetask_task_pb.RemoteTask, common_common_entity_pb.BoolEntity>;
  createCallLater: grpc.MethodDefinition<remotetask_task_pb.CallLater, remotetask_task_pb.CallLater>;
  fetchCallLater: grpc.MethodDefinition<remotetask_task_pb.FetchRequest, remotetask_task_pb.FetchCallLaterResponse>;
  completeCallLater: grpc.MethodDefinition<remotetask_task_pb.CallLater, common_common_entity_pb.BoolEntity>;
  errorCallLater: grpc.MethodDefinition<remotetask_task_pb.CallLaterErrorRequest, common_common_entity_pb.BoolEntity>;
}

export const RemoteTaskServiceService: IRemoteTaskServiceService;

export class RemoteTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: remotetask_task_pb.RemoteTask, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  create(argument: remotetask_task_pb.RemoteTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  create(argument: remotetask_task_pb.RemoteTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  fetch(argument: remotetask_task_pb.FetchRequest, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  fetch(argument: remotetask_task_pb.FetchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  fetch(argument: remotetask_task_pb.FetchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  delete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  delete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  delete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: remotetask_task_pb.SimpleRemoteTaskRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  update(argument: remotetask_task_pb.RemoteTask, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  update(argument: remotetask_task_pb.RemoteTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  update(argument: remotetask_task_pb.RemoteTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: remotetask_task_pb.RemoteTaskErrorRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: remotetask_task_pb.RemoteTaskErrorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: remotetask_task_pb.RemoteTaskErrorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  list(argument: remotetask_task_pb.ListRequest, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  list(argument: remotetask_task_pb.ListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  list(argument: remotetask_task_pb.ListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  get(argument: remotetask_task_pb.RemoteTask, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  get(argument: remotetask_task_pb.RemoteTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  get(argument: remotetask_task_pb.RemoteTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.RemoteTask>): grpc.ClientUnaryCall;
  reset(argument: remotetask_task_pb.RemoteTask, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  reset(argument: remotetask_task_pb.RemoteTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  reset(argument: remotetask_task_pb.RemoteTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  createCallLater(argument: remotetask_task_pb.CallLater, callback: grpc.requestCallback<remotetask_task_pb.CallLater>): grpc.ClientUnaryCall;
  createCallLater(argument: remotetask_task_pb.CallLater, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.CallLater>): grpc.ClientUnaryCall;
  createCallLater(argument: remotetask_task_pb.CallLater, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.CallLater>): grpc.ClientUnaryCall;
  fetchCallLater(argument: remotetask_task_pb.FetchRequest, callback: grpc.requestCallback<remotetask_task_pb.FetchCallLaterResponse>): grpc.ClientUnaryCall;
  fetchCallLater(argument: remotetask_task_pb.FetchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchCallLaterResponse>): grpc.ClientUnaryCall;
  fetchCallLater(argument: remotetask_task_pb.FetchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<remotetask_task_pb.FetchCallLaterResponse>): grpc.ClientUnaryCall;
  completeCallLater(argument: remotetask_task_pb.CallLater, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  completeCallLater(argument: remotetask_task_pb.CallLater, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  completeCallLater(argument: remotetask_task_pb.CallLater, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  errorCallLater(argument: remotetask_task_pb.CallLaterErrorRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  errorCallLater(argument: remotetask_task_pb.CallLaterErrorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  errorCallLater(argument: remotetask_task_pb.CallLaterErrorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
}
