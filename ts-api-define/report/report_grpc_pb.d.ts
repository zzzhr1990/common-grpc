// GENERATED CODE -- DO NOT EDIT!

// package: services
// file: report/report.proto

import * as report_report_pb from "../report/report_pb";
import * as grpc from "grpc";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  create: grpc.MethodDefinition<report_report_pb.Report, report_report_pb.Report>;
  get: grpc.MethodDefinition<report_report_pb.Report, report_report_pb.Report>;
}

export const ReportServiceService: IReportServiceService;

export class ReportServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  create(argument: report_report_pb.Report, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
  create(argument: report_report_pb.Report, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
  create(argument: report_report_pb.Report, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
  get(argument: report_report_pb.Report, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
  get(argument: report_report_pb.Report, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
  get(argument: report_report_pb.Report, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<report_report_pb.Report>): grpc.ClientUnaryCall;
}
