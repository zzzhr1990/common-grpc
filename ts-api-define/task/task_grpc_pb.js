// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var task_task_pb = require('../task/task_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ErrorTask(arg) {
  if (!(arg instanceof task_task_pb.ErrorTask)) {
    throw new Error('Expected argument of type services.ErrorTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ErrorTask(buffer_arg) {
  return task_task_pb.ErrorTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FetchRequest(arg) {
  if (!(arg instanceof task_task_pb.FetchRequest)) {
    throw new Error('Expected argument of type services.FetchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FetchRequest(buffer_arg) {
  return task_task_pb.FetchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FetchResponse(arg) {
  if (!(arg instanceof task_task_pb.FetchResponse)) {
    throw new Error('Expected argument of type services.FetchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FetchResponse(buffer_arg) {
  return task_task_pb.FetchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SimpleTask(arg) {
  if (!(arg instanceof task_task_pb.SimpleTask)) {
    throw new Error('Expected argument of type services.SimpleTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SimpleTask(buffer_arg) {
  return task_task_pb.SimpleTask.deserializeBinary(new Uint8Array(buffer_arg));
}


var SimpleTaskCenterServiceService = exports.SimpleTaskCenterServiceService = {
  create: {
    path: '/services.SimpleTaskCenterService/create',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.SimpleTask,
    responseType: task_task_pb.SimpleTask,
    requestSerialize: serialize_services_SimpleTask,
    requestDeserialize: deserialize_services_SimpleTask,
    responseSerialize: serialize_services_SimpleTask,
    responseDeserialize: deserialize_services_SimpleTask,
  },
  fetch: {
    path: '/services.SimpleTaskCenterService/fetch',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.FetchRequest,
    responseType: task_task_pb.FetchResponse,
    requestSerialize: serialize_services_FetchRequest,
    requestDeserialize: deserialize_services_FetchRequest,
    responseSerialize: serialize_services_FetchResponse,
    responseDeserialize: deserialize_services_FetchResponse,
  },
  // rpc delete(SimpleTask) returns (BoolEntity) {} // del
complete: {
    path: '/services.SimpleTaskCenterService/complete',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.SimpleTask,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SimpleTask,
    requestDeserialize: deserialize_services_SimpleTask,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  update: {
    path: '/services.SimpleTaskCenterService/update',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.SimpleTask,
    responseType: task_task_pb.SimpleTask,
    requestSerialize: serialize_services_SimpleTask,
    requestDeserialize: deserialize_services_SimpleTask,
    responseSerialize: serialize_services_SimpleTask,
    responseDeserialize: deserialize_services_SimpleTask,
  },
  error: {
    path: '/services.SimpleTaskCenterService/error',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.ErrorTask,
    responseType: task_task_pb.ErrorTask,
    requestSerialize: serialize_services_ErrorTask,
    requestDeserialize: deserialize_services_ErrorTask,
    responseSerialize: serialize_services_ErrorTask,
    responseDeserialize: deserialize_services_ErrorTask,
  },
  // rpc list(ListRequest) returns (FetchResponse) {} // del
get: {
    path: '/services.SimpleTaskCenterService/get',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.SimpleTask,
    responseType: task_task_pb.SimpleTask,
    requestSerialize: serialize_services_SimpleTask,
    requestDeserialize: deserialize_services_SimpleTask,
    responseSerialize: serialize_services_SimpleTask,
    responseDeserialize: deserialize_services_SimpleTask,
  },
  reset: {
    path: '/services.SimpleTaskCenterService/reset',
    requestStream: false,
    responseStream: false,
    requestType: task_task_pb.ErrorTask,
    responseType: task_task_pb.SimpleTask,
    requestSerialize: serialize_services_ErrorTask,
    requestDeserialize: deserialize_services_ErrorTask,
    responseSerialize: serialize_services_SimpleTask,
    responseDeserialize: deserialize_services_SimpleTask,
  },
};

exports.SimpleTaskCenterServiceClient = grpc.makeGenericClientConstructor(SimpleTaskCenterServiceService);
