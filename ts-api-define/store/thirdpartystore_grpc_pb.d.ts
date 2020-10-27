// package: services
// file: store/thirdpartystore.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as store_thirdpartystore_pb from "../store/thirdpartystore_pb";

interface IThirdPartyStoreServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IThirdPartyStoreServiceService_ICreate;
    get: IThirdPartyStoreServiceService_IGet;
    update: IThirdPartyStoreServiceService_IUpdate;
}

interface IThirdPartyStoreServiceService_ICreate extends grpc.MethodDefinition<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore> {
    path: "/services.ThirdPartyStoreService/Create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    requestDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
}
interface IThirdPartyStoreServiceService_IGet extends grpc.MethodDefinition<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore> {
    path: "/services.ThirdPartyStoreService/Get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    requestDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
}
interface IThirdPartyStoreServiceService_IUpdate extends grpc.MethodDefinition<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore> {
    path: "/services.ThirdPartyStoreService/Update";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    requestDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseSerialize: grpc.serialize<store_thirdpartystore_pb.ThirdPartyStore>;
    responseDeserialize: grpc.deserialize<store_thirdpartystore_pb.ThirdPartyStore>;
}

export const ThirdPartyStoreServiceService: IThirdPartyStoreServiceService;

export interface IThirdPartyStoreServiceServer {
    create: grpc.handleUnaryCall<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore>;
    get: grpc.handleUnaryCall<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore>;
    update: grpc.handleUnaryCall<store_thirdpartystore_pb.ThirdPartyStore, store_thirdpartystore_pb.ThirdPartyStore>;
}

export interface IThirdPartyStoreServiceClient {
    create(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    create(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    create(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    get(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    get(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    get(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    update(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    update(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    update(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
}

export class ThirdPartyStoreServiceClient extends grpc.Client implements IThirdPartyStoreServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public create(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public create(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public get(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public get(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public get(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public update(request: store_thirdpartystore_pb.ThirdPartyStore, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public update(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
    public update(request: store_thirdpartystore_pb.ThirdPartyStore, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: store_thirdpartystore_pb.ThirdPartyStore) => void): grpc.ClientUnaryCall;
}
