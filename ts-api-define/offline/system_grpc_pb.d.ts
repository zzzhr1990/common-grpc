// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: offline/system.proto

import * as offline_system_pb from "../offline/system_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface ISystemOfflineTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<offline_system_pb.SystemOfflineTask, offline_system_pb.SystemOfflineTask>;
  update: grpc.MethodDefinition<offline_system_pb.SystemOfflineTaskDetail, common_common_entity_pb.Int64Entity>;
  updateProgress: grpc.MethodDefinition<offline_system_pb.UpdateProgressRequest, common_common_entity_pb.BoolEntity>;
  batchGet: grpc.MethodDefinition<offline_system_pb.BatchGetRequest, offline_system_pb.BatchGetResponse>;
  get: grpc.MethodDefinition<offline_system_pb.SystemOfflineTask, offline_system_pb.SystemOfflineTask>;
  getDetail: grpc.MethodDefinition<offline_system_pb.SystemOfflineTask, offline_system_pb.SystemOfflineTaskDetail>;
  updateFile: grpc.MethodDefinition<offline_system_pb.SystemOfflineTaskFile, common_common_entity_pb.BoolEntity>;
  uploadFile: grpc.MethodDefinition<offline_system_pb.SystemOfflineTaskFile, common_common_entity_pb.BoolEntity>;
  changeStatus: grpc.MethodDefinition<offline_system_pb.StatusChangeRequest, common_common_entity_pb.BoolEntity>;
  complete: grpc.MethodDefinition<offline_system_pb.SystemOfflineTask, common_common_entity_pb.BoolEntity>;
  error: grpc.MethodDefinition<offline_system_pb.ErrorRequest, common_common_entity_pb.BoolEntity>;
}

export const SystemOfflineTaskServiceService: ISystemOfflineTaskServiceService;

export class SystemOfflineTaskServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: offline_system_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  create(argument: offline_system_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  create(argument: offline_system_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemOfflineTaskDetail, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemOfflineTaskDetail, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  update(argument: offline_system_pb.SystemOfflineTaskDetail, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_system_pb.UpdateProgressRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_system_pb.UpdateProgressRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateProgress(argument: offline_system_pb.UpdateProgressRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  batchGet(argument: offline_system_pb.BatchGetRequest, callback: grpc.requestCallback<offline_system_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  batchGet(argument: offline_system_pb.BatchGetRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  batchGet(argument: offline_system_pb.BatchGetRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.BatchGetResponse>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  get(argument: offline_system_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTask>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemOfflineTask, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTaskDetail>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTaskDetail>): grpc.ClientUnaryCall;
  getDetail(argument: offline_system_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<offline_system_pb.SystemOfflineTaskDetail>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.SystemOfflineTaskFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.SystemOfflineTaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  updateFile(argument: offline_system_pb.SystemOfflineTaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.SystemOfflineTaskFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.SystemOfflineTaskFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  uploadFile(argument: offline_system_pb.SystemOfflineTaskFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_system_pb.StatusChangeRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_system_pb.StatusChangeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeStatus(argument: offline_system_pb.StatusChangeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemOfflineTask, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemOfflineTask, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  complete(argument: offline_system_pb.SystemOfflineTask, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.ErrorRequest, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.ErrorRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  error(argument: offline_system_pb.ErrorRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
}
