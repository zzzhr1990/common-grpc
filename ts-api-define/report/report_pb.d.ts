// package: services
// file: report/report.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Report extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Report;

    getUseridentity(): number;
    setUseridentity(value: number): Report;

    getCtime(): number;
    setCtime(value: number): Report;

    getType(): number;
    setType(value: number): Report;

    getContenttype(): number;
    setContenttype(value: number): Report;

    getContent(): string;
    setContent(value: string): Report;

    getComment(): string;
    setComment(value: string): Report;

    getFeedback(): string;
    setFeedback(value: string): Report;

    getFeedbackadminidentity(): number;
    setFeedbackadminidentity(value: number): Report;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report.AsObject;
    static toObject(includeInstance: boolean, msg: Report): Report.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report;
    static deserializeBinaryFromReader(message: Report, reader: jspb.BinaryReader): Report;
}

export namespace Report {
    export type AsObject = {
        identity: number,
        useridentity: number,
        ctime: number,
        type: number,
        contenttype: number,
        content: string,
        comment: string,
        feedback: string,
        feedbackadminidentity: number,
    }
}
