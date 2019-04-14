// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user/info.proto

package info

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
	return fileDescriptor_e397bf9a47fd544a, []int{0}
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

type Balance struct {
	Identity             int64    `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	SpaceUsed            int64    `protobuf:"varint,2,opt,name=spaceUsed,proto3" json:"spaceUsed,omitempty"`
	SpaceLimit           int64    `protobuf:"varint,3,opt,name=spaceLimit,proto3" json:"spaceLimit,omitempty"`
	TrafficUsed          int64    `protobuf:"varint,4,opt,name=trafficUsed,proto3" json:"trafficUsed,omitempty"`
	TrafficLimit         int64    `protobuf:"varint,5,opt,name=trafficLimit,proto3" json:"trafficLimit,omitempty"`
	OfflineTaskUsed      int64    `protobuf:"varint,6,opt,name=offlineTaskUsed,proto3" json:"offlineTaskUsed,omitempty"`
	OfflineTaskLimit     int64    `protobuf:"varint,7,opt,name=offlineTaskLimit,proto3" json:"offlineTaskLimit,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Balance) Reset()         { *m = Balance{} }
func (m *Balance) String() string { return proto.CompactTextString(m) }
func (*Balance) ProtoMessage()    {}
func (*Balance) Descriptor() ([]byte, []int) {
	return fileDescriptor_e397bf9a47fd544a, []int{1}
}

func (m *Balance) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Balance.Unmarshal(m, b)
}
func (m *Balance) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Balance.Marshal(b, m, deterministic)
}
func (m *Balance) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Balance.Merge(m, src)
}
func (m *Balance) XXX_Size() int {
	return xxx_messageInfo_Balance.Size(m)
}
func (m *Balance) XXX_DiscardUnknown() {
	xxx_messageInfo_Balance.DiscardUnknown(m)
}

var xxx_messageInfo_Balance proto.InternalMessageInfo

func (m *Balance) GetIdentity() int64 {
	if m != nil {
		return m.Identity
	}
	return 0
}

func (m *Balance) GetSpaceUsed() int64 {
	if m != nil {
		return m.SpaceUsed
	}
	return 0
}

func (m *Balance) GetSpaceLimit() int64 {
	if m != nil {
		return m.SpaceLimit
	}
	return 0
}

func (m *Balance) GetTrafficUsed() int64 {
	if m != nil {
		return m.TrafficUsed
	}
	return 0
}

func (m *Balance) GetTrafficLimit() int64 {
	if m != nil {
		return m.TrafficLimit
	}
	return 0
}

func (m *Balance) GetOfflineTaskUsed() int64 {
	if m != nil {
		return m.OfflineTaskUsed
	}
	return 0
}

func (m *Balance) GetOfflineTaskLimit() int64 {
	if m != nil {
		return m.OfflineTaskLimit
	}
	return 0
}

type PasswordPair struct {
	Identity             int64    `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	OldPassword          string   `protobuf:"bytes,2,opt,name=oldPassword,proto3" json:"oldPassword,omitempty"`
	NewPassword          string   `protobuf:"bytes,3,opt,name=newPassword,proto3" json:"newPassword,omitempty"`
	Direct               bool     `protobuf:"varint,4,opt,name=direct,proto3" json:"direct,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PasswordPair) Reset()         { *m = PasswordPair{} }
func (m *PasswordPair) String() string { return proto.CompactTextString(m) }
func (*PasswordPair) ProtoMessage()    {}
func (*PasswordPair) Descriptor() ([]byte, []int) {
	return fileDescriptor_e397bf9a47fd544a, []int{2}
}

func (m *PasswordPair) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PasswordPair.Unmarshal(m, b)
}
func (m *PasswordPair) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PasswordPair.Marshal(b, m, deterministic)
}
func (m *PasswordPair) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PasswordPair.Merge(m, src)
}
func (m *PasswordPair) XXX_Size() int {
	return xxx_messageInfo_PasswordPair.Size(m)
}
func (m *PasswordPair) XXX_DiscardUnknown() {
	xxx_messageInfo_PasswordPair.DiscardUnknown(m)
}

