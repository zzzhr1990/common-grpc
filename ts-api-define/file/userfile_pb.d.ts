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

export class TrashInfo extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  getPathIdentity(): string;
  setPathIdentity(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getName(): string;
  setName(value: string): void;

  getType(): number;
  setType(value: number): void;

  getMime(): string;
  setMime(value: string): void;

  getAddon(): string;
  setAddon(value: string): void;

  getLocking(): boolean;
  setLocking(value: boolean): void;

  getOp(): number;
  setOp(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrashInfo.AsObject;
  static toObject(includeInstance: boolean, msg: TrashInfo): TrashInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrashInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrashInfo;
  static deserializeBinaryFromReader(message: TrashInfo, reader: jspb.BinaryReader): TrashInfo;
}

export namespace TrashInfo {
  export type AsObject = {
    identity: string,
    userIdentity: number,
    path: string,
    pathIdentity: string,
    createTime: number,
    name: string,
    type: number,
    mime: string,
    addon: string,
    locking: boolean,
    op: number,
  }
}

export class UserFilePageRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  hasPageInfo(): boolean;
  clearPageInfo(): void;
  getPageInfo(): common_common_entity_pb.PageInfo | undefined;
  setPageInfo(value?: common_common_entity_pb.PageInfo): void;

  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): FilterRequest | undefined;
  setFilter(value?: FilterRequest): void;

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
    pageInfo?: common_common_entity_pb.PageInfo.AsObject,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: FilterRequest.AsObject,
  }
}

export class CommonPageRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  hasPageInfo(): boolean;
  clearPageInfo(): void;
  getPageInfo(): common_common_entity_pb.PageInfo | undefined;
  setPageInfo(value?: common_common_entity_pb.PageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonPageRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommonPageRequest): CommonPageRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonPageRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonPageRequest;
  static deserializeBinaryFromReader(message: CommonPageRequest, reader: jspb.BinaryReader): CommonPageRequest;
}

export namespace CommonPageRequest {
  export type AsObject = {
    userIdentity: number,
    pageInfo?: common_common_entity_pb.PageInfo.AsObject,
  }
}

export class FilterRequest extends jspb.Message {
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

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FilterRequest): FilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FilterRequest;
  static deserializeBinaryFromReader(message: FilterRequest, reader: jspb.BinaryReader): FilterRequest;
}

export namespace FilterRequest {
  export type AsObject = {
    identityList: Array<string>,
    typeList: Array<number>,
    directory: number,
  }
}

export class BathFileRequest extends jspb.Message {
  clearIdentityList(): void;
  getIdentityList(): Array<string>;
  setIdentityList(value: Array<string>): void;
  addIdentity(value: string, index?: number): string;

  clearPathList(): void;
  getPathList(): Array<string>;
  setPathList(value: Array<string>): void;
  addPath(value: string, index?: number): string;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  getDestIdentity(): number;
  setDestIdentity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BathFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: BathFileRequest): BathFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BathFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BathFileRequest;
  static deserializeBinaryFromReader(message: BathFileRequest, reader: jspb.BinaryReader): BathFileRequest;
}

export namespace BathFileRequest {
  export type AsObject = {
    identityList: Array<string>,
    pathList: Array<string>,
    userIdentity: number,
    destIdentity: number,
  }
}

export class MqRequest extends jspb.Message {
  hasSource(): boolean;
  clearSource(): void;
  getSource(): UserFile | undefined;
  setSource(value?: UserFile): void;

  hasDest(): boolean;
  clearDest(): void;
  getDest(): UserFile | undefined;
  setDest(value?: UserFile): void;

  getType(): number;
  setType(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MqRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MqRequest): MqRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MqRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MqRequest;
  static deserializeBinaryFromReader(message: MqRequest, reader: jspb.BinaryReader): MqRequest;
}

export namespace MqRequest {
  export type AsObject = {
    source?: UserFile.AsObject,
    dest?: UserFile.AsObject,
    type: number,
  }
}

export class UserFileListRequest extends jspb.Message {
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
  getFilter(): FilterRequest | undefined;
  setFilter(value?: FilterRequest): void;

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
    listInfo?: common_common_entity_pb.ListInfo.AsObject,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: FilterRequest.AsObject,
  }
}

export class CommonListRequest extends jspb.Message {
  getUserIdentity(): number;
  setUserIdentity(value: number): void;

  hasListInfo(): boolean;
  clearListInfo(): void;
  getListInfo(): common_common_entity_pb.ListInfo | undefined;
  setListInfo(value?: common_common_entity_pb.ListInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CommonListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CommonListRequest): CommonListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CommonListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CommonListRequest;
  static deserializeBinaryFromReader(message: CommonListRequest, reader: jspb.BinaryReader): CommonListRequest;
}

export namespace CommonListRequest {
  export type AsObject = {
    userIdentity: number,
    listInfo?: common_common_entity_pb.ListInfo.AsObject,
  }
}

export class UserFileListResponse extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearDataList(): void;
  getDataList(): Array<UserFile>;
  setDataList(value: Array<UserFile>): void;
  addData(value?: UserFile, index?: number): UserFile;

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
    dataList: Array<UserFile.AsObject>,
  }
}

export class UserFilePageResponse extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearDataList(): void;
  getDataList(): Array<UserFile>;
  setDataList(value: Array<UserFile>): void;
  addData(value?: UserFile, index?: number): UserFile;

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
    dataList: Array<UserFile.AsObject>,
    pageInfo?: common_common_entity_pb.PageInfo.AsObject,
  }
}

export class TrashListResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<TrashInfo>;
  setDataList(value: Array<TrashInfo>): void;
  addData(value?: TrashInfo, index?: number): TrashInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrashListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrashListResponse): TrashListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrashListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrashListResponse;
  static deserializeBinaryFromReader(message: TrashListResponse, reader: jspb.BinaryReader): TrashListResponse;
}

export namespace TrashListResponse {
  export type AsObject = {
    dataList: Array<TrashInfo.AsObject>,
  }
}

export class TrashPageResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<TrashInfo>;
  setDataList(value: Array<TrashInfo>): void;
  addData(value?: TrashInfo, index?: number): TrashInfo;

  hasPageInfo(): boolean;
  clearPageInfo(): void;
  getPageInfo(): common_common_entity_pb.PageInfo | undefined;
  setPageInfo(value?: common_common_entity_pb.PageInfo): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrashPageResponse.AsObject;
  static toObject(includeInstance: boolean, msg: TrashPageResponse): TrashPageResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrashPageResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrashPageResponse;
  static deserializeBinaryFromReader(message: TrashPageResponse, reader: jspb.BinaryReader): TrashPageResponse;
}

export namespace TrashPageResponse {
  export type AsObject = {
    dataList: Array<TrashInfo.AsObject>,
    pageInfo?: common_common_entity_pb.PageInfo.AsObject,
  }
}

