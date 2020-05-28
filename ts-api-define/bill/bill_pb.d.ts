// package: services
// file: bill/bill.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class Subscribe extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): string;
  setUserIdentity(value: string): void;

  getPlanIdentity(): number;
  setPlanIdentity(value: number): void;

  getPlanType(): number;
  setPlanType(value: number): void;

  getPayType(): number;
  setPayType(value: number): void;

  getStatus(): number;
  setStatus(value: number): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getRefreshTime(): number;
  setRefreshTime(value: number): void;

  getExt(): string;
  setExt(value: string): void;

  getExpireTime(): number;
  setExpireTime(value: number): void;

  getCreateAddress(): string;
  setCreateAddress(value: string): void;

  getAmount(): number;
  setAmount(value: number): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getCompleteTime(): number;
  setCompleteTime(value: number): void;

  getPlanDescription(): string;
  setPlanDescription(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Subscribe.AsObject;
  static toObject(includeInstance: boolean, msg: Subscribe): Subscribe.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Subscribe, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Subscribe;
  static deserializeBinaryFromReader(message: Subscribe, reader: jspb.BinaryReader): Subscribe;
}

export namespace Subscribe {
  export type AsObject = {
    identity: string,
    userIdentity: string,
    planIdentity: number,
    planType: number,
    payType: number,
    status: number,
    createTime: number,
    refreshTime: number,
    ext: string,
    expireTime: number,
    createAddress: string,
    amount: number,
    price: number,
    currency: string,
    completeTime: number,
    planDescription: string,
    info: string,
  }
}

export class Plan extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getType(): number;
  setType(value: number): void;

  getPeriodType(): number;
  setPeriodType(value: number): void;

  getSupportedPayType(): string;
  setSupportedPayType(value: string): void;

  getPrice(): number;
  setPrice(value: number): void;

  getCurrency(): string;
  setCurrency(value: string): void;

  getInfo(): string;
  setInfo(value: string): void;

  getDescription(): string;
  setDescription(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Plan.AsObject;
  static toObject(includeInstance: boolean, msg: Plan): Plan.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Plan, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Plan;
  static deserializeBinaryFromReader(message: Plan, reader: jspb.BinaryReader): Plan;
}

export namespace Plan {
  export type AsObject = {
    identity: number,
    type: number,
    periodType: number,
    supportedPayType: string,
    price: number,
    currency: string,
    info: string,
    description: string,
  }
}

export class PlanListRequest extends jspb.Message {
  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: PlanListRequest): PlanListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanListRequest;
  static deserializeBinaryFromReader(message: PlanListRequest, reader: jspb.BinaryReader): PlanListRequest;
}

export namespace PlanListRequest {
  export type AsObject = {
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
  }
}

export class SubscribeListRequest extends jspb.Message {
  hasListInfo(): boolean;
  clearListInfo(): void;
  getListInfo(): common_common_entity_pb.ListInfo | undefined;
  setListInfo(value?: common_common_entity_pb.ListInfo): void;

  clearOrderByList(): void;
  getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
  setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): void;
  addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;

  hasFilter(): boolean;
  clearFilter(): void;
  getFilter(): SubscribeFilterRequest | undefined;
  setFilter(value?: SubscribeFilterRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeListRequest): SubscribeListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeListRequest;
  static deserializeBinaryFromReader(message: SubscribeListRequest, reader: jspb.BinaryReader): SubscribeListRequest;
}

export namespace SubscribeListRequest {
  export type AsObject = {
    listInfo?: common_common_entity_pb.ListInfo.AsObject,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: SubscribeFilterRequest.AsObject,
  }
}

export class SubscribeFilterRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getPlanType(): number;
  setPlanType(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeFilterRequest): SubscribeFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeFilterRequest;
  static deserializeBinaryFromReader(message: SubscribeFilterRequest, reader: jspb.BinaryReader): SubscribeFilterRequest;
}

export namespace SubscribeFilterRequest {
  export type AsObject = {
    identity: string,
    planType: number,
    path: string,
  }
}

export class SubscribeListResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<Subscribe>;
  setDataList(value: Array<Subscribe>): void;
  addData(value?: Subscribe, index?: number): Subscribe;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SubscribeListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: SubscribeListResponse): SubscribeListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SubscribeListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SubscribeListResponse;
  static deserializeBinaryFromReader(message: SubscribeListResponse, reader: jspb.BinaryReader): SubscribeListResponse;
}

export namespace SubscribeListResponse {
  export type AsObject = {
    dataList: Array<Subscribe.AsObject>,
  }
}

export class PlanListResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<Plan>;
  setDataList(value: Array<Plan>): void;
  addData(value?: Plan, index?: number): Plan;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): PlanListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: PlanListResponse): PlanListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: PlanListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): PlanListResponse;
  static deserializeBinaryFromReader(message: PlanListResponse, reader: jspb.BinaryReader): PlanListResponse;
}

export namespace PlanListResponse {
  export type AsObject = {
    dataList: Array<Plan.AsObject>,
  }
}

