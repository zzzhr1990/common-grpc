// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var tickets_bill_pb = require('../tickets/bill_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_Reply(arg) {
  if (!(arg instanceof tickets_bill_pb.Reply)) {
    throw new Error('Expected argument of type services.Reply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Reply(buffer_arg) {
  return tickets_bill_pb.Reply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ReplyListRequest(arg) {
  if (!(arg instanceof tickets_bill_pb.ReplyListRequest)) {
    throw new Error('Expected argument of type services.ReplyListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ReplyListRequest(buffer_arg) {
  return tickets_bill_pb.ReplyListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ReplyListResponse(arg) {
  if (!(arg instanceof tickets_bill_pb.ReplyListResponse)) {
    throw new Error('Expected argument of type services.ReplyListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ReplyListResponse(buffer_arg) {
  return tickets_bill_pb.ReplyListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_Ticket(arg) {
  if (!(arg instanceof tickets_bill_pb.Ticket)) {
    throw new Error('Expected argument of type services.Ticket');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Ticket(buffer_arg) {
  return tickets_bill_pb.Ticket.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TicketListRequest(arg) {
  if (!(arg instanceof tickets_bill_pb.TicketListRequest)) {
    throw new Error('Expected argument of type services.TicketListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TicketListRequest(buffer_arg) {
  return tickets_bill_pb.TicketListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TicketListResponse(arg) {
  if (!(arg instanceof tickets_bill_pb.TicketListResponse)) {
    throw new Error('Expected argument of type services.TicketListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TicketListResponse(buffer_arg) {
  return tickets_bill_pb.TicketListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var TicketsServiceService = exports.TicketsServiceService = {
  // Create bill（仅后台使用）
  create: {
    path: '/services.TicketsService/Create',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.Ticket,
    responseType: tickets_bill_pb.Ticket,
    requestSerialize: serialize_services_Ticket,
    requestDeserialize: deserialize_services_Ticket,
    responseSerialize: serialize_services_Ticket,
    responseDeserialize: deserialize_services_Ticket,
  },
  list: {
    path: '/services.TicketsService/List',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.TicketListRequest,
    responseType: tickets_bill_pb.TicketListResponse,
    requestSerialize: serialize_services_TicketListRequest,
    requestDeserialize: deserialize_services_TicketListRequest,
    responseSerialize: serialize_services_TicketListResponse,
    responseDeserialize: deserialize_services_TicketListResponse,
  },
  listReply: {
    path: '/services.TicketsService/ListReply',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.ReplyListRequest,
    responseType: tickets_bill_pb.ReplyListResponse,
    requestSerialize: serialize_services_ReplyListRequest,
    requestDeserialize: deserialize_services_ReplyListRequest,
    responseSerialize: serialize_services_ReplyListResponse,
    responseDeserialize: deserialize_services_ReplyListResponse,
  },
  get: {
    path: '/services.TicketsService/Get',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.Ticket,
    responseType: tickets_bill_pb.Ticket,
    requestSerialize: serialize_services_Ticket,
    requestDeserialize: deserialize_services_Ticket,
    responseSerialize: serialize_services_Ticket,
    responseDeserialize: deserialize_services_Ticket,
  },
  getReply: {
    path: '/services.TicketsService/GetReply',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.Reply,
    responseType: tickets_bill_pb.Reply,
    requestSerialize: serialize_services_Reply,
    requestDeserialize: deserialize_services_Reply,
    responseSerialize: serialize_services_Reply,
    responseDeserialize: deserialize_services_Reply,
  },
  replyTicket: {
    path: '/services.TicketsService/ReplyTicket',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.Reply,
    responseType: tickets_bill_pb.Reply,
    requestSerialize: serialize_services_Reply,
    requestDeserialize: deserialize_services_Reply,
    responseSerialize: serialize_services_Reply,
    responseDeserialize: deserialize_services_Reply,
  },
  close: {
    path: '/services.TicketsService/Close',
    requestStream: false,
    responseStream: false,
    requestType: tickets_bill_pb.Ticket,
    responseType: tickets_bill_pb.Ticket,
    requestSerialize: serialize_services_Ticket,
    requestDeserialize: deserialize_services_Ticket,
    responseSerialize: serialize_services_Ticket,
    responseDeserialize: deserialize_services_Ticket,
  },
};

exports.TicketsServiceClient = grpc.makeGenericClientConstructor(TicketsServiceService);
