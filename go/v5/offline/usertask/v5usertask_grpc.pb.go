// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.5
// source: offline/v5usertask.proto

package usertask

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

// UserTaskServiceClient is the client API for UserTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type UserTaskServiceClient interface {
	Add(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error)
	AddThirdParty(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error)
	List(ctx context.Context, in *UserTaskListRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error)
	Page(ctx context.Context, in *UserTaskPageRequest, opts ...grpc.CallOption) (*UserTaskPageResponse, error)
	Delete(ctx context.Context, in *BatchUserTaskRequest, opts ...grpc.CallOption) (*common.BatchTaskResult, error)
	// rpc BatchDelete (BatchUserTaskRequest) returns (.services.BatchTaskResult) {}
	GetQuota(ctx context.Context, in *QuotaRequest, opts ...grpc.CallOption) (*QuotaResponse, error)
}

type userTaskServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserTaskServiceClient(cc grpc.ClientConnInterface) UserTaskServiceClient {
	return &userTaskServiceClient{cc}
}

func (c *userTaskServiceClient) Add(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error) {
	out := new(UserTaskListResponse)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/Add", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) AddThirdParty(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error) {
	out := new(UserTaskListResponse)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/AddThirdParty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) List(ctx context.Context, in *UserTaskListRequest, opts ...grpc.CallOption) (*UserTaskListResponse, error) {
	out := new(UserTaskListResponse)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Page(ctx context.Context, in *UserTaskPageRequest, opts ...grpc.CallOption) (*UserTaskPageResponse, error) {
	out := new(UserTaskPageResponse)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/Page", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Delete(ctx context.Context, in *BatchUserTaskRequest, opts ...grpc.CallOption) (*common.BatchTaskResult, error) {
	out := new(common.BatchTaskResult)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) GetQuota(ctx context.Context, in *QuotaRequest, opts ...grpc.CallOption) (*QuotaResponse, error) {
	out := new(QuotaResponse)
	err := c.cc.Invoke(ctx, "/v5.services.UserTaskService/GetQuota", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserTaskServiceServer is the server API for UserTaskService service.
// All implementations must embed UnimplementedUserTaskServiceServer
// for forward compatibility
type UserTaskServiceServer interface {
	Add(context.Context, *AddUserTaskRequest) (*UserTaskListResponse, error)
	AddThirdParty(context.Context, *AddUserTaskRequest) (*UserTaskListResponse, error)
	List(context.Context, *UserTaskListRequest) (*UserTaskListResponse, error)
	Page(context.Context, *UserTaskPageRequest) (*UserTaskPageResponse, error)
	Delete(context.Context, *BatchUserTaskRequest) (*common.BatchTaskResult, error)
	// rpc BatchDelete (BatchUserTaskRequest) returns (.services.BatchTaskResult) {}
	GetQuota(context.Context, *QuotaRequest) (*QuotaResponse, error)
	mustEmbedUnimplementedUserTaskServiceServer()
}

// UnimplementedUserTaskServiceServer must be embedded to have forward compatible implementations.
type UnimplementedUserTaskServiceServer struct {
}

func (UnimplementedUserTaskServiceServer) Add(context.Context, *AddUserTaskRequest) (*UserTaskListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Add not implemented")
}
func (UnimplementedUserTaskServiceServer) AddThirdParty(context.Context, *AddUserTaskRequest) (*UserTaskListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AddThirdParty not implemented")
}
func (UnimplementedUserTaskServiceServer) List(context.Context, *UserTaskListRequest) (*UserTaskListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedUserTaskServiceServer) Page(context.Context, *UserTaskPageRequest) (*UserTaskPageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Page not implemented")
}
func (UnimplementedUserTaskServiceServer) Delete(context.Context, *BatchUserTaskRequest) (*common.BatchTaskResult, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedUserTaskServiceServer) GetQuota(context.Context, *QuotaRequest) (*QuotaResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQuota not implemented")
}
func (UnimplementedUserTaskServiceServer) mustEmbedUnimplementedUserTaskServiceServer() {}

// UnsafeUserTaskServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to UserTaskServiceServer will
// result in compilation errors.
type UnsafeUserTaskServiceServer interface {
	mustEmbedUnimplementedUserTaskServiceServer()
}

func RegisterUserTaskServiceServer(s grpc.ServiceRegistrar, srv UserTaskServiceServer) {
	s.RegisterService(&UserTaskService_ServiceDesc, srv)
}

func _UserTaskService_Add_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddUserTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Add(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/Add",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Add(ctx, req.(*AddUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_AddThirdParty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddUserTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).AddThirdParty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/AddThirdParty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).AddThirdParty(ctx, req.(*AddUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserTaskListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).List(ctx, req.(*UserTaskListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Page_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserTaskPageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Page(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/Page",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Page(ctx, req.(*UserTaskPageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BatchUserTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Delete(ctx, req.(*BatchUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_GetQuota_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuotaRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).GetQuota(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.UserTaskService/GetQuota",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).GetQuota(ctx, req.(*QuotaRequest))
	}
	return interceptor(ctx, in, info, handler)
}

// UserTaskService_ServiceDesc is the grpc.ServiceDesc for UserTaskService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var UserTaskService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v5.services.UserTaskService",
	HandlerType: (*UserTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Add",
			Handler:    _UserTaskService_Add_Handler,
		},
		{
			MethodName: "AddThirdParty",
			Handler:    _UserTaskService_AddThirdParty_Handler,
		},
		{
			MethodName: "List",
			Handler:    _UserTaskService_List_Handler,
		},
		{
			MethodName: "Page",
			Handler:    _UserTaskService_Page_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _UserTaskService_Delete_Handler,
		},
		{
			MethodName: "GetQuota",
			Handler:    _UserTaskService_GetQuota_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/v5usertask.proto",
}
