// Code generated by protoc-gen-go. DO NOT EDIT.
// source: videoext/videoext.proto

package video

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

type VideoExt struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Title                string   `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Encoder              string   `protobuf:"bytes,4,opt,name=encoder,proto3" json:"encoder,omitempty"`
	Duration             int64    `protobuf:"varint,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Width                int64    `protobuf:"varint,6,opt,name=width,proto3" json:"width,omitempty"`
	Height               int64    `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	PreviewBucket        string   `protobuf:"bytes,8,opt,name=previewBucket,proto3" json:"previewBucket,omitempty"`
	PreviewKey           string   `protobuf:"bytes,9,opt,name=previewKey,proto3" json:"previewKey,omitempty"`
	PreviewType          int32    `protobuf:"varint,10,opt,name=previewType,proto3" json:"previewType,omitempty"`
	PreviewPID           string   `protobuf:"bytes,11,opt,name=previewPID,proto3" json:"previewPID,omitempty"`
	PreviewPlayKey       string   `protobuf:"bytes,12,opt,name=previewPlayKey,proto3" json:"previewPlayKey,omitempty"`
	Status               int32    `protobuf:"varint,13,opt,name=status,proto3" json:"status,omitempty"`
	Flag                 int32    `protobuf:"varint,14,opt,name=flag,proto3" json:"flag,omitempty"`
	CreateTime           int64    `protobuf:"varint,15,opt,name=createTime,proto3" json:"createTime,omitempty"`
	UpdateTime           int64    `protobuf:"varint,16,opt,name=updateTime,proto3" json:"updateTime,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *VideoExt) Reset()         { *m = VideoExt{} }
func (m *VideoExt) String() string { return proto.CompactTextString(m) }
func (*VideoExt) ProtoMessage()    {}
func (*VideoExt) Descriptor() ([]byte, []int) {
	return fileDescriptor_88d9015bf4da5abd, []int{0}
}

func (m *VideoExt) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_VideoExt.Unmarshal(m, b)
}
func (m *VideoExt) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_VideoExt.Marshal(b, m, deterministic)
}
func (m *VideoExt) XXX_Merge(src proto.Message) {
	xxx_messageInfo_VideoExt.Merge(m, src)
}
func (m *VideoExt) XXX_Size() int {
	return xxx_messageInfo_VideoExt.Size(m)
}
func (m *VideoExt) XXX_DiscardUnknown() {
	xxx_messageInfo_VideoExt.DiscardUnknown(m)
}

var xxx_messageInfo_VideoExt proto.InternalMessageInfo

func (m *VideoExt) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *VideoExt) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *VideoExt) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *VideoExt) GetEncoder() string {
	if m != nil {
		return m.Encoder
	}
	return ""
}

func (m *VideoExt) GetDuration() int64 {
	if m != nil {
		return m.Duration
	}
	return 0
}

func (m *VideoExt) GetWidth() int64 {
	if m != nil {
		return m.Width
	}
	return 0
}

func (m *VideoExt) GetHeight() int64 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *VideoExt) GetPreviewBucket() string {
	if m != nil {
		return m.PreviewBucket
	}
	return ""
}

func (m *VideoExt) GetPreviewKey() string {
	if m != nil {
		return m.PreviewKey
	}
	return ""
}

func (m *VideoExt) GetPreviewType() int32 {
	if m != nil {
		return m.PreviewType
	}
	return 0
}

func (m *VideoExt) GetPreviewPID() string {
	if m != nil {
		return m.PreviewPID
	}
	return ""
}

func (m *VideoExt) GetPreviewPlayKey() string {
	if m != nil {
		return m.PreviewPlayKey
	}
	return ""
}

