// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user/user.proto

package user

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	common "github.com/zzzhr1990/common-grpc/go/common"
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

type GrpcUser struct {
	Identity             int64    `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Password             string   `protobuf:"bytes,3,opt,name=password,proto3" json:"password,omitempty"`
	Salt                 string   `protobuf:"bytes,4,opt,name=salt,proto3" json:"salt,omitempty"`
	CountryCode          string   `protobuf:"bytes,5,opt,name=countryCode,proto3" json:"countryCode,omitempty"`
	Phone                string   `protobuf:"bytes,6,opt,name=phone,proto3" json:"phone,omitempty"`
	Email                string   `protobuf:"bytes,7,opt,name=email,proto3" json:"email,omitempty"`
	CreateTime           int64    `protobuf:"varint,8,opt,name=createTime,proto3" json:"createTime,omitempty"`
	CreateIP             string   `protobuf:"bytes,9,opt,name=createIP,proto3" json:"createIP,omitempty"`
	Icon                 string   `protobuf:"bytes,10,opt,name=icon,proto3" json:"icon,omitempty"`
	SpaceUsed            uint64   `protobuf:"varint,11,opt,name=spaceUsed,proto3" json:"spaceUsed,omitempty"`
	SpaceCapacity        uint64   `protobuf:"varint,12,opt,name=spaceCapacity,proto3" json:"spaceCapacity,omitempty"`
	IgnoreCase           bool     `protobuf:"varint,13,opt,name=ignoreCase,proto3" json:"ignoreCase,omitempty"`
	Type                 uint32   `protobuf:"varint,14,opt,name=type,proto3" json:"type,omitempty"`
	Status               int32    `protobuf:"varint,15,opt,name=status,proto3" json:"status,omitempty"`
	Version              uint32   `protobuf:"varint,16,opt,name=version,proto3" json:"version,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GrpcUser) Reset()         { *m = GrpcUser{} }
func (m *GrpcUser) String() string { return proto.CompactTextString(m) }
func (*GrpcUser) ProtoMessage()    {}
func (*GrpcUser) Descriptor() ([]byte, []int) {
	return fileDescriptor_ed89022014131a74, []int{0}
}

func (m *GrpcUser) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GrpcUser.Unmarshal(m, b)
}
func (m *GrpcUser) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GrpcUser.Marshal(b, m, deterministic)
}
func (m *GrpcUser) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GrpcUser.Merge(m, src)
}
func (m *GrpcUser) XXX_Size() int {
	return xxx_messageInfo_GrpcUser.Size(m)
}
func (m *GrpcUser) XXX_DiscardUnknown() {
	xxx_messageInfo_GrpcUser.DiscardUnknown(m)
}

var xxx_messageInfo_GrpcUser proto.InternalMessageInfo

func (m *GrpcUser) GetIdentity() int64 {
	if m != nil {
		return m.Identity
	}
	return 0
}

func (m *GrpcUser) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GrpcUser) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *GrpcUser) GetSalt() string {
	if m != nil {
		return m.Salt
	}
	return ""
}

func (m *GrpcUser) GetCountryCode() string {
	if m != nil {
		return m.CountryCode
	}
	return ""
}

func (m *GrpcUser) GetPhone() string {
	if m != nil {
		return m.Phone
	}
	return ""
}

func (m *GrpcUser) GetEmail() string {
	if m != nil {
		return m.Email
	}
	return ""
}

func (m *GrpcUser) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *GrpcUser) GetCreateIP() string {
	if m != nil {
		return m.CreateIP
	}
	return ""
}

func (m *GrpcUser) GetIcon() string {
	if m != nil {
		return m.Icon
	}
	return ""
}

func (m *GrpcUser) GetSpaceUsed() uint64 {
	if m != nil {
		return m.SpaceUsed
	}
	return 0
}

func (m *GrpcUser) GetSpaceCapacity() uint64 {
	if m != nil {
		return m.SpaceCapacity
	}
	return 0
}

func (m *GrpcUser) GetIgnoreCase() bool {
	if m != nil {
		return m.IgnoreCase
	}
	return false
}

func (m *GrpcUser) GetType() uint32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *GrpcUser) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *GrpcUser) GetVersion() uint32 {
	if m != nil {
		return m.Version
	}
	return 0
}

func init() {
	proto.RegisterType((*GrpcUser)(nil), "services.GrpcUser")
}

func init() { proto.RegisterFile("user/user.proto", fileDescriptor_ed89022014131a74) }

