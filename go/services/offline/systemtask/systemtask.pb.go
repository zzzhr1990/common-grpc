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
	CreateIP             string   `protobuf:"bytes,10,opt,name=createIP,proto3" json:"createIP,omitempty"`
	Data                 string   `protobuf:"bytes,11,opt,name=data,proto3" json:"data,omitempty"`
	Preview              bool     `protobuf:"varint,12,opt,name=preview,proto3" json:"preview,omitempty"`
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

func (m *SystemOfflineTask) GetCreateIP() string {
	if m != nil {
		return m.CreateIP
	}
	return ""
}

func (m *SystemOfflineTask) GetData() string {
	if m != nil {
		return m.Data
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

type SystemOfflineTaskFiles struct {
	Files                []*SystemOfflineTaskFile `protobuf:"bytes,2,rep,name=files,proto3" json:"files,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *SystemOfflineTaskFiles) Reset()         { *m = SystemOfflineTaskFiles{} }
func (m *SystemOfflineTaskFiles) String() string { return proto.CompactTextString(m) }
func (*SystemOfflineTaskFiles) ProtoMessage()    {}
func (*SystemOfflineTaskFiles) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{3}
}

func (m *SystemOfflineTaskFiles) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_SystemOfflineTaskFiles.Unmarshal(m, b)
}
func (m *SystemOfflineTaskFiles) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_SystemOfflineTaskFiles.Marshal(b, m, deterministic)
}
func (m *SystemOfflineTaskFiles) XXX_Merge(src proto.Message) {
	xxx_messageInfo_SystemOfflineTaskFiles.Merge(m, src)
}
func (m *SystemOfflineTaskFiles) XXX_Size() int {
	return xxx_messageInfo_SystemOfflineTaskFiles.Size(m)
}
func (m *SystemOfflineTaskFiles) XXX_DiscardUnknown() {
	xxx_messageInfo_SystemOfflineTaskFiles.DiscardUnknown(m)
}

var xxx_messageInfo_SystemOfflineTaskFiles proto.InternalMessageInfo

func (m *SystemOfflineTaskFiles) GetFiles() []*SystemOfflineTaskFile {
	if m != nil {
		return m.Files
	}
	return nil
}

func init() {
	proto.RegisterType((*SystemOfflineTask)(nil), "services.SystemOfflineTask")
	proto.RegisterType((*SystemOfflineTaskFile)(nil), "services.SystemOfflineTaskFile")
	proto.RegisterType((*SystemOfflineTaskMeta)(nil), "services.SystemOfflineTaskMeta")
	proto.RegisterType((*SystemOfflineTaskFiles)(nil), "services.SystemOfflineTaskFiles")
}

func init() { proto.RegisterFile("offline/systemtask.proto", fileDescriptor_d0cace4e80a04fad) }

var fileDescriptor_d0cace4e80a04fad = []byte{
	// 536 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xa4, 0x54, 0x5d, 0x6f, 0xd3, 0x30,
	0x14, 0x6d, 0x9b, 0xb6, 0x4b, 0x6f, 0x87, 0x04, 0x16, 0x4c, 0x56, 0x91, 0x20, 0xca, 0x53, 0x85,
	0x44, 0x03, 0x45, 0x3c, 0xec, 0x09, 0x0d, 0x21, 0xa4, 0x09, 0xd0, 0x50, 0x3a, 0x5e, 0x78, 0xf3,
	0x9a, 0xdb, 0xc4, 0x5a, 0x13, 0x47, 0xb1, 0xbb, 0xa9, 0x7d, 0xe1, 0xd7, 0xf1, 0x07, 0x90, 0xf8,
	0x3f, 0xc8, 0xf6, 0xd2, 0xb5, 0xa4, 0x4a, 0xa7, 0xed, 0xed, 0x7e, 0x9c, 0x5c, 0x9f, 0x7b, 0x8e,
	0x63, 0xa0, 0x62, 0x36, 0x9b, 0xf3, 0x0c, 0x03, 0xb9, 0x94, 0x0a, 0x53, 0xc5, 0xe4, 0xe5, 0x28,
	0x2f, 0x84, 0x12, 0xc4, 0x95, 0x58, 0x5c, 0xf1, 0x29, 0x4a, 0xff, 0x77, 0x0b, 0x9e, 0x4c, 0x4c,
	0xfb, 0xcc, 0x82, 0xcf, 0x99, 0xbc, 0x24, 0x03, 0x70, 0x79, 0x84, 0x99, 0xe2, 0x6a, 0x49, 0x9b,
	0x5e, 0x73, 0xd8, 0x0b, 0xd7, 0x39, 0x21, 0xd0, 0x96, 0x7c, 0x85, 0xb4, 0xe5, 0x35, 0x87, 0x4e,
	0x68, 0x62, 0xf2, 0x02, 0x60, 0x5a, 0x20, 0x53, 0xf8, 0x43, 0x62, 0x41, 0x1d, 0xd3, 0xd9, 0xa8,
	0xdc, 0xf6, 0xcf, 0x79, 0x8a, 0xb4, 0xbd, 0xd9, 0xd7, 0x15, 0x3d, 0x33, 0x63, 0x29, 0xd2, 0x8e,
	0x39, 0xcb, 0xc4, 0xba, 0xa6, 0x96, 0x39, 0xd2, 0xae, 0xd7, 0x1c, 0x76, 0x42, 0x13, 0x93, 0x23,
	0xe8, 0x4a, 0xc5, 0xd4, 0x42, 0xd2, 0x03, 0x53, 0xbd, 0xc9, 0x34, 0x76, 0x36, 0x67, 0x31, 0x75,
	0x2d, 0x56, 0xc7, 0xc4, 0x87, 0xc3, 0x48, 0x5c, 0x67, 0x73, 0xc1, 0xa2, 0x89, 0xe6, 0xdb, 0x33,
	0xa7, 0x6e, 0xd5, 0xf4, 0x9e, 0x96, 0xc5, 0xe9, 0x77, 0x0a, 0x76, 0xcf, 0x32, 0xd7, 0x33, 0x23,
	0xa6, 0x18, 0xed, 0x5b, 0x4e, 0x3a, 0x26, 0x14, 0x0e, 0xf2, 0x02, 0xaf, 0x38, 0x5e, 0xd3, 0x43,
	0xaf, 0x39, 0x74, 0xc3, 0x32, 0xf5, 0xff, 0xb6, 0xe0, 0x59, 0x45, 0xc7, 0xcf, 0x7c, 0x8e, 0xe4,
	0x15, 0x3c, 0x2e, 0xcf, 0x3c, 0xdd, 0xd6, 0xb4, 0x52, 0xd7, 0x9c, 0x73, 0xa6, 0x92, 0x35, 0xae,
	0x65, 0x70, 0x5b, 0xb5, 0xff, 0xb4, 0x74, 0xee, 0xaa, 0xa5, 0x9e, 0x61, 0xb4, 0xec, 0x85, 0x26,
	0xd6, 0xb5, 0x84, 0xc9, 0xc4, 0x28, 0xd9, 0x0b, 0x4d, 0xbc, 0xf6, 0xd6, 0xdd, 0xf0, 0xf6, 0x2e,
	0x3a, 0xde, 0xfa, 0x02, 0x3b, 0x7d, 0xe9, 0x6f, 0xf8, 0xf2, 0x14, 0x3a, 0xa2, 0x88, 0xb0, 0x30,
	0x0a, 0x76, 0x42, 0x9b, 0xe8, 0x09, 0x33, 0x9e, 0x71, 0x99, 0xd0, 0x47, 0x46, 0xd8, 0x9b, 0xcc,
	0xff, 0xb5, 0x43, 0xd6, 0x6f, 0xa8, 0x18, 0x09, 0xa0, 0xad, 0x2f, 0xb4, 0x91, 0xb2, 0x3f, 0x7e,
	0x3e, 0x2a, 0x6f, 0xf4, 0xa8, 0x02, 0x0f, 0x0d, 0x90, 0xbc, 0x87, 0xce, 0x8c, 0xcf, 0x51, 0xd2,
	0x96, 0xe7, 0x0c, 0xfb, 0xe3, 0x97, 0x35, 0x5f, 0x68, 0xdf, 0x42, 0x8b, 0xf6, 0xcf, 0xe0, 0x68,
	0x67, 0x5f, 0xde, 0x73, 0xe0, 0xf8, 0x8f, 0x03, 0xb4, 0x02, 0x98, 0xd8, 0x4f, 0xc9, 0x27, 0xe8,
	0x5a, 0x2b, 0x49, 0xdd, 0x46, 0x83, 0xba, 0xa6, 0xdf, 0x20, 0x5f, 0xa1, 0xbb, 0xc8, 0x23, 0x3d,
	0xa5, 0x8e, 0x94, 0x96, 0x71, 0xb0, 0x0f, 0xe0, 0x37, 0xc8, 0x09, 0x38, 0x31, 0xaa, 0x07, 0x12,
	0x02, 0x4b, 0xc8, 0xfc, 0x11, 0xfb, 0x94, 0xda, 0x37, 0xed, 0x0b, 0xb8, 0x31, 0x2a, 0x6b, 0x42,
	0x2d, 0x2b, 0x6f, 0xcf, 0x41, 0xd2, 0x6f, 0x68, 0xc5, 0xed, 0x55, 0x7b, 0xc8, 0x82, 0x1f, 0x4f,
	0x7e, 0x7e, 0x88, 0xb9, 0x4a, 0x16, 0x17, 0xa3, 0xa9, 0x48, 0x83, 0xd5, 0x6a, 0x95, 0x14, 0x6f,
	0x8f, 0x8f, 0xdf, 0x04, 0x53, 0x91, 0xa6, 0x22, 0x7b, 0x1d, 0x17, 0xf9, 0x34, 0x88, 0x45, 0x50,
	0xce, 0x08, 0xaa, 0x2f, 0xf3, 0x45, 0xd7, 0x3c, 0xcd, 0xef, 0xfe, 0x05, 0x00, 0x00, 0xff, 0xff,
	0x99, 0x06, 0xc1, 0xba, 0xb6, 0x05, 0x00, 0x00,
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
	GetFiles(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTaskFiles, error)
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

func (c *systemOfflineTaskServiceClient) GetFiles(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTaskFiles, error) {
	out := new(SystemOfflineTaskFiles)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/getFiles", in, out, opts...)
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
	GetFiles(context.Context, *SystemOfflineTask) (*SystemOfflineTaskFiles, error)
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
func (*UnimplementedSystemOfflineTaskServiceServer) GetFiles(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTaskFiles, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetFiles not implemented")
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

func _SystemOfflineTaskService_GetFiles_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).GetFiles(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/GetFiles",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).GetFiles(ctx, req.(*SystemOfflineTask))
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
			MethodName: "getFiles",
			Handler:    _SystemOfflineTaskService_GetFiles_Handler,
		},
		{
			MethodName: "finish",
			Handler:    _SystemOfflineTaskService_Finish_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/systemtask.proto",
}
