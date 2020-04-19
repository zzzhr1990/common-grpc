// package: services
// file: offline/usertask.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class UserOfflineTaskRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getType(): number;
  setType(value: number): void;

  getName(): string;
  setName(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTaskRequest): UserOfflineTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTaskRequest;
  static deserializeBinaryFromReader(message: UserOfflineTaskRequest, reader: jspb.BinaryReader): UserOfflineTaskRequest;
}

export namespace UserOfflineTaskRequest {
  export type AsObject = {
    identity: string,
    type: number,
    name: string,
    data: string,
  }
}

export class AddUserTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  clearDataList(): void;
  getDataList(): Array<UserTask>;
  setDataList(value: Array<UserTask>): void;
  addData(value?: UserTask, index?: number): UserTask;

  getPath(): string;
  setPath(value: string): void;

  getIdentity(): string;
  setIdentity(value: string): void;

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
    path: string,
    identity: string,
    createAddress: string,
  }
}

export class UserTask extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

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
    identity: string,
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

export class UserOfflineTaskFile extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getOrder(): number;
  setOrder(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTaskFile.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTaskFile): UserOfflineTaskFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTaskFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTaskFile;
  static deserializeBinaryFromReader(message: UserOfflineTaskFile, reader: jspb.BinaryReader): UserOfflineTaskFile;
}

export namespace UserOfflineTaskFile {
  export type AsObject = {
    identity: string,
    name: string,
    size: number,
    order: number,
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

  clearIdentityList(): void;
  getIdentityList(): Array<string>;
  setIdentityList(value: Array<string>): void;
  addIdentity(value: string, index?: number): string;

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
    identityList: Array<string>,
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
  clearIdentityList(): void;
  getIdentityList(): Array<string>;
  setIdentityList(value: Array<string>): void;
  addIdentity(value: string, index?: number): string;

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
    identityList: Array<string>,
    typeList: Array<number>,
    name: string,
  }
}

