// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.12.3
// source: file/filetask.proto

package filetask

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

type FileTask struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity           int64  `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	SourceUserIdentity int64  `protobuf:"varint,2,opt,name=source_user_identity,json=sourceUserIdentity,proto3" json:"source_user_identity,omitempty"`
	DestUserIdentity   int64  `protobuf:"varint,3,opt,name=dest_user_identity,json=destUserIdentity,proto3" json:"dest_user_identity,omitempty"`
	SourcePath         string `protobuf:"bytes,4,opt,name=source_path,json=sourcePath,proto3" json:"source_path,omitempty"`
	DestinationPath    string `protobuf:"bytes,5,opt,name=destination_path,json=destinationPath,proto3" json:"destination_path,omitempty"`
	Op                 int32  `protobuf:"varint,6,opt,name=op,proto3" json:"op,omitempty"`
	Type               int32  `protobuf:"varint,7,opt,name=type,proto3" json:"type,omitempty"`
	Addon              string `protobuf:"bytes,8,opt,name=addon,proto3" json:"addon,omitempty"`
	CreateTime         int64  `protobuf:"varint,9,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
}

func (x *FileTask) Reset() {
	*x = FileTask{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_filetask_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileTask) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileTask) ProtoMessage() {}

func (x *FileTask) ProtoReflect() protoreflect.Message {
	mi := &file_file_filetask_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileTask.ProtoReflect.Descriptor instead.
func (*FileTask) Descriptor() ([]byte, []int) {
	return file_file_filetask_proto_rawDescGZIP(), []int{0}
}

func (x *FileTask) GetIdentity() int64 {
	if x != nil {
		return x.Identity
	}
	return 0
}

func (x *FileTask) GetSourceUserIdentity() int64 {
	if x != nil {
		return x.SourceUserIdentity
	}
	return 0
}

func (x *FileTask) GetDestUserIdentity() int64 {
	if x != nil {
		return x.DestUserIdentity
	}
	return 0
}

func (x *FileTask) GetSourcePath() string {
	if x != nil {
		return x.SourcePath
	}
	return ""
}

func (x *FileTask) GetDestinationPath() string {
	if x != nil {
		return x.DestinationPath
	}
	return ""
}

func (x *FileTask) GetOp() int32 {
	if x != nil {
		return x.Op
	}
	return 0
}

func (x *FileTask) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *FileTask) GetAddon() string {
	if x != nil {
		return x.Addon
	}
	return ""
}

func (x *FileTask) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

type FileTaskListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*FileTask `protobuf:"bytes,2,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *FileTaskListResponse) Reset() {
	*x = FileTaskListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_filetask_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileTaskListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileTaskListResponse) ProtoMessage() {}

func (x *FileTaskListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_file_filetask_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileTaskListResponse.ProtoReflect.Descriptor instead.
func (*FileTaskListResponse) Descriptor() ([]byte, []int) {
	return file_file_filetask_proto_rawDescGZIP(), []int{1}
}

func (x *FileTaskListResponse) GetData() []*FileTask {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_file_filetask_proto protoreflect.FileDescriptor

var file_file_filetask_proto_rawDesc = []byte{
	0x0a, 0x13, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x74, 0x61, 0x73, 0x6b, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x22,
	0xad, 0x02, 0x0a, 0x08, 0x46, 0x69, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x1a, 0x0a, 0x08,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x30, 0x0a, 0x14, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x12, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x55, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x2c, 0x0a, 0x12, 0x64, 0x65,
	0x73, 0x74, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x10, 0x64, 0x65, 0x73, 0x74, 0x55, 0x73, 0x65, 0x72,
	0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73,
	0x6f, 0x75, 0x72, 0x63, 0x65, 0x50, 0x61, 0x74, 0x68, 0x12, 0x29, 0x0a, 0x10, 0x64, 0x65, 0x73,
	0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x5f, 0x70, 0x61, 0x74, 0x68, 0x18, 0x05, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0f, 0x64, 0x65, 0x73, 0x74, 0x69, 0x6e, 0x61, 0x74, 0x69, 0x6f, 0x6e,
	0x50, 0x61, 0x74, 0x68, 0x12, 0x0e, 0x0a, 0x02, 0x6f, 0x70, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x02, 0x6f, 0x70, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x64, 0x64, 0x6f,
	0x6e, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x12, 0x1f,
	0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x22,
	0x3e, 0x0a, 0x14, 0x46, 0x69, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x26, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x32,
	0x83, 0x01, 0x0a, 0x0f, 0x46, 0x69, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x53, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x12, 0x32, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x12, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x54, 0x61, 0x73,
	0x6b, 0x1a, 0x12, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c,
	0x65, 0x54, 0x61, 0x73, 0x6b, 0x22, 0x00, 0x12, 0x3c, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12,
	0x12, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x54,
	0x61, 0x73, 0x6b, 0x1a, 0x1e, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46,
	0x69, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f,
	0x6e, 0x73, 0x65, 0x22, 0x00, 0x42, 0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x66, 0x69, 0x6c, 0x65, 0x74,
	0x61, 0x73, 0x6b, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_file_filetask_proto_rawDescOnce sync.Once
	file_file_filetask_proto_rawDescData = file_file_filetask_proto_rawDesc
)

func file_file_filetask_proto_rawDescGZIP() []byte {
	file_file_filetask_proto_rawDescOnce.Do(func() {
		file_file_filetask_proto_rawDescData = protoimpl.X.CompressGZIP(file_file_filetask_proto_rawDescData)
	})
	return file_file_filetask_proto_rawDescData
}

var file_file_filetask_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_file_filetask_proto_goTypes = []interface{}{
	(*FileTask)(nil),             // 0: services.FileTask
	(*FileTaskListResponse)(nil), // 1: services.FileTaskListResponse
}
var file_file_filetask_proto_depIdxs = []int32{
	0, // 0: services.FileTaskListResponse.data:type_name -> services.FileTask
	0, // 1: services.FileTaskService.Create:input_type -> services.FileTask
	0, // 2: services.FileTaskService.List:input_type -> services.FileTask
	0, // 3: services.FileTaskService.Create:output_type -> services.FileTask
	1, // 4: services.FileTaskService.List:output_type -> services.FileTaskListResponse
	3, // [3:5] is the sub-list for method output_type
	1, // [1:3] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_file_filetask_proto_init() }
func file_file_filetask_proto_init() {
	if File_file_filetask_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_file_filetask_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileTask); i {
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
		file_file_filetask_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileTaskListResponse); i {
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
			RawDescriptor: file_file_filetask_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_file_filetask_proto_goTypes,
		DependencyIndexes: file_file_filetask_proto_depIdxs,
		MessageInfos:      file_file_filetask_proto_msgTypes,
	}.Build()
	File_file_filetask_proto = out.File
	file_file_filetask_proto_rawDesc = nil
	file_file_filetask_proto_goTypes = nil
	file_file_filetask_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// FileTaskServiceClient is the client API for FileTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileTaskServiceClient interface {
	Create(ctx context.Context, in *FileTask, opts ...grpc.CallOption) (*FileTask, error)
	List(ctx context.Context, in *FileTask, opts ...grpc.CallOption) (*FileTaskListResponse, error)
}

type fileTaskServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFileTaskServiceClient(cc grpc.ClientConnInterface) FileTaskServiceClient {
	return &fileTaskServiceClient{cc}
}

func (c *fileTaskServiceClient) Create(ctx context.Context, in *FileTask, opts ...grpc.CallOption) (*FileTask, error) {
	out := new(FileTask)
	err := c.cc.Invoke(ctx, "/services.FileTaskService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileTaskServiceClient) List(ctx context.Context, in *FileTask, opts ...grpc.CallOption) (*FileTaskListResponse, error) {
	out := new(FileTaskListResponse)
	err := c.cc.Invoke(ctx, "/services.FileTaskService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileTaskServiceServer is the server API for FileTaskService service.
type FileTaskServiceServer interface {
	Create(context.Context, *FileTask) (*FileTask, error)
	List(context.Context, *FileTask) (*FileTaskListResponse, error)
}

// UnimplementedFileTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFileTaskServiceServer struct {
}

func (*UnimplementedFileTaskServiceServer) Create(context.Context, *FileTask) (*FileTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedFileTaskServiceServer) List(context.Context, *FileTask) (*FileTaskListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}

func RegisterFileTaskServiceServer(s *grpc.Server, srv FileTaskServiceServer) {
	s.RegisterService(&_FileTaskService_serviceDesc, srv)
}

func _FileTaskService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileTaskServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileTaskService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileTaskServiceServer).Create(ctx, req.(*FileTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileTaskService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileTaskServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileTaskService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileTaskServiceServer).List(ctx, req.(*FileTask))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileTaskService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.FileTaskService",
	HandlerType: (*FileTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _FileTaskService_Create_Handler,
		},
		{
			MethodName: "List",
			Handler:    _FileTaskService_List_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "file/filetask.proto",
}
