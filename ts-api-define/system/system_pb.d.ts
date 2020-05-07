// package: services
// file: system/system.proto

import * as jspb from "google-protobuf";

export class SystemInfo extends jspb.Message {
  getRequestTime(): number;
  setRequestTime(value: number): void;

  getRequestUser(): string;
  setRequestUser(value: string): void;

  getServerName(): string;
  setServerName(value: string): void;

  getServerTime(): number;
  setServerTime(value: number): void;

  getAccessCount(): number;
  setAccessCount(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SystemInfo.AsObject;
  static toObject(includeInstance: boolean, msg: SystemInfo): SystemInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SystemInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SystemInfo;
  static deserializeBinaryFromReader(message: SystemInfo, reader: jspb.BinaryReader): SystemInfo;
}

export namespace SystemInfo {
  export type AsObject = {
    requestTime: number,
    requestUser: string,
    serverName: string,
    serverTime: number,
    accessCount: number,
  }
}

export class UpdateInfoList extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<UpdateInfo>;
  setDataList(value: Array<UpdateInfo>): void;
  addData(value?: UpdateInfo, index?: number): UpdateInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInfoList.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInfoList): UpdateInfoList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInfoList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInfoList;
  static deserializeBinaryFromReader(message: UpdateInfoList, reader: jspb.BinaryReader): UpdateInfoList;
}

export namespace UpdateInfoList {
  export type AsObject = {
    dataList: Array<UpdateInfo.AsObject>,
  }
}

export class UpdateInfo extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getNumberVersion(): number;
  setNumberVersion(value: number): void;

  getSha1(): string;
  setSha1(value: string): void;

  getMd5(): string;
  setMd5(value: string): void;

  getForce(): boolean;
  setForce(value: boolean): void;

  getVersion(): string;
  setVersion(value: string): void;

  getPlatform(): string;
  setPlatform(value: string): void;

  getDebug(): boolean;
  setDebug(value: boolean): void;

  getLang(): string;
  setLang(value: string): void;

  getDownloadAddress(): string;
  setDownloadAddress(value: string): void;

  getStoreAddress(): string;
  setStoreAddress(value: string): void;

  getWebsiteAddress(): string;
  setWebsiteAddress(value: string): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  getCreateTime(): string;
  setCreateTime(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getLatest(): boolean;
  setLatest(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateInfo.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateInfo): UpdateInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateInfo;
  static deserializeBinaryFromReader(message: UpdateInfo, reader: jspb.BinaryReader): UpdateInfo;
}

export namespace UpdateInfo {
  export type AsObject = {
    identity: number,
    numberVersion: number,
    sha1: string,
    md5: string,
    force: boolean,
    version: string,
    platform: string,
    debug: boolean,
    lang: string,
    downloadAddress: string,
    storeAddress: string,
    websiteAddress: string,
    title: string,
    description: string,
    createTime: string,
    size: number,
    latest: boolean,
  }
}

export class ClientInfo extends jspb.Message {
  getClientName(): string;
  setClientName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ClientInfo.AsObject;
  static toObject(includeInstance: boolean, msg: ClientInfo): ClientInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ClientInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ClientInfo;
  static deserializeBinaryFromReader(message: ClientInfo, reader: jspb.BinaryReader): ClientInfo;
}

export namespace ClientInfo {
  export type AsObject = {
    clientName: string,
  }
}

