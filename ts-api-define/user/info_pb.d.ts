// package: services
// file: user/info.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class User extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): User;

    getName(): string;
    setName(value: string): User;

    getPassword(): string;
    setPassword(value: string): User;

    getSalt(): string;
    setSalt(value: string): User;

    getCountryCode(): string;
    setCountryCode(value: string): User;

    getPhone(): string;
    setPhone(value: string): User;

    getEmail(): string;
    setEmail(value: string): User;

    getCreateTime(): number;
    setCreateTime(value: number): User;

    getCreateAddr(): string;
    setCreateAddr(value: string): User;

    getIcon(): string;
    setIcon(value: string): User;

    getSpaceUsed(): number;
    setSpaceUsed(value: number): User;

    getSpaceCapacity(): number;
    setSpaceCapacity(value: number): User;

    getType(): number;
    setType(value: number): User;

    getStatus(): number;
    setStatus(value: number): User;

    getVersion(): number;
    setVersion(value: number): User;

    getVip(): number;
    setVip(value: number): User;

    getVipExpireTime(): number;
    setVipExpireTime(value: number): User;

    getLastActivateTime(): number;
    setLastActivateTime(value: number): User;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): User.AsObject;
    static toObject(includeInstance: boolean, msg: User): User.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: User, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): User;
    static deserializeBinaryFromReader(message: User, reader: jspb.BinaryReader): User;
}

export namespace User {
    export type AsObject = {
        identity: number,
        name: string,
        password: string,
        salt: string,
        countryCode: string,
        phone: string,
        email: string,
        createTime: number,
        createAddr: string,
        icon: string,
        spaceUsed: number,
        spaceCapacity: number,
        type: number,
        status: number,
        version: number,
        vip: number,
        vipExpireTime: number,
        lastActivateTime: number,
    }
}

export class LaterAction extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): LaterAction;

    getType(): number;
    setType(value: number): LaterAction;

    getCreateTime(): number;
    setCreateTime(value: number): LaterAction;

    getExpireTime(): number;
    setExpireTime(value: number): LaterAction;

    getCancelToken(): string;
    setCancelToken(value: string): LaterAction;

    getConfirmToken(): string;
    setConfirmToken(value: string): LaterAction;

    getAddon(): string;
    setAddon(value: string): LaterAction;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): LaterAction.AsObject;
    static toObject(includeInstance: boolean, msg: LaterAction): LaterAction.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: LaterAction, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): LaterAction;
    static deserializeBinaryFromReader(message: LaterAction, reader: jspb.BinaryReader): LaterAction;
}

export namespace LaterAction {
    export type AsObject = {
        userIdentity: number,
        type: number,
        createTime: number,
        expireTime: number,
        cancelToken: string,
        confirmToken: string,
        addon: string,
    }
}

export class OauthInfo extends jspb.Message { 
    getAccessToken(): string;
    setAccessToken(value: string): OauthInfo;

    getRefreshToken(): string;
    setRefreshToken(value: string): OauthInfo;

    getExpiresIn(): number;
    setExpiresIn(value: number): OauthInfo;

    getUserIdentity(): number;
    setUserIdentity(value: number): OauthInfo;

    getScope(): string;
    setScope(value: string): OauthInfo;

    getAppIdentity(): string;
    setAppIdentity(value: string): OauthInfo;

    getAppName(): string;
    setAppName(value: string): OauthInfo;

    getLoginTime(): number;
    setLoginTime(value: number): OauthInfo;

    getLoginAddress(): string;
    setLoginAddress(value: string): OauthInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): OauthInfo.AsObject;
    static toObject(includeInstance: boolean, msg: OauthInfo): OauthInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: OauthInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): OauthInfo;
    static deserializeBinaryFromReader(message: OauthInfo, reader: jspb.BinaryReader): OauthInfo;
}

