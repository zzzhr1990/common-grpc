// Code generated by protoc-gen-go. DO NOT EDIT.
// source: remotetask/task.proto

package task

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	math "math"
)

// Reference imports to suppress errors if they are not otherwise used.
var _ = proto.Marshal
var _ = fmt.Errorf
var _ = math.Inf

// This is a compile-time assertion to ensure that this generated file
// is compatible with the proto package it is being compiled against.
// A compilation error at this line likely means your copy of the
// proto package needs to be updated.
const _ = proto.ProtoPackageIsVersion3 // please upgrade the proto package

type RemoteTask struct {
	Identity             int64    `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Type                 int32    `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Source               string   `protobuf:"bytes,3,opt,name=source,proto3" json:"source,omitempty"`
	Consumer             string   `protobuf:"bytes,4,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Producer             string   `protobuf:"bytes,5,opt,name=producer,proto3" json:"producer,omitempty"`
	CreateTime           int64    `protobuf:"varint,6,opt,name=createTime,proto3" json:"createTime,omitempty"`
	ConsumerTime         int64    `protobuf:"varint,7,opt,name=consumerTime,proto3" json:"consumerTime,omitempty"`
	Deadline             int64    `protobuf:"varint,8,opt,name=deadline,proto3" json:"deadline,omitempty"`
	Data                 string   `protobuf:"bytes,9,opt,name=data,proto3" json:"data,omitempty"`
	Status               int32    `protobuf:"varint,10,opt,name=status,proto3" json:"status,omitempty"`
	Comment              string   `protobuf:"bytes,11,opt,name=comment,proto3" json:"comment,omitempty"`
	Reason               string   `protobuf:"bytes,12,opt,name=reason,proto3" json:"reason,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *RemoteTask) Reset()         { *m = RemoteTask{} }
func (m *RemoteTask) String() string { return proto.CompactTextString(m) }
func (*RemoteTask) ProtoMessage()    {}
func (*RemoteTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_dcc5d1c011e0eea8, []int{0}
}

func (m *RemoteTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_RemoteTask.Unmarshal(m, b)
}
func (m *RemoteTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_RemoteTask.Marshal(b, m, deterministic)
}
func (m *RemoteTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_RemoteTask.Merge(m, src)
}
func (m *RemoteTask) XXX_Size() int {
	return xxx_messageInfo_RemoteTask.Size(m)
}
func (m *RemoteTask) XXX_DiscardUnknown() {
	xxx_messageInfo_RemoteTask.DiscardUnknown(m)
}

var xxx_messageInfo_RemoteTask proto.InternalMessageInfo

func (m *RemoteTask) GetIdentity() int64 {
	if m != nil {
		return m.Identity
	}
	return 0
}

func (m *RemoteTask) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *RemoteTask) GetSource() string {
	if m != nil {
		return m.Source
	}
	return ""
}

func (m *RemoteTask) GetConsumer() string {
	if m != nil {
		return m.Consumer
	}
	return ""
}

func (m *RemoteTask) GetProducer() string {
	if m != nil {
		return m.Producer
	}
	return ""
}

func (m *RemoteTask) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *RemoteTask) GetConsumerTime() int64 {
	if m != nil {
		return m.ConsumerTime
	}
	return 0
}

func (m *RemoteTask) GetDeadline() int64 {
	if m != nil {
		return m.Deadline
	}
	return 0
}

func (m *RemoteTask) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

func (m *RemoteTask) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *RemoteTask) GetComment() string {
	if m != nil {
		return m.Comment
	}
	return ""
}

func (m *RemoteTask) GetReason() string {
	if m != nil {
		return m.Reason
	}
	return ""
}

