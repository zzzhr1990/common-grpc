// Code generated by protoc-gen-go. DO NOT EDIT.
// source: offline/systemtask.proto

package systemtask

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

type SystemOfflineTask struct {
	Identity   string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size       int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	CreateUser int64  `protobuf:"varint,3,opt,name=createUser,proto3" json:"createUser,omitempty"`
	CreateTime int64  `protobuf:"varint,4,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Name       string `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	//tring originalaFilename = 6;
	Type         int32 `protobuf:"varint,6,opt,name=type,proto3" json:"type,omitempty"`
	Status       int32 `protobuf:"varint,7,opt,name=status,proto3" json:"status,omitempty"`
	Flag         int32 `protobuf:"varint,8,opt,name=flag,proto3" json:"flag,omitempty"`
	DownloadSize int64 `protobuf:"varint,9,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	//
	Cip                  string   `protobuf:"bytes,10,opt,name=cip,proto3" json:"cip,omitempty"`
	Preview              bool     `protobuf:"varint,11,opt,name=preview,proto3" json:"preview,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SystemOfflineTask) Reset()         { *m = SystemOfflineTask{} }
func (m *SystemOfflineTask) String() string { return proto.CompactTextString(m) }
func (*SystemOfflineTask) ProtoMessage()    {}
func (*SystemOfflineTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{0}
}

func (m *SystemOfflineTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemOfflineTask.Unmarshal(m, b)
}
func (m *SystemOfflineTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemOfflineTask.Marshal(b, m, deterministic)
}
func (m *SystemOfflineTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemOfflineTask.Merge(m, src)
}
func (m *SystemOfflineTask) XXX_Size() int {
	return xxx_messageInfo_SystemOfflineTask.Size(m)
}
func (m *SystemOfflineTask) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemOfflineTask.DiscardUnknown(m)
}

var xxx_messageInfo_SystemOfflineTask proto.InternalMessageInfo

func (m *SystemOfflineTask) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *SystemOfflineTask) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *SystemOfflineTask) GetCreateUser() int64 {
	if m != nil {
		return m.CreateUser
	}
	return 0
}

func (m *SystemOfflineTask) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *SystemOfflineTask) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SystemOfflineTask) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *SystemOfflineTask) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *SystemOfflineTask) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *SystemOfflineTask) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

func (m *SystemOfflineTask) GetCip() string {
	if m != nil {
		return m.Cip
	}
	return ""
}

func (m *SystemOfflineTask) GetPreview() bool {
	if m != nil {
		return m.Preview
	}
	return false
}

type SystemOfflineTaskFile struct {
	DownloadIdentity     string   `protobuf:"bytes,1,opt,name=downloadIdentity,proto3" json:"downloadIdentity,omitempty"`
	PathIdentity         string   `protobuf:"bytes,2,opt,name=pathIdentity,proto3" json:"pathIdentity,omitempty"`
	CreateTime           int64    `protobuf:"varint,3,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Name                 string   `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Path                 string   `protobuf:"bytes,6,opt,name=path,proto3" json:"path,omitempty"`
	Hash                 string   `protobuf:"bytes,7,opt,name=hash,proto3" json:"hash,omitempty"`
	Size                 int64    `protobuf:"varint,8,opt,name=size,proto3" json:"size,omitempty"`
	DownloadSize         int64    `protobuf:"varint,9,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	Status               int32    `protobuf:"varint,10,opt,name=status,proto3" json:"status,omitempty"`
	Flag                 int32    `protobuf:"varint,11,opt,name=flag,proto3" json:"flag,omitempty"`
	Order                int32    `protobuf:"varint,12,opt,name=order,proto3" json:"order,omitempty"`
	Finish               bool     `protobuf:"varint,13,opt,name=finish,proto3" json:"finish,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SystemOfflineTaskFile) Reset()         { *m = SystemOfflineTaskFile{} }
func (m *SystemOfflineTaskFile) String() string { return proto.CompactTextString(m) }
func (*SystemOfflineTaskFile) ProtoMessage()    {}
func (*SystemOfflineTaskFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{1}
}

func (m *SystemOfflineTaskFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemOfflineTaskFile.Unmarshal(m, b)
}
func (m *SystemOfflineTaskFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemOfflineTaskFile.Marshal(b, m, deterministic)
}
func (m *SystemOfflineTaskFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemOfflineTaskFile.Merge(m, src)
}
func (m *SystemOfflineTaskFile) XXX_Size() int {
	return xxx_messageInfo_SystemOfflineTaskFile.Size(m)
}
func (m *SystemOfflineTaskFile) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemOfflineTaskFile.DiscardUnknown(m)
}

