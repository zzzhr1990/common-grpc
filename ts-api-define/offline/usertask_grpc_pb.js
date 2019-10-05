// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var offline_usertask_pb = require('../offline/usertask_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_AddUserOfflineTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.AddUserOfflineTaskRequest)) {
    throw new Error('Expected argument of type services.AddUserOfflineTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_AddUserOfflineTaskRequest(buffer_arg) {
  return offline_usertask_pb.AddUserOfflineTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_DeleteTasksRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.DeleteTasksRequest)) {
    throw new Error('Expected argument of type services.DeleteTasksRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DeleteTasksRequest(buffer_arg) {
  return offline_usertask_pb.DeleteTasksRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_ListUserOfflineTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.ListUserOfflineTaskRequest)) {
    throw new Error('Expected argument of type services.ListUserOfflineTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListUserOfflineTaskRequest(buffer_arg) {
  return offline_usertask_pb.ListUserOfflineTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PageUserOfflineTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.PageUserOfflineTaskRequest)) {
    throw new Error('Expected argument of type services.PageUserOfflineTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PageUserOfflineTaskRequest(buffer_arg) {
  return offline_usertask_pb.PageUserOfflineTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserOfflineTaskList(arg) {
  if (!(arg instanceof offline_usertask_pb.UserOfflineTaskList)) {
    throw new Error('Expected argument of type services.UserOfflineTaskList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserOfflineTaskList(buffer_arg) {
  return offline_usertask_pb.UserOfflineTaskList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserOfflineTaskPage(arg) {
  if (!(arg instanceof offline_usertask_pb.UserOfflineTaskPage)) {
    throw new Error('Expected argument of type services.UserOfflineTaskPage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserOfflineTaskPage(buffer_arg) {
  return offline_usertask_pb.UserOfflineTaskPage.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserOfflineTaskResponse(arg) {
  if (!(arg instanceof offline_usertask_pb.UserOfflineTaskResponse)) {
    throw new Error('Expected argument of type services.UserOfflineTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserOfflineTaskResponse(buffer_arg) {
  return offline_usertask_pb.UserOfflineTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var OfflineUserTaskServiceService = exports.OfflineUserTaskServiceService = {
  // rpc create (UserOfflineTask) returns (UserOfflineTask) {}
  add: {
    path: '/services.OfflineUserTaskService/add',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.AddUserOfflineTaskRequest,
    responseType: offline_usertask_pb.UserOfflineTaskResponse,
    requestSerialize: serialize_services_AddUserOfflineTaskRequest,
    requestDeserialize: deserialize_services_AddUserOfflineTaskRequest,
    responseSerialize: serialize_services_UserOfflineTaskResponse,
    responseDeserialize: deserialize_services_UserOfflineTaskResponse,
  },
  page: {
    path: '/services.OfflineUserTaskService/page',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.PageUserOfflineTaskRequest,
    responseType: offline_usertask_pb.UserOfflineTaskPage,
    requestSerialize: serialize_services_PageUserOfflineTaskRequest,
    requestDeserialize: deserialize_services_PageUserOfflineTaskRequest,
    responseSerialize: serialize_services_UserOfflineTaskPage,
    responseDeserialize: deserialize_services_UserOfflineTaskPage,
  },
  list: {
    path: '/services.OfflineUserTaskService/list',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.ListUserOfflineTaskRequest,
    responseType: offline_usertask_pb.UserOfflineTaskList,
    requestSerialize: serialize_services_ListUserOfflineTaskRequest,
    requestDeserialize: deserialize_services_ListUserOfflineTaskRequest,
    responseSerialize: serialize_services_UserOfflineTaskList,
    responseDeserialize: deserialize_services_UserOfflineTaskList,
  },
  delete: {
    path: '/services.OfflineUserTaskService/delete',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.DeleteTasksRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_DeleteTasksRequest,
    requestDeserialize: deserialize_services_DeleteTasksRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
};

exports.OfflineUserTaskServiceClient = grpc.makeGenericClientConstructor(OfflineUserTaskServiceService);
