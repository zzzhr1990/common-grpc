// Code generated by protoc-gen-go. DO NOT EDIT.
// source: offline/systemtask.proto

package systemtask

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

type BatchGetRequest struct {
	Identities           []string `protobuf:"bytes,1,rep,name=identities,proto3" json:"identities,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BatchGetRequest) Reset()         { *m = BatchGetRequest{} }
func (m *BatchGetRequest) String() string { return proto.CompactTextString(m) }
func (*BatchGetRequest) ProtoMessage()    {}
func (*BatchGetRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{0}
}

func (m *BatchGetRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchGetRequest.Unmarshal(m, b)
}
func (m *BatchGetRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchGetRequest.Marshal(b, m, deterministic)
}
func (m *BatchGetRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchGetRequest.Merge(m, src)
}
func (m *BatchGetRequest) XXX_Size() int {
	return xxx_messageInfo_BatchGetRequest.Size(m)
}
func (m *BatchGetRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchGetRequest.DiscardUnknown(m)
}

var xxx_messageInfo_BatchGetRequest proto.InternalMessageInfo

func (m *BatchGetRequest) GetIdentities() []string {
	if m != nil {
		return m.Identities
	}
	return nil
}

type BatchGetResponse struct {
	Data                 []*SystemOfflineTaskMeta `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *BatchGetResponse) Reset()         { *m = BatchGetResponse{} }
func (m *BatchGetResponse) String() string { return proto.CompactTextString(m) }
func (*BatchGetResponse) ProtoMessage()    {}
func (*BatchGetResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{1}
}

func (m *BatchGetResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BatchGetResponse.Unmarshal(m, b)
}
func (m *BatchGetResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BatchGetResponse.Marshal(b, m, deterministic)
}
func (m *BatchGetResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BatchGetResponse.Merge(m, src)
}
func (m *BatchGetResponse) XXX_Size() int {
	return xxx_messageInfo_BatchGetResponse.Size(m)
}
func (m *BatchGetResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_BatchGetResponse.DiscardUnknown(m)
}

var xxx_messageInfo_BatchGetResponse proto.InternalMessageInfo

func (m *BatchGetResponse) GetData() []*SystemOfflineTaskMeta {
	if m != nil {
		return m.Data
	}
	return nil
}

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
	return fileDescriptor_d0cace4e80a04fad, []int{2}
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

type UpdateProgressRequest struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	DownloadSize         int64    `protobuf:"varint,3,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UpdateProgressRequest) Reset()         { *m = UpdateProgressRequest{} }
func (m *UpdateProgressRequest) String() string { return proto.CompactTextString(m) }
func (*UpdateProgressRequest) ProtoMessage()    {}
func (*UpdateProgressRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{3}
}

func (m *UpdateProgressRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UpdateProgressRequest.Unmarshal(m, b)
}
func (m *UpdateProgressRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UpdateProgressRequest.Marshal(b, m, deterministic)
}
func (m *UpdateProgressRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UpdateProgressRequest.Merge(m, src)
}
func (m *UpdateProgressRequest) XXX_Size() int {
	return xxx_messageInfo_UpdateProgressRequest.Size(m)
}
func (m *UpdateProgressRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UpdateProgressRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UpdateProgressRequest proto.InternalMessageInfo

func (m *UpdateProgressRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UpdateProgressRequest) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UpdateProgressRequest) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

type StatusChangeRequest struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size                 int64    `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	DownloadSize         int64    `protobuf:"varint,3,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	Status               int32    `protobuf:"varint,4,opt,name=status,proto3" json:"status,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StatusChangeRequest) Reset()         { *m = StatusChangeRequest{} }
func (m *StatusChangeRequest) String() string { return proto.CompactTextString(m) }
func (*StatusChangeRequest) ProtoMessage()    {}
func (*StatusChangeRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{4}
}

func (m *StatusChangeRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StatusChangeRequest.Unmarshal(m, b)
}
func (m *StatusChangeRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StatusChangeRequest.Marshal(b, m, deterministic)
}
func (m *StatusChangeRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StatusChangeRequest.Merge(m, src)
}
func (m *StatusChangeRequest) XXX_Size() int {
	return xxx_messageInfo_StatusChangeRequest.Size(m)
}
func (m *StatusChangeRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_StatusChangeRequest.DiscardUnknown(m)
}