type FetchRequest struct {
	Server               string   `protobuf:"bytes,1,opt,name=server,proto3" json:"server,omitempty"`
	Type                 int32    `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Count                int32    `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	Status               []int32  `protobuf:"varint,4,rep,packed,name=status,proto3" json:"status,omitempty"`
	NextStatus           int32    `protobuf:"varint,5,opt,name=nextStatus,proto3" json:"nextStatus,omitempty"`
	Deadline             int64    `protobuf:"varint,6,opt,name=deadline,proto3" json:"deadline,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FetchRequest) Reset()         { *m = FetchRequest{} }
func (m *FetchRequest) String() string { return proto.CompactTextString(m) }
func (*FetchRequest) ProtoMessage()    {}
func (*FetchRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dcc5d1c011e0eea8, []int{1}
}

func (m *FetchRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FetchRequest.Unmarshal(m, b)
}
func (m *FetchRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FetchRequest.Marshal(b, m, deterministic)
}
func (m *FetchRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FetchRequest.Merge(m, src)
}
func (m *FetchRequest) XXX_Size() int {
	return xxx_messageInfo_FetchRequest.Size(m)
}
func (m *FetchRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_FetchRequest.DiscardUnknown(m)
}

var xxx_messageInfo_FetchRequest proto.InternalMessageInfo

func (m *FetchRequest) GetServer() string {
	if m != nil {
		return m.Server
	}
	return ""
}

func (m *FetchRequest) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *FetchRequest) GetCount() int32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *FetchRequest) GetStatus() []int32 {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *FetchRequest) GetNextStatus() int32 {
	if m != nil {
		return m.NextStatus
	}
	return 0
}

func (m *FetchRequest) GetDeadline() int64 {
	if m != nil {
		return m.Deadline
	}
	return 0
}

type ListRequest struct {
	Server               string   `protobuf:"bytes,1,opt,name=server,proto3" json:"server,omitempty"`
	Type                 int32    `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Count                int32    `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	Status               []int32  `protobuf:"varint,4,rep,packed,name=status,proto3" json:"status,omitempty"`
	Deadline             int64    `protobuf:"varint,5,opt,name=deadline,proto3" json:"deadline,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListRequest) Reset()         { *m = ListRequest{} }
func (m *ListRequest) String() string { return proto.CompactTextString(m) }
func (*ListRequest) ProtoMessage()    {}
func (*ListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_dcc5d1c011e0eea8, []int{2}
}

func (m *ListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListRequest.Unmarshal(m, b)
}
func (m *ListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListRequest.Marshal(b, m, deterministic)
}
func (m *ListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListRequest.Merge(m, src)
}
func (m *ListRequest) XXX_Size() int {
	return xxx_messageInfo_ListRequest.Size(m)
}
func (m *ListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListRequest proto.InternalMessageInfo

func (m *ListRequest) GetServer() string {
	if m != nil {
		return m.Server
	}
	return ""
}

func (m *ListRequest) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *ListRequest) GetCount() int32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *ListRequest) GetStatus() []int32 {
	if m != nil {
		return m.Status
	}
	return nil
}

func (m *ListRequest) GetDeadline() int64 {
	if m != nil {
		return m.Deadline
	}
	return 0
}