var fileDescriptor_ed89022014131a74 = []byte{
	// 431 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x8c, 0x93, 0xcf, 0x6a, 0x1b, 0x31,
	0x10, 0xc6, 0xa3, 0xfa, 0xdf, 0x7a, 0x52, 0xc7, 0x45, 0x84, 0x22, 0x4c, 0x29, 0x8b, 0xe9, 0x61,
	0x2f, 0xf5, 0xd6, 0xf5, 0xa5, 0xe9, 0x31, 0x26, 0x94, 0x9e, 0x5a, 0xb6, 0xcd, 0xa5, 0x97, 0xa2,
	0xc8, 0xc3, 0x5a, 0xe0, 0x95, 0x84, 0x24, 0xa7, 0xd8, 0x8f, 0xd5, 0x17, 0xeb, 0x2b, 0x14, 0x49,
	0xde, 0xc4, 0x85, 0x06, 0x7c, 0xd9, 0x9d, 0xef, 0xa7, 0x6f, 0xd8, 0x0f, 0xcd, 0x2c, 0x8c, 0xb7,
	0x0e, 0x6d, 0x19, 0x1e, 0x33, 0x63, 0xb5, 0xd7, 0x34, 0x73, 0x68, 0xef, 0xa5, 0x40, 0x37, 0x99,
	0x08, 0xdd, 0x34, 0x5a, 0x95, 0xe9, 0xf5, 0x13, 0x95, 0x97, 0x7e, 0x97, 0x5c, 0xd3, 0xdf, 0x1d,
	0xc8, 0x3e, 0x59, 0x23, 0x6e, 0x1d, 0x5a, 0x3a, 0x81, 0x4c, 0xae, 0xd2, 0x31, 0x23, 0x39, 0x29,
	0x3a, 0xd5, 0x83, 0xa6, 0x14, 0xba, 0x8a, 0x37, 0xc8, 0x9e, 0xe5, 0xa4, 0x18, 0x56, 0xb1, 0x0e,
	0x7e, 0xc3, 0x9d, 0xfb, 0xa5, 0xed, 0x8a, 0x75, 0x22, 0x7f, 0xd0, 0xc1, 0xef, 0xf8, 0xc6, 0xb3,
	0x6e, 0xf2, 0x87, 0x9a, 0xe6, 0x70, 0x2e, 0xf4, 0x56, 0x79, 0xbb, 0x5b, 0xea, 0x15, 0xb2, 0x5e,
	0x3c, 0x3a, 0x46, 0xf4, 0x12, 0x7a, 0x66, 0xad, 0x15, 0xb2, 0x7e, 0x3c, 0x4b, 0x22, 0x50, 0x6c,
	0xb8, 0xdc, 0xb0, 0x41, 0xa2, 0x51, 0xd0, 0xd7, 0x00, 0xc2, 0x22, 0xf7, 0xf8, 0x5d, 0x36, 0xc8,
	0xb2, 0x98, 0xf7, 0x88, 0x84, 0x74, 0x49, 0x7d, 0xfe, 0xca, 0x86, 0x29, 0x5d, 0xab, 0x43, 0x3a,
	0x29, 0xb4, 0x62, 0x90, 0xd2, 0x85, 0x9a, 0xbe, 0x82, 0xa1, 0x33, 0x5c, 0xe0, 0xad, 0xc3, 0x15,
	0x3b, 0xcf, 0x49, 0xd1, 0xad, 0x1e, 0x01, 0x7d, 0x03, 0xa3, 0x28, 0x96, 0xdc, 0x70, 0x11, 0x2e,
	0xe8, 0x79, 0x74, 0xfc, 0x0b, 0x43, 0x26, 0x59, 0x2b, 0x6d, 0x71, 0xc9, 0x1d, 0xb2, 0x51, 0x4e,
	0x8a, 0xac, 0x3a, 0x22, 0xe1, 0xbb, 0x7e, 0x67, 0x90, 0x5d, 0xe4, 0xa4, 0x18, 0x55, 0xb1, 0xa6,
	0x2f, 0xa1, 0xef, 0x3c, 0xf7, 0x5b, 0xc7, 0xc6, 0x39, 0x29, 0x7a, 0xd5, 0x41, 0x51, 0x06, 0x83,
	0x7b, 0xb4, 0x4e, 0x6a, 0xc5, 0x5e, 0x44, 0x7b, 0x2b, 0xdf, 0xff, 0x21, 0x30, 0x6e, 0x87, 0xf6,
	0x2d, 0x4d, 0x99, 0x7e, 0x68, 0x6f, 0x23, 0x4e, 0x92, 0xce, 0xda, 0xe9, 0xcf, 0x5a, 0xe3, 0xe4,
	0xf2, 0x91, 0x5d, 0x6b, 0xbd, 0xb9, 0x89, 0x73, 0x9d, 0x9e, 0xd1, 0x05, 0x0c, 0x6a, 0xf4, 0x4f,
	0xb6, 0xfd, 0x87, 0x4d, 0xcf, 0xe8, 0x47, 0xb8, 0x38, 0x34, 0x7d, 0xb1, 0x37, 0x8d, 0x09, 0x0b,
	0x72, 0x72, 0xef, 0x1c, 0x7a, 0x1b, 0x5d, 0x4b, 0x75, 0x7a, 0xcb, 0xf5, 0xe2, 0xc7, 0xbc, 0x96,
	0x7e, 0xbd, 0xbd, 0x9b, 0x09, 0xdd, 0x94, 0xfb, 0xfd, 0x7e, 0x6d, 0xe7, 0x57, 0x57, 0xef, 0x0e,
	0x2b, 0xfd, 0xb6, 0xb6, 0x46, 0x94, 0xb5, 0x2e, 0xdb, 0xd6, 0xf8, 0x1f, 0xdc, 0xf5, 0xe3, 0x8a,
	0x2f, 0xfe, 0x06, 0x00, 0x00, 0xff, 0xff, 0xd1, 0x97, 0x01, 0x82, 0x1b, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// GrpcUserServiceClient is the client API for GrpcUserService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type GrpcUserServiceClient interface {
	CreateUser(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*common.BoolEntity, error)
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	GetUser(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error)
	GetUserOrEmpty(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error)
	Login(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error)
}

