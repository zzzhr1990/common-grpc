// package: services
// file: common/common_entity.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class BoolEntity extends jspb.Message { 
    getData(): boolean;
    setData(value: boolean): BoolEntity;


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
    setName(value: string): OrderByRequest;

    getAsc(): boolean;
    setAsc(value: boolean): OrderByRequest;


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
    setPage(value: number): PageInfo;

    getPageSize(): number;
    setPageSize(value: number): PageInfo;

    getTotalPage(): number;
    setTotalPage(value: number): PageInfo;

    getTotalRecord(): number;
    setTotalRecord(value: number): PageInfo;


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

export class ListInfo extends jspb.Message { 
    getStart(): number;
    setStart(value: number): ListInfo;

    getLimit(): number;
    setLimit(value: number): ListInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ListInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ListInfo): ListInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ListInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ListInfo;
    static deserializeBinaryFromReader(message: ListInfo, reader: jspb.BinaryReader): ListInfo;
}

export namespace ListInfo {
    export type AsObject = {
        start: number,
        limit: number,
    }
}

export class StringEntity extends jspb.Message { 
    getData(): string;
    setData(value: string): StringEntity;


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
    setDataList(value: Array<string>): StringListEntity;
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
    setData(value: number): Int32Entity;


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
    setDataList(value: Array<number>): Int32ListEntity;
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
    setData(value: number): Int64Entity;


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

export class Int64ListEntity extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<number>;
    setDataList(value: Array<number>): Int64ListEntity;
    addData(value: number, index?: number): number;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Int64ListEntity.AsObject;
    static toObject(includeInstance: boolean, msg: Int64ListEntity): Int64ListEntity.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Int64ListEntity, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Int64ListEntity;
    static deserializeBinaryFromReader(message: Int64ListEntity, reader: jspb.BinaryReader): Int64ListEntity;
}

export namespace Int64ListEntity {
    export type AsObject = {
        dataList: Array<number>,
    }
}

export class Uint32Entity extends jspb.Message { 
    getData(): number;
    setData(value: number): Uint32Entity;


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
    setData(value: number): Uint64Entity;


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

export class BatchTaskResult extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): BatchTaskResult;

    getData(): number;
    setData(value: number): BatchTaskResult;

    getAsync(): boolean;
    setAsync(value: boolean): BatchTaskResult;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): BatchTaskResult.AsObject;
    static toObject(includeInstance: boolean, msg: BatchTaskResult): BatchTaskResult.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: BatchTaskResult, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): BatchTaskResult;
    static deserializeBinaryFromReader(message: BatchTaskResult, reader: jspb.BinaryReader): BatchTaskResult;
}

export namespace BatchTaskResult {
    export type AsObject = {
        identity: string,
        data: number,
        async: boolean,
    }
}
