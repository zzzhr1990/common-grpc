// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_filesystem_pb = require('../file/filesystem_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

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
  createInternal: {
    path: '/services.FileService/CreateInternal',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
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
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  delete: {
    path: '/services.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
