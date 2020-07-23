// package: services
// file: store/cloudstore.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class WcsUploadToken extends jspb.Message { 
    getExists(): boolean;
    setExists(value: boolean): WcsUploadToken;

    getKey(): string;
    setKey(value: string): WcsUploadToken;

    getToken(): string;
    setToken(value: string): WcsUploadToken;

    getPartUploadUrl(): string;
    setPartUploadUrl(value: string): WcsUploadToken;

    getDirectUploadUrl(): string;
    setDirectUploadUrl(value: string): WcsUploadToken;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): WcsUploadToken.AsObject;
    static toObject(includeInstance: boolean, msg: WcsUploadToken): WcsUploadToken.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: WcsUploadToken, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): WcsUploadToken;
    static deserializeBinaryFromReader(message: WcsUploadToken, reader: jspb.BinaryReader): WcsUploadToken;
}

export namespace WcsUploadToken {
    export type AsObject = {
        exists: boolean,
        key: string,
        token: string,
        partUploadUrl: string,
        directUploadUrl: string,
    }
}

export class UploadTokenRequest extends jspb.Message { 
    getType(): string;
    setType(value: string): UploadTokenRequest;

    getKey(): string;
    setKey(value: string): UploadTokenRequest;

    getUserIdentity(): number;
    setUserIdentity(value: number): UploadTokenRequest;

    getHash(): string;
    setHash(value: string): UploadTokenRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UploadTokenRequest.AsObject;
    static toObject(includeInstance: boolean, msg: UploadTokenRequest): UploadTokenRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UploadTokenRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UploadTokenRequest;
    static deserializeBinaryFromReader(message: UploadTokenRequest, reader: jspb.BinaryReader): UploadTokenRequest;
}

export namespace UploadTokenRequest {
    export type AsObject = {
        type: string,
        key: string,
        userIdentity: number,
        hash: string,
    }
}

export class CloudStore extends jspb.Message { 
    getHash(): string;
    setHash(value: string): CloudStore;

    getSize(): number;
    setSize(value: number): CloudStore;

    getMime(): string;
    setMime(value: string): CloudStore;

    getUploadUser(): number;
    setUploadUser(value: number): CloudStore;

    getCtime(): number;
    setCtime(value: number): CloudStore;

    getOriginalFilename(): string;
    setOriginalFilename(value: string): CloudStore;

    getStore(): number;
    setStore(value: number): CloudStore;

    getKey(): string;
    setKey(value: string): CloudStore;

    getColdKey(): string;
    setColdKey(value: string): CloudStore;

    getType(): number;
    setType(value: number): CloudStore;

    getPreview(): boolean;
    setPreview(value: boolean): CloudStore;

    getPreviewType(): number;
    setPreviewType(value: number): CloudStore;

    getFlag(): number;
    setFlag(value: number): CloudStore;

    getStatus(): number;
    setStatus(value: number): CloudStore;

    getFetchTime(): number;
    setFetchTime(value: number): CloudStore;

    getMd5(): string;
    setMd5(value: string): CloudStore;

    getSha1(): string;
    setSha1(value: string): CloudStore;

    getDownloadAddress(): string;
    setDownloadAddress(value: string): CloudStore;

    getRef(): number;
    setRef(value: number): CloudStore;

    getLastDown(): number;
    setLastDown(value: number): CloudStore;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStore.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStore): CloudStore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStore;
    static deserializeBinaryFromReader(message: CloudStore, reader: jspb.BinaryReader): CloudStore;
}

export namespace CloudStore {
    export type AsObject = {
        hash: string,
        size: number,
        mime: string,
        uploadUser: number,
        ctime: number,
        originalFilename: string,
        store: number,
        key: string,
        coldKey: string,
        type: number,
        preview: boolean,
        previewType: number,
        flag: number,
        status: number,
        fetchTime: number,
        md5: string,
        sha1: string,
        downloadAddress: string,
        ref: number,
        lastDown: number,
    }
}

export class CloudStoreList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<CloudStore>;
    setDataList(value: Array<CloudStore>): CloudStoreList;
    addData(value?: CloudStore, index?: number): CloudStore;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): CloudStoreList.AsObject;
    static toObject(includeInstance: boolean, msg: CloudStoreList): CloudStoreList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: CloudStoreList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): CloudStoreList;
    static deserializeBinaryFromReader(message: CloudStoreList, reader: jspb.BinaryReader): CloudStoreList;
}

export namespace CloudStoreList {
    export type AsObject = {
        dataList: Array<CloudStore.AsObject>,
    }
}
