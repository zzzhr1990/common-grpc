// package: services
// file: tickets/tickets.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as tickets_tickets_pb from "../tickets/tickets_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";

interface ITicketsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: ITicketsServiceService_ICreate;
    list: ITicketsServiceService_IList;
    listReply: ITicketsServiceService_IListReply;
    get: ITicketsServiceService_IGet;
    getReply: ITicketsServiceService_IGetReply;
    replyTicket: ITicketsServiceService_IReplyTicket;
    close: ITicketsServiceService_IClose;
    delete: ITicketsServiceService_IDelete;
    deleteReply: ITicketsServiceService_IDeleteReply;
}

interface ITicketsServiceService_ICreate extends grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket> {
    path: string; // "/services.TicketsService/Create"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
}
interface ITicketsServiceService_IList extends grpc.MethodDefinition<tickets_tickets_pb.TicketListRequest, tickets_tickets_pb.TicketListResponse> {
    path: string; // "/services.TicketsService/List"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.TicketListRequest>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.TicketListRequest>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.TicketListResponse>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.TicketListResponse>;
}
interface ITicketsServiceService_IListReply extends grpc.MethodDefinition<tickets_tickets_pb.ReplyListRequest, tickets_tickets_pb.ReplyListResponse> {
    path: string; // "/services.TicketsService/ListReply"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.ReplyListRequest>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.ReplyListRequest>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.ReplyListResponse>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.ReplyListResponse>;
}
interface ITicketsServiceService_IGet extends grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket> {
    path: string; // "/services.TicketsService/Get"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
}
interface ITicketsServiceService_IGetReply extends grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply> {
    path: string; // "/services.TicketsService/GetReply"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
}
interface ITicketsServiceService_IReplyTicket extends grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply> {
    path: string; // "/services.TicketsService/ReplyTicket"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
}
interface ITicketsServiceService_IClose extends grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket> {
    path: string; // "/services.TicketsService/Close"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
}
interface ITicketsServiceService_IDelete extends grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket> {
    path: string; // "/services.TicketsService/Delete"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Ticket>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Ticket>;
}
interface ITicketsServiceService_IDeleteReply extends grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply> {
    path: string; // "/services.TicketsService/DeleteReply"
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    requestDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
    responseSerialize: grpc.serialize<tickets_tickets_pb.Reply>;
    responseDeserialize: grpc.deserialize<tickets_tickets_pb.Reply>;
}

export const TicketsServiceService: ITicketsServiceService;

export interface ITicketsServiceServer {
    create: grpc.handleUnaryCall<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
    list: grpc.handleUnaryCall<tickets_tickets_pb.TicketListRequest, tickets_tickets_pb.TicketListResponse>;
    listReply: grpc.handleUnaryCall<tickets_tickets_pb.ReplyListRequest, tickets_tickets_pb.ReplyListResponse>;
    get: grpc.handleUnaryCall<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
    getReply: grpc.handleUnaryCall<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
    replyTicket: grpc.handleUnaryCall<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
    close: grpc.handleUnaryCall<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
    delete: grpc.handleUnaryCall<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
    deleteReply: grpc.handleUnaryCall<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
}

export interface ITicketsServiceClient {
    create(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    create(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    create(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    list(request: tickets_tickets_pb.TicketListRequest, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    list(request: tickets_tickets_pb.TicketListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    list(request: tickets_tickets_pb.TicketListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    listReply(request: tickets_tickets_pb.ReplyListRequest, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    listReply(request: tickets_tickets_pb.ReplyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    listReply(request: tickets_tickets_pb.ReplyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    get(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    get(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    get(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    getReply(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    getReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    getReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    replyTicket(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    replyTicket(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    replyTicket(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    close(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    close(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    close(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    delete(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    delete(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    delete(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    deleteReply(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    deleteReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    deleteReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
}

export class TicketsServiceClient extends grpc.Client implements ITicketsServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
    public create(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public create(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public create(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public list(request: tickets_tickets_pb.TicketListRequest, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    public list(request: tickets_tickets_pb.TicketListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    public list(request: tickets_tickets_pb.TicketListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.TicketListResponse) => void): grpc.ClientUnaryCall;
    public listReply(request: tickets_tickets_pb.ReplyListRequest, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    public listReply(request: tickets_tickets_pb.ReplyListRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    public listReply(request: tickets_tickets_pb.ReplyListRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.ReplyListResponse) => void): grpc.ClientUnaryCall;
    public get(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public get(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public get(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public getReply(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public getReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public getReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public replyTicket(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public replyTicket(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public replyTicket(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public close(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public close(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public close(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public delete(request: tickets_tickets_pb.Ticket, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public delete(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public delete(request: tickets_tickets_pb.Ticket, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Ticket) => void): grpc.ClientUnaryCall;
    public deleteReply(request: tickets_tickets_pb.Reply, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public deleteReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
    public deleteReply(request: tickets_tickets_pb.Reply, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: tickets_tickets_pb.Reply) => void): grpc.ClientUnaryCall;
}
