// package: services
// file: offline/parse.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class ParseTaskRequest extends jspb.Message { 
    getTextLink(): string;
    setTextLink(value: string): ParseTaskRequest;

    getFileHash(): string;
    setFileHash(value: string): ParseTaskRequest;

    getUsername(): string;
    setUsername(value: string): ParseTaskRequest;

    getPassword(): string;
    setPassword(value: string): ParseTaskRequest;

    getOp(): number;
    setOp(value: number): ParseTaskRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParseTaskRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ParseTaskRequest): ParseTaskRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParseTaskRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParseTaskRequest;
    static deserializeBinaryFromReader(message: ParseTaskRequest, reader: jspb.BinaryReader): ParseTaskRequest;
}

export namespace ParseTaskRequest {
    export type AsObject = {
        textLink: string,
        fileHash: string,
        username: string,
        password: string,
        op: number,
    }
}

export class ParseTaskResponse extends jspb.Message { 
    getTextLink(): string;
    setTextLink(value: string): ParseTaskResponse;

    getFileHash(): string;
    setFileHash(value: string): ParseTaskResponse;

    getUsername(): string;
    setUsername(value: string): ParseTaskResponse;

    getPassword(): string;
    setPassword(value: string): ParseTaskResponse;

    getIdentity(): string;
    setIdentity(value: string): ParseTaskResponse;

    getName(): string;
    setName(value: string): ParseTaskResponse;

    getSize(): number;
    setSize(value: number): ParseTaskResponse;

    clearDataList(): void;
    getDataList(): Array<ParseTaskFile>;
    setDataList(value: Array<ParseTaskFile>): ParseTaskResponse;
    addData(value?: ParseTaskFile, index?: number): ParseTaskFile;

    getType(): number;
    setType(value: number): ParseTaskResponse;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParseTaskResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ParseTaskResponse): ParseTaskResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParseTaskResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParseTaskResponse;
    static deserializeBinaryFromReader(message: ParseTaskResponse, reader: jspb.BinaryReader): ParseTaskResponse;
}

export namespace ParseTaskResponse {
    export type AsObject = {
        textLink: string,
        fileHash: string,
        username: string,
        password: string,
        identity: string,
        name: string,
        size: number,
        dataList: Array<ParseTaskFile.AsObject>,
        type: number,
    }
}

export class ParseTaskFile extends jspb.Message { 
    getIdentity(): string;
    setIdentity(value: string): ParseTaskFile;

    getPath(): string;
    setPath(value: string): ParseTaskFile;

    getSize(): number;
    setSize(value: number): ParseTaskFile;

    getName(): string;
    setName(value: string): ParseTaskFile;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ParseTaskFile.AsObject;
    static toObject(includeInstance: boolean, msg: ParseTaskFile): ParseTaskFile.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ParseTaskFile, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ParseTaskFile;
    static deserializeBinaryFromReader(message: ParseTaskFile, reader: jspb.BinaryReader): ParseTaskFile;
}

export namespace ParseTaskFile {
    export type AsObject = {
        identity: string,
        path: string,
        size: number,
        name: string,
    }
}
