// package: services
// file: file/userfile.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class DeleteInTrashRequest extends jspb.Message {
  clearSourceList(): void;
  getSourceList(): Array<string>;
  setSourceList(value: Array<string>): void;
  addSource(value: string, index?: number): string;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteInTrashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteInTrashRequest): DeleteInTrashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteInTrashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteInTrashRequest;
  static deserializeBinaryFromReader(message: DeleteInTrashRequest, reader: jspb.BinaryReader): DeleteInTrashRequest;
}

export namespace DeleteInTrashRequest {
  export type AsObject = {
    sourceList: Array<string>,
    useridentity: number,
  }
}

export class MoveBackRequest extends jspb.Message {
  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): UserFile | undefined;
  setDestination(value?: UserFile): void;

  clearSourceList(): void;
  getSourceList(): Array<string>;
  setSourceList(value: Array<string>): void;
  addSource(value: string, index?: number): string;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): MoveBackRequest.AsObject;
  static toObject(includeInstance: boolean, msg: MoveBackRequest): MoveBackRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: MoveBackRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): MoveBackRequest;
  static deserializeBinaryFromReader(message: MoveBackRequest, reader: jspb.BinaryReader): MoveBackRequest;
}

export namespace MoveBackRequest {
  export type AsObject = {
    destination?: UserFile.AsObject,
    sourceList: Array<string>,
    useridentity: number,
  }
}

export class UserFile extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

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

  getPreviewtype(): number;
  setPreviewtype(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  clearChildrenList(): void;
  getChildrenList(): Array<UserFile>;
  setChildrenList(value: Array<UserFile>): void;
  addChildren(value?: UserFile, index?: number): UserFile;

  getUniqueidentity(): string;
  setUniqueidentity(value: string): void;

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
    useridentity: number,
    path: string,
    name: string,
    ext: string,
    size: number,
    mime: string,
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
    previewtype: number,
    flag: number,
    childrenList: Array<UserFile.AsObject>,
    uniqueidentity: string,
    share: boolean,
  }
}

export class UserFileEx extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

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

  getPreviewtype(): number;
  setPreviewtype(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  clearChildrenList(): void;
  getChildrenList(): Array<UserFile>;
  setChildrenList(value: Array<UserFile>): void;
  addChildren(value?: UserFile, index?: number): UserFile;

  getDownloadaddress(): string;
  setDownloadaddress(value: string): void;

  getUniqueidentity(): string;
  setUniqueidentity(value: string): void;

  getShare(): boolean;
  setShare(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFileEx.AsObject;
  static toObject(includeInstance: boolean, msg: UserFileEx): UserFileEx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFileEx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFileEx;
  static deserializeBinaryFromReader(message: UserFileEx, reader: jspb.BinaryReader): UserFileEx;
}

export namespace UserFileEx {
  export type AsObject = {
    identity: string,
    hash: string,
    useridentity: number,
    path: string,
    name: string,
    ext: string,
    size: number,
    mime: string,
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
    previewtype: number,
    flag: number,
    childrenList: Array<UserFile.AsObject>,
    downloadaddress: string,
    uniqueidentity: string,
    share: boolean,
  }
}

export class UserFileOperation extends jspb.Message {
  clearSourceList(): void;
  getSourceList(): Array<UserFile>;
  setSourceList(value: Array<UserFile>): void;
  addSource(value?: UserFile, index?: number): UserFile;

  hasDestination(): boolean;
  clearDestination(): void;
  getDestination(): UserFile | undefined;
  setDestination(value?: UserFile): void;

  getOperationcode(): number;
  setOperationcode(value: number): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFileOperation.AsObject;
  static toObject(includeInstance: boolean, msg: UserFileOperation): UserFileOperation.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFileOperation, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFileOperation;
  static deserializeBinaryFromReader(message: UserFileOperation, reader: jspb.BinaryReader): UserFileOperation;
}

export namespace UserFileOperation {
  export type AsObject = {
    sourceList: Array<UserFile.AsObject>,
    destination?: UserFile.AsObject,
    operationcode: number,
    useridentity: number,
  }
}

export class UserFilePage extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearListList(): void;
  getListList(): Array<UserFile>;
  setListList(value: Array<UserFile>): void;
  addList(value?: UserFile, index?: number): UserFile;

  getTotalcount(): number;
  setTotalcount(value: number): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFilePage.AsObject;
  static toObject(includeInstance: boolean, msg: UserFilePage): UserFilePage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFilePage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFilePage;
  static deserializeBinaryFromReader(message: UserFilePage, reader: jspb.BinaryReader): UserFilePage;
}

