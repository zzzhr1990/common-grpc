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
  getDataList(): Array<SystemOfflineTaskMeta>;
  setDataList(value: Array<SystemOfflineTaskMeta>): void;
  addData(value?: SystemOfflineTaskMeta, index?: number): SystemOfflineTaskMeta;

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
    dataList: Array<SystemOfflineTaskMeta.AsObject>,
  }
}

export class SystemOfflineTask extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getCreateuser(): number;
  setCreateuser(value: number): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getDownloadsize(): number;
  setDownloadsize(value: number): void;

  getErrorcode(): number;
  setErrorcode(value: number): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  getCreateip(): string;
  setCreateip(value: string): void;

  getData(): string;
  setData(value: string): void;

  getPreview(): boolean;
  setPreview(value: boolean): void;

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
    createuser: number,
    createtime: number,
    name: string,
    type: number,
    status: number,
    flag: number,
    downloadsize: number,
    errorcode: number,
    errormessage: string,
    createip: string,
    data: string,
    preview: boolean,
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

  getRemovelistener(): boolean;
  setRemovelistener(value: boolean): void;

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
    removelistener: boolean,
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
  getDownloadidentity(): string;
  setDownloadidentity(value: string): void;

  getPathidentity(): string;
  setPathidentity(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDownloadsize(): number;
  setDownloadsize(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getFileindex(): number;
  setFileindex(value: number): void;

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
    downloadidentity: string,
    pathidentity: string,
    createtime: number,
    name: string,
    path: string,
    hash: string,
    size: number,
    downloadsize: number,
    status: number,
    flag: number,
    fileindex: number,
    finish: boolean,
    directory: boolean,
  }
}

export class SystemOfflineTaskMeta extends jspb.Message {
  hasTask(): boolean;
  clearTask(): void;
  getTask(): SystemOfflineTask | undefined;
  setTask(value?: SystemOfflineTask): void;

  clearFilesList(): void;
  getFilesList(): Array<SystemOfflineTaskFile>;
  setFilesList(value: Array<SystemOfflineTaskFile>): void;
  addFiles(value?: SystemOfflineTaskFile, index?: number): SystemOfflineTaskFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemOfflineTaskMeta.AsObject;
  static toObject(includeInstance: boolean, msg: SystemOfflineTaskMeta): SystemOfflineTaskMeta.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemOfflineTaskMeta, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemOfflineTaskMeta;
  static deserializeBinaryFromReader(message: SystemOfflineTaskMeta, reader: jspb.BinaryReader): SystemOfflineTaskMeta;
}

export namespace SystemOfflineTaskMeta {
  export type AsObject = {
    task?: SystemOfflineTask.AsObject,
    filesList: Array<SystemOfflineTaskFile.AsObject>,
  }
}

export class SystemOfflineTaskFiles extends jspb.Message {
  clearFilesList(): void;
  getFilesList(): Array<SystemOfflineTaskFile>;
  setFilesList(value: Array<SystemOfflineTaskFile>): void;
  addFiles(value?: SystemOfflineTaskFile, index?: number): SystemOfflineTaskFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemOfflineTaskFiles.AsObject;
  static toObject(includeInstance: boolean, msg: SystemOfflineTaskFiles): SystemOfflineTaskFiles.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemOfflineTaskFiles, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemOfflineTaskFiles;
  static deserializeBinaryFromReader(message: SystemOfflineTaskFiles, reader: jspb.BinaryReader): SystemOfflineTaskFiles;
}

export namespace SystemOfflineTaskFiles {
  export type AsObject = {
    filesList: Array<SystemOfflineTaskFile.AsObject>,
  }
}

