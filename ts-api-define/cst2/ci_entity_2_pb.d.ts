// package: services
// file: cst2/ci_entity_2.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class Report2 extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Report2;

    getUseridentity(): number;
    setUseridentity(value: number): Report2;

    getCtime(): number;
    setCtime(value: number): Report2;

    getType(): number;
    setType(value: number): Report2;

    getContenttype(): number;
    setContenttype(value: number): Report2;

    getContent(): string;
    setContent(value: string): Report2;

    getComment(): string;
    setComment(value: string): Report2;

    getFeedback(): string;
    setFeedback(value: string): Report2;

    getFeedbackadminidentity(): number;
    setFeedbackadminidentity(value: number): Report2;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Report2.AsObject;
    static toObject(includeInstance: boolean, msg: Report2): Report2.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Report2, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Report2;
    static deserializeBinaryFromReader(message: Report2, reader: jspb.BinaryReader): Report2;
}

export namespace Report2 {
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
