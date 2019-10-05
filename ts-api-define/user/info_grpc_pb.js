// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_info_pb = require('../user/info_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_Balance(arg) {
  if (!(arg instanceof user_info_pb.Balance)) {
    throw new Error('Expected argument of type services.Balance');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Balance(buffer_arg) {
  return user_info_pb.Balance.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_GrpcUser(arg) {
  if (!(arg instanceof user_info_pb.GrpcUser)) {
    throw new Error('Expected argument of type services.GrpcUser');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_GrpcUser(buffer_arg) {
  return user_info_pb.GrpcUser.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PasswordPair(arg) {
  if (!(arg instanceof user_info_pb.PasswordPair)) {
    throw new Error('Expected argument of type services.PasswordPair');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PasswordPair(buffer_arg) {
  return user_info_pb.PasswordPair.deserializeBinary(new Uint8Array(buffer_arg));
}


var GrpcUserServiceService = exports.GrpcUserServiceService = {
  createUser: {
    path: '/services.GrpcUserService/createUser',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.GrpcUser,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_GrpcUser,
    requestDeserialize: deserialize_services_GrpcUser,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  getUser: {
    path: '/services.GrpcUserService/getUser',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.GrpcUser,
    responseType: user_info_pb.GrpcUser,
    requestSerialize: serialize_services_GrpcUser,
    requestDeserialize: deserialize_services_GrpcUser,
    responseSerialize: serialize_services_GrpcUser,
    responseDeserialize: deserialize_services_GrpcUser,
  },
  getUserOrEmpty: {
    path: '/services.GrpcUserService/getUserOrEmpty',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.GrpcUser,
    responseType: user_info_pb.GrpcUser,
    requestSerialize: serialize_services_GrpcUser,
    requestDeserialize: deserialize_services_GrpcUser,
    responseSerialize: serialize_services_GrpcUser,
    responseDeserialize: deserialize_services_GrpcUser,
  },
  login: {
    path: '/services.GrpcUserService/login',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.GrpcUser,
    responseType: user_info_pb.GrpcUser,
    requestSerialize: serialize_services_GrpcUser,
    requestDeserialize: deserialize_services_GrpcUser,
    responseSerialize: serialize_services_GrpcUser,
    responseDeserialize: deserialize_services_GrpcUser,
  },
  getBalance: {
    path: '/services.GrpcUserService/getBalance',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.Balance,
    responseType: user_info_pb.Balance,
    requestSerialize: serialize_services_Balance,
    requestDeserialize: deserialize_services_Balance,
    responseSerialize: serialize_services_Balance,
    responseDeserialize: deserialize_services_Balance,
  },
  setSpaceUsed: {
    path: '/services.GrpcUserService/setSpaceUsed',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.Balance,
    responseType: user_info_pb.Balance,
    requestSerialize: serialize_services_Balance,
    requestDeserialize: deserialize_services_Balance,
    responseSerialize: serialize_services_Balance,
    responseDeserialize: deserialize_services_Balance,
  },
  changePassword: {
    path: '/services.GrpcUserService/changePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.PasswordPair,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_PasswordPair,
    requestDeserialize: deserialize_services_PasswordPair,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  changeName: {
    path: '/services.GrpcUserService/changeName',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.GrpcUser,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_GrpcUser,
    requestDeserialize: deserialize_services_GrpcUser,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.GrpcUserServiceClient = grpc.makeGenericClientConstructor(GrpcUserServiceService);
