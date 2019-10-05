// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: file/userfile.proto

import * as file_userfile_pb from "../file/userfile_pb";
import * as common_common_entity_pb from "../common/common_entity_pb";
import * as grpc from "grpc";

interface IUserFileServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  get: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  uploadToken: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UploadTokenResponse>;
  getOrEmpty: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  getOrEmptyEx: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFileEx>;
  pageDirectory: grpc.MethodDefinition<file_userfile_pb.PageUserFileRequest, file_userfile_pb.UserFilePage>;
  listDirectory: grpc.MethodDefinition<file_userfile_pb.ListUserFileRequest, file_userfile_pb.UserFileList>;
  listDirectoryInteral: grpc.MethodDefinition<file_userfile_pb.ListUserFileRequest, file_userfile_pb.UserFileList>;
  operate: grpc.MethodDefinition<file_userfile_pb.UserFileOperation, common_common_entity_pb.Int32Entity>;
  deleteByIdentity: grpc.MethodDefinition<file_userfile_pb.DeleteFilesRequest, common_common_entity_pb.Int64Entity>;
  moveToTrash: grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.Int64Entity>;
  listTrash: grpc.MethodDefinition<file_userfile_pb.ListTrashRequest, file_userfile_pb.TrashList>;
  pageTrash: grpc.MethodDefinition<file_userfile_pb.PageTrashRequest, file_userfile_pb.TrashPage>;
  uploadCallback: grpc.MethodDefinition<common_common_entity_pb.StringEntity, file_userfile_pb.UserFile>;
  tryCreateFile: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.UserFile>;
  rename: grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity>;
  moveFromTrash: grpc.MethodDefinition<file_userfile_pb.MoveBackRequest, common_common_entity_pb.Int64Entity>;
  truncateTrash: grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.Int64Entity>;
  deleteInTrash: grpc.MethodDefinition<file_userfile_pb.DeleteInTrashRequest, common_common_entity_pb.Int64Entity>;
  history: grpc.MethodDefinition<file_userfile_pb.UserFile, file_userfile_pb.FileHistoryResponse>;
  historyDetail: grpc.MethodDefinition<file_userfile_pb.FileHistory, file_userfile_pb.FileHistoryEx>;
  setShare: grpc.MethodDefinition<file_userfile_pb.UserFile, common_common_entity_pb.BoolEntity>;
  pageAll: grpc.MethodDefinition<file_userfile_pb.PageUserFileRequest, file_userfile_pb.UserFilePage>;
  listAll: grpc.MethodDefinition<file_userfile_pb.ListUserFileRequest, file_userfile_pb.UserFileList>;
  reCount: grpc.MethodDefinition<common_common_entity_pb.Int64Entity, common_common_entity_pb.BoolEntity>;
}

export const UserFileServiceService: IUserFileServiceService;

