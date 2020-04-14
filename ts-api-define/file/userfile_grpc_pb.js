// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_userfile_pb = require('../file/userfile_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BathFileRequest(arg) {
  if (!(arg instanceof file_userfile_pb.BathFileRequest)) {
    throw new Error('Expected argument of type services.BathFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BathFileRequest(buffer_arg) {
  return file_userfile_pb.BathFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_Int64Entity(arg) {
  if (!(arg instanceof common_common_entity_pb.Int64Entity)) {
    throw new Error('Expected argument of type services.Int64Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Int64Entity(buffer_arg) {
  return common_common_entity_pb.Int64Entity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashInfo(arg) {
  if (!(arg instanceof file_userfile_pb.TrashInfo)) {
    throw new Error('Expected argument of type services.TrashInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashInfo(buffer_arg) {
  return file_userfile_pb.TrashInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashListResponse(arg) {
  if (!(arg instanceof file_userfile_pb.TrashListResponse)) {
    throw new Error('Expected argument of type services.TrashListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashListResponse(buffer_arg) {
  return file_userfile_pb.TrashListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UploadTokenResponse(arg) {
  if (!(arg instanceof file_userfile_pb.UploadTokenResponse)) {
    throw new Error('Expected argument of type services.UploadTokenResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UploadTokenResponse(buffer_arg) {
  return file_userfile_pb.UploadTokenResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFile(arg) {
  if (!(arg instanceof file_userfile_pb.UserFile)) {
    throw new Error('Expected argument of type services.UserFile');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFile(buffer_arg) {
  return file_userfile_pb.UserFile.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileListRequest(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileListRequest)) {
    throw new Error('Expected argument of type services.UserFileListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileListRequest(buffer_arg) {
  return file_userfile_pb.UserFileListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileListResponse(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileListResponse)) {
    throw new Error('Expected argument of type services.UserFileListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileListResponse(buffer_arg) {
  return file_userfile_pb.UserFileListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  // Create create a file
  create: {
    path: '/services.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  flushStore: {
    path: '/services.FileService/FlushStore',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  updateCount: {
    path: '/services.FileService/UpdateCount',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  // rpc CreateInternal (UserFile) returns (UserFile) {}
  get: {
    path: '/services.FileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  uploadToken: {
    path: '/services.FileService/UploadToken',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UploadTokenResponse,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UploadTokenResponse,
    responseDeserialize: deserialize_services_UploadTokenResponse,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  // rpc ChangePathInternal (UserFile) returns (UserFile) {}
  lock: {
    path: '/services.FileService/Lock',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  releaseLock: {
    path: '/services.FileService/ReleaseLock',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  trash: {
    path: '/services.FileService/Trash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  delete: {
    path: '/services.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  copy: {
    path: '/services.FileService/Copy',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  move: {
    path: '/services.FileService/Move',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  recover: {
    path: '/services.FileService/Recover',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  // rpc Page (UserFilePageRequest) returns (UserFilePageResponse) {}
  list: {
    path: '/services.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFileListRequest,
    responseType: file_userfile_pb.UserFileListResponse,
    requestSerialize: serialize_services_UserFileListRequest,
    requestDeserialize: deserialize_services_UserFileListRequest,
    responseSerialize: serialize_services_UserFileListResponse,
    responseDeserialize: deserialize_services_UserFileListResponse,
  },
  listInternal: {
    path: '/services.FileService/ListInternal',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFileListRequest,
    responseType: file_userfile_pb.UserFileListResponse,
    requestSerialize: serialize_services_UserFileListRequest,
    requestDeserialize: deserialize_services_UserFileListRequest,
    responseSerialize: serialize_services_UserFileListResponse,
    responseDeserialize: deserialize_services_UserFileListResponse,
  },
  // rpc PageTrash (CommonPageRequest) returns (TrashPageResponse) {}
  deleteTrash: {
    path: '/services.FileService/DeleteTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  listTrash: {
    path: '/services.FileService/ListTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFileListRequest,
    responseType: file_userfile_pb.TrashListResponse,
    requestSerialize: serialize_services_UserFileListRequest,
    requestDeserialize: deserialize_services_UserFileListRequest,
    responseSerialize: serialize_services_TrashListResponse,
    responseDeserialize: deserialize_services_TrashListResponse,
  },
  getTrash: {
    path: '/services.FileService/GetTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.TrashInfo,
    responseType: file_userfile_pb.TrashInfo,
    requestSerialize: serialize_services_TrashInfo,
    requestDeserialize: deserialize_services_TrashInfo,
    responseSerialize: serialize_services_TrashInfo,
    responseDeserialize: deserialize_services_TrashInfo,
  },
  clearTrash: {
    path: '/services.FileService/ClearTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.BathFileRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_BathFileRequest,
    requestDeserialize: deserialize_services_BathFileRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
