// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_userfile_pb = require('../file/userfile_pb.js');

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
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
