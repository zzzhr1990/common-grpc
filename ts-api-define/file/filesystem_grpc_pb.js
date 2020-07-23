// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_filesystem_pb = require('../file/filesystem_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BathFileTaskRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.BathFileTaskRequest)) {
    throw new Error('Expected argument of type services.BathFileTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BathFileTaskRequest(buffer_arg) {
  return file_filesystem_pb.BathFileTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BathFileTaskResult(arg) {
  if (!(arg instanceof file_filesystem_pb.BathFileTaskResult)) {
    throw new Error('Expected argument of type services.BathFileTaskResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BathFileTaskResult(buffer_arg) {
  return file_filesystem_pb.BathFileTaskResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfo(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfo)) {
    throw new Error('Expected argument of type services.FileInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfo(buffer_arg) {
  return file_filesystem_pb.FileInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListRequest)) {
    throw new Error('Expected argument of type services.FileInfoListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListRequest(buffer_arg) {
  return file_filesystem_pb.FileInfoListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListResponse(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListResponse)) {
    throw new Error('Expected argument of type services.FileInfoListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListResponse(buffer_arg) {
  return file_filesystem_pb.FileInfoListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskProgress(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskProgress)) {
    throw new Error('Expected argument of type services.TaskProgress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskProgress(buffer_arg) {
  return file_filesystem_pb.TaskProgress.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  create: {
    path: '/services.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  get: {
    path: '/services.FileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  // rpc CreateInternal (FileInfo) returns (FileInfo) {}
list: {
    path: '/services.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  listInternal: {
    path: '/services.FileService/ListInternal',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  trash: {
    path: '/services.FileService/Trash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BathFileTaskRequest,
    responseType: file_filesystem_pb.BathFileTaskResult,
    requestSerialize: serialize_services_BathFileTaskRequest,
    requestDeserialize: deserialize_services_BathFileTaskRequest,
    responseSerialize: serialize_services_BathFileTaskResult,
    responseDeserialize: deserialize_services_BathFileTaskResult,
  },
  delete: {
    path: '/services.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BathFileTaskRequest,
    responseType: file_filesystem_pb.BathFileTaskResult,
    requestSerialize: serialize_services_BathFileTaskRequest,
    requestDeserialize: deserialize_services_BathFileTaskRequest,
    responseSerialize: serialize_services_BathFileTaskResult,
    responseDeserialize: deserialize_services_BathFileTaskResult,
  },
  copy: {
    path: '/services.FileService/Copy',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BathFileTaskRequest,
    responseType: file_filesystem_pb.BathFileTaskResult,
    requestSerialize: serialize_services_BathFileTaskRequest,
    requestDeserialize: deserialize_services_BathFileTaskRequest,
    responseSerialize: serialize_services_BathFileTaskResult,
    responseDeserialize: deserialize_services_BathFileTaskResult,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BathFileTaskRequest,
    responseType: file_filesystem_pb.BathFileTaskResult,
    requestSerialize: serialize_services_BathFileTaskRequest,
    requestDeserialize: deserialize_services_BathFileTaskRequest,
    responseSerialize: serialize_services_BathFileTaskResult,
    responseDeserialize: deserialize_services_BathFileTaskResult,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
var FileNoticeServiceService = exports.FileNoticeServiceService = {
  onProgress: {
    path: '/services.FileNoticeService/OnProgress',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
  onComplete: {
    path: '/services.FileNoticeService/OnComplete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
  onError: {
    path: '/services.FileNoticeService/OnError',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
  onCancel: {
    path: '/services.FileNoticeService/OnCancel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
};

exports.FileNoticeServiceClient = grpc.makeGenericClientConstructor(FileNoticeServiceService);
