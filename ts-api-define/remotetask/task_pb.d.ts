// package: services
// file: remotetask/task.proto

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class SimpleRemoteTaskRequest extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): SimpleRemoteTaskRequest.AsObject;
  static toObject(includeInstance: boolean, msg: SimpleRemoteTaskRequest): SimpleRemoteTaskRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: SimpleRemoteTaskRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): SimpleRemoteTaskRequest;
  static deserializeBinaryFromReader(message: SimpleRemoteTaskRequest, reader: jspb.BinaryReader): SimpleRemoteTaskRequest;
}

export namespace SimpleRemoteTaskRequest {
  export type AsObject = {
    identity: number,
  }
}

export class RemoteTaskErrorRequest extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getErrorcode(): number;
  setErrorcode(value: number): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteTaskErrorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteTaskErrorRequest): RemoteTaskErrorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteTaskErrorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteTaskErrorRequest;
  static deserializeBinaryFromReader(message: RemoteTaskErrorRequest, reader: jspb.BinaryReader): RemoteTaskErrorRequest;
}

export namespace RemoteTaskErrorRequest {
  export type AsObject = {
    identity: number,
    errorcode: number,
    errormessage: string,
  }
}

export class CallLaterErrorRequest extends jspb.Message {
  getIdentity(): string;
  setIdentity(value: string): void;

  getErrorcode(): number;
  setErrorcode(value: number): void;

  getErrormessage(): string;
  setErrormessage(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallLaterErrorRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CallLaterErrorRequest): CallLaterErrorRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallLaterErrorRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallLaterErrorRequest;
  static deserializeBinaryFromReader(message: CallLaterErrorRequest, reader: jspb.BinaryReader): CallLaterErrorRequest;
}

export namespace CallLaterErrorRequest {
  export type AsObject = {
    identity: string,
    errorcode: number,
    errormessage: string,
  }
}

export class RemoteTask extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getType(): number;
  setType(value: number): void;

  getSource(): string;
  setSource(value: string): void;

  getConsumer(): string;
  setConsumer(value: string): void;

  getProducer(): string;
  setProducer(value: string): void;

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getConsumertime(): number;
  setConsumertime(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getData(): string;
  setData(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): RemoteTask.AsObject;
  static toObject(includeInstance: boolean, msg: RemoteTask): RemoteTask.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: RemoteTask, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): RemoteTask;
  static deserializeBinaryFromReader(message: RemoteTask, reader: jspb.BinaryReader): RemoteTask;
}

export namespace RemoteTask {
  export type AsObject = {
    identity: number,
    type: number,
    source: string,
    consumer: string,
    producer: string,
    createtime: number,
    consumertime: number,
    deadline: number,
    data: string,
    status: number,
  }
}

export class CallLater extends jspb.Message {
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

  getCreatetime(): number;
  setCreatetime(value: number): void;

  getConsumertime(): number;
  setConsumertime(value: number): void;

  getDeadline(): number;
  setDeadline(value: number): void;

  getData(): string;
  setData(value: string): void;

  getStatus(): number;
  setStatus(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CallLater.AsObject;
  static toObject(includeInstance: boolean, msg: CallLater): CallLater.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CallLater, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CallLater;
  static deserializeBinaryFromReader(message: CallLater, reader: jspb.BinaryReader): CallLater;
}

export namespace CallLater {
  export type AsObject = {
    identity: string,
    type: number,
    source: string,
    consumer: string,
    producer: string,
    createtime: number,
    consumertime: number,
    deadline: number,
    data: string,
    status: number,
  }
}

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

  getNextstatus(): number;
  setNextstatus(value: number): void;

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
    nextstatus: number,
    deadline: number,
    recover: boolean,
    desc: boolean,
  }
}

export class ListRequest extends jspb.Message {
  getConsumer(): string;
  setConsumer(value: string): void;

  getType(): number;
  setType(value: number): void;

  getCount(): number;
  setCount(value: number): void;

  clearStatusList(): void;
  getStatusList(): Array<number>;
  setStatusList(value: Array<number>): void;
  addStatus(value: number, index?: number): number;

  getDeadline(): number;
  setDeadline(value: number): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ListRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ListRequest): ListRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ListRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ListRequest;
  static deserializeBinaryFromReader(message: ListRequest, reader: jspb.BinaryReader): ListRequest;
}

export namespace ListRequest {
  export type AsObject = {
    consumer: string,
    type: number,
    count: number,
    statusList: Array<number>,
    deadline: number,
  }
}

export class FetchResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<RemoteTask>;
  setDataList(value: Array<RemoteTask>): void;
  addData(value?: RemoteTask, index?: number): RemoteTask;

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
    dataList: Array<RemoteTask.AsObject>,
  }
}

export class FetchCallLaterResponse extends jspb.Message {
  clearDataList(): void;
  getDataList(): Array<CallLater>;
  setDataList(value: Array<CallLater>): void;
  addData(value?: CallLater, index?: number): CallLater;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): FetchCallLaterResponse.AsObject;
  static toObject(includeInstance: boolean, msg: FetchCallLaterResponse): FetchCallLaterResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: FetchCallLaterResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): FetchCallLaterResponse;
  static deserializeBinaryFromReader(message: FetchCallLaterResponse, reader: jspb.BinaryReader): FetchCallLaterResponse;
}

export namespace FetchCallLaterResponse {
  export type AsObject = {
    dataList: Array<CallLater.AsObject>,
  }
}

