// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

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
	// rpc create (UserOfflineTask) returns (UserOfflineTask) {}
	Add(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskList, error)
	// rpc parse (UserTask) returns (UserTask) {}
	//rpc page (PageUserOfflineTaskRequest) returns (UserOfflineTaskPage) {}
	List(ctx context.Context, in *ListUserTaskRequest, opts ...grpc.CallOption) (*UserTaskList, error)
	Delete(ctx context.Context, in *DeleteUserTaskRequest, opts ...grpc.CallOption) (*common.Int64Entity, error)
	Get(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error)
	CompleteOrError(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error)
	// rpc error(UserTask) returns (UserTask) {}
	Update(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error)
	// rpc syncTask (TaskListener) returns (Int64Entity) {}
	GetListeners(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*TaskListenerList, error)
	UpdateListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*TaskListener, error)
	DeleteCompleteListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error)
	DeleteFakeCopyListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error)
	DeleteAllListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error)
	// rpc fakeCopy(TaskListener)returns (TaskListener) {}
	Clear(ctx context.Context, in *ClearTaskRequest, opts ...grpc.CallOption) (*common.Int64Entity, error)
	UpdateLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error)
	GetLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error)
	DeleteLog(ctx context.Context, in *DeleteTaskLogRequest, opts ...grpc.CallOption) (*common.Int64Entity, error)
	ClearLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error)
	ListLog(ctx context.Context, in *ListTaskLogRequest, opts ...grpc.CallOption) (*TaskLogList, error)
	ClearOutdatedLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*common.Int64Entity, error)
	GetQuota(ctx context.Context, in *QuotaRequest, opts ...grpc.CallOption) (*QuotaResponse, error)
}

type userTaskServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewUserTaskServiceClient(cc grpc.ClientConnInterface) UserTaskServiceClient {
	return &userTaskServiceClient{cc}
}

