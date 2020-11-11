// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package tickets

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// TicketsServiceClient is the client API for TicketsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type TicketsServiceClient interface {
	Create(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	List(ctx context.Context, in *TicketListRequest, opts ...grpc.CallOption) (*TicketListResponse, error)
	ListReply(ctx context.Context, in *ReplyListRequest, opts ...grpc.CallOption) (*ReplyListResponse, error)
	Get(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	GetReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error)
	ReplyTicket(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error)
	Close(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	Delete(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	DeleteReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error)
}

type ticketsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTicketsServiceClient(cc grpc.ClientConnInterface) TicketsServiceClient {
	return &ticketsServiceClient{cc}
}

func (c *ticketsServiceClient) Create(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) List(ctx context.Context, in *TicketListRequest, opts ...grpc.CallOption) (*TicketListResponse, error) {
	out := new(TicketListResponse)
	err := c.cc.Invoke(ctx, "/services.TicketsService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) ListReply(ctx context.Context, in *ReplyListRequest, opts ...grpc.CallOption) (*ReplyListResponse, error) {
	out := new(ReplyListResponse)
	err := c.cc.Invoke(ctx, "/services.TicketsService/ListReply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) Get(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) GetReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error) {
	out := new(Reply)
	err := c.cc.Invoke(ctx, "/services.TicketsService/GetReply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) ReplyTicket(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error) {
	out := new(Reply)
	err := c.cc.Invoke(ctx, "/services.TicketsService/ReplyTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) Close(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Close", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) Delete(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) DeleteReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error) {
	out := new(Reply)
	err := c.cc.Invoke(ctx, "/services.TicketsService/DeleteReply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TicketsServiceServer is the server API for TicketsService service.
// All implementations must embed UnimplementedTicketsServiceServer
// for forward compatibility
type TicketsServiceServer interface {
	Create(context.Context, *Ticket) (*Ticket, error)
	List(context.Context, *TicketListRequest) (*TicketListResponse, error)
	ListReply(context.Context, *ReplyListRequest) (*ReplyListResponse, error)
	Get(context.Context, *Ticket) (*Ticket, error)
	GetReply(context.Context, *Reply) (*Reply, error)
	ReplyTicket(context.Context, *Reply) (*Reply, error)
	Close(context.Context, *Ticket) (*Ticket, error)
	Delete(context.Context, *Ticket) (*Ticket, error)
	DeleteReply(context.Context, *Reply) (*Reply, error)
	mustEmbedUnimplementedTicketsServiceServer()
}

// UnimplementedTicketsServiceServer must be embedded to have forward compatible implementations.
type UnimplementedTicketsServiceServer struct {
}

func (UnimplementedTicketsServiceServer) Create(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedTicketsServiceServer) List(context.Context, *TicketListRequest) (*TicketListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (UnimplementedTicketsServiceServer) ListReply(context.Context, *ReplyListRequest) (*ReplyListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListReply not implemented")
}
func (UnimplementedTicketsServiceServer) Get(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedTicketsServiceServer) GetReply(context.Context, *Reply) (*Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetReply not implemented")
}
func (UnimplementedTicketsServiceServer) ReplyTicket(context.Context, *Reply) (*Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReplyTicket not implemented")
}
func (UnimplementedTicketsServiceServer) Close(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Close not implemented")
}
func (UnimplementedTicketsServiceServer) Delete(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (UnimplementedTicketsServiceServer) DeleteReply(context.Context, *Reply) (*Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method DeleteReply not implemented")
}
func (UnimplementedTicketsServiceServer) mustEmbedUnimplementedTicketsServiceServer() {}

// UnsafeTicketsServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to TicketsServiceServer will
// result in compilation errors.
type UnsafeTicketsServiceServer interface {
	mustEmbedUnimplementedTicketsServiceServer()
}

func RegisterTicketsServiceServer(s grpc.ServiceRegistrar, srv TicketsServiceServer) {
	s.RegisterService(&_TicketsService_serviceDesc, srv)
}

func _TicketsService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Create(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TicketListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).List(ctx, req.(*TicketListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_ListReply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReplyListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).ListReply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/ListReply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).ListReply(ctx, req.(*ReplyListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Get(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_GetReply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Reply)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).GetReply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/GetReply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).GetReply(ctx, req.(*Reply))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_ReplyTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Reply)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).ReplyTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/ReplyTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).ReplyTicket(ctx, req.(*Reply))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_Close_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Close(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Close",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Close(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Delete(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_DeleteReply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Reply)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).DeleteReply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/DeleteReply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).DeleteReply(ctx, req.(*Reply))
	}
	return interceptor(ctx, in, info, handler)
}

var _TicketsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.TicketsService",
	HandlerType: (*TicketsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _TicketsService_Create_Handler,
		},
		{
			MethodName: "List",
			Handler:    _TicketsService_List_Handler,
		},
		{
			MethodName: "ListReply",
			Handler:    _TicketsService_ListReply_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _TicketsService_Get_Handler,
		},
		{
			MethodName: "GetReply",
			Handler:    _TicketsService_GetReply_Handler,
		},
		{
			MethodName: "ReplyTicket",
			Handler:    _TicketsService_ReplyTicket_Handler,
		},
		{
			MethodName: "Close",
			Handler:    _TicketsService_Close_Handler,
		},
		{
			MethodName: "Delete",
			Handler:    _TicketsService_Delete_Handler,
		},
		{
			MethodName: "DeleteReply",
			Handler:    _TicketsService_DeleteReply_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "tickets/tickets.proto",
}