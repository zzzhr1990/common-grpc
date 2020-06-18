// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var store_cloudstore_pb = require('../store/cloudstore_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_CloudStore(arg) {
  if (!(arg instanceof store_cloudstore_pb.CloudStore)) {
    throw new Error('Expected argument of type services.CloudStore');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CloudStore(buffer_arg) {
  return store_cloudstore_pb.CloudStore.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_CloudStoreList(arg) {
  if (!(arg instanceof store_cloudstore_pb.CloudStoreList)) {
    throw new Error('Expected argument of type services.CloudStoreList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CloudStoreList(buffer_arg) {
  return store_cloudstore_pb.CloudStoreList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_StringListEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.StringListEntity)) {
    throw new Error('Expected argument of type services.StringListEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StringListEntity(buffer_arg) {
  return common_common_entity_pb.StringListEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UploadTokenRequest(arg) {
  if (!(arg instanceof store_cloudstore_pb.UploadTokenRequest)) {
    throw new Error('Expected argument of type services.UploadTokenRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UploadTokenRequest(buffer_arg) {
  return store_cloudstore_pb.UploadTokenRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_WcsUploadToken(arg) {
  if (!(arg instanceof store_cloudstore_pb.WcsUploadToken)) {
    throw new Error('Expected argument of type services.WcsUploadToken');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_WcsUploadToken(buffer_arg) {
  return store_cloudstore_pb.WcsUploadToken.deserializeBinary(new Uint8Array(buffer_arg));
}


var CloudStoreServiceService = exports.CloudStoreServiceService = {
  create: {
    path: '/services.CloudStoreService/Create',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  // rpc tryCreate (CloudStore) returns (CloudStore) {}
// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
get: {
    path: '/services.CloudStoreService/Get',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  update: {
    path: '/services.CloudStoreService/Update',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  batchGet: {
    path: '/services.CloudStoreService/BatchGet',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStoreList,
    responseType: store_cloudstore_pb.CloudStoreList,
    requestSerialize: serialize_services_CloudStoreList,
    requestDeserialize: deserialize_services_CloudStoreList,
    responseSerialize: serialize_services_CloudStoreList,
    responseDeserialize: deserialize_services_CloudStoreList,
  },
  getDownloadAddress: {
    path: '/services.CloudStoreService/GetDownloadAddress',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  batchDownloadAddress: {
    path: '/services.CloudStoreService/BatchDownloadAddress',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.StringListEntity,
    responseType: store_cloudstore_pb.CloudStoreList,
    requestSerialize: serialize_services_StringListEntity,
    requestDeserialize: deserialize_services_StringListEntity,
    responseSerialize: serialize_services_CloudStoreList,
    responseDeserialize: deserialize_services_CloudStoreList,
  },
  createWcsUploadToken: {
    path: '/services.CloudStoreService/CreateWcsUploadToken',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.UploadTokenRequest,
    responseType: store_cloudstore_pb.WcsUploadToken,
    requestSerialize: serialize_services_UploadTokenRequest,
    requestDeserialize: deserialize_services_UploadTokenRequest,
    responseSerialize: serialize_services_WcsUploadToken,
    responseDeserialize: deserialize_services_WcsUploadToken,
  },
  onFileUpload: {
    path: '/services.CloudStoreService/OnFileUpload',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
};

exports.CloudStoreServiceClient = grpc.makeGenericClientConstructor(CloudStoreServiceService);
