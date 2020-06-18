// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bill_bill_pb = require('../bill/bill_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_Order(arg) {
  if (!(arg instanceof bill_bill_pb.Order)) {
    throw new Error('Expected argument of type services.Order');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Order(buffer_arg) {
  return bill_bill_pb.Order.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_OrderListRequest(arg) {
  if (!(arg instanceof bill_bill_pb.OrderListRequest)) {
    throw new Error('Expected argument of type services.OrderListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_OrderListRequest(buffer_arg) {
  return bill_bill_pb.OrderListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_OrderListResponse(arg) {
  if (!(arg instanceof bill_bill_pb.OrderListResponse)) {
    throw new Error('Expected argument of type services.OrderListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_OrderListResponse(buffer_arg) {
  return bill_bill_pb.OrderListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PlanListRequest(arg) {
  if (!(arg instanceof bill_bill_pb.PlanListRequest)) {
    throw new Error('Expected argument of type services.PlanListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PlanListRequest(buffer_arg) {
  return bill_bill_pb.PlanListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PlanListResponse(arg) {
  if (!(arg instanceof bill_bill_pb.PlanListResponse)) {
    throw new Error('Expected argument of type services.PlanListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PlanListResponse(buffer_arg) {
  return bill_bill_pb.PlanListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OrderServiceService = exports.OrderServiceService = {
  // Create bill（仅后台使用）
create: {
    path: '/services.OrderService/Create',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
  list: {
    path: '/services.OrderService/List',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.OrderListRequest,
    responseType: bill_bill_pb.OrderListResponse,
    requestSerialize: serialize_services_OrderListRequest,
    requestDeserialize: deserialize_services_OrderListRequest,
    responseSerialize: serialize_services_OrderListResponse,
    responseDeserialize: deserialize_services_OrderListResponse,
  },
  listPlan: {
    path: '/services.OrderService/ListPlan',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.PlanListRequest,
    responseType: bill_bill_pb.PlanListResponse,
    requestSerialize: serialize_services_PlanListRequest,
    requestDeserialize: deserialize_services_PlanListRequest,
    responseSerialize: serialize_services_PlanListResponse,
    responseDeserialize: deserialize_services_PlanListResponse,
  },
  get: {
    path: '/services.OrderService/Get',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
  update: {
    path: '/services.OrderService/Update',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
  complete: {
    path: '/services.OrderService/Complete',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
  fail: {
    path: '/services.OrderService/Fail',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
  cancel: {
    path: '/services.OrderService/Cancel',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Order,
    responseType: bill_bill_pb.Order,
    requestSerialize: serialize_services_Order,
    requestDeserialize: deserialize_services_Order,
    responseSerialize: serialize_services_Order,
    responseDeserialize: deserialize_services_Order,
  },
};

exports.OrderServiceClient = grpc.makeGenericClientConstructor(OrderServiceService);