var xxx_messageInfo_SystemOfflineTaskFile proto.InternalMessageInfo

func (m *SystemOfflineTaskFile) GetDownloadIdentity() string {
	if m != nil {
		return m.DownloadIdentity
	}
	return ""
}

func (m *SystemOfflineTaskFile) GetPathIdentity() string {
	if m != nil {
		return m.PathIdentity
	}
	return ""
}

func (m *SystemOfflineTaskFile) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *SystemOfflineTaskFile) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *SystemOfflineTaskFile) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *SystemOfflineTaskFile) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetOrder() int32 {
	if m != nil {
		return m.Order
	}
	return 0
}

func (m *SystemOfflineTaskFile) GetFinish() bool {
	if m != nil {
		return m.Finish
	}
	return false
}

type SystemOfflineTaskMeta struct {
	Task                 *SystemOfflineTask       `protobuf:"bytes,1,opt,name=task,proto3" json:"task,omitempty"`
	Files                []*SystemOfflineTaskFile `protobuf:"bytes,2,rep,name=files,proto3" json:"files,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *SystemOfflineTaskMeta) Reset()         { *m = SystemOfflineTaskMeta{} }
func (m *SystemOfflineTaskMeta) String() string { return proto.CompactTextString(m) }
func (*SystemOfflineTaskMeta) ProtoMessage()    {}
func (*SystemOfflineTaskMeta) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{2}
}

func (m *SystemOfflineTaskMeta) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemOfflineTaskMeta.Unmarshal(m, b)
}
func (m *SystemOfflineTaskMeta) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemOfflineTaskMeta.Marshal(b, m, deterministic)
}
func (m *SystemOfflineTaskMeta) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemOfflineTaskMeta.Merge(m, src)
}
func (m *SystemOfflineTaskMeta) XXX_Size() int {
	return xxx_messageInfo_SystemOfflineTaskMeta.Size(m)
}
func (m *SystemOfflineTaskMeta) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemOfflineTaskMeta.DiscardUnknown(m)
}

var xxx_messageInfo_SystemOfflineTaskMeta proto.InternalMessageInfo

func (m *SystemOfflineTaskMeta) GetTask() *SystemOfflineTask {
	if m != nil {
		return m.Task
	}
	return nil
}

func (m *SystemOfflineTaskMeta) GetFiles() []*SystemOfflineTaskFile {
	if m != nil {
		return m.Files
	}
	return nil
}

func init() {
	proto.RegisterType((*SystemOfflineTask)(nil), "services.SystemOfflineTask")
	proto.RegisterType((*SystemOfflineTaskFile)(nil), "services.SystemOfflineTaskFile")
	proto.RegisterType((*SystemOfflineTaskMeta)(nil), "services.SystemOfflineTaskMeta")
}

func init() { proto.RegisterFile("offline/systemtask.proto", fileDescriptor_d0cace4e80a04fad) }

var fileDescriptor_d0cace4e80a04fad = []byte{
	// 500 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x94, 0xc1, 0x6a, 0xdb, 0x40,
	0x10, 0x86, 0x63, 0xcb, 0x56, 0xe4, 0x71, 0x0a, 0xe9, 0xd2, 0x96, 0xc5, 0x85, 0x56, 0xe8, 0x24,
	0x0a, 0xb5, 0x5a, 0x97, 0x1e, 0x72, 0x2a, 0x29, 0xa1, 0x50, 0x68, 0x29, 0xc8, 0xe9, 0xa5, 0xb7,
	0x8d, 0xb4, 0x92, 0x96, 0x48, 0x5a, 0xa1, 0x5d, 0x27, 0xd8, 0x97, 0x9e, 0xfa, 0x2c, 0x7d, 0xa2,
	0xbe, 0x4f, 0xd9, 0x51, 0xe4, 0xd8, 0x51, 0xb0, 0x03, 0xb9, 0xcd, 0xfc, 0xf3, 0x6b, 0x76, 0xf4,
	0xcd, 0xb2, 0x40, 0x65, 0x92, 0xe4, 0xa2, 0xe4, 0x81, 0x5a, 0x2a, 0xcd, 0x0b, 0xcd, 0xd4, 0xe5,
	0xb4, 0xaa, 0xa5, 0x96, 0xc4, 0x51, 0xbc, 0xbe, 0x12, 0x11, 0x57, 0xde, 0xdf, 0x3e, 0x3c, 0x9d,
	0x63, 0xf9, 0x47, 0x63, 0x3e, 0x67, 0xea, 0x92, 0x4c, 0xc0, 0x11, 0x31, 0x2f, 0xb5, 0xd0, 0x4b,
	0xda, 0x73, 0x7b, 0xfe, 0x28, 0x5c, 0xe7, 0x84, 0xc0, 0x40, 0x89, 0x15, 0xa7, 0x7d, 0xb7, 0xe7,
	0x5b, 0x21, 0xc6, 0xe4, 0x15, 0x40, 0x54, 0x73, 0xa6, 0xf9, 0x4f, 0xc5, 0x6b, 0x6a, 0x61, 0x65,
	0x43, 0xb9, 0xad, 0x9f, 0x8b, 0x82, 0xd3, 0xc1, 0x66, 0xdd, 0x28, 0xa6, 0x67, 0xc9, 0x0a, 0x4e,
	0x87, 0x78, 0x16, 0xc6, 0x46, 0xd3, 0xcb, 0x8a, 0x53, 0xdb, 0xed, 0xf9, 0xc3, 0x10, 0x63, 0xf2,
	0x02, 0x6c, 0xa5, 0x99, 0x5e, 0x28, 0x7a, 0x88, 0xea, 0x4d, 0x66, 0xbc, 0x49, 0xce, 0x52, 0xea,
	0x34, 0x5e, 0x13, 0x13, 0x0f, 0x8e, 0x62, 0x79, 0x5d, 0xe6, 0x92, 0xc5, 0x73, 0x33, 0xef, 0x08,
	0x4f, 0xdd, 0xd2, 0xc8, 0x31, 0x58, 0x91, 0xa8, 0x28, 0xe0, 0xb1, 0x26, 0x24, 0x14, 0x0e, 0xab,
	0x9a, 0x5f, 0x09, 0x7e, 0x4d, 0xc7, 0x6e, 0xcf, 0x77, 0xc2, 0x36, 0xf5, 0xfe, 0xf5, 0xe1, 0x79,
	0x87, 0xd4, 0x17, 0x91, 0x73, 0xf2, 0x06, 0x8e, 0xdb, 0xae, 0x5f, 0xb7, 0xa9, 0x75, 0x74, 0x33,
	0x55, 0xc5, 0x74, 0xb6, 0xf6, 0xf5, 0xd1, 0xb7, 0xa5, 0xdd, 0xa1, 0x65, 0x3d, 0x94, 0x96, 0xe9,
	0x81, 0xb4, 0x46, 0x21, 0xc6, 0x46, 0xcb, 0x98, 0xca, 0x90, 0xd5, 0x28, 0xc4, 0x78, 0xbd, 0x3d,
	0x67, 0x63, 0x7b, 0x0f, 0x21, 0x75, 0x4b, 0x1e, 0xee, 0x25, 0x3f, 0xde, 0x20, 0xff, 0x0c, 0x86,
	0xb2, 0x8e, 0x79, 0x4d, 0x8f, 0x50, 0x6c, 0x12, 0xd3, 0x21, 0x11, 0xa5, 0x50, 0x19, 0x7d, 0x82,
	0x60, 0x6f, 0x32, 0xef, 0xf7, 0x3d, 0x58, 0xbf, 0x73, 0xcd, 0x48, 0x00, 0x03, 0x73, 0x65, 0x11,
	0xe5, 0x78, 0xf6, 0x72, 0xda, 0xde, 0xd9, 0x69, 0xc7, 0x1e, 0xa2, 0x91, 0x7c, 0x84, 0x61, 0x22,
	0x72, 0xae, 0x68, 0xdf, 0xb5, 0xfc, 0xf1, 0xec, 0xf5, 0x8e, 0x2f, 0xcc, 0xde, 0xc2, 0xc6, 0x3d,
	0xfb, 0x63, 0x01, 0xed, 0x18, 0xe6, 0xcd, 0xa7, 0xe4, 0x0c, 0xec, 0x86, 0x3c, 0xd9, 0x35, 0xc0,
	0x64, 0x57, 0xd1, 0x3b, 0x20, 0xdf, 0xc0, 0x5e, 0x54, 0xb1, 0xe9, 0xb2, 0x6b, 0x28, 0xf3, 0xd7,
	0x93, 0x7d, 0x06, 0xef, 0x80, 0x9c, 0x82, 0x95, 0x72, 0xfd, 0xc8, 0x81, 0xa0, 0x19, 0x08, 0x2f,
	0xf0, 0x3e, 0x52, 0xfb, 0xba, 0x9d, 0xb5, 0xab, 0x7d, 0xcc, 0x4c, 0x9f, 0x4f, 0x7f, 0x7d, 0x4a,
	0x85, 0xce, 0x16, 0x17, 0xd3, 0x48, 0x16, 0xc1, 0x6a, 0xb5, 0xca, 0xea, 0xf7, 0x27, 0x27, 0xef,
	0x82, 0x48, 0x16, 0x85, 0x2c, 0xdf, 0xa6, 0x75, 0x15, 0x05, 0xa9, 0x0c, 0xda, 0x1e, 0x41, 0xf7,
	0x75, 0xbb, 0xb0, 0xf1, 0x79, 0xfb, 0xf0, 0x3f, 0x00, 0x00, 0xff, 0xff, 0xbc, 0xcf, 0x74, 0xfc,
	0xfa, 0x04, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// SystemOfflineTaskServiceClient is the client API for SystemOfflineTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type SystemOfflineTaskServiceClient interface {
	Create(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error)
	Update(ctx context.Context, in *SystemOfflineTaskMeta, opts ...grpc.CallOption) (*SystemOfflineTaskMeta, error)
	Get(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error)
	UpdateFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*SystemOfflineTask, error)
	Finish(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error)
}

type systemOfflineTaskServiceClient struct {
	cc *grpc.ClientConn
}

func NewSystemOfflineTaskServiceClient(cc *grpc.ClientConn) SystemOfflineTaskServiceClient {
	return &systemOfflineTaskServiceClient{cc}
}

func (c *systemOfflineTaskServiceClient) Create(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error) {
	out := new(SystemOfflineTask)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) Update(ctx context.Context, in *SystemOfflineTaskMeta, opts ...grpc.CallOption) (*SystemOfflineTaskMeta, error) {
	out := new(SystemOfflineTaskMeta)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) Get(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error) {
	out := new(SystemOfflineTask)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) UpdateFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*SystemOfflineTask, error) {
	out := new(SystemOfflineTask)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/updateFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) Finish(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error) {
	out := new(SystemOfflineTask)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/finish", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SystemOfflineTaskServiceServer is the server API for SystemOfflineTaskService service.
type SystemOfflineTaskServiceServer interface {
	Create(context.Context, *SystemOfflineTask) (*SystemOfflineTask, error)
	Update(context.Context, *SystemOfflineTaskMeta) (*SystemOfflineTaskMeta, error)
	Get(context.Context, *SystemOfflineTask) (*SystemOfflineTask, error)
	UpdateFile(context.Context, *SystemOfflineTaskFile) (*SystemOfflineTask, error)
	Finish(context.Context, *SystemOfflineTask) (*SystemOfflineTask, error)
}

// UnimplementedSystemOfflineTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSystemOfflineTaskServiceServer struct {
}

func (*UnimplementedSystemOfflineTaskServiceServer) Create(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) Update(ctx context.Context, req *SystemOfflineTaskMeta) (*SystemOfflineTaskMeta, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) Get(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) UpdateFile(ctx context.Context, req *SystemOfflineTaskFile) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFile not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) Finish(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Finish not implemented")
}

func RegisterSystemOfflineTaskServiceServer(s *grpc.Server, srv SystemOfflineTaskServiceServer) {
	s.RegisterService(&_SystemOfflineTaskService_serviceDesc, srv)
}

func _SystemOfflineTaskService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).Create(ctx, req.(*SystemOfflineTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTaskMeta)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).Update(ctx, req.(*SystemOfflineTaskMeta))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).Get(ctx, req.(*SystemOfflineTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_UpdateFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTaskFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).UpdateFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/UpdateFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).UpdateFile(ctx, req.(*SystemOfflineTaskFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_Finish_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).Finish(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/Finish",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).Finish(ctx, req.(*SystemOfflineTask))
	}
	return interceptor(ctx, in, info, handler)
}

var _SystemOfflineTaskService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.SystemOfflineTaskService",
	HandlerType: (*SystemOfflineTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _SystemOfflineTaskService_Create_Handler,
		},
		{
			MethodName: "update",
			Handler:    _SystemOfflineTaskService_Update_Handler,
		},
		{
			MethodName: "get",
			Handler:    _SystemOfflineTaskService_Get_Handler,
		},
		{
			MethodName: "updateFile",
			Handler:    _SystemOfflineTaskService_UpdateFile_Handler,
		},
		{
			MethodName: "finish",
			Handler:    _SystemOfflineTaskService_Finish_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/systemtask.proto",
}
