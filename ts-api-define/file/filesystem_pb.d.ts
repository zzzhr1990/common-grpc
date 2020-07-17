// package: services
// file: file/filesystem.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class FileInfo extends jspb.Message {
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

  getMime(): string;
  setMime(value: string): void;

  getDeleted(): boolean;
  setDeleted(value: boolean): void;

  getHidden(): boolean;
  setHidden(value: boolean): void;

  getLabel(): number;
  setLabel(value: number): void;

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

  getDownloadAddress(): string;
  setDownloadAddress(value: string): void;

  getLockTime(): number;
  setLockTime(value: number): void;

  getChildren(): number;
  setChildren(value: number): void;

  getChildrenTotal(): number;
  setChildrenTotal(value: number): void;

  getSticky(): number;
  setSticky(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfo.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfo): FileInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfo;
  static deserializeBinaryFromReader(message: FileInfo, reader: jspb.BinaryReader): FileInfo;
}

export namespace FileInfo {
  export type AsObject = {
    identity: string,
    hash: string,
    userIdentity: number,
    path: string,
    name: string,
    ext: string,
    size: number,
    mime: string,
    deleted: boolean,
    hidden: boolean,
    label: number,
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
    downloadAddress: string,
    lockTime: number,
    children: number,
    childrenTotal: number,
    sticky: number,
  }
}

export class FileInfoListResponse extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): FileInfo | undefined;
  setParent(value?: FileInfo): void;

  clearDataList(): void;
  getDataList(): Array<FileInfo>;
  setDataList(value: Array<FileInfo>): void;
  addData(value?: FileInfo, index?: number): FileInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfoListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfoListResponse): FileInfoListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfoListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfoListResponse;
  static deserializeBinaryFromReader(message: FileInfoListResponse, reader: jspb.BinaryReader): FileInfoListResponse;
}

export namespace FileInfoListResponse {
  export type AsObject = {
    parent?: FileInfo.AsObject,
    dataList: Array<FileInfo.AsObject>,
  }
}

export class FileInfoListFilter extends jspb.Message {
  clearIdentityList(): void;
  getIdentityList(): Array<string>;
  setIdentityList(value: Array<string>): void;
  addIdentity(value: string, index?: number): string;

  clearTypeList(): void;
  getTypeList(): Array<number>;
  setTypeList(value: Array<number>): void;
  addType(value: number, index?: number): number;

  getDirectory(): number;
  setDirectory(value: number): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfoListFilter.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfoListFilter): FileInfoListFilter.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfoListFilter, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfoListFilter;
  static deserializeBinaryFromReader(message: FileInfoListFilter, reader: jspb.BinaryReader): FileInfoListFilter;
}

export namespace FileInfoListFilter {
  export type AsObject = {
    identityList: Array<string>,
    typeList: Array<number>,
    directory: number,
    name: string,
  }
}

export class FileInfoListRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

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
  getFilter(): FileInfoListFilter | undefined;
  setFilter(value?: FileInfoListFilter): void;

  getOp(): number;
  setOp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileInfoListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FileInfoListRequest): FileInfoListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileInfoListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileInfoListRequest;
  static deserializeBinaryFromReader(message: FileInfoListRequest, reader: jspb.BinaryReader): FileInfoListRequest;
}

export namespace FileInfoListRequest {
  export type AsObject = {
    identity: string,
    userIdentity: number,
    path: string,
    listInfo?: common_common_entity_pb.ListInfo.AsObject,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: FileInfoListFilter.AsObject,
    op: number,
  }
}

