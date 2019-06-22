// Code generated by protoc-gen-go. DO NOT EDIT.
// source: share/share.proto

package fileshare

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

// FC
type FileShare struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime                 string   `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	UserIdentity         int64    `protobuf:"varint,4,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	Ctime                int64    `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Name                 string   `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	Flag                 int32    `protobuf:"varint,7,opt,name=flag,proto3" json:"flag,omitempty"`
	PasswordEnabled      bool     `protobuf:"varint,8,opt,name=passwordEnabled,proto3" json:"passwordEnabled,omitempty"`
	Password             string   `protobuf:"bytes,9,opt,name=password,proto3" json:"password,omitempty"`
	ExpireEnabled        bool     `protobuf:"varint,10,opt,name=expireEnabled,proto3" json:"expireEnabled,omitempty"`
	Expire               int64    `protobuf:"varint,11,opt,name=expire,proto3" json:"expire,omitempty"`
	CopyCount            int64    `protobuf:"varint,12,opt,name=copyCount,proto3" json:"copyCount,omitempty"`
	CopyCountLimit       int64    `protobuf:"varint,13,opt,name=copyCountLimit,proto3" json:"copyCountLimit,omitempty"`
	CopyCountEnabled     bool     `protobuf:"varint,14,opt,name=copyCountEnabled,proto3" json:"copyCountEnabled,omitempty"`
	Status               int32    `protobuf:"varint,15,opt,name=status,proto3" json:"status,omitempty"`
	UserName             string   `protobuf:"bytes,16,opt,name=userName,proto3" json:"userName,omitempty"`
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

func (m *FileShare) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
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

func (m *FileShare) GetCopyCountLimit() int64 {
	if m != nil {
		return m.CopyCountLimit
	}
	return 0
}

func (m *FileShare) GetCopyCountEnabled() bool {
	if m != nil {
		return m.CopyCountEnabled
	}
	return false
}

func (m *FileShare) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *FileShare) GetUserName() string {
	if m != nil {
		return m.UserName
	}
	return ""
}

type ShareSaveRequest struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity         int64    `protobuf:"varint,2,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	SavePath             string   `protobuf:"bytes,3,opt,name=savePath,proto3" json:"savePath,omitempty"`
	SaveIdentity         string   `protobuf:"bytes,4,opt,name=saveIdentity,proto3" json:"saveIdentity,omitempty"`
	Password             string   `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ShareSaveRequest) Reset()         { *m = ShareSaveRequest{} }
func (m *ShareSaveRequest) String() string { return proto.CompactTextString(m) }
func (*ShareSaveRequest) ProtoMessage()    {}
func (*ShareSaveRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_fa89f5b0d847a47e, []int{1}
}

