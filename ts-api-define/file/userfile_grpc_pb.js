// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_userfile_pb = require('../file/userfile_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BoolEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.BoolEntity)) {
    throw new Error('Expected argument of type services.BoolEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BoolEntity(buffer_arg) {
  return common_common_entity_pb.BoolEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_DeleteFilesRequest(arg) {
  if (!(arg instanceof file_userfile_pb.DeleteFilesRequest)) {
    throw new Error('Expected argument of type services.DeleteFilesRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DeleteFilesRequest(buffer_arg) {
  return file_userfile_pb.DeleteFilesRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_DeleteInTrashRequest(arg) {
  if (!(arg instanceof file_userfile_pb.DeleteInTrashRequest)) {
    throw new Error('Expected argument of type services.DeleteInTrashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_DeleteInTrashRequest(buffer_arg) {
  return file_userfile_pb.DeleteInTrashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileHistory(arg) {
  if (!(arg instanceof file_userfile_pb.FileHistory)) {
    throw new Error('Expected argument of type services.FileHistory');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileHistory(buffer_arg) {
  return file_userfile_pb.FileHistory.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileHistoryEx(arg) {
  if (!(arg instanceof file_userfile_pb.FileHistoryEx)) {
    throw new Error('Expected argument of type services.FileHistoryEx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileHistoryEx(buffer_arg) {
  return file_userfile_pb.FileHistoryEx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileHistoryResponse(arg) {
  if (!(arg instanceof file_userfile_pb.FileHistoryResponse)) {
    throw new Error('Expected argument of type services.FileHistoryResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileHistoryResponse(buffer_arg) {
  return file_userfile_pb.FileHistoryResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_Int32Entity(arg) {
  if (!(arg instanceof common_common_entity_pb.Int32Entity)) {
    throw new Error('Expected argument of type services.Int32Entity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Int32Entity(buffer_arg) {
  return common_common_entity_pb.Int32Entity.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_ListTrashRequest(arg) {
  if (!(arg instanceof file_userfile_pb.ListTrashRequest)) {
    throw new Error('Expected argument of type services.ListTrashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListTrashRequest(buffer_arg) {
  return file_userfile_pb.ListTrashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ListUserFileRequest(arg) {
  if (!(arg instanceof file_userfile_pb.ListUserFileRequest)) {
    throw new Error('Expected argument of type services.ListUserFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ListUserFileRequest(buffer_arg) {
  return file_userfile_pb.ListUserFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_MoveBackRequest(arg) {
  if (!(arg instanceof file_userfile_pb.MoveBackRequest)) {
    throw new Error('Expected argument of type services.MoveBackRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_MoveBackRequest(buffer_arg) {
  return file_userfile_pb.MoveBackRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PageTrashRequest(arg) {
  if (!(arg instanceof file_userfile_pb.PageTrashRequest)) {
    throw new Error('Expected argument of type services.PageTrashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PageTrashRequest(buffer_arg) {
  return file_userfile_pb.PageTrashRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_PageUserFileRequest(arg) {
  if (!(arg instanceof file_userfile_pb.PageUserFileRequest)) {
    throw new Error('Expected argument of type services.PageUserFileRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_PageUserFileRequest(buffer_arg) {
  return file_userfile_pb.PageUserFileRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_StringEntity(arg) {
  if (!(arg instanceof common_common_entity_pb.StringEntity)) {
    throw new Error('Expected argument of type services.StringEntity');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_StringEntity(buffer_arg) {
  return common_common_entity_pb.StringEntity.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashList(arg) {
  if (!(arg instanceof file_userfile_pb.TrashList)) {
    throw new Error('Expected argument of type services.TrashList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashList(buffer_arg) {
  return file_userfile_pb.TrashList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashPage(arg) {
  if (!(arg instanceof file_userfile_pb.TrashPage)) {
    throw new Error('Expected argument of type services.TrashPage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashPage(buffer_arg) {
  return file_userfile_pb.TrashPage.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_UserFileEx(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileEx)) {
    throw new Error('Expected argument of type services.UserFileEx');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileEx(buffer_arg) {
  return file_userfile_pb.UserFileEx.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileList(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileList)) {
    throw new Error('Expected argument of type services.UserFileList');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileList(buffer_arg) {
  return file_userfile_pb.UserFileList.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFileOperation(arg) {
  if (!(arg instanceof file_userfile_pb.UserFileOperation)) {
    throw new Error('Expected argument of type services.UserFileOperation');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFileOperation(buffer_arg) {
  return file_userfile_pb.UserFileOperation.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFilePage(arg) {
  if (!(arg instanceof file_userfile_pb.UserFilePage)) {
    throw new Error('Expected argument of type services.UserFilePage');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFilePage(buffer_arg) {
  return file_userfile_pb.UserFilePage.deserializeBinary(new Uint8Array(buffer_arg));
}


var UserFileServiceService = exports.UserFileServiceService = {
  create: {
    path: '/services.UserFileService/create',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  get: {
    path: '/services.UserFileService/get',
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
    path: '/services.UserFileService/uploadToken',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UploadTokenResponse,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UploadTokenResponse,
    responseDeserialize: deserialize_services_UploadTokenResponse,
  },
  getOrEmpty: {
    path: '/services.UserFileService/getOrEmpty',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  getOrEmptyEx: {
    path: '/services.UserFileService/getOrEmptyEx',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFileEx,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFileEx,
    responseDeserialize: deserialize_services_UserFileEx,
  },
  pageDirectory: {
    path: '/services.UserFileService/pageDirectory',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.PageUserFileRequest,
    responseType: file_userfile_pb.UserFilePage,
    requestSerialize: serialize_services_PageUserFileRequest,
    requestDeserialize: deserialize_services_PageUserFileRequest,
    responseSerialize: serialize_services_UserFilePage,
    responseDeserialize: deserialize_services_UserFilePage,
  },
  listDirectory: {
    path: '/services.UserFileService/listDirectory',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.ListUserFileRequest,
    responseType: file_userfile_pb.UserFileList,
    requestSerialize: serialize_services_ListUserFileRequest,
    requestDeserialize: deserialize_services_ListUserFileRequest,
    responseSerialize: serialize_services_UserFileList,
    responseDeserialize: deserialize_services_UserFileList,
  },
  listDirectoryInteral: {
    path: '/services.UserFileService/listDirectoryInteral',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.ListUserFileRequest,
    responseType: file_userfile_pb.UserFileList,
    requestSerialize: serialize_services_ListUserFileRequest,
    requestDeserialize: deserialize_services_ListUserFileRequest,
    responseSerialize: serialize_services_UserFileList,
    responseDeserialize: deserialize_services_UserFileList,
  },
  operate: {
    path: '/services.UserFileService/operate',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFileOperation,
    responseType: common_common_entity_pb.Int32Entity,
    requestSerialize: serialize_services_UserFileOperation,
    requestDeserialize: deserialize_services_UserFileOperation,
    responseSerialize: serialize_services_Int32Entity,
    responseDeserialize: deserialize_services_Int32Entity,
  },
  deleteByIdentity: {
    path: '/services.UserFileService/deleteByIdentity',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.DeleteFilesRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_DeleteFilesRequest,
    requestDeserialize: deserialize_services_DeleteFilesRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  moveToTrash: {
    path: '/services.UserFileService/moveToTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  listTrash: {
    path: '/services.UserFileService/listTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.ListTrashRequest,
    responseType: file_userfile_pb.TrashList,
    requestSerialize: serialize_services_ListTrashRequest,
    requestDeserialize: deserialize_services_ListTrashRequest,
    responseSerialize: serialize_services_TrashList,
    responseDeserialize: deserialize_services_TrashList,
  },
  pageTrash: {
    path: '/services.UserFileService/pageTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.PageTrashRequest,
    responseType: file_userfile_pb.TrashPage,
    requestSerialize: serialize_services_PageTrashRequest,
    requestDeserialize: deserialize_services_PageTrashRequest,
    responseSerialize: serialize_services_TrashPage,
    responseDeserialize: deserialize_services_TrashPage,
  },
  uploadCallback: {
    path: '/services.UserFileService/uploadCallback',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.StringEntity,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_StringEntity,
    requestDeserialize: deserialize_services_StringEntity,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  tryCreateFile: {
    path: '/services.UserFileService/tryCreateFile',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.UserFile,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_UserFile,
    responseDeserialize: deserialize_services_UserFile,
  },
  rename: {
    path: '/services.UserFileService/rename',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  moveFromTrash: {
    path: '/services.UserFileService/moveFromTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.MoveBackRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_MoveBackRequest,
    requestDeserialize: deserialize_services_MoveBackRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  truncateTrash: {
    path: '/services.UserFileService/truncateTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  deleteInTrash: {
    path: '/services.UserFileService/deleteInTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.DeleteInTrashRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_DeleteInTrashRequest,
    requestDeserialize: deserialize_services_DeleteInTrashRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  history: {
    path: '/services.UserFileService/history',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: file_userfile_pb.FileHistoryResponse,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_FileHistoryResponse,
    responseDeserialize: deserialize_services_FileHistoryResponse,
  },
  historyDetail: {
    path: '/services.UserFileService/historyDetail',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.FileHistory,
    responseType: file_userfile_pb.FileHistoryEx,
    requestSerialize: serialize_services_FileHistory,
    requestDeserialize: deserialize_services_FileHistory,
    responseSerialize: serialize_services_FileHistoryEx,
    responseDeserialize: deserialize_services_FileHistoryEx,
  },
  setShare: {
    path: '/services.UserFileService/setShare',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFile,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_UserFile,
    requestDeserialize: deserialize_services_UserFile,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
  // rpc login (GrpcUser) returns (GrpcUser) {}
  pageAll: {
    path: '/services.UserFileService/pageAll',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.PageUserFileRequest,
    responseType: file_userfile_pb.UserFilePage,
    requestSerialize: serialize_services_PageUserFileRequest,
    requestDeserialize: deserialize_services_PageUserFileRequest,
    responseSerialize: serialize_services_UserFilePage,
    responseDeserialize: deserialize_services_UserFilePage,
  },
  listAll: {
    path: '/services.UserFileService/listAll',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.ListUserFileRequest,
    responseType: file_userfile_pb.UserFileList,
    requestSerialize: serialize_services_ListUserFileRequest,
    requestDeserialize: deserialize_services_ListUserFileRequest,
    responseSerialize: serialize_services_UserFileList,
    responseDeserialize: deserialize_services_UserFileList,
  },
  reCount: {
    path: '/services.UserFileService/reCount',
    requestStream: false,
    responseStream: false,
    requestType: common_common_entity_pb.Int64Entity,
    responseType: common_common_entity_pb.BoolEntity,
    requestSerialize: serialize_services_Int64Entity,
    requestDeserialize: deserialize_services_Int64Entity,
    responseSerialize: serialize_services_BoolEntity,
    responseDeserialize: deserialize_services_BoolEntity,
  },
};

exports.UserFileServiceClient = grpc.makeGenericClientConstructor(UserFileServiceService);
