// package: services
// file: offline/usertask.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class AddUserTaskRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): AddUserTaskRequest;

    clearDataList(): void;
    getDataList(): Array<UserTask>;
    setDataList(value: Array<UserTask>): AddUserTaskRequest;
    addData(value?: UserTask, index?: number): UserTask;

    getSavePath(): string;
    setSavePath(value: string): AddUserTaskRequest;

    getSaveIdentity(): string;
    setSaveIdentity(value: string): AddUserTaskRequest;

    getCreateAddress(): string;
    setCreateAddress(value: string): AddUserTaskRequest;

    getOp(): number;
    setOp(value: number): AddUserTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddUserTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: AddUserTaskRequest): AddUserTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddUserTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddUserTaskRequest;
    static deserializeBinaryFromReader(message: AddUserTaskRequest, reader: jspb.BinaryReader): AddUserTaskRequest;
}

export namespace AddUserTaskRequest {
    export type AsObject = {
        userIdentity: number,
        dataList: Array<UserTask.AsObject>,
        savePath: string,
        saveIdentity: string,
        createAddress: string,
        op: number,
    }
}

export class UserTask extends jspb.Message { 
    getTaskIdentity(): string;
    setTaskIdentity(value: string): UserTask;

    getUserIdentity(): number;
    setUserIdentity(value: number): UserTask;

    getCreateTime(): number;
    setCreateTime(value: number): UserTask;

    getName(): string;
    setName(value: string): UserTask;

    getType(): number;
    setType(value: number): UserTask;

    getStatus(): number;
    setStatus(value: number): UserTask;

    getSize(): number;
    setSize(value: number): UserTask;

    getProcessedSize(): number;
    setProcessedSize(value: number): UserTask;

    getProgress(): number;
    setProgress(value: number): UserTask;

    getErrorCode(): number;
    setErrorCode(value: number): UserTask;

    getErrorMessage(): string;
    setErrorMessage(value: string): UserTask;

    getSavePath(): string;
    setSavePath(value: string): UserTask;

    getSaveIdentity(): string;
    setSaveIdentity(value: string): UserTask;

    getAccessPath(): string;
    setAccessPath(value: string): UserTask;

    getAccessIdentity(): string;
    setAccessIdentity(value: string): UserTask;

    getFileMime(): string;
    setFileMime(value: string): UserTask;

    getFileType(): number;
    setFileType(value: number): UserTask;

    getCreateAddress(): string;
    setCreateAddress(value: string): UserTask;

    getData(): string;
    setData(value: string): UserTask;

    getTextLink(): string;
    setTextLink(value: string): UserTask;

    getFileHash(): string;
    setFileHash(value: string): UserTask;

    getOp(): number;
    setOp(value: number): UserTask;

    getUsername(): string;
    setUsername(value: string): UserTask;

    getPassword(): string;
    setPassword(value: string): UserTask;

    getKind(): number;
    setKind(value: number): UserTask;

    getAddon(): string;
    setAddon(value: string): UserTask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTask.AsObject;
    static toObject(includeInstance: boolean, msg: UserTask): UserTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTask;
    static deserializeBinaryFromReader(message: UserTask, reader: jspb.BinaryReader): UserTask;
}

export namespace UserTask {
    export type AsObject = {
        taskIdentity: string,
        userIdentity: number,
        createTime: number,
        name: string,
        type: number,
        status: number,
        size: number,
        processedSize: number,
        progress: number,
        errorCode: number,
        errorMessage: string,
        savePath: string,
        saveIdentity: string,
        accessPath: string,
        accessIdentity: string,
        fileMime: string,
        fileType: number,
        createAddress: string,
        data: string,
        textLink: string,
        fileHash: string,
        op: number,
        username: string,
        password: string,
        kind: number,
        addon: string,
    }
}

export class DeleteTaskLogRequest extends jspb.Message { 
    clearIdentityList(): void;
    getIdentityList(): Array<number>;
    setIdentityList(value: Array<number>): DeleteTaskLogRequest;
    addIdentity(value: number, index?: number): number;

