// package: services
// file: offline/system.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class SystemTaskFetchRequest extends jspb.Message { 
    clearTypeList(): void;
    getTypeList(): Array<number>;
    setTypeList(value: Array<number>): SystemTaskFetchRequest;
    addType(value: number, index?: number): number;

    clearStatusList(): void;
    getStatusList(): Array<number>;
    setStatusList(value: Array<number>): SystemTaskFetchRequest;
    addStatus(value: number, index?: number): number;

    getNextStatus(): number;
    setNextStatus(value: number): SystemTaskFetchRequest;

    getLimit(): number;
    setLimit(value: number): SystemTaskFetchRequest;

    getConsumer(): string;
    setConsumer(value: string): SystemTaskFetchRequest;

    getRecover(): boolean;
    setRecover(value: boolean): SystemTaskFetchRequest;

    getDesc(): boolean;
    setDesc(value: boolean): SystemTaskFetchRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemTaskFetchRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SystemTaskFetchRequest): SystemTaskFetchRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemTaskFetchRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemTaskFetchRequest;
    static deserializeBinaryFromReader(message: SystemTaskFetchRequest, reader: jspb.BinaryReader): SystemTaskFetchRequest;
}

export namespace SystemTaskFetchRequest {
    export type AsObject = {
        typeList: Array<number>,
        statusList: Array<number>,
        nextStatus: number,
        limit: number,
        consumer: string,
        recover: boolean,
        desc: boolean,
    }
}

export class SystemTaskList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<SystemTask>;
    setDataList(value: Array<SystemTask>): SystemTaskList;
    addData(value?: SystemTask, index?: number): SystemTask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemTaskList.AsObject;
    static toObject(includeInstance: boolean, msg: SystemTaskList): SystemTaskList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemTaskList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemTaskList;
    static deserializeBinaryFromReader(message: SystemTaskList, reader: jspb.BinaryReader): SystemTaskList;
}

export namespace SystemTaskList {
    export type AsObject = {
        dataList: Array<SystemTask.AsObject>,
    }
}

export class TaskFile extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): TaskFile;

    getTaskIdentity(): string;
    setTaskIdentity(value: string): TaskFile;

    getCreateTime(): number;
    setCreateTime(value: number): TaskFile;

    getName(): string;
    setName(value: string): TaskFile;

    getPath(): string;
    setPath(value: string): TaskFile;

    getHash(): string;
    setHash(value: string): TaskFile;

    getSize(): number;
    setSize(value: number): TaskFile;

    getProcessedSize(): number;
    setProcessedSize(value: number): TaskFile;

    getStatus(): number;
    setStatus(value: number): TaskFile;

    getFlag(): number;
    setFlag(value: number): TaskFile;

    getFileIndex(): number;
    setFileIndex(value: number): TaskFile;

    getFinish(): boolean;
    setFinish(value: boolean): TaskFile;

    getDirectory(): boolean;
    setDirectory(value: boolean): TaskFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TaskFile.AsObject;
    static toObject(includeInstance: boolean, msg: TaskFile): TaskFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TaskFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TaskFile;
    static deserializeBinaryFromReader(message: TaskFile, reader: jspb.BinaryReader): TaskFile;
}

export namespace TaskFile {
    export type AsObject = {
        identity: string,
        taskIdentity: string,
        createTime: number,
        name: string,
        path: string,
        hash: string,
        size: number,
        processedSize: number,
        status: number,
        flag: number,
        fileIndex: number,
        finish: boolean,
        directory: boolean,
    }
}

export class SystemTask extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): SystemTask;

    getSize(): number;
    setSize(value: number): SystemTask;

    getCreateUser(): number;
    setCreateUser(value: number): SystemTask;

    getCreateTime(): number;
    setCreateTime(value: number): SystemTask;

    getName(): string;
    setName(value: string): SystemTask;

    getType(): number;
    setType(value: number): SystemTask;

    getStatus(): number;
    setStatus(value: number): SystemTask;

    getFlag(): number;
    setFlag(value: number): SystemTask;

    getProcessedSize(): number;
    setProcessedSize(value: number): SystemTask;

    getErrorCode(): number;
    setErrorCode(value: number): SystemTask;

    getErrorMessage(): string;
    setErrorMessage(value: string): SystemTask;

    getCreateAddr(): string;
    setCreateAddr(value: string): SystemTask;

    getData(): string;
    setData(value: string): SystemTask;

    getTextLink(): string;
    setTextLink(value: string): SystemTask;

    getErrorCount(): number;
    setErrorCount(value: number): SystemTask;

    getErrorTime(): number;
    setErrorTime(value: number): SystemTask;

    getOp(): number;
    setOp(value: number): SystemTask;

    getFileHash(): string;
    setFileHash(value: string): SystemTask;

    getUsername(): string;
    setUsername(value: string): SystemTask;

    getPassword(): string;
    setPassword(value: string): SystemTask;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemTask.AsObject;
    static toObject(includeInstance: boolean, msg: SystemTask): SystemTask.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemTask, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemTask;
    static deserializeBinaryFromReader(message: SystemTask, reader: jspb.BinaryReader): SystemTask;
}

export namespace SystemTask {
    export type AsObject = {
        identity: string,
        size: number,
        createUser: number,
        createTime: number,
        name: string,
        type: number,
        status: number,
        flag: number,
        processedSize: number,
        errorCode: number,
        errorMessage: string,
        createAddr: string,
        data: string,
        textLink: string,
        errorCount: number,
        errorTime: number,
        op: number,
        fileHash: string,
        username: string,
        password: string,
    }
}

export class SystemTaskDetail extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): SystemTaskDetail;


    hasTask(): boolean;
    clearTask(): void;
    getTask(): SystemTask | undefined;
    setTask(value?: SystemTask): SystemTaskDetail;

    clearDataList(): void;
    getDataList(): Array<TaskFile>;
    setDataList(value: Array<TaskFile>): SystemTaskDetail;
    addData(value?: TaskFile, index?: number): TaskFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemTaskDetail.AsObject;
    static toObject(includeInstance: boolean, msg: SystemTaskDetail): SystemTaskDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemTaskDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemTaskDetail;
    static deserializeBinaryFromReader(message: SystemTaskDetail, reader: jspb.BinaryReader): SystemTaskDetail;
}

export namespace SystemTaskDetail {
    export type AsObject = {
        identity: string,
        task?: SystemTask.AsObject,
        dataList: Array<TaskFile.AsObject>,
    }
}
