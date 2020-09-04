// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var store_thirdpartystore_pb = require('../store/thirdpartystore_pb.js');

function serialize_services_ThirdPartyStore(arg) {
  if (!(arg instanceof store_thirdpartystore_pb.ThirdPartyStore)) {
    throw new Error('Expected argument of type services.ThirdPartyStore');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ThirdPartyStore(buffer_arg) {
  return store_thirdpartystore_pb.ThirdPartyStore.deserializeBinary(new Uint8Array(buffer_arg));
}


var ThirdPartyStoreServiceService = exports.ThirdPartyStoreServiceService = {
  create: {
    path: '/services.ThirdPartyStoreService/Create',
    requestStream: false,
    responseStream: false,
    requestType: store_thirdpartystore_pb.ThirdPartyStore,
    responseType: store_thirdpartystore_pb.ThirdPartyStore,
    requestSerialize: serialize_services_ThirdPartyStore,
    requestDeserialize: deserialize_services_ThirdPartyStore,
    responseSerialize: serialize_services_ThirdPartyStore,
    responseDeserialize: deserialize_services_ThirdPartyStore,
  },
  // rpc tryCreate (CloudStore) returns (CloudStore) {}
// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
get: {
    path: '/services.ThirdPartyStoreService/Get',
    requestStream: false,
    responseStream: false,
    requestType: store_thirdpartystore_pb.ThirdPartyStore,
    responseType: store_thirdpartystore_pb.ThirdPartyStore,
    requestSerialize: serialize_services_ThirdPartyStore,
    requestDeserialize: deserialize_services_ThirdPartyStore,
    responseSerialize: serialize_services_ThirdPartyStore,
    responseDeserialize: deserialize_services_ThirdPartyStore,
  },
  update: {
    path: '/services.ThirdPartyStoreService/Update',
    requestStream: false,
    responseStream: false,
    requestType: store_thirdpartystore_pb.ThirdPartyStore,
    responseType: store_thirdpartystore_pb.ThirdPartyStore,
    requestSerialize: serialize_services_ThirdPartyStore,
    requestDeserialize: deserialize_services_ThirdPartyStore,
    responseSerialize: serialize_services_ThirdPartyStore,
    responseDeserialize: deserialize_services_ThirdPartyStore,
  },
};

exports.ThirdPartyStoreServiceClient = grpc.makeGenericClientConstructor(ThirdPartyStoreServiceService);
