// package: services
// file: store/subtitle.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Subtitle extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): Subtitle;

    getHash(): string;
    setHash(value: string): Subtitle;

    getType(): number;
    setType(value: number): Subtitle;

    getIndex(): number;
    setIndex(value: number): Subtitle;

    getTitle(): string;
    setTitle(value: string): Subtitle;

    getLanguage(): string;
    setLanguage(value: string): Subtitle;

    getHandlerName(): string;
    setHandlerName(value: string): Subtitle;

    getCodecName(): string;
    setCodecName(value: string): Subtitle;

    getCreateTime(): number;
    setCreateTime(value: number): Subtitle;

    getUpdateTime(): number;
    setUpdateTime(value: number): Subtitle;

    getKey(): string;
    setKey(value: string): Subtitle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Subtitle.AsObject;
    static toObject(includeInstance: boolean, msg: Subtitle): Subtitle.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Subtitle, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Subtitle;
    static deserializeBinaryFromReader(message: Subtitle, reader: jspb.BinaryReader): Subtitle;
}

export namespace Subtitle {
    export type AsObject = {
        identity: string,
        hash: string,
        type: number,
        index: number,
        title: string,
        language: string,
        handlerName: string,
        codecName: string,
        createTime: number,
        updateTime: number,
        key: string,
    }
}

export class SubtitleListResponse extends jspb.Message { 
    getHash(): string;
    setHash(value: string): SubtitleListResponse;

    clearDataList(): void;
    getDataList(): Array<Subtitle>;
    setDataList(value: Array<Subtitle>): SubtitleListResponse;
    addData(value?: Subtitle, index?: number): Subtitle;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SubtitleListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SubtitleListResponse): SubtitleListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SubtitleListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SubtitleListResponse;
    static deserializeBinaryFromReader(message: SubtitleListResponse, reader: jspb.BinaryReader): SubtitleListResponse;
}

export namespace SubtitleListResponse {
    export type AsObject = {
        hash: string,
        dataList: Array<Subtitle.AsObject>,
    }
}