    getUserIdentity(): number;
    setUserIdentity(value: number): DeleteTaskLogRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteTaskLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteTaskLogRequest): DeleteTaskLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteTaskLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteTaskLogRequest;
    static deserializeBinaryFromReader(message: DeleteTaskLogRequest, reader: jspb.BinaryReader): DeleteTaskLogRequest;
}

export namespace DeleteTaskLogRequest {
    export type AsObject = {
        identityList: Array<number>,
        userIdentity: number,
    }
}

export class TaskLog extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): TaskLog;

    getTaskIdentity(): string;
    setTaskIdentity(value: string): TaskLog;

    getUserIdentity(): number;
    setUserIdentity(value: number): TaskLog;

    getCreateTime(): number;
    setCreateTime(value: number): TaskLog;

    getName(): string;
    setName(value: string): TaskLog;

    getType(): number;
    setType(value: number): TaskLog;

    getStatus(): number;
    setStatus(value: number): TaskLog;

    getSize(): number;
    setSize(value: number): TaskLog;

    getCreateAddress(): string;
    setCreateAddress(value: string): TaskLog;

    getFileHash(): string;
    setFileHash(value: string): TaskLog;

    getOp(): number;
    setOp(value: number): TaskLog;

    getUsername(): string;
    setUsername(value: string): TaskLog;

    getPassword(): string;
    setPassword(value: string): TaskLog;

    getDevice(): string;
    setDevice(value: string): TaskLog;

    getApp(): string;
    setApp(value: string): TaskLog;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskLog.AsObject;
    static toObject(includeInstance: boolean, msg: TaskLog): TaskLog.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskLog, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskLog;
    static deserializeBinaryFromReader(message: TaskLog, reader: jspb.BinaryReader): TaskLog;
}

export namespace TaskLog {
    export type AsObject = {
        identity: number,
        taskIdentity: string,
        userIdentity: number,
        createTime: number,
        name: string,
        type: number,
        status: number,
        size: number,
        createAddress: string,
        fileHash: string,
        op: number,
        username: string,
        password: string,
        device: string,
        app: string,
    }
}

export class TaskListener extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TaskListener;

    getTaskIdentity(): string;
    setTaskIdentity(value: string): TaskListener;

    getUserIdentity(): number;
    setUserIdentity(value: number): TaskListener;

    getUpdateTime(): number;
    setUpdateTime(value: number): TaskListener;

    getPrecent(): number;
    setPrecent(value: number): TaskListener;

    getCompleted(): boolean;
    setCompleted(value: boolean): TaskListener;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskListener.AsObject;
    static toObject(includeInstance: boolean, msg: TaskListener): TaskListener.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskListener, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskListener;
    static deserializeBinaryFromReader(message: TaskListener, reader: jspb.BinaryReader): TaskListener;
}

export namespace TaskListener {
    export type AsObject = {
        identity: string,
        taskIdentity: string,
        userIdentity: number,
        updateTime: number,
        precent: number,
        completed: boolean,
    }
}

export class TaskListenerList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<TaskListener>;
    setDataList(value: Array<TaskListener>): TaskListenerList;
    addData(value?: TaskListener, index?: number): TaskListener;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskListenerList.AsObject;
    static toObject(includeInstance: boolean, msg: TaskListenerList): TaskListenerList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskListenerList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskListenerList;
    static deserializeBinaryFromReader(message: TaskListenerList, reader: jspb.BinaryReader): TaskListenerList;
}

export namespace TaskListenerList {
    export type AsObject = {
        dataList: Array<TaskListener.AsObject>,
    }
}

export class ClearTaskRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): ClearTaskRequest;

    getType(): number;
    setType(value: number): ClearTaskRequest;

    getDeleteFile(): boolean;
    setDeleteFile(value: boolean): ClearTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClearTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ClearTaskRequest): ClearTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClearTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClearTaskRequest;
    static deserializeBinaryFromReader(message: ClearTaskRequest, reader: jspb.BinaryReader): ClearTaskRequest;
}

export namespace ClearTaskRequest {
    export type AsObject = {
        userIdentity: number,
        type: number,
        deleteFile: boolean,
    }
}

