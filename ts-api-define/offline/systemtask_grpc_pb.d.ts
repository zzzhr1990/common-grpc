// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/systemtask.proto

import * as offline_systemtask_pb from "../offline/systemtask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface ISystemOfflineTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTask, offline_systemtask_pb.SystemOfflineTask>;
  update: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTaskMeta, common_common_entity_pb.Int64Entity>;
  updateProgress: grpc.MethodDefinition<offline_systemtask_pb.UpdateProgressRequest, common_common_entity_pb.BoolEntity>;
  batchGet: grpc.MethodDefinition<offline_systemtask_pb.BatchGetRequest, offline_systemtask_pb.BatchGetResponse>;
  get: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTask, offline_systemtask_pb.SystemOfflineTask>;
  updateFile: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTaskFile, common_common_entity_pb.BoolEntity>;
  uploadFile: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTaskFile, common_common_entity_pb.BoolEntity>;
  changeStatus: grpc.MethodDefinition<offline_systemtask_pb.StatusChangeRequest, common_common_entity_pb.BoolEntity>;
  getFiles: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTask, offline_systemtask_pb.SystemOfflineTaskFiles>;
  complete: grpc.MethodDefinition<offline_systemtask_pb.SystemOfflineTask, common_common_entity_pb.BoolEntity>;
  error: grpc.MethodDefinition<offline_systemtask_pb.ErrorRequest, common_common_entity_pb.BoolEntity>;
}

export const SystemOfflineTaskServiceService: ISystemOfflineTaskServiceService;

export class SystemOfflineTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: offline_systemtask_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  create(argument: offline_systemtask_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  create(argument: offline_systemtask_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  update(argument: offline_systemtask_pb.SystemOfflineTaskMeta, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  update(argument: offline_systemtask_pb.SystemOfflineTaskMeta, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  update(argument: offline_systemtask_pb.SystemOfflineTaskMeta, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_systemtask_pb.UpdateProgressRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_systemtask_pb.UpdateProgressRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_systemtask_pb.UpdateProgressRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  batchGet(argument: offline_systemtask_pb.BatchGetRequest, callback: grpc.requestCallback<offline_systemtask_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  batchGet(argument: offline_systemtask_pb.BatchGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  batchGet(argument: offline_systemtask_pb.BatchGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  get(argument: offline_systemtask_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  get(argument: offline_systemtask_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  get(argument: offline_systemtask_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  updateFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_systemtask_pb.SystemOfflineTaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_systemtask_pb.StatusChangeRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_systemtask_pb.StatusChangeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_systemtask_pb.StatusChangeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  getFiles(argument: offline_systemtask_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTaskFiles>): grpc.ClientUnaryCall;
  getFiles(argument: offline_systemtask_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTaskFiles>): grpc.ClientUnaryCall;
  getFiles(argument: offline_systemtask_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_systemtask_pb.SystemOfflineTaskFiles>): grpc.ClientUnaryCall;
  complete(argument: offline_systemtask_pb.SystemOfflineTask, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: offline_systemtask_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: offline_systemtask_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_systemtask_pb.ErrorRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_systemtask_pb.ErrorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_systemtask_pb.ErrorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
}
