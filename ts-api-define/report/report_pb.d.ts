// package: services
// file: report/report.proto

import * as jspb from "google-protobuf";

export class Report extends jspb.Message {
  getIdentity(): number;
  setIdentity(value: number): void;

  getUseridentity(): number;
  setUseridentity(value: number): void;

  getCtime(): number;
  setCtime(value: number): void;

  getType(): number;
  setType(value: number): void;

  getContenttype(): number;
  setContenttype(value: number): void;

  getContent(): string;
  setContent(value: string): void;

  getComment(): string;
  setComment(value: string): void;

  getFeedback(): string;
  setFeedback(value: string): void;

  getFeedbackadminidentity(): number;
  setFeedbackadminidentity(value: number): void;

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

