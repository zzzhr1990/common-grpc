// Code generated by protoc-gen-go. DO NOT EDIT.
// source: ext/video.proto

package video

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

type VideoExt struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Title                string   `protobuf:"bytes,3,opt,name=title,proto3" json:"title,omitempty"`
	Encoder              string   `protobuf:"bytes,4,opt,name=encoder,proto3" json:"encoder,omitempty"`
	Duration             int64    `protobuf:"varint,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Width                int64    `protobuf:"varint,6,opt,name=width,proto3" json:"width,omitempty"`
	Height               int64    `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	PreviewImageKey      string   `protobuf:"bytes,8,opt,name=previewImageKey,proto3" json:"previewImageKey,omitempty"`
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
	return fileDescriptor_6cb22786206a6562, []int{0}
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

func (m *VideoExt) GetPreviewImageKey() string {
	if m != nil {
		return m.PreviewImageKey
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

func init() {
	proto.RegisterType((*VideoExt)(nil), "services.VideoExt")
}

func init() { proto.RegisterFile("ext/video.proto", fileDescriptor_6cb22786206a6562) }

var fileDescriptor_6cb22786206a6562 = []byte{
	// 425 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x93, 0xc1, 0x6e, 0xd3, 0x40,
	0x10, 0x86, 0x6b, 0xd2, 0xb8, 0xe9, 0x14, 0x1a, 0x34, 0xaa, 0xd0, 0x2a, 0x07, 0x14, 0xe5, 0x80,
	0x72, 0x21, 0x86, 0x82, 0x2a, 0x7a, 0xad, 0x9a, 0x43, 0xc4, 0x81, 0x2a, 0x54, 0x1c, 0xb8, 0x20,
	0xd7, 0x1e, 0xec, 0x95, 0xe2, 0xac, 0xb5, 0x9e, 0xa4, 0x75, 0x9e, 0x91, 0xc7, 0xe0, 0x41, 0xd0,
	0xce, 0xda, 0xad, 0xa9, 0x7a, 0x80, 0x53, 0xe6, 0xff, 0xe6, 0x9f, 0x19, 0x4d, 0x76, 0x0c, 0x43,
	0xba, 0xe3, 0x68, 0xab, 0x53, 0x32, 0xb3, 0xd2, 0x1a, 0x36, 0x38, 0xa8, 0xc8, 0x6e, 0x75, 0x42,
	0xd5, 0x68, 0x94, 0x98, 0xa2, 0x30, 0xeb, 0xc8, 0xff, 0xfc, 0xa0, 0x35, 0x6b, 0xae, 0xbd, 0x6b,
	0xf2, 0xab, 0x07, 0x83, 0x6f, 0xae, 0x6a, 0x7e, 0xc7, 0x88, 0xb0, 0x9f, 0xc7, 0x55, 0xae, 0x82,
	0x71, 0x30, 0x3d, 0x5c, 0x4a, 0xec, 0x58, 0xa5, 0x77, 0xa4, 0x9e, 0x8d, 0x83, 0x69, 0x6f, 0x29,
	0x31, 0x9e, 0x40, 0x9f, 0x35, 0xaf, 0x48, 0xf5, 0xc4, 0xe8, 0x05, 0x2a, 0x38, 0xa0, 0x75, 0x62,
	0x52, 0xb2, 0x6a, 0x5f, 0x78, 0x2b, 0x71, 0x04, 0x83, 0x74, 0x63, 0x63, 0xd6, 0x66, 0xad, 0xfa,
	0xd2, 0xe7, 0x5e, 0xbb, 0x5e, 0xb7, 0x3a, 0xe5, 0x5c, 0x85, 0x92, 0xf0, 0x02, 0x5f, 0x41, 0x98,
	0x93, 0xce, 0x72, 0x56, 0x07, 0x82, 0x1b, 0x85, 0x53, 0x18, 0x96, 0x96, 0xb6, 0x9a, 0x6e, 0x17,
	0x45, 0x9c, 0xd1, 0x67, 0xaa, 0xd5, 0x40, 0x66, 0x3d, 0xc6, 0xf8, 0x1a, 0xa0, 0x41, 0xce, 0x74,
	0x28, 0xa6, 0x0e, 0xc1, 0x31, 0x1c, 0x35, 0xea, 0xba, 0x2e, 0x49, 0xc1, 0x38, 0x98, 0xf6, 0x97,
	0x5d, 0xd4, 0xe9, 0x70, 0xb5, 0xb8, 0x54, 0x47, 0x7f, 0x75, 0xb8, 0x5a, 0x5c, 0xe2, 0x1b, 0x38,
	0x6e, 0xd5, 0x2a, 0xae, 0xdd, 0x94, 0xe7, 0xe2, 0x79, 0x44, 0xdd, 0x2e, 0x15, 0xc7, 0xbc, 0xa9,
	0xd4, 0x0b, 0x19, 0xd2, 0x28, 0xf7, 0xcf, 0xfe, 0x5c, 0xc5, 0x99, 0x3a, 0x16, 0x2a, 0xb1, 0x9b,
	0x99, 0x58, 0x8a, 0x99, 0xae, 0x75, 0x41, 0x6a, 0x28, 0xbb, 0x77, 0x88, 0xcb, 0x6f, 0xca, 0xb4,
	0xcd, 0xbf, 0xf4, 0xf9, 0x07, 0x72, 0xfa, 0x3b, 0x80, 0x61, 0xfb, 0x9c, 0x5f, 0xfd, 0xfb, 0xe3,
	0x47, 0x08, 0x7d, 0x07, 0xc4, 0x59, 0x7b, 0x13, 0xb3, 0xd6, 0x34, 0x3a, 0x79, 0x60, 0x17, 0xc6,
	0xac, 0xe6, 0x72, 0x1c, 0x93, 0x3d, 0x8c, 0xa0, 0x97, 0x11, 0x3f, 0x59, 0xf2, 0x04, 0x9b, 0xec,
	0xe1, 0x19, 0x40, 0x46, 0xfc, 0xc5, 0xce, 0x8b, 0x92, 0xeb, 0xff, 0xa8, 0x3b, 0x85, 0xd0, 0x2f,
	0xf0, 0xef, 0x35, 0x17, 0x9f, 0xbe, 0x9f, 0x65, 0x9a, 0xf3, 0xcd, 0xcd, 0x2c, 0x31, 0x45, 0xb4,
	0xdb, 0xed, 0x72, 0xfb, 0xfe, 0xfc, 0xfc, 0x5d, 0x73, 0xe1, 0x6f, 0x33, 0x5b, 0x26, 0x51, 0x66,
	0xa2, 0xb6, 0x34, 0xba, 0xff, 0x36, 0x6e, 0x42, 0x39, 0xfb, 0x0f, 0x7f, 0x02, 0x00, 0x00, 0xff,
	0xff, 0x88, 0xd5, 0xb7, 0xf6, 0x2f, 0x03, 0x00, 0x00,
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
	Create(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*common.BoolEntity, error)
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

func (c *videoExtServiceClient) Create(ctx context.Context, in *VideoExt, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
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
	Create(context.Context, *VideoExt) (*common.BoolEntity, error)
	Get(context.Context, *VideoExt) (*VideoExt, error)
	GetOrEmpty(context.Context, *VideoExt) (*VideoExt, error)
	Update(context.Context, *VideoExt) (*VideoExt, error)
}

// UnimplementedVideoExtServiceServer can be embedded to have forward compatible implementations.
type UnimplementedVideoExtServiceServer struct {
}

func (*UnimplementedVideoExtServiceServer) Create(ctx context.Context, req *VideoExt) (*common.BoolEntity, error) {
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
	Metadata: "ext/video.proto",
}
