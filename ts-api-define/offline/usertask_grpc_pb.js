// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var offline_usertask_pb = require('../offline/usertask_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_AddUserTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.AddUserTaskRequest)) {
    throw new Error('Expected argument of type services.AddUserTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_AddUserTaskRequest(buffer_arg) {
  return offline_usertask_pb.AddUserTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_DeleteUserTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.DeleteUserTaskRequest)) {
    throw new Error('Expected argument of type services.DeleteUserTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DeleteUserTaskRequest(buffer_arg) {
  return offline_usertask_pb.DeleteUserTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_ListUserTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.ListUserTaskRequest)) {
    throw new Error('Expected argument of type services.ListUserTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListUserTaskRequest(buffer_arg) {
  return offline_usertask_pb.ListUserTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserTask(arg) {
  if (!(arg instanceof offline_usertask_pb.UserTask)) {
    throw new Error('Expected argument of type services.UserTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserTask(buffer_arg) {
  return offline_usertask_pb.UserTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserTaskList(arg) {
  if (!(arg instanceof offline_usertask_pb.UserTaskList)) {
    throw new Error('Expected argument of type services.UserTaskList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserTaskList(buffer_arg) {
  return offline_usertask_pb.UserTaskList.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserTaskServiceService = exports.UserTaskServiceService = {
  // rpc create (UserOfflineTask) returns (UserOfflineTask) {}
  add: {
    path: '/services.UserTaskService/add',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.AddUserTaskRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_AddUserTaskRequest,
    requestDeserialize: deserialize_services_AddUserTaskRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  // rpc parse (UserTask) returns (UserTask) {}
  // rpc page (PageUserOfflineTaskRequest) returns (UserOfflineTaskPage) {}
  list: {
    path: '/services.UserTaskService/list',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.ListUserTaskRequest,
    responseType: offline_usertask_pb.UserTaskList,
    requestSerialize: serialize_services_ListUserTaskRequest,
    requestDeserialize: deserialize_services_ListUserTaskRequest,
    responseSerialize: serialize_services_UserTaskList,
    responseDeserialize: deserialize_services_UserTaskList,
  },
  delete: {
    path: '/services.UserTaskService/delete',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.DeleteUserTaskRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_DeleteUserTaskRequest,
    requestDeserialize: deserialize_services_DeleteUserTaskRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  getListeners: {
    path: '/services.UserTaskService/getListeners',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.UserTask,
    responseType: offline_usertask_pb.UserTaskList,
    requestSerialize: serialize_services_UserTask,
    requestDeserialize: deserialize_services_UserTask,
    responseSerialize: serialize_services_UserTaskList,
    responseDeserialize: deserialize_services_UserTaskList,
  },
  deleteListener: {
    path: '/services.UserTaskService/deleteListener',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.UserTask,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UserTask,
    requestDeserialize: deserialize_services_UserTask,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.UserTaskServiceClient = grpc.makeGenericClientConstructor(UserTaskServiceService);
