// Code generated by protoc-gen-go. DO NOT EDIT.
// source: share/share.proto

package fileshare

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

// FC
type FileShare struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime                 string   `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	User                 int64    `protobuf:"varint,4,opt,name=user,proto3" json:"user,omitempty"`
	Ctime                int64    `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Name                 string   `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	Flag                 int32    `protobuf:"varint,7,opt,name=flag,proto3" json:"flag,omitempty"`
	PasswordEnabled      bool     `protobuf:"varint,8,opt,name=passwordEnabled,proto3" json:"passwordEnabled,omitempty"`
	Password             string   `protobuf:"bytes,9,opt,name=password,proto3" json:"password,omitempty"`
	ExpireEnabled        bool     `protobuf:"varint,10,opt,name=expireEnabled,proto3" json:"expireEnabled,omitempty"`
	Expire               int64    `protobuf:"varint,11,opt,name=expire,proto3" json:"expire,omitempty"`
	CopyCount            int64    `protobuf:"varint,12,opt,name=copyCount,proto3" json:"copyCount,omitempty"`
	CopyCountLeft        int64    `protobuf:"varint,13,opt,name=copyCountLeft,proto3" json:"copyCountLeft,omitempty"`
	CopyCountEnabled     bool     `protobuf:"varint,14,opt,name=copyCountEnabled,proto3" json:"copyCountEnabled,omitempty"`
	Expired              bool     `protobuf:"varint,15,opt,name=expired,proto3" json:"expired,omitempty"`
	ExpicopyExceed       bool     `protobuf:"varint,16,opt,name=expicopyExceed,proto3" json:"expicopyExceed,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *FileShare) Reset()         { *m = FileShare{} }
func (m *FileShare) String() string { return proto.CompactTextString(m) }
func (*FileShare) ProtoMessage()    {}
func (*FileShare) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa89f5b0d847a47e, []int{0}
}

func (m *FileShare) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_FileShare.Unmarshal(m, b)
}
func (m *FileShare) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_FileShare.Marshal(b, m, deterministic)
}
func (m *FileShare) XXX_Merge(src proto.Message) {
	xxx_messageInfo_FileShare.Merge(m, src)
}
func (m *FileShare) XXX_Size() int {
	return xxx_messageInfo_FileShare.Size(m)
}
func (m *FileShare) XXX_DiscardUnknown() {
	xxx_messageInfo_FileShare.DiscardUnknown(m)
}

var xxx_messageInfo_FileShare proto.InternalMessageInfo

func (m *FileShare) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *FileShare) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *FileShare) GetMime() string {
	if m != nil {
		return m.Mime
	}
	return ""
}

func (m *FileShare) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *FileShare) GetCtime() int64 {
	if m != nil {
		return m.Ctime
	}
	return 0
}

func (m *FileShare) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *FileShare) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *FileShare) GetPasswordEnabled() bool {
	if m != nil {
		return m.PasswordEnabled
	}
	return false
}

func (m *FileShare) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *FileShare) GetExpireEnabled() bool {
	if m != nil {
		return m.ExpireEnabled
	}
	return false
}

func (m *FileShare) GetExpire() int64 {
	if m != nil {
		return m.Expire
	}
	return 0
}

func (m *FileShare) GetCopyCount() int64 {
	if m != nil {
		return m.CopyCount
	}
	return 0
}

func (m *FileShare) GetCopyCountLeft() int64 {
	if m != nil {
		return m.CopyCountLeft
	}
	return 0
}

func (m *FileShare) GetCopyCountEnabled() bool {
	if m != nil {
		return m.CopyCountEnabled
	}
	return false
}

func (m *FileShare) GetExpired() bool {
	if m != nil {
		return m.Expired
	}
	return false
}

func (m *FileShare) GetExpicopyExceed() bool {
	if m != nil {
		return m.ExpicopyExceed
	}
	return false
}

func init() {
	proto.RegisterType((*FileShare)(nil), "services.FileShare")
}

func init() { proto.RegisterFile("share/share.proto", fileDescriptor_fa89f5b0d847a47e) }

