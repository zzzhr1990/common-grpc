// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var file_compress_pb = require('../file/compress_pb.js');

function serialize_services_CreateZipDownloadRequest(arg) {
  if (!(arg instanceof file_compress_pb.CreateZipDownloadRequest)) {
    throw new Error('Expected argument of type services.CreateZipDownloadRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_CreateZipDownloadRequest(buffer_arg) {
  return file_compress_pb.CreateZipDownloadRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ZipDownloadDetail(arg) {
  if (!(arg instanceof file_compress_pb.ZipDownloadDetail)) {
    throw new Error('Expected argument of type services.ZipDownloadDetail');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ZipDownloadDetail(buffer_arg) {
  return file_compress_pb.ZipDownloadDetail.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_services_ZipDownloadInfo(arg) {
  if (!(arg instanceof file_compress_pb.ZipDownloadInfo)) {
    throw new Error('Expected argument of type services.ZipDownloadInfo');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_ZipDownloadInfo(buffer_arg) {
  return file_compress_pb.ZipDownloadInfo.deserializeBinary(new Uint8Array(buffer_arg));
}


var ZipFileServiceService = exports.ZipFileServiceService = {
  createZipDownload: {
    path: '/services.ZipFileService/CreateZipDownload',
    requestStream: false,
    responseStream: false,
    requestType: file_compress_pb.CreateZipDownloadRequest,
    responseType: file_compress_pb.ZipDownloadInfo,
    requestSerialize: serialize_services_CreateZipDownloadRequest,
    requestDeserialize: deserialize_services_CreateZipDownloadRequest,
    responseSerialize: serialize_services_ZipDownloadInfo,
    responseDeserialize: deserialize_services_ZipDownloadInfo,
  },
  getZipDownload: {
    path: '/services.ZipFileService/GetZipDownload',
    requestStream: false,
    responseStream: false,
    requestType: file_compress_pb.ZipDownloadInfo,
    responseType: file_compress_pb.ZipDownloadInfo,
    requestSerialize: serialize_services_ZipDownloadInfo,
    requestDeserialize: deserialize_services_ZipDownloadInfo,
    responseSerialize: serialize_services_ZipDownloadInfo,
    responseDeserialize: deserialize_services_ZipDownloadInfo,
  },
  getZipDetail: {
    path: '/services.ZipFileService/GetZipDetail',
    requestStream: false,
    responseStream: false,
    requestType: file_compress_pb.ZipDownloadInfo,
    responseType: file_compress_pb.ZipDownloadDetail,
    requestSerialize: serialize_services_ZipDownloadInfo,
    requestDeserialize: deserialize_services_ZipDownloadInfo,
    responseSerialize: serialize_services_ZipDownloadDetail,
    responseDeserialize: deserialize_services_ZipDownloadDetail,
  },
};

exports.ZipFileServiceClient = grpc.makeGenericClientConstructor(ZipFileServiceService);
