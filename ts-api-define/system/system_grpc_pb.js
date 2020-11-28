// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var system_system_pb = require('../system/system_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_AddressInfo(arg) {
  if (!(arg instanceof system_system_pb.AddressInfo)) {
    throw new Error('Expected argument of type services.AddressInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_AddressInfo(buffer_arg) {
  return system_system_pb.AddressInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_AppInfo(arg) {
  if (!(arg instanceof system_system_pb.AppInfo)) {
    throw new Error('Expected argument of type services.AppInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_AppInfo(buffer_arg) {
  return system_system_pb.AppInfo.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_StringListEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.StringListEntity)) {
    throw new Error('Expected argument of type services.StringListEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StringListEntity(buffer_arg) {
  return common_common_entity_pb.StringListEntity.deserializeBinary(new Uint8Array(buffer_arg));
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
  address: {
    path: '/services.SystemInfoService/Address',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.ClientInfo,
    responseType: system_system_pb.AddressInfo,
    requestSerialize: serialize_services_ClientInfo,
    requestDeserialize: deserialize_services_ClientInfo,
    responseSerialize: serialize_services_AddressInfo,
    responseDeserialize: deserialize_services_AddressInfo,
  },
  earseSensitiveAddress: {
    path: '/services.SystemInfoService/EarseSensitiveAddress',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.StringListEntity,
    responseType: common_common_entity_pb.StringListEntity,
    requestSerialize: serialize_services_StringListEntity,
    requestDeserialize: deserialize_services_StringListEntity,
    responseSerialize: serialize_services_StringListEntity,
    responseDeserialize: deserialize_services_StringListEntity,
  },
  listUpdate: {
    path: '/services.SystemInfoService/ListUpdate',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.UpdateInfo,
    responseType: system_system_pb.UpdateInfoList,
    requestSerialize: serialize_services_UpdateInfo,
    requestDeserialize: deserialize_services_UpdateInfo,
    responseSerialize: serialize_services_UpdateInfoList,
    responseDeserialize: deserialize_services_UpdateInfoList,
  },
  getApp: {
    path: '/services.SystemInfoService/GetApp',
    requestStream: false,
    responseStream: false,
    requestType: system_system_pb.AppInfo,
    responseType: system_system_pb.AppInfo,
    requestSerialize: serialize_services_AppInfo,
    requestDeserialize: deserialize_services_AppInfo,
    responseSerialize: serialize_services_AppInfo,
    responseDeserialize: deserialize_services_AppInfo,
  },
};

exports.SystemInfoServiceClient = grpc.makeGenericClientConstructor(SystemInfoServiceService);
