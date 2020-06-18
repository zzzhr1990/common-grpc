// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var offline_parse_pb = require('../offline/parse_pb.js');

function serialize_services_ParseTaskRequest(arg) {
  if (!(arg instanceof offline_parse_pb.ParseTaskRequest)) {
    throw new Error('Expected argument of type services.ParseTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ParseTaskRequest(buffer_arg) {
  return offline_parse_pb.ParseTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ParseTaskResponse(arg) {
  if (!(arg instanceof offline_parse_pb.ParseTaskResponse)) {
    throw new Error('Expected argument of type services.ParseTaskResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ParseTaskResponse(buffer_arg) {
  return offline_parse_pb.ParseTaskResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


// import "common/common_entity.proto";
var TaskParseServiceService = exports.TaskParseServiceService = {
  parse: {
    path: '/services.TaskParseService/parse',
    requestStream: false,
    responseStream: false,
    requestType: offline_parse_pb.ParseTaskRequest,
    responseType: offline_parse_pb.ParseTaskResponse,
    requestSerialize: serialize_services_ParseTaskRequest,
    requestDeserialize: deserialize_services_ParseTaskRequest,
    responseSerialize: serialize_services_ParseTaskResponse,
    responseDeserialize: deserialize_services_ParseTaskResponse,
  },
};

exports.TaskParseServiceClient = grpc.makeGenericClientConstructor(TaskParseServiceService);
