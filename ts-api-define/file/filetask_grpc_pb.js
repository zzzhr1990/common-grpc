// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_filetask_pb = require('../file/filetask_pb.js');

function serialize_services_FileTask(arg) {
  if (!(arg instanceof file_filetask_pb.FileTask)) {
    throw new Error('Expected argument of type services.FileTask');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileTask(buffer_arg) {
  return file_filetask_pb.FileTask.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileTaskListResponse(arg) {
  if (!(arg instanceof file_filetask_pb.FileTaskListResponse)) {
    throw new Error('Expected argument of type services.FileTaskListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileTaskListResponse(buffer_arg) {
  return file_filetask_pb.FileTaskListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileTaskServiceService = exports.FileTaskServiceService = {
  create: {
    path: '/services.FileTaskService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_filetask_pb.FileTask,
    responseType: file_filetask_pb.FileTask,
    requestSerialize: serialize_services_FileTask,
    requestDeserialize: deserialize_services_FileTask,
    responseSerialize: serialize_services_FileTask,
    responseDeserialize: deserialize_services_FileTask,
  },
  list: {
    path: '/services.FileTaskService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_filetask_pb.FileTask,
    responseType: file_filetask_pb.FileTaskListResponse,
    requestSerialize: serialize_services_FileTask,
    requestDeserialize: deserialize_services_FileTask,
    responseSerialize: serialize_services_FileTaskListResponse,
    responseDeserialize: deserialize_services_FileTaskListResponse,
  },
};

exports.FileTaskServiceClient = grpc.makeGenericClientConstructor(FileTaskServiceService);
