// package: services
// file: task/task.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class FetchRequest extends jspb.Message { 
    getConsumer(): string;
    setConsumer(value: string): FetchRequest;

    clearTypeList(): void;
    getTypeList(): Array<number>;
    setTypeList(value: Array<number>): FetchRequest;
    addType(value: number, index?: number): number;

    getCount(): number;
    setCount(value: number): FetchRequest;

    clearStatusList(): void;
    getStatusList(): Array<number>;
    setStatusList(value: Array<number>): FetchRequest;
    addStatus(value: number, index?: number): number;

    getNext(): number;
    setNext(value: number): FetchRequest;

    getDeadline(): number;
    setDeadline(value: number): FetchRequest;

    getRecover(): boolean;
    setRecover(value: boolean): FetchRequest;

    getDesc(): boolean;
    setDesc(value: boolean): FetchRequest;


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
        next: number,
        deadline: number,
        recover: boolean,
        desc: boolean,
    }
}

export class SimpleTask extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): SimpleTask;

    getType(): number;
    setType(value: number): SimpleTask;

    getSource(): string;
    setSource(value: string): SimpleTask;

    getConsumer(): string;
    setConsumer(value: string): SimpleTask;

    getProducer(): string;
    setProducer(value: string): SimpleTask;

    getCreateTime(): number;
    setCreateTime(value: number): SimpleTask;

    getConsumerTime(): number;
    setConsumerTime(value: number): SimpleTask;

    getDeadline(): number;
    setDeadline(value: number): SimpleTask;

    getData(): string;
    setData(value: string): SimpleTask;

    getStatus(): number;
    setStatus(value: number): SimpleTask;


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
    setSeq(value: number): ErrorTask;

    getIdentity(): string;
    setIdentity(value: string): ErrorTask;

    getType(): number;
    setType(value: number): ErrorTask;

    getSource(): string;
    setSource(value: string): ErrorTask;

    getConsumer(): string;
    setConsumer(value: string): ErrorTask;

    getProducer(): string;
    setProducer(value: string): ErrorTask;

    getCreateTime(): number;
    setCreateTime(value: number): ErrorTask;

    getConsumerTime(): number;
    setConsumerTime(value: number): ErrorTask;

    getDeadline(): number;
    setDeadline(value: number): ErrorTask;

    getData(): string;
    setData(value: string): ErrorTask;

    getStatus(): number;
    setStatus(value: number): ErrorTask;

    getErrorCode(): number;
    setErrorCode(value: number): ErrorTask;

    getErrorMessage(): string;
    setErrorMessage(value: string): ErrorTask;


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
        errorMessage: string,
    }
}

export class FetchResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<SimpleTask>;
    setDataList(value: Array<SimpleTask>): FetchResponse;
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