export namespace OauthInfo {
    export type AsObject = {
        accessToken: string,
        refreshToken: string,
        expiresIn: number,
        userIdentity: number,
        scope: string,
        appIdentity: string,
        appName: string,
        loginTime: number,
        loginAddress: string,
    }
}

export class SmsRequest extends jspb.Message { 
    getCountryCode(): string;
    setCountryCode(value: string): SmsRequest;

    getPhone(): string;
    setPhone(value: string): SmsRequest;

    getType(): number;
    setType(value: number): SmsRequest;

    getExpireInMs(): number;
    setExpireInMs(value: number): SmsRequest;

    getTpl(): string;
    setTpl(value: string): SmsRequest;

    clearParamsList(): void;
    getParamsList(): Array<string>;
    setParamsList(value: Array<string>): SmsRequest;
    addParams(value: string, index?: number): string;

    getRequestAddress(): string;
    setRequestAddress(value: string): SmsRequest;

    getTicket(): string;
    setTicket(value: string): SmsRequest;

    getRand(): string;
    setRand(value: string): SmsRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SmsRequest): SmsRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsRequest;
    static deserializeBinaryFromReader(message: SmsRequest, reader: jspb.BinaryReader): SmsRequest;
}

export namespace SmsRequest {
    export type AsObject = {
        countryCode: string,
        phone: string,
        type: number,
        expireInMs: number,
        tpl: string,
        paramsList: Array<string>,
        requestAddress: string,
        ticket: string,
        rand: string,
    }
}

export class SmsResponse extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsResponse;

    getType(): number;
    setType(value: number): SmsResponse;

    getExpireTime(): number;
    setExpireTime(value: number): SmsResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SmsResponse): SmsResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsResponse;
    static deserializeBinaryFromReader(message: SmsResponse, reader: jspb.BinaryReader): SmsResponse;
}

export namespace SmsResponse {
    export type AsObject = {
        session: string,
        type: number,
        expireTime: number,
    }
}

export class SubscriptionPayment extends jspb.Message { 
    getOrderIdentity(): string;
    setOrderIdentity(value: string): SubscriptionPayment;

    getType(): number;
    setType(value: number): SubscriptionPayment;

    getCreateTime(): number;
    setCreateTime(value: number): SubscriptionPayment;

    getUpdateTime(): number;
    setUpdateTime(value: number): SubscriptionPayment;

    getStatus(): number;
    setStatus(value: number): SubscriptionPayment;

    getAmount(): number;
    setAmount(value: number): SubscriptionPayment;

    getData(): string;
    setData(value: string): SubscriptionPayment;

    getUserIdentity(): number;
    setUserIdentity(value: number): SubscriptionPayment;

    getAddonInt(): number;
    setAddonInt(value: number): SubscriptionPayment;

    getAddonLong(): number;
    setAddonLong(value: number): SubscriptionPayment;

    getAddonString(): number;
    setAddonString(value: number): SubscriptionPayment;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubscriptionPayment.AsObject;
    static toObject(includeInstance: boolean, msg: SubscriptionPayment): SubscriptionPayment.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubscriptionPayment, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubscriptionPayment;
    static deserializeBinaryFromReader(message: SubscriptionPayment, reader: jspb.BinaryReader): SubscriptionPayment;
}

export namespace SubscriptionPayment {
    export type AsObject = {
        orderIdentity: string,
        type: number,
        createTime: number,
        updateTime: number,
        status: number,
        amount: number,
        data: string,
        userIdentity: number,
        addonInt: number,
        addonLong: number,
        addonString: number,
    }
}

export class SmsValidateRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsValidateRequest;

    getCode(): string;
    setCode(value: string): SmsValidateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsValidateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SmsValidateRequest): SmsValidateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsValidateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsValidateRequest;
    static deserializeBinaryFromReader(message: SmsValidateRequest, reader: jspb.BinaryReader): SmsValidateRequest;
}

export namespace SmsValidateRequest {
    export type AsObject = {
        session: string,
        code: string,
    }
}

export class SmsValidateRequestChange extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsValidateRequestChange;

    getCode(): string;
    setCode(value: string): SmsValidateRequestChange;

    getSessionOld(): string;
    setSessionOld(value: string): SmsValidateRequestChange;

    getCodeOld(): string;
    setCodeOld(value: string): SmsValidateRequestChange;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsValidateRequestChange.AsObject;
    static toObject(includeInstance: boolean, msg: SmsValidateRequestChange): SmsValidateRequestChange.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsValidateRequestChange, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsValidateRequestChange;
    static deserializeBinaryFromReader(message: SmsValidateRequestChange, reader: jspb.BinaryReader): SmsValidateRequestChange;
}

export namespace SmsValidateRequestChange {
    export type AsObject = {
        session: string,
        code: string,
        sessionOld: string,
        codeOld: string,
    }
}

export class SmsValidateResponse extends jspb.Message { 
    getSuccess(): boolean;
    setSuccess(value: boolean): SmsValidateResponse;

    getLeft(): number;
    setLeft(value: number): SmsValidateResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsValidateResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SmsValidateResponse): SmsValidateResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsValidateResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsValidateResponse;
    static deserializeBinaryFromReader(message: SmsValidateResponse, reader: jspb.BinaryReader): SmsValidateResponse;
}

export namespace SmsValidateResponse {
    export type AsObject = {
        success: boolean,
        left: number,
    }
}

export class Log extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Log;

    getUserIdentity(): number;
    setUserIdentity(value: number): Log;

    getDevice(): string;
    setDevice(value: string): Log;

    getCountry(): string;
    setCountry(value: string): Log;

    getCountryCode(): string;
    setCountryCode(value: string): Log;

    getProvince(): string;
    setProvince(value: string): Log;

    getCity(): string;
    setCity(value: string): Log;

    getCityCode(): string;
    setCityCode(value: string): Log;

    getIsp(): string;
    setIsp(value: string): Log;

    getCreateAddr(): string;
    setCreateAddr(value: string): Log;

    getCreateTime(): number;
    setCreateTime(value: number): Log;

    getType(): number;
    setType(value: number): Log;

    getInfo(): string;
    setInfo(value: string): Log;

    getLevel(): number;
    setLevel(value: number): Log;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Log.AsObject;
    static toObject(includeInstance: boolean, msg: Log): Log.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Log, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Log;
    static deserializeBinaryFromReader(message: Log, reader: jspb.BinaryReader): Log;
}

export namespace Log {
    export type AsObject = {
        identity: number,
        userIdentity: number,
        device: string,
        country: string,
        countryCode: string,
        province: string,
        city: string,
        cityCode: string,
        isp: string,
        createAddr: string,
        createTime: number,
        type: number,
        info: string,
        level: number,
    }
}

export class Balance extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Balance;

    getSpaceUsed(): number;
    setSpaceUsed(value: number): Balance;

    getSpaceLimit(): number;
    setSpaceLimit(value: number): Balance;

    getTrafficUsed(): number;
    setTrafficUsed(value: number): Balance;

    getTrafficLimit(): number;
    setTrafficLimit(value: number): Balance;

    getOfflineTaskUsed(): number;
    setOfflineTaskUsed(value: number): Balance;

    getOfflineTaskLimit(): number;
    setOfflineTaskLimit(value: number): Balance;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Balance.AsObject;
    static toObject(includeInstance: boolean, msg: Balance): Balance.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Balance, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Balance;
    static deserializeBinaryFromReader(message: Balance, reader: jspb.BinaryReader): Balance;
}

export namespace Balance {
    export type AsObject = {
        identity: number,
        spaceUsed: number,
        spaceLimit: number,
        trafficUsed: number,
        trafficLimit: number,
        offlineTaskUsed: number,
        offlineTaskLimit: number,
    }
}

export class ChangePasswordRequest extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): ChangePasswordRequest;

    getOldPassword(): string;
    setOldPassword(value: string): ChangePasswordRequest;

    getNewPassword(): string;
    setNewPassword(value: string): ChangePasswordRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ChangePasswordRequest): ChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ChangePasswordRequest;
    static deserializeBinaryFromReader(message: ChangePasswordRequest, reader: jspb.BinaryReader): ChangePasswordRequest;
}

export namespace ChangePasswordRequest {
    export type AsObject = {
        identity: number,
        oldPassword: string,
        newPassword: string,
    }
}

export class SmsChangePasswordRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsChangePasswordRequest;

    getCode(): string;
    setCode(value: string): SmsChangePasswordRequest;

    getNewPassword(): string;
    setNewPassword(value: string): SmsChangePasswordRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsChangePasswordRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SmsChangePasswordRequest): SmsChangePasswordRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsChangePasswordRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsChangePasswordRequest;
    static deserializeBinaryFromReader(message: SmsChangePasswordRequest, reader: jspb.BinaryReader): SmsChangePasswordRequest;
}

export namespace SmsChangePasswordRequest {
    export type AsObject = {
        session: string,
        code: string,
        newPassword: string,
    }
}

export class SmsDeleteAccountRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsDeleteAccountRequest;

    getCode(): string;
    setCode(value: string): SmsDeleteAccountRequest;

    getIdentity(): number;
    setIdentity(value: number): SmsDeleteAccountRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsDeleteAccountRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SmsDeleteAccountRequest): SmsDeleteAccountRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsDeleteAccountRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsDeleteAccountRequest;
    static deserializeBinaryFromReader(message: SmsDeleteAccountRequest, reader: jspb.BinaryReader): SmsDeleteAccountRequest;
}

export namespace SmsDeleteAccountRequest {
    export type AsObject = {
        session: string,
        code: string,
        identity: number,
    }
}

export class SmsCreateRequest extends jspb.Message { 
    getSession(): string;
    setSession(value: string): SmsCreateRequest;

    getCode(): string;
    setCode(value: string): SmsCreateRequest;

    getPassword(): string;
    setPassword(value: string): SmsCreateRequest;

    getEmail(): string;
    setEmail(value: string): SmsCreateRequest;

    getName(): string;
    setName(value: string): SmsCreateRequest;

    getCreateAddr(): string;
    setCreateAddr(value: string): SmsCreateRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SmsCreateRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SmsCreateRequest): SmsCreateRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SmsCreateRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SmsCreateRequest;
    static deserializeBinaryFromReader(message: SmsCreateRequest, reader: jspb.BinaryReader): SmsCreateRequest;
}

export namespace SmsCreateRequest {
    export type AsObject = {
        session: string,
        code: string,
        password: string,
        email: string,
        name: string,
        createAddr: string,
    }
}

export class ThirdPartyLoginInfo extends jspb.Message { 
    getOpenId(): string;
    setOpenId(value: string): ThirdPartyLoginInfo;

    getType(): number;
    setType(value: number): ThirdPartyLoginInfo;

    getUserIdentity(): number;
    setUserIdentity(value: number): ThirdPartyLoginInfo;

    getAccessKey(): string;
    setAccessKey(value: string): ThirdPartyLoginInfo;

    getRefreshKey(): string;
    setRefreshKey(value: string): ThirdPartyLoginInfo;

    getLastActiveTime(): number;
    setLastActiveTime(value: number): ThirdPartyLoginInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThirdPartyLoginInfo.AsObject;
    static toObject(includeInstance: boolean, msg: ThirdPartyLoginInfo): ThirdPartyLoginInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThirdPartyLoginInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThirdPartyLoginInfo;
    static deserializeBinaryFromReader(message: ThirdPartyLoginInfo, reader: jspb.BinaryReader): ThirdPartyLoginInfo;
}

export namespace ThirdPartyLoginInfo {
    export type AsObject = {
        openId: string,
        type: number,
        userIdentity: number,
        accessKey: string,
        refreshKey: string,
        lastActiveTime: number,
    }
}