var xxx_messageInfo_StatusChangeRequest proto.InternalMessageInfo

func (m *StatusChangeRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *StatusChangeRequest) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *StatusChangeRequest) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

func (m *StatusChangeRequest) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
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
	FileIndex            int32    `protobuf:"varint,12,opt,name=fileIndex,proto3" json:"fileIndex,omitempty"`
	Finish               bool     `protobuf:"varint,13,opt,name=finish,proto3" json:"finish,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *SystemOfflineTaskFile) Reset()         { *m = SystemOfflineTaskFile{} }
func (m *SystemOfflineTaskFile) String() string { return proto.CompactTextString(m) }
func (*SystemOfflineTaskFile) ProtoMessage()    {}
func (*SystemOfflineTaskFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_d0cace4e80a04fad, []int{5}
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

func (m *SystemOfflineTaskFile) GetFileIndex() int32 {
	if m != nil {
		return m.FileIndex
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
	return fileDescriptor_d0cace4e80a04fad, []int{6}
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
	return fileDescriptor_d0cace4e80a04fad, []int{7}
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
	proto.RegisterType((*BatchGetRequest)(nil), "services.BatchGetRequest")
	proto.RegisterType((*BatchGetResponse)(nil), "services.BatchGetResponse")
	proto.RegisterType((*SystemOfflineTask)(nil), "services.SystemOfflineTask")
	proto.RegisterType((*UpdateProgressRequest)(nil), "services.UpdateProgressRequest")
	proto.RegisterType((*StatusChangeRequest)(nil), "services.StatusChangeRequest")
	proto.RegisterType((*SystemOfflineTaskFile)(nil), "services.SystemOfflineTaskFile")
	proto.RegisterType((*SystemOfflineTaskMeta)(nil), "services.SystemOfflineTaskMeta")
	proto.RegisterType((*SystemOfflineTaskFiles)(nil), "services.SystemOfflineTaskFiles")
}

func init() { proto.RegisterFile("offline/systemtask.proto", fileDescriptor_d0cace4e80a04fad) }

var fileDescriptor_d0cace4e80a04fad = []byte{
	// 720 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x56, 0x5d, 0x6f, 0x12, 0x5d,
	0x10, 0xe6, 0xbb, 0x30, 0xf4, 0x7d, 0xad, 0x47, 0xdb, 0x1c, 0xd7, 0x2f, 0xb2, 0x57, 0xc4, 0x44,
	0xb0, 0xad, 0x9a, 0xf4, 0xca, 0x94, 0x5a, 0x1b, 0x62, 0x4c, 0x9b, 0xa5, 0xbd, 0xf1, 0xc6, 0x9c,
	0xc2, 0xb0, 0xbb, 0x29, 0xec, 0xe2, 0x9e, 0x43, 0x2b, 0xdc, 0x18, 0x7f, 0x9c, 0x3f, 0xc3, 0xf8,
	0x57, 0xcc, 0x99, 0xc3, 0xc7, 0x52, 0x28, 0xa8, 0x8d, 0x57, 0x9d, 0x33, 0xf3, 0xf0, 0x9c, 0x99,
	0x39, 0xcf, 0x4c, 0x17, 0x78, 0xd8, 0x6e, 0x77, 0xfc, 0x00, 0xab, 0x72, 0x20, 0x15, 0x76, 0x95,
	0x90, 0x17, 0x95, 0x5e, 0x14, 0xaa, 0x90, 0xe5, 0x25, 0x46, 0x97, 0x7e, 0x13, 0xa5, 0x65, 0x35,
	0xc3, 0x6e, 0x37, 0x0c, 0xaa, 0xe6, 0xcf, 0x27, 0x0c, 0x94, 0xaf, 0x06, 0x06, 0x65, 0x6f, 0xc3,
	0x9d, 0x9a, 0x50, 0x4d, 0xef, 0x08, 0x95, 0x83, 0x9f, 0xfb, 0x28, 0x15, 0x7b, 0x02, 0xe0, 0xb7,
	0x08, 0xe4, 0xa3, 0xe4, 0xc9, 0x52, 0xba, 0x5c, 0x70, 0x62, 0x1e, 0xfb, 0x08, 0x36, 0xa6, 0x3f,
	0x91, 0xbd, 0x30, 0x90, 0xc8, 0x76, 0x21, 0xd3, 0x12, 0x4a, 0x10, 0xba, 0xb8, 0xf3, 0xb4, 0x32,
	0xbe, 0xbb, 0xd2, 0xa0, 0xb4, 0x8e, 0x4d, 0x92, 0xa7, 0x42, 0x5e, 0x7c, 0x40, 0x25, 0x1c, 0x02,
	0xdb, 0xdf, 0x53, 0x70, 0x77, 0x2e, 0xce, 0x2c, 0xc8, 0x8f, 0x2e, 0x1b, 0xf0, 0x64, 0x29, 0x59,
	0x2e, 0x38, 0x93, 0x33, 0x63, 0x90, 0x91, 0xfe, 0x10, 0x79, 0xaa, 0x94, 0x2c, 0xa7, 0x1d, 0xb2,
	0x75, 0xba, 0xcd, 0x08, 0x85, 0xc2, 0x33, 0x89, 0x11, 0x4f, 0x53, 0x24, 0xe6, 0x99, 0xc6, 0x4f,
	0xfd, 0x2e, 0xf2, 0x4c, 0x3c, 0xae, 0x3d, 0x9a, 0x33, 0x10, 0x5d, 0xe4, 0x59, 0xba, 0x8b, 0x6c,
	0xed, 0x53, 0x83, 0x1e, 0xf2, 0x5c, 0x29, 0x59, 0xce, 0x3a, 0x64, 0xb3, 0x2d, 0xc8, 0x49, 0x25,
	0x54, 0x5f, 0xf2, 0x35, 0xf2, 0x8e, 0x4e, 0x1a, 0xdb, 0xee, 0x08, 0x97, 0xe7, 0x0d, 0x56, 0xdb,
	0xcc, 0x86, 0xf5, 0x56, 0x78, 0x15, 0x74, 0x42, 0xd1, 0x6a, 0xe8, 0x7c, 0x0b, 0x74, 0xeb, 0x8c,
	0x4f, 0xd7, 0x69, 0xb2, 0xa8, 0x9f, 0x70, 0x30, 0x75, 0x8e, 0xcf, 0x9a, 0x93, 0xda, 0x59, 0x34,
	0x39, 0x69, 0x9b, 0x71, 0x58, 0xeb, 0x45, 0x78, 0xe9, 0xe3, 0x15, 0x5f, 0x2f, 0x25, 0xcb, 0x79,
	0x67, 0x7c, 0xb4, 0x2f, 0x60, 0xf3, 0xac, 0xd7, 0x12, 0x0a, 0x4f, 0xa2, 0xd0, 0x8d, 0x50, 0xca,
	0xf1, 0x4b, 0xfe, 0x69, 0x2b, 0xaf, 0xa7, 0x9d, 0x9e, 0x4f, 0xdb, 0xfe, 0x96, 0x84, 0x7b, 0x0d,
	0xaa, 0xfc, 0xc0, 0x13, 0x81, 0x8b, 0xff, 0xf0, 0xae, 0x58, 0xcb, 0x33, 0xf1, 0x96, 0xdb, 0x3f,
	0x52, 0xb0, 0x39, 0x27, 0x9c, 0x77, 0x7e, 0x07, 0xd9, 0x33, 0xd8, 0x18, 0x33, 0xd4, 0x67, 0xb3,
	0x99, 0xf3, 0xeb, 0x0c, 0x7a, 0x42, 0x79, 0x13, 0x5c, 0x8a, 0x70, 0x33, 0xbe, 0x6b, 0xe2, 0x49,
	0xff, 0xae, 0x78, 0x34, 0x07, 0x89, 0xa7, 0xe0, 0x90, 0xad, 0x7d, 0x9e, 0x90, 0x1e, 0x49, 0xa7,
	0xe0, 0x90, 0x3d, 0xe9, 0x4a, 0x7e, 0x49, 0x57, 0x0a, 0x4b, 0xbb, 0x02, 0x0b, 0x85, 0x58, 0x8c,
	0x09, 0xf1, 0x11, 0x14, 0xda, 0x7e, 0x07, 0xeb, 0x41, 0x0b, 0xbf, 0x90, 0x6c, 0xb2, 0xce, 0xd4,
	0xa1, 0x99, 0xda, 0x7e, 0xe0, 0x4b, 0x8f, 0xff, 0x47, 0x8a, 0x1a, 0x9d, 0xec, 0xaf, 0x0b, 0xda,
	0xab, 0xe7, 0x96, 0x55, 0x21, 0xa3, 0x37, 0x0c, 0xb5, 0xb4, 0xb8, 0xf3, 0x70, 0xc9, 0x98, 0x3b,
	0x04, 0x64, 0xaf, 0x20, 0xab, 0xaf, 0x93, 0x3c, 0xb5, 0x72, 0x31, 0xe8, 0xf7, 0x73, 0x0c, 0xda,
	0x3e, 0x86, 0xad, 0x85, 0x71, 0xf9, 0x97, 0x84, 0x3b, 0x3f, 0xb3, 0xc0, 0xe7, 0x00, 0x0d, 0xf3,
	0x53, 0xf6, 0x16, 0x72, 0xe6, 0x49, 0xd9, 0xb2, 0x8a, 0xac, 0x65, 0x41, 0x3b, 0xc1, 0x6a, 0x90,
	0xeb, 0xd3, 0x14, 0xb2, 0x55, 0xeb, 0xcf, 0xda, 0x9c, 0x02, 0xea, 0x81, 0x7a, 0xfd, 0xf2, 0x90,
	0xc4, 0x66, 0x27, 0x58, 0x1d, 0xfe, 0xef, 0xcf, 0x4c, 0x72, 0x9c, 0x6b, 0xe1, 0x8c, 0x5b, 0xf7,
	0xa7, 0x80, 0x5a, 0x18, 0x76, 0x26, 0x54, 0x07, 0x90, 0x3f, 0x1f, 0x6d, 0x69, 0xf6, 0x20, 0x86,
	0x99, 0x5d, 0xf6, 0x96, 0xb5, 0x28, 0x64, 0x96, 0xba, 0x9d, 0x60, 0xfb, 0x90, 0x76, 0x51, 0xdd,
	0xaa, 0x2d, 0x87, 0x00, 0xa6, 0x24, 0x9a, 0xcf, 0x55, 0xef, 0x75, 0x63, 0x39, 0x44, 0xa3, 0x47,
	0xe0, 0xb6, 0x34, 0xeb, 0x4d, 0x5a, 0x5b, 0x66, 0x85, 0xb1, 0xc7, 0x31, 0xa2, 0xf9, 0xa5, 0x76,
	0x23, 0xcd, 0x7b, 0xc8, 0xbb, 0xa8, 0x8c, 0x22, 0x97, 0x36, 0xa7, 0xb4, 0x22, 0x51, 0x69, 0x27,
	0xb4, 0xfc, 0xcc, 0xdc, 0xdd, 0xa6, 0xcf, 0xb5, 0xfd, 0x8f, 0x6f, 0x5c, 0x5f, 0x79, 0xfd, 0xf3,
	0x4a, 0x33, 0xec, 0x56, 0x87, 0xc3, 0xa1, 0x17, 0x6d, 0xef, 0xed, 0xbd, 0x18, 0xfd, 0xd3, 0x7f,
	0xee, 0x46, 0xbd, 0x66, 0xd5, 0x0d, 0xab, 0x63, 0x8e, 0xea, 0xfc, 0x77, 0xc3, 0x79, 0x8e, 0x3e,
	0x09, 0x76, 0x7f, 0x05, 0x00, 0x00, 0xff, 0xff, 0x1e, 0x29, 0x0d, 0xff, 0x54, 0x08, 0x00, 0x00,
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
	Update(ctx context.Context, in *SystemOfflineTaskMeta, opts ...grpc.CallOption) (*common.Int64Entity, error)
	UpdateProgress(ctx context.Context, in *UpdateProgressRequest, opts ...grpc.CallOption) (*common.BoolEntity, error)
	BatchGet(ctx context.Context, in *BatchGetRequest, opts ...grpc.CallOption) (*BatchGetResponse, error)
	Get(ctx context.Context, in *SystemOfflineTask, opts ...grpc.CallOption) (*SystemOfflineTask, error)
	UpdateFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*common.BoolEntity, error)
	UploadFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*common.BoolEntity, error)
	ChangeStatus(ctx context.Context, in *StatusChangeRequest, opts ...grpc.CallOption) (*common.BoolEntity, error)
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

func (c *systemOfflineTaskServiceClient) Update(ctx context.Context, in *SystemOfflineTaskMeta, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) UpdateProgress(ctx context.Context, in *UpdateProgressRequest, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/updateProgress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) BatchGet(ctx context.Context, in *BatchGetRequest, opts ...grpc.CallOption) (*BatchGetResponse, error) {
	out := new(BatchGetResponse)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/batchGet", in, out, opts...)
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

func (c *systemOfflineTaskServiceClient) UpdateFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/updateFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) UploadFile(ctx context.Context, in *SystemOfflineTaskFile, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/uploadFile", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *systemOfflineTaskServiceClient) ChangeStatus(ctx context.Context, in *StatusChangeRequest, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.SystemOfflineTaskService/changeStatus", in, out, opts...)
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
	Update(context.Context, *SystemOfflineTaskMeta) (*common.Int64Entity, error)
	UpdateProgress(context.Context, *UpdateProgressRequest) (*common.BoolEntity, error)
	BatchGet(context.Context, *BatchGetRequest) (*BatchGetResponse, error)
	Get(context.Context, *SystemOfflineTask) (*SystemOfflineTask, error)
	UpdateFile(context.Context, *SystemOfflineTaskFile) (*common.BoolEntity, error)
	UploadFile(context.Context, *SystemOfflineTaskFile) (*common.BoolEntity, error)
	ChangeStatus(context.Context, *StatusChangeRequest) (*common.BoolEntity, error)
	GetFiles(context.Context, *SystemOfflineTask) (*SystemOfflineTaskFiles, error)
	Finish(context.Context, *SystemOfflineTask) (*SystemOfflineTask, error)
}

// UnimplementedSystemOfflineTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSystemOfflineTaskServiceServer struct {
}

func (*UnimplementedSystemOfflineTaskServiceServer) Create(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) Update(ctx context.Context, req *SystemOfflineTaskMeta) (*common.Int64Entity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) UpdateProgress(ctx context.Context, req *UpdateProgressRequest) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateProgress not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) BatchGet(ctx context.Context, req *BatchGetRequest) (*BatchGetResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGet not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) Get(ctx context.Context, req *SystemOfflineTask) (*SystemOfflineTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) UpdateFile(ctx context.Context, req *SystemOfflineTaskFile) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UpdateFile not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) UploadFile(ctx context.Context, req *SystemOfflineTaskFile) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method UploadFile not implemented")
}
func (*UnimplementedSystemOfflineTaskServiceServer) ChangeStatus(ctx context.Context, req *StatusChangeRequest) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ChangeStatus not implemented")
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

func _SystemOfflineTaskService_UpdateProgress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UpdateProgressRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).UpdateProgress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/UpdateProgress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).UpdateProgress(ctx, req.(*UpdateProgressRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_BatchGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(BatchGetRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).BatchGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/BatchGet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).BatchGet(ctx, req.(*BatchGetRequest))
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

func _SystemOfflineTaskService_UploadFile_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SystemOfflineTaskFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).UploadFile(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/UploadFile",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).UploadFile(ctx, req.(*SystemOfflineTaskFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _SystemOfflineTaskService_ChangeStatus_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StatusChangeRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SystemOfflineTaskServiceServer).ChangeStatus(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SystemOfflineTaskService/ChangeStatus",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SystemOfflineTaskServiceServer).ChangeStatus(ctx, req.(*StatusChangeRequest))
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
			MethodName: "updateProgress",
			Handler:    _SystemOfflineTaskService_UpdateProgress_Handler,
		},
		{
			MethodName: "batchGet",
			Handler:    _SystemOfflineTaskService_BatchGet_Handler,
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
			MethodName: "uploadFile",
			Handler:    _SystemOfflineTaskService_UploadFile_Handler,
		},
		{
			MethodName: "changeStatus",
			Handler:    _SystemOfflineTaskService_ChangeStatus_Handler,
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
