// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
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

function serialize_services_ClearTaskRequest(arg) {
  if (!(arg instanceof offline_usertask_pb.ClearTaskRequest)) {
    throw new Error('Expected argument of type services.ClearTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ClearTaskRequest(buffer_arg) {
  return offline_usertask_pb.ClearTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_TaskListener(arg) {
  if (!(arg instanceof offline_usertask_pb.TaskListener)) {
    throw new Error('Expected argument of type services.TaskListener');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskListener(buffer_arg) {
  return offline_usertask_pb.TaskListener.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskListenerList(arg) {
  if (!(arg instanceof offline_usertask_pb.TaskListenerList)) {
    throw new Error('Expected argument of type services.TaskListenerList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskListenerList(buffer_arg) {
  return offline_usertask_pb.TaskListenerList.deserializeBinary(new Uint8Array(buffer_arg));
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
    responseType: offline_usertask_pb.UserTaskList,
    requestSerialize: serialize_services_AddUserTaskRequest,
    requestDeserialize: deserialize_services_AddUserTaskRequest,
    responseSerialize: serialize_services_UserTaskList,
    responseDeserialize: deserialize_services_UserTaskList,
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
  get: {
    path: '/services.UserTaskService/get',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.UserTask,
    responseType: offline_usertask_pb.UserTask,
    requestSerialize: serialize_services_UserTask,
    requestDeserialize: deserialize_services_UserTask,
    responseSerialize: serialize_services_UserTask,
    responseDeserialize: deserialize_services_UserTask,
  },
  completeOrError: {
    path: '/services.UserTaskService/completeOrError',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.UserTask,
    responseType: offline_usertask_pb.UserTask,
    requestSerialize: serialize_services_UserTask,
    requestDeserialize: deserialize_services_UserTask,
    responseSerialize: serialize_services_UserTask,
    responseDeserialize: deserialize_services_UserTask,
  },
  // rpc error(UserTask) returns (UserTask) {}
update: {
    path: '/services.UserTaskService/update',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.UserTask,
    responseType: offline_usertask_pb.UserTask,
    requestSerialize: serialize_services_UserTask,
    requestDeserialize: deserialize_services_UserTask,
    responseSerialize: serialize_services_UserTask,
    responseDeserialize: deserialize_services_UserTask,
  },
  // rpc syncTask (TaskListener) returns (Int64Entity) {}
getListeners: {
    path: '/services.UserTaskService/getListeners',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: offline_usertask_pb.TaskListenerList,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_TaskListenerList,
    responseDeserialize: deserialize_services_TaskListenerList,
  },
  updateListener: {
    path: '/services.UserTaskService/updateListener',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: offline_usertask_pb.TaskListener,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_TaskListener,
    responseDeserialize: deserialize_services_TaskListener,
  },
  deleteListeners: {
    path: '/services.UserTaskService/deleteListeners',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  deleteFakeCopyListener: {
    path: '/services.UserTaskService/deleteFakeCopyListener',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  deleteAllListener: {
    path: '/services.UserTaskService/deleteAllListener',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  fakeCopy: {
    path: '/services.UserTaskService/fakeCopy',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.TaskListener,
    responseType: offline_usertask_pb.TaskListener,
    requestSerialize: serialize_services_TaskListener,
    requestDeserialize: deserialize_services_TaskListener,
    responseSerialize: serialize_services_TaskListener,
    responseDeserialize: deserialize_services_TaskListener,
  },
  clear: {
    path: '/services.UserTaskService/clear',
    requestStream: false,
    responseStream: false,
    requestType: offline_usertask_pb.ClearTaskRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_ClearTaskRequest,
    requestDeserialize: deserialize_services_ClearTaskRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
};

exports.UserTaskServiceClient = grpc.makeGenericClientConstructor(UserTaskServiceService);
