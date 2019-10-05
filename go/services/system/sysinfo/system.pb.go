// Code generated by protoc-gen-go. DO NOT EDIT.
// source: system/system.proto

package sysinfo

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

type SystemInfo struct {
	RequestTime          int64    `protobuf:"varint,1,opt,name=requestTime,proto3" json:"requestTime,omitempty"`
	RequestUser          string   `protobuf:"bytes,2,opt,name=requestUser,proto3" json:"requestUser,omitempty"`
	ServerName           string   `protobuf:"bytes,3,opt,name=serverName,proto3" json:"serverName,omitempty"`
	ServerTime           int64    `protobuf:"varint,4,opt,name=serverTime,proto3" json:"serverTime,omitempty"`
	AccessCount          int64    `protobuf:"varint,5,opt,name=accessCount,proto3" json:"accessCount,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SystemInfo) Reset()         { *m = SystemInfo{} }
func (m *SystemInfo) String() string { return proto.CompactTextString(m) }
func (*SystemInfo) ProtoMessage()    {}
func (*SystemInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_746080b643370b3b, []int{0}
}

func (m *SystemInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemInfo.Unmarshal(m, b)
}
func (m *SystemInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemInfo.Marshal(b, m, deterministic)
}
func (m *SystemInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemInfo.Merge(m, src)
}
func (m *SystemInfo) XXX_Size() int {
	return xxx_messageInfo_SystemInfo.Size(m)
}
func (m *SystemInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemInfo.DiscardUnknown(m)
}

var xxx_messageInfo_SystemInfo proto.InternalMessageInfo

func (m *SystemInfo) GetRequestTime() int64 {
	if m != nil {
		return m.RequestTime
	}
	return 0
}

func (m *SystemInfo) GetRequestUser() string {
	if m != nil {
		return m.RequestUser
	}
	return ""
}

func (m *SystemInfo) GetServerName() string {
	if m != nil {
		return m.ServerName
	}
	return ""
}

func (m *SystemInfo) GetServerTime() int64 {
	if m != nil {
		return m.ServerTime
	}
	return 0
}

func (m *SystemInfo) GetAccessCount() int64 {
	if m != nil {
		return m.AccessCount
	}
	return 0
}

type ClientInfo struct {
	ClientName           string   `protobuf:"bytes,1,opt,name=clientName,proto3" json:"clientName,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ClientInfo) Reset()         { *m = ClientInfo{} }
func (m *ClientInfo) String() string { return proto.CompactTextString(m) }
func (*ClientInfo) ProtoMessage()    {}
func (*ClientInfo) Descriptor() ([]byte, []int) {
	return fileDescriptor_746080b643370b3b, []int{1}
}

func (m *ClientInfo) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ClientInfo.Unmarshal(m, b)
}
func (m *ClientInfo) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ClientInfo.Marshal(b, m, deterministic)
}
func (m *ClientInfo) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ClientInfo.Merge(m, src)
}
func (m *ClientInfo) XXX_Size() int {
	return xxx_messageInfo_ClientInfo.Size(m)
}
func (m *ClientInfo) XXX_DiscardUnknown() {
	xxx_messageInfo_ClientInfo.DiscardUnknown(m)
}

var xxx_messageInfo_ClientInfo proto.InternalMessageInfo

func (m *ClientInfo) GetClientName() string {
	if m != nil {
		return m.ClientName
	}
	return ""
}

func init() {
	proto.RegisterType((*SystemInfo)(nil), "services.SystemInfo")
	proto.RegisterType((*ClientInfo)(nil), "services.ClientInfo")
}

func init() { proto.RegisterFile("system/system.proto", fileDescriptor_746080b643370b3b) }