export class UserFileServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  create(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  create(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  get(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  uploadToken(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UploadTokenResponse>): grpc.ClientUnaryCall;
  uploadToken(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UploadTokenResponse>): grpc.ClientUnaryCall;
  uploadToken(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UploadTokenResponse>): grpc.ClientUnaryCall;
  getOrEmpty(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  getOrEmpty(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  getOrEmpty(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  getOrEmptyEx(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFileEx>): grpc.ClientUnaryCall;
  getOrEmptyEx(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileEx>): grpc.ClientUnaryCall;
  getOrEmptyEx(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileEx>): grpc.ClientUnaryCall;
  pageDirectory(argument: file_userfile_pb.PageUserFileRequest, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  pageDirectory(argument: file_userfile_pb.PageUserFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  pageDirectory(argument: file_userfile_pb.PageUserFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  listDirectory(argument: file_userfile_pb.ListUserFileRequest, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listDirectory(argument: file_userfile_pb.ListUserFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listDirectory(argument: file_userfile_pb.ListUserFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listDirectoryInteral(argument: file_userfile_pb.ListUserFileRequest, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listDirectoryInteral(argument: file_userfile_pb.ListUserFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listDirectoryInteral(argument: file_userfile_pb.ListUserFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  operate(argument: file_userfile_pb.UserFileOperation, callback: grpc.requestCallback<common_common_entity_pb.Int32Entity>): grpc.ClientUnaryCall;
  operate(argument: file_userfile_pb.UserFileOperation, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int32Entity>): grpc.ClientUnaryCall;
  operate(argument: file_userfile_pb.UserFileOperation, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int32Entity>): grpc.ClientUnaryCall;
  deleteByIdentity(argument: file_userfile_pb.DeleteFilesRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteByIdentity(argument: file_userfile_pb.DeleteFilesRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteByIdentity(argument: file_userfile_pb.DeleteFilesRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  moveToTrash(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  moveToTrash(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  moveToTrash(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.ListTrashRequest, callback: grpc.requestCallback<file_userfile_pb.TrashList>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.ListTrashRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashList>): grpc.ClientUnaryCall;
  listTrash(argument: file_userfile_pb.ListTrashRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashList>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.PageTrashRequest, callback: grpc.requestCallback<file_userfile_pb.TrashPage>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.PageTrashRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashPage>): grpc.ClientUnaryCall;
  pageTrash(argument: file_userfile_pb.PageTrashRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.TrashPage>): grpc.ClientUnaryCall;
  uploadCallback(argument: common_common_entity_pb.StringEntity, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  uploadCallback(argument: common_common_entity_pb.StringEntity, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  uploadCallback(argument: common_common_entity_pb.StringEntity, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  tryCreateFile(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  tryCreateFile(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  tryCreateFile(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFile>): grpc.ClientUnaryCall;
  rename(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  rename(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  rename(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  moveFromTrash(argument: file_userfile_pb.MoveBackRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  moveFromTrash(argument: file_userfile_pb.MoveBackRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  moveFromTrash(argument: file_userfile_pb.MoveBackRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  truncateTrash(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  truncateTrash(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  truncateTrash(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteInTrash(argument: file_userfile_pb.DeleteInTrashRequest, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteInTrash(argument: file_userfile_pb.DeleteInTrashRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  deleteInTrash(argument: file_userfile_pb.DeleteInTrashRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.Int64Entity>): grpc.ClientUnaryCall;
  history(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<file_userfile_pb.FileHistoryResponse>): grpc.ClientUnaryCall;
  history(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.FileHistoryResponse>): grpc.ClientUnaryCall;
  history(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.FileHistoryResponse>): grpc.ClientUnaryCall;
  historyDetail(argument: file_userfile_pb.FileHistory, callback: grpc.requestCallback<file_userfile_pb.FileHistoryEx>): grpc.ClientUnaryCall;
  historyDetail(argument: file_userfile_pb.FileHistory, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.FileHistoryEx>): grpc.ClientUnaryCall;
  historyDetail(argument: file_userfile_pb.FileHistory, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.FileHistoryEx>): grpc.ClientUnaryCall;
  setShare(argument: file_userfile_pb.UserFile, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  setShare(argument: file_userfile_pb.UserFile, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  setShare(argument: file_userfile_pb.UserFile, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  pageAll(argument: file_userfile_pb.PageUserFileRequest, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  pageAll(argument: file_userfile_pb.PageUserFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  pageAll(argument: file_userfile_pb.PageUserFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFilePage>): grpc.ClientUnaryCall;
  listAll(argument: file_userfile_pb.ListUserFileRequest, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listAll(argument: file_userfile_pb.ListUserFileRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  listAll(argument: file_userfile_pb.ListUserFileRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<file_userfile_pb.UserFileList>): grpc.ClientUnaryCall;
  reCount(argument: common_common_entity_pb.Int64Entity, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  reCount(argument: common_common_entity_pb.Int64Entity, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
  reCount(argument: common_common_entity_pb.Int64Entity, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<common_common_entity_pb.BoolEntity>): grpc.ClientUnaryCall;
}
