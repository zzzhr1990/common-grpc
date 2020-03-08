// package: services
// file: store/preview.proto

import * as jspb from "google-protobuf";

export class MediaPreview extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getDuration(): number;
  setDuration(value: number): void;

  getWidth(): number;
  setWidth(value: number): void;

  getHeight(): number;
  setHeight(value: number): void;

  getSourceWidth(): number;
  setSourceWidth(value: number): void;

  getSourceHeight(): number;
  setSourceHeight(value: number): void;

  getAccessCode(): string;
  setAccessCode(value: string): void;

  getAccessAddress(): string;
  setAccessAddress(value: string): void;

  getScreenshot(): string;
  setScreenshot(value: string): void;

  getSubtitle(): string;
  setSubtitle(value: string): void;

  getFile(): string;
  setFile(value: string): void;

  getRotate(): number;
  setRotate(value: number): void;

  getAddon(): string;
  setAddon(value: string): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

  getFlag(): number;
  setFlag(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getUpdateTime(): number;
  setUpdateTime(value: number): void;

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

