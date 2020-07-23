// package: services
// file: ext/video.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class VideoExt extends jspb.Message { 
    getHash(): string;
    setHash(value: string): VideoExt;

    getSize(): number;
    setSize(value: number): VideoExt;

    getTitle(): string;
    setTitle(value: string): VideoExt;

    getEncoder(): string;
    setEncoder(value: string): VideoExt;

    getDuration(): number;
    setDuration(value: number): VideoExt;

    getWidth(): number;
    setWidth(value: number): VideoExt;

    getHeight(): number;
    setHeight(value: number): VideoExt;

    getMaxpreviewwidth(): number;
    setMaxpreviewwidth(value: number): VideoExt;

    getMaxpreviewheight(): number;
    setMaxpreviewheight(value: number): VideoExt;

    clearPreviewimagekeyList(): void;
    getPreviewimagekeyList(): Array<string>;
    setPreviewimagekeyList(value: Array<string>): VideoExt;
    addPreviewimagekey(value: string, index?: number): string;

    getPreviewkey(): string;
    setPreviewkey(value: string): VideoExt;

    getPreviewtype(): number;
    setPreviewtype(value: number): VideoExt;

    getPreviewpid(): string;
    setPreviewpid(value: string): VideoExt;

    getPreviewplaykey(): string;
    setPreviewplaykey(value: string): VideoExt;

    getStatus(): number;
    setStatus(value: number): VideoExt;

    getFlag(): number;
    setFlag(value: number): VideoExt;

    getCreatetime(): number;
    setCreatetime(value: number): VideoExt;

    getUpdatetime(): number;
    setUpdatetime(value: number): VideoExt;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): VideoExt.AsObject;
    static toObject(includeInstance: boolean, msg: VideoExt): VideoExt.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: VideoExt, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): VideoExt;
    static deserializeBinaryFromReader(message: VideoExt, reader: jspb.BinaryReader): VideoExt;
}

export namespace VideoExt {
    export type AsObject = {
        hash: string,
        size: number,
        title: string,
        encoder: string,
        duration: number,
        width: number,
        height: number,
        maxpreviewwidth: number,
        maxpreviewheight: number,
        previewimagekeyList: Array<string>,
        previewkey: string,
        previewtype: number,
        previewpid: string,
        previewplaykey: string,
        status: number,
        flag: number,
        createtime: number,
        updatetime: number,
    }
}

export class PreviewInfo extends jspb.Message { 
    getName(): string;
    setName(value: string): PreviewInfo;

    getDuration(): number;
    setDuration(value: number): PreviewInfo;

    getWidth(): number;
    setWidth(value: number): PreviewInfo;

    getHeight(): number;
    setHeight(value: number): PreviewInfo;

    getSourceidentity(): string;
    setSourceidentity(value: string): PreviewInfo;

    getSourcepath(): string;
    setSourcepath(value: string): PreviewInfo;

    getSourcesize(): number;
    setSourcesize(value: number): PreviewInfo;

    clearPreviewimageaddressList(): void;
    getPreviewimageaddressList(): Array<string>;
    setPreviewimageaddressList(value: Array<string>): PreviewInfo;
    addPreviewimageaddress(value: string, index?: number): string;

    getPreviewhlsaddress(): string;
    setPreviewhlsaddress(value: string): PreviewInfo;

    getStatus(): number;
    setStatus(value: number): PreviewInfo;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): PreviewInfo.AsObject;
    static toObject(includeInstance: boolean, msg: PreviewInfo): PreviewInfo.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: PreviewInfo, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): PreviewInfo;
    static deserializeBinaryFromReader(message: PreviewInfo, reader: jspb.BinaryReader): PreviewInfo;
}

export namespace PreviewInfo {
    export type AsObject = {
        name: string,
        duration: number,
        width: number,
        height: number,
        sourceidentity: string,
        sourcepath: string,
        sourcesize: number,
        previewimageaddressList: Array<string>,
        previewhlsaddress: string,
        status: number,
    }
}
