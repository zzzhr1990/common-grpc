// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.22.0
// 	protoc        v3.11.4
// source: offline/parse.proto

package parse

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
	protoreflect "google.golang.org/protobuf/reflect/protoreflect"
	protoimpl "google.golang.org/protobuf/runtime/protoimpl"
	reflect "reflect"
	sync "sync"
)

const (
	// Verify that this generated code is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(20 - protoimpl.MinVersion)
	// Verify that runtime/protoimpl is sufficiently up-to-date.
	_ = protoimpl.EnforceVersion(protoimpl.MaxVersion - 20)
)

// This is a compile-time assertion that a sufficiently up-to-date version
// of the legacy proto package is being used.
const _ = proto.ProtoPackageIsVersion4

type ParseTaskRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TextLink string `protobuf:"bytes,1,opt,name=text_link,json=textLink,proto3" json:"text_link,omitempty"`
	FileHash string `protobuf:"bytes,2,opt,name=file_hash,json=fileHash,proto3" json:"file_hash,omitempty"`
	Username string `protobuf:"bytes,3,opt,name=username,proto3" json:"username,omitempty"`
	Password string `protobuf:"bytes,4,opt,name=password,proto3" json:"password,omitempty"`
	Op       int32  `protobuf:"varint,5,opt,name=op,proto3" json:"op,omitempty"`
}

func (x *ParseTaskRequest) Reset() {
	*x = ParseTaskRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_parse_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ParseTaskRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ParseTaskRequest) ProtoMessage() {}

func (x *ParseTaskRequest) ProtoReflect() protoreflect.Message {
	mi := &file_offline_parse_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ParseTaskRequest.ProtoReflect.Descriptor instead.
func (*ParseTaskRequest) Descriptor() ([]byte, []int) {
	return file_offline_parse_proto_rawDescGZIP(), []int{0}
}

func (x *ParseTaskRequest) GetTextLink() string {
	if x != nil {
		return x.TextLink
	}
	return ""
}

func (x *ParseTaskRequest) GetFileHash() string {
	if x != nil {
		return x.FileHash
	}
	return ""
}

func (x *ParseTaskRequest) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *ParseTaskRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *ParseTaskRequest) GetOp() int32 {
	if x != nil {
		return x.Op
	}
	return 0
}

type ParseTaskResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	TextLink string           `protobuf:"bytes,1,opt,name=text_link,json=textLink,proto3" json:"text_link,omitempty"`
	FileHash string           `protobuf:"bytes,2,opt,name=file_hash,json=fileHash,proto3" json:"file_hash,omitempty"`
	Username string           `protobuf:"bytes,3,opt,name=username,proto3" json:"username,omitempty"`
	Password string           `protobuf:"bytes,4,opt,name=password,proto3" json:"password,omitempty"`
	Identity string           `protobuf:"bytes,5,opt,name=identity,proto3" json:"identity,omitempty"`
	Name     string           `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	Size     int64            `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	Data     []*ParseTaskFile `protobuf:"bytes,8,rep,name=data,proto3" json:"data,omitempty"`
	Type     int32            `protobuf:"varint,9,opt,name=type,proto3" json:"type,omitempty"`
}

func (x *ParseTaskResponse) Reset() {
	*x = ParseTaskResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_parse_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ParseTaskResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ParseTaskResponse) ProtoMessage() {}

func (x *ParseTaskResponse) ProtoReflect() protoreflect.Message {
	mi := &file_offline_parse_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ParseTaskResponse.ProtoReflect.Descriptor instead.
func (*ParseTaskResponse) Descriptor() ([]byte, []int) {
	return file_offline_parse_proto_rawDescGZIP(), []int{1}
}

func (x *ParseTaskResponse) GetTextLink() string {
	if x != nil {
		return x.TextLink
	}
	return ""
}

func (x *ParseTaskResponse) GetFileHash() string {
	if x != nil {
		return x.FileHash
	}
	return ""
}

func (x *ParseTaskResponse) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *ParseTaskResponse) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *ParseTaskResponse) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ParseTaskResponse) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *ParseTaskResponse) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ParseTaskResponse) GetData() []*ParseTaskFile {
	if x != nil {
		return x.Data
	}
	return nil
}

func (x *ParseTaskResponse) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

type ParseTaskFile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Path     string `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Size     int64  `protobuf:"varint,3,opt,name=size,proto3" json:"size,omitempty"`
	Name     string `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
}

func (x *ParseTaskFile) Reset() {
	*x = ParseTaskFile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_parse_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ParseTaskFile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ParseTaskFile) ProtoMessage() {}

func (x *ParseTaskFile) ProtoReflect() protoreflect.Message {
	mi := &file_offline_parse_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ParseTaskFile.ProtoReflect.Descriptor instead.
func (*ParseTaskFile) Descriptor() ([]byte, []int) {
	return file_offline_parse_proto_rawDescGZIP(), []int{2}
}

func (x *ParseTaskFile) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ParseTaskFile) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *ParseTaskFile) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ParseTaskFile) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

var File_offline_parse_proto protoreflect.FileDescriptor

