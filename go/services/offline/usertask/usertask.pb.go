// Code generated by protoc-gen-go. DO NOT EDIT.
// source: offline/usertask.proto

package usertask

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

type UserOfflineTask struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	User                 int64    `protobuf:"varint,2,opt,name=user,proto3" json:"user,omitempty"`
	CreateTime           int64    `protobuf:"varint,3,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Type                 int32    `protobuf:"varint,5,opt,name=type,proto3" json:"type,omitempty"`
	Status               int32    `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	Size                 int64    `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	DownloadSize         int64    `protobuf:"varint,8,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	Progress             int32    `protobuf:"varint,9,opt,name=progress,proto3" json:"progress,omitempty"`
	Cip                  string   `protobuf:"bytes,10,opt,name=cip,proto3" json:"cip,omitempty"`
	Data                 string   `protobuf:"bytes,11,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserOfflineTask) Reset()         { *m = UserOfflineTask{} }
func (m *UserOfflineTask) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTask) ProtoMessage()    {}
func (*UserOfflineTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{0}
}

func (m *UserOfflineTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTask.Unmarshal(m, b)
}
func (m *UserOfflineTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTask.Marshal(b, m, deterministic)
}
func (m *UserOfflineTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTask.Merge(m, src)
}
func (m *UserOfflineTask) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTask.Size(m)
}
func (m *UserOfflineTask) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTask.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTask proto.InternalMessageInfo

func (m *UserOfflineTask) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *UserOfflineTask) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *UserOfflineTask) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *UserOfflineTask) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserOfflineTask) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *UserOfflineTask) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *UserOfflineTask) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UserOfflineTask) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

func (m *UserOfflineTask) GetProgress() int32 {
	if m != nil {
		return m.Progress
	}
	return 0
}

func (m *UserOfflineTask) GetCip() string {
	if m != nil {
		return m.Cip
	}
	return ""
}

func (m *UserOfflineTask) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

type UserOfflineListener struct {
	Identity             int64    `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Hash                 string   `protobuf:"bytes,2,opt,name=hash,proto3" json:"hash,omitempty"`
	User                 int64    `protobuf:"varint,3,opt,name=user,proto3" json:"user,omitempty"`
	CreateTime           int64    `protobuf:"varint,4,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Type                 int32    `protobuf:"varint,5,opt,name=type,proto3" json:"type,omitempty"`
	Status               int32    `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	Path                 string   `protobuf:"bytes,7,opt,name=path,proto3" json:"path,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserOfflineListener) Reset()         { *m = UserOfflineListener{} }
func (m *UserOfflineListener) String() string { return proto.CompactTextString(m) }
func (*UserOfflineListener) ProtoMessage()    {}
func (*UserOfflineListener) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{1}
}

func (m *UserOfflineListener) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineListener.Unmarshal(m, b)
}
func (m *UserOfflineListener) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineListener.Marshal(b, m, deterministic)
}
func (m *UserOfflineListener) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineListener.Merge(m, src)
}
func (m *UserOfflineListener) XXX_Size() int {
	return xxx_messageInfo_UserOfflineListener.Size(m)
}
func (m *UserOfflineListener) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineListener.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineListener proto.InternalMessageInfo

func (m *UserOfflineListener) GetIdentity() int64 {
	if m != nil {
		return m.Identity
	}
	return 0
}

func (m *UserOfflineListener) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *UserOfflineListener) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *UserOfflineListener) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *UserOfflineListener) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *UserOfflineListener) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *UserOfflineListener) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func init() {
	proto.RegisterType((*UserOfflineTask)(nil), "services.UserOfflineTask")
	proto.RegisterType((*UserOfflineListener)(nil), "services.UserOfflineListener")
}

func init() { proto.RegisterFile("offline/usertask.proto", fileDescriptor_62462ed77fca2601) }

var fileDescriptor_62462ed77fca2601 = []byte{
	// 371 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x52, 0x4d, 0x6f, 0xe2, 0x30,
	0x10, 0xdd, 0x10, 0xc8, 0x82, 0x77, 0xa5, 0x56, 0xae, 0x84, 0x5c, 0x0e, 0x15, 0xca, 0x89, 0x4b,
	0x93, 0x7e, 0x9c, 0x38, 0xa0, 0x56, 0x3d, 0x57, 0xaa, 0x14, 0xe8, 0xa5, 0x37, 0x93, 0x0c, 0x89,
	0x05, 0x89, 0x23, 0xdb, 0xb4, 0x22, 0x7f, 0xa3, 0xa7, 0xfe, 0x94, 0xfe, 0xbb, 0x6a, 0x1c, 0x40,
	0x14, 0xc1, 0xa1, 0xbd, 0xbd, 0x79, 0xe3, 0x79, 0x33, 0x7e, 0x33, 0xa4, 0x2b, 0x67, 0xb3, 0x85,
	0x28, 0x20, 0x5c, 0x6a, 0x50, 0x86, 0xeb, 0x79, 0x50, 0x2a, 0x69, 0x24, 0x6d, 0x6b, 0x50, 0xaf,
	0x22, 0x06, 0xed, 0xbf, 0x37, 0xc8, 0xc9, 0xb3, 0x06, 0xf5, 0x54, 0x3f, 0x9c, 0x70, 0x3d, 0xa7,
	0x94, 0x34, 0x33, 0xae, 0x33, 0xe6, 0xf4, 0x9d, 0x41, 0x27, 0xb2, 0x18, 0x39, 0xd4, 0x60, 0x8d,
	0xbe, 0x33, 0x70, 0x23, 0x8b, 0xe9, 0x05, 0x21, 0xb1, 0x02, 0x6e, 0x60, 0x22, 0x72, 0x60, 0xae,
	0xcd, 0xec, 0x30, 0x58, 0x53, 0xf0, 0x1c, 0x58, 0xb3, 0xd6, 0x41, 0x8c, 0x9c, 0x59, 0x95, 0xc0,
	0x5a, 0x7d, 0x67, 0xd0, 0x8a, 0x2c, 0xa6, 0x5d, 0xe2, 0x69, 0xc3, 0xcd, 0x52, 0x33, 0xcf, 0xb2,
	0xeb, 0x08, 0xdf, 0x6a, 0x51, 0x01, 0xfb, 0x5b, 0xf7, 0x44, 0x4c, 0x7d, 0xf2, 0x3f, 0x91, 0x6f,
	0xc5, 0x42, 0xf2, 0x64, 0x8c, 0xb9, 0xb6, 0xcd, 0x7d, 0xe3, 0x68, 0x8f, 0xb4, 0x4b, 0x25, 0x53,
	0x05, 0x5a, 0xb3, 0x8e, 0x55, 0xdc, 0xc6, 0xf4, 0x94, 0xb8, 0xb1, 0x28, 0x19, 0xb1, 0x23, 0x21,
	0xc4, 0x2e, 0x09, 0x37, 0x9c, 0xfd, 0xab, 0xa7, 0x44, 0xec, 0x7f, 0x3a, 0xe4, 0x6c, 0xc7, 0x95,
	0x47, 0xa1, 0x0d, 0x14, 0xa0, 0x50, 0x59, 0x24, 0x50, 0x18, 0x61, 0x56, 0xd6, 0x1d, 0x37, 0xda,
	0xc6, 0x5b, 0xd7, 0x1a, 0x07, 0x5c, 0x73, 0x8f, 0xba, 0xd6, 0x3c, 0xe4, 0xda, 0x4f, 0x1c, 0x2a,
	0xb9, 0xc9, 0xac, 0x43, 0x9d, 0xc8, 0xe2, 0x9b, 0x0f, 0x87, 0x74, 0xd7, 0x73, 0xe3, 0x17, 0x70,
	0xa3, 0xe3, 0x7a, 0xdb, 0xf4, 0x9e, 0x78, 0x75, 0x23, 0x7a, 0x1e, 0x6c, 0x2e, 0x20, 0xd8, 0xdb,
	0x7e, 0xef, 0x78, 0xca, 0xff, 0x43, 0x47, 0xc4, 0x4d, 0xc1, 0xfc, 0xb6, 0xfc, 0xe1, 0xee, 0x65,
	0x94, 0x0a, 0x93, 0x2d, 0xa7, 0x41, 0x2c, 0xf3, 0xb0, 0xaa, 0xaa, 0x4c, 0x5d, 0x0f, 0x87, 0x57,
	0x61, 0x2c, 0xf3, 0x5c, 0x16, 0x97, 0xa9, 0x2a, 0xe3, 0x30, 0x95, 0xe1, 0x46, 0x21, 0xdc, 0x3f,
	0xdf, 0xa9, 0x67, 0xef, 0xf7, 0xf6, 0x2b, 0x00, 0x00, 0xff, 0xff, 0x8f, 0xa7, 0xe8, 0x23, 0xd9,
	0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// OfflineUserTaskServiceClient is the client API for OfflineUserTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OfflineUserTaskServiceClient interface {
	Create(ctx context.Context, in *UserOfflineTask, opts ...grpc.CallOption) (*UserOfflineTask, error)
	//rpc tryCreate (OfflineDownload) returns (OfflineDownload) {}
	//rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(ctx context.Context, in *UserOfflineTask, opts ...grpc.CallOption) (*UserOfflineTask, error)
}

type offlineUserTaskServiceClient struct {
	cc *grpc.ClientConn
}

func NewOfflineUserTaskServiceClient(cc *grpc.ClientConn) OfflineUserTaskServiceClient {
	return &offlineUserTaskServiceClient{cc}
}

func (c *offlineUserTaskServiceClient) Create(ctx context.Context, in *UserOfflineTask, opts ...grpc.CallOption) (*UserOfflineTask, error) {
	out := new(UserOfflineTask)
	err := c.cc.Invoke(ctx, "/services.OfflineUserTaskService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *offlineUserTaskServiceClient) Get(ctx context.Context, in *UserOfflineTask, opts ...grpc.CallOption) (*UserOfflineTask, error) {
	out := new(UserOfflineTask)
	err := c.cc.Invoke(ctx, "/services.OfflineUserTaskService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OfflineUserTaskServiceServer is the server API for OfflineUserTaskService service.
type OfflineUserTaskServiceServer interface {
	Create(context.Context, *UserOfflineTask) (*UserOfflineTask, error)
	//rpc tryCreate (OfflineDownload) returns (OfflineDownload) {}
	//rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(context.Context, *UserOfflineTask) (*UserOfflineTask, error)
}

// UnimplementedOfflineUserTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedOfflineUserTaskServiceServer struct {
}

func (*UnimplementedOfflineUserTaskServiceServer) Create(ctx context.Context, req *UserOfflineTask) (*UserOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedOfflineUserTaskServiceServer) Get(ctx context.Context, req *UserOfflineTask) (*UserOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}

func RegisterOfflineUserTaskServiceServer(s *grpc.Server, srv OfflineUserTaskServiceServer) {
	s.RegisterService(&_OfflineUserTaskService_serviceDesc, srv)
}

func _OfflineUserTaskService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineUserTaskServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.OfflineUserTaskService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineUserTaskServiceServer).Create(ctx, req.(*UserOfflineTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _OfflineUserTaskService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineUserTaskServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.OfflineUserTaskService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineUserTaskServiceServer).Get(ctx, req.(*UserOfflineTask))
	}
	return interceptor(ctx, in, info, handler)
}

var _OfflineUserTaskService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.OfflineUserTaskService",
	HandlerType: (*OfflineUserTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _OfflineUserTaskService_Create_Handler,
		},
		{
			MethodName: "get",
			Handler:    _OfflineUserTaskService_Get_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/usertask.proto",
}