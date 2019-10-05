// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var report_report_pb = require('../report/report_pb.js');

function serialize_services_Report(arg) {
  if (!(arg instanceof report_report_pb.Report)) {
    throw new Error('Expected argument of type services.Report');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_services_Report(buffer_arg) {
  return report_report_pb.Report.deserializeBinary(new Uint8Array(buffer_arg));
}


var ReportServiceService = exports.ReportServiceService = {
  create: {
    path: '/services.ReportService/create',
    requestStream: false,
    responseStream: false,
    requestType: report_report_pb.Report,
    responseType: report_report_pb.Report,
    requestSerialize: serialize_services_Report,
    requestDeserialize: deserialize_services_Report,
    responseSerialize: serialize_services_Report,
    responseDeserialize: deserialize_services_Report,
  },
  get: {
    path: '/services.ReportService/get',
    requestStream: false,
    responseStream: false,
    requestType: report_report_pb.Report,
    responseType: report_report_pb.Report,
    requestSerialize: serialize_services_Report,
    requestDeserialize: deserialize_services_Report,
    responseSerialize: serialize_services_Report,
    responseDeserialize: deserialize_services_Report,
  },
};

exports.ReportServiceClient = grpc.makeGenericClientConstructor(ReportServiceService);