type FetchResponse struct {
	Data                 []*FetchRequest `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}        `json:"-"`
	XXX_unrecognized     []byte          `json:"-"`
	XXX_sizecache        int32           `json:"-"`
}

func (m *FetchResponse) Reset()         { *m = FetchResponse{} }
func (m *FetchResponse) String() string { return proto.CompactTextString(m) }
func (*FetchResponse) ProtoMessage()    {}
func (*FetchResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_dcc5d1c011e0eea8, []int{3}
}

func (m *FetchResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FetchResponse.Unmarshal(m, b)
}
func (m *FetchResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FetchResponse.Marshal(b, m, deterministic)
}
func (m *FetchResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FetchResponse.Merge(m, src)
}
func (m *FetchResponse) XXX_Size() int {
	return xxx_messageInfo_FetchResponse.Size(m)
}
func (m *FetchResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_FetchResponse.DiscardUnknown(m)
}

var xxx_messageInfo_FetchResponse proto.InternalMessageInfo

func (m *FetchResponse) GetData() []*FetchRequest {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*RemoteTask)(nil), "services.RemoteTask")
	proto.RegisterType((*FetchRequest)(nil), "services.FetchRequest")
	proto.RegisterType((*ListRequest)(nil), "services.ListRequest")
	proto.RegisterType((*FetchResponse)(nil), "services.FetchResponse")
}

func init() { proto.RegisterFile("remotetask/task.proto", fileDescriptor_dcc5d1c011e0eea8) }

var fileDescriptor_dcc5d1c011e0eea8 = []byte{
	// 470 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x54, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0xad, 0x9b, 0xd8, 0x4d, 0x27, 0xe1, 0xc0, 0xaa, 0x2d, 0xab, 0x1c, 0x2a, 0xcb, 0xa7, 0x08,
	0x89, 0x18, 0x8a, 0x84, 0x28, 0x45, 0x1c, 0x38, 0x70, 0xe2, 0xe4, 0xf6, 0xc4, 0xcd, 0x5d, 0x0f,
	0x89, 0xd5, 0x78, 0xd7, 0xec, 0x8e, 0x11, 0xcd, 0x95, 0x5f, 0xe1, 0x6b, 0xf8, 0x28, 0x84, 0x76,
	0x37, 0xae, 0x9d, 0x12, 0x38, 0x20, 0xf5, 0x62, 0xf9, 0xcd, 0xbc, 0xd9, 0x7d, 0xf3, 0x66, 0xb4,
	0x70, 0xac, 0xb1, 0x52, 0x84, 0x94, 0x9b, 0x9b, 0xd4, 0x7e, 0xe6, 0xb5, 0x56, 0xa4, 0xd8, 0xc8,
	0xa0, 0xfe, 0x5a, 0x0a, 0x34, 0xc9, 0xcf, 0x7d, 0x80, 0xcc, 0x71, 0xae, 0x72, 0x73, 0xc3, 0xa6,
	0x30, 0x2a, 0x0b, 0x94, 0x54, 0xd2, 0x2d, 0x0f, 0xe2, 0x60, 0x36, 0xc8, 0xee, 0x30, 0x63, 0x30,
	0xa4, 0xdb, 0x1a, 0xf9, 0x7e, 0x1c, 0xcc, 0xc2, 0xcc, 0xfd, 0xb3, 0x13, 0x88, 0x8c, 0x6a, 0xb4,
	0x40, 0x3e, 0x88, 0x83, 0xd9, 0x61, 0xb6, 0x41, 0xf6, 0x1c, 0xa1, 0xa4, 0x69, 0x2a, 0xd4, 0x7c,
	0xe8, 0x32, 0x77, 0xd8, 0xe6, 0x6a, 0xad, 0x8a, 0x46, 0xa0, 0xe6, 0xa1, 0xcf, 0xb5, 0x98, 0x9d,
	0x02, 0x08, 0x8d, 0x39, 0xe1, 0x55, 0x59, 0x21, 0x8f, 0x9c, 0x82, 0x5e, 0x84, 0x25, 0x30, 0x69,
	0xcf, 0x71, 0x8c, 0x03, 0xc7, 0xd8, 0x8a, 0xd9, 0xf3, 0x0b, 0xcc, 0x8b, 0x55, 0x29, 0x91, 0x8f,
	0x7c, 0x0f, 0x2d, 0xb6, 0x3d, 0x14, 0x39, 0xe5, 0xfc, 0xd0, 0xdd, 0xeb, 0xfe, 0x5d, 0x0f, 0x94,
	0x53, 0x63, 0x38, 0xb8, 0xce, 0x36, 0x88, 0x71, 0x38, 0x10, 0xaa, 0xaa, 0x50, 0x12, 0x1f, 0x3b,
	0x7a, 0x0b, 0x6d, 0x85, 0xc6, 0xdc, 0x28, 0xc9, 0x27, 0xbe, 0x6b, 0x8f, 0x92, 0x1f, 0x01, 0x4c,
	0x3e, 0x20, 0x89, 0x65, 0x86, 0x5f, 0x1a, 0x34, 0x8e, 0x68, 0x9d, 0x46, 0xed, 0xcc, 0xb4, 0xf6,
	0x38, 0xb4, 0xd3, 0xca, 0x23, 0x08, 0x85, 0x6a, 0x24, 0x39, 0x27, 0xc3, 0xcc, 0x83, 0x9e, 0xb8,
	0x61, 0x3c, 0xe8, 0x89, 0x3b, 0x05, 0x90, 0xf8, 0x8d, 0x2e, 0x7d, 0x2e, 0x74, 0x25, 0xbd, 0xc8,
	0x96, 0x09, 0xd1, 0xb6, 0x09, 0xc9, 0xf7, 0x00, 0xc6, 0x1f, 0x4b, 0x43, 0x0f, 0xaf, 0xb2, 0xaf,
	0x22, 0xbc, 0xa7, 0xe2, 0x02, 0x1e, 0x6d, 0xbc, 0x32, 0xb5, 0x92, 0x06, 0xd9, 0xd3, 0xcd, 0x6c,
	0x82, 0x78, 0x30, 0x1b, 0x9f, 0x9d, 0xcc, 0xdb, 0x1d, 0x9d, 0xf7, 0x2d, 0xf5, 0x33, 0x3b, 0xfb,
	0x15, 0xc0, 0xe3, 0x6e, 0x6d, 0x2f, 0x3d, 0x93, 0xbd, 0x82, 0xc8, 0xef, 0x0a, 0x3b, 0xea, 0xaa,
	0x3b, 0xda, 0x74, 0x67, 0x34, 0xd9, 0x63, 0x6f, 0x20, 0xfc, 0x6c, 0xef, 0x60, 0x7f, 0xb9, 0x74,
	0xfa, 0xe4, 0x8f, 0xb8, 0xd7, 0x9c, 0xec, 0xb1, 0x0b, 0x88, 0x0a, 0x5c, 0x21, 0xe1, 0xff, 0x14,
	0xbf, 0x86, 0xe1, 0xaa, 0x34, 0xc4, 0x8e, 0x3b, 0x4a, 0x6f, 0x30, 0xff, 0xa8, 0x7c, 0xff, 0xee,
	0xd3, 0xdb, 0x45, 0x49, 0xcb, 0xe6, 0x7a, 0x2e, 0x54, 0x95, 0xae, 0xd7, 0xeb, 0xa5, 0x7e, 0x71,
	0x7e, 0xfe, 0x3c, 0xb5, 0x2b, 0xaa, 0xe4, 0xb3, 0x85, 0xae, 0x45, 0xba, 0x50, 0x69, 0x5b, 0x9f,
	0xde, 0x7b, 0x07, 0xae, 0x23, 0xf7, 0x10, 0xbc, 0xfc, 0x1d, 0x00, 0x00, 0xff, 0xff, 0x35, 0x57,
	0xd2, 0xca, 0x21, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// RemoteTaskServiceClient is the client API for RemoteTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type RemoteTaskServiceClient interface {
	Create(ctx context.Context, in *RemoteTask, opts ...grpc.CallOption) (*RemoteTask, error)
	Fetch(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error)
	Delete(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error)
	List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*FetchResponse, error)
}

type remoteTaskServiceClient struct {
	cc *grpc.ClientConn
}

func NewRemoteTaskServiceClient(cc *grpc.ClientConn) RemoteTaskServiceClient {
	return &remoteTaskServiceClient{cc}
}

func (c *remoteTaskServiceClient) Create(ctx context.Context, in *RemoteTask, opts ...grpc.CallOption) (*RemoteTask, error) {
	out := new(RemoteTask)
	err := c.cc.Invoke(ctx, "/services.RemoteTaskService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *remoteTaskServiceClient) Fetch(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error) {
	out := new(FetchResponse)
	err := c.cc.Invoke(ctx, "/services.RemoteTaskService/fetch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *remoteTaskServiceClient) Delete(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error) {
	out := new(FetchResponse)
	err := c.cc.Invoke(ctx, "/services.RemoteTaskService/delete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *remoteTaskServiceClient) List(ctx context.Context, in *ListRequest, opts ...grpc.CallOption) (*FetchResponse, error) {
	out := new(FetchResponse)
	err := c.cc.Invoke(ctx, "/services.RemoteTaskService/list", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// RemoteTaskServiceServer is the server API for RemoteTaskService service.
type RemoteTaskServiceServer interface {
	Create(context.Context, *RemoteTask) (*RemoteTask, error)
	Fetch(context.Context, *FetchRequest) (*FetchResponse, error)
	Delete(context.Context, *FetchRequest) (*FetchResponse, error)
	List(context.Context, *ListRequest) (*FetchResponse, error)
}

// UnimplementedRemoteTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedRemoteTaskServiceServer struct {
}

func (*UnimplementedRemoteTaskServiceServer) Create(ctx context.Context, req *RemoteTask) (*RemoteTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedRemoteTaskServiceServer) Fetch(ctx context.Context, req *FetchRequest) (*FetchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Fetch not implemented")
}
func (*UnimplementedRemoteTaskServiceServer) Delete(ctx context.Context, req *FetchRequest) (*FetchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Delete not implemented")
}
func (*UnimplementedRemoteTaskServiceServer) List(ctx context.Context, req *ListRequest) (*FetchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}

func RegisterRemoteTaskServiceServer(s *grpc.Server, srv RemoteTaskServiceServer) {
	s.RegisterService(&_RemoteTaskService_serviceDesc, srv)
}

func _RemoteTaskService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(RemoteTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RemoteTaskServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.RemoteTaskService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RemoteTaskServiceServer).Create(ctx, req.(*RemoteTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _RemoteTaskService_Fetch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FetchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RemoteTaskServiceServer).Fetch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.RemoteTaskService/Fetch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RemoteTaskServiceServer).Fetch(ctx, req.(*FetchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RemoteTaskService_Delete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FetchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RemoteTaskServiceServer).Delete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.RemoteTaskService/Delete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RemoteTaskServiceServer).Delete(ctx, req.(*FetchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _RemoteTaskService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(RemoteTaskServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.RemoteTaskService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(RemoteTaskServiceServer).List(ctx, req.(*ListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _RemoteTaskService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.RemoteTaskService",
	HandlerType: (*RemoteTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _RemoteTaskService_Create_Handler,
		},
		{
			MethodName: "fetch",
			Handler:    _RemoteTaskService_Fetch_Handler,
		},
		{
			MethodName: "delete",
			Handler:    _RemoteTaskService_Delete_Handler,
		},
		{
			MethodName: "list",
			Handler:    _RemoteTaskService_List_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "remotetask/task.proto",
}
