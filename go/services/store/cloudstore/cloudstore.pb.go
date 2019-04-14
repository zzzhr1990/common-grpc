// Code generated by protoc-gen-go. DO NOT EDIT.
// source: store/cloudstore.proto

package cloudstore

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

type CloudStore struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size                 uint64   `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime                 string   `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	UploadUser           int64    `protobuf:"varint,4,opt,name=uploadUser,proto3" json:"uploadUser,omitempty"`
	Ctime                int64    `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	OriginalaFilename    string   `protobuf:"bytes,6,opt,name=originalaFilename,proto3" json:"originalaFilename,omitempty"`
	Store                int32    `protobuf:"varint,7,opt,name=store,proto3" json:"store,omitempty"`
	Bucket               string   `protobuf:"bytes,8,opt,name=bucket,proto3" json:"bucket,omitempty"`
	Key                  string   `protobuf:"bytes,9,opt,name=key,proto3" json:"key,omitempty"`
	Type                 int32    `protobuf:"varint,10,opt,name=type,proto3" json:"type,omitempty"`
	Preview              bool     `protobuf:"varint,11,opt,name=preview,proto3" json:"preview,omitempty"`
	PreviewType          int32    `protobuf:"varint,12,opt,name=previewType,proto3" json:"previewType,omitempty"`
	Flag                 int32    `protobuf:"varint,13,opt,name=flag,proto3" json:"flag,omitempty"`
	DownloadAddress      string   `protobuf:"bytes,14,opt,name=downloadAddress,proto3" json:"downloadAddress,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *CloudStore) Reset()         { *m = CloudStore{} }
func (m *CloudStore) String() string { return proto.CompactTextString(m) }
func (*CloudStore) ProtoMessage()    {}
func (*CloudStore) Descriptor() ([]byte, []int) {
	return fileDescriptor_e406880dd1e5ea92, []int{0}
}

func (m *CloudStore) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CloudStore.Unmarshal(m, b)
}
func (m *CloudStore) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CloudStore.Marshal(b, m, deterministic)
}
func (m *CloudStore) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CloudStore.Merge(m, src)
}
func (m *CloudStore) XXX_Size() int {
	return xxx_messageInfo_CloudStore.Size(m)
}
func (m *CloudStore) XXX_DiscardUnknown() {
	xxx_messageInfo_CloudStore.DiscardUnknown(m)
}

var xxx_messageInfo_CloudStore proto.InternalMessageInfo

func (m *CloudStore) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *CloudStore) GetSize() uint64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *CloudStore) GetMime() string {
	if m != nil {
		return m.Mime
	}
	return ""
}

func (m *CloudStore) GetUploadUser() int64 {
	if m != nil {
		return m.UploadUser
	}
	return 0
}

func (m *CloudStore) GetCtime() int64 {
	if m != nil {
		return m.Ctime
	}
	return 0
}

func (m *CloudStore) GetOriginalaFilename() string {
	if m != nil {
		return m.OriginalaFilename
	}
	return ""
}

func (m *CloudStore) GetStore() int32 {
	if m != nil {
		return m.Store
	}
	return 0
}

func (m *CloudStore) GetBucket() string {
	if m != nil {
		return m.Bucket
	}
	return ""
}

func (m *CloudStore) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *CloudStore) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *CloudStore) GetPreview() bool {
	if m != nil {
		return m.Preview
	}
	return false
}

func (m *CloudStore) GetPreviewType() int32 {
	if m != nil {
		return m.PreviewType
	}
	return 0
}

func (m *CloudStore) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *CloudStore) GetDownloadAddress() string {
	if m != nil {
		return m.DownloadAddress
	}
	return ""
}

