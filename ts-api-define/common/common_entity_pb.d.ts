// package: services
// file: common/common_entity.proto

import * as jspb from "google-protobuf";

export class BoolEntity extends jspb.Message {
  getData(): boolean;
  setData(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): BoolEntity.AsObject;
  static toObject(includeInstance: boolean, msg: BoolEntity): BoolEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: BoolEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): BoolEntity;
  static deserializeBinaryFromReader(message: BoolEntity, reader: jspb.BinaryReader): BoolEntity;
}

export namespace BoolEntity {
  export type AsObject = {
    data: boolean,
  }
}

export class OrderByRequest extends jspb.Message {
  getName(): string;
  setName(value: string): void;

  getAsc(): boolean;
  setAsc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderByRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderByRequest): OrderByRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderByRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderByRequest;
  static deserializeBinaryFromReader(message: OrderByRequest, reader: jspb.BinaryReader): OrderByRequest;
}

export namespace OrderByRequest {
  export type AsObject = {
    name: string,
    asc: boolean,
  }
}

export class PageInfo extends jspb.Message {
  getPage(): number;
  setPage(value: number): void;

  getPageSize(): number;
  setPageSize(value: number): void;

  getTotalPage(): number;
  setTotalPage(value: number): void;

  getTotalRecord(): number;
  setTotalRecord(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PageInfo.AsObject;
  static toObject(includeInstance: boolean, msg: PageInfo): PageInfo.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PageInfo, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PageInfo;
  static deserializeBinaryFromReader(message: PageInfo, reader: jspb.BinaryReader): PageInfo;
}

export namespace PageInfo {
  export type AsObject = {
    page: number,
    pageSize: number,
    totalPage: number,
    totalRecord: number,
  }
}

export class StringEntity extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringEntity.AsObject;
  static toObject(includeInstance: boolean, msg: StringEntity): StringEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringEntity;
  static deserializeBinaryFromReader(message: StringEntity, reader: jspb.BinaryReader): StringEntity;
}

export namespace StringEntity {
  export type AsObject = {
    data: string,
  }
}

export class StringListEntity extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<string>;
  setDataList(value: Array<string>): void;
  addData(value: string, index?: number): string;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): StringListEntity.AsObject;
  static toObject(includeInstance: boolean, msg: StringListEntity): StringListEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: StringListEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): StringListEntity;
  static deserializeBinaryFromReader(message: StringListEntity, reader: jspb.BinaryReader): StringListEntity;
}

export namespace StringListEntity {
  export type AsObject = {
    dataList: Array<string>,
  }
}

export class Int32Entity extends jspb.Message {
  getData(): number;
  setData(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Int32Entity): Int32Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32Entity;
  static deserializeBinaryFromReader(message: Int32Entity, reader: jspb.BinaryReader): Int32Entity;
}

export namespace Int32Entity {
  export type AsObject = {
    data: number,
  }
}

export class Int32ListEntity extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<number>;
  setDataList(value: Array<number>): void;
  addData(value: number, index?: number): number;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int32ListEntity.AsObject;
  static toObject(includeInstance: boolean, msg: Int32ListEntity): Int32ListEntity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int32ListEntity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int32ListEntity;
  static deserializeBinaryFromReader(message: Int32ListEntity, reader: jspb.BinaryReader): Int32ListEntity;
}

export namespace Int32ListEntity {
  export type AsObject = {
    dataList: Array<number>,
  }
}

export class Int64Entity extends jspb.Message {
  getData(): number;
  setData(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Int64Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Int64Entity): Int64Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Int64Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Int64Entity;
  static deserializeBinaryFromReader(message: Int64Entity, reader: jspb.BinaryReader): Int64Entity;
}

export namespace Int64Entity {
  export type AsObject = {
    data: number,
  }
}

export class Uint32Entity extends jspb.Message {
  getData(): number;
  setData(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uint32Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Uint32Entity): Uint32Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uint32Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uint32Entity;
  static deserializeBinaryFromReader(message: Uint32Entity, reader: jspb.BinaryReader): Uint32Entity;
}

export namespace Uint32Entity {
  export type AsObject = {
    data: number,
  }
}

export class Uint64Entity extends jspb.Message {
  getData(): number;
  setData(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Uint64Entity.AsObject;
  static toObject(includeInstance: boolean, msg: Uint64Entity): Uint64Entity.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Uint64Entity, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Uint64Entity;
  static deserializeBinaryFromReader(message: Uint64Entity, reader: jspb.BinaryReader): Uint64Entity;
}

export namespace Uint64Entity {
  export type AsObject = {
    data: number,
  }
}