export class ListTaskLogRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): ListTaskLogRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): ListTaskLogRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): ListTaskLogRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

    getOp(): number;
    setOp(value: number): ListTaskLogRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListTaskLogRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListTaskLogRequest): ListTaskLogRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListTaskLogRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListTaskLogRequest;
    static deserializeBinaryFromReader(message: ListTaskLogRequest, reader: jspb.BinaryReader): ListTaskLogRequest;
}

export namespace ListTaskLogRequest {
    export type AsObject = {
        userIdentity: number,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
        op: number,
    }
}

export class ListUserTaskRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): ListUserTaskRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): ListUserTaskRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): ListUserTaskRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    hasFilter(): boolean;
    clearFilter(): void;
    getFilter(): UserTaskFilterRequest | undefined;
    setFilter(value?: UserTaskFilterRequest): ListUserTaskRequest;

    getOp(): number;
    setOp(value: number): ListUserTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListUserTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ListUserTaskRequest): ListUserTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListUserTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListUserTaskRequest;
    static deserializeBinaryFromReader(message: ListUserTaskRequest, reader: jspb.BinaryReader): ListUserTaskRequest;
}

export namespace ListUserTaskRequest {
    export type AsObject = {
        userIdentity: number,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
        filter?: UserTaskFilterRequest.AsObject,
        op: number,
    }
}

export class DeleteUserTaskRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): DeleteUserTaskRequest;

    clearTaskIdentityList(): void;
    getTaskIdentityList(): Array<string>;
    setTaskIdentityList(value: Array<string>): DeleteUserTaskRequest;
    addTaskIdentity(value: string, index?: number): string;

    getDeleteFile(): boolean;
    setDeleteFile(value: boolean): DeleteUserTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): DeleteUserTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: DeleteUserTaskRequest): DeleteUserTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: DeleteUserTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): DeleteUserTaskRequest;
    static deserializeBinaryFromReader(message: DeleteUserTaskRequest, reader: jspb.BinaryReader): DeleteUserTaskRequest;
}

export namespace DeleteUserTaskRequest {
    export type AsObject = {
        userIdentity: number,
        taskIdentityList: Array<string>,
        deleteFile: boolean,
    }
}

export class UserTaskList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<UserTask>;
    setDataList(value: Array<UserTask>): UserTaskList;
    addData(value?: UserTask, index?: number): UserTask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTaskList.AsObject;
    static toObject(includeInstance: boolean, msg: UserTaskList): UserTaskList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTaskList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTaskList;
    static deserializeBinaryFromReader(message: UserTaskList, reader: jspb.BinaryReader): UserTaskList;
}

export namespace UserTaskList {
    export type AsObject = {
        dataList: Array<UserTask.AsObject>,
    }
}

export class TaskLogList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<TaskLog>;
    setDataList(value: Array<TaskLog>): TaskLogList;
    addData(value?: TaskLog, index?: number): TaskLog;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskLogList.AsObject;
    static toObject(includeInstance: boolean, msg: TaskLogList): TaskLogList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskLogList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskLogList;
    static deserializeBinaryFromReader(message: TaskLogList, reader: jspb.BinaryReader): TaskLogList;
}

export namespace TaskLogList {
    export type AsObject = {
        dataList: Array<TaskLog.AsObject>,
    }
}

export class UserTaskFilterRequest extends jspb.Message { 
    clearTaskIdentityList(): void;
    getTaskIdentityList(): Array<string>;
    setTaskIdentityList(value: Array<string>): UserTaskFilterRequest;
    addTaskIdentity(value: string, index?: number): string;

    clearTypeList(): void;
    getTypeList(): Array<number>;
    setTypeList(value: Array<number>): UserTaskFilterRequest;
    addType(value: number, index?: number): number;

    getName(): string;
    setName(value: string): UserTaskFilterRequest;

    getKind(): number;
    setKind(value: number): UserTaskFilterRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UserTaskFilterRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UserTaskFilterRequest): UserTaskFilterRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UserTaskFilterRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UserTaskFilterRequest;
    static deserializeBinaryFromReader(message: UserTaskFilterRequest, reader: jspb.BinaryReader): UserTaskFilterRequest;
}

export namespace UserTaskFilterRequest {
    export type AsObject = {
        taskIdentityList: Array<string>,
        typeList: Array<number>,
        name: string,
        kind: number,
    }
}
