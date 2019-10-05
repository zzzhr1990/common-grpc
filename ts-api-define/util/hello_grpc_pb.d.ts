// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: util/hello.proto

import * as util_hello_pb from "../util/hello_pb";
import * as grpc from "grpc";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  hello: grpc.MethodDefinition<util_hello_pb.HelloRequest, util_hello_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export class HelloServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  hello(argument: util_hello_pb.HelloRequest, callback: grpc.requestCallback<util_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: util_hello_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<util_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
  hello(argument: util_hello_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<util_hello_pb.HelloResponse>): grpc.ClientUnaryCall;
}
