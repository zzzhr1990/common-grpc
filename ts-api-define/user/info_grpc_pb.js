// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var user_info_pb = require('../user/info_pb.js');

function serialize_services_ChangePasswordRequest(arg) {
  if (!(arg instanceof user_info_pb.ChangePasswordRequest)) {
    throw new Error('Expected argument of type services.ChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ChangePasswordRequest(buffer_arg) {
  return user_info_pb.ChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_LaterAction(arg) {
  if (!(arg instanceof user_info_pb.LaterAction)) {
    throw new Error('Expected argument of type services.LaterAction');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_LaterAction(buffer_arg) {
  return user_info_pb.LaterAction.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_OauthInfo(arg) {
  if (!(arg instanceof user_info_pb.OauthInfo)) {
    throw new Error('Expected argument of type services.OauthInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_OauthInfo(buffer_arg) {
  return user_info_pb.OauthInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SmsChangePasswordRequest(arg) {
  if (!(arg instanceof user_info_pb.SmsChangePasswordRequest)) {
    throw new Error('Expected argument of type services.SmsChangePasswordRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsChangePasswordRequest(buffer_arg) {
  return user_info_pb.SmsChangePasswordRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_SmsCreateRequest(arg) {
  if (!(arg instanceof user_info_pb.SmsCreateRequest)) {
    throw new Error('Expected argument of type services.SmsCreateRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SmsCreateRequest(buffer_arg) {
  return user_info_pb.SmsCreateRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_SubscriptionPayment(arg) {
  if (!(arg instanceof user_info_pb.SubscriptionPayment)) {
    throw new Error('Expected argument of type services.SubscriptionPayment');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_SubscriptionPayment(buffer_arg) {
  return user_info_pb.SubscriptionPayment.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ThirdPartyLoginInfo(arg) {
  if (!(arg instanceof user_info_pb.ThirdPartyLoginInfo)) {
    throw new Error('Expected argument of type services.ThirdPartyLoginInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ThirdPartyLoginInfo(buffer_arg) {
  return user_info_pb.ThirdPartyLoginInfo.deserializeBinary(new Uint8Array(buffer_arg));
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
  // 强行创建用户（仅后台使用）
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
  // 短信创建用户，password、email、name 选填项目，如果不填写，系统会随机生成
smsCreate: {
    path: '/services.UserService/SmsCreate',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SmsCreateRequest,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_SmsCreateRequest,
    requestDeserialize: deserialize_services_SmsCreateRequest,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  // 获取用户信息，仅需要传递 identity，如果没有 返回空用户实体（identity = 0）
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
  // 查找用户/判断用户存在，仅需要传递 identity，或者是phone+country_code，如果没有 返回空用户实体（identity = 0）
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
  // 校验密码并登录， 支持 phone+country_code+password/ name+country_code+password，如果没有 返回空用户实体（identity = 0）
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
  // 强行登录用户（仅后台使用）
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
  // 登出（记录用户登录操作）
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
  // 更新用户信息，identity是必填项目，其他选填， 但是不能更改密码
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
// 发送短信
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
  // 验证短信验证码，不建议使用，请直接使用对应的 SmsXXX方法
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
  // 更改用户密码， 用户identity、old_password、new_password必须填写
changePassword: {
    path: '/services.UserService/ChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.ChangePasswordRequest,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_ChangePasswordRequest,
    requestDeserialize: deserialize_services_ChangePasswordRequest,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  // 短信更改用户密码， 用户session、code、new_password必须填写
smsChangePassword: {
    path: '/services.UserService/SmsChangePassword',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SmsChangePasswordRequest,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_SmsChangePasswordRequest,
    requestDeserialize: deserialize_services_SmsChangePasswordRequest,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  // 废弃， 请使用update
// rpc ChangeName (User) returns (User) {}
// 废弃， 请使用update
// rpc ChangeEmail (User) returns (User) {}
bindThirdPartyLogin: {
    path: '/services.UserService/BindThirdPartyLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.ThirdPartyLoginInfo,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_ThirdPartyLoginInfo,
    requestDeserialize: deserialize_services_ThirdPartyLoginInfo,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  removeThirdPartyLogin: {
    path: '/services.UserService/RemoveThirdPartyLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.ThirdPartyLoginInfo,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_ThirdPartyLoginInfo,
    requestDeserialize: deserialize_services_ThirdPartyLoginInfo,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  thirdPartyLogin: {
    path: '/services.UserService/ThirdPartyLogin',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.ThirdPartyLoginInfo,
    responseType: user_info_pb.User,
    requestSerialize: serialize_services_ThirdPartyLoginInfo,
    requestDeserialize: deserialize_services_ThirdPartyLoginInfo,
    responseSerialize: serialize_services_User,
    responseDeserialize: deserialize_services_User,
  },
  createOauthInfo: {
    path: '/services.UserService/CreateOauthInfo',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.OauthInfo,
    responseType: user_info_pb.OauthInfo,
    requestSerialize: serialize_services_OauthInfo,
    requestDeserialize: deserialize_services_OauthInfo,
    responseSerialize: serialize_services_OauthInfo,
    responseDeserialize: deserialize_services_OauthInfo,
  },
  refreshOauthToken: {
    path: '/services.UserService/RefreshOauthToken',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.OauthInfo,
    responseType: user_info_pb.OauthInfo,
    requestSerialize: serialize_services_OauthInfo,
    requestDeserialize: deserialize_services_OauthInfo,
    responseSerialize: serialize_services_OauthInfo,
    responseDeserialize: deserialize_services_OauthInfo,
  },
  checkAccessToken: {
    path: '/services.UserService/CheckAccessToken',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.OauthInfo,
    responseType: user_info_pb.OauthInfo,
    requestSerialize: serialize_services_OauthInfo,
    requestDeserialize: deserialize_services_OauthInfo,
    responseSerialize: serialize_services_OauthInfo,
    responseDeserialize: deserialize_services_OauthInfo,
  },
  createPayment: {
    path: '/services.UserService/CreatePayment',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SubscriptionPayment,
    responseType: user_info_pb.SubscriptionPayment,
    requestSerialize: serialize_services_SubscriptionPayment,
    requestDeserialize: deserialize_services_SubscriptionPayment,
    responseSerialize: serialize_services_SubscriptionPayment,
    responseDeserialize: deserialize_services_SubscriptionPayment,
  },
  completePayment: {
    path: '/services.UserService/CompletePayment',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SubscriptionPayment,
    responseType: user_info_pb.SubscriptionPayment,
    requestSerialize: serialize_services_SubscriptionPayment,
    requestDeserialize: deserialize_services_SubscriptionPayment,
    responseSerialize: serialize_services_SubscriptionPayment,
    responseDeserialize: deserialize_services_SubscriptionPayment,
  },
  failedPayment: {
    path: '/services.UserService/FailedPayment',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.SubscriptionPayment,
    responseType: user_info_pb.SubscriptionPayment,
    requestSerialize: serialize_services_SubscriptionPayment,
    requestDeserialize: deserialize_services_SubscriptionPayment,
    responseSerialize: serialize_services_SubscriptionPayment,
    responseDeserialize: deserialize_services_SubscriptionPayment,
  },
  requestChangePhone: {
    path: '/services.UserService/RequestChangePhone',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LaterAction,
    responseType: user_info_pb.LaterAction,
    requestSerialize: serialize_services_LaterAction,
    requestDeserialize: deserialize_services_LaterAction,
    responseSerialize: serialize_services_LaterAction,
    responseDeserialize: deserialize_services_LaterAction,
  },
  requestRemoveAccount: {
    path: '/services.UserService/RequestRemoveAccount',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LaterAction,
    responseType: user_info_pb.LaterAction,
    requestSerialize: serialize_services_LaterAction,
    requestDeserialize: deserialize_services_LaterAction,
    responseSerialize: serialize_services_LaterAction,
    responseDeserialize: deserialize_services_LaterAction,
  },
  cancelLaterAction: {
    path: '/services.UserService/CancelLaterAction',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LaterAction,
    responseType: user_info_pb.LaterAction,
    requestSerialize: serialize_services_LaterAction,
    requestDeserialize: deserialize_services_LaterAction,
    responseSerialize: serialize_services_LaterAction,
    responseDeserialize: deserialize_services_LaterAction,
  },
  changePhone: {
    path: '/services.UserService/ChangePhone',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LaterAction,
    responseType: user_info_pb.LaterAction,
    requestSerialize: serialize_services_LaterAction,
    requestDeserialize: deserialize_services_LaterAction,
    responseSerialize: serialize_services_LaterAction,
    responseDeserialize: deserialize_services_LaterAction,
  },
  removeAccount: {
    path: '/services.UserService/RemoveAccount',
    requestStream: false,
    responseStream: false,
    requestType: user_info_pb.LaterAction,
    responseType: user_info_pb.LaterAction,
    requestSerialize: serialize_services_LaterAction,
    requestDeserialize: deserialize_services_LaterAction,
    responseSerialize: serialize_services_LaterAction,
    responseDeserialize: deserialize_services_LaterAction,
  },
};

exports.UserServiceClient = grpc.makeGenericClientConstructor(UserServiceService);