func (c *userTaskServiceClient) Add(ctx context.Context, in *AddUserTaskRequest, opts ...grpc.CallOption) (*UserTaskList, error) {
	out := new(UserTaskList)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/add", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) List(ctx context.Context, in *ListUserTaskRequest, opts ...grpc.CallOption) (*UserTaskList, error) {
	out := new(UserTaskList)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/list", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Delete(ctx context.Context, in *DeleteUserTaskRequest, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Get(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error) {
	out := new(UserTask)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) CompleteOrError(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error) {
	out := new(UserTask)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/completeOrError", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Update(ctx context.Context, in *UserTask, opts ...grpc.CallOption) (*UserTask, error) {
	out := new(UserTask)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) GetListeners(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*TaskListenerList, error) {
	out := new(TaskListenerList)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/getListeners", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) UpdateListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*TaskListener, error) {
	out := new(TaskListener)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/updateListener", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) DeleteCompleteListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/deleteCompleteListener", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) DeleteFakeCopyListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/deleteFakeCopyListener", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) DeleteAllListener(ctx context.Context, in *TaskListener, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/deleteAllListener", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) Clear(ctx context.Context, in *ClearTaskRequest, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/clear", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) UpdateLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error) {
	out := new(TaskLog)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/updateLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) GetLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error) {
	out := new(TaskLog)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/getLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) DeleteLog(ctx context.Context, in *DeleteTaskLogRequest, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/deleteLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) ClearLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*TaskLog, error) {
	out := new(TaskLog)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/clearLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) ListLog(ctx context.Context, in *ListTaskLogRequest, opts ...grpc.CallOption) (*TaskLogList, error) {
	out := new(TaskLogList)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/listLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) ClearOutdatedLog(ctx context.Context, in *TaskLog, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/clearOutdatedLog", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userTaskServiceClient) GetQuota(ctx context.Context, in *QuotaRequest, opts ...grpc.CallOption) (*QuotaResponse, error) {
	out := new(QuotaResponse)
	err := c.cc.Invoke(ctx, "/services.UserTaskService/getQuota", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserTaskServiceServer is the server API for UserTaskService service.
// All implementations must embed UnimplementedUserTaskServiceServer
// for forward compatibility
type UserTaskServiceServer interface {
	// rpc create (UserOfflineTask) returns (UserOfflineTask) {}
	Add(context.Context, *AddUserTaskRequest) (*UserTaskList, error)
	// rpc parse (UserTask) returns (UserTask) {}
	//rpc page (PageUserOfflineTaskRequest) returns (UserOfflineTaskPage) {}
	List(context.Context, *ListUserTaskRequest) (*UserTaskList, error)
	Delete(context.Context, *DeleteUserTaskRequest) (*common.Int64Entity, error)
	Get(context.Context, *UserTask) (*UserTask, error)
	CompleteOrError(context.Context, *UserTask) (*UserTask, error)
	// rpc error(UserTask) returns (UserTask) {}
	Update(context.Context, *UserTask) (*UserTask, error)
	// rpc syncTask (TaskListener) returns (Int64Entity) {}
	GetListeners(context.Context, *TaskListener) (*TaskListenerList, error)
	UpdateListener(context.Context, *TaskListener) (*TaskListener, error)
	DeleteCompleteListener(context.Context, *TaskListener) (*common.Int64Entity, error)
	DeleteFakeCopyListener(context.Context, *TaskListener) (*common.Int64Entity, error)
	DeleteAllListener(context.Context, *TaskListener) (*common.Int64Entity, error)
	// rpc fakeCopy(TaskListener)returns (TaskListener) {}
	Clear(context.Context, *ClearTaskRequest) (*common.Int64Entity, error)
	UpdateLog(context.Context, *TaskLog) (*TaskLog, error)
	GetLog(context.Context, *TaskLog) (*TaskLog, error)
	DeleteLog(context.Context, *DeleteTaskLogRequest) (*common.Int64Entity, error)
	ClearLog(context.Context, *TaskLog) (*TaskLog, error)
	ListLog(context.Context, *ListTaskLogRequest) (*TaskLogList, error)
	ClearOutdatedLog(context.Context, *TaskLog) (*common.Int64Entity, error)
	GetQuota(context.Context, *QuotaRequest) (*QuotaResponse, error)
	mustEmbedUnimplementedUserTaskServiceServer()
}

// UnimplementedUserTaskServiceServer must be embedded to have forward compatible implementations.
type UnimplementedUserTaskServiceServer struct {
}

func (UnimplementedUserTaskServiceServer) Add(context.Context, *AddUserTaskRequest) (*UserTaskList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Add not implemented")
}
func (UnimplementedUserTaskServiceServer) List(context.Context, *ListUserTaskRequest) (*UserTaskList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedUserTaskServiceServer) Delete(context.Context, *DeleteUserTaskRequest) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedUserTaskServiceServer) Get(context.Context, *UserTask) (*UserTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedUserTaskServiceServer) CompleteOrError(context.Context, *UserTask) (*UserTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CompleteOrError not implemented")
}
func (UnimplementedUserTaskServiceServer) Update(context.Context, *UserTask) (*UserTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedUserTaskServiceServer) GetListeners(context.Context, *TaskListener) (*TaskListenerList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetListeners not implemented")
}
func (UnimplementedUserTaskServiceServer) UpdateListener(context.Context, *TaskListener) (*TaskListener, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateListener not implemented")
}
func (UnimplementedUserTaskServiceServer) DeleteCompleteListener(context.Context, *TaskListener) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteCompleteListener not implemented")
}
func (UnimplementedUserTaskServiceServer) DeleteFakeCopyListener(context.Context, *TaskListener) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteFakeCopyListener not implemented")
}
func (UnimplementedUserTaskServiceServer) DeleteAllListener(context.Context, *TaskListener) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteAllListener not implemented")
}
func (UnimplementedUserTaskServiceServer) Clear(context.Context, *ClearTaskRequest) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Clear not implemented")
}
func (UnimplementedUserTaskServiceServer) UpdateLog(context.Context, *TaskLog) (*TaskLog, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateLog not implemented")
}
func (UnimplementedUserTaskServiceServer) GetLog(context.Context, *TaskLog) (*TaskLog, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetLog not implemented")
}
func (UnimplementedUserTaskServiceServer) DeleteLog(context.Context, *DeleteTaskLogRequest) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteLog not implemented")
}
func (UnimplementedUserTaskServiceServer) ClearLog(context.Context, *TaskLog) (*TaskLog, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ClearLog not implemented")
}
func (UnimplementedUserTaskServiceServer) ListLog(context.Context, *ListTaskLogRequest) (*TaskLogList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListLog not implemented")
}
func (UnimplementedUserTaskServiceServer) ClearOutdatedLog(context.Context, *TaskLog) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ClearOutdatedLog not implemented")
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
		FullMethod: "/services.UserTaskService/add",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Add(ctx, req.(*AddUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/list",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).List(ctx, req.(*ListUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteUserTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Delete(ctx, req.(*DeleteUserTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Get(ctx, req.(*UserTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_CompleteOrError_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).CompleteOrError(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/completeOrError",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).CompleteOrError(ctx, req.(*UserTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Update(ctx, req.(*UserTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_GetListeners_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskListener)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).GetListeners(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/getListeners",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).GetListeners(ctx, req.(*TaskListener))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_UpdateListener_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskListener)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).UpdateListener(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/updateListener",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).UpdateListener(ctx, req.(*TaskListener))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_DeleteCompleteListener_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskListener)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).DeleteCompleteListener(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/deleteCompleteListener",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).DeleteCompleteListener(ctx, req.(*TaskListener))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_DeleteFakeCopyListener_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskListener)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).DeleteFakeCopyListener(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/deleteFakeCopyListener",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).DeleteFakeCopyListener(ctx, req.(*TaskListener))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_DeleteAllListener_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskListener)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).DeleteAllListener(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/deleteAllListener",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).DeleteAllListener(ctx, req.(*TaskListener))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_Clear_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ClearTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).Clear(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/clear",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).Clear(ctx, req.(*ClearTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_UpdateLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).UpdateLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/updateLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).UpdateLog(ctx, req.(*TaskLog))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_GetLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).GetLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/getLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).GetLog(ctx, req.(*TaskLog))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_DeleteLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteTaskLogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).DeleteLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/deleteLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).DeleteLog(ctx, req.(*DeleteTaskLogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_ClearLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).ClearLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/clearLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).ClearLog(ctx, req.(*TaskLog))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_ListLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListTaskLogRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).ListLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/listLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).ListLog(ctx, req.(*ListTaskLogRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserTaskService_ClearOutdatedLog_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TaskLog)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserTaskServiceServer).ClearOutdatedLog(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserTaskService/clearOutdatedLog",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserTaskServiceServer).ClearOutdatedLog(ctx, req.(*TaskLog))
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
		FullMethod: "/services.UserTaskService/getQuota",
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
	ServiceName: "services.UserTaskService",
	HandlerType: (*UserTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "add",
			Handler:    _UserTaskService_Add_Handler,
		},
		{
			MethodName: "list",
			Handler:    _UserTaskService_List_Handler,
		},
		{
			MethodName: "delete",
			Handler:    _UserTaskService_Delete_Handler,
		},
		{
			MethodName: "get",
			Handler:    _UserTaskService_Get_Handler,
		},
		{
			MethodName: "completeOrError",
			Handler:    _UserTaskService_CompleteOrError_Handler,
		},
		{
			MethodName: "update",
			Handler:    _UserTaskService_Update_Handler,
		},
		{
			MethodName: "getListeners",
			Handler:    _UserTaskService_GetListeners_Handler,
		},
		{
			MethodName: "updateListener",
			Handler:    _UserTaskService_UpdateListener_Handler,
		},
		{
			MethodName: "deleteCompleteListener",
			Handler:    _UserTaskService_DeleteCompleteListener_Handler,
		},
		{
			MethodName: "deleteFakeCopyListener",
			Handler:    _UserTaskService_DeleteFakeCopyListener_Handler,
		},
		{
			MethodName: "deleteAllListener",
			Handler:    _UserTaskService_DeleteAllListener_Handler,
		},
		{
			MethodName: "clear",
			Handler:    _UserTaskService_Clear_Handler,
		},
		{
			MethodName: "updateLog",
			Handler:    _UserTaskService_UpdateLog_Handler,
		},
		{
			MethodName: "getLog",
			Handler:    _UserTaskService_GetLog_Handler,
		},
		{
			MethodName: "deleteLog",
			Handler:    _UserTaskService_DeleteLog_Handler,
		},
		{
			MethodName: "clearLog",
			Handler:    _UserTaskService_ClearLog_Handler,
		},
		{
			MethodName: "listLog",
			Handler:    _UserTaskService_ListLog_Handler,
		},
		{
			MethodName: "clearOutdatedLog",
			Handler:    _UserTaskService_ClearOutdatedLog_Handler,
		},
		{
			MethodName: "getQuota",
			Handler:    _UserTaskService_GetQuota_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/usertask.proto",
}
