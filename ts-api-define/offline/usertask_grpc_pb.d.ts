// package: services
// file: offline/usertask.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as offline_usertask_pb from "../offline/usertask_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface IUserTaskServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    add: IUserTaskServiceService_Iadd;
    list: IUserTaskServiceService_Ilist;
    delete: IUserTaskServiceService_Idelete;
    get: IUserTaskServiceService_Iget;
    completeOrError: IUserTaskServiceService_IcompleteOrError;
    update: IUserTaskServiceService_Iupdate;
    getListeners: IUserTaskServiceService_IgetListeners;
    updateListener: IUserTaskServiceService_IupdateListener;
    deleteCompleteListener: IUserTaskServiceService_IdeleteCompleteListener;
    deleteFakeCopyListener: IUserTaskServiceService_IdeleteFakeCopyListener;
    deleteAllListener: IUserTaskServiceService_IdeleteAllListener;
    clear: IUserTaskServiceService_Iclear;
    updateLog: IUserTaskServiceService_IupdateLog;
    getLog: IUserTaskServiceService_IgetLog;
    deleteLog: IUserTaskServiceService_IdeleteLog;
    clearLog: IUserTaskServiceService_IclearLog;
    listLog: IUserTaskServiceService_IlistLog;
    clearOutdatedLog: IUserTaskServiceService_IclearOutdatedLog;
}

interface IUserTaskServiceService_Iadd extends grpc.MethodDefinition<offline_usertask_pb.AddUserTaskRequest, offline_usertask_pb.UserTaskList> {
    path: "/services.UserTaskService/add";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.AddUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.AddUserTaskRequest>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTaskList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTaskList>;
}
interface IUserTaskServiceService_Ilist extends grpc.MethodDefinition<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList> {
    path: "/services.UserTaskService/list";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.ListUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.ListUserTaskRequest>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTaskList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTaskList>;
}
interface IUserTaskServiceService_Idelete extends grpc.MethodDefinition<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/delete";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.DeleteUserTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.DeleteUserTaskRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_Iget extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: "/services.UserTaskService/get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_IcompleteOrError extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: "/services.UserTaskService/completeOrError";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_Iupdate extends grpc.MethodDefinition<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask> {
    path: "/services.UserTaskService/update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
    responseSerialize: grpc.serialize<offline_usertask_pb.UserTask>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.UserTask>;
}
interface IUserTaskServiceService_IgetListeners extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListenerList> {
    path: "/services.UserTaskService/getListeners";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskListenerList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskListenerList>;
}
interface IUserTaskServiceService_IupdateListener extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener> {
    path: "/services.UserTaskService/updateListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
}
interface IUserTaskServiceService_IdeleteCompleteListener extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/deleteCompleteListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IdeleteFakeCopyListener extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/deleteFakeCopyListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IdeleteAllListener extends grpc.MethodDefinition<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/deleteAllListener";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskListener>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskListener>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_Iclear extends grpc.MethodDefinition<offline_usertask_pb.ClearTaskRequest, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/clear";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.ClearTaskRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.ClearTaskRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IupdateLog extends grpc.MethodDefinition<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog> {
    path: "/services.UserTaskService/updateLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
}
interface IUserTaskServiceService_IgetLog extends grpc.MethodDefinition<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog> {
    path: "/services.UserTaskService/getLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
}
interface IUserTaskServiceService_IdeleteLog extends grpc.MethodDefinition<offline_usertask_pb.DeleteTaskLogRequest, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/deleteLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.DeleteTaskLogRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.DeleteTaskLogRequest>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}
interface IUserTaskServiceService_IclearLog extends grpc.MethodDefinition<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog> {
    path: "/services.UserTaskService/clearLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
}
interface IUserTaskServiceService_IlistLog extends grpc.MethodDefinition<offline_usertask_pb.ListTaskLogRequest, offline_usertask_pb.TaskLogList> {
    path: "/services.UserTaskService/listLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.ListTaskLogRequest>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.ListTaskLogRequest>;
    responseSerialize: grpc.serialize<offline_usertask_pb.TaskLogList>;
    responseDeserialize: grpc.deserialize<offline_usertask_pb.TaskLogList>;
}
interface IUserTaskServiceService_IclearOutdatedLog extends grpc.MethodDefinition<offline_usertask_pb.TaskLog, common_common_entity_pb.Int64Entity> {
    path: "/services.UserTaskService/clearOutdatedLog";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<offline_usertask_pb.TaskLog>;
    requestDeserialize: grpc.deserialize<offline_usertask_pb.TaskLog>;
    responseSerialize: grpc.serialize<common_common_entity_pb.Int64Entity>;
    responseDeserialize: grpc.deserialize<common_common_entity_pb.Int64Entity>;
}

