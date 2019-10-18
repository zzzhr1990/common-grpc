// package: services
// file: file/userfile.proto

import * as jspb from "google-protobuf";

export class UserFile extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getName(): string;
  setName(value: string): void;

  getExt(): string;
  setExt(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getParent(): string;
  setParent(value: string): void;

  getType(): number;
  setType(value: number): void;

  getDirectory(): boolean;
  setDirectory(value: boolean): void;

  getAtime(): number;
  setAtime(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getMtime(): number;
  setMtime(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getLocking(): boolean;
  setLocking(value: boolean): void;

  getOp(): number;
  setOp(value: number): void;

  getPreview(): boolean;
  setPreview(value: boolean): void;

  getPreviewType(): number;
  setPreviewType(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  getUniqueIdentity(): string;
  setUniqueIdentity(value: string): void;

  getShare(): boolean;
  setShare(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFile.AsObject;
  static toObject(includeInstance: boolean, msg: UserFile): UserFile.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFile, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFile;
  static deserializeBinaryFromReader(message: UserFile, reader: jspb.BinaryReader): UserFile;
}

export namespace UserFile {
  export type AsObject = {
    identity: string,
    hash: string,
    userIdentity: number,
    path: string,
    name: string,
    ext: string,
    size: number,
    deleted: boolean,
    parent: string,
    type: number,
    directory: boolean,
    atime: number,
    ctime: number,
    mtime: number,
    version: number,
    locking: boolean,
    op: number,
    preview: boolean,
    previewType: number,
    flag: number,
    uniqueIdentity: string,
    share: boolean,
  }
}

