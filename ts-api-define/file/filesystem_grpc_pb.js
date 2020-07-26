// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_filesystem_pb = require('../file/filesystem_pb.js');
var common_common_entity_pb = require('../common/common_entity_pb.js');

function serialize_services_BatchFileTaskRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.BatchFileTaskRequest)) {
    throw new Error('Expected argument of type services.BatchFileTaskRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchFileTaskRequest(buffer_arg) {
  return file_filesystem_pb.BatchFileTaskRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BatchFileTaskResult(arg) {
  if (!(arg instanceof file_filesystem_pb.BatchFileTaskResult)) {
    throw new Error('Expected argument of type services.BatchFileTaskResult');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchFileTaskResult(buffer_arg) {
  return file_filesystem_pb.BatchFileTaskResult.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_BatchLabelRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.BatchLabelRequest)) {
    throw new Error('Expected argument of type services.BatchLabelRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_BatchLabelRequest(buffer_arg) {
  return file_filesystem_pb.BatchLabelRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfo(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfo)) {
    throw new Error('Expected argument of type services.FileInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfo(buffer_arg) {
  return file_filesystem_pb.FileInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListRequest)) {
    throw new Error('Expected argument of type services.FileInfoListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListRequest(buffer_arg) {
  return file_filesystem_pb.FileInfoListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_FileInfoListResponse(arg) {
  if (!(arg instanceof file_filesystem_pb.FileInfoListResponse)) {
    throw new Error('Expected argument of type services.FileInfoListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_FileInfoListResponse(buffer_arg) {
  return file_filesystem_pb.FileInfoListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_Label(arg) {
  if (!(arg instanceof file_filesystem_pb.Label)) {
    throw new Error('Expected argument of type services.Label');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Label(buffer_arg) {
  return file_filesystem_pb.Label.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_LabelListRequest(arg) {
  if (!(arg instanceof file_filesystem_pb.LabelListRequest)) {
    throw new Error('Expected argument of type services.LabelListRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_LabelListRequest(buffer_arg) {
  return file_filesystem_pb.LabelListRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_LabelListResponse(arg) {
  if (!(arg instanceof file_filesystem_pb.LabelListResponse)) {
    throw new Error('Expected argument of type services.LabelListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_LabelListResponse(buffer_arg) {
  return file_filesystem_pb.LabelListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskCompleteEvent(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskCompleteEvent)) {
    throw new Error('Expected argument of type services.TaskCompleteEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskCompleteEvent(buffer_arg) {
  return file_filesystem_pb.TaskCompleteEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskProgress(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskProgress)) {
    throw new Error('Expected argument of type services.TaskProgress');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskProgress(buffer_arg) {
  return file_filesystem_pb.TaskProgress.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TaskStatusUpdateEvent(arg) {
  if (!(arg instanceof file_filesystem_pb.TaskStatusUpdateEvent)) {
    throw new Error('Expected argument of type services.TaskStatusUpdateEvent');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TaskStatusUpdateEvent(buffer_arg) {
  return file_filesystem_pb.TaskStatusUpdateEvent.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashInfo(arg) {
  if (!(arg instanceof file_filesystem_pb.TrashInfo)) {
    throw new Error('Expected argument of type services.TrashInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashInfo(buffer_arg) {
  return file_filesystem_pb.TrashInfo.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_TrashInfoListResponse(arg) {
  if (!(arg instanceof file_filesystem_pb.TrashInfoListResponse)) {
    throw new Error('Expected argument of type services.TrashInfoListResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_TrashInfoListResponse(buffer_arg) {
  return file_filesystem_pb.TrashInfoListResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var FileServiceService = exports.FileServiceService = {
  create: {
    path: '/services.FileService/Create',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  get: {
    path: '/services.FileService/Get',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.FileInfo,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_FileInfo,
    responseDeserialize: deserialize_services_FileInfo,
  },
  // rpc CreateInternal (FileInfo) returns (FileInfo) {}
list: {
    path: '/services.FileService/List',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  listInternal: {
    path: '/services.FileService/ListInternal',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.FileInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_FileInfoListResponse,
    responseDeserialize: deserialize_services_FileInfoListResponse,
  },
  trash: {
    path: '/services.FileService/Trash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  delete: {
    path: '/services.FileService/Delete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  copy: {
    path: '/services.FileService/Copy',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  move: {
    path: '/services.FileService/Move',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  rename: {
    path: '/services.FileService/Rename',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfo,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_FileInfo,
    requestDeserialize: deserialize_services_FileInfo,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  // rpc FlushStore (UserFile) returns (UserFile) {}
// 
recover: {
    path: '/services.FileService/Recover',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  deleteTrash: {
    path: '/services.FileService/DeleteTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  listTrash: {
    path: '/services.FileService/ListTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.FileInfoListRequest,
    responseType: file_filesystem_pb.TrashInfoListResponse,
    requestSerialize: serialize_services_FileInfoListRequest,
    requestDeserialize: deserialize_services_FileInfoListRequest,
    responseSerialize: serialize_services_TrashInfoListResponse,
    responseDeserialize: deserialize_services_TrashInfoListResponse,
  },
  getTrash: {
    path: '/services.FileService/GetTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TrashInfo,
    responseType: file_filesystem_pb.TrashInfo,
    requestSerialize: serialize_services_TrashInfo,
    requestDeserialize: deserialize_services_TrashInfo,
    responseSerialize: serialize_services_TrashInfo,
    responseDeserialize: deserialize_services_TrashInfo,
  },
  clearTrash: {
    path: '/services.FileService/ClearTrash',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TrashInfo,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_TrashInfo,
    requestDeserialize: deserialize_services_TrashInfo,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  // Label
createLabel: {
    path: '/services.FileService/CreateLabel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.Label,
    responseType: file_filesystem_pb.Label,
    requestSerialize: serialize_services_Label,
    requestDeserialize: deserialize_services_Label,
    responseSerialize: serialize_services_Label,
    responseDeserialize: deserialize_services_Label,
  },
  getLabel: {
    path: '/services.FileService/GetLabel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.Label,
    responseType: file_filesystem_pb.Label,
    requestSerialize: serialize_services_Label,
    requestDeserialize: deserialize_services_Label,
    responseSerialize: serialize_services_Label,
    responseDeserialize: deserialize_services_Label,
  },
  deleteLabel: {
    path: '/services.FileService/DeleteLabel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchLabelRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchLabelRequest,
    requestDeserialize: deserialize_services_BatchLabelRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  listLabel: {
    path: '/services.FileService/ListLabel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.LabelListRequest,
    responseType: file_filesystem_pb.LabelListResponse,
    requestSerialize: serialize_services_LabelListRequest,
    requestDeserialize: deserialize_services_LabelListRequest,
    responseSerialize: serialize_services_LabelListResponse,
    responseDeserialize: deserialize_services_LabelListResponse,
  },
  addLabelToFiles: {
    path: '/services.FileService/AddLabelToFiles',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
  removeLabelFromFiles: {
    path: '/services.FileService/RemoveLabelFromFiles',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.BatchFileTaskRequest,
    responseType: file_filesystem_pb.BatchFileTaskResult,
    requestSerialize: serialize_services_BatchFileTaskRequest,
    requestDeserialize: deserialize_services_BatchFileTaskRequest,
    responseSerialize: serialize_services_BatchFileTaskResult,
    responseDeserialize: deserialize_services_BatchFileTaskResult,
  },
};

exports.FileServiceClient = grpc.makeGenericClientConstructor(FileServiceService);
var FileNoticeServiceService = exports.FileNoticeServiceService = {
  onProgress: {
    path: '/services.FileNoticeService/OnProgress',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskProgress,
    responseType: file_filesystem_pb.TaskProgress,
    requestSerialize: serialize_services_TaskProgress,
    requestDeserialize: deserialize_services_TaskProgress,
    responseSerialize: serialize_services_TaskProgress,
    responseDeserialize: deserialize_services_TaskProgress,
  },
  onComplete: {
    path: '/services.FileNoticeService/OnComplete',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskCompleteEvent,
    responseType: file_filesystem_pb.TaskCompleteEvent,
    requestSerialize: serialize_services_TaskCompleteEvent,
    requestDeserialize: deserialize_services_TaskCompleteEvent,
    responseSerialize: serialize_services_TaskCompleteEvent,
    responseDeserialize: deserialize_services_TaskCompleteEvent,
  },
  onError: {
    path: '/services.FileNoticeService/OnError',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskStatusUpdateEvent,
    responseType: file_filesystem_pb.TaskStatusUpdateEvent,
    requestSerialize: serialize_services_TaskStatusUpdateEvent,
    requestDeserialize: deserialize_services_TaskStatusUpdateEvent,
    responseSerialize: serialize_services_TaskStatusUpdateEvent,
    responseDeserialize: deserialize_services_TaskStatusUpdateEvent,
  },
  onCancel: {
    path: '/services.FileNoticeService/OnCancel',
    requestStream: false,
    responseStream: false,
    requestType: file_filesystem_pb.TaskStatusUpdateEvent,
    responseType: file_filesystem_pb.TaskStatusUpdateEvent,
    requestSerialize: serialize_services_TaskStatusUpdateEvent,
    requestDeserialize: deserialize_services_TaskStatusUpdateEvent,
    responseSerialize: serialize_services_TaskStatusUpdateEvent,
    responseDeserialize: deserialize_services_TaskStatusUpdateEvent,
  },
};

exports.FileNoticeServiceClient = grpc.makeGenericClientConstructor(FileNoticeServiceService);