export const UserTaskServiceService: IUserTaskServiceService;

export interface IUserTaskServiceServer {
    add: grpc.handleUnaryCall<offline_usertask_pb.AddUserTaskRequest, offline_usertask_pb.UserTaskList>;
    list: grpc.handleUnaryCall<offline_usertask_pb.ListUserTaskRequest, offline_usertask_pb.UserTaskList>;
    delete: grpc.handleUnaryCall<offline_usertask_pb.DeleteUserTaskRequest, common_common_entity_pb.Int64Entity>;
    get: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    completeOrError: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    update: grpc.handleUnaryCall<offline_usertask_pb.UserTask, offline_usertask_pb.UserTask>;
    getListeners: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListenerList>;
    updateListener: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, offline_usertask_pb.TaskListener>;
    deleteCompleteListener: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
    deleteFakeCopyListener: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
    deleteAllListener: grpc.handleUnaryCall<offline_usertask_pb.TaskListener, common_common_entity_pb.Int64Entity>;
    clear: grpc.handleUnaryCall<offline_usertask_pb.ClearTaskRequest, common_common_entity_pb.Int64Entity>;
    updateLog: grpc.handleUnaryCall<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog>;
    getLog: grpc.handleUnaryCall<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog>;
    deleteLog: grpc.handleUnaryCall<offline_usertask_pb.DeleteTaskLogRequest, common_common_entity_pb.Int64Entity>;
    clearLog: grpc.handleUnaryCall<offline_usertask_pb.TaskLog, offline_usertask_pb.TaskLog>;
    listLog: grpc.handleUnaryCall<offline_usertask_pb.ListTaskLogRequest, offline_usertask_pb.TaskLogList>;
    clearOutdatedLog: grpc.handleUnaryCall<offline_usertask_pb.TaskLog, common_common_entity_pb.Int64Entity>;
}

export interface IUserTaskServiceClient {
    add(request: offline_usertask_pb.AddUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    completeOrError(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    completeOrError(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    completeOrError(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    update(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    update(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    update(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    deleteCompleteListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteCompleteListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteCompleteListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteAllListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteAllListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteAllListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    updateLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    updateLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    updateLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    getLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    getLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    getLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clearLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    clearLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    clearLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    listLog(request: offline_usertask_pb.ListTaskLogRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    listLog(request: offline_usertask_pb.ListTaskLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    listLog(request: offline_usertask_pb.ListTaskLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    clearOutdatedLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clearOutdatedLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    clearOutdatedLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}

export class UserTaskServiceClient extends grpc.Client implements IUserTaskServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public add(request: offline_usertask_pb.AddUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public add(request: offline_usertask_pb.AddUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public list(request: offline_usertask_pb.ListUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTaskList) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public delete(request: offline_usertask_pb.DeleteUserTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public get(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public completeOrError(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public completeOrError(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public completeOrError(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_usertask_pb.UserTask, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public update(request: offline_usertask_pb.UserTask, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.UserTask) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public getListeners(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListenerList) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public updateListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskListener) => void): grpc.ClientUnaryCall;
    public deleteCompleteListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteCompleteListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteCompleteListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteFakeCopyListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteAllListener(request: offline_usertask_pb.TaskListener, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteAllListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteAllListener(request: offline_usertask_pb.TaskListener, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clear(request: offline_usertask_pb.ClearTaskRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public updateLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public updateLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public updateLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public getLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public getLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public getLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public deleteLog(request: offline_usertask_pb.DeleteTaskLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clearLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public clearLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public clearLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLog) => void): grpc.ClientUnaryCall;
    public listLog(request: offline_usertask_pb.ListTaskLogRequest, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    public listLog(request: offline_usertask_pb.ListTaskLogRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    public listLog(request: offline_usertask_pb.ListTaskLogRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: offline_usertask_pb.TaskLogList) => void): grpc.ClientUnaryCall;
    public clearOutdatedLog(request: offline_usertask_pb.TaskLog, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clearOutdatedLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
    public clearOutdatedLog(request: offline_usertask_pb.TaskLog, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: common_common_entity_pb.Int64Entity) => void): grpc.ClientUnaryCall;
}
