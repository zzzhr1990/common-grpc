// package: services
// file: file/userfile.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

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

  getMime(): string;
  setMime(value: string): void;

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
    mime: string,
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

export class UserFilePageRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getPage(): number;
  setPage(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): UserFile | undefined;
  setFilter(value?: UserFile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFilePageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserFilePageRequest): UserFilePageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFilePageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFilePageRequest;
  static deserializeBinaryFromReader(message: UserFilePageRequest, reader: jspb.BinaryReader): UserFilePageRequest;
}

export namespace UserFilePageRequest {
  export type AsObject = {
    identity: string,
    userIdentity: number,
    path: string,
    page: number,
    pageSize: number,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: UserFile.AsObject,
  }
}

export class UserFileListRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getStart(): number;
  setStart(value: number): void;

  getLimit(): number;
  setLimit(value: number): void;

  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): UserFile | undefined;
  setFilter(value?: UserFile): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFileListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UserFileListRequest): UserFileListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFileListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFileListRequest;
  static deserializeBinaryFromReader(message: UserFileListRequest, reader: jspb.BinaryReader): UserFileListRequest;
}

export namespace UserFileListRequest {
  export type AsObject = {
    identity: string,
    userIdentity: number,
    path: string,
    start: number,
    limit: number,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: UserFile.AsObject,
  }
}

export class UserFileListResponse extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearFileList(): void;
  getFileList(): Array<UserFile>;
  setFileList(value: Array<UserFile>): void;
  addFile(value?: UserFile, index?: number): UserFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFileListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserFileListResponse): UserFileListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFileListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFileListResponse;
  static deserializeBinaryFromReader(message: UserFileListResponse, reader: jspb.BinaryReader): UserFileListResponse;
}

export namespace UserFileListResponse {
  export type AsObject = {
    parent?: UserFile.AsObject,
    fileList: Array<UserFile.AsObject>,
  }
}

export class UserFilePageResponse extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearFileList(): void;
  getFileList(): Array<UserFile>;
  setFileList(value: Array<UserFile>): void;
  addFile(value?: UserFile, index?: number): UserFile;

  hasPageInfo(): boolean;
  clearPageInfo(): void;
  getPageInfo(): common_common_entity_pb.PageInfo | undefined;
  setPageInfo(value?: common_common_entity_pb.PageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFilePageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UserFilePageResponse): UserFilePageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFilePageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFilePageResponse;
  static deserializeBinaryFromReader(message: UserFilePageResponse, reader: jspb.BinaryReader): UserFilePageResponse;
}

export namespace UserFilePageResponse {
  export type AsObject = {
    parent?: UserFile.AsObject,
    fileList: Array<UserFile.AsObject>,
    pageInfo?: common_common_entity_pb.PageInfo.AsObject,
  }
}

