// package: services
// file: offline/systemtask.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class BatchGetRequest extends jspb.Message {
  clearIdentitiesList(): void;
  getIdentitiesList(): Array<string>;
  setIdentitiesList(value: Array<string>): void;
  addIdentities(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetRequest): BatchGetRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchGetRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetRequest;
  static deserializeBinaryFromReader(message: BatchGetRequest, reader: jspb.BinaryReader): BatchGetRequest;
}

export namespace BatchGetRequest {
  export type AsObject = {
    identitiesList: Array<string>,
  }
}

export class BatchGetResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<SystemOfflineTaskDetail>;
  setDataList(value: Array<SystemOfflineTaskDetail>): void;
  addData(value?: SystemOfflineTaskDetail, index?: number): SystemOfflineTaskDetail;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BatchGetResponse.AsObject;
  static toObject(includeInstance: boolean, msg: BatchGetResponse): BatchGetResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BatchGetResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BatchGetResponse;
  static deserializeBinaryFromReader(message: BatchGetResponse, reader: jspb.BinaryReader): BatchGetResponse;
}

export namespace BatchGetResponse {
  export type AsObject = {
    dataList: Array<SystemOfflineTaskDetail.AsObject>,
  }
}

export class SystemOfflineTask extends jspb.Message {
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

  getCreateIp(): string;
  setCreateIp(value: string): void;

  getData(): string;
  setData(value: string): void;

  getTextLink(): string;
  setTextLink(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemOfflineTask.AsObject;
  static toObject(includeInstance: boolean, msg: SystemOfflineTask): SystemOfflineTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemOfflineTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemOfflineTask;
  static deserializeBinaryFromReader(message: SystemOfflineTask, reader: jspb.BinaryReader): SystemOfflineTask;
}

export namespace SystemOfflineTask {
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
    createIp: string,
    data: string,
    textLink: string,
  }
}

export class UpdateProgressRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDownloadsize(): number;
  setDownloadsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateProgressRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateProgressRequest): UpdateProgressRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateProgressRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateProgressRequest;
  static deserializeBinaryFromReader(message: UpdateProgressRequest, reader: jspb.BinaryReader): UpdateProgressRequest;
}

export namespace UpdateProgressRequest {
  export type AsObject = {
    identity: string,
    size: number,
    downloadsize: number,
  }
}

export class StatusChangeRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StatusChangeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: StatusChangeRequest): StatusChangeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StatusChangeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StatusChangeRequest;
  static deserializeBinaryFromReader(message: StatusChangeRequest, reader: jspb.BinaryReader): StatusChangeRequest;
}

export namespace StatusChangeRequest {
  export type AsObject = {
    identity: string,
    status: number,
  }
}

export class ErrorRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getErrorcode(): number;
  setErrorcode(value: number): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorRequest): ErrorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorRequest;
  static deserializeBinaryFromReader(message: ErrorRequest, reader: jspb.BinaryReader): ErrorRequest;
}

export namespace ErrorRequest {
  export type AsObject = {
    identity: string,
    errorcode: number,
    errormessage: string,
  }
}

export class SystemOfflineTaskFile extends jspb.Message {
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
  toObject(includeInstance?: boolean): SystemOfflineTaskFile.AsObject;
  static toObject(includeInstance: boolean, msg: SystemOfflineTaskFile): SystemOfflineTaskFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemOfflineTaskFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemOfflineTaskFile;
  static deserializeBinaryFromReader(message: SystemOfflineTaskFile, reader: jspb.BinaryReader): SystemOfflineTaskFile;
}

export namespace SystemOfflineTaskFile {
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

export class SystemOfflineTaskDetail extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  hasTask(): boolean;
  clearTask(): void;
  getTask(): SystemOfflineTask | undefined;
  setTask(value?: SystemOfflineTask): void;

  clearFilesList(): void;
  getFilesList(): Array<SystemOfflineTaskFile>;
  setFilesList(value: Array<SystemOfflineTaskFile>): void;
  addFiles(value?: SystemOfflineTaskFile, index?: number): SystemOfflineTaskFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemOfflineTaskDetail.AsObject;
  static toObject(includeInstance: boolean, msg: SystemOfflineTaskDetail): SystemOfflineTaskDetail.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemOfflineTaskDetail, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemOfflineTaskDetail;
  static deserializeBinaryFromReader(message: SystemOfflineTaskDetail, reader: jspb.BinaryReader): SystemOfflineTaskDetail;
}

export namespace SystemOfflineTaskDetail {
  export type AsObject = {
    identity: string,
    task?: SystemOfflineTask.AsObject,
    filesList: Array<SystemOfflineTaskFile.AsObject>,
  }
}