var fileDescriptor_746080b643370b3b = []byte{
	// 256 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x4c, 0x90, 0xcd, 0x4a, 0x03, 0x31,
	0x10, 0x80, 0x8d, 0xd5, 0xa2, 0xe3, 0xc9, 0xe8, 0x61, 0xf1, 0x50, 0x96, 0x3d, 0xf5, 0xa0, 0x1b,
	0x7f, 0x40, 0x28, 0xe2, 0xc5, 0x9e, 0x44, 0xf0, 0xd0, 0xea, 0xc5, 0xdb, 0x36, 0x4c, 0xb7, 0x01,
	0x93, 0xa9, 0x49, 0x56, 0x70, 0x1f, 0xcb, 0x27, 0x2c, 0x4d, 0x58, 0x92, 0x53, 0xc8, 0x37, 0x3f,
	0xdf, 0xcc, 0xc0, 0x85, 0xfb, 0x73, 0x1e, 0xb5, 0x88, 0x4f, 0xbd, 0xb5, 0xe4, 0x89, 0x9f, 0x38,
	0xb4, 0xbf, 0x4a, 0xa2, 0xab, 0xfe, 0x19, 0xc0, 0x32, 0x84, 0x5e, 0xcd, 0x9a, 0x78, 0x09, 0x67,
	0x16, 0x7f, 0x3a, 0x74, 0xfe, 0x43, 0x69, 0x2c, 0x58, 0xc9, 0xa6, 0xa3, 0x45, 0x8e, 0xb2, 0x8c,
	0x4f, 0x87, 0xb6, 0x38, 0x2c, 0xd9, 0xf4, 0x74, 0x91, 0x23, 0x3e, 0x01, 0xd8, 0xb7, 0x47, 0xfb,
	0xde, 0x68, 0x2c, 0x46, 0x21, 0x21, 0x23, 0x29, 0x1e, 0x14, 0x47, 0x41, 0x91, 0x91, 0xbd, 0xa1,
	0x91, 0x12, 0x9d, 0x9b, 0x53, 0x67, 0x7c, 0x71, 0x1c, 0x67, 0xc8, 0x50, 0x75, 0x0d, 0x30, 0xff,
	0x56, 0x68, 0x7c, 0x98, 0x79, 0x02, 0x20, 0xc3, 0x2f, 0xf8, 0x58, 0xf4, 0x25, 0x72, 0xff, 0x06,
	0xe7, 0x69, 0xc3, 0x65, 0x5c, 0x9c, 0x3f, 0xc2, 0x58, 0x5a, 0x6c, 0x3c, 0xf2, 0xcb, 0x7a, 0x38,
	0x46, 0x9d, 0x9a, 0x5e, 0x65, 0x34, 0x15, 0x57, 0x07, 0x2f, 0xcf, 0x5f, 0x4f, 0xad, 0xf2, 0x9b,
	0x6e, 0x55, 0x4b, 0xd2, 0xa2, 0xef, 0xfb, 0x8d, 0xbd, 0x9b, 0xcd, 0x6e, 0x85, 0x24, 0xad, 0xc9,
	0xdc, 0xb4, 0x76, 0x2b, 0x45, 0x4b, 0x62, 0x28, 0x16, 0xe9, 0xfa, 0xca, 0xac, 0x69, 0x35, 0x0e,
	0xf7, 0x7f, 0xd8, 0x05, 0x00, 0x00, 0xff, 0xff, 0x4c, 0x42, 0x63, 0x67, 0x96, 0x01, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// SystemInfoServiceClient is the client API for SystemInfoService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type SystemInfoServiceClient interface {
	Create(ctx context.Context, in *ClientInfo, opts ...grpc.CallOption) (*SystemInfo, error)
}

type systemInfoServiceClient struct {
	cc *grpc.ClientConn
}

func NewSystemInfoServiceClient(cc *grpc.ClientConn) SystemInfoServiceClient {
	return &systemInfoServiceClient{cc}
}

func (c *systemInfoServiceClient) Create(ctx context.Context, in *ClientInfo, opts ...grpc.CallOption) (*SystemInfo, error) {
	out := new(SystemInfo)
	err := c.cc.Invoke(ctx, "/services.SystemInfoService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SystemInfoServiceServer is the server API for SystemInfoService service.
type SystemInfoServiceServer interface {
	Create(context.Context, *ClientInfo) (*SystemInfo, error)
}

// UnimplementedSystemInfoServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSystemInfoServiceServer struct {
}

func (*UnimplementedSystemInfoServiceServer) Create(ctx context.Context, req *ClientInfo) (*SystemInfo, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}

func RegisterSystemInfoServiceServer(s *grpc.Server, srv SystemInfoServiceServer) {
	s.RegisterService(&_SystemInfoService_serviceDesc, srv)
}

func _SystemInfoService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ClientInfo)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemInfoServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemInfoService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemInfoServiceServer).Create(ctx, req.(*ClientInfo))
	}
	return interceptor(ctx, in, info, handler)
}

var _SystemInfoService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.SystemInfoService",
	HandlerType: (*SystemInfoServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _SystemInfoService_Create_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "system/system.proto",
}
