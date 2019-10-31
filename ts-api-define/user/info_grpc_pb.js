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

function serialize_services_SmsRequest(arg) {
  if (!(arg instanceof user_info_pb.SmsRequest)) {
    throw new Error('Expected argument of type services.SmsRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsRequest(buffer_arg) {
  return user_info_pb.SmsRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SmsResponse(arg) {
  if (!(arg instanceof user_info_pb.SmsResponse)) {
    throw new Error('Expected argument of type services.SmsResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsResponse(buffer_arg) {
  return user_info_pb.SmsResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SmsValidateRequest(arg) {
  if (!(arg instanceof user_info_pb.SmsValidateRequest)) {
    throw new Error('Expected argument of type services.SmsValidateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsValidateRequest(buffer_arg) {
  return user_info_pb.SmsValidateRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SmsValidateResponse(arg) {
  if (!(arg instanceof user_info_pb.SmsValidateResponse)) {
    throw new Error('Expected argument of type services.SmsValidateResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsValidateResponse(buffer_arg) {
  return user_info_pb.SmsValidateResponse.deserializeBinary(new Uint8Array(buffer_arg));
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
  // SMS login, send session and code, return empty user info instead of error if not success
  smsLogin: {
    path: '/services.UserService/SmsLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SmsValidateRequest,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_SmsValidateRequest,
    requestDeserialize: deserialize_services_SmsValidateRequest,
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
  sendSms: {
    path: '/services.UserService/SendSms',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SmsRequest,
    responseType: user_info_pb.SmsResponse,
    requestSerialize: serialize_services_SmsRequest,
    requestDeserialize: deserialize_services_SmsRequest,
    responseSerialize: serialize_services_SmsResponse,
    responseDeserialize: deserialize_services_SmsResponse,
  },
  validateSms: {
    path: '/services.UserService/ValidateSms',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SmsValidateRequest,
    responseType: user_info_pb.SmsValidateResponse,
    requestSerialize: serialize_services_SmsValidateRequest,
    requestDeserialize: deserialize_services_SmsValidateRequest,
    responseSerialize: serialize_services_SmsValidateResponse,
    responseDeserialize: deserialize_services_SmsValidateResponse,
  },
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
