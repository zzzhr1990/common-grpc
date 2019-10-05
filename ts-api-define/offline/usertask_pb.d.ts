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
  getUseridentity(): number;
  setUseridentity(value: number): void;

  clearTasksList(): void;
  getTasksList(): Array<UserOfflineTaskRequest>;
  setTasksList(value: Array<UserOfflineTaskRequest>): void;
  addTasks(value?: UserOfflineTaskRequest, index?: number): UserOfflineTaskRequest;

  getPath(): string;
  setPath(value: string): void;

  getCreateip(): string;
  setCreateip(value: string): void;

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
    useridentity: number,
    tasksList: Array<UserOfflineTaskRequest.AsObject>,
    path: string,
    createip: string,
  }
}

export class UserOfflineTask extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getSize(): number;
  setSize(value: number): void;

  getDownloadsize(): number;
  setDownloadsize(value: number): void;

  getProgress(): number;
  setProgress(value: number): void;

  getErrorcode(): number;
  setErrorcode(value: number): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getSavepath(): string;
  setSavepath(value: string): void;

  getAccesspath(): string;
  setAccesspath(value: string): void;

  getFilemime(): string;
  setFilemime(value: string): void;

  getFiletype(): number;
  setFiletype(value: number): void;

  getCreateip(): string;
  setCreateip(value: string): void;

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
    useridentity: number,
    createtime: number,
    name: string,
    type: number,
    status: number,
    size: number,
    downloadsize: number,
    progress: number,
    errorcode: number,
    errormessage: string,
    savepath: string,
    accesspath: string,
    filemime: string,
    filetype: number,
    createip: string,
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

export class UserTaskListener extends jspb.Message {
  getTaskidentity(): string;
  setTaskidentity(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserTaskListener.AsObject;
  static toObject(includeInstance: boolean, msg: UserTaskListener): UserTaskListener.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserTaskListener, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserTaskListener;
  static deserializeBinaryFromReader(message: UserTaskListener, reader: jspb.BinaryReader): UserTaskListener;
}

export namespace UserTaskListener {
  export type AsObject = {
    taskidentity: string,
    useridentity: number,
    createtime: number,
    deadline: number,
  }
}

export class PageUserOfflineTaskRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  getOrderby(): number;
  setOrderby(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

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
    useridentity: number,
    orderby: number,
    page: number,
    pagesize: number,
    filter: number,
  }
}

export class ListUserOfflineTaskRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  getOrderby(): number;
  setOrderby(value: number): void;

  getFilter(): number;
  setFilter(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getListsize(): number;
  setListsize(value: number): void;

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
    useridentity: number,
    orderby: number,
    filter: number,
    start: number,
    listsize: number,
  }
}

export class UserOfflineTaskPage extends jspb.Message {
  clearListList(): void;
  getListList(): Array<UserOfflineTask>;
  setListList(value: Array<UserOfflineTask>): void;
  addList(value?: UserOfflineTask, index?: number): UserOfflineTask;

  getTotalcount(): number;
  setTotalcount(value: number): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

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
    totalcount: number,
    totalpage: number,
    page: number,
    pagesize: number,
  }
}

export class DeleteTasksRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  clearTasksidentityList(): void;
  getTasksidentityList(): Array<string>;
  setTasksidentityList(value: Array<string>): void;
  addTasksidentity(value: string, index?: number): string;

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
    useridentity: number,
    tasksidentityList: Array<string>,
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

