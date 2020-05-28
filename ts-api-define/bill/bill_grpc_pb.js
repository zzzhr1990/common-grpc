// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var bill_bill_pb = require('../bill/bill_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

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

function serialize_services_Subscribe(arg) {
  if (!(arg instanceof bill_bill_pb.Subscribe)) {
    throw new Error('Expected argument of type services.Subscribe');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Subscribe(buffer_arg) {
  return bill_bill_pb.Subscribe.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SubscribeListRequest(arg) {
  if (!(arg instanceof bill_bill_pb.SubscribeListRequest)) {
    throw new Error('Expected argument of type services.SubscribeListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SubscribeListRequest(buffer_arg) {
  return bill_bill_pb.SubscribeListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SubscribeListResponse(arg) {
  if (!(arg instanceof bill_bill_pb.SubscribeListResponse)) {
    throw new Error('Expected argument of type services.SubscribeListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SubscribeListResponse(buffer_arg) {
  return bill_bill_pb.SubscribeListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var SubscribeServiceService = exports.SubscribeServiceService = {
  // Create bill（仅后台使用）
  create: {
    path: '/services.SubscribeService/Create',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Subscribe,
    responseType: bill_bill_pb.Subscribe,
    requestSerialize: serialize_services_Subscribe,
    requestDeserialize: deserialize_services_Subscribe,
    responseSerialize: serialize_services_Subscribe,
    responseDeserialize: deserialize_services_Subscribe,
  },
  list: {
    path: '/services.SubscribeService/List',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.SubscribeListRequest,
    responseType: bill_bill_pb.SubscribeListResponse,
    requestSerialize: serialize_services_SubscribeListRequest,
    requestDeserialize: deserialize_services_SubscribeListRequest,
    responseSerialize: serialize_services_SubscribeListResponse,
    responseDeserialize: deserialize_services_SubscribeListResponse,
  },
  listPlan: {
    path: '/services.SubscribeService/ListPlan',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.PlanListRequest,
    responseType: bill_bill_pb.PlanListResponse,
    requestSerialize: serialize_services_PlanListRequest,
    requestDeserialize: deserialize_services_PlanListRequest,
    responseSerialize: serialize_services_PlanListResponse,
    responseDeserialize: deserialize_services_PlanListResponse,
  },
  check: {
    path: '/services.SubscribeService/Check',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Subscribe,
    responseType: bill_bill_pb.Subscribe,
    requestSerialize: serialize_services_Subscribe,
    requestDeserialize: deserialize_services_Subscribe,
    responseSerialize: serialize_services_Subscribe,
    responseDeserialize: deserialize_services_Subscribe,
  },
  update: {
    path: '/services.SubscribeService/Update',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Subscribe,
    responseType: bill_bill_pb.Subscribe,
    requestSerialize: serialize_services_Subscribe,
    requestDeserialize: deserialize_services_Subscribe,
    responseSerialize: serialize_services_Subscribe,
    responseDeserialize: deserialize_services_Subscribe,
  },
  complete: {
    path: '/services.SubscribeService/Complete',
    requestStream: false,
    responseStream: false,
    requestType: bill_bill_pb.Subscribe,
    responseType: bill_bill_pb.Subscribe,
    requestSerialize: serialize_services_Subscribe,
    requestDeserialize: deserialize_services_Subscribe,
    responseSerialize: serialize_services_Subscribe,
    responseDeserialize: deserialize_services_Subscribe,
  },
};

exports.SubscribeServiceClient = grpc.makeGenericClientConstructor(SubscribeServiceService);
