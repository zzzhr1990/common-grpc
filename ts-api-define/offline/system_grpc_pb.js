// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var offline_system_pb = require('../offline/system_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_StringEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.StringEntity)) {
    throw new Error('Expected argument of type services.StringEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StringEntity(buffer_arg) {
  return common_common_entity_pb.StringEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemTask(arg) {
  if (!(arg instanceof offline_system_pb.SystemTask)) {
    throw new Error('Expected argument of type services.SystemTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemTask(buffer_arg) {
  return offline_system_pb.SystemTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemTaskDetail(arg) {
  if (!(arg instanceof offline_system_pb.SystemTaskDetail)) {
    throw new Error('Expected argument of type services.SystemTaskDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemTaskDetail(buffer_arg) {
  return offline_system_pb.SystemTaskDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemTaskFetchRequest(arg) {
  if (!(arg instanceof offline_system_pb.SystemTaskFetchRequest)) {
    throw new Error('Expected argument of type services.SystemTaskFetchRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemTaskFetchRequest(buffer_arg) {
  return offline_system_pb.SystemTaskFetchRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemTaskList(arg) {
  if (!(arg instanceof offline_system_pb.SystemTaskList)) {
    throw new Error('Expected argument of type services.SystemTaskList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemTaskList(buffer_arg) {
  return offline_system_pb.SystemTaskList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskFile(arg) {
  if (!(arg instanceof offline_system_pb.TaskFile)) {
    throw new Error('Expected argument of type services.TaskFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskFile(buffer_arg) {
  return offline_system_pb.TaskFile.deserializeBinary(new Uint8Array(buffer_arg));
}


var SystemTaskServiceService = exports.SystemTaskServiceService = {
  create: {
    path: '/services.SystemTaskService/create',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTask,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTask,
    responseDeserialize: deserialize_services_SystemTask,
  },
  // rpc parse (SystemTask) returns (SystemTaskDetail) {}
  update: {
    path: '/services.SystemTaskService/update',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTask,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTask,
    responseDeserialize: deserialize_services_SystemTask,
  },
  // rpc updateProgress (UpdateProgressRequest) returns (BoolEntity) {}
  // rpc batchGet (BatchGetRequest) returns (BatchGetResponse) {}
  get: {
    path: '/services.SystemTaskService/get',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTask,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTask,
    responseDeserialize: deserialize_services_SystemTask,
  },
  getList: {
    path: '/services.SystemTaskService/getList',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.StringEntity,
    responseType: offline_system_pb.SystemTaskList,
    requestSerialize: serialize_services_StringEntity,
    requestDeserialize: deserialize_services_StringEntity,
    responseSerialize: serialize_services_SystemTaskList,
    responseDeserialize: deserialize_services_SystemTaskList,
  },
  // getDetail detail
  getDetail: {
    path: '/services.SystemTaskService/getDetail',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTaskDetail,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTaskDetail,
    responseDeserialize: deserialize_services_SystemTaskDetail,
  },
  fetch: {
    path: '/services.SystemTaskService/fetch',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTaskFetchRequest,
    responseType: offline_system_pb.SystemTaskList,
    requestSerialize: serialize_services_SystemTaskFetchRequest,
    requestDeserialize: deserialize_services_SystemTaskFetchRequest,
    responseSerialize: serialize_services_SystemTaskList,
    responseDeserialize: deserialize_services_SystemTaskList,
  },
  // rpc getDetail (SystemOfflineTask) returns (SystemOfflineTaskDetail) {}
  // rpc updateFile (SystemOfflineTaskFile) returns (BoolEntity) {}
  uploadFile: {
    path: '/services.SystemTaskService/uploadFile',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.TaskFile,
    responseType: offline_system_pb.TaskFile,
    requestSerialize: serialize_services_TaskFile,
    requestDeserialize: deserialize_services_TaskFile,
    responseSerialize: serialize_services_TaskFile,
    responseDeserialize: deserialize_services_TaskFile,
  },
  updateFile: {
    path: '/services.SystemTaskService/updateFile',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.TaskFile,
    responseType: offline_system_pb.TaskFile,
    requestSerialize: serialize_services_TaskFile,
    requestDeserialize: deserialize_services_TaskFile,
    responseSerialize: serialize_services_TaskFile,
    responseDeserialize: deserialize_services_TaskFile,
  },
  // rpc changeStatus (StatusChangeRequest) returns (BoolEntity) {}
  complete: {
    path: '/services.SystemTaskService/complete',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTask,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTask,
    responseDeserialize: deserialize_services_SystemTask,
  },
  // ErrorRequest
  error: {
    path: '/services.SystemTaskService/error',
    requestStream: false,
    responseStream: false,
    requestType: offline_system_pb.SystemTask,
    responseType: offline_system_pb.SystemTask,
    requestSerialize: serialize_services_SystemTask,
    requestDeserialize: deserialize_services_SystemTask,
    responseSerialize: serialize_services_SystemTask,
    responseDeserialize: deserialize_services_SystemTask,
  },
};

exports.SystemTaskServiceClient = grpc.makeGenericClientConstructor(SystemTaskServiceService);
