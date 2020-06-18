// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var share_share_pb = require('../share/share_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileShare(arg) {
  if (!(arg instanceof share_share_pb.FileShare)) {
    throw new Error('Expected argument of type services.FileShare');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileShare(buffer_arg) {
  return share_share_pb.FileShare.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ShareSaveRequest(arg) {
  if (!(arg instanceof share_share_pb.ShareSaveRequest)) {
    throw new Error('Expected argument of type services.ShareSaveRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ShareSaveRequest(buffer_arg) {
  return share_share_pb.ShareSaveRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileShareServiceService = exports.FileShareServiceService = {
  create: {
    path: '/services.FileShareService/create',
    requestStream: false,
    responseStream: false,
    requestType: share_share_pb.FileShare,
    responseType: share_share_pb.FileShare,
    requestSerialize: serialize_services_FileShare,
    requestDeserialize: deserialize_services_FileShare,
    responseSerialize: serialize_services_FileShare,
    responseDeserialize: deserialize_services_FileShare,
  },
  cancel: {
    path: '/services.FileShareService/cancel',
    requestStream: false,
    responseStream: false,
    requestType: share_share_pb.FileShare,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_FileShare,
    requestDeserialize: deserialize_services_FileShare,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  getOrEmpty: {
    path: '/services.FileShareService/getOrEmpty',
    requestStream: false,
    responseStream: false,
    requestType: share_share_pb.FileShare,
    responseType: share_share_pb.FileShare,
    requestSerialize: serialize_services_FileShare,
    requestDeserialize: deserialize_services_FileShare,
    responseSerialize: serialize_services_FileShare,
    responseDeserialize: deserialize_services_FileShare,
  },
  save: {
    path: '/services.FileShareService/save',
    requestStream: false,
    responseStream: false,
    requestType: share_share_pb.ShareSaveRequest,
    responseType: share_share_pb.FileShare,
    requestSerialize: serialize_services_ShareSaveRequest,
    requestDeserialize: deserialize_services_ShareSaveRequest,
    responseSerialize: serialize_services_FileShare,
    responseDeserialize: deserialize_services_FileShare,
  },
};

exports.FileShareServiceClient = grpc.makeGenericClientConstructor(FileShareServiceService);
