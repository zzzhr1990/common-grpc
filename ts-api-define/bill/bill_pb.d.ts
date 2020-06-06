// package: services
// file: bill/bill.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class Order extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getUserIdentity(): number;
  setUserIdentity(value: number): void;

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

  getIntent(): string;
  setIntent(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): Order.AsObject;
  static toObject(includeInstance: boolean, msg: Order): Order.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: Order, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): Order;
  static deserializeBinaryFromReader(message: Order, reader: jspb.BinaryReader): Order;
}

export namespace Order {
  export type AsObject = {
    identity: string,
    userIdentity: number,
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
    intent: string,
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

  getValue(): number;
  setValue(value: number): void;

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
    value: number,
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

export class OrderListRequest extends jspb.Message {
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
  getFilter(): OrderFilterRequest | undefined;
  setFilter(value?: OrderFilterRequest): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderListRequest): OrderListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderListRequest;
  static deserializeBinaryFromReader(message: OrderListRequest, reader: jspb.BinaryReader): OrderListRequest;
}

export namespace OrderListRequest {
  export type AsObject = {
    listInfo?: common_common_entity_pb.ListInfo.AsObject,
    orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    filter?: OrderFilterRequest.AsObject,
  }
}

export class OrderFilterRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getPlanType(): number;
  setPlanType(value: number): void;

  getPath(): string;
  setPath(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderFilterRequest.AsObject;
  static toObject(includeInstance: boolean, msg: OrderFilterRequest): OrderFilterRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderFilterRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderFilterRequest;
  static deserializeBinaryFromReader(message: OrderFilterRequest, reader: jspb.BinaryReader): OrderFilterRequest;
}

export namespace OrderFilterRequest {
  export type AsObject = {
    identity: string,
    planType: number,
    path: string,
  }
}

export class OrderListResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<Order>;
  setDataList(value: Array<Order>): void;
  addData(value?: Order, index?: number): Order;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): OrderListResponse.AsObject;
  static toObject(includeInstance: boolean, msg: OrderListResponse): OrderListResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: OrderListResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): OrderListResponse;
  static deserializeBinaryFromReader(message: OrderListResponse, reader: jspb.BinaryReader): OrderListResponse;
}

export namespace OrderListResponse {
  export type AsObject = {
    dataList: Array<Order.AsObject>,
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

