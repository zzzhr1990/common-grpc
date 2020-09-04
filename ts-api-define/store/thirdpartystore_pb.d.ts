// package: services
// file: store/thirdpartystore.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ThirdPartyStore extends jspb.Message { 
    getHash(): string;
    setHash(value: string): ThirdPartyStore;

    getSize(): number;
    setSize(value: number): ThirdPartyStore;

    getEtag(): string;
    setEtag(value: string): ThirdPartyStore;

    getCtime(): number;
    setCtime(value: number): ThirdPartyStore;

    getFileName(): string;
    setFileName(value: string): ThirdPartyStore;

    getBucket(): string;
    setBucket(value: string): ThirdPartyStore;

    getKey(): string;
    setKey(value: string): ThirdPartyStore;

    getMd5(): string;
    setMd5(value: string): ThirdPartyStore;

    getSha1(): string;
    setSha1(value: string): ThirdPartyStore;

    getBlock(): string;
    setBlock(value: string): ThirdPartyStore;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ThirdPartyStore.AsObject;
    static toObject(includeInstance: boolean, msg: ThirdPartyStore): ThirdPartyStore.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ThirdPartyStore, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ThirdPartyStore;
    static deserializeBinaryFromReader(message: ThirdPartyStore, reader: jspb.BinaryReader): ThirdPartyStore;
}

export namespace ThirdPartyStore {
    export type AsObject = {
        hash: string,
        size: number,
        etag: string,
        ctime: number,
        fileName: string,
        bucket: string,
        key: string,
        md5: string,
        sha1: string,
        block: string,
    }
}
