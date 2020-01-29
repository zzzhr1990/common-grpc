// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: user/info.proto

import * as user_info_pb from "../user/info_pb";
import * as grpc from "grpc";

interface IUserServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  smsCreate: grpc.MethodDefinition<user_info_pb.SmsCreateRequest, user_info_pb.User>;
  get: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  findOne: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  login: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  smsLogin: grpc.MethodDefinition<user_info_pb.SmsValidateRequest, user_info_pb.User>;
  loginDirect: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  logoff: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  update: grpc.MethodDefinition<user_info_pb.User, user_info_pb.User>;
  sendSms: grpc.MethodDefinition<user_info_pb.SmsRequest, user_info_pb.SmsResponse>;
  validateSms: grpc.MethodDefinition<user_info_pb.SmsValidateRequest, user_info_pb.SmsValidateResponse>;
  changePassword: grpc.MethodDefinition<user_info_pb.ChangePasswordRequest, user_info_pb.User>;
  smsChangePassword: grpc.MethodDefinition<user_info_pb.SmsChangePasswordRequest, user_info_pb.User>;
  bindThirdPartyLogin: grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
  removeThirdPartyLogin: grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
  thirdPartyLogin: grpc.MethodDefinition<user_info_pb.ThirdPartyLoginInfo, user_info_pb.User>;
  createOauthInfo: grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
  refreshOauthToken: grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
  checkAccessToken: grpc.MethodDefinition<user_info_pb.OauthInfo, user_info_pb.OauthInfo>;
}

export const UserServiceService: IUserServiceService;

export class UserServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  create(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  create(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsCreate(argument: user_info_pb.SmsCreateRequest, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsCreate(argument: user_info_pb.SmsCreateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsCreate(argument: user_info_pb.SmsCreateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  get(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  findOne(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  login(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsLogin(argument: user_info_pb.SmsValidateRequest, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsLogin(argument: user_info_pb.SmsValidateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsLogin(argument: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  loginDirect(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  logoff(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  update(argument: user_info_pb.User, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  sendSms(argument: user_info_pb.SmsRequest, callback: grpc.requestCallback<user_info_pb.SmsResponse>): grpc.ClientUnaryCall;
  sendSms(argument: user_info_pb.SmsRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.SmsResponse>): grpc.ClientUnaryCall;
  sendSms(argument: user_info_pb.SmsRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.SmsResponse>): grpc.ClientUnaryCall;
  validateSms(argument: user_info_pb.SmsValidateRequest, callback: grpc.requestCallback<user_info_pb.SmsValidateResponse>): grpc.ClientUnaryCall;
  validateSms(argument: user_info_pb.SmsValidateRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.SmsValidateResponse>): grpc.ClientUnaryCall;
  validateSms(argument: user_info_pb.SmsValidateRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.SmsValidateResponse>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.ChangePasswordRequest, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.ChangePasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  changePassword(argument: user_info_pb.ChangePasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsChangePassword(argument: user_info_pb.SmsChangePasswordRequest, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsChangePassword(argument: user_info_pb.SmsChangePasswordRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  smsChangePassword(argument: user_info_pb.SmsChangePasswordRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  bindThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  bindThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  bindThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  removeThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  removeThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  removeThirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  thirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  thirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  thirdPartyLogin(argument: user_info_pb.ThirdPartyLoginInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.User>): grpc.ClientUnaryCall;
  createOauthInfo(argument: user_info_pb.OauthInfo, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  createOauthInfo(argument: user_info_pb.OauthInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  createOauthInfo(argument: user_info_pb.OauthInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  refreshOauthToken(argument: user_info_pb.OauthInfo, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  refreshOauthToken(argument: user_info_pb.OauthInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  refreshOauthToken(argument: user_info_pb.OauthInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  checkAccessToken(argument: user_info_pb.OauthInfo, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  checkAccessToken(argument: user_info_pb.OauthInfo, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
  checkAccessToken(argument: user_info_pb.OauthInfo, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<user_info_pb.OauthInfo>): grpc.ClientUnaryCall;
}
