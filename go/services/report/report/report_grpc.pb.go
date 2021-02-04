// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package report

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// ReportServiceClient is the client API for ReportService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ReportServiceClient interface {
	Create(ctx context.Context, in *Report, opts ...grpc.CallOption) (*Report, error)
	Get(ctx context.Context, in *Report, opts ...grpc.CallOption) (*Report, error)
}

type reportServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewReportServiceClient(cc grpc.ClientConnInterface) ReportServiceClient {
	return &reportServiceClient{cc}
}

func (c *reportServiceClient) Create(ctx context.Context, in *Report, opts ...grpc.CallOption) (*Report, error) {
	out := new(Report)
	err := c.cc.Invoke(ctx, "/services.ReportService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *reportServiceClient) Get(ctx context.Context, in *Report, opts ...grpc.CallOption) (*Report, error) {
	out := new(Report)
	err := c.cc.Invoke(ctx, "/services.ReportService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ReportServiceServer is the server API for ReportService service.
// All implementations must embed UnimplementedReportServiceServer
// for forward compatibility
type ReportServiceServer interface {
	Create(context.Context, *Report) (*Report, error)
	Get(context.Context, *Report) (*Report, error)
	mustEmbedUnimplementedReportServiceServer()
}

// UnimplementedReportServiceServer must be embedded to have forward compatible implementations.
type UnimplementedReportServiceServer struct {
}

func (UnimplementedReportServiceServer) Create(context.Context, *Report) (*Report, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedReportServiceServer) Get(context.Context, *Report) (*Report, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedReportServiceServer) mustEmbedUnimplementedReportServiceServer() {}

// UnsafeReportServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ReportServiceServer will
// result in compilation errors.
type UnsafeReportServiceServer interface {
	mustEmbedUnimplementedReportServiceServer()
}

func RegisterReportServiceServer(s grpc.ServiceRegistrar, srv ReportServiceServer) {
	s.RegisterService(&ReportService_ServiceDesc, srv)
}

func _ReportService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Report)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.ReportService/create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportServiceServer).Create(ctx, req.(*Report))
	}
	return interceptor(ctx, in, info, handler)
}

func _ReportService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Report)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ReportServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.ReportService/get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ReportServiceServer).Get(ctx, req.(*Report))
	}
	return interceptor(ctx, in, info, handler)
}

// ReportService_ServiceDesc is the grpc.ServiceDesc for ReportService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var ReportService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "services.ReportService",
	HandlerType: (*ReportServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _ReportService_Create_Handler,
		},
		{
			MethodName: "get",
			Handler:    _ReportService_Get_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "report/report.proto",
}
