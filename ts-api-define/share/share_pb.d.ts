// package: services
// file: share/share.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class FileShare extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getMime(): string;
  setMime(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getFlag(): number;
  setFlag(value: number): void;

  getPasswordenabled(): boolean;
  setPasswordenabled(value: boolean): void;

  getPassword(): string;
  setPassword(value: string): void;

  getExpireenabled(): boolean;
  setExpireenabled(value: boolean): void;

  getExpire(): number;
  setExpire(value: number): void;

  getCopycount(): number;
  setCopycount(value: number): void;

  getCopycountlimit(): number;
  setCopycountlimit(value: number): void;

  getCopycountenabled(): boolean;
  setCopycountenabled(value: boolean): void;

  getStatus(): number;
  setStatus(value: number): void;

  getUsername(): string;
  setUsername(value: string): void;

  getWeburl(): string;
  setWeburl(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileShare.AsObject;
  static toObject(includeInstance: boolean, msg: FileShare): FileShare.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileShare, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileShare;
  static deserializeBinaryFromReader(message: FileShare, reader: jspb.BinaryReader): FileShare;
}

export namespace FileShare {
  export type AsObject = {
    identity: string,
    size: number,
    mime: string,
    useridentity: number,
    ctime: number,
    name: string,
    flag: number,
    passwordenabled: boolean,
    password: string,
    expireenabled: boolean,
    expire: number,
    copycount: number,
    copycountlimit: number,
    copycountenabled: boolean,
    status: number,
    username: string,
    weburl: string,
  }
}

export class ShareSaveRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getSavepath(): string;
  setSavepath(value: string): void;

  getSaveidentity(): string;
  setSaveidentity(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ShareSaveRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ShareSaveRequest): ShareSaveRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ShareSaveRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ShareSaveRequest;
  static deserializeBinaryFromReader(message: ShareSaveRequest, reader: jspb.BinaryReader): ShareSaveRequest;
}

export namespace ShareSaveRequest {
  export type AsObject = {
    identity: string,
    useridentity: number,
    savepath: string,
    saveidentity: string,
    password: string,
  }
}

