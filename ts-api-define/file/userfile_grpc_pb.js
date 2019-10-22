// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var file_userfile_pb = require('../file/userfile_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_CommonListRequest(arg) {
  if (!(arg instanceof file_userfile_pb.CommonListRequest)) {
    throw new Error('Expected argument of type services.CommonListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CommonListRequest(buffer_arg) {
  return file_userfile_pb.CommonListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_CommonPageRequest(arg) {
  if (!(arg instanceof file_userfile_pb.CommonPageRequest)) {
    throw new Error('Expected argument of type services.CommonPageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CommonPageRequest(buffer_arg) {
  return file_userfile_pb.CommonPageRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_OperationQueue(arg) {
  if (!(arg instanceof file_userfile_pb.OperationQueue)) {
    throw new Error('Expected argument of type services.OperationQueue');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_OperationQueue(buffer_arg) {
  return file_userfile_pb.OperationQueue.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_TrashPageResponse(arg) {
  if (!(arg instanceof file_userfile_pb.TrashPageResponse)) {
    throw new Error('Expected argument of type services.TrashPageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashPageResponse(buffer_arg) {
  return file_userfile_pb.TrashPageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashRequest(arg) {
  if (!(arg instanceof file_userfile_pb.TrashRequest)) {
    throw new Error('Expected argument of type services.TrashRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashRequest(buffer_arg) {
  return file_userfile_pb.TrashRequest.deserializeBinary(new Uint8Array(buffer_arg));
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

function serialize_services_UserFilePageRequest(arg) {
  if (!(arg instanceof file_userfile_pb.UserFilePageRequest)) {
    throw new Error('Expected argument of type services.UserFilePageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFilePageRequest(buffer_arg) {
  return file_userfile_pb.UserFilePageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_UserFilePageResponse(arg) {
  if (!(arg instanceof file_userfile_pb.UserFilePageResponse)) {
    throw new Error('Expected argument of type services.UserFilePageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_UserFilePageResponse(buffer_arg) {
  return file_userfile_pb.UserFilePageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
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
  page: {
    path: '/services.FileService/Page',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.UserFilePageRequest,
    responseType: file_userfile_pb.UserFilePageResponse,
    requestSerialize: serialize_services_UserFilePageRequest,
    requestDeserialize: deserialize_services_UserFilePageRequest,
    responseSerialize: serialize_services_UserFilePageResponse,
    responseDeserialize: deserialize_services_UserFilePageResponse,
  },
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
  createTrash: {
    path: '/services.FileService/CreateTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.TrashRequest,
    responseType: common_common_entity_pb.Int64Entity,
    requestSerialize: serialize_services_TrashRequest,
    requestDeserialize: deserialize_services_TrashRequest,
    responseSerialize: serialize_services_Int64Entity,
    responseDeserialize: deserialize_services_Int64Entity,
  },
  pageTrash: {
    path: '/services.FileService/PageTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.CommonPageRequest,
    responseType: file_userfile_pb.TrashPageResponse,
    requestSerialize: serialize_services_CommonPageRequest,
    requestDeserialize: deserialize_services_CommonPageRequest,
    responseSerialize: serialize_services_TrashPageResponse,
    responseDeserialize: deserialize_services_TrashPageResponse,
  },
  listTrash: {
    path: '/services.FileService/ListTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.CommonListRequest,
    responseType: file_userfile_pb.TrashListResponse,
    requestSerialize: serialize_services_CommonListRequest,
    requestDeserialize: deserialize_services_CommonListRequest,
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
  addQueue: {
    path: '/services.FileService/AddQueue',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.OperationQueue,
    responseType: file_userfile_pb.OperationQueue,
    requestSerialize: serialize_services_OperationQueue,
    requestDeserialize: deserialize_services_OperationQueue,
    responseSerialize: serialize_services_OperationQueue,
    responseDeserialize: deserialize_services_OperationQueue,
  },
  fetchQueue: {
    path: '/services.FileService/FetchQueue',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.OperationQueue,
    responseType: file_userfile_pb.OperationQueue,
    requestSerialize: serialize_services_OperationQueue,
    requestDeserialize: deserialize_services_OperationQueue,
    responseSerialize: serialize_services_OperationQueue,
    responseDeserialize: deserialize_services_OperationQueue,
  },
  deleteQueue: {
    path: '/services.FileService/DeleteQueue',
    requestStream: false,
    responseStream: false,
    requestType: file_userfile_pb.OperationQueue,
    responseType: file_userfile_pb.OperationQueue,
    requestSerialize: serialize_services_OperationQueue,
    requestDeserialize: deserialize_services_OperationQueue,
    responseSerialize: serialize_services_OperationQueue,
    responseDeserialize: deserialize_services_OperationQueue,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
