// package: services
// file: store/preview.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class MediaPreview extends jspb.Message { 
    getHash(): string;
    setHash(value: string): MediaPreview;

    getType(): number;
    setType(value: number): MediaPreview;

    getStatus(): number;
    setStatus(value: number): MediaPreview;

    getTitle(): string;
    setTitle(value: string): MediaPreview;

    getDuration(): number;
    setDuration(value: number): MediaPreview;

    getWidth(): number;
    setWidth(value: number): MediaPreview;

    getHeight(): number;
    setHeight(value: number): MediaPreview;

    getSourceWidth(): number;
    setSourceWidth(value: number): MediaPreview;

    getSourceHeight(): number;
    setSourceHeight(value: number): MediaPreview;

    getAccessCode(): string;
    setAccessCode(value: string): MediaPreview;

    getAccessAddress(): string;
    setAccessAddress(value: string): MediaPreview;

    getScreenshot(): string;
    setScreenshot(value: string): MediaPreview;

    getSubtitle(): string;
    setSubtitle(value: string): MediaPreview;

    getFile(): string;
    setFile(value: string): MediaPreview;

    getRotate(): number;
    setRotate(value: number): MediaPreview;

    getAddon(): string;
    setAddon(value: string): MediaPreview;

    getCreateAddress(): string;
    setCreateAddress(value: string): MediaPreview;

    getFlag(): number;
    setFlag(value: number): MediaPreview;

    getCreateTime(): number;
    setCreateTime(value: number): MediaPreview;

    getUpdateTime(): number;
    setUpdateTime(value: number): MediaPreview;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): MediaPreview.AsObject;
    static toObject(includeInstance: boolean, msg: MediaPreview): MediaPreview.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: MediaPreview, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): MediaPreview;
    static deserializeBinaryFromReader(message: MediaPreview, reader: jspb.BinaryReader): MediaPreview;
}

export namespace MediaPreview {
    export type AsObject = {
        hash: string,
        type: number,
        status: number,
        title: string,
        duration: number,
        width: number,
        height: number,
        sourceWidth: number,
        sourceHeight: number,
        accessCode: string,
        accessAddress: string,
        screenshot: string,
        subtitle: string,
        file: string,
        rotate: number,
        addon: string,
        createAddress: string,
        flag: number,
        createTime: number,
        updateTime: number,
    }
}
