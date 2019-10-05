// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var util_hello_pb = require('../util/hello_pb.js');

function serialize_services_HelloRequest(arg) {
  if (!(arg instanceof util_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type services.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_HelloRequest(buffer_arg) {
  return util_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_HelloResponse(arg) {
  if (!(arg instanceof util_hello_pb.HelloResponse)) {
    throw new Error('Expected argument of type services.HelloResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_HelloResponse(buffer_arg) {
  return util_hello_pb.HelloResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloServiceService = exports.HelloServiceService = {
  hello: {
    path: '/services.HelloService/hello',
    requestStream: false,
    responseStream: false,
    requestType: util_hello_pb.HelloRequest,
    responseType: util_hello_pb.HelloResponse,
    requestSerialize: serialize_services_HelloRequest,
    requestDeserialize: deserialize_services_HelloRequest,
    responseSerialize: serialize_services_HelloResponse,
    responseDeserialize: deserialize_services_HelloResponse,
  },
};

exports.HelloServiceClient = grpc.makeGenericClientConstructor(HelloServiceService);
