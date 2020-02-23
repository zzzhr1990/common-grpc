// package: services
// file: store/preview.proto

import * as jspb from "google-protobuf";

export class Preview extends jspb.Message {
  getHash(): string;
  setHash(value: string): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getAccessCode(): string;
  setAccessCode(value: string): void;

  getAccessAddress(): string;
  setAccessAddress(value: string): void;

  getFile(): string;
  setFile(value: string): void;

  getAddon(): string;
  setAddon(value: string): void;

  getCreateAddress(): number;
  setCreateAddress(value: number): void;

  getFlag(): number;
  setFlag(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Preview.AsObject;
  static toObject(includeInstance: boolean, msg: Preview): Preview.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Preview, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Preview;
  static deserializeBinaryFromReader(message: Preview, reader: jspb.BinaryReader): Preview;
}

export namespace Preview {
  export type AsObject = {
    hash: string,
    type: number,
    status: number,
    accessCode: string,
    accessAddress: string,
    file: string,
    addon: string,
    createAddress: number,
    flag: number,
  }
}

