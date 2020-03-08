// Code generated by protoc-gen-go. DO NOT EDIT.
// source: store/preview.proto

package preview

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

type MediaPreview struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Type                 int32    `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Status               int32    `protobuf:"varint,3,opt,name=status,proto3" json:"status,omitempty"`
	Title                string   `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`
	Duration             int64    `protobuf:"varint,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Width                int32    `protobuf:"varint,6,opt,name=width,proto3" json:"width,omitempty"`
	Height               int32    `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	SourceWidth          int32    `protobuf:"varint,8,opt,name=source_width,json=sourceWidth,proto3" json:"source_width,omitempty"`
	SourceHeight         int32    `protobuf:"varint,9,opt,name=source_height,json=sourceHeight,proto3" json:"source_height,omitempty"`
	AccessCode           string   `protobuf:"bytes,10,opt,name=access_code,json=accessCode,proto3" json:"access_code,omitempty"`
	AccessAddress        string   `protobuf:"bytes,11,opt,name=access_address,json=accessAddress,proto3" json:"access_address,omitempty"`
	Screenshot           string   `protobuf:"bytes,12,opt,name=screenshot,proto3" json:"screenshot,omitempty"`
	Subtitle             string   `protobuf:"bytes,13,opt,name=subtitle,proto3" json:"subtitle,omitempty"`
	File                 string   `protobuf:"bytes,14,opt,name=file,proto3" json:"file,omitempty"`
	Rotate               int32    `protobuf:"varint,15,opt,name=rotate,proto3" json:"rotate,omitempty"`
	Addon                string   `protobuf:"bytes,16,opt,name=addon,proto3" json:"addon,omitempty"`
	CreateAddress        string   `protobuf:"bytes,17,opt,name=create_address,json=createAddress,proto3" json:"create_address,omitempty"`
	Flag                 int32    `protobuf:"varint,18,opt,name=flag,proto3" json:"flag,omitempty"`
	CreateTime           int64    `protobuf:"varint,19,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	UpdateTime           int64    `protobuf:"varint,20,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *MediaPreview) Reset()         { *m = MediaPreview{} }
func (m *MediaPreview) String() string { return proto.CompactTextString(m) }
func (*MediaPreview) ProtoMessage()    {}
func (*MediaPreview) Descriptor() ([]byte, []int) {
	return fileDescriptor_4742a5b8366d6439, []int{0}
}

func (m *MediaPreview) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_MediaPreview.Unmarshal(m, b)
}
func (m *MediaPreview) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_MediaPreview.Marshal(b, m, deterministic)
}
func (m *MediaPreview) XXX_Merge(src proto.Message) {
	xxx_messageInfo_MediaPreview.Merge(m, src)
}
func (m *MediaPreview) XXX_Size() int {
	return xxx_messageInfo_MediaPreview.Size(m)
}
func (m *MediaPreview) XXX_DiscardUnknown() {
	xxx_messageInfo_MediaPreview.DiscardUnknown(m)
}

var xxx_messageInfo_MediaPreview proto.InternalMessageInfo

func (m *MediaPreview) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *MediaPreview) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *MediaPreview) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *MediaPreview) GetTitle() string {
	if m != nil {
		return m.Title
	}
	return ""
}

func (m *MediaPreview) GetDuration() int64 {
	if m != nil {
		return m.Duration
	}
	return 0
}

func (m *MediaPreview) GetWidth() int32 {
	if m != nil {
		return m.Width
	}
	return 0
}

func (m *MediaPreview) GetHeight() int32 {
	if m != nil {
		return m.Height
	}
	return 0
}

func (m *MediaPreview) GetSourceWidth() int32 {
	if m != nil {
		return m.SourceWidth
	}
	return 0
}

func (m *MediaPreview) GetSourceHeight() int32 {
	if m != nil {
		return m.SourceHeight
	}
	return 0
}

func (m *MediaPreview) GetAccessCode() string {
	if m != nil {
		return m.AccessCode
	}
	return ""
}

func (m *MediaPreview) GetAccessAddress() string {
	if m != nil {
		return m.AccessAddress
	}
	return ""
}

func (m *MediaPreview) GetScreenshot() string {
	if m != nil {
		return m.Screenshot
	}
	return ""
}

func (m *MediaPreview) GetSubtitle() string {
	if m != nil {
		return m.Subtitle
	}
	return ""
}

func (m *MediaPreview) GetFile() string {
	if m != nil {
		return m.File
	}
	return ""
}

func (m *MediaPreview) GetRotate() int32 {
	if m != nil {
		return m.Rotate
	}
	return 0
}

func (m *MediaPreview) GetAddon() string {
	if m != nil {
		return m.Addon
	}
	return ""
}

