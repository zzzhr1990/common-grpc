// package: services
// file: util/hello.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as util_hello_pb from "../util/hello_pb";

interface IHelloServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    hello: IHelloServiceService_Ihello;
}

interface IHelloServiceService_Ihello extends grpc.MethodDefinition<util_hello_pb.HelloRequest, util_hello_pb.HelloResponse> {
    path: "/services.HelloService/hello";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<util_hello_pb.HelloRequest>;
    requestDeserialize: grpc.deserialize<util_hello_pb.HelloRequest>;
    responseSerialize: grpc.serialize<util_hello_pb.HelloResponse>;
    responseDeserialize: grpc.deserialize<util_hello_pb.HelloResponse>;
}

export const HelloServiceService: IHelloServiceService;

export interface IHelloServiceServer {
    hello: grpc.handleUnaryCall<util_hello_pb.HelloRequest, util_hello_pb.HelloResponse>;
}

export interface IHelloServiceClient {
    hello(request: util_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: util_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    hello(request: util_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}

export class HelloServiceClient extends grpc.Client implements IHelloServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public hello(request: util_hello_pb.HelloRequest, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: util_hello_pb.HelloRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
    public hello(request: util_hello_pb.HelloRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: util_hello_pb.HelloResponse) => void): grpc.ClientUnaryCall;
}
