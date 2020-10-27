// package: services
// file: report/report.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import {handleClientStreamingCall} from "@grpc/grpc-js/build/src/server-call";
import * as report_report_pb from "../report/report_pb";

interface IReportServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    create: IReportServiceService_Icreate;
    get: IReportServiceService_Iget;
}

interface IReportServiceService_Icreate extends grpc.MethodDefinition<report_report_pb.Report, report_report_pb.Report> {
    path: "/services.ReportService/create";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<report_report_pb.Report>;
    requestDeserialize: grpc.deserialize<report_report_pb.Report>;
    responseSerialize: grpc.serialize<report_report_pb.Report>;
    responseDeserialize: grpc.deserialize<report_report_pb.Report>;
}
interface IReportServiceService_Iget extends grpc.MethodDefinition<report_report_pb.Report, report_report_pb.Report> {
    path: "/services.ReportService/get";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<report_report_pb.Report>;
    requestDeserialize: grpc.deserialize<report_report_pb.Report>;
    responseSerialize: grpc.serialize<report_report_pb.Report>;
    responseDeserialize: grpc.deserialize<report_report_pb.Report>;
}

export const ReportServiceService: IReportServiceService;

export interface IReportServiceServer {
    create: grpc.handleUnaryCall<report_report_pb.Report, report_report_pb.Report>;
    get: grpc.handleUnaryCall<report_report_pb.Report, report_report_pb.Report>;
}

export interface IReportServiceClient {
    create(request: report_report_pb.Report, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    create(request: report_report_pb.Report, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    create(request: report_report_pb.Report, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    get(request: report_report_pb.Report, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    get(request: report_report_pb.Report, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    get(request: report_report_pb.Report, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
}

export class ReportServiceClient extends grpc.Client implements IReportServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public create(request: report_report_pb.Report, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    public create(request: report_report_pb.Report, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    public create(request: report_report_pb.Report, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    public get(request: report_report_pb.Report, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    public get(request: report_report_pb.Report, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
    public get(request: report_report_pb.Report, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: report_report_pb.Report) => void): grpc.ClientUnaryCall;
}
