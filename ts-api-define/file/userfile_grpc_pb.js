// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_userfile_pb = require('../file/userfile_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_UserFile(arg) {
  if (!(arg instanceof file_userfile_pb.UserFile)) {
    throw new Error('Expected argument of type services.UserFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFile(buffer_arg) {
  return file_userfile_pb.UserFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileListRequest(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileListRequest)) {
    throw new Error('Expected argument of type services.UserFileListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileListRequest(buffer_arg) {
  return file_userfile_pb.UserFileListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileListResponse(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileListResponse)) {
    throw new Error('Expected argument of type services.UserFileListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileListResponse(buffer_arg) {
  return file_userfile_pb.UserFileListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFilePageRequest(arg) {
  if (!(arg instanceof file_userfile_pb.UserFilePageRequest)) {
    throw new Error('Expected argument of type services.UserFilePageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFilePageRequest(buffer_arg) {
  return file_userfile_pb.UserFilePageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFilePageResponse(arg) {
  if (!(arg instanceof file_userfile_pb.UserFilePageResponse)) {
    throw new Error('Expected argument of type services.UserFilePageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFilePageResponse(buffer_arg) {
  return file_userfile_pb.UserFilePageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  create: {
    path: '/services.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  get: {
    path: '/services.FileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  page: {
    path: '/services.FileService/Page',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFilePageRequest,
    responseType: file_userfile_pb.UserFilePageResponse,
    requestSerialize: serialize_services_UserFilePageRequest,
    requestDeserialize: deserialize_services_UserFilePageRequest,
    responseSerialize: serialize_services_UserFilePageResponse,
    responseDeserialize: deserialize_services_UserFilePageResponse,
  },
  list: {
    path: '/services.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFileListRequest,
    responseType: file_userfile_pb.UserFileListResponse,
    requestSerialize: serialize_services_UserFileListRequest,
    requestDeserialize: deserialize_services_UserFileListRequest,
    responseSerialize: serialize_services_UserFileListResponse,
    responseDeserialize: deserialize_services_UserFileListResponse,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