type CloudStoreList struct {
	Data                 []*CloudStore `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}      `json:"-"`
	XXX_unrecognized     []byte        `json:"-"`
	XXX_sizecache        int32         `json:"-"`
}

func (m *CloudStoreList) Reset()         { *m = CloudStoreList{} }
func (m *CloudStoreList) String() string { return proto.CompactTextString(m) }
func (*CloudStoreList) ProtoMessage()    {}
func (*CloudStoreList) Descriptor() ([]byte, []int) {
	return fileDescriptor_e406880dd1e5ea92, []int{1}
}

func (m *CloudStoreList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_CloudStoreList.Unmarshal(m, b)
}
func (m *CloudStoreList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_CloudStoreList.Marshal(b, m, deterministic)
}
func (m *CloudStoreList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_CloudStoreList.Merge(m, src)
}
func (m *CloudStoreList) XXX_Size() int {
	return xxx_messageInfo_CloudStoreList.Size(m)
}
func (m *CloudStoreList) XXX_DiscardUnknown() {
	xxx_messageInfo_CloudStoreList.DiscardUnknown(m)
}

var xxx_messageInfo_CloudStoreList proto.InternalMessageInfo

func (m *CloudStoreList) GetData() []*CloudStore {
	if m != nil {
		return m.Data
	}
	return nil
}

func init() {
	proto.RegisterType((*CloudStore)(nil), "services.CloudStore")
	proto.RegisterType((*CloudStoreList)(nil), "services.CloudStoreList")
}

func init() { proto.RegisterFile("store/cloudstore.proto", fileDescriptor_e406880dd1e5ea92) }

var fileDescriptor_e406880dd1e5ea92 = []byte{
	// 471 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x53, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0x5e, 0x96, 0xb6, 0xeb, 0x5e, 0xa1, 0x30, 0x6b, 0x9a, 0xac, 0x1c, 0x50, 0xd4, 0x53, 0x0e,
	0xd0, 0xc0, 0x26, 0x21, 0x6d, 0x12, 0x02, 0x56, 0x0d, 0x76, 0x40, 0x42, 0x4a, 0xe1, 0xc2, 0x05,
	0xb9, 0xce, 0x23, 0xb1, 0x96, 0xc4, 0x91, 0xed, 0x6e, 0x4a, 0xff, 0x03, 0x7f, 0x98, 0x13, 0xb2,
	0xd3, 0x2a, 0xd3, 0x28, 0x48, 0xe5, 0xd4, 0xef, 0x7d, 0xfe, 0xbe, 0xcf, 0xef, 0x35, 0x7e, 0x70,
	0xa2, 0x8d, 0x54, 0x18, 0xf3, 0x42, 0x2e, 0x53, 0x07, 0xa7, 0xb5, 0x92, 0x46, 0x92, 0xa1, 0x46,
	0x75, 0x2b, 0x38, 0xea, 0x20, 0xe0, 0xb2, 0x2c, 0x65, 0x15, 0xb7, 0x3f, 0xdf, 0xb1, 0x32, 0xc2,
	0x34, 0xad, 0x6a, 0xf2, 0x6b, 0x1f, 0x60, 0x66, 0xad, 0x73, 0x6b, 0x25, 0x04, 0x7a, 0x39, 0xd3,
	0x39, 0xf5, 0x42, 0x2f, 0x3a, 0x4c, 0x1c, 0xb6, 0x9c, 0x16, 0x2b, 0xa4, 0xfb, 0xa1, 0x17, 0xf5,
	0x12, 0x87, 0x2d, 0x57, 0x8a, 0x12, 0xa9, 0xdf, 0xea, 0x2c, 0x26, 0xcf, 0x00, 0x96, 0x75, 0x21,
	0x59, 0xfa, 0x55, 0xa3, 0xa2, 0xbd, 0xd0, 0x8b, 0xfc, 0xe4, 0x1e, 0x43, 0x8e, 0xa1, 0xcf, 0x8d,
	0x35, 0xf5, 0xdd, 0x51, 0x5b, 0x90, 0xe7, 0x70, 0x24, 0x95, 0xc8, 0x44, 0xc5, 0x0a, 0xf6, 0x41,
	0x14, 0x58, 0xb1, 0x12, 0xe9, 0xc0, 0xc5, 0xfe, 0x79, 0x60, 0x33, 0xdc, 0x8c, 0xf4, 0x20, 0xf4,
	0xa2, 0x7e, 0xd2, 0x16, 0xe4, 0x04, 0x06, 0x8b, 0x25, 0xbf, 0x41, 0x43, 0x87, 0xce, 0xb8, 0xae,
	0xc8, 0x53, 0xf0, 0x6f, 0xb0, 0xa1, 0x87, 0x8e, 0xb4, 0xd0, 0xf6, 0x6d, 0x9a, 0x1a, 0x29, 0x38,
	0xbb, 0xc3, 0x84, 0xc2, 0x41, 0xad, 0xf0, 0x56, 0xe0, 0x1d, 0x1d, 0x85, 0x5e, 0x34, 0x4c, 0x36,
	0x25, 0x09, 0x61, 0xb4, 0x86, 0x5f, 0xac, 0xe9, 0x91, 0x33, 0xdd, 0xa7, 0x6c, 0xde, 0x8f, 0x82,
	0x65, 0xf4, 0x71, 0x9b, 0x67, 0x31, 0x89, 0xe0, 0x49, 0x2a, 0xef, 0x2a, 0x3b, 0xf7, 0xfb, 0x34,
	0x55, 0xa8, 0x35, 0x1d, 0xbb, 0x0e, 0x1e, 0xd2, 0x93, 0x0b, 0x18, 0x77, 0xff, 0xfd, 0x27, 0xa1,
	0x0d, 0x89, 0xa0, 0x97, 0x32, 0xc3, 0xa8, 0x17, 0xfa, 0xd1, 0xe8, 0xf4, 0x78, 0xba, 0xf9, 0x86,
	0xd3, 0x4e, 0x97, 0x38, 0xc5, 0xe9, 0x4f, 0x1f, 0x8e, 0x3a, 0x72, 0xde, 0xea, 0xc8, 0x6b, 0x18,
	0x70, 0x85, 0xcc, 0x20, 0xd9, 0xea, 0x0d, 0xb6, 0xb2, 0x93, 0x3d, 0x32, 0x83, 0xd1, 0x82, 0x19,
	0x9e, 0xcf, 0x5a, 0x33, 0xdd, 0x26, 0xb3, 0x0d, 0x06, 0x7f, 0x3d, 0x99, 0xec, 0x91, 0x33, 0xf0,
	0x33, 0x34, 0x3b, 0xde, 0xfc, 0x0e, 0x86, 0xee, 0xe6, 0x8f, 0x68, 0xfe, 0xf3, 0xda, 0x6b, 0x18,
	0x6f, 0x12, 0x2e, 0x9b, 0x6b, 0xfb, 0x62, 0x83, 0x4e, 0x3d, 0x37, 0x4a, 0x54, 0x99, 0x55, 0x5e,
	0xb9, 0x67, 0xff, 0xcf, 0xa4, 0x0b, 0x80, 0x0c, 0xcd, 0x67, 0x75, 0x55, 0xd6, 0xa6, 0xd9, 0x6d,
	0x8e, 0xcb, 0xb7, 0xdf, 0xde, 0x64, 0xc2, 0xe4, 0xcb, 0xc5, 0x94, 0xcb, 0x32, 0x5e, 0xad, 0x56,
	0xb9, 0x7a, 0x75, 0x7e, 0xfe, 0x72, 0xbd, 0x74, 0x2f, 0x32, 0x55, 0xf3, 0x38, 0x93, 0xf1, 0xc6,
	0x1c, 0x3f, 0xdc, 0xda, 0xc5, 0xc0, 0x2d, 0xe4, 0xd9, 0xef, 0x00, 0x00, 0x00, 0xff, 0xff, 0x51,
	0x23, 0x52, 0x94, 0xd0, 0x03, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// CloudStoreServiceClient is the client API for CloudStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type CloudStoreServiceClient interface {
	Create(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	BatchCreate(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error)
	Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error)
	BatchGetByHash(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*CloudStoreList, error)
	GetOrEmpty(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
}

type cloudStoreServiceClient struct {
	cc *grpc.ClientConn
}

func NewCloudStoreServiceClient(cc *grpc.ClientConn) CloudStoreServiceClient {
	return &cloudStoreServiceClient{cc}
}

func (c *cloudStoreServiceClient) Create(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchCreate(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/batchCreate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/batchGet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchGetByHash(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/batchGetByHash", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) GetOrEmpty(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/getOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CloudStoreServiceServer is the server API for CloudStoreService service.
type CloudStoreServiceServer interface {
	Create(context.Context, *CloudStore) (*CloudStore, error)
	BatchCreate(context.Context, *CloudStoreList) (*CloudStoreList, error)
	Get(context.Context, *CloudStore) (*CloudStore, error)
	BatchGet(context.Context, *CloudStoreList) (*CloudStoreList, error)
	BatchGetByHash(context.Context, *common.StringListEntity) (*CloudStoreList, error)
	GetOrEmpty(context.Context, *CloudStore) (*CloudStore, error)
}

// UnimplementedCloudStoreServiceServer can be embedded to have forward compatible implementations.
type UnimplementedCloudStoreServiceServer struct {
}

func (*UnimplementedCloudStoreServiceServer) Create(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedCloudStoreServiceServer) BatchCreate(ctx context.Context, req *CloudStoreList) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchCreate not implemented")
}
func (*UnimplementedCloudStoreServiceServer) Get(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedCloudStoreServiceServer) BatchGet(ctx context.Context, req *CloudStoreList) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGet not implemented")
}
func (*UnimplementedCloudStoreServiceServer) BatchGetByHash(ctx context.Context, req *common.StringListEntity) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGetByHash not implemented")
}
func (*UnimplementedCloudStoreServiceServer) GetOrEmpty(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrEmpty not implemented")
}

func RegisterCloudStoreServiceServer(s *grpc.Server, srv CloudStoreServiceServer) {
	s.RegisterService(&_CloudStoreService_serviceDesc, srv)
}

func _CloudStoreService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Create(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_BatchCreate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStoreList)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).BatchCreate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/BatchCreate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).BatchCreate(ctx, req.(*CloudStoreList))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Get(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_BatchGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStoreList)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).BatchGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/BatchGet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).BatchGet(ctx, req.(*CloudStoreList))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_BatchGetByHash_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(common.StringListEntity)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).BatchGetByHash(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/BatchGetByHash",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).BatchGetByHash(ctx, req.(*common.StringListEntity))
	}
	return interceptor(ctx, in, info, handler)
}

func _CloudStoreService_GetOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).GetOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/GetOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).GetOrEmpty(ctx, req.(*CloudStore))
	}
	return interceptor(ctx, in, info, handler)
}

var _CloudStoreService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.CloudStoreService",
	HandlerType: (*CloudStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _CloudStoreService_Create_Handler,
		},
		{
			MethodName: "batchCreate",
			Handler:    _CloudStoreService_BatchCreate_Handler,
		},
		{
			MethodName: "get",
			Handler:    _CloudStoreService_Get_Handler,
		},
		{
			MethodName: "batchGet",
			Handler:    _CloudStoreService_BatchGet_Handler,
		},
		{
			MethodName: "batchGetByHash",
			Handler:    _CloudStoreService_BatchGetByHash_Handler,
		},
		{
			MethodName: "getOrEmpty",
			Handler:    _CloudStoreService_GetOrEmpty_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "store/cloudstore.proto",
}