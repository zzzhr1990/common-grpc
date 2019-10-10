// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var system_system_pb = require('../system/system_pb.js');

function serialize_services_ClientInfo(arg) {
  if (!(arg instanceof system_system_pb.ClientInfo)) {
    throw new Error('Expected argument of type services.ClientInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ClientInfo(buffer_arg) {
  return system_system_pb.ClientInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SystemInfo(arg) {
  if (!(arg instanceof system_system_pb.SystemInfo)) {
    throw new Error('Expected argument of type services.SystemInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SystemInfo(buffer_arg) {
  return system_system_pb.SystemInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


var SystemInfoServiceService = exports.SystemInfoServiceService = {
  info: {
    path: '/services.SystemInfoService/Info',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.ClientInfo,
    responseType: system_system_pb.SystemInfo,
    requestSerialize: serialize_services_ClientInfo,
    requestDeserialize: deserialize_services_ClientInfo,
    responseSerialize: serialize_services_SystemInfo,
    responseDeserialize: deserialize_services_SystemInfo,
  },
};

exports.SystemInfoServiceClient = grpc.makeGenericClientConstructor(SystemInfoServiceService);
