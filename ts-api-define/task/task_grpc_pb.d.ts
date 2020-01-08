// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: task/task.proto

import * as task_task_pb from "../task/task_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface ISimpleTaskCenterServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
  fetch: grpc.MethodDefinition<task_task_pb.FetchRequest, task_task_pb.FetchResponse>;
  complete: grpc.MethodDefinition<task_task_pb.SimpleTask, common_common_entity_pb.BoolEntity>;
  update: grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
  error: grpc.MethodDefinition<task_task_pb.ErrorTask, task_task_pb.ErrorTask>;
  get: grpc.MethodDefinition<task_task_pb.SimpleTask, task_task_pb.SimpleTask>;
  reset: grpc.MethodDefinition<task_task_pb.ErrorTask, task_task_pb.SimpleTask>;
}

export const SimpleTaskCenterServiceService: ISimpleTaskCenterServiceService;

export class SimpleTaskCenterServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: task_task_pb.SimpleTask, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  create(argument: task_task_pb.SimpleTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  create(argument: task_task_pb.SimpleTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  fetch(argument: task_task_pb.FetchRequest, callback: grpc.requestCallback<task_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  fetch(argument: task_task_pb.FetchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  fetch(argument: task_task_pb.FetchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.FetchResponse>): grpc.ClientUnaryCall;
  complete(argument: task_task_pb.SimpleTask, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: task_task_pb.SimpleTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: task_task_pb.SimpleTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  update(argument: task_task_pb.SimpleTask, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  update(argument: task_task_pb.SimpleTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  update(argument: task_task_pb.SimpleTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  error(argument: task_task_pb.ErrorTask, callback: grpc.requestCallback<task_task_pb.ErrorTask>): grpc.ClientUnaryCall;
  error(argument: task_task_pb.ErrorTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.ErrorTask>): grpc.ClientUnaryCall;
  error(argument: task_task_pb.ErrorTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.ErrorTask>): grpc.ClientUnaryCall;
  get(argument: task_task_pb.SimpleTask, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  get(argument: task_task_pb.SimpleTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  get(argument: task_task_pb.SimpleTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  reset(argument: task_task_pb.ErrorTask, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  reset(argument: task_task_pb.ErrorTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
  reset(argument: task_task_pb.ErrorTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<task_task_pb.SimpleTask>): grpc.ClientUnaryCall;
}