var xxx_messageInfo_PasswordPair proto.InternalMessageInfo

func (m *PasswordPair) GetIdentity() int64 {
	if m != nil {
		return m.Identity
	}
	return 0
}

func (m *PasswordPair) GetOldPassword() string {
	if m != nil {
		return m.OldPassword
	}
	return ""
}

func (m *PasswordPair) GetNewPassword() string {
	if m != nil {
		return m.NewPassword
	}
	return ""
}

func (m *PasswordPair) GetDirect() bool {
	if m != nil {
		return m.Direct
	}
	return false
}

func init() {
	proto.RegisterType((*GrpcUser)(nil), "services.GrpcUser")
	proto.RegisterType((*Balance)(nil), "services.Balance")
	proto.RegisterType((*PasswordPair)(nil), "services.PasswordPair")
}

func init() { proto.RegisterFile("user/info.proto", fileDescriptor_e397bf9a47fd544a) }

var fileDescriptor_e397bf9a47fd544a = []byte{
	// 610 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xdf, 0x4a, 0x1c, 0x31,
	0x14, 0xc6, 0x1d, 0xf7, 0xaf, 0xc7, 0xd5, 0xb5, 0x41, 0x4a, 0x58, 0x8a, 0x0c, 0x43, 0x2f, 0x86,
	0x42, 0x77, 0x6b, 0x2d, 0xa2, 0xbd, 0x2a, 0x8a, 0x94, 0x42, 0xa1, 0xcb, 0xa8, 0x37, 0xbd, 0x29,
	0x31, 0x9b, 0x9d, 0x0d, 0x9d, 0x49, 0x86, 0x24, 0xab, 0xe8, 0x03, 0xf4, 0x35, 0xfa, 0x0e, 0x7d,
	0xc1, 0x96, 0x24, 0x33, 0xbb, 0xb3, 0xb5, 0x8a, 0xbd, 0xda, 0x7c, 0xbf, 0x7c, 0x27, 0x7b, 0x32,
	0xe7, 0x9c, 0x40, 0x7f, 0xae, 0x99, 0x1a, 0x71, 0x31, 0x95, 0xc3, 0x42, 0x49, 0x23, 0x51, 0x57,
	0x33, 0x75, 0xcd, 0x29, 0xd3, 0x83, 0x01, 0x95, 0x79, 0x2e, 0xc5, 0xc8, 0xff, 0x7c, 0x63, 0xc2,
	0x70, 0x73, 0xeb, 0x5d, 0xd1, 0xaf, 0x06, 0x74, 0x3f, 0xaa, 0x82, 0x5e, 0x6a, 0xa6, 0xd0, 0x00,
	0xba, 0x7c, 0xe2, 0xb7, 0x71, 0x10, 0x06, 0x71, 0x23, 0x59, 0x68, 0x84, 0xa0, 0x29, 0x48, 0xce,
	0xf0, 0x7a, 0x18, 0xc4, 0x1b, 0x89, 0x5b, 0x5b, 0x7f, 0x41, 0xb4, 0xbe, 0x91, 0x6a, 0x82, 0x1b,
	0x8e, 0x2f, 0xb4, 0xf5, 0x6b, 0x92, 0x19, 0xdc, 0xf4, 0x7e, 0xbb, 0x46, 0x21, 0x6c, 0x52, 0x39,
	0x17, 0x46, 0xdd, 0x9e, 0xca, 0x09, 0xc3, 0x2d, 0xb7, 0x55, 0x47, 0x68, 0x17, 0x5a, 0xc5, 0x4c,
	0x0a, 0x86, 0xdb, 0x6e, 0xcf, 0x0b, 0x4b, 0x59, 0x4e, 0x78, 0x86, 0x3b, 0x9e, 0x3a, 0x81, 0xf6,
	0x00, 0xa8, 0x62, 0xc4, 0xb0, 0x0b, 0x9e, 0x33, 0xdc, 0x75, 0xf9, 0xd6, 0x88, 0xcd, 0xce, 0xab,
	0x4f, 0x63, 0xbc, 0xe1, 0xb3, 0xab, 0xb4, 0xcd, 0x8e, 0x53, 0x29, 0x30, 0xf8, 0xec, 0xec, 0x1a,
	0xbd, 0x80, 0x0d, 0x5d, 0x10, 0xca, 0x2e, 0x35, 0x9b, 0xe0, 0xcd, 0x30, 0x88, 0x9b, 0xc9, 0x12,
	0xa0, 0x97, 0xb0, 0xe5, 0xc4, 0x29, 0x29, 0x08, 0xb5, 0x1f, 0xa8, 0xe7, 0x1c, 0xab, 0xd0, 0xe6,
	0xc4, 0x53, 0x21, 0x15, 0x3b, 0x25, 0x9a, 0xe1, 0xad, 0x30, 0x88, 0xbb, 0x49, 0x8d, 0xd8, 0xff,
	0x35, 0xb7, 0x05, 0xc3, 0xdb, 0x61, 0x10, 0x6f, 0x25, 0x6e, 0x8d, 0x9e, 0x43, 0x5b, 0x1b, 0x62,
	0xe6, 0x1a, 0xf7, 0xc3, 0x20, 0x6e, 0x25, 0xa5, 0x42, 0x18, 0x3a, 0xd7, 0x4c, 0x69, 0x2e, 0x05,
	0xde, 0x71, 0xf6, 0x4a, 0x46, 0xbf, 0x03, 0xe8, 0x9c, 0x90, 0x8c, 0x08, 0xca, 0x1e, 0xad, 0xd9,
	0xca, 0x8d, 0xd6, 0xdd, 0x66, 0xed, 0x46, 0x7b, 0x00, 0x4e, 0x7c, 0xe6, 0x39, 0x37, 0xae, 0x7e,
	0x8d, 0xa4, 0x46, 0x6c, 0xb5, 0x8c, 0x22, 0xd3, 0x29, 0xa7, 0x2e, 0xbe, 0xe9, 0x0c, 0x75, 0x84,
	0x22, 0xe8, 0x95, 0xd2, 0x9f, 0xd1, 0x72, 0x96, 0x15, 0x86, 0x62, 0xe8, 0xcb, 0xe9, 0x34, 0xe3,
	0x82, 0x5d, 0x10, 0xfd, 0xdd, 0x9d, 0xd4, 0x76, 0xb6, 0xbf, 0x31, 0x7a, 0x05, 0x3b, 0x35, 0xe4,
	0x4f, 0xec, 0x38, 0xeb, 0x3d, 0x1e, 0xfd, 0x08, 0xa0, 0x37, 0x2e, 0x5b, 0x6d, 0x4c, 0xf8, 0xe3,
	0xad, 0x1b, 0xc2, 0xa6, 0xcc, 0x26, 0x95, 0xbd, 0xec, 0xe0, 0x3a, 0xb2, 0x0e, 0xc1, 0x6e, 0xc6,
	0xab, 0xbd, 0x5c, 0x47, 0xb6, 0x48, 0x13, 0xae, 0x18, 0xf5, 0x0d, 0xdd, 0x4d, 0x4a, 0xf5, 0xf6,
	0x67, 0x03, 0xfa, 0xd5, 0xfc, 0x9c, 0xfb, 0x81, 0x43, 0x47, 0x55, 0x63, 0xba, 0xa1, 0x42, 0xc3,
	0x6a, 0x10, 0x87, 0x95, 0x71, 0xb0, 0xbb, 0x64, 0x27, 0x52, 0x66, 0x67, 0x2e, 0xcf, 0x68, 0x0d,
	0x1d, 0x40, 0x27, 0x65, 0xe6, 0xc1, 0xb0, 0x7f, 0xb0, 0x68, 0x0d, 0xbd, 0x87, 0xed, 0x32, 0xe8,
	0x8b, 0x3a, 0xcb, 0x0b, 0x3b, 0xab, 0x4f, 0x8e, 0xdd, 0x87, 0x56, 0x26, 0x53, 0x2e, 0xfe, 0x23,
	0xe4, 0x1d, 0x40, 0xca, 0x4c, 0xd5, 0x7e, 0xcf, 0x6a, 0x37, 0xf1, 0x68, 0x70, 0x1f, 0x45, 0x6b,
	0xe8, 0x10, 0x7a, 0x9a, 0x99, 0xf3, 0x45, 0xf3, 0x3d, 0x35, 0xee, 0x03, 0x6c, 0xd3, 0x19, 0x11,
	0x29, 0x5b, 0x56, 0x62, 0x69, 0xab, 0x77, 0xc0, 0x43, 0xdf, 0xf4, 0xe4, 0xe8, 0xeb, 0x61, 0xca,
	0xcd, 0x6c, 0x7e, 0x35, 0xa4, 0x32, 0x1f, 0xdd, 0xdd, 0xdd, 0xcd, 0xd4, 0xfe, 0xf1, 0xf1, 0x9b,
	0xf2, 0x35, 0x7c, 0x9d, 0xaa, 0x82, 0x8e, 0x52, 0x39, 0xaa, 0x82, 0x47, 0x8b, 0x77, 0xf4, 0xaa,
	0xed, 0x9e, 0xc8, 0x83, 0x3f, 0x01, 0x00, 0x00, 0xff, 0xff, 0xd2, 0x9d, 0x67, 0x8d, 0x5b, 0x05,
	0x00, 0x00,
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
	GetBalance(ctx context.Context, in *Balance, opts ...grpc.CallOption) (*Balance, error)
	SetSpaceUsed(ctx context.Context, in *Balance, opts ...grpc.CallOption) (*Balance, error)
	ChangePassword(ctx context.Context, in *PasswordPair, opts ...grpc.CallOption) (*common.BoolEntity, error)
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

func (c *grpcUserServiceClient) GetBalance(ctx context.Context, in *Balance, opts ...grpc.CallOption) (*Balance, error) {
	out := new(Balance)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/getBalance", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserServiceClient) SetSpaceUsed(ctx context.Context, in *Balance, opts ...grpc.CallOption) (*Balance, error) {
	out := new(Balance)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/setSpaceUsed", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserServiceClient) ChangePassword(ctx context.Context, in *PasswordPair, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.GrpcUserService/changePassword", in, out, opts...)
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
	GetBalance(context.Context, *Balance) (*Balance, error)
	SetSpaceUsed(context.Context, *Balance) (*Balance, error)
	ChangePassword(context.Context, *PasswordPair) (*common.BoolEntity, error)
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
func (*UnimplementedGrpcUserServiceServer) GetBalance(ctx context.Context, req *Balance) (*Balance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetBalance not implemented")
}
func (*UnimplementedGrpcUserServiceServer) SetSpaceUsed(ctx context.Context, req *Balance) (*Balance, error) {
	return nil, status.Errorf(codes.Unimplemented, "method SetSpaceUsed not implemented")
}
func (*UnimplementedGrpcUserServiceServer) ChangePassword(ctx context.Context, req *PasswordPair) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangePassword not implemented")
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

func _GrpcUserService_GetBalance_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Balance)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).GetBalance(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/GetBalance",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).GetBalance(ctx, req.(*Balance))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserService_SetSpaceUsed_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Balance)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).SetSpaceUsed(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/SetSpaceUsed",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).SetSpaceUsed(ctx, req.(*Balance))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserService_ChangePassword_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PasswordPair)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserServiceServer).ChangePassword(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserService/ChangePassword",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserServiceServer).ChangePassword(ctx, req.(*PasswordPair))
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
		{
			MethodName: "getBalance",
			Handler:    _GrpcUserService_GetBalance_Handler,
		},
		{
			MethodName: "setSpaceUsed",
			Handler:    _GrpcUserService_SetSpaceUsed_Handler,
		},
		{
			MethodName: "changePassword",
			Handler:    _GrpcUserService_ChangePassword_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user/info.proto",
}