// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var remotetask_task_pb = require('../remotetask/task_pb.js');
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

function serialize_services_CallLater(arg) {
  if (!(arg instanceof remotetask_task_pb.CallLater)) {
    throw new Error('Expected argument of type services.CallLater');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CallLater(buffer_arg) {
  return remotetask_task_pb.CallLater.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_CallLaterErrorRequest(arg) {
  if (!(arg instanceof remotetask_task_pb.CallLaterErrorRequest)) {
    throw new Error('Expected argument of type services.CallLaterErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CallLaterErrorRequest(buffer_arg) {
  return remotetask_task_pb.CallLaterErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FetchCallLaterResponse(arg) {
  if (!(arg instanceof remotetask_task_pb.FetchCallLaterResponse)) {
    throw new Error('Expected argument of type services.FetchCallLaterResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FetchCallLaterResponse(buffer_arg) {
  return remotetask_task_pb.FetchCallLaterResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FetchRequest(arg) {
  if (!(arg instanceof remotetask_task_pb.FetchRequest)) {
    throw new Error('Expected argument of type services.FetchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FetchRequest(buffer_arg) {
  return remotetask_task_pb.FetchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FetchResponse(arg) {
  if (!(arg instanceof remotetask_task_pb.FetchResponse)) {
    throw new Error('Expected argument of type services.FetchResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FetchResponse(buffer_arg) {
  return remotetask_task_pb.FetchResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListRequest(arg) {
  if (!(arg instanceof remotetask_task_pb.ListRequest)) {
    throw new Error('Expected argument of type services.ListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListRequest(buffer_arg) {
  return remotetask_task_pb.ListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RemoteTask(arg) {
  if (!(arg instanceof remotetask_task_pb.RemoteTask)) {
    throw new Error('Expected argument of type services.RemoteTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RemoteTask(buffer_arg) {
  return remotetask_task_pb.RemoteTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_RemoteTaskErrorRequest(arg) {
  if (!(arg instanceof remotetask_task_pb.RemoteTaskErrorRequest)) {
    throw new Error('Expected argument of type services.RemoteTaskErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_RemoteTaskErrorRequest(buffer_arg) {
  return remotetask_task_pb.RemoteTaskErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SimpleRemoteTaskRequest(arg) {
  if (!(arg instanceof remotetask_task_pb.SimpleRemoteTaskRequest)) {
    throw new Error('Expected argument of type services.SimpleRemoteTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SimpleRemoteTaskRequest(buffer_arg) {
  return remotetask_task_pb.SimpleRemoteTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var RemoteTaskServiceService = exports.RemoteTaskServiceService = {
  create: {
    path: '/services.RemoteTaskService/create',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.RemoteTask,
    responseType: remotetask_task_pb.RemoteTask,
    requestSerialize: serialize_services_RemoteTask,
    requestDeserialize: deserialize_services_RemoteTask,
    responseSerialize: serialize_services_RemoteTask,
    responseDeserialize: deserialize_services_RemoteTask,
  },
  fetch: {
    path: '/services.RemoteTaskService/fetch',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.FetchRequest,
    responseType: remotetask_task_pb.FetchResponse,
    requestSerialize: serialize_services_FetchRequest,
    requestDeserialize: deserialize_services_FetchRequest,
    responseSerialize: serialize_services_FetchResponse,
    responseDeserialize: deserialize_services_FetchResponse,
  },
  delete: {
    path: '/services.RemoteTaskService/delete',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.SimpleRemoteTaskRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SimpleRemoteTaskRequest,
    requestDeserialize: deserialize_services_SimpleRemoteTaskRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  complete: {
    path: '/services.RemoteTaskService/complete',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.SimpleRemoteTaskRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SimpleRemoteTaskRequest,
    requestDeserialize: deserialize_services_SimpleRemoteTaskRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  update: {
    path: '/services.RemoteTaskService/update',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.RemoteTask,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_RemoteTask,
    requestDeserialize: deserialize_services_RemoteTask,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  error: {
    path: '/services.RemoteTaskService/error',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.RemoteTaskErrorRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_RemoteTaskErrorRequest,
    requestDeserialize: deserialize_services_RemoteTaskErrorRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  list: {
    path: '/services.RemoteTaskService/list',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.ListRequest,
    responseType: remotetask_task_pb.FetchResponse,
    requestSerialize: serialize_services_ListRequest,
    requestDeserialize: deserialize_services_ListRequest,
    responseSerialize: serialize_services_FetchResponse,
    responseDeserialize: deserialize_services_FetchResponse,
  },
  get: {
    path: '/services.RemoteTaskService/get',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.RemoteTask,
    responseType: remotetask_task_pb.RemoteTask,
    requestSerialize: serialize_services_RemoteTask,
    requestDeserialize: deserialize_services_RemoteTask,
    responseSerialize: serialize_services_RemoteTask,
    responseDeserialize: deserialize_services_RemoteTask,
  },
  reset: {
    path: '/services.RemoteTaskService/reset',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.RemoteTask,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_RemoteTask,
    requestDeserialize: deserialize_services_RemoteTask,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  // CallLater
  createCallLater: {
    path: '/services.RemoteTaskService/createCallLater',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.CallLater,
    responseType: remotetask_task_pb.CallLater,
    requestSerialize: serialize_services_CallLater,
    requestDeserialize: deserialize_services_CallLater,
    responseSerialize: serialize_services_CallLater,
    responseDeserialize: deserialize_services_CallLater,
  },
  fetchCallLater: {
    path: '/services.RemoteTaskService/fetchCallLater',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.FetchRequest,
    responseType: remotetask_task_pb.FetchCallLaterResponse,
    requestSerialize: serialize_services_FetchRequest,
    requestDeserialize: deserialize_services_FetchRequest,
    responseSerialize: serialize_services_FetchCallLaterResponse,
    responseDeserialize: deserialize_services_FetchCallLaterResponse,
  },
  completeCallLater: {
    path: '/services.RemoteTaskService/completeCallLater',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.CallLater,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_CallLater,
    requestDeserialize: deserialize_services_CallLater,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  errorCallLater: {
    path: '/services.RemoteTaskService/errorCallLater',
    requestStream: false,
    responseStream: false,
    requestType: remotetask_task_pb.CallLaterErrorRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_CallLaterErrorRequest,
    requestDeserialize: deserialize_services_CallLaterErrorRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.RemoteTaskServiceClient = grpc.makeGenericClientConstructor(RemoteTaskServiceService);
