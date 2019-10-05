// package: services
// file: user/info.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class GrpcUser extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getName(): string;
  setName(value: string): void;

  getPassword(): string;
  setPassword(value: string): void;

  getSalt(): string;
  setSalt(value: string): void;

  getCountrycode(): string;
  setCountrycode(value: string): void;

  getPhone(): string;
  setPhone(value: string): void;

  getEmail(): string;
  setEmail(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getCreateip(): string;
  setCreateip(value: string): void;

  getIcon(): string;
  setIcon(value: string): void;

  getSpaceused(): number;
  setSpaceused(value: number): void;

  getSpacecapacity(): number;
  setSpacecapacity(value: number): void;

  getType(): number;
  setType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getVersion(): number;
  setVersion(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): GrpcUser.AsObject;
  static toObject(includeInstance: boolean, msg: GrpcUser): GrpcUser.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: GrpcUser, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): GrpcUser;
  static deserializeBinaryFromReader(message: GrpcUser, reader: jspb.BinaryReader): GrpcUser;
}

export namespace GrpcUser {
  export type AsObject = {
    identity: number,
    name: string,
    password: string,
    salt: string,
    countrycode: string,
    phone: string,
    email: string,
    createtime: number,
    createip: string,
    icon: string,
    spaceused: number,
    spacecapacity: number,
    type: number,
    status: number,
    version: number,
  }
}

export class Balance extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getSpaceused(): number;
  setSpaceused(value: number): void;

  getSpacelimit(): number;
  setSpacelimit(value: number): void;

  getTrafficused(): number;
  setTrafficused(value: number): void;

  getTrafficlimit(): number;
  setTrafficlimit(value: number): void;

  getOfflinetaskused(): number;
  setOfflinetaskused(value: number): void;

  getOfflinetasklimit(): number;
  setOfflinetasklimit(value: number): void;

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
    spaceused: number,
    spacelimit: number,
    trafficused: number,
    trafficlimit: number,
    offlinetaskused: number,
    offlinetasklimit: number,
  }
}

export class PasswordPair extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getOldpassword(): string;
  setOldpassword(value: string): void;

  getNewpassword(): string;
  setNewpassword(value: string): void;

  getDirect(): boolean;
  setDirect(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PasswordPair.AsObject;
  static toObject(includeInstance: boolean, msg: PasswordPair): PasswordPair.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PasswordPair, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PasswordPair;
  static deserializeBinaryFromReader(message: PasswordPair, reader: jspb.BinaryReader): PasswordPair;
}

export namespace PasswordPair {
  export type AsObject = {
    identity: number,
    oldpassword: string,
    newpassword: string,
    direct: boolean,
  }
}

