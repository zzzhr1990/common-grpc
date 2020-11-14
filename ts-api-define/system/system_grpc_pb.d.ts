// package: services
// file: system/system.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as system_system_pb from "../system/system_pb";

interface ISystemInfoServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    info: ISystemInfoServiceService_IInfo;
    address: ISystemInfoServiceService_IAddress;
    listUpdate: ISystemInfoServiceService_IListUpdate;
}

interface ISystemInfoServiceService_IInfo extends grpc.MethodDefinition<system_system_pb.ClientInfo, system_system_pb.SystemInfo> {
    path: "/services.SystemInfoService/Info";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_system_pb.ClientInfo>;
    requestDeserialize: grpc.deserialize<system_system_pb.ClientInfo>;
    responseSerialize: grpc.serialize<system_system_pb.SystemInfo>;
    responseDeserialize: grpc.deserialize<system_system_pb.SystemInfo>;
}
interface ISystemInfoServiceService_IAddress extends grpc.MethodDefinition<system_system_pb.ClientInfo, system_system_pb.AddressInfo> {
    path: "/services.SystemInfoService/Address";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_system_pb.ClientInfo>;
    requestDeserialize: grpc.deserialize<system_system_pb.ClientInfo>;
    responseSerialize: grpc.serialize<system_system_pb.AddressInfo>;
    responseDeserialize: grpc.deserialize<system_system_pb.AddressInfo>;
}
interface ISystemInfoServiceService_IListUpdate extends grpc.MethodDefinition<system_system_pb.UpdateInfo, system_system_pb.UpdateInfoList> {
    path: "/services.SystemInfoService/ListUpdate";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<system_system_pb.UpdateInfo>;
    requestDeserialize: grpc.deserialize<system_system_pb.UpdateInfo>;
    responseSerialize: grpc.serialize<system_system_pb.UpdateInfoList>;
    responseDeserialize: grpc.deserialize<system_system_pb.UpdateInfoList>;
}

export const SystemInfoServiceService: ISystemInfoServiceService;

export interface ISystemInfoServiceServer {
    info: grpc.handleUnaryCall<system_system_pb.ClientInfo, system_system_pb.SystemInfo>;
    address: grpc.handleUnaryCall<system_system_pb.ClientInfo, system_system_pb.AddressInfo>;
    listUpdate: grpc.handleUnaryCall<system_system_pb.UpdateInfo, system_system_pb.UpdateInfoList>;
}

export interface ISystemInfoServiceClient {
    info(request: system_system_pb.ClientInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    info(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    info(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    address(request: system_system_pb.ClientInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    address(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    address(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    listUpdate(request: system_system_pb.UpdateInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
    listUpdate(request: system_system_pb.UpdateInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
    listUpdate(request: system_system_pb.UpdateInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
}

export class SystemInfoServiceClient extends grpc.Client implements ISystemInfoServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public info(request: system_system_pb.ClientInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    public info(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    public info(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.SystemInfo) => void): grpc.ClientUnaryCall;
    public address(request: system_system_pb.ClientInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    public address(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    public address(request: system_system_pb.ClientInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.AddressInfo) => void): grpc.ClientUnaryCall;
    public listUpdate(request: system_system_pb.UpdateInfo, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
    public listUpdate(request: system_system_pb.UpdateInfo, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
    public listUpdate(request: system_system_pb.UpdateInfo, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: system_system_pb.UpdateInfoList) => void): grpc.ClientUnaryCall;
}