export namespace UserFilePage {
  export type AsObject = {
    parent?: UserFile.AsObject,
    listList: Array<UserFile.AsObject>,
    totalcount: number,
    totalpage: number,
    page: number,
    pagesize: number,
  }
}

export class DeleteFilesRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  clearFilesidentityList(): void;
  getFilesidentityList(): Array<string>;
  setFilesidentityList(value: Array<string>): void;
  addFilesidentity(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteFilesRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteFilesRequest): DeleteFilesRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteFilesRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteFilesRequest;
  static deserializeBinaryFromReader(message: DeleteFilesRequest, reader: jspb.BinaryReader): DeleteFilesRequest;
}

export namespace DeleteFilesRequest {
  export type AsObject = {
    useridentity: number,
    filesidentityList: Array<string>,
  }
}

export class UserFileList extends jspb.Message {
  hasParent(): boolean;
  clearParent(): void;
  getParent(): UserFile | undefined;
  setParent(value?: UserFile): void;

  clearListList(): void;
  getListList(): Array<UserFile>;
  setListList(value: Array<UserFile>): void;
  addList(value?: UserFile, index?: number): UserFile;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UserFileList.AsObject;
  static toObject(includeInstance: boolean, msg: UserFileList): UserFileList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UserFileList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UserFileList;
  static deserializeBinaryFromReader(message: UserFileList, reader: jspb.BinaryReader): UserFileList;
}

export namespace UserFileList {
  export type AsObject = {
    parent?: UserFile.AsObject,
    listList: Array<UserFile.AsObject>,
  }
}

export class TrashInfo extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getName(): string;
  setName(value: string): void;

  getSource(): string;
  setSource(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getDeletetime(): number;
  setDeletetime(value: number): void;

  getType(): number;
  setType(value: number): void;

  getDirectory(): boolean;
  setDirectory(value: boolean): void;

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
    name: string,
    source: string,
    size: number,
    deletetime: number,
    type: number,
    directory: boolean,
  }
}

export class TrashList extends jspb.Message {
  clearListList(): void;
  getListList(): Array<TrashInfo>;
  setListList(value: Array<TrashInfo>): void;
  addList(value?: TrashInfo, index?: number): TrashInfo;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrashList.AsObject;
  static toObject(includeInstance: boolean, msg: TrashList): TrashList.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrashList, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrashList;
  static deserializeBinaryFromReader(message: TrashList, reader: jspb.BinaryReader): TrashList;
}

export namespace TrashList {
  export type AsObject = {
    listList: Array<TrashInfo.AsObject>,
  }
}

export class TrashPage extends jspb.Message {
  clearListList(): void;
  getListList(): Array<TrashInfo>;
  setListList(value: Array<TrashInfo>): void;
  addList(value?: TrashInfo, index?: number): TrashInfo;

  getTotalcount(): number;
  setTotalcount(value: number): void;

  getTotalpage(): number;
  setTotalpage(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): TrashPage.AsObject;
  static toObject(includeInstance: boolean, msg: TrashPage): TrashPage.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: TrashPage, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): TrashPage;
  static deserializeBinaryFromReader(message: TrashPage, reader: jspb.BinaryReader): TrashPage;
}

export namespace TrashPage {
  export type AsObject = {
    listList: Array<TrashInfo.AsObject>,
    totalcount: number,
    totalpage: number,
    page: number,
    pagesize: number,
  }
}

export class PageTrashRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  getOrderby(): number;
  setOrderby(value: number): void;

  getPage(): number;
  setPage(value: number): void;

  getPagesize(): number;
  setPagesize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageTrashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageTrashRequest): PageTrashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageTrashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageTrashRequest;
  static deserializeBinaryFromReader(message: PageTrashRequest, reader: jspb.BinaryReader): PageTrashRequest;
}

export namespace PageTrashRequest {
  export type AsObject = {
    useridentity: number,
    orderby: number,
    page: number,
    pagesize: number,
  }
}

