// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var offline_systemtask_pb = require('../offline/systemtask_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BatchGetRequest(arg) {
  if (!(arg instanceof offline_systemtask_pb.BatchGetRequest)) {
    throw new Error('Expected argument of type services.BatchGetRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchGetRequest(buffer_arg) {
  return offline_systemtask_pb.BatchGetRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BatchGetResponse(arg) {
  if (!(arg instanceof offline_systemtask_pb.BatchGetResponse)) {
    throw new Error('Expected argument of type services.BatchGetResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchGetResponse(buffer_arg) {
  return offline_systemtask_pb.BatchGetResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ErrorRequest(arg) {
  if (!(arg instanceof offline_systemtask_pb.ErrorRequest)) {
    throw new Error('Expected argument of type services.ErrorRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ErrorRequest(buffer_arg) {
  return offline_systemtask_pb.ErrorRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_Int64Entity(arg) {
  if (!(arg instanceof common_common_entity_pb.Int64Entity)) {
    throw new Error('Expected argument of type services.Int64Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Int64Entity(buffer_arg) {
  return common_common_entity_pb.Int64Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_StatusChangeRequest(arg) {
  if (!(arg instanceof offline_systemtask_pb.StatusChangeRequest)) {
    throw new Error('Expected argument of type services.StatusChangeRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StatusChangeRequest(buffer_arg) {
  return offline_systemtask_pb.StatusChangeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemOfflineTask(arg) {
  if (!(arg instanceof offline_systemtask_pb.SystemOfflineTask)) {
    throw new Error('Expected argument of type services.SystemOfflineTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemOfflineTask(buffer_arg) {
  return offline_systemtask_pb.SystemOfflineTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemOfflineTaskFile(arg) {
  if (!(arg instanceof offline_systemtask_pb.SystemOfflineTaskFile)) {
    throw new Error('Expected argument of type services.SystemOfflineTaskFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemOfflineTaskFile(buffer_arg) {
  return offline_systemtask_pb.SystemOfflineTaskFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemOfflineTaskFiles(arg) {
  if (!(arg instanceof offline_systemtask_pb.SystemOfflineTaskFiles)) {
    throw new Error('Expected argument of type services.SystemOfflineTaskFiles');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemOfflineTaskFiles(buffer_arg) {
  return offline_systemtask_pb.SystemOfflineTaskFiles.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemOfflineTaskMeta(arg) {
  if (!(arg instanceof offline_systemtask_pb.SystemOfflineTaskMeta)) {
    throw new Error('Expected argument of type services.SystemOfflineTaskMeta');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemOfflineTaskMeta(buffer_arg) {
  return offline_systemtask_pb.SystemOfflineTaskMeta.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UpdateProgressRequest(arg) {
  if (!(arg instanceof offline_systemtask_pb.UpdateProgressRequest)) {
    throw new Error('Expected argument of type services.UpdateProgressRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UpdateProgressRequest(buffer_arg) {
  return offline_systemtask_pb.UpdateProgressRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var SystemOfflineTaskServiceService = exports.SystemOfflineTaskServiceService = {
  create: {
    path: '/services.SystemOfflineTaskService/create',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTask,
    responseType: offline_systemtask_pb.SystemOfflineTask,
    requestSerialize: serialize_services_SystemOfflineTask,
    requestDeserialize: deserialize_services_SystemOfflineTask,
    responseSerialize: serialize_services_SystemOfflineTask,
    responseDeserialize: deserialize_services_SystemOfflineTask,
  },
  update: {
    path: '/services.SystemOfflineTaskService/update',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTaskMeta,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_SystemOfflineTaskMeta,
    requestDeserialize: deserialize_services_SystemOfflineTaskMeta,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  updateProgress: {
    path: '/services.SystemOfflineTaskService/updateProgress',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.UpdateProgressRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UpdateProgressRequest,
    requestDeserialize: deserialize_services_UpdateProgressRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  batchGet: {
    path: '/services.SystemOfflineTaskService/batchGet',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.BatchGetRequest,
    responseType: offline_systemtask_pb.BatchGetResponse,
    requestSerialize: serialize_services_BatchGetRequest,
    requestDeserialize: deserialize_services_BatchGetRequest,
    responseSerialize: serialize_services_BatchGetResponse,
    responseDeserialize: deserialize_services_BatchGetResponse,
  },
  get: {
    path: '/services.SystemOfflineTaskService/get',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTask,
    responseType: offline_systemtask_pb.SystemOfflineTask,
    requestSerialize: serialize_services_SystemOfflineTask,
    requestDeserialize: deserialize_services_SystemOfflineTask,
    responseSerialize: serialize_services_SystemOfflineTask,
    responseDeserialize: deserialize_services_SystemOfflineTask,
  },
  updateFile: {
    path: '/services.SystemOfflineTaskService/updateFile',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTaskFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SystemOfflineTaskFile,
    requestDeserialize: deserialize_services_SystemOfflineTaskFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  uploadFile: {
    path: '/services.SystemOfflineTaskService/uploadFile',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTaskFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SystemOfflineTaskFile,
    requestDeserialize: deserialize_services_SystemOfflineTaskFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  changeStatus: {
    path: '/services.SystemOfflineTaskService/changeStatus',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.StatusChangeRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_StatusChangeRequest,
    requestDeserialize: deserialize_services_StatusChangeRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  getFiles: {
    path: '/services.SystemOfflineTaskService/getFiles',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTask,
    responseType: offline_systemtask_pb.SystemOfflineTaskFiles,
    requestSerialize: serialize_services_SystemOfflineTask,
    requestDeserialize: deserialize_services_SystemOfflineTask,
    responseSerialize: serialize_services_SystemOfflineTaskFiles,
    responseDeserialize: deserialize_services_SystemOfflineTaskFiles,
  },
  complete: {
    path: '/services.SystemOfflineTaskService/complete',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.SystemOfflineTask,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_SystemOfflineTask,
    requestDeserialize: deserialize_services_SystemOfflineTask,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  // ErrorRequest
  error: {
    path: '/services.SystemOfflineTaskService/error',
    requestStream: false,
    responseStream: false,
    requestType: offline_systemtask_pb.ErrorRequest,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_ErrorRequest,
    requestDeserialize: deserialize_services_ErrorRequest,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.SystemOfflineTaskServiceClient = grpc.makeGenericClientConstructor(SystemOfflineTaskServiceService);
