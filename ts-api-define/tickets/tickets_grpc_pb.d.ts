// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: tickets/tickets.proto

import * as tickets_tickets_pb from "../tickets/tickets_pb";
import * as grpc from "grpc";

interface ITicketsServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
  list: grpc.MethodDefinition<tickets_tickets_pb.TicketListRequest, tickets_tickets_pb.TicketListResponse>;
  listReply: grpc.MethodDefinition<tickets_tickets_pb.ReplyListRequest, tickets_tickets_pb.ReplyListResponse>;
  get: grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
  getReply: grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
  replyTicket: grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
  close: grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
  delete: grpc.MethodDefinition<tickets_tickets_pb.Ticket, tickets_tickets_pb.Ticket>;
  deleteReply: grpc.MethodDefinition<tickets_tickets_pb.Reply, tickets_tickets_pb.Reply>;
}

export const TicketsServiceService: ITicketsServiceService;

export class TicketsServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: tickets_tickets_pb.Ticket, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  create(argument: tickets_tickets_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  create(argument: tickets_tickets_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  list(argument: tickets_tickets_pb.TicketListRequest, callback: grpc.requestCallback<tickets_tickets_pb.TicketListResponse>): grpc.ClientUnaryCall;
  list(argument: tickets_tickets_pb.TicketListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.TicketListResponse>): grpc.ClientUnaryCall;
  list(argument: tickets_tickets_pb.TicketListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.TicketListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_tickets_pb.ReplyListRequest, callback: grpc.requestCallback<tickets_tickets_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_tickets_pb.ReplyListRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  listReply(argument: tickets_tickets_pb.ReplyListRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.ReplyListResponse>): grpc.ClientUnaryCall;
  get(argument: tickets_tickets_pb.Ticket, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  get(argument: tickets_tickets_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  get(argument: tickets_tickets_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  getReply(argument: tickets_tickets_pb.Reply, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  getReply(argument: tickets_tickets_pb.Reply, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  getReply(argument: tickets_tickets_pb.Reply, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_tickets_pb.Reply, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_tickets_pb.Reply, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  replyTicket(argument: tickets_tickets_pb.Reply, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  close(argument: tickets_tickets_pb.Ticket, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  close(argument: tickets_tickets_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  close(argument: tickets_tickets_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  delete(argument: tickets_tickets_pb.Ticket, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  delete(argument: tickets_tickets_pb.Ticket, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  delete(argument: tickets_tickets_pb.Ticket, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Ticket>): grpc.ClientUnaryCall;
  deleteReply(argument: tickets_tickets_pb.Reply, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  deleteReply(argument: tickets_tickets_pb.Reply, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
  deleteReply(argument: tickets_tickets_pb.Reply, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<tickets_tickets_pb.Reply>): grpc.ClientUnaryCall;
}