export class PageUserFileRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getPath(): string;
  setPath(value: string): void;

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

  getType(): number;
  setType(value: number): void;

  getShare(): boolean;
  setShare(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageUserFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PageUserFileRequest): PageUserFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageUserFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageUserFileRequest;
  static deserializeBinaryFromReader(message: PageUserFileRequest, reader: jspb.BinaryReader): PageUserFileRequest;
}

export namespace PageUserFileRequest {
  export type AsObject = {
    identity: string,
    path: string,
    useridentity: number,
    orderby: number,
    page: number,
    pagesize: number,
    filter: number,
    type: number,
    share: boolean,
    name: string,
  }
}

export class ListUserFileRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getPath(): string;
  setPath(value: string): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getOrderby(): number;
  setOrderby(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getListsize(): number;
  setListsize(value: number): void;

  getFilter(): number;
  setFilter(value: number): void;

  getType(): number;
  setType(value: number): void;

  getShare(): boolean;
  setShare(value: boolean): void;

  getName(): string;
  setName(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListUserFileRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListUserFileRequest): ListUserFileRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListUserFileRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListUserFileRequest;
  static deserializeBinaryFromReader(message: ListUserFileRequest, reader: jspb.BinaryReader): ListUserFileRequest;
}

export namespace ListUserFileRequest {
  export type AsObject = {
    identity: string,
    path: string,
    useridentity: number,
    orderby: number,
    start: number,
    listsize: number,
    filter: number,
    type: number,
    share: boolean,
    name: string,
  }
}

export class ListTrashRequest extends jspb.Message {
  getUseridentity(): number;
  setUseridentity(value: number): void;

  getOrderby(): number;
  setOrderby(value: number): void;

  getStart(): number;
  setStart(value: number): void;

  getListsize(): number;
  setListsize(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListTrashRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListTrashRequest): ListTrashRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListTrashRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListTrashRequest;
  static deserializeBinaryFromReader(message: ListTrashRequest, reader: jspb.BinaryReader): ListTrashRequest;
}

export namespace ListTrashRequest {
  export type AsObject = {
    useridentity: number,
    orderby: number,
    start: number,
    listsize: number,
  }
}

export class UploadTokenResponse extends jspb.Message {
  getUploadtoken(): string;
  setUploadtoken(value: string): void;

  getType(): string;
  setType(value: string): void;

  getUploadurl(): string;
  setUploadurl(value: string): void;

  getFilepath(): string;
  setFilepath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UploadTokenResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UploadTokenResponse): UploadTokenResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UploadTokenResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UploadTokenResponse;
  static deserializeBinaryFromReader(message: UploadTokenResponse, reader: jspb.BinaryReader): UploadTokenResponse;
}

export namespace UploadTokenResponse {
  export type AsObject = {
    uploadtoken: string,
    type: string,
    uploadurl: string,
    filepath: string,
  }
}

export class FileHistoryResponse extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  clearHistoryList(): void;
  getHistoryList(): Array<FileHistory>;
  setHistoryList(value: Array<FileHistory>): void;
  addHistory(value?: FileHistory, index?: number): FileHistory;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHistoryResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FileHistoryResponse): FileHistoryResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileHistoryResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHistoryResponse;
  static deserializeBinaryFromReader(message: FileHistoryResponse, reader: jspb.BinaryReader): FileHistoryResponse;
}

export namespace FileHistoryResponse {
  export type AsObject = {
    identity: string,
    historyList: Array<FileHistory.AsObject>,
  }
}

export class FileHistory extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHistory.AsObject;
  static toObject(includeInstance: boolean, msg: FileHistory): FileHistory.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileHistory, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHistory;
  static deserializeBinaryFromReader(message: FileHistory, reader: jspb.BinaryReader): FileHistory;
}

export namespace FileHistory {
  export type AsObject = {
    hash: string,
    size: number,
    ctime: number,
    version: number,
  }
}

export class FileHistoryEx extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getSize(): number;
  setSize(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  getDownloadaddress(): string;
  setDownloadaddress(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FileHistoryEx.AsObject;
  static toObject(includeInstance: boolean, msg: FileHistoryEx): FileHistoryEx.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FileHistoryEx, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FileHistoryEx;
  static deserializeBinaryFromReader(message: FileHistoryEx, reader: jspb.BinaryReader): FileHistoryEx;
}

export namespace FileHistoryEx {
  export type AsObject = {
    hash: string,
    size: number,
    ctime: number,
    version: number,
    downloadaddress: string,
  }
}

