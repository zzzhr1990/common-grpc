// package: services
// file: task/task.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class FetchRequest extends jspb.Message {
  getConsumer(): string;
  setConsumer(value: string): void;

  clearTypeList(): void;
  getTypeList(): Array<number>;
  setTypeList(value: Array<number>): void;
  addType(value: number, index?: number): number;

  getCount(): number;
  setCount(value: number): void;

  clearStatusList(): void;
  getStatusList(): Array<number>;
  setStatusList(value: Array<number>): void;
  addStatus(value: number, index?: number): number;

  getNextStatus(): number;
  setNextStatus(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getRecover(): boolean;
  setRecover(value: boolean): void;

  getDesc(): boolean;
  setDesc(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchRequest.AsObject;
  static toObject(includeInstance: boolean, msg: FetchRequest): FetchRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchRequest;
  static deserializeBinaryFromReader(message: FetchRequest, reader: jspb.BinaryReader): FetchRequest;
}

export namespace FetchRequest {
  export type AsObject = {
    consumer: string,
    typeList: Array<number>,
    count: number,
    statusList: Array<number>,
    nextStatus: number,
    deadline: number,
    recover: boolean,
    desc: boolean,
  }
}

export class SimpleTask extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getType(): number;
  setType(value: number): void;

  getSource(): string;
  setSource(value: string): void;

  getConsumer(): string;
  setConsumer(value: string): void;

  getProducer(): string;
  setProducer(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getConsumerTime(): number;
  setConsumerTime(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getData(): string;
  setData(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleTask.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleTask): SimpleTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleTask;
  static deserializeBinaryFromReader(message: SimpleTask, reader: jspb.BinaryReader): SimpleTask;
}

export namespace SimpleTask {
  export type AsObject = {
    identity: string,
    type: number,
    source: string,
    consumer: string,
    producer: string,
    createTime: number,
    consumerTime: number,
    deadline: number,
    data: string,
    status: number,
  }
}

export class ErrorTask extends jspb.Message {
  getSeq(): number;
  setSeq(value: number): void;

  getIdentity(): string;
  setIdentity(value: string): void;

  getType(): number;
  setType(value: number): void;

  getSource(): string;
  setSource(value: string): void;

  getConsumer(): string;
  setConsumer(value: string): void;

  getProducer(): string;
  setProducer(value: string): void;

  getCreateTime(): number;
  setCreateTime(value: number): void;

  getConsumerTime(): number;
  setConsumerTime(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getData(): string;
  setData(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  getErrorCode(): number;
  setErrorCode(value: number): void;

  getErrorMessage(): number;
  setErrorMessage(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorTask.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorTask): ErrorTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorTask;
  static deserializeBinaryFromReader(message: ErrorTask, reader: jspb.BinaryReader): ErrorTask;
}

export namespace ErrorTask {
  export type AsObject = {
    seq: number,
    identity: string,
    type: number,
    source: string,
    consumer: string,
    producer: string,
    createTime: number,
    consumerTime: number,
    deadline: number,
    data: string,
    status: number,
    errorCode: number,
    errorMessage: number,
  }
}

export class FetchResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<SimpleTask>;
  setDataList(value: Array<SimpleTask>): void;
  addData(value?: SimpleTask, index?: number): SimpleTask;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchResponse): FetchResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchResponse;
  static deserializeBinaryFromReader(message: FetchResponse, reader: jspb.BinaryReader): FetchResponse;
}

export namespace FetchResponse {
  export type AsObject = {
    dataList: Array<SimpleTask.AsObject>,
  }
}

