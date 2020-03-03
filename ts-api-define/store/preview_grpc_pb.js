// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var store_preview_pb = require('../store/preview_pb.js');

function serialize_services_Preview(arg) {
  if (!(arg instanceof store_preview_pb.Preview)) {
    throw new Error('Expected argument of type services.Preview');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Preview(buffer_arg) {
  return store_preview_pb.Preview.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "common/common_entity.proto";
var PreviewServiceService = exports.PreviewServiceService = {
  create: {
    path: '/services.PreviewService/Create',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.Preview,
    responseType: store_preview_pb.Preview,
    requestSerialize: serialize_services_Preview,
    requestDeserialize: deserialize_services_Preview,
    responseSerialize: serialize_services_Preview,
    responseDeserialize: deserialize_services_Preview,
  },
  // rpc tryCreate (CloudStore) returns (CloudStore) {}
  // rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
  get: {
    path: '/services.PreviewService/Get',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.Preview,
    responseType: store_preview_pb.Preview,
    requestSerialize: serialize_services_Preview,
    requestDeserialize: deserialize_services_Preview,
    responseSerialize: serialize_services_Preview,
    responseDeserialize: deserialize_services_Preview,
  },
  update: {
    path: '/services.PreviewService/Update',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.Preview,
    responseType: store_preview_pb.Preview,
    requestSerialize: serialize_services_Preview,
    requestDeserialize: deserialize_services_Preview,
    responseSerialize: serialize_services_Preview,
    responseDeserialize: deserialize_services_Preview,
  },
};

exports.PreviewServiceClient = grpc.makeGenericClientConstructor(PreviewServiceService);
