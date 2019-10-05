// package: services
// file: system/system.proto

import * as jspb from "google-protobuf";

export class SystemInfo extends jspb.Message {
  getRequesttime(): number;
  setRequesttime(value: number): void;

  getRequestuser(): string;
  setRequestuser(value: string): void;

  getServername(): string;
  setServername(value: string): void;

  getServertime(): number;
  setServertime(value: number): void;

  getAccesscount(): number;
  setAccesscount(value: number): void;

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
    requesttime: number,
    requestuser: string,
    servername: string,
    servertime: number,
    accesscount: number,
  }
}

export class ClientInfo extends jspb.Message {
  getClientname(): string;
  setClientname(value: string): void;

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
    clientname: string,
  }
}

