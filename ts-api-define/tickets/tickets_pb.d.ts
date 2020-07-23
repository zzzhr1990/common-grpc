// package: services
// file: tickets/tickets.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";
import * as common_common_entity_pb from "../common/common_entity_pb";

export class Ticket extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Ticket;

    getUserIdentity(): number;
    setUserIdentity(value: number): Ticket;

    getTitle(): string;
    setTitle(value: string): Ticket;

    getReplyUserIdentity(): number;
    setReplyUserIdentity(value: number): Ticket;

    getType(): number;
    setType(value: number): Ticket;

    getStatus(): number;
    setStatus(value: number): Ticket;

    getCreateTime(): number;
    setCreateTime(value: number): Ticket;

    getRefreshTime(): number;
    setRefreshTime(value: number): Ticket;

    getMessage(): string;
    setMessage(value: string): Ticket;

    getImages(): string;
    setImages(value: string): Ticket;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Ticket.AsObject;
    static toObject(includeInstance: boolean, msg: Ticket): Ticket.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Ticket, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Ticket;
    static deserializeBinaryFromReader(message: Ticket, reader: jspb.BinaryReader): Ticket;
}

export namespace Ticket {
    export type AsObject = {
        identity: number,
        userIdentity: number,
        title: string,
        replyUserIdentity: number,
        type: number,
        status: number,
        createTime: number,
        refreshTime: number,
        message: string,
        images: string,
    }
}

export class Reply extends jspb.Message { 
    getIdentity(): number;
    setIdentity(value: number): Reply;

    getUserIdentity(): number;
    setUserIdentity(value: number): Reply;

    getTicketIdentity(): number;
    setTicketIdentity(value: number): Reply;

    getCreateTime(): number;
    setCreateTime(value: number): Reply;

    getMessage(): string;
    setMessage(value: string): Reply;

    getImages(): string;
    setImages(value: string): Reply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): Reply.AsObject;
    static toObject(includeInstance: boolean, msg: Reply): Reply.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: Reply, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): Reply;
    static deserializeBinaryFromReader(message: Reply, reader: jspb.BinaryReader): Reply;
}

export namespace Reply {
    export type AsObject = {
        identity: number,
        userIdentity: number,
        ticketIdentity: number,
        createTime: number,
        message: string,
        images: string,
    }
}

export class TicketListRequest extends jspb.Message { 
    getUserIdentity(): number;
    setUserIdentity(value: number): TicketListRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): TicketListRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): TicketListRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: TicketListRequest): TicketListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketListRequest;
    static deserializeBinaryFromReader(message: TicketListRequest, reader: jspb.BinaryReader): TicketListRequest;
}

export namespace TicketListRequest {
    export type AsObject = {
        userIdentity: number,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    }
}

export class ReplyListRequest extends jspb.Message { 
    getTicketIdentity(): number;
    setTicketIdentity(value: number): ReplyListRequest;

    getUserIdentity(): number;
    setUserIdentity(value: number): ReplyListRequest;


    hasListInfo(): boolean;
    clearListInfo(): void;
    getListInfo(): common_common_entity_pb.ListInfo | undefined;
    setListInfo(value?: common_common_entity_pb.ListInfo): ReplyListRequest;

    clearOrderByList(): void;
    getOrderByList(): Array<common_common_entity_pb.OrderByRequest>;
    setOrderByList(value: Array<common_common_entity_pb.OrderByRequest>): ReplyListRequest;
    addOrderBy(value?: common_common_entity_pb.OrderByRequest, index?: number): common_common_entity_pb.OrderByRequest;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplyListRequest.AsObject;
    static toObject(includeInstance: boolean, msg: ReplyListRequest): ReplyListRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplyListRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplyListRequest;
    static deserializeBinaryFromReader(message: ReplyListRequest, reader: jspb.BinaryReader): ReplyListRequest;
}

export namespace ReplyListRequest {
    export type AsObject = {
        ticketIdentity: number,
        userIdentity: number,
        listInfo?: common_common_entity_pb.ListInfo.AsObject,
        orderByList: Array<common_common_entity_pb.OrderByRequest.AsObject>,
    }
}

export class TicketListResponse extends jspb.Message { 
    clearDataList(): void;
    getDataList(): Array<Ticket>;
    setDataList(value: Array<Ticket>): TicketListResponse;
    addData(value?: Ticket, index?: number): Ticket;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): TicketListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: TicketListResponse): TicketListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: TicketListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): TicketListResponse;
    static deserializeBinaryFromReader(message: TicketListResponse, reader: jspb.BinaryReader): TicketListResponse;
}

export namespace TicketListResponse {
    export type AsObject = {
        dataList: Array<Ticket.AsObject>,
    }
}

export class ReplyListResponse extends jspb.Message { 

    hasTicket(): boolean;
    clearTicket(): void;
    getTicket(): Ticket | undefined;
    setTicket(value?: Ticket): ReplyListResponse;

    clearDataList(): void;
    getDataList(): Array<Reply>;
    setDataList(value: Array<Reply>): ReplyListResponse;
    addData(value?: Reply, index?: number): Reply;


    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): ReplyListResponse.AsObject;
    static toObject(includeInstance: boolean, msg: ReplyListResponse): ReplyListResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: ReplyListResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): ReplyListResponse;
    static deserializeBinaryFromReader(message: ReplyListResponse, reader: jspb.BinaryReader): ReplyListResponse;
}

export namespace ReplyListResponse {
    export type AsObject = {
        ticket?: Ticket.AsObject,
        dataList: Array<Reply.AsObject>,
    }
}
