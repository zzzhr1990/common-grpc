// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package cloudstore

import (
	context "context"
	common "github.com/zzzhr1990/common-grpc/go/common"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// CloudStoreServiceClient is the client API for CloudStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type CloudStoreServiceClient interface {
	Create(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	Update(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error)
	GetDownloadAddress(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	BatchDownloadAddress(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*CloudStoreList, error)
	CreateWcsUploadToken(ctx context.Context, in *UploadTokenRequest, opts ...grpc.CallOption) (*WcsUploadToken, error)
	OnFileUpload(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
}

type cloudStoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewCloudStoreServiceClient(cc grpc.ClientConnInterface) CloudStoreServiceClient {
	return &cloudStoreServiceClient{cc}
}

func (c *cloudStoreServiceClient) Create(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) Update(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/BatchGet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) GetDownloadAddress(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/GetDownloadAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchDownloadAddress(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/BatchDownloadAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) CreateWcsUploadToken(ctx context.Context, in *UploadTokenRequest, opts ...grpc.CallOption) (*WcsUploadToken, error) {
	out := new(WcsUploadToken)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/CreateWcsUploadToken", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) OnFileUpload(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/OnFileUpload", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CloudStoreServiceServer is the server API for CloudStoreService service.
// All implementations must embed UnimplementedCloudStoreServiceServer
// for forward compatibility
type CloudStoreServiceServer interface {
	Create(context.Context, *CloudStore) (*CloudStore, error)
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(context.Context, *CloudStore) (*CloudStore, error)
	Update(context.Context, *CloudStore) (*CloudStore, error)
	BatchGet(context.Context, *CloudStoreList) (*CloudStoreList, error)
	GetDownloadAddress(context.Context, *CloudStore) (*CloudStore, error)
	BatchDownloadAddress(context.Context, *common.StringListEntity) (*CloudStoreList, error)
	CreateWcsUploadToken(context.Context, *UploadTokenRequest) (*WcsUploadToken, error)
	OnFileUpload(context.Context, *CloudStore) (*CloudStore, error)
	mustEmbedUnimplementedCloudStoreServiceServer()
}

// UnimplementedCloudStoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedCloudStoreServiceServer struct {
}

func (UnimplementedCloudStoreServiceServer) Create(context.Context, *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedCloudStoreServiceServer) Get(context.Context, *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedCloudStoreServiceServer) Update(context.Context, *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedCloudStoreServiceServer) BatchGet(context.Context, *CloudStoreList) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGet not implemented")
}
func (UnimplementedCloudStoreServiceServer) GetDownloadAddress(context.Context, *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDownloadAddress not implemented")
}
func (UnimplementedCloudStoreServiceServer) BatchDownloadAddress(context.Context, *common.StringListEntity) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchDownloadAddress not implemented")
}
func (UnimplementedCloudStoreServiceServer) CreateWcsUploadToken(context.Context, *UploadTokenRequest) (*WcsUploadToken, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateWcsUploadToken not implemented")
}
func (UnimplementedCloudStoreServiceServer) OnFileUpload(context.Context, *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method OnFileUpload not implemented")
}
func (UnimplementedCloudStoreServiceServer) mustEmbedUnimplementedCloudStoreServiceServer() {}

// UnsafeCloudStoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to CloudStoreServiceServer will
// result in compilation errors.
type UnsafeCloudStoreServiceServer interface {
	mustEmbedUnimplementedCloudStoreServiceServer()
}

func RegisterCloudStoreServiceServer(s grpc.ServiceRegistrar, srv CloudStoreServiceServer) {
	s.RegisterService(&CloudStoreService_ServiceDesc, srv)
}

func _CloudStoreService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Create(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Get(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Update(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_BatchGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStoreList)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).BatchGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/BatchGet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).BatchGet(ctx, req.(*CloudStoreList))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_GetDownloadAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).GetDownloadAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/GetDownloadAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).GetDownloadAddress(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_BatchDownloadAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(common.StringListEntity)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).BatchDownloadAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/BatchDownloadAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).BatchDownloadAddress(ctx, req.(*common.StringListEntity))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_CreateWcsUploadToken_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UploadTokenRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).CreateWcsUploadToken(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/CreateWcsUploadToken",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).CreateWcsUploadToken(ctx, req.(*UploadTokenRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_OnFileUpload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).OnFileUpload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/OnFileUpload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).OnFileUpload(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

// CloudStoreService_ServiceDesc is the grpc.ServiceDesc for CloudStoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var CloudStoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "services.CloudStoreService",
	HandlerType: (*CloudStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _CloudStoreService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _CloudStoreService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _CloudStoreService_Update_Handler,
		},
		{
			MethodName: "BatchGet",
			Handler:    _CloudStoreService_BatchGet_Handler,
		},
		{
			MethodName: "GetDownloadAddress",
			Handler:    _CloudStoreService_GetDownloadAddress_Handler,
		},
		{
			MethodName: "BatchDownloadAddress",
			Handler:    _CloudStoreService_BatchDownloadAddress_Handler,
		},
		{
			MethodName: "CreateWcsUploadToken",
			Handler:    _CloudStoreService_CreateWcsUploadToken_Handler,
		},
		{
			MethodName: "OnFileUpload",
			Handler:    _CloudStoreService_OnFileUpload_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "store/cloudstore.proto",
}