func (m *ShareSaveRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ShareSaveRequest.Unmarshal(m, b)
}
func (m *ShareSaveRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ShareSaveRequest.Marshal(b, m, deterministic)
}
func (m *ShareSaveRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ShareSaveRequest.Merge(m, src)
}
func (m *ShareSaveRequest) XXX_Size() int {
	return xxx_messageInfo_ShareSaveRequest.Size(m)
}
func (m *ShareSaveRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ShareSaveRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ShareSaveRequest proto.InternalMessageInfo

func (m *ShareSaveRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *ShareSaveRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *ShareSaveRequest) GetSavePath() string {
	if m != nil {
		return m.SavePath
	}
	return ""
}

func (m *ShareSaveRequest) GetSaveIdentity() string {
	if m != nil {
		return m.SaveIdentity
	}
	return ""
}

func (m *ShareSaveRequest) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func init() {
	proto.RegisterType((*FileShare)(nil), "services.FileShare")
	proto.RegisterType((*ShareSaveRequest)(nil), "services.ShareSaveRequest")
}

func init() { proto.RegisterFile("share/share.proto", fileDescriptor_fa89f5b0d847a47e) }

var fileDescriptor_fa89f5b0d847a47e = []byte{
	// 491 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0x5d, 0xab, 0xd3, 0x4c,
	0x10, 0x3e, 0x39, 0xfd, 0x78, 0xdb, 0x79, 0xcf, 0x47, 0x5d, 0x0f, 0xb2, 0x04, 0x2f, 0x4a, 0x10,
	0x09, 0x82, 0x8d, 0x9f, 0x60, 0x41, 0xbc, 0x38, 0x52, 0x41, 0x10, 0x95, 0xf4, 0xce, 0x1b, 0xd9,
	0xa6, 0x73, 0xd2, 0x85, 0x24, 0x1b, 0x77, 0x37, 0xd5, 0xf6, 0x47, 0xf9, 0x87, 0xfc, 0x1b, 0xfe,
	0x00, 0xd9, 0xdd, 0x26, 0x25, 0xb5, 0x0a, 0xde, 0xb4, 0xf3, 0x3c, 0xf3, 0x91, 0x99, 0x79, 0x76,
	0xe0, 0x96, 0x5a, 0x31, 0x89, 0x91, 0xfd, 0x9d, 0x94, 0x52, 0x68, 0x41, 0x06, 0x0a, 0xe5, 0x9a,
	0x27, 0xa8, 0x7c, 0x3f, 0x11, 0x79, 0x2e, 0x8a, 0xc8, 0xfd, 0x7d, 0xc6, 0x42, 0x73, 0xbd, 0x71,
	0x51, 0xc1, 0x8f, 0x0e, 0x0c, 0xdf, 0xf0, 0x0c, 0xe7, 0x26, 0x93, 0xf8, 0x30, 0xe0, 0x4b, 0xe7,
	0xa7, 0xde, 0xd8, 0x0b, 0x87, 0x71, 0x83, 0x09, 0x81, 0xae, 0xe2, 0x5b, 0xa4, 0xa7, 0x63, 0x2f,
	0xec, 0xc4, 0xd6, 0x36, 0x5c, 0xce, 0x73, 0xa4, 0x1d, 0x1b, 0x6b, 0x6d, 0x12, 0xc0, 0x59, 0xa5,
	0x50, 0xbe, 0xad, 0xeb, 0x74, 0x6d, 0x7c, 0x8b, 0x23, 0x57, 0xd0, 0x4b, 0xb4, 0x49, 0xec, 0x59,
	0xa7, 0x03, 0xa6, 0x5a, 0xc1, 0x72, 0xa4, 0x7d, 0x57, 0xcd, 0xd8, 0x86, 0xbb, 0xc9, 0x58, 0x4a,
	0xff, 0x1b, 0x7b, 0x61, 0x2f, 0xb6, 0x36, 0x09, 0xe1, 0xb2, 0x64, 0x4a, 0x7d, 0x15, 0x72, 0x39,
	0x2b, 0xd8, 0x22, 0xc3, 0x25, 0x1d, 0x8c, 0xbd, 0x70, 0x10, 0x1f, 0xd2, 0x66, 0x9e, 0x9a, 0xa2,
	0x43, 0x37, 0x4f, 0x8d, 0xc9, 0x3d, 0x38, 0xc7, 0x6f, 0x25, 0x97, 0x58, 0xd7, 0x00, 0x5b, 0xa3,
	0x4d, 0x92, 0x3b, 0xd0, 0x77, 0x04, 0xfd, 0xdf, 0xb6, 0xba, 0x43, 0xe4, 0x2e, 0x0c, 0x13, 0x51,
	0x6e, 0x5e, 0x8b, 0xaa, 0xd0, 0xf4, 0xcc, 0xba, 0xf6, 0x04, 0xb9, 0x0f, 0x17, 0x0d, 0x78, 0xc7,
	0x73, 0xae, 0xe9, 0xb9, 0x0d, 0x39, 0x60, 0xc9, 0x03, 0x18, 0x35, 0x4c, 0xdd, 0xc6, 0x85, 0x6d,
	0xe3, 0x37, 0xde, 0x74, 0xa2, 0x34, 0xd3, 0x95, 0xa2, 0x97, 0x76, 0x17, 0x3b, 0x64, 0x66, 0x34,
	0xbb, 0x7d, 0x6f, 0x36, 0x37, 0x72, 0x33, 0xd6, 0x38, 0xf8, 0xee, 0xc1, 0xc8, 0x2a, 0x3b, 0x67,
	0x6b, 0x8c, 0xf1, 0x4b, 0x85, 0x4a, 0xff, 0x55, 0xe4, 0x43, 0xf1, 0x4e, 0x8f, 0x88, 0xe7, 0xc3,
	0x40, 0xb1, 0x35, 0x7e, 0x64, 0x7a, 0xb5, 0x13, 0xbe, 0xc1, 0x26, 0xdf, 0xd8, 0x2d, 0xf1, 0x87,
	0x71, 0x8b, 0x6b, 0x89, 0xd2, 0x6b, 0x8b, 0xf2, 0xe4, 0xa7, 0x07, 0xa3, 0xe6, 0x39, 0xce, 0xdd,
	0x03, 0x26, 0xcf, 0xa0, 0x9f, 0x48, 0x64, 0x1a, 0xc9, 0xed, 0x49, 0xfd, 0xa8, 0x27, 0x4d, 0x94,
	0x7f, 0x8c, 0x0c, 0x4e, 0xc8, 0x73, 0xe8, 0x27, 0xac, 0x48, 0x30, 0x3b, 0x9e, 0x75, 0xb5, 0x27,
	0xaf, 0x85, 0xc8, 0x66, 0xb6, 0xb7, 0xe0, 0x84, 0xbc, 0x00, 0x48, 0x51, 0x7f, 0x90, 0xb3, 0xbc,
	0xd4, 0x9b, 0x7f, 0xfa, 0xe0, 0x14, 0xba, 0x66, 0x4e, 0xe2, 0xef, 0xdd, 0x87, 0xbb, 0xff, 0x43,
	0xea, 0xf5, 0xab, 0x4f, 0x2f, 0x53, 0xae, 0x57, 0xd5, 0x62, 0x92, 0x88, 0x3c, 0xda, 0x6e, 0xb7,
	0x2b, 0xf9, 0x78, 0x3a, 0x7d, 0xb4, 0xbb, 0xd8, 0x87, 0xa9, 0x2c, 0x93, 0x28, 0x15, 0x51, 0x9d,
	0xeb, 0xee, 0x3c, 0xba, 0xe1, 0x19, 0x5a, 0x6b, 0xd1, 0xb7, 0xc7, 0xfc, 0xf4, 0x57, 0x00, 0x00,
	0x00, 0xff, 0xff, 0xc2, 0x26, 0x6c, 0x7a, 0x07, 0x04, 0x00, 0x00,
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
	Cancel(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*common.BoolEntity, error)
	GetOrEmpty(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error)
	Save(ctx context.Context, in *ShareSaveRequest, opts ...grpc.CallOption) (*FileShare, error)
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

func (c *fileShareServiceClient) Cancel(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.FileShareService/cancel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileShareServiceClient) GetOrEmpty(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/getOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileShareServiceClient) Save(ctx context.Context, in *ShareSaveRequest, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/save", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileShareServiceServer is the server API for FileShareService service.
type FileShareServiceServer interface {
	Create(context.Context, *FileShare) (*FileShare, error)
	Cancel(context.Context, *FileShare) (*common.BoolEntity, error)
	GetOrEmpty(context.Context, *FileShare) (*FileShare, error)
	Save(context.Context, *ShareSaveRequest) (*FileShare, error)
}

// UnimplementedFileShareServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFileShareServiceServer struct {
}

func (*UnimplementedFileShareServiceServer) Create(ctx context.Context, req *FileShare) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedFileShareServiceServer) Cancel(ctx context.Context, req *FileShare) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Cancel not implemented")
}
func (*UnimplementedFileShareServiceServer) GetOrEmpty(ctx context.Context, req *FileShare) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrEmpty not implemented")
}
func (*UnimplementedFileShareServiceServer) Save(ctx context.Context, req *ShareSaveRequest) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Save not implemented")
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

func _FileShareService_Cancel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Cancel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Cancel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Cancel(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileShareService_GetOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).GetOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/GetOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).GetOrEmpty(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileShareService_Save_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareSaveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Save(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Save",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Save(ctx, req.(*ShareSaveRequest))
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
		{
			MethodName: "cancel",
			Handler:    _FileShareService_Cancel_Handler,
		},
		{
			MethodName: "getOrEmpty",
			Handler:    _FileShareService_GetOrEmpty_Handler,
		},
		{
			MethodName: "save",
			Handler:    _FileShareService_Save_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "share/share.proto",
}
