// package: services
// file: store/subtitle.proto

import * as jspb from "google-protobuf";

export class Subtitle extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getHash(): string;
  setHash(value: string): void;

  getType(): number;
  setType(value: number): void;

  getIndex(): number;
  setIndex(value: number): void;

  getTitle(): string;
  setTitle(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getHandlerName(): string;
  setHandlerName(value: string): void;

  getCodecName(): string;
  setCodecName(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getUpdateTime(): number;
  setUpdateTime(value: number): void;

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
  }
}

export class SubtitleListResponse extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  clearDataList(): void;
  getDataList(): Array<Subtitle>;
  setDataList(value: Array<Subtitle>): void;
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

