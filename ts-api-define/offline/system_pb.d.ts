// package: services
// file: offline/system.proto

import * as jspb from "google-protobuf";

export class SystemTaskFetchRequest extends jspb.Message {
  clearTypeList(): void;
  getTypeList(): Array<number>;
  setTypeList(value: Array<number>): void;
  addType(value: number, index?: number): number;

  clearStatusList(): void;
  getStatusList(): Array<number>;
  setStatusList(value: Array<number>): void;
  addStatus(value: number, index?: number): number;

  getNextStatus(): number;
  setNextStatus(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  getConsumer(): string;
  setConsumer(value: string): void;

  getRecover(): boolean;
  setRecover(value: boolean): void;

  getDesc(): boolean;
  setDesc(value: boolean): void;

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
  setDataList(value: Array<SystemTask>): void;
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
  getDownloadIdentity(): string;
  setDownloadIdentity(value: string): void;

  getPathIdentity(): string;
  setPathIdentity(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDownloadSize(): number;
  setDownloadSize(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getFileIndex(): number;
  setFileIndex(value: number): void;

  getFinish(): boolean;
  setFinish(value: boolean): void;

  getDirectory(): boolean;
  setDirectory(value: boolean): void;

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
    downloadIdentity: string,
    pathIdentity: string,
    createTime: number,
    name: string,
    path: string,
    hash: string,
    size: number,
    downloadSize: number,
    status: number,
    flag: number,
    fileIndex: number,
    finish: boolean,
    directory: boolean,
  }
}

export class SystemTask extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getCreateUser(): number;
  setCreateUser(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getDownloadSize(): number;
  setDownloadSize(value: number): void;

  getErrorCode(): number;
  setErrorCode(value: number): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getCreateAddr(): string;
  setCreateAddr(value: string): void;

  getData(): string;
  setData(value: string): void;

  getTextLink(): string;
  setTextLink(value: string): void;

  getErrorCount(): number;
  setErrorCount(value: number): void;

  getErrorTime(): number;
  setErrorTime(value: number): void;

  getOp(): number;
  setOp(value: number): void;

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
    downloadSize: number,
    errorCode: number,
    errorMessage: string,
    createAddr: string,
    data: string,
    textLink: string,
    errorCount: number,
    errorTime: number,
    op: number,
  }
}

export class SystemTaskDetail extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): SystemTask | undefined;
  setTask(value?: SystemTask): void;

  clearDataList(): void;
  getDataList(): Array<TaskFile>;
  setDataList(value: Array<TaskFile>): void;
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

