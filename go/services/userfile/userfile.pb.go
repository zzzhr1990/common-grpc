// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user/userfile.proto

package userfile

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
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

type GrpcUserFile struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	StoreIdentity        string   `protobuf:"bytes,2,opt,name=storeIdentity,proto3" json:"storeIdentity,omitempty"`
	UserIdentity         uint64   `protobuf:"varint,3,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	Path                 string   `protobuf:"bytes,4,opt,name=path,proto3" json:"path,omitempty"`
	Name                 string   `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Ext                  string   `protobuf:"bytes,6,opt,name=ext,proto3" json:"ext,omitempty"`
	Size                 uint64   `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	Parent               string   `protobuf:"bytes,8,opt,name=parent,proto3" json:"parent,omitempty"`
	Type                 int32    `protobuf:"varint,9,opt,name=type,proto3" json:"type,omitempty"`
	IsDirectory          bool     `protobuf:"varint,10,opt,name=isDirectory,proto3" json:"isDirectory,omitempty"`
	Atime                int64    `protobuf:"varint,11,opt,name=atime,proto3" json:"atime,omitempty"`
	Ctime                int64    `protobuf:"varint,12,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Mtime                int64    `protobuf:"varint,13,opt,name=mtime,proto3" json:"mtime,omitempty"`
	Version              uint32   `protobuf:"varint,14,opt,name=version,proto3" json:"version,omitempty"`
	Locking              bool     `protobuf:"varint,15,opt,name=locking,proto3" json:"locking,omitempty"`
	Op                   uint32   `protobuf:"varint,16,opt,name=op,proto3" json:"op,omitempty"`
	IgnoreCase           bool     `protobuf:"varint,17,opt,name=ignoreCase,proto3" json:"ignoreCase,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *GrpcUserFile) Reset()         { *m = GrpcUserFile{} }
func (m *GrpcUserFile) String() string { return proto.CompactTextString(m) }
func (*GrpcUserFile) ProtoMessage()    {}
func (*GrpcUserFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{0}
}

func (m *GrpcUserFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_GrpcUserFile.Unmarshal(m, b)
}
func (m *GrpcUserFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_GrpcUserFile.Marshal(b, m, deterministic)
}
func (m *GrpcUserFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_GrpcUserFile.Merge(m, src)
}
func (m *GrpcUserFile) XXX_Size() int {
	return xxx_messageInfo_GrpcUserFile.Size(m)
}
func (m *GrpcUserFile) XXX_DiscardUnknown() {
	xxx_messageInfo_GrpcUserFile.DiscardUnknown(m)
}

var xxx_messageInfo_GrpcUserFile proto.InternalMessageInfo

func (m *GrpcUserFile) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *GrpcUserFile) GetStoreIdentity() string {
	if m != nil {
		return m.StoreIdentity
	}
	return ""
}

func (m *GrpcUserFile) GetUserIdentity() uint64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *GrpcUserFile) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *GrpcUserFile) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *GrpcUserFile) GetExt() string {
	if m != nil {
		return m.Ext
	}
	return ""
}

func (m *GrpcUserFile) GetSize() uint64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *GrpcUserFile) GetParent() string {
	if m != nil {
		return m.Parent
	}
	return ""
}

func (m *GrpcUserFile) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *GrpcUserFile) GetIsDirectory() bool {
	if m != nil {
		return m.IsDirectory
	}
	return false
}

func (m *GrpcUserFile) GetAtime() int64 {
	if m != nil {
		return m.Atime
	}
	return 0
}

func (m *GrpcUserFile) GetCtime() int64 {
	if m != nil {
		return m.Ctime
	}
	return 0
}

func (m *GrpcUserFile) GetMtime() int64 {
	if m != nil {
		return m.Mtime
	}
	return 0
}

func (m *GrpcUserFile) GetVersion() uint32 {
	if m != nil {
		return m.Version
	}
	return 0
}

func (m *GrpcUserFile) GetLocking() bool {
	if m != nil {
		return m.Locking
	}
	return false
}

func (m *GrpcUserFile) GetOp() uint32 {
	if m != nil {
		return m.Op
	}
	return 0
}

func (m *GrpcUserFile) GetIgnoreCase() bool {
	if m != nil {
		return m.IgnoreCase
	}
	return false
}

func init() {
	proto.RegisterType((*GrpcUserFile)(nil), "services.GrpcUserFile")
}

func init() { proto.RegisterFile("user/userfile.proto", fileDescriptor_d6806edd9a7324ee) }

var fileDescriptor_d6806edd9a7324ee = []byte{
	// 404 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x92, 0xcd, 0x6e, 0xd4, 0x30,
	0x14, 0x85, 0xf1, 0x64, 0x66, 0x9a, 0xde, 0xf9, 0xa1, 0xdc, 0xa2, 0xca, 0xea, 0x02, 0x45, 0x23,
	0x16, 0xd9, 0x90, 0xf0, 0x23, 0x84, 0xba, 0x42, 0x2a, 0x50, 0xc4, 0x0a, 0x29, 0x88, 0x0d, 0xbb,
	0xd4, 0x5c, 0x32, 0x16, 0x93, 0xd8, 0xb2, 0xdd, 0x8a, 0xe4, 0xc1, 0x78, 0x20, 0x9e, 0x04, 0xd9,
	0x21, 0x51, 0xba, 0x60, 0x81, 0xd8, 0x44, 0xe7, 0x7c, 0x39, 0x3e, 0x5e, 0x1c, 0xc3, 0xe9, 0x8d,
	0x25, 0x93, 0xfb, 0xcf, 0x37, 0x79, 0xa0, 0x4c, 0x1b, 0xe5, 0x14, 0xc6, 0x96, 0xcc, 0xad, 0x14,
	0x64, 0x77, 0x3f, 0x23, 0x58, 0xbf, 0x37, 0x5a, 0x7c, 0xb6, 0x64, 0xae, 0xe4, 0x81, 0xf0, 0x1c,
	0x62, 0xf9, 0x95, 0x1a, 0x27, 0x5d, 0xcb, 0x59, 0xc2, 0xd2, 0xe3, 0x62, 0xf4, 0xf8, 0x18, 0x36,
	0xd6, 0x29, 0x43, 0x1f, 0x86, 0xc0, 0x2c, 0x04, 0xee, 0x42, 0xdc, 0xc1, 0xda, 0x5f, 0x37, 0x86,
	0xa2, 0x84, 0xa5, 0xf3, 0xe2, 0x0e, 0x43, 0x84, 0xb9, 0x2e, 0xdd, 0x9e, 0xcf, 0x43, 0x41, 0xd0,
	0x9e, 0x35, 0x65, 0x4d, 0x7c, 0xd1, 0x33, 0xaf, 0xf1, 0x04, 0x22, 0xfa, 0xe1, 0xf8, 0x32, 0x20,
	0x2f, 0x7d, 0xca, 0xca, 0x8e, 0xf8, 0x51, 0x68, 0x0d, 0x1a, 0xcf, 0x60, 0xa9, 0x4b, 0x43, 0x8d,
	0xe3, 0x71, 0x08, 0xfe, 0x71, 0x3e, 0xeb, 0x5a, 0x4d, 0xfc, 0x38, 0x61, 0xe9, 0xa2, 0x08, 0x1a,
	0x13, 0x58, 0x49, 0xfb, 0x56, 0x1a, 0x12, 0x4e, 0x99, 0x96, 0x43, 0xc2, 0xd2, 0xb8, 0x98, 0x22,
	0x7c, 0x08, 0x8b, 0xd2, 0xc9, 0x9a, 0xf8, 0x2a, 0x61, 0x69, 0x54, 0xf4, 0xc6, 0x53, 0x11, 0xe8,
	0xba, 0xa7, 0x62, 0xa0, 0x75, 0xa0, 0x9b, 0x9e, 0x06, 0x83, 0x1c, 0x8e, 0x6e, 0xc9, 0x58, 0xa9,
	0x1a, 0xbe, 0x4d, 0x58, 0xba, 0x29, 0x06, 0xeb, 0xff, 0x1c, 0x94, 0xf8, 0x2e, 0x9b, 0x8a, 0xdf,
	0x0f, 0x37, 0x0f, 0x16, 0xb7, 0x30, 0x53, 0x9a, 0x9f, 0x84, 0xf8, 0x4c, 0x69, 0x7c, 0x04, 0x20,
	0xab, 0x46, 0x19, 0x7a, 0x53, 0x5a, 0xe2, 0x0f, 0x42, 0x78, 0x42, 0x9e, 0xff, 0x62, 0x70, 0x3a,
	0x1d, 0xee, 0x53, 0xbf, 0x28, 0x5e, 0xc2, 0x56, 0x18, 0x2a, 0x1d, 0x8d, 0x8b, 0x9e, 0x65, 0xc3,
	0xda, 0xd9, 0xf4, 0xc0, 0xf9, 0x5f, 0xf8, 0xee, 0x1e, 0xbe, 0x86, 0x55, 0x45, 0xee, 0x3f, 0x0a,
	0xae, 0x00, 0x27, 0x05, 0x1f, 0xcd, 0xbb, 0x5a, 0xbb, 0xf6, 0xdf, 0x7b, 0x2e, 0x5f, 0x7d, 0x79,
	0x59, 0x49, 0xb7, 0xbf, 0xb9, 0xce, 0x84, 0xaa, 0xf3, 0xae, 0xeb, 0xf6, 0xe6, 0xd9, 0xc5, 0xc5,
	0xd3, 0x5c, 0xa8, 0xba, 0x56, 0xcd, 0x93, 0xca, 0x68, 0x91, 0x57, 0x2a, 0x1f, 0x8e, 0x8f, 0xcf,
	0xfc, 0x7a, 0x19, 0xde, 0xf9, 0x8b, 0xdf, 0x01, 0x00, 0x00, 0xff, 0xff, 0x80, 0xf8, 0x8a, 0x41,
	0xfe, 0x02, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// GrpcUserFileServiceClient is the client API for GrpcUserFileService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type GrpcUserFileServiceClient interface {
	// rpc createUser (GrpcUser) returns (BoolEntity) {}
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	CreateUserFile(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error)
	GetUserFile(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error)
	GetUserFileOrEmpty(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error)
}

type grpcUserFileServiceClient struct {
	cc *grpc.ClientConn
}

func NewGrpcUserFileServiceClient(cc *grpc.ClientConn) GrpcUserFileServiceClient {
	return &grpcUserFileServiceClient{cc}
}

func (c *grpcUserFileServiceClient) CreateUserFile(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error) {
	out := new(GrpcUserFile)
	err := c.cc.Invoke(ctx, "/services.GrpcUserFileService/createUserFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserFileServiceClient) GetUserFile(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error) {
	out := new(GrpcUserFile)
	err := c.cc.Invoke(ctx, "/services.GrpcUserFileService/getUserFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *grpcUserFileServiceClient) GetUserFileOrEmpty(ctx context.Context, in *GrpcUserFile, opts ...grpc.CallOption) (*GrpcUserFile, error) {
	out := new(GrpcUserFile)
	err := c.cc.Invoke(ctx, "/services.GrpcUserFileService/getUserFileOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// GrpcUserFileServiceServer is the server API for GrpcUserFileService service.
type GrpcUserFileServiceServer interface {
	// rpc createUser (GrpcUser) returns (BoolEntity) {}
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	CreateUserFile(context.Context, *GrpcUserFile) (*GrpcUserFile, error)
	GetUserFile(context.Context, *GrpcUserFile) (*GrpcUserFile, error)
	GetUserFileOrEmpty(context.Context, *GrpcUserFile) (*GrpcUserFile, error)
}

func RegisterGrpcUserFileServiceServer(s *grpc.Server, srv GrpcUserFileServiceServer) {
	s.RegisterService(&_GrpcUserFileService_serviceDesc, srv)
}

func _GrpcUserFileService_CreateUserFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserFileServiceServer).CreateUserFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserFileService/CreateUserFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserFileServiceServer).CreateUserFile(ctx, req.(*GrpcUserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserFileService_GetUserFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserFileServiceServer).GetUserFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserFileService/GetUserFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserFileServiceServer).GetUserFile(ctx, req.(*GrpcUserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _GrpcUserFileService_GetUserFileOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(GrpcUserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(GrpcUserFileServiceServer).GetUserFileOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.GrpcUserFileService/GetUserFileOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(GrpcUserFileServiceServer).GetUserFileOrEmpty(ctx, req.(*GrpcUserFile))
	}
	return interceptor(ctx, in, info, handler)
}

var _GrpcUserFileService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.GrpcUserFileService",
	HandlerType: (*GrpcUserFileServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "createUserFile",
			Handler:    _GrpcUserFileService_CreateUserFile_Handler,
		},
		{
			MethodName: "getUserFile",
			Handler:    _GrpcUserFileService_GetUserFile_Handler,
		},
		{
			MethodName: "getUserFileOrEmpty",
			Handler:    _GrpcUserFileService_GetUserFileOrEmpty_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user/userfile.proto",
}
