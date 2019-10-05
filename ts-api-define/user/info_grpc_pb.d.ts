// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: user/info.proto

import * as user_info_pb from "../user/info_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IGrpcUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  createUser: grpc.MethodDefinition<user_info_pb.GrpcUser, common_common_entity_pb.BoolEntity>;
  getUser: grpc.MethodDefinition<user_info_pb.GrpcUser, user_info_pb.GrpcUser>;
  getUserOrEmpty: grpc.MethodDefinition<user_info_pb.GrpcUser, user_info_pb.GrpcUser>;
  login: grpc.MethodDefinition<user_info_pb.GrpcUser, user_info_pb.GrpcUser>;
  getBalance: grpc.MethodDefinition<user_info_pb.Balance, user_info_pb.Balance>;
  setSpaceUsed: grpc.MethodDefinition<user_info_pb.Balance, user_info_pb.Balance>;
  changePassword: grpc.MethodDefinition<user_info_pb.PasswordPair, common_common_entity_pb.BoolEntity>;
  changeName: grpc.MethodDefinition<user_info_pb.GrpcUser, common_common_entity_pb.BoolEntity>;
}

export const GrpcUserServiceService: IGrpcUserServiceService;

export class GrpcUserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  createUser(argument: user_info_pb.GrpcUser, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  createUser(argument: user_info_pb.GrpcUser, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  createUser(argument: user_info_pb.GrpcUser, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  getUser(argument: user_info_pb.GrpcUser, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getUser(argument: user_info_pb.GrpcUser, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getUser(argument: user_info_pb.GrpcUser, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getUserOrEmpty(argument: user_info_pb.GrpcUser, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getUserOrEmpty(argument: user_info_pb.GrpcUser, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getUserOrEmpty(argument: user_info_pb.GrpcUser, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.GrpcUser, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.GrpcUser, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.GrpcUser, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.GrpcUser>): grpc.ClientUnaryCall;
  getBalance(argument: user_info_pb.Balance, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  getBalance(argument: user_info_pb.Balance, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  getBalance(argument: user_info_pb.Balance, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  setSpaceUsed(argument: user_info_pb.Balance, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  setSpaceUsed(argument: user_info_pb.Balance, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  setSpaceUsed(argument: user_info_pb.Balance, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.Balance>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeName(argument: user_info_pb.GrpcUser, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeName(argument: user_info_pb.GrpcUser, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  changeName(argument: user_info_pb.GrpcUser, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
}
