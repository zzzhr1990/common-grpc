// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user/cloudstore.proto

package cloudstore

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
	common "github.com/zzzhr1990/common-grpc/go/common"
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
	return fileDescriptor_f06902e6e603ff15, []int{0}
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
	return fileDescriptor_f06902e6e603ff15, []int{1}
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

func init() { proto.RegisterFile("user/cloudstore.proto", fileDescriptor_f06902e6e603ff15) }

var fileDescriptor_f06902e6e603ff15 = []byte{
	// 470 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x9c, 0x53, 0x41, 0x6f, 0xd3, 0x30,
	0x14, 0x5e, 0x96, 0xb6, 0xeb, 0x5e, 0xa1, 0x30, 0x6b, 0x20, 0x2b, 0x07, 0x14, 0xf5, 0x94, 0x03,
	0x34, 0xb0, 0x49, 0xa0, 0xee, 0x04, 0xab, 0x06, 0x3b, 0x20, 0x21, 0xa5, 0x70, 0xe1, 0x82, 0x5c,
	0xe7, 0x91, 0x58, 0x4b, 0xe2, 0xc8, 0x76, 0x36, 0xa5, 0xff, 0x81, 0x3f, 0xcc, 0x09, 0xd9, 0x69,
	0xd5, 0x0a, 0x0a, 0xd2, 0x38, 0xf5, 0x7b, 0x9f, 0xbf, 0xef, 0xf3, 0x7b, 0x8d, 0x1f, 0x3c, 0x69,
	0x34, 0xaa, 0x98, 0x17, 0xb2, 0x49, 0xb5, 0x91, 0x0a, 0xa7, 0xb5, 0x92, 0x46, 0x92, 0xa1, 0x46,
	0x75, 0x2b, 0x38, 0xea, 0x20, 0xe0, 0xb2, 0x2c, 0x65, 0x15, 0x77, 0x3f, 0xdf, 0xb0, 0x32, 0xc2,
	0xb4, 0x9d, 0x6a, 0xf2, 0xf3, 0x10, 0x60, 0x6e, 0xad, 0x0b, 0x6b, 0x25, 0x04, 0x7a, 0x39, 0xd3,
	0x39, 0xf5, 0x42, 0x2f, 0x3a, 0x4e, 0x1c, 0xb6, 0x9c, 0x16, 0x2b, 0xa4, 0x87, 0xa1, 0x17, 0xf5,
	0x12, 0x87, 0x2d, 0x57, 0x8a, 0x12, 0xa9, 0xdf, 0xe9, 0x2c, 0x26, 0xcf, 0x00, 0x9a, 0xba, 0x90,
	0x2c, 0xfd, 0xa2, 0x51, 0xd1, 0x5e, 0xe8, 0x45, 0x7e, 0xb2, 0xc3, 0x90, 0x53, 0xe8, 0x73, 0x63,
	0x4d, 0x7d, 0x77, 0xd4, 0x15, 0xe4, 0x39, 0x9c, 0x48, 0x25, 0x32, 0x51, 0xb1, 0x82, 0xbd, 0x17,
	0x05, 0x56, 0xac, 0x44, 0x3a, 0x70, 0xb1, 0x7f, 0x1e, 0xd8, 0x0c, 0x37, 0x23, 0x3d, 0x0a, 0xbd,
	0xa8, 0x9f, 0x74, 0x05, 0x79, 0x0a, 0x83, 0x65, 0xc3, 0x6f, 0xd0, 0xd0, 0xa1, 0x33, 0xae, 0x2b,
	0xf2, 0x18, 0xfc, 0x1b, 0x6c, 0xe9, 0xb1, 0x23, 0x2d, 0xb4, 0x7d, 0x9b, 0xb6, 0x46, 0x0a, 0xce,
	0xee, 0x30, 0xa1, 0x70, 0x54, 0x2b, 0xbc, 0x15, 0x78, 0x47, 0x47, 0xa1, 0x17, 0x0d, 0x93, 0x4d,
	0x49, 0x42, 0x18, 0xad, 0xe1, 0x67, 0x6b, 0x7a, 0xe0, 0x4c, 0xbb, 0x94, 0xcd, 0xfb, 0x5e, 0xb0,
	0x8c, 0x3e, 0xec, 0xf2, 0x2c, 0x26, 0x11, 0x3c, 0x4a, 0xe5, 0x5d, 0x65, 0xe7, 0x7e, 0x97, 0xa6,
	0x0a, 0xb5, 0xa6, 0x63, 0xd7, 0xc1, 0xef, 0xf4, 0xe4, 0x02, 0xc6, 0xdb, 0xff, 0xfe, 0xa3, 0xd0,
	0x86, 0x44, 0xd0, 0x4b, 0x99, 0x61, 0xd4, 0x0b, 0xfd, 0x68, 0x74, 0x76, 0x3a, 0xdd, 0x7c, 0xc3,
	0xe9, 0x56, 0x97, 0x38, 0xc5, 0xd9, 0x0f, 0x1f, 0x4e, 0xb6, 0xe4, 0xa2, 0xd3, 0x91, 0xd7, 0x30,
	0xe0, 0x0a, 0x99, 0x41, 0xb2, 0xd7, 0x1b, 0xec, 0x65, 0x27, 0x07, 0x64, 0x0e, 0xa3, 0x25, 0x33,
	0x3c, 0x9f, 0x77, 0x66, 0xba, 0x4f, 0x66, 0x1b, 0x0c, 0xfe, 0x7a, 0x32, 0x39, 0x20, 0xe7, 0xe0,
	0x67, 0x68, 0xee, 0x79, 0xf3, 0x5b, 0x18, 0xba, 0x9b, 0x3f, 0xa0, 0xf9, 0xcf, 0x6b, 0xaf, 0x61,
	0xbc, 0x49, 0xb8, 0x6c, 0xaf, 0xed, 0x8b, 0x0d, 0xb6, 0xea, 0x85, 0x51, 0xa2, 0xca, 0xac, 0xf2,
	0xca, 0x3d, 0xfb, 0x7f, 0x26, 0x5d, 0x00, 0x64, 0x68, 0x3e, 0xa9, 0xab, 0xb2, 0x36, 0xed, 0xfd,
	0xe6, 0xb8, 0x9c, 0x7d, 0x7d, 0x93, 0x09, 0x93, 0x37, 0xcb, 0x29, 0x97, 0x65, 0xbc, 0x5a, 0xad,
	0x72, 0xf5, 0x6a, 0x36, 0x7b, 0xb9, 0x5e, 0xba, 0x17, 0x99, 0xaa, 0x79, 0x9c, 0xc9, 0x78, 0x63,
	0xde, 0xd9, 0xd7, 0xe5, 0xc0, 0xad, 0xe2, 0xf9, 0xaf, 0x00, 0x00, 0x00, 0xff, 0xff, 0xbc, 0x11,
	0xa5, 0xdd, 0xc9, 0x03, 0x00, 0x00,
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
	Metadata: "user/cloudstore.proto",
}
