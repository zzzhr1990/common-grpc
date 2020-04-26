// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/system.proto

import * as offline_system_pb from "../offline/system_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface ISystemTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
  update: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
  get: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
  getList: grpc.MethodDefinition<common_common_entity_pb.StringEntity, offline_system_pb.SystemTaskList>;
  getDetail: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTaskDetail>;
  fetch: grpc.MethodDefinition<offline_system_pb.SystemTaskFetchRequest, offline_system_pb.SystemTaskList>;
  uploadFile: grpc.MethodDefinition<offline_system_pb.TaskFile, offline_system_pb.TaskFile>;
  updateFile: grpc.MethodDefinition<offline_system_pb.TaskFile, offline_system_pb.TaskFile>;
  complete: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
  error: grpc.MethodDefinition<offline_system_pb.SystemTask, offline_system_pb.SystemTask>;
}

export const SystemTaskServiceService: ISystemTaskServiceService;

export class SystemTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  create(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  create(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  getList(argument: common_common_entity_pb.StringEntity, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  getList(argument: common_common_entity_pb.StringEntity, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  getList(argument: common_common_entity_pb.StringEntity, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTaskDetail>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskDetail>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskDetail>): grpc.ClientUnaryCall;
  fetch(argument: offline_system_pb.SystemTaskFetchRequest, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  fetch(argument: offline_system_pb.SystemTaskFetchRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  fetch(argument: offline_system_pb.SystemTaskFetchRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTaskList>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.TaskFile, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.TaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.TaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.TaskFile, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.TaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.TaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.TaskFile>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.SystemTask, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.SystemTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.SystemTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemTask>): grpc.ClientUnaryCall;
}