var file_offline_parse_proto_rawDesc = []byte{
	0x0a, 0x13, 0x6f, 0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x2f, 0x70, 0x61, 0x72, 0x73, 0x65, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x22,
	0x94, 0x01, 0x0a, 0x10, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1b, 0x0a, 0x09, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x6c, 0x69, 0x6e,
	0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x78, 0x74, 0x4c, 0x69, 0x6e,
	0x6b, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x48, 0x61, 0x73, 0x68, 0x12, 0x1a,
	0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61,
	0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x0e, 0x0a, 0x02, 0x6f, 0x70, 0x18, 0x05, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x02, 0x6f, 0x70, 0x22, 0x8a, 0x02, 0x0a, 0x11, 0x50, 0x61, 0x72, 0x73, 0x65,
	0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x1b, 0x0a, 0x09,
	0x74, 0x65, 0x78, 0x74, 0x5f, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x74, 0x65, 0x78, 0x74, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x1b, 0x0a, 0x09, 0x66, 0x69, 0x6c,
	0x65, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x66, 0x69,
	0x6c, 0x65, 0x48, 0x61, 0x73, 0x68, 0x12, 0x1a, 0x0a, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75, 0x73, 0x65, 0x72, 0x6e, 0x61,
	0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x1a,
	0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61,
	0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12,
	0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69,
	0x7a, 0x65, 0x12, 0x2b, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x08, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x17, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x72, 0x73,
	0x65, 0x54, 0x61, 0x73, 0x6b, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x22, 0x67, 0x0a, 0x0d, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x61, 0x73, 0x6b,
	0x46, 0x69, 0x6c, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x70, 0x61, 0x74, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x32, 0x56, 0x0a, 0x10,
	0x54, 0x61, 0x73, 0x6b, 0x50, 0x61, 0x72, 0x73, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x12, 0x42, 0x0a, 0x05, 0x70, 0x61, 0x72, 0x73, 0x65, 0x12, 0x1a, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65,
	0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x50, 0x61, 0x72, 0x73, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e,
	0x73, 0x65, 0x22, 0x00, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2f, 0x6f, 0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x2f, 0x70, 0x61, 0x72,
	0x73, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_offline_parse_proto_rawDescOnce sync.Once
	file_offline_parse_proto_rawDescData = file_offline_parse_proto_rawDesc
)

func file_offline_parse_proto_rawDescGZIP() []byte {
	file_offline_parse_proto_rawDescOnce.Do(func() {
		file_offline_parse_proto_rawDescData = protoimpl.X.CompressGZIP(file_offline_parse_proto_rawDescData)
	})
	return file_offline_parse_proto_rawDescData
}

var file_offline_parse_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_offline_parse_proto_goTypes = []interface{}{
	(*ParseTaskRequest)(nil),  // 0: services.ParseTaskRequest
	(*ParseTaskResponse)(nil), // 1: services.ParseTaskResponse
	(*ParseTaskFile)(nil),     // 2: services.ParseTaskFile
}
var file_offline_parse_proto_depIdxs = []int32{
	2, // 0: services.ParseTaskResponse.data:type_name -> services.ParseTaskFile
	0, // 1: services.TaskParseService.parse:input_type -> services.ParseTaskRequest
	1, // 2: services.TaskParseService.parse:output_type -> services.ParseTaskResponse
	2, // [2:3] is the sub-list for method output_type
	1, // [1:2] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_offline_parse_proto_init() }
func file_offline_parse_proto_init() {
	if File_offline_parse_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_offline_parse_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ParseTaskRequest); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_offline_parse_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ParseTaskResponse); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
		file_offline_parse_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ParseTaskFile); i {
			case 0:
				return &v.state
			case 1:
				return &v.sizeCache
			case 2:
				return &v.unknownFields
			default:
				return nil
			}
		}
	}
	type x struct{}
	out := protoimpl.TypeBuilder{
		File: protoimpl.DescBuilder{
			GoPackagePath: reflect.TypeOf(x{}).PkgPath(),
			RawDescriptor: file_offline_parse_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_offline_parse_proto_goTypes,
		DependencyIndexes: file_offline_parse_proto_depIdxs,
		MessageInfos:      file_offline_parse_proto_msgTypes,
	}.Build()
	File_offline_parse_proto = out.File
	file_offline_parse_proto_rawDesc = nil
	file_offline_parse_proto_goTypes = nil
	file_offline_parse_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// TaskParseServiceClient is the client API for TaskParseService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TaskParseServiceClient interface {
	Parse(ctx context.Context, in *ParseTaskRequest, opts ...grpc.CallOption) (*ParseTaskResponse, error)
}

type taskParseServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTaskParseServiceClient(cc grpc.ClientConnInterface) TaskParseServiceClient {
	return &taskParseServiceClient{cc}
}

func (c *taskParseServiceClient) Parse(ctx context.Context, in *ParseTaskRequest, opts ...grpc.CallOption) (*ParseTaskResponse, error) {
	out := new(ParseTaskResponse)
	err := c.cc.Invoke(ctx, "/services.TaskParseService/parse", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TaskParseServiceServer is the server API for TaskParseService service.
type TaskParseServiceServer interface {
	Parse(context.Context, *ParseTaskRequest) (*ParseTaskResponse, error)
}

// UnimplementedTaskParseServiceServer can be embedded to have forward compatible implementations.
type UnimplementedTaskParseServiceServer struct {
}

func (*UnimplementedTaskParseServiceServer) Parse(context.Context, *ParseTaskRequest) (*ParseTaskResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Parse not implemented")
}

func RegisterTaskParseServiceServer(s *grpc.Server, srv TaskParseServiceServer) {
	s.RegisterService(&_TaskParseService_serviceDesc, srv)
}

func _TaskParseService_Parse_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ParseTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TaskParseServiceServer).Parse(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TaskParseService/Parse",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TaskParseServiceServer).Parse(ctx, req.(*ParseTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _TaskParseService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.TaskParseService",
	HandlerType: (*TaskParseServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "parse",
			Handler:    _TaskParseService_Parse_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/parse.proto",
}
