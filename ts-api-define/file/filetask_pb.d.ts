// package: services
// file: file/filetask.proto

import * as jspb from "google-protobuf";

export class FileTask extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getSourceUserIdentity(): number;
  setSourceUserIdentity(value: number): void;

  getDestUserIdentity(): number;
  setDestUserIdentity(value: number): void;

  getSourcePath(): string;
  setSourcePath(value: string): void;

  getDestPath(): string;
  setDestPath(value: string): void;

  getOp(): number;
  setOp(value: number): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getCurrentText(): string;
  setCurrentText(value: string): void;

  getFilesDone(): number;
  setFilesDone(value: number): void;

  getFilesTotal(): number;
  setFilesTotal(value: number): void;

  getProgress(): number;
  setProgress(value: number): void;

  getAddon(): string;
  setAddon(value: string): void;

  getErrorCode(): number;
  setErrorCode(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTask.AsObject;
  static toObject(includeInstance: boolean, msg: FileTask): FileTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTask;
  static deserializeBinaryFromReader(message: FileTask, reader: jspb.BinaryReader): FileTask;
}

export namespace FileTask {
  export type AsObject = {
    identity: number,
    sourceUserIdentity: number,
    destUserIdentity: number,
    sourcePath: string,
    destPath: string,
    op: number,
    type: number,
    status: number,
    createTime: number,
    currentText: string,
    filesDone: number,
    filesTotal: number,
    progress: number,
    addon: string,
    errorCode: number,
  }
}

export class FileTaskListResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<FileTask>;
  setDataList(value: Array<FileTask>): void;
  addData(value?: FileTask, index?: number): FileTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileTaskListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileTaskListResponse): FileTaskListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileTaskListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileTaskListResponse;
  static deserializeBinaryFromReader(message: FileTaskListResponse, reader: jspb.BinaryReader): FileTaskListResponse;
}

export namespace FileTaskListResponse {
  export type AsObject = {
    dataList: Array<FileTask.AsObject>,
  }
}