func (m *MediaPreview) GetCreateAddress() string {
	if m != nil {
		return m.CreateAddress
	}
	return ""
}

func (m *MediaPreview) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *MediaPreview) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *MediaPreview) GetUpdateTime() int64 {
	if m != nil {
		return m.UpdateTime
	}
	return 0
}

func init() {
	proto.RegisterType((*MediaPreview)(nil), "services.MediaPreview")
}

func init() {
	proto.RegisterFile("store/preview.proto", fileDescriptor_4742a5b8366d6439)
}

var fileDescriptor_4742a5b8366d6439 = []byte{
	// 453 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x53, 0x4d, 0x6f, 0x13, 0x31,
	0x10, 0x65, 0x69, 0xb2, 0xa4, 0x93, 0x0f, 0xc0, 0xad, 0x2a, 0xab, 0x07, 0x08, 0x45, 0x48, 0xb9,
	0x90, 0xe5, 0xe3, 0x80, 0x1a, 0x71, 0x81, 0x1e, 0xe0, 0x82, 0x84, 0x02, 0x08, 0x89, 0x4b, 0xe5,
	0xd8, 0xc3, 0xae, 0xa5, 0x6c, 0xbc, 0xb2, 0x67, 0x5b, 0x91, 0x7f, 0xc6, 0x91, 0x7f, 0x86, 0xec,
	0xd9, 0x04, 0x38, 0x70, 0x80, 0xdb, 0xbc, 0xb7, 0xef, 0xbd, 0x1d, 0x8f, 0xc7, 0x70, 0x14, 0xc8,
	0x79, 0x2c, 0x1a, 0x8f, 0x57, 0x16, 0xaf, 0xe7, 0x8d, 0x77, 0xe4, 0xc4, 0x20, 0xa0, 0xbf, 0xb2,
	0x1a, 0xc3, 0xd9, 0xf7, 0x1e, 0x8c, 0xde, 0xa1, 0xb1, 0xea, 0x3d, 0x0b, 0x84, 0x80, 0x5e, 0xa5,
	0x42, 0x25, 0xb3, 0x69, 0x36, 0x3b, 0x5c, 0xa6, 0x3a, 0x72, 0xf4, 0xad, 0x41, 0x79, 0x73, 0x9a,
	0xcd, 0xfa, 0xcb, 0x54, 0x8b, 0x13, 0xc8, 0x03, 0x29, 0x6a, 0x83, 0x3c, 0x48, 0x6c, 0x87, 0xc4,
	0x31, 0xf4, 0xc9, 0xd2, 0x1a, 0x65, 0x2f, 0x05, 0x30, 0x10, 0xa7, 0x30, 0x30, 0xad, 0x57, 0x64,
	0xdd, 0x46, 0xf6, 0xa7, 0xd9, 0xec, 0x60, 0xb9, 0xc7, 0xd1, 0x71, 0x6d, 0x0d, 0x55, 0x32, 0x4f,
	0x41, 0x0c, 0x62, 0x7e, 0x85, 0xb6, 0xac, 0x48, 0xde, 0xe2, 0x7c, 0x46, 0xe2, 0x01, 0x8c, 0x82,
	0x6b, 0xbd, 0xc6, 0x4b, 0x36, 0x0d, 0xd2, 0xd7, 0x21, 0x73, 0x9f, 0x93, 0xf5, 0x21, 0x8c, 0x3b,
	0x49, 0x97, 0x70, 0x98, 0x34, 0x9d, 0xef, 0x2d, 0xe7, 0xdc, 0x87, 0xa1, 0xd2, 0x1a, 0x43, 0xb8,
	0xd4, 0xce, 0xa0, 0x84, 0xd4, 0x2d, 0x30, 0x75, 0xe1, 0x0c, 0x8a, 0x47, 0x30, 0xe9, 0x04, 0xca,
	0x18, 0x8f, 0x21, 0xc8, 0x61, 0xd2, 0x8c, 0x99, 0x7d, 0xc5, 0xa4, 0xb8, 0x07, 0x10, 0xb4, 0x47,
	0xdc, 0x84, 0xca, 0x91, 0x1c, 0x71, 0xcc, 0x2f, 0x26, 0x9e, 0x3c, 0xb4, 0x2b, 0x1e, 0xc9, 0x38,
	0x7d, 0xdd, 0xe3, 0x38, 0xd7, 0xaf, 0x76, 0x8d, 0x72, 0xc2, 0xb3, 0x8e, 0x75, 0x3c, 0xb7, 0x77,
	0xa4, 0x08, 0xe5, 0x6d, 0x3e, 0x37, 0xa3, 0x38, 0x25, 0x65, 0x8c, 0xdb, 0xc8, 0x3b, 0x3c, 0xd7,
	0x04, 0x62, 0x93, 0xda, 0xa3, 0x22, 0xdc, 0x37, 0x79, 0x97, 0x9b, 0x64, 0x76, 0xd7, 0x64, 0xfc,
	0xd1, 0x5a, 0x95, 0x52, 0xf0, 0x05, 0xc6, 0x3a, 0x0e, 0xa0, 0xb3, 0x92, 0xad, 0x51, 0x1e, 0xa5,
	0x5b, 0x01, 0xa6, 0x3e, 0xda, 0x1a, 0xa3, 0xa0, 0x6d, 0xcc, 0x5e, 0x70, 0xcc, 0x02, 0xa6, 0xa2,
	0xe0, 0xd9, 0x8f, 0x0c, 0x26, 0xdd, 0xda, 0x7c, 0xe0, 0x7d, 0x12, 0x0b, 0xc8, 0x2f, 0x52, 0x82,
	0x38, 0x99, 0xef, 0x76, 0x6c, 0xfe, 0xfb, 0x7e, 0x9d, 0xfe, 0x85, 0x3f, 0xbb, 0x21, 0x5e, 0xc0,
	0xc1, 0x1b, 0xa4, 0xff, 0x30, 0x2e, 0x20, 0xff, 0x94, 0xba, 0xfa, 0x77, 0xef, 0xeb, 0x97, 0x5f,
	0x16, 0xa5, 0xa5, 0xaa, 0x5d, 0xcd, 0xb5, 0xab, 0x8b, 0xed, 0x76, 0x5b, 0xf9, 0xa7, 0xe7, 0xe7,
	0x4f, 0x0a, 0xed, 0xea, 0xda, 0x6d, 0x1e, 0x97, 0xbe, 0xd1, 0x45, 0xe9, 0x8a, 0x9d, 0xbd, 0xf8,
	0xe3, 0x35, 0xad, 0xf2, 0xf4, 0x9c, 0x9e, 0xff, 0x0c, 0x00, 0x00, 0xff, 0xff, 0x2d, 0xc1, 0x24,
	0x92, 0x65, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// PreviewServiceClient is the client API for PreviewService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type PreviewServiceClient interface {
	Create(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error)
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error)
	Update(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error)
}

type previewServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewPreviewServiceClient(cc grpc.ClientConnInterface) PreviewServiceClient {
	return &previewServiceClient{cc}
}

func (c *previewServiceClient) Create(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error) {
	out := new(MediaPreview)
	err := c.cc.Invoke(ctx, "/services.PreviewService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *previewServiceClient) Get(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error) {
	out := new(MediaPreview)
	err := c.cc.Invoke(ctx, "/services.PreviewService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *previewServiceClient) Update(ctx context.Context, in *MediaPreview, opts ...grpc.CallOption) (*MediaPreview, error) {
	out := new(MediaPreview)
	err := c.cc.Invoke(ctx, "/services.PreviewService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// PreviewServiceServer is the server API for PreviewService service.
type PreviewServiceServer interface {
	Create(context.Context, *MediaPreview) (*MediaPreview, error)
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(context.Context, *MediaPreview) (*MediaPreview, error)
	Update(context.Context, *MediaPreview) (*MediaPreview, error)
}

// UnimplementedPreviewServiceServer can be embedded to have forward compatible implementations.
type UnimplementedPreviewServiceServer struct {
}

func (*UnimplementedPreviewServiceServer) Create(ctx context.Context, req *MediaPreview) (*MediaPreview, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedPreviewServiceServer) Get(ctx context.Context, req *MediaPreview) (*MediaPreview, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedPreviewServiceServer) Update(ctx context.Context, req *MediaPreview) (*MediaPreview, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}

func RegisterPreviewServiceServer(s *grpc.Server, srv PreviewServiceServer) {
	s.RegisterService(&_PreviewService_serviceDesc, srv)
}

func _PreviewService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MediaPreview)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PreviewServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.PreviewService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PreviewServiceServer).Create(ctx, req.(*MediaPreview))
	}
	return interceptor(ctx, in, info, handler)
}

func _PreviewService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MediaPreview)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PreviewServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.PreviewService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PreviewServiceServer).Get(ctx, req.(*MediaPreview))
	}
	return interceptor(ctx, in, info, handler)
}

func _PreviewService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(MediaPreview)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(PreviewServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.PreviewService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(PreviewServiceServer).Update(ctx, req.(*MediaPreview))
	}
	return interceptor(ctx, in, info, handler)
}

var _PreviewService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.PreviewService",
	HandlerType: (*PreviewServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _PreviewService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _PreviewService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _PreviewService_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "store/preview.proto",
}
