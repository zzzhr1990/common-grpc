// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var user_info_pb = require('../user/info_pb.js');

function serialize_services_PasswordPair(arg) {
  if (!(arg instanceof user_info_pb.PasswordPair)) {
    throw new Error('Expected argument of type services.PasswordPair');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PasswordPair(buffer_arg) {
  return user_info_pb.PasswordPair.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_User(arg) {
  if (!(arg instanceof user_info_pb.User)) {
    throw new Error('Expected argument of type services.User');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_User(buffer_arg) {
  return user_info_pb.User.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserServiceService = exports.UserServiceService = {
  create: {
    path: '/services.UserService/Create',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  get: {
    path: '/services.UserService/Get',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  findOne: {
    path: '/services.UserService/FindOne',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  login: {
    path: '/services.UserService/Login',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  loginDirect: {
    path: '/services.UserService/LoginDirect',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  logoff: {
    path: '/services.UserService/Logoff',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  update: {
    path: '/services.UserService/Update',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.User,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_User,
    requestDeserialize: deserialize_services_User,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  // rpc getBalance (Balance) returns (Balance) {}
  // rpc setSpaceUsed (Balance) returns (Balance) {}
  changePassword: {
    path: '/services.UserService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.PasswordPair,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_PasswordPair,
    requestDeserialize: deserialize_services_PasswordPair,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
