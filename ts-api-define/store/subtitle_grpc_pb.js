// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var store_subtitle_pb = require('../store/subtitle_pb.js');

function serialize_services_Subtitle(arg) {
  if (!(arg instanceof store_subtitle_pb.Subtitle)) {
    throw new Error('Expected argument of type services.Subtitle');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Subtitle(buffer_arg) {
  return store_subtitle_pb.Subtitle.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SubtitleListResponse(arg) {
  if (!(arg instanceof store_subtitle_pb.SubtitleListResponse)) {
    throw new Error('Expected argument of type services.SubtitleListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SubtitleListResponse(buffer_arg) {
  return store_subtitle_pb.SubtitleListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "common/common_entity.proto";
var SubtitleServiceService = exports.SubtitleServiceService = {
  create: {
    path: '/services.SubtitleService/Create',
    requestStream: false,
    responseStream: false,
    requestType: store_subtitle_pb.Subtitle,
    responseType: store_subtitle_pb.Subtitle,
    requestSerialize: serialize_services_Subtitle,
    requestDeserialize: deserialize_services_Subtitle,
    responseSerialize: serialize_services_Subtitle,
    responseDeserialize: deserialize_services_Subtitle,
  },
  // rpc tryCreate (CloudStore) returns (CloudStore) {}
// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
get: {
    path: '/services.SubtitleService/Get',
    requestStream: false,
    responseStream: false,
    requestType: store_subtitle_pb.Subtitle,
    responseType: store_subtitle_pb.Subtitle,
    requestSerialize: serialize_services_Subtitle,
    requestDeserialize: deserialize_services_Subtitle,
    responseSerialize: serialize_services_Subtitle,
    responseDeserialize: deserialize_services_Subtitle,
  },
  getList: {
    path: '/services.SubtitleService/GetList',
    requestStream: false,
    responseStream: false,
    requestType: store_subtitle_pb.Subtitle,
    responseType: store_subtitle_pb.SubtitleListResponse,
    requestSerialize: serialize_services_Subtitle,
    requestDeserialize: deserialize_services_Subtitle,
    responseSerialize: serialize_services_SubtitleListResponse,
    responseDeserialize: deserialize_services_SubtitleListResponse,
  },
  update: {
    path: '/services.SubtitleService/Update',
    requestStream: false,
    responseStream: false,
    requestType: store_subtitle_pb.Subtitle,
    responseType: store_subtitle_pb.Subtitle,
    requestSerialize: serialize_services_Subtitle,
    requestDeserialize: deserialize_services_Subtitle,
    responseSerialize: serialize_services_Subtitle,
    responseDeserialize: deserialize_services_Subtitle,
  },
};

exports.SubtitleServiceClient = grpc.makeGenericClientConstructor(SubtitleServiceService);
