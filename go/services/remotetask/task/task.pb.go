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
	Consumer             string   `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
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

func (m *ListRequest) GetConsumer() string {
	if m != nil {
		return m.Consumer
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
	Data                 []*RemoteTask `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
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

func (m *FetchResponse) GetData() []*RemoteTask {
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
	// 475 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x54, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0xad, 0x9b, 0xd8, 0x4d, 0x27, 0xe1, 0xc0, 0xaa, 0x2d, 0xab, 0x1c, 0x2a, 0xcb, 0x27, 0x5f,
	0x88, 0xa1, 0x48, 0x88, 0x00, 0xe2, 0xc0, 0x81, 0x13, 0x27, 0xb7, 0x27, 0x6e, 0xee, 0x7a, 0x48,
	0xac, 0xc6, 0xbb, 0x66, 0x77, 0x8c, 0x68, 0x7e, 0x80, 0x1f, 0xe1, 0x6b, 0xf8, 0x28, 0x84, 0x76,
	0x37, 0x6e, 0x9c, 0x10, 0x71, 0x80, 0x8b, 0xb5, 0x6f, 0xe6, 0xcd, 0xfa, 0xcd, 0x9b, 0xd1, 0xc2,
	0xb9, 0xc6, 0x5a, 0x11, 0x52, 0x61, 0xee, 0x32, 0xfb, 0x99, 0x35, 0x5a, 0x91, 0x62, 0x23, 0x83,
	0xfa, 0x6b, 0x25, 0xd0, 0x24, 0x3f, 0x8f, 0x01, 0x72, 0xc7, 0xb9, 0x29, 0xcc, 0x1d, 0x9b, 0xc2,
	0xa8, 0x2a, 0x51, 0x52, 0x45, 0xf7, 0x3c, 0x88, 0x83, 0x74, 0x90, 0x3f, 0x60, 0xc6, 0x60, 0x48,
	0xf7, 0x0d, 0xf2, 0xe3, 0x38, 0x48, 0xc3, 0xdc, 0x9d, 0xd9, 0x05, 0x44, 0x46, 0xb5, 0x5a, 0x20,
	0x1f, 0xc4, 0x41, 0x7a, 0x9a, 0x6f, 0x90, 0xbd, 0x47, 0x28, 0x69, 0xda, 0x1a, 0x35, 0x1f, 0xba,
	0xcc, 0x03, 0xb6, 0xb9, 0x46, 0xab, 0xb2, 0x15, 0xa8, 0x79, 0xe8, 0x73, 0x1d, 0x66, 0x97, 0x00,
	0x42, 0x63, 0x41, 0x78, 0x53, 0xd5, 0xc8, 0x23, 0xa7, 0xa0, 0x17, 0x61, 0x09, 0x4c, 0xba, 0x7b,
	0x1c, 0xe3, 0xc4, 0x31, 0x76, 0x62, 0xf6, 0xfe, 0x12, 0x8b, 0x72, 0x55, 0x49, 0xe4, 0x23, 0xdf,
	0x43, 0x87, 0x6d, 0x0f, 0x65, 0x41, 0x05, 0x3f, 0x75, 0xff, 0x75, 0x67, 0xd7, 0x03, 0x15, 0xd4,
	0x1a, 0x0e, 0xae, 0xb3, 0x0d, 0x62, 0x1c, 0x4e, 0x84, 0xaa, 0x6b, 0x94, 0xc4, 0xc7, 0x8e, 0xde,
	0x41, 0x5b, 0xa1, 0xb1, 0x30, 0x4a, 0xf2, 0x89, 0xef, 0xda, 0xa3, 0xe4, 0x47, 0x00, 0x93, 0x0f,
	0x48, 0x62, 0x99, 0xe3, 0x97, 0x16, 0x8d, 0x23, 0x5a, 0xa7, 0x51, 0x3b, 0x33, 0xad, 0x3d, 0x0e,
	0x1d, 0xb4, 0xf2, 0x0c, 0x42, 0xa1, 0x5a, 0x49, 0xce, 0xc9, 0x30, 0xf7, 0xa0, 0x27, 0x6e, 0x18,
	0x0f, 0x7a, 0xe2, 0x2e, 0x01, 0x24, 0x7e, 0xa3, 0x6b, 0x9f, 0x0b, 0x5d, 0x49, 0x2f, 0xb2, 0x63,
	0x42, 0xb4, 0x6b, 0x42, 0xf2, 0x3d, 0x80, 0xf1, 0xc7, 0xca, 0x50, 0xa7, 0xb2, 0x3f, 0xac, 0x60,
	0x6f, 0x58, 0xff, 0xaf, 0xb4, 0xaf, 0x24, 0xdc, 0x53, 0x32, 0x87, 0x47, 0x1b, 0xbf, 0x4c, 0xa3,
	0xa4, 0x41, 0x96, 0x6e, 0xe6, 0x13, 0xc4, 0x83, 0x74, 0x7c, 0x75, 0x36, 0xeb, 0xf6, 0x74, 0xb6,
	0xdd, 0x51, 0x3f, 0xb5, 0xab, 0x5f, 0x01, 0x3c, 0xde, 0x06, 0xaf, 0x3d, 0x8f, 0xbd, 0x84, 0xc8,
	0x6f, 0x0b, 0x3b, 0x58, 0x3b, 0x3d, 0x18, 0x4d, 0x8e, 0xd8, 0x6b, 0x08, 0x3f, 0x5b, 0x21, 0xec,
	0x62, 0x4b, 0xe8, 0x4f, 0x72, 0xfa, 0xe4, 0x8f, 0xb8, 0x57, 0x9c, 0x1c, 0xb1, 0x37, 0x10, 0x95,
	0xb8, 0x42, 0xc2, 0x7f, 0x29, 0x7e, 0x05, 0xc3, 0x55, 0x65, 0x88, 0x9d, 0x6f, 0x29, 0xbd, 0xd1,
	0xfc, 0xa5, 0xf2, 0xfd, 0xbb, 0x4f, 0x6f, 0x17, 0x15, 0x2d, 0xdb, 0xdb, 0x99, 0x50, 0x75, 0xb6,
	0x5e, 0xaf, 0x97, 0xfa, 0xf9, 0x7c, 0xfe, 0x2c, 0xb3, 0x4b, 0xaa, 0xe4, 0xd3, 0x85, 0x6e, 0x44,
	0xb6, 0x50, 0x59, 0x57, 0x9f, 0xed, 0xbd, 0x04, 0xb7, 0x91, 0x7b, 0x0a, 0x5e, 0xfc, 0x0e, 0x00,
	0x00, 0xff, 0xff, 0x7f, 0x86, 0xf5, 0xcb, 0x23, 0x04, 0x00, 0x00,
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
