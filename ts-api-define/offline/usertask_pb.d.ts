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

export class AddUserOfflineTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  clearTasksList(): void;
  getTasksList(): Array<UserOfflineTaskRequest>;
  setTasksList(value: Array<UserOfflineTaskRequest>): void;
  addTasks(value?: UserOfflineTaskRequest, index?: number): UserOfflineTaskRequest;

  getPath(): string;
  setPath(value: string): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): AddUserOfflineTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: AddUserOfflineTaskRequest): AddUserOfflineTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: AddUserOfflineTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): AddUserOfflineTaskRequest;
  static deserializeBinaryFromReader(message: AddUserOfflineTaskRequest, reader: jspb.BinaryReader): AddUserOfflineTaskRequest;
}

export namespace AddUserOfflineTaskRequest {
  export type AsObject = {
    userIdentity: number,
    tasksList: Array<UserOfflineTaskRequest.AsObject>,
    path: string,
    createAddress: string,
  }
}

export class UserOfflineTask extends jspb.Message {
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

  getAccessPath(): string;
  setAccessPath(value: string): void;

  getFileMime(): string;
  setFileMime(value: string): void;

  getFileType(): number;
  setFileType(value: number): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTask.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTask): UserOfflineTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTask;
  static deserializeBinaryFromReader(message: UserOfflineTask, reader: jspb.BinaryReader): UserOfflineTask;
}

export namespace UserOfflineTask {
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
    accessPath: string,
    fileMime: string,
    fileType: number,
    createAddress: string,
    data: string,
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

export class UserOfflineTaskResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  getCount(): number;
  setCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTaskResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTaskResponse): UserOfflineTaskResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTaskResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTaskResponse;
  static deserializeBinaryFromReader(message: UserOfflineTaskResponse, reader: jspb.BinaryReader): UserOfflineTaskResponse;
}

export namespace UserOfflineTaskResponse {
  export type AsObject = {
    success: boolean,
    count: number,
  }
}

export class PageUserOfflineTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getOrderBy(): number;
  setOrderBy(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getFilter(): number;
  setFilter(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageUserOfflineTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageUserOfflineTaskRequest): PageUserOfflineTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageUserOfflineTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageUserOfflineTaskRequest;
  static deserializeBinaryFromReader(message: PageUserOfflineTaskRequest, reader: jspb.BinaryReader): PageUserOfflineTaskRequest;
}

export namespace PageUserOfflineTaskRequest {
  export type AsObject = {
    userIdentity: number,
    orderBy: number,
    page: number,
    pageSize: number,
    filter: number,
  }
}

export class ListUserOfflineTaskRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getOrderBy(): number;
  setOrderBy(value: number): void;

  getFilter(): number;
  setFilter(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getListSize(): number;
  setListSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserOfflineTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserOfflineTaskRequest): ListUserOfflineTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserOfflineTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserOfflineTaskRequest;
  static deserializeBinaryFromReader(message: ListUserOfflineTaskRequest, reader: jspb.BinaryReader): ListUserOfflineTaskRequest;
}

export namespace ListUserOfflineTaskRequest {
  export type AsObject = {
    userIdentity: number,
    orderBy: number,
    filter: number,
    start: number,
    listSize: number,
  }
}

export class UserOfflineTaskPage extends jspb.Message {
  clearListList(): void;
  getListList(): Array<UserOfflineTask>;
  setListList(value: Array<UserOfflineTask>): void;
  addList(value?: UserOfflineTask, index?: number): UserOfflineTask;

  getTotalCount(): number;
  setTotalCount(value: number): void;

  getTotalPage(): number;
  setTotalPage(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTaskPage.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTaskPage): UserOfflineTaskPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTaskPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTaskPage;
  static deserializeBinaryFromReader(message: UserOfflineTaskPage, reader: jspb.BinaryReader): UserOfflineTaskPage;
}

export namespace UserOfflineTaskPage {
  export type AsObject = {
    listList: Array<UserOfflineTask.AsObject>,
    totalCount: number,
    totalPage: number,
    page: number,
    pageSize: number,
  }
}

export class DeleteTasksRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  clearTasksIdentityList(): void;
  getTasksIdentityList(): Array<string>;
  setTasksIdentityList(value: Array<string>): void;
  addTasksIdentity(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteTasksRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteTasksRequest): DeleteTasksRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteTasksRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteTasksRequest;
  static deserializeBinaryFromReader(message: DeleteTasksRequest, reader: jspb.BinaryReader): DeleteTasksRequest;
}

export namespace DeleteTasksRequest {
  export type AsObject = {
    userIdentity: number,
    tasksIdentityList: Array<string>,
  }
}

export class UserOfflineTaskList extends jspb.Message {
  clearListList(): void;
  getListList(): Array<UserOfflineTask>;
  setListList(value: Array<UserOfflineTask>): void;
  addList(value?: UserOfflineTask, index?: number): UserOfflineTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserOfflineTaskList.AsObject;
  static toObject(includeInstance: boolean, msg: UserOfflineTaskList): UserOfflineTaskList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserOfflineTaskList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserOfflineTaskList;
  static deserializeBinaryFromReader(message: UserOfflineTaskList, reader: jspb.BinaryReader): UserOfflineTaskList;
}

export namespace UserOfflineTaskList {
  export type AsObject = {
    listList: Array<UserOfflineTask.AsObject>,
  }
}

