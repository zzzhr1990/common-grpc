// Code generated by protoc-gen-go. DO NOT EDIT.
// source: store/cloudstore.proto

package cloudstore

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

type CloudStore struct {
	Hash                 string   `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime                 string   `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	UploadUser           int64    `protobuf:"varint,4,opt,name=upload_user,json=uploadUser,proto3" json:"upload_user,omitempty"`
	Ctime                int64    `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	OriginalalFilename   string   `protobuf:"bytes,6,opt,name=originalal_filename,json=originalalFilename,proto3" json:"originalal_filename,omitempty"`
	Store                int32    `protobuf:"varint,7,opt,name=store,proto3" json:"store,omitempty"`
	Key                  string   `protobuf:"bytes,8,opt,name=key,proto3" json:"key,omitempty"`
	ColdKey              string   `protobuf:"bytes,9,opt,name=cold_key,json=coldKey,proto3" json:"cold_key,omitempty"`
	Type                 int32    `protobuf:"varint,10,opt,name=type,proto3" json:"type,omitempty"`
	Preview              bool     `protobuf:"varint,11,opt,name=preview,proto3" json:"preview,omitempty"`
	PreviewType          int32    `protobuf:"varint,12,opt,name=preview_type,json=previewType,proto3" json:"preview_type,omitempty"`
	Flag                 int32    `protobuf:"varint,13,opt,name=flag,proto3" json:"flag,omitempty"`
	Status               int32    `protobuf:"varint,14,opt,name=status,proto3" json:"status,omitempty"`
	FetchTime            int64    `protobuf:"varint,15,opt,name=fetch_time,json=fetchTime,proto3" json:"fetch_time,omitempty"`
	Md5                  string   `protobuf:"bytes,16,opt,name=md5,proto3" json:"md5,omitempty"`
	Sha1                 string   `protobuf:"bytes,17,opt,name=sha1,proto3" json:"sha1,omitempty"`
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

func (m *CloudStore) GetSize() int64 {
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

func (m *CloudStore) GetOriginalalFilename() string {
	if m != nil {
		return m.OriginalalFilename
	}
	return ""
}

func (m *CloudStore) GetStore() int32 {
	if m != nil {
		return m.Store
	}
	return 0
}

func (m *CloudStore) GetKey() string {
	if m != nil {
		return m.Key
	}
	return ""
}

func (m *CloudStore) GetColdKey() string {
	if m != nil {
		return m.ColdKey
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

func (m *CloudStore) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *CloudStore) GetFetchTime() int64 {
	if m != nil {
		return m.FetchTime
	}
	return 0
}

func (m *CloudStore) GetMd5() string {
	if m != nil {
		return m.Md5
	}
	return ""
}

func (m *CloudStore) GetSha1() string {
	if m != nil {
		return m.Sha1
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
	// 460 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0x94, 0x53, 0x4f, 0x6f, 0xd3, 0x30,
	0x14, 0x5f, 0x48, 0xff, 0xa4, 0xaf, 0x63, 0x74, 0x66, 0x9a, 0xcc, 0x24, 0x44, 0xe8, 0x29, 0x17,
	0x1a, 0xb6, 0x69, 0x93, 0x86, 0x84, 0x40, 0x9b, 0x04, 0x07, 0x38, 0x65, 0xdb, 0x85, 0x4b, 0xe4,
	0x25, 0xaf, 0x89, 0x45, 0x52, 0x47, 0xb6, 0x33, 0xd4, 0x7e, 0x2f, 0xbe, 0x1c, 0x27, 0xe4, 0x97,
	0x56, 0x95, 0x50, 0x39, 0xec, 0xf6, 0x7b, 0xbf, 0x3f, 0xcf, 0xf6, 0x7b, 0x32, 0x1c, 0x1b, 0xab,
	0x34, 0xc6, 0x59, 0xa5, 0xda, 0x9c, 0xe0, 0xac, 0xd1, 0xca, 0x2a, 0x16, 0x18, 0xd4, 0x8f, 0x32,
	0x43, 0x33, 0xfd, 0xed, 0x03, 0xdc, 0x38, 0xf9, 0xd6, 0xc9, 0x8c, 0x41, 0xaf, 0x14, 0xa6, 0xe4,
	0x5e, 0xe8, 0x45, 0xa3, 0x84, 0xb0, 0xe3, 0x8c, 0x5c, 0x21, 0x7f, 0x16, 0x7a, 0x91, 0x9f, 0x10,
	0x76, 0x5c, 0x2d, 0x6b, 0xe4, 0x7e, 0xe7, 0x73, 0x98, 0xbd, 0x81, 0x71, 0xdb, 0x54, 0x4a, 0xe4,
	0x69, 0x6b, 0x50, 0xf3, 0x1e, 0xd9, 0xa1, 0xa3, 0xee, 0x0d, 0x6a, 0x76, 0x04, 0xfd, 0xcc, 0xba,
	0x54, 0x9f, 0xa4, 0xae, 0x60, 0x31, 0xbc, 0x54, 0x5a, 0x16, 0x72, 0x21, 0x2a, 0x51, 0xa5, 0x73,
	0x59, 0xe1, 0x42, 0xd4, 0xc8, 0x07, 0xd4, 0x99, 0x6d, 0xa5, 0x2f, 0x6b, 0xc5, 0xb5, 0xa1, 0xb7,
	0xf0, 0x61, 0xe8, 0x45, 0xfd, 0xa4, 0x2b, 0xd8, 0x04, 0xfc, 0x9f, 0xb8, 0xe4, 0x01, 0xc5, 0x1c,
	0x64, 0xaf, 0x20, 0xc8, 0x54, 0x95, 0xa7, 0x8e, 0x1e, 0x11, 0x3d, 0x74, 0xf5, 0x37, 0x5c, 0xba,
	0xeb, 0xdb, 0x65, 0x83, 0x1c, 0xa8, 0x03, 0x61, 0xc6, 0x61, 0xd8, 0x68, 0x7c, 0x94, 0xf8, 0x8b,
	0x8f, 0x43, 0x2f, 0x0a, 0x92, 0x4d, 0xc9, 0xde, 0xc2, 0xfe, 0x1a, 0xa6, 0x94, 0xda, 0xa7, 0xd4,
	0x78, 0xcd, 0xdd, 0xb9, 0x30, 0x83, 0xde, 0xbc, 0x12, 0x05, 0x7f, 0xde, 0x35, 0x74, 0x98, 0x1d,
	0xc3, 0xc0, 0x58, 0x61, 0x5b, 0xc3, 0x0f, 0x88, 0x5d, 0x57, 0xec, 0x35, 0xc0, 0x1c, 0x6d, 0x56,
	0xa6, 0x34, 0x8b, 0x17, 0x34, 0x8b, 0x11, 0x31, 0x77, 0x6e, 0x1e, 0x13, 0xf0, 0xeb, 0xfc, 0x82,
	0x4f, 0xba, 0x87, 0xd4, 0xf9, 0x05, 0x2d, 0xa0, 0x14, 0xa7, 0xfc, 0xb0, 0x1b, 0xb6, 0xc3, 0xd3,
	0x0f, 0x70, 0xb0, 0x5d, 0xdb, 0x77, 0x69, 0x2c, 0x8b, 0xa0, 0x97, 0x0b, 0x2b, 0xb8, 0x17, 0xfa,
	0xd1, 0xf8, 0xec, 0x68, 0xb6, 0x59, 0xf1, 0x6c, 0xeb, 0x4b, 0xc8, 0x71, 0xf6, 0xc7, 0x83, 0xc3,
	0x2d, 0x79, 0xdb, 0xf9, 0xd8, 0x25, 0x0c, 0x6e, 0x34, 0x0a, 0x8b, 0x6c, 0x67, 0xf6, 0x64, 0x27,
	0x3b, 0xdd, 0x63, 0xe7, 0xe0, 0x7f, 0x45, 0xfb, 0xc4, 0xd0, 0x25, 0x0c, 0xee, 0x9b, 0xfc, 0xe9,
	0x87, 0x7d, 0x86, 0xe0, 0x5a, 0xd8, 0xac, 0x74, 0x27, 0xf2, 0x5d, 0x1e, 0x37, 0x8a, 0x93, 0xff,
	0x2a, 0xd3, 0xbd, 0xeb, 0x4f, 0x3f, 0x3e, 0x16, 0xd2, 0x96, 0xed, 0xc3, 0x2c, 0x53, 0x75, 0xbc,
	0x5a, 0xad, 0x4a, 0x7d, 0x7a, 0x75, 0xf5, 0x3e, 0xce, 0x54, 0x5d, 0xab, 0xc5, 0xbb, 0x42, 0x37,
	0x59, 0x5c, 0xa8, 0x78, 0xd3, 0x20, 0xfe, 0xf7, 0x07, 0x3d, 0x0c, 0xe8, 0x0b, 0x9d, 0xff, 0x0d,
	0x00, 0x00, 0xff, 0xff, 0x42, 0x34, 0xa3, 0xa2, 0x5c, 0x03, 0x00, 0x00,
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
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	Update(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error)
	BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error)
}

type cloudStoreServiceClient struct {
	cc *grpc.ClientConn
}

func NewCloudStoreServiceClient(cc *grpc.ClientConn) CloudStoreServiceClient {
	return &cloudStoreServiceClient{cc}
}

func (c *cloudStoreServiceClient) Create(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) Get(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) Update(ctx context.Context, in *CloudStore, opts ...grpc.CallOption) (*CloudStore, error) {
	out := new(CloudStore)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *cloudStoreServiceClient) BatchGet(ctx context.Context, in *CloudStoreList, opts ...grpc.CallOption) (*CloudStoreList, error) {
	out := new(CloudStoreList)
	err := c.cc.Invoke(ctx, "/services.CloudStoreService/BatchGet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// CloudStoreServiceServer is the server API for CloudStoreService service.
type CloudStoreServiceServer interface {
	Create(context.Context, *CloudStore) (*CloudStore, error)
	// rpc tryCreate (CloudStore) returns (CloudStore) {}
	// rpc batchCreate (CloudStoreList) returns (CloudStoreList) {}
	Get(context.Context, *CloudStore) (*CloudStore, error)
	Update(context.Context, *CloudStore) (*CloudStore, error)
	BatchGet(context.Context, *CloudStoreList) (*CloudStoreList, error)
}

// UnimplementedCloudStoreServiceServer can be embedded to have forward compatible implementations.
type UnimplementedCloudStoreServiceServer struct {
}

func (*UnimplementedCloudStoreServiceServer) Create(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedCloudStoreServiceServer) Get(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedCloudStoreServiceServer) Update(ctx context.Context, req *CloudStore) (*CloudStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedCloudStoreServiceServer) BatchGet(ctx context.Context, req *CloudStoreList) (*CloudStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGet not implemented")
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

func _CloudStoreService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(CloudStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(CloudStoreServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.CloudStoreService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(CloudStoreServiceServer).Update(ctx, req.(*CloudStore))
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

var _CloudStoreService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.CloudStoreService",
	HandlerType: (*CloudStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _CloudStoreService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _CloudStoreService_Get_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _CloudStoreService_Update_Handler,
		},
		{
			MethodName: "BatchGet",
			Handler:    _CloudStoreService_BatchGet_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "store/cloudstore.proto",
}