func (m *VideoExt) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *VideoExt) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *VideoExt) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *VideoExt) GetUpdateTime() int64 {
	if m != nil {
		return m.UpdateTime
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
	return fileDescriptor_88d9015bf4da5abd, []int{1}
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
	return fileDescriptor_88d9015bf4da5abd, []int{2}
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
	proto.RegisterType((*VideoExt)(nil), "services.VideoExt")
	proto.RegisterType((*Balance)(nil), "services.Balance")
	proto.RegisterType((*PasswordPair)(nil), "services.PasswordPair")
}

func init() { proto.RegisterFile("videoext/videoext.proto", fileDescriptor_88d9015bf4da5abd) }

var fileDescriptor_88d9015bf4da5abd = []byte{
	// 554 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x94, 0xdf, 0x6e, 0xd3, 0x4a,
	0x10, 0xc6, 0x8f, 0x8f, 0xf3, 0x77, 0x92, 0x36, 0xd5, 0x0a, 0xc1, 0xaa, 0x42, 0x28, 0x8a, 0x10,
	0x8a, 0x90, 0x88, 0x21, 0x48, 0x15, 0xbd, 0x8d, 0xda, 0x8b, 0x0a, 0x24, 0x22, 0x13, 0xb8, 0xe0,
	0x6e, 0x6b, 0x4f, 0xec, 0x55, 0x6d, 0xaf, 0xb5, 0xde, 0x24, 0x4d, 0x1e, 0x80, 0x67, 0xe3, 0x39,
	0x78, 0x11, 0xd0, 0xee, 0xda, 0xa9, 0x53, 0x10, 0xa2, 0x77, 0xfb, 0xfd, 0xe6, 0x9b, 0x19, 0x79,
	0x66, 0xd7, 0xf0, 0x64, 0xcd, 0x43, 0x14, 0x78, 0xab, 0xbc, 0xea, 0x30, 0xc9, 0xa5, 0x50, 0x82,
	0x74, 0x0a, 0x94, 0x6b, 0x1e, 0x60, 0x31, 0xfa, 0xee, 0x42, 0xe7, 0x8b, 0x0e, 0x5e, 0xde, 0x2a,
	0x42, 0xa0, 0x11, 0xb3, 0x22, 0xa6, 0xce, 0xd0, 0x19, 0x77, 0x7d, 0x73, 0xd6, 0xac, 0xe0, 0x3b,
	0xa4, 0xff, 0x0f, 0x9d, 0xb1, 0xeb, 0x9b, 0x33, 0x79, 0x04, 0x4d, 0xc5, 0x55, 0x82, 0xd4, 0x35,
	0x46, 0x2b, 0x08, 0x85, 0x36, 0x66, 0x81, 0x08, 0x51, 0xd2, 0x86, 0xe1, 0x95, 0x24, 0xa7, 0xd0,
	0x09, 0x57, 0x92, 0x29, 0x2e, 0x32, 0xda, 0x34, 0x75, 0xf6, 0x5a, 0xd7, 0xda, 0xf0, 0x50, 0xc5,
	0xb4, 0x65, 0x02, 0x56, 0x90, 0xc7, 0xd0, 0x8a, 0x91, 0x47, 0xb1, 0xa2, 0x6d, 0x83, 0x4b, 0x45,
	0x9e, 0xc3, 0x51, 0x2e, 0x71, 0xcd, 0x71, 0x33, 0x5b, 0x05, 0x37, 0xa8, 0x68, 0xc7, 0x74, 0x3a,
	0x84, 0xe4, 0x19, 0x40, 0x09, 0xde, 0xe3, 0x96, 0x76, 0x8d, 0xa5, 0x46, 0xc8, 0x10, 0x7a, 0xa5,
	0x5a, 0x6c, 0x73, 0xa4, 0x30, 0x74, 0xc6, 0x4d, 0xbf, 0x8e, 0x6a, 0x15, 0xe6, 0x57, 0x17, 0xb4,
	0x77, 0x50, 0x61, 0x7e, 0x75, 0x41, 0x5e, 0xc0, 0x71, 0xa5, 0x12, 0xb6, 0xd5, 0x5d, 0xfa, 0xc6,
	0x73, 0x8f, 0xea, 0xef, 0x28, 0x14, 0x53, 0xab, 0x82, 0x1e, 0x99, 0x26, 0xa5, 0xd2, 0x53, 0x5d,
	0x26, 0x2c, 0xa2, 0xc7, 0x86, 0x9a, 0xb3, 0xee, 0x19, 0x48, 0x64, 0x0a, 0x17, 0x3c, 0x45, 0x3a,
	0x30, 0xdf, 0x5d, 0x23, 0x3a, 0xbe, 0xca, 0xc3, 0x2a, 0x7e, 0x62, 0xe3, 0x77, 0x64, 0xf4, 0xd3,
	0x81, 0xf6, 0x8c, 0x25, 0x2c, 0x0b, 0x50, 0x4f, 0x9c, 0x87, 0x98, 0x29, 0xae, 0xb6, 0x66, 0x9b,
	0xae, 0xbf, 0xd7, 0xe4, 0x29, 0x74, 0x8b, 0x9c, 0x05, 0xf8, 0xb9, 0xc0, 0xb0, 0x5c, 0xeb, 0x1d,
	0xd0, 0x5d, 0x8c, 0xf8, 0xc0, 0x53, 0xae, 0xcc, 0x82, 0x5d, 0xbf, 0x46, 0xf4, 0xec, 0x94, 0x64,
	0xcb, 0x25, 0x0f, 0x4c, 0x7e, 0xc3, 0x18, 0xea, 0x88, 0x8c, 0xa0, 0x5f, 0x4a, 0x5b, 0xc3, 0x6e,
	0xfc, 0x80, 0x91, 0x31, 0x0c, 0xc4, 0x72, 0x99, 0xf0, 0x0c, 0x17, 0xac, 0xb8, 0x31, 0x95, 0xec,
	0xfe, 0xef, 0x63, 0xf2, 0x12, 0x4e, 0x6a, 0xc8, 0x56, 0xb4, 0x77, 0xe2, 0x37, 0x3e, 0xfa, 0xe6,
	0x40, 0x7f, 0xce, 0x8a, 0x62, 0x23, 0x64, 0x38, 0x67, 0x5c, 0xfe, 0x75, 0x0c, 0x43, 0xe8, 0x89,
	0x24, 0xac, 0xec, 0x66, 0x10, 0x5d, 0xbf, 0x8e, 0xb4, 0x23, 0xc3, 0xcd, 0xde, 0x61, 0x2f, 0x7b,
	0x1d, 0xe9, 0xf5, 0x86, 0x5c, 0x62, 0xa0, 0xcc, 0x1c, 0x3a, 0x7e, 0xa9, 0xa6, 0x3f, 0x1c, 0x18,
	0x54, 0xaf, 0xea, 0x93, 0x7d, 0x6a, 0x64, 0x0a, 0x2d, 0xbb, 0x4c, 0x42, 0x26, 0xd5, 0xf3, 0x9b,
	0x54, 0xa6, 0xd3, 0x3f, 0xb0, 0xd1, 0x7f, 0xc4, 0x03, 0x37, 0x42, 0xf5, 0x80, 0x84, 0x33, 0x80,
	0x08, 0xd5, 0x47, 0x79, 0x99, 0xe6, 0x6a, 0xfb, 0x80, 0xbc, 0x29, 0xb4, 0xec, 0x4d, 0xfa, 0xf7,
	0x9c, 0xd9, 0xbb, 0xaf, 0x67, 0x11, 0x57, 0xf1, 0xea, 0x7a, 0x12, 0x88, 0xd4, 0xdb, 0xed, 0x76,
	0xb1, 0x7c, 0x73, 0x7e, 0xfe, 0xda, 0x0b, 0x44, 0x9a, 0x8a, 0xec, 0x55, 0x24, 0xf3, 0xc0, 0x8b,
	0x84, 0x57, 0xa5, 0x7a, 0xfb, 0xff, 0xd0, 0x75, 0xcb, 0xfc, 0x85, 0xde, 0xfe, 0x0a, 0x00, 0x00,
	0xff, 0xff, 0x5b, 0xe1, 0x26, 0x4c, 0xa0, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// VideoExtServiceClient is the client API for VideoExtService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type VideoExtServiceClient interface {
	Create(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error)
	Get(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error)
	GetOrEmpty(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error)
	Update(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error)
}

type videoExtServiceClient struct {
	cc *grpc.ClientConn
}

func NewVideoExtServiceClient(cc *grpc.ClientConn) VideoExtServiceClient {
	return &videoExtServiceClient{cc}
}

func (c *videoExtServiceClient) Create(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error) {
	out := new(VideoExt)
	err := c.cc.Invoke(ctx, "/services.VideoExtService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *videoExtServiceClient) Get(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error) {
	out := new(VideoExt)
	err := c.cc.Invoke(ctx, "/services.VideoExtService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *videoExtServiceClient) GetOrEmpty(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error) {
	out := new(VideoExt)
	err := c.cc.Invoke(ctx, "/services.VideoExtService/getOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *videoExtServiceClient) Update(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*VideoExt, error) {
	out := new(VideoExt)
	err := c.cc.Invoke(ctx, "/services.VideoExtService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// VideoExtServiceServer is the server API for VideoExtService service.
type VideoExtServiceServer interface {
	Create(context.Context, *VideoExt) (*VideoExt, error)
	Get(context.Context, *VideoExt) (*VideoExt, error)
	GetOrEmpty(context.Context, *VideoExt) (*VideoExt, error)
	Update(context.Context, *VideoExt) (*VideoExt, error)
}

// UnimplementedVideoExtServiceServer can be embedded to have forward compatible implementations.
type UnimplementedVideoExtServiceServer struct {
}

func (*UnimplementedVideoExtServiceServer) Create(ctx context.Context, req *VideoExt) (*VideoExt, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedVideoExtServiceServer) Get(ctx context.Context, req *VideoExt) (*VideoExt, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedVideoExtServiceServer) GetOrEmpty(ctx context.Context, req *VideoExt) (*VideoExt, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrEmpty not implemented")
}
func (*UnimplementedVideoExtServiceServer) Update(ctx context.Context, req *VideoExt) (*VideoExt, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}

func RegisterVideoExtServiceServer(s *grpc.Server, srv VideoExtServiceServer) {
	s.RegisterService(&_VideoExtService_serviceDesc, srv)
}

func _VideoExtService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VideoExt)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VideoExtServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.VideoExtService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VideoExtServiceServer).Create(ctx, req.(*VideoExt))
	}
	return interceptor(ctx, in, info, handler)
}

func _VideoExtService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VideoExt)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VideoExtServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.VideoExtService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VideoExtServiceServer).Get(ctx, req.(*VideoExt))
	}
	return interceptor(ctx, in, info, handler)
}

func _VideoExtService_GetOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VideoExt)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VideoExtServiceServer).GetOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.VideoExtService/GetOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VideoExtServiceServer).GetOrEmpty(ctx, req.(*VideoExt))
	}
	return interceptor(ctx, in, info, handler)
}

func _VideoExtService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(VideoExt)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(VideoExtServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.VideoExtService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(VideoExtServiceServer).Update(ctx, req.(*VideoExt))
	}
	return interceptor(ctx, in, info, handler)
}

var _VideoExtService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.VideoExtService",
	HandlerType: (*VideoExtServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _VideoExtService_Create_Handler,
		},
		{
			MethodName: "get",
			Handler:    _VideoExtService_Get_Handler,
		},
		{
			MethodName: "getOrEmpty",
			Handler:    _VideoExtService_GetOrEmpty_Handler,
		},
		{
			MethodName: "update",
			Handler:    _VideoExtService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "videoext/videoext.proto",
}
