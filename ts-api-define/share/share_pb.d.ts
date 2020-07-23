// package: services
// file: share/share.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class FileShare extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): FileShare;

    getSize(): number;
    setSize(value: number): FileShare;

    getMime(): string;
    setMime(value: string): FileShare;

    getUseridentity(): number;
    setUseridentity(value: number): FileShare;

    getCtime(): number;
    setCtime(value: number): FileShare;

    getName(): string;
    setName(value: string): FileShare;

    getFlag(): number;
    setFlag(value: number): FileShare;

    getPasswordenabled(): boolean;
    setPasswordenabled(value: boolean): FileShare;

    getPassword(): string;
    setPassword(value: string): FileShare;

    getExpireenabled(): boolean;
    setExpireenabled(value: boolean): FileShare;

    getExpire(): number;
    setExpire(value: number): FileShare;

    getCopycount(): number;
    setCopycount(value: number): FileShare;

    getCopycountlimit(): number;
    setCopycountlimit(value: number): FileShare;

    getCopycountenabled(): boolean;
    setCopycountenabled(value: boolean): FileShare;

    getStatus(): number;
    setStatus(value: number): FileShare;

    getUsername(): string;
    setUsername(value: string): FileShare;

    getWeburl(): string;
    setWeburl(value: string): FileShare;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): FileShare.AsObject;
    static toObject(includeInstance: boolean, msg: FileShare): FileShare.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: FileShare, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): FileShare;
    static deserializeBinaryFromReader(message: FileShare, reader: jspb.BinaryReader): FileShare;
}

export namespace FileShare {
    export type AsObject = {
        identity: string,
        size: number,
        mime: string,
        useridentity: number,
        ctime: number,
        name: string,
        flag: number,
        passwordenabled: boolean,
        password: string,
        expireenabled: boolean,
        expire: number,
        copycount: number,
        copycountlimit: number,
        copycountenabled: boolean,
        status: number,
        username: string,
        weburl: string,
    }
}

export class ShareSaveRequest extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): ShareSaveRequest;

    getUseridentity(): number;
    setUseridentity(value: number): ShareSaveRequest;

    getSavepath(): string;
    setSavepath(value: string): ShareSaveRequest;

    getSaveidentity(): string;
    setSaveidentity(value: string): ShareSaveRequest;

    getPassword(): string;
    setPassword(value: string): ShareSaveRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ShareSaveRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ShareSaveRequest): ShareSaveRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ShareSaveRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ShareSaveRequest;
    static deserializeBinaryFromReader(message: ShareSaveRequest, reader: jspb.BinaryReader): ShareSaveRequest;
}

export namespace ShareSaveRequest {
    export type AsObject = {
        identity: string,
        useridentity: number,
        savepath: string,
        saveidentity: string,
        password: string,
    }
}
