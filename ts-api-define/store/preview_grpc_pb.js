// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var store_preview_pb = require('../store/preview_pb.js');

function serialize_services_MediaPreview(arg) {
  if (!(arg instanceof store_preview_pb.MediaPreview)) {
    throw new Error('Expected argument of type services.MediaPreview');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_MediaPreview(buffer_arg) {
  return store_preview_pb.MediaPreview.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "common/common_entity.proto";
var PreviewServiceService = exports.PreviewServiceService = {
  create: {
    path: '/services.PreviewService/Create',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.MediaPreview,
    responseType: store_preview_pb.MediaPreview,
    requestSerialize: serialize_services_MediaPreview,
    requestDeserialize: deserialize_services_MediaPreview,
    responseSerialize: serialize_services_MediaPreview,
    responseDeserialize: deserialize_services_MediaPreview,
  },
  // rpc tryCreate (CloudStore) returns (CloudStore) {}
// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
get: {
    path: '/services.PreviewService/Get',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.MediaPreview,
    responseType: store_preview_pb.MediaPreview,
    requestSerialize: serialize_services_MediaPreview,
    requestDeserialize: deserialize_services_MediaPreview,
    responseSerialize: serialize_services_MediaPreview,
    responseDeserialize: deserialize_services_MediaPreview,
  },
  update: {
    path: '/services.PreviewService/Update',
    requestStream: false,
    responseStream: false,
    requestType: store_preview_pb.MediaPreview,
    responseType: store_preview_pb.MediaPreview,
    requestSerialize: serialize_services_MediaPreview,
    requestDeserialize: deserialize_services_MediaPreview,
    responseSerialize: serialize_services_MediaPreview,
    responseDeserialize: deserialize_services_MediaPreview,
  },
};

exports.PreviewServiceClient = grpc.makeGenericClientConstructor(PreviewServiceService);
