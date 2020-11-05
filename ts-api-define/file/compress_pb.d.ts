// package: services
// file: file/compress.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class CreateZipDownloadRequest extends jspb.Message { 
    clearIdentityList(): void;
    getIdentityList(): Array<string>;
    setIdentityList(value: Array<string>): CreateZipDownloadRequest;
    addIdentity(value: string, index?: number): string;

    clearPathList(): void;
    getPathList(): Array<string>;
    setPathList(value: Array<string>): CreateZipDownloadRequest;
    addPath(value: string, index?: number): string;

    getUserIdentity(): number;
    setUserIdentity(value: number): CreateZipDownloadRequest;

    getPassword(): string;
    setPassword(value: string): CreateZipDownloadRequest;

    getOp(): number;
    setOp(value: number): CreateZipDownloadRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CreateZipDownloadRequest.AsObject;
    static toObject(includeInstance: boolean, msg: CreateZipDownloadRequest): CreateZipDownloadRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CreateZipDownloadRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CreateZipDownloadRequest;
    static deserializeBinaryFromReader(message: CreateZipDownloadRequest, reader: jspb.BinaryReader): CreateZipDownloadRequest;
}

export namespace CreateZipDownloadRequest {
    export type AsObject = {
        identityList: Array<string>,
        pathList: Array<string>,
        userIdentity: number,
        password: string,
        op: number,
    }
}

export class ZipDownloadInfo extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): ZipDownloadInfo;

    getUserIdentity(): number;
    setUserIdentity(value: number): ZipDownloadInfo;

    getCount(): string;
    setCount(value: string): ZipDownloadInfo;

    getSize(): string;
    setSize(value: string): ZipDownloadInfo;

    getDownloadAddress(): string;
    setDownloadAddress(value: string): ZipDownloadInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZipDownloadInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ZipDownloadInfo): ZipDownloadInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZipDownloadInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZipDownloadInfo;
    static deserializeBinaryFromReader(message: ZipDownloadInfo, reader: jspb.BinaryReader): ZipDownloadInfo;
}

export namespace ZipDownloadInfo {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        count: string,
        size: string,
        downloadAddress: string,
    }
}

export class ZipDownloadDetail extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): ZipDownloadDetail;

    getUserIdentity(): number;
    setUserIdentity(value: number): ZipDownloadDetail;

    getCount(): string;
    setCount(value: string): ZipDownloadDetail;

    getSize(): string;
    setSize(value: string): ZipDownloadDetail;

    clearDataList(): void;
    getDataList(): Array<SimpleFile>;
    setDataList(value: Array<SimpleFile>): ZipDownloadDetail;
    addData(value?: SimpleFile, index?: number): SimpleFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ZipDownloadDetail.AsObject;
    static toObject(includeInstance: boolean, msg: ZipDownloadDetail): ZipDownloadDetail.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ZipDownloadDetail, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ZipDownloadDetail;
    static deserializeBinaryFromReader(message: ZipDownloadDetail, reader: jspb.BinaryReader): ZipDownloadDetail;
}

export namespace ZipDownloadDetail {
    export type AsObject = {
        identity: string,
        userIdentity: number,
        count: string,
        size: string,
        dataList: Array<SimpleFile.AsObject>,
    }
}

export class SimpleFile extends jspb.Message { 
    getPath(): string;
    setPath(value: string): SimpleFile;

    getDirectory(): boolean;
    setDirectory(value: boolean): SimpleFile;

    getHash(): string;
    setHash(value: string): SimpleFile;

    getSize(): number;
    setSize(value: number): SimpleFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SimpleFile.AsObject;
    static toObject(includeInstance: boolean, msg: SimpleFile): SimpleFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SimpleFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SimpleFile;
    static deserializeBinaryFromReader(message: SimpleFile, reader: jspb.BinaryReader): SimpleFile;
}

export namespace SimpleFile {
    export type AsObject = {
        path: string,
        directory: boolean,
        hash: string,
        size: number,
    }
}
