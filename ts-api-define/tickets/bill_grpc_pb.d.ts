// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: tickets/bill.proto

import * as tickets_bill_pb from "../tickets/bill_pb";
import * as grpc from "grpc";

interface ITicketsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<tickets_bill_pb.Ticket, tickets_bill_pb.Ticket>;
  list: grpc.MethodDefinition<tickets_bill_pb.TicketListRequest, tickets_bill_pb.TicketListResponse>;
  listReply: grpc.MethodDefinition<tickets_bill_pb.ReplyListRequest, tickets_bill_pb.ReplyListResponse>;
  get: grpc.MethodDefinition<tickets_bill_pb.Ticket, tickets_bill_pb.Ticket>;
  getReply: grpc.MethodDefinition<tickets_bill_pb.Reply, tickets_bill_pb.Reply>;
  replyTicket: grpc.MethodDefinition<tickets_bill_pb.Reply, tickets_bill_pb.Reply>;
  close: grpc.MethodDefinition<tickets_bill_pb.Ticket, tickets_bill_pb.Ticket>;
}

export const TicketsServiceService: ITicketsServiceService;

export class TicketsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: tickets_bill_pb.Ticket, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  create(argument: tickets_bill_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  create(argument: tickets_bill_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  list(argument: tickets_bill_pb.TicketListRequest, callback: grpc.requestCallback<tickets_bill_pb.TicketListResponse>): grpc.ClientUnaryCall;
  list(argument: tickets_bill_pb.TicketListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.TicketListResponse>): grpc.ClientUnaryCall;
  list(argument: tickets_bill_pb.TicketListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.TicketListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_bill_pb.ReplyListRequest, callback: grpc.requestCallback<tickets_bill_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_bill_pb.ReplyListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_bill_pb.ReplyListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  get(argument: tickets_bill_pb.Ticket, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  get(argument: tickets_bill_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  get(argument: tickets_bill_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  getReply(argument: tickets_bill_pb.Reply, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  getReply(argument: tickets_bill_pb.Reply, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  getReply(argument: tickets_bill_pb.Reply, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_bill_pb.Reply, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_bill_pb.Reply, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_bill_pb.Reply, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Reply>): grpc.ClientUnaryCall;
  close(argument: tickets_bill_pb.Ticket, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  close(argument: tickets_bill_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
  close(argument: tickets_bill_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_bill_pb.Ticket>): grpc.ClientUnaryCall;
}
