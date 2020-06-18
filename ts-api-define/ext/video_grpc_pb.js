// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var ext_video_pb = require('../ext/video_pb.js');
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

function serialize_services_PreviewInfo(arg) {
  if (!(arg instanceof ext_video_pb.PreviewInfo)) {
    throw new Error('Expected argument of type services.PreviewInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PreviewInfo(buffer_arg) {
  return ext_video_pb.PreviewInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_VideoExt(arg) {
  if (!(arg instanceof ext_video_pb.VideoExt)) {
    throw new Error('Expected argument of type services.VideoExt');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_VideoExt(buffer_arg) {
  return ext_video_pb.VideoExt.deserializeBinary(new Uint8Array(buffer_arg));
}


var VideoExtServiceService = exports.VideoExtServiceService = {
  create: {
    path: '/services.VideoExtService/create',
    requestStream: false,
    responseStream: false,
    requestType: ext_video_pb.VideoExt,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_VideoExt,
    requestDeserialize: deserialize_services_VideoExt,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  get: {
    path: '/services.VideoExtService/get',
    requestStream: false,
    responseStream: false,
    requestType: ext_video_pb.VideoExt,
    responseType: ext_video_pb.VideoExt,
    requestSerialize: serialize_services_VideoExt,
    requestDeserialize: deserialize_services_VideoExt,
    responseSerialize: serialize_services_VideoExt,
    responseDeserialize: deserialize_services_VideoExt,
  },
  getOrEmpty: {
    path: '/services.VideoExtService/getOrEmpty',
    requestStream: false,
    responseStream: false,
    requestType: ext_video_pb.VideoExt,
    responseType: ext_video_pb.VideoExt,
    requestSerialize: serialize_services_VideoExt,
    requestDeserialize: deserialize_services_VideoExt,
    responseSerialize: serialize_services_VideoExt,
    responseDeserialize: deserialize_services_VideoExt,
  },
  update: {
    path: '/services.VideoExtService/update',
    requestStream: false,
    responseStream: false,
    requestType: ext_video_pb.VideoExt,
    responseType: ext_video_pb.VideoExt,
    requestSerialize: serialize_services_VideoExt,
    requestDeserialize: deserialize_services_VideoExt,
    responseSerialize: serialize_services_VideoExt,
    responseDeserialize: deserialize_services_VideoExt,
  },
  getPreview: {
    path: '/services.VideoExtService/getPreview',
    requestStream: false,
    responseStream: false,
    requestType: ext_video_pb.VideoExt,
    responseType: ext_video_pb.PreviewInfo,
    requestSerialize: serialize_services_VideoExt,
    requestDeserialize: deserialize_services_VideoExt,
    responseSerialize: serialize_services_PreviewInfo,
    responseDeserialize: deserialize_services_PreviewInfo,
  },
};

exports.VideoExtServiceClient = grpc.makeGenericClientConstructor(VideoExtServiceService);
