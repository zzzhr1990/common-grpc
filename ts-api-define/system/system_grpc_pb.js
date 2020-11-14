// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var system_system_pb = require('../system/system_pb.js');

function serialize_services_AddressInfo(arg) {
  if (!(arg instanceof system_system_pb.AddressInfo)) {
    throw new Error('Expected argument of type services.AddressInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_AddressInfo(buffer_arg) {
  return system_system_pb.AddressInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

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

function serialize_services_UpdateInfo(arg) {
  if (!(arg instanceof system_system_pb.UpdateInfo)) {
    throw new Error('Expected argument of type services.UpdateInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UpdateInfo(buffer_arg) {
  return system_system_pb.UpdateInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UpdateInfoList(arg) {
  if (!(arg instanceof system_system_pb.UpdateInfoList)) {
    throw new Error('Expected argument of type services.UpdateInfoList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UpdateInfoList(buffer_arg) {
  return system_system_pb.UpdateInfoList.deserializeBinary(new Uint8Array(buffer_arg));
}


var SystemInfoServiceService = exports.SystemInfoServiceService = {
  info: {
    path: '/services.SystemInfoService/info',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.ClientInfo,
    responseType: system_system_pb.SystemInfo,
    requestSerialize: serialize_services_ClientInfo,
    requestDeserialize: deserialize_services_ClientInfo,
    responseSerialize: serialize_services_SystemInfo,
    responseDeserialize: deserialize_services_SystemInfo,
  },
  address: {
    path: '/services.SystemInfoService/address',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.ClientInfo,
    responseType: system_system_pb.AddressInfo,
    requestSerialize: serialize_services_ClientInfo,
    requestDeserialize: deserialize_services_ClientInfo,
    responseSerialize: serialize_services_AddressInfo,
    responseDeserialize: deserialize_services_AddressInfo,
  },
  listUpdate: {
    path: '/services.SystemInfoService/listUpdate',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.UpdateInfo,
    responseType: system_system_pb.UpdateInfoList,
    requestSerialize: serialize_services_UpdateInfo,
    requestDeserialize: deserialize_services_UpdateInfo,
    responseSerialize: serialize_services_UpdateInfoList,
    responseDeserialize: deserialize_services_UpdateInfoList,
  },
};

exports.SystemInfoServiceClient = grpc.makeGenericClientConstructor(SystemInfoServiceService);