var fileDescriptor_fa89f5b0d847a47e = []byte{
	// 371 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x6c, 0x92, 0xcd, 0x6a, 0xe3, 0x30,
	0x14, 0x85, 0xc7, 0x93, 0xc4, 0xb1, 0x35, 0x93, 0x9f, 0xd1, 0x0c, 0x83, 0x08, 0x5d, 0x98, 0x50,
	0x8a, 0x29, 0xd4, 0xee, 0xdf, 0x26, 0x50, 0xba, 0x68, 0x49, 0xe9, 0xa2, 0x2b, 0x67, 0xd7, 0x9d,
	0x23, 0xdf, 0x38, 0x02, 0xdb, 0x32, 0xb2, 0xd2, 0x26, 0x7e, 0xd1, 0xbe, 0x4e, 0x91, 0x54, 0xbb,
	0x24, 0xed, 0xc6, 0x9c, 0xf3, 0xe9, 0xe8, 0xfa, 0x80, 0x2e, 0xfa, 0x53, 0xad, 0x63, 0x01, 0xa1,
	0xfe, 0x06, 0xa5, 0xe0, 0x92, 0x63, 0xa7, 0x02, 0xf1, 0xc2, 0x28, 0x54, 0xd3, 0xb7, 0x0e, 0x72,
	0x1f, 0x58, 0x06, 0x0b, 0x75, 0x8a, 0x27, 0xc8, 0x61, 0x09, 0x14, 0x92, 0xc9, 0x1d, 0xb1, 0x3c,
	0xcb, 0x77, 0xa3, 0xd6, 0x63, 0x8c, 0xba, 0x15, 0xab, 0x81, 0xfc, 0xf4, 0x2c, 0xbf, 0x13, 0x69,
	0xad, 0x58, 0xce, 0x72, 0x20, 0x1d, 0x9d, 0xd5, 0x5a, 0xb1, 0x4d, 0x05, 0x82, 0x74, 0x4d, 0x4e,
	0x69, 0xfc, 0x0f, 0xf5, 0xa8, 0x54, 0xc1, 0x9e, 0x86, 0xc6, 0xa8, 0x64, 0x11, 0xe7, 0x40, 0x6c,
	0x73, 0x5b, 0x69, 0xc5, 0x56, 0x59, 0x9c, 0x92, 0xbe, 0x67, 0xf9, 0xbd, 0x48, 0x6b, 0xec, 0xa3,
	0x51, 0x19, 0x57, 0xd5, 0x2b, 0x17, 0xc9, 0xbc, 0x88, 0x97, 0x19, 0x24, 0xc4, 0xf1, 0x2c, 0xdf,
	0x89, 0x0e, 0xb1, 0xea, 0xdf, 0x20, 0xe2, 0x9a, 0xfe, 0x8d, 0xc7, 0xc7, 0x68, 0x00, 0xdb, 0x92,
	0x09, 0x68, 0x66, 0x20, 0x3d, 0x63, 0x1f, 0xe2, 0xff, 0xc8, 0x36, 0x80, 0xfc, 0xd2, 0x55, 0x3f,
	0x1c, 0x3e, 0x42, 0x2e, 0xe5, 0xe5, 0xee, 0x9e, 0x6f, 0x0a, 0x49, 0x7e, 0xeb, 0xa3, 0x4f, 0xa0,
	0x66, 0xb7, 0xe6, 0x09, 0x56, 0x92, 0x0c, 0x74, 0x62, 0x1f, 0xe2, 0x53, 0x34, 0x6e, 0x41, 0x53,
	0x62, 0xa8, 0x4b, 0x7c, 0xe1, 0x98, 0xa0, 0xbe, 0xf9, 0x73, 0x42, 0x46, 0x3a, 0xd2, 0x58, 0x7c,
	0x82, 0x86, 0x4a, 0xaa, 0x1b, 0xf3, 0x2d, 0x05, 0x48, 0xc8, 0x58, 0x07, 0x0e, 0xe8, 0xe5, 0x23,
	0x1a, 0xb7, 0x0f, 0xbb, 0x30, 0xcf, 0x8d, 0xaf, 0x91, 0x4d, 0x05, 0xc4, 0x12, 0xf0, 0xdf, 0xa0,
	0x59, 0x81, 0xa0, 0x4d, 0x4d, 0xbe, 0x83, 0xd3, 0x1f, 0x77, 0xb7, 0xcf, 0x37, 0x29, 0x93, 0xeb,
	0xcd, 0x32, 0xa0, 0x3c, 0x0f, 0xeb, 0xba, 0x5e, 0x8b, 0x8b, 0xd9, 0xec, 0x3c, 0xa4, 0x3c, 0xcf,
	0x79, 0x71, 0x96, 0x8a, 0x92, 0x86, 0x29, 0x0f, 0x9b, 0xbb, 0x66, 0xd3, 0xc2, 0x15, 0xcb, 0x40,
	0xab, 0xa5, 0xad, 0x97, 0xee, 0xea, 0x3d, 0x00, 0x00, 0xff, 0xff, 0x61, 0xd7, 0x64, 0x08, 0x89,
	0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FileShareServiceClient is the client API for FileShareService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileShareServiceClient interface {
	Create(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error)
}

type fileShareServiceClient struct {
	cc *grpc.ClientConn
}

func NewFileShareServiceClient(cc *grpc.ClientConn) FileShareServiceClient {
	return &fileShareServiceClient{cc}
}

func (c *fileShareServiceClient) Create(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileShareServiceServer is the server API for FileShareService service.
type FileShareServiceServer interface {
	Create(context.Context, *FileShare) (*FileShare, error)
}

// UnimplementedFileShareServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFileShareServiceServer struct {
}

func (*UnimplementedFileShareServiceServer) Create(ctx context.Context, req *FileShare) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}

func RegisterFileShareServiceServer(s *grpc.Server, srv FileShareServiceServer) {
	s.RegisterService(&_FileShareService_serviceDesc, srv)
}

func _FileShareService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Create(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileShareService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.FileShareService",
	HandlerType: (*FileShareServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _FileShareService_Create_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "share/share.proto",
}
