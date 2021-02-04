// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_userfile_pb = require('../file/userfile_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BatchTaskResult(arg) {
  if (!(arg instanceof common_common_entity_pb.BatchTaskResult)) {
    throw new Error('Expected argument of type services.BatchTaskResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchTaskResult(buffer_arg) {
  return common_common_entity_pb.BatchTaskResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFile(arg) {
  if (!(arg instanceof file_userfile_pb.UserFile)) {
    throw new Error('Expected argument of type services.UserFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFile(buffer_arg) {
  return file_userfile_pb.UserFile.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  // Create create a file
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
  update: {
    path: '/services.FileService/Update',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.BatchTaskResult,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_BatchTaskResult,
    responseDeserialize: deserialize_services_BatchTaskResult,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
