// package: services
// file: offline/usertask.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class AddUserTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  clearDataList(): void;
  getDataList(): Array<UserTask>;
  setDataList(value: Array<UserTask>): void;
  addData(value?: UserTask, index?: number): UserTask;

  getSavePath(): string;
  setSavePath(value: string): void;

  getSaveIdentity(): string;
  setSaveIdentity(value: string): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

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
  }
}

export class UserTask extends jspb.Message {
  getTaskIdentity(): string;
  setTaskIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getDownloadSize(): number;
  setDownloadSize(value: number): void;

  getProgress(): number;
  setProgress(value: number): void;

  getErrorCode(): number;
  setErrorCode(value: number): void;

  getErrorMessage(): string;
  setErrorMessage(value: string): void;

  getSavePath(): string;
  setSavePath(value: string): void;

  getSaveIdentity(): string;
  setSaveIdentity(value: string): void;

  getAccessPath(): string;
  setAccessPath(value: string): void;

  getAccessIdentity(): string;
  setAccessIdentity(value: string): void;

  getFileMime(): string;
  setFileMime(value: string): void;

  getFileType(): number;
  setFileType(value: number): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

  getData(): string;
  setData(value: string): void;

  getTextLink(): string;
  setTextLink(value: string): void;

  getFileHash(): string;
  setFileHash(value: string): void;

  getOp(): number;
  setOp(value: number): void;

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
    downloadSize: number,
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
  }
}

export class ListUserTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  hasListInfo(): boolean;
  clearListInfo(): void;
  getListInfo(): common_common_entity_pb.ListInfo | undefined;
  setListInfo(value?: common_common_entity_pb.ListInfo): void;

  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): FilterRequest | undefined;
  setFilter(value?: FilterRequest): void;

  getOp(): number;
  setOp(value: number): void;

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
    filter?: FilterRequest.AsObject,
    op: number,
  }
}

export class DeleteUserTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  clearTaskIdentityList(): void;
  getTaskIdentityList(): Array<string>;
  setTaskIdentityList(value: Array<string>): void;
  addTaskIdentity(value: string, index?: number): string;

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
  }
}

export class UserTaskList extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<UserTask>;
  setDataList(value: Array<UserTask>): void;
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

export class FilterRequest extends jspb.Message {
  clearTaskIdentityList(): void;
  getTaskIdentityList(): Array<string>;
  setTaskIdentityList(value: Array<string>): void;
  addTaskIdentity(value: string, index?: number): string;

  clearTypeList(): void;
  getTypeList(): Array<number>;
  setTypeList(value: Array<number>): void;
  addType(value: number, index?: number): number;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterRequest): FilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterRequest;
  static deserializeBinaryFromReader(message: FilterRequest, reader: jspb.BinaryReader): FilterRequest;
}

export namespace FilterRequest {
  export type AsObject = {
    taskIdentityList: Array<string>,
    typeList: Array<number>,
    name: string,
  }
}

