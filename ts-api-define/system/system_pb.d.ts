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

    getAddress(): string;
    setAddress(value: string): ClientInfo;


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
        address: string,
    }
}

export class AddressInfo extends jspb.Message { 
    getAddress(): string;
    setAddress(value: string): AddressInfo;

    getCountryName(): string;
    setCountryName(value: string): AddressInfo;

    getRegionName(): string;
    setRegionName(value: string): AddressInfo;

    getCityName(): string;
    setCityName(value: string): AddressInfo;

    getOwnerDomain(): string;
    setOwnerDomain(value: string): AddressInfo;

    getIspDomain(): string;
    setIspDomain(value: string): AddressInfo;

    getLatitude(): string;
    setLatitude(value: string): AddressInfo;

    getLongitude(): string;
    setLongitude(value: string): AddressInfo;

    getTimezone(): string;
    setTimezone(value: string): AddressInfo;

    getUtcOffset(): string;
    setUtcOffset(value: string): AddressInfo;

    getChinaAdminCode(): string;
    setChinaAdminCode(value: string): AddressInfo;

    getIddCode(): string;
    setIddCode(value: string): AddressInfo;

    getCountryCode(): string;
    setCountryCode(value: string): AddressInfo;

    getContinentCode(): string;
    setContinentCode(value: string): AddressInfo;

    getIdc(): string;
    setIdc(value: string): AddressInfo;

    getBaseStation(): string;
    setBaseStation(value: string): AddressInfo;

    getCountryCode3(): string;
    setCountryCode3(value: string): AddressInfo;

    getEuropeanUnion(): string;
    setEuropeanUnion(value: string): AddressInfo;

    getCurrencyCode(): string;
    setCurrencyCode(value: string): AddressInfo;

    getCurrencyName(): string;
    setCurrencyName(value: string): AddressInfo;

    getAnycast(): string;
    setAnycast(value: string): AddressInfo;

    getLine(): string;
    setLine(value: string): AddressInfo;

    getRoute(): string;
    setRoute(value: string): AddressInfo;

    getAsn(): string;
    setAsn(value: string): AddressInfo;

    getAreaCode(): string;
    setAreaCode(value: string): AddressInfo;

    getUsageType(): string;
    setUsageType(value: string): AddressInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AddressInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AddressInfo): AddressInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AddressInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AddressInfo;
    static deserializeBinaryFromReader(message: AddressInfo, reader: jspb.BinaryReader): AddressInfo;
}

export namespace AddressInfo {
    export type AsObject = {
        address: string,
        countryName: string,
        regionName: string,
        cityName: string,
        ownerDomain: string,
        ispDomain: string,
        latitude: string,
        longitude: string,
        timezone: string,
        utcOffset: string,
        chinaAdminCode: string,
        iddCode: string,
        countryCode: string,
        continentCode: string,
        idc: string,
        baseStation: string,
        countryCode3: string,
        europeanUnion: string,
        currencyCode: string,
        currencyName: string,
        anycast: string,
        line: string,
        route: string,
        asn: string,
        areaCode: string,
        usageType: string,
    }
}

export class AppInfo extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): AppInfo;

    getType(): number;
    setType(value: number): AppInfo;

    getDestinationPrefix(): string;
    setDestinationPrefix(value: string): AppInfo;

    getDescription(): string;
    setDescription(value: string): AppInfo;

    getCallbackAddress(): string;
    setCallbackAddress(value: string): AppInfo;

    getSecret(): string;
    setSecret(value: string): AppInfo;

    getCreateTime(): number;
    setCreateTime(value: number): AppInfo;

    getPermission(): number;
    setPermission(value: number): AppInfo;

    getTypeString(): string;
    setTypeString(value: string): AppInfo;

    getRate(): number;
    setRate(value: number): AppInfo;

    getAction(): number;
    setAction(value: number): AppInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): AppInfo.AsObject;
    static toObject(includeInstance: boolean, msg: AppInfo): AppInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: AppInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): AppInfo;
    static deserializeBinaryFromReader(message: AppInfo, reader: jspb.BinaryReader): AppInfo;
}

export namespace AppInfo {
    export type AsObject = {
        identity: string,
        type: number,
        destinationPrefix: string,
        description: string,
        callbackAddress: string,
        secret: string,
        createTime: number,
        permission: number,
        typeString: string,
        rate: number,
        action: number,
    }
}
