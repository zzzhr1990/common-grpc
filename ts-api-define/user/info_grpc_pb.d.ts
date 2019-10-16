// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: user/info.proto

import * as user_info_pb from "../user/info_pb";
import * as grpc from "grpc";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  get: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  findOne: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  login: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  loginDirect: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  logoff: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  update: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  changePassword: grpc.MethodDefinition<user_info_pb.PasswordPair, user_info_pb.User>;
}

export const UserServiceService: IUserServiceService;

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  create(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  create(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.PasswordPair, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
}
