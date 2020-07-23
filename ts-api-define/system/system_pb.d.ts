// package: services
// file: system/system.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SystemInfo extends jspb.Message { 
    getRequestTime(): number;
    setRequestTime(value: number): SystemInfo;

    getRequestUser(): string;
    setRequestUser(value: string): SystemInfo;

    getServerName(): string;
    setServerName(value: string): SystemInfo;

    getServerTime(): number;
    setServerTime(value: number): SystemInfo;

    getAccessCount(): number;
    setAccessCount(value: number): SystemInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SystemInfo.AsObject;
    static toObject(includeInstance: boolean, msg: SystemInfo): SystemInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SystemInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SystemInfo;
    static deserializeBinaryFromReader(message: SystemInfo, reader: jspb.BinaryReader): SystemInfo;
}

export namespace SystemInfo {
    export type AsObject = {
        requestTime: number,
        requestUser: string,
        serverName: string,
        serverTime: number,
        accessCount: number,
    }
}

export class UpdateInfoList extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<UpdateInfo>;
    setDataList(value: Array<UpdateInfo>): UpdateInfoList;
    addData(value?: UpdateInfo, index?: number): UpdateInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInfoList.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInfoList): UpdateInfoList.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInfoList, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInfoList;
    static deserializeBinaryFromReader(message: UpdateInfoList, reader: jspb.BinaryReader): UpdateInfoList;
}

export namespace UpdateInfoList {
    export type AsObject = {
        dataList: Array<UpdateInfo.AsObject>,
    }
}

export class UpdateInfo extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): UpdateInfo;

    getNumberVersion(): number;
    setNumberVersion(value: number): UpdateInfo;

    getHash(): string;
    setHash(value: string): UpdateInfo;

    getForce(): boolean;
    setForce(value: boolean): UpdateInfo;

    getVersion(): string;
    setVersion(value: string): UpdateInfo;

    getPlatform(): string;
    setPlatform(value: string): UpdateInfo;

    getDebug(): boolean;
    setDebug(value: boolean): UpdateInfo;

    getLang(): string;
    setLang(value: string): UpdateInfo;

    getDownloadAddress(): string;
    setDownloadAddress(value: string): UpdateInfo;

    getStoreAddress(): string;
    setStoreAddress(value: string): UpdateInfo;

    getWebsiteAddress(): string;
    setWebsiteAddress(value: string): UpdateInfo;

    getTitle(): string;
    setTitle(value: string): UpdateInfo;

    getDescription(): string;
    setDescription(value: string): UpdateInfo;

    getCreateTime(): number;
    setCreateTime(value: number): UpdateInfo;

    getSize(): number;
    setSize(value: number): UpdateInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): UpdateInfo.AsObject;
    static toObject(includeInstance: boolean, msg: UpdateInfo): UpdateInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: UpdateInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): UpdateInfo;
    static deserializeBinaryFromReader(message: UpdateInfo, reader: jspb.BinaryReader): UpdateInfo;
}

export namespace UpdateInfo {
    export type AsObject = {
        identity: number,
        numberVersion: number,
        hash: string,
        force: boolean,
        version: string,
        platform: string,
        debug: boolean,
        lang: string,
        downloadAddress: string,
        storeAddress: string,
        websiteAddress: string,
        title: string,
        description: string,
        createTime: number,
        size: number,
    }
}

export class ClientInfo extends jspb.Message { 
    getClientName(): string;
    setClientName(value: string): ClientInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ClientInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ClientInfo): ClientInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ClientInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ClientInfo;
    static deserializeBinaryFromReader(message: ClientInfo, reader: jspb.BinaryReader): ClientInfo;
}

export namespace ClientInfo {
    export type AsObject = {
        clientName: string,
    }
}
