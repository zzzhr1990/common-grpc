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

function serialize_services_StringEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.StringEntity)) {
    throw new Error('Expected argument of type services.StringEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StringEntity(buffer_arg) {
  return common_common_entity_pb.StringEntity.deserializeBinary(new Uint8Array(buffer_arg));
}


var CloudStoreServiceService = exports.CloudStoreServiceService = {
  create: {
    path: '/services.CloudStoreService/create',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  tryCreate: {
    path: '/services.CloudStoreService/tryCreate',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  // rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
  get: {
    path: '/services.CloudStoreService/get',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  change: {
    path: '/services.CloudStoreService/change',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  // rpc batchGet (CloudStoreList) returns (CloudStoreList) {}
  // rpc batchGetByHash (StringListEntity) returns (CloudStoreList) {}
  getOrEmpty: {
    path: '/services.CloudStoreService/getOrEmpty',
    requestStream: false,
    responseStream: false,
    requestType: store_cloudstore_pb.CloudStore,
    responseType: store_cloudstore_pb.CloudStore,
    requestSerialize: serialize_services_CloudStore,
    requestDeserialize: deserialize_services_CloudStore,
    responseSerialize: serialize_services_CloudStore,
    responseDeserialize: deserialize_services_CloudStore,
  },
  getInnerDownloadAddress: {
    path: '/services.CloudStoreService/getInnerDownloadAddress',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.StringEntity,
    responseType: common_common_entity_pb.StringEntity,
    requestSerialize: serialize_services_StringEntity,
    requestDeserialize: deserialize_services_StringEntity,
    responseSerialize: serialize_services_StringEntity,
    responseDeserialize: deserialize_services_StringEntity,
  },
};

exports.CloudStoreServiceClient = grpc.makeGenericClientConstructor(CloudStoreServiceService);