type grpcUserServiceClient struct {
	cc *grpc.ClientConn
}

func NewGrpcUserServiceClient(cc *grpc.ClientConn) GrpcUserServiceClient {
	return &grpcUserServiceClient{cc}
}

func (c *grpcUserServiceClient) CreateUser(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/createUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserServiceClient) GetUser(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error) {
	out := new(GrpcUser)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/getUser", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserServiceClient) GetUserOrEmpty(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error) {
	out := new(GrpcUser)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/getUserOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserServiceClient) Login(ctx context.Context, in *GrpcUser, opts ...grpc.CallOption) (*GrpcUser, error) {
	out := new(GrpcUser)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/login", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GrpcUserServiceServer is the server API for GrpcUserService service.
type GrpcUserServiceServer interface {
	CreateUser(context.Context, *GrpcUser) (*common.BoolEntity, error)
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	GetUser(context.Context, *GrpcUser) (*GrpcUser, error)
	GetUserOrEmpty(context.Context, *GrpcUser) (*GrpcUser, error)
	Login(context.Context, *GrpcUser) (*GrpcUser, error)
}

// UnimplementedGrpcUserServiceServer can be embedded to have forward compatible implementations.
type UnimplementedGrpcUserServiceServer struct {
}

func (*UnimplementedGrpcUserServiceServer) CreateUser(ctx context.Context, req *GrpcUser) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateUser not implemented")
}
func (*UnimplementedGrpcUserServiceServer) GetUser(ctx context.Context, req *GrpcUser) (*GrpcUser, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUser not implemented")
}
func (*UnimplementedGrpcUserServiceServer) GetUserOrEmpty(ctx context.Context, req *GrpcUser) (*GrpcUser, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetUserOrEmpty not implemented")
}
func (*UnimplementedGrpcUserServiceServer) Login(ctx context.Context, req *GrpcUser) (*GrpcUser, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Login not implemented")
}

func RegisterGrpcUserServiceServer(s *grpc.Server, srv GrpcUserServiceServer) {
	s.RegisterService(&_GrpcUserService_serviceDesc, srv)
}

func _GrpcUserService_CreateUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).CreateUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/CreateUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).CreateUser(ctx, req.(*GrpcUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserService_GetUser_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).GetUser(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/GetUser",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).GetUser(ctx, req.(*GrpcUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserService_GetUserOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).GetUserOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/GetUserOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).GetUserOrEmpty(ctx, req.(*GrpcUser))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserService_Login_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUser)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).Login(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/Login",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).Login(ctx, req.(*GrpcUser))
	}
	return interceptor(ctx, in, info, handler)
}

var _GrpcUserService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.GrpcUserService",
	HandlerType: (*GrpcUserServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "createUser",
			Handler:    _GrpcUserService_CreateUser_Handler,
		},
		{
			MethodName: "getUser",
			Handler:    _GrpcUserService_GetUser_Handler,
		},
		{
			MethodName: "getUserOrEmpty",
			Handler:    _GrpcUserService_GetUserOrEmpty_Handler,
		},
		{
			MethodName: "login",
			Handler:    _GrpcUserService_Login_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user/user.proto",
}
