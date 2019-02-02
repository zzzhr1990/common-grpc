// Code generated by protoc-gen-go. DO NOT EDIT.
// source: user/userfile.proto

package userfile

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

type UserFile struct {
	Identity             string      `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Hash                 string      `protobuf:"bytes,2,opt,name=hash,proto3" json:"hash,omitempty"`
	UserIdentity         int64       `protobuf:"varint,3,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	Path                 string      `protobuf:"bytes,4,opt,name=path,proto3" json:"path,omitempty"`
	Name                 string      `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Ext                  string      `protobuf:"bytes,6,opt,name=ext,proto3" json:"ext,omitempty"`
	Size                 uint64      `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	Parent               string      `protobuf:"bytes,8,opt,name=parent,proto3" json:"parent,omitempty"`
	Type                 int32       `protobuf:"varint,9,opt,name=type,proto3" json:"type,omitempty"`
	Directory            bool        `protobuf:"varint,10,opt,name=directory,proto3" json:"directory,omitempty"`
	Atime                int64       `protobuf:"varint,11,opt,name=atime,proto3" json:"atime,omitempty"`
	Ctime                int64       `protobuf:"varint,12,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Mtime                int64       `protobuf:"varint,13,opt,name=mtime,proto3" json:"mtime,omitempty"`
	Version              uint32      `protobuf:"varint,14,opt,name=version,proto3" json:"version,omitempty"`
	Locking              bool        `protobuf:"varint,15,opt,name=locking,proto3" json:"locking,omitempty"`
	Op                   uint32      `protobuf:"varint,16,opt,name=op,proto3" json:"op,omitempty"`
	IgnoreCase           bool        `protobuf:"varint,17,opt,name=ignoreCase,proto3" json:"ignoreCase,omitempty"`
	Children             []*UserFile `protobuf:"bytes,18,rep,name=children,proto3" json:"children,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *UserFile) Reset()         { *m = UserFile{} }
func (m *UserFile) String() string { return proto.CompactTextString(m) }
func (*UserFile) ProtoMessage()    {}
func (*UserFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{0}
}

func (m *UserFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFile.Unmarshal(m, b)
}
func (m *UserFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFile.Marshal(b, m, deterministic)
}
func (m *UserFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFile.Merge(m, src)
}
func (m *UserFile) XXX_Size() int {
	return xxx_messageInfo_UserFile.Size(m)
}
func (m *UserFile) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFile.DiscardUnknown(m)
}

var xxx_messageInfo_UserFile proto.InternalMessageInfo

func (m *UserFile) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UserFile) GetHash() string {
	if m != nil {
		return m.Hash
	}
	return ""
}

func (m *UserFile) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *UserFile) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *UserFile) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserFile) GetExt() string {
	if m != nil {
		return m.Ext
	}
	return ""
}

func (m *UserFile) GetSize() uint64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UserFile) GetParent() string {
	if m != nil {
		return m.Parent
	}
	return ""
}

func (m *UserFile) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *UserFile) GetDirectory() bool {
	if m != nil {
		return m.Directory
	}
	return false
}

func (m *UserFile) GetAtime() int64 {
	if m != nil {
		return m.Atime
	}
	return 0
}

func (m *UserFile) GetCtime() int64 {
	if m != nil {
		return m.Ctime
	}
	return 0
}

func (m *UserFile) GetMtime() int64 {
	if m != nil {
		return m.Mtime
	}
	return 0
}

func (m *UserFile) GetVersion() uint32 {
	if m != nil {
		return m.Version
	}
	return 0
}

func (m *UserFile) GetLocking() bool {
	if m != nil {
		return m.Locking
	}
	return false
}

func (m *UserFile) GetOp() uint32 {
	if m != nil {
		return m.Op
	}
	return 0
}

func (m *UserFile) GetIgnoreCase() bool {
	if m != nil {
		return m.IgnoreCase
	}
	return false
}

func (m *UserFile) GetChildren() []*UserFile {
	if m != nil {
		return m.Children
	}
	return nil
}

type UserFileOperation struct {
	Source               []*UserFile `protobuf:"bytes,1,rep,name=source,proto3" json:"source,omitempty"`
	Destnation           *UserFile   `protobuf:"bytes,2,opt,name=destnation,proto3" json:"destnation,omitempty"`
	OperationCode        int32       `protobuf:"varint,3,opt,name=operationCode,proto3" json:"operationCode,omitempty"`
	UserIdentity         int64       `protobuf:"varint,4,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *UserFileOperation) Reset()         { *m = UserFileOperation{} }
func (m *UserFileOperation) String() string { return proto.CompactTextString(m) }
func (*UserFileOperation) ProtoMessage()    {}
func (*UserFileOperation) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{1}
}

func (m *UserFileOperation) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFileOperation.Unmarshal(m, b)
}
func (m *UserFileOperation) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFileOperation.Marshal(b, m, deterministic)
}
func (m *UserFileOperation) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFileOperation.Merge(m, src)
}
func (m *UserFileOperation) XXX_Size() int {
	return xxx_messageInfo_UserFileOperation.Size(m)
}
func (m *UserFileOperation) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFileOperation.DiscardUnknown(m)
}

var xxx_messageInfo_UserFileOperation proto.InternalMessageInfo

func (m *UserFileOperation) GetSource() []*UserFile {
	if m != nil {
		return m.Source
	}
	return nil
}

func (m *UserFileOperation) GetDestnation() *UserFile {
	if m != nil {
		return m.Destnation
	}
	return nil
}

func (m *UserFileOperation) GetOperationCode() int32 {
	if m != nil {
		return m.OperationCode
	}
	return 0
}

func (m *UserFileOperation) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

type PagedUserFile struct {
	Parent               *UserFile   `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	List                 []*UserFile `protobuf:"bytes,2,rep,name=list,proto3" json:"list,omitempty"`
	TotalCount           int64       `protobuf:"varint,3,opt,name=totalCount,proto3" json:"totalCount,omitempty"`
	TotalPage            int32       `protobuf:"varint,4,opt,name=totalPage,proto3" json:"totalPage,omitempty"`
	Page                 int32       `protobuf:"varint,5,opt,name=page,proto3" json:"page,omitempty"`
	PageSize             int32       `protobuf:"varint,6,opt,name=pageSize,proto3" json:"pageSize,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *PagedUserFile) Reset()         { *m = PagedUserFile{} }
func (m *PagedUserFile) String() string { return proto.CompactTextString(m) }
func (*PagedUserFile) ProtoMessage()    {}
func (*PagedUserFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{2}
}

func (m *PagedUserFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PagedUserFile.Unmarshal(m, b)
}
func (m *PagedUserFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PagedUserFile.Marshal(b, m, deterministic)
}
func (m *PagedUserFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PagedUserFile.Merge(m, src)
}
func (m *PagedUserFile) XXX_Size() int {
	return xxx_messageInfo_PagedUserFile.Size(m)
}
func (m *PagedUserFile) XXX_DiscardUnknown() {
	xxx_messageInfo_PagedUserFile.DiscardUnknown(m)
}

var xxx_messageInfo_PagedUserFile proto.InternalMessageInfo

func (m *PagedUserFile) GetParent() *UserFile {
	if m != nil {
		return m.Parent
	}
	return nil
}

func (m *PagedUserFile) GetList() []*UserFile {
	if m != nil {
		return m.List
	}
	return nil
}

func (m *PagedUserFile) GetTotalCount() int64 {
	if m != nil {
		return m.TotalCount
	}
	return 0
}

func (m *PagedUserFile) GetTotalPage() int32 {
	if m != nil {
		return m.TotalPage
	}
	return 0
}

func (m *PagedUserFile) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *PagedUserFile) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

type DeleteFilesHashRequest struct {
	UserIdentity int64 `protobuf:"varint,1,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	// bool ignoreCase = 2;
	FilesHash            []string `protobuf:"bytes,3,rep,name=filesHash,proto3" json:"filesHash,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFilesHashRequest) Reset()         { *m = DeleteFilesHashRequest{} }
func (m *DeleteFilesHashRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteFilesHashRequest) ProtoMessage()    {}
func (*DeleteFilesHashRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{3}
}

func (m *DeleteFilesHashRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFilesHashRequest.Unmarshal(m, b)
}
func (m *DeleteFilesHashRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFilesHashRequest.Marshal(b, m, deterministic)
}
func (m *DeleteFilesHashRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFilesHashRequest.Merge(m, src)
}
func (m *DeleteFilesHashRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteFilesHashRequest.Size(m)
}
func (m *DeleteFilesHashRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFilesHashRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFilesHashRequest proto.InternalMessageInfo

func (m *DeleteFilesHashRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *DeleteFilesHashRequest) GetFilesHash() []string {
	if m != nil {
		return m.FilesHash
	}
	return nil
}

type UserFileList struct {
	Parent               *UserFile   `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	List                 []*UserFile `protobuf:"bytes,2,rep,name=list,proto3" json:"list,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *UserFileList) Reset()         { *m = UserFileList{} }
func (m *UserFileList) String() string { return proto.CompactTextString(m) }
func (*UserFileList) ProtoMessage()    {}
func (*UserFileList) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{4}
}

func (m *UserFileList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFileList.Unmarshal(m, b)
}
func (m *UserFileList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFileList.Marshal(b, m, deterministic)
}
func (m *UserFileList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFileList.Merge(m, src)
}
func (m *UserFileList) XXX_Size() int {
	return xxx_messageInfo_UserFileList.Size(m)
}
func (m *UserFileList) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFileList.DiscardUnknown(m)
}

var xxx_messageInfo_UserFileList proto.InternalMessageInfo

func (m *UserFileList) GetParent() *UserFile {
	if m != nil {
		return m.Parent
	}
	return nil
}

func (m *UserFileList) GetList() []*UserFile {
	if m != nil {
		return m.List
	}
	return nil
}

type PagedUserFileRequest struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Path                 string   `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	UserIdentity         int64    `protobuf:"varint,3,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	IgnoreCase           bool     `protobuf:"varint,4,opt,name=ignoreCase,proto3" json:"ignoreCase,omitempty"`
	OrderBy              int32    `protobuf:"varint,5,opt,name=orderBy,proto3" json:"orderBy,omitempty"`
	Page                 int32    `protobuf:"varint,6,opt,name=page,proto3" json:"page,omitempty"`
	PageSize             int32    `protobuf:"varint,7,opt,name=pageSize,proto3" json:"pageSize,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PagedUserFileRequest) Reset()         { *m = PagedUserFileRequest{} }
func (m *PagedUserFileRequest) String() string { return proto.CompactTextString(m) }
func (*PagedUserFileRequest) ProtoMessage()    {}
func (*PagedUserFileRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{5}
}

func (m *PagedUserFileRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PagedUserFileRequest.Unmarshal(m, b)
}
func (m *PagedUserFileRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PagedUserFileRequest.Marshal(b, m, deterministic)
}
func (m *PagedUserFileRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PagedUserFileRequest.Merge(m, src)
}
func (m *PagedUserFileRequest) XXX_Size() int {
	return xxx_messageInfo_PagedUserFileRequest.Size(m)
}
func (m *PagedUserFileRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PagedUserFileRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PagedUserFileRequest proto.InternalMessageInfo

func (m *PagedUserFileRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *PagedUserFileRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *PagedUserFileRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *PagedUserFileRequest) GetIgnoreCase() bool {
	if m != nil {
		return m.IgnoreCase
	}
	return false
}

func (m *PagedUserFileRequest) GetOrderBy() int32 {
	if m != nil {
		return m.OrderBy
	}
	return 0
}

func (m *PagedUserFileRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *PagedUserFileRequest) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

type ListUserFileRequest struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Path                 string   `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	UserIdentity         int64    `protobuf:"varint,3,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	IgnoreCase           bool     `protobuf:"varint,4,opt,name=ignoreCase,proto3" json:"ignoreCase,omitempty"`
	OrderBy              int32    `protobuf:"varint,5,opt,name=orderBy,proto3" json:"orderBy,omitempty"`
	Start                int32    `protobuf:"varint,6,opt,name=start,proto3" json:"start,omitempty"`
	ListSize             int32    `protobuf:"varint,7,opt,name=listSize,proto3" json:"listSize,omitempty"`
	Filter               int32    `protobuf:"varint,8,opt,name=filter,proto3" json:"filter,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListUserFileRequest) Reset()         { *m = ListUserFileRequest{} }
func (m *ListUserFileRequest) String() string { return proto.CompactTextString(m) }
func (*ListUserFileRequest) ProtoMessage()    {}
func (*ListUserFileRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{6}
}

func (m *ListUserFileRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListUserFileRequest.Unmarshal(m, b)
}
func (m *ListUserFileRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListUserFileRequest.Marshal(b, m, deterministic)
}
func (m *ListUserFileRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListUserFileRequest.Merge(m, src)
}
func (m *ListUserFileRequest) XXX_Size() int {
	return xxx_messageInfo_ListUserFileRequest.Size(m)
}
func (m *ListUserFileRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListUserFileRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListUserFileRequest proto.InternalMessageInfo

func (m *ListUserFileRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *ListUserFileRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *ListUserFileRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *ListUserFileRequest) GetIgnoreCase() bool {
	if m != nil {
		return m.IgnoreCase
	}
	return false
}

func (m *ListUserFileRequest) GetOrderBy() int32 {
	if m != nil {
		return m.OrderBy
	}
	return 0
}

func (m *ListUserFileRequest) GetStart() int32 {
	if m != nil {
		return m.Start
	}
	return 0
}

func (m *ListUserFileRequest) GetListSize() int32 {
	if m != nil {
		return m.ListSize
	}
	return 0
}

func (m *ListUserFileRequest) GetFilter() int32 {
	if m != nil {
		return m.Filter
	}
	return 0
}

func init() {
	proto.RegisterType((*UserFile)(nil), "services.UserFile")
	proto.RegisterType((*UserFileOperation)(nil), "services.UserFileOperation")
	proto.RegisterType((*PagedUserFile)(nil), "services.PagedUserFile")
	proto.RegisterType((*DeleteFilesHashRequest)(nil), "services.DeleteFilesHashRequest")
	proto.RegisterType((*UserFileList)(nil), "services.UserFileList")
	proto.RegisterType((*PagedUserFileRequest)(nil), "services.PagedUserFileRequest")
	proto.RegisterType((*ListUserFileRequest)(nil), "services.ListUserFileRequest")
}

func init() { proto.RegisterFile("user/userfile.proto", fileDescriptor_d6806edd9a7324ee) }

var fileDescriptor_d6806edd9a7324ee = []byte{
	// 793 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x56, 0xcd, 0x6e, 0xfb, 0x44,
	0x10, 0x8f, 0xe3, 0x38, 0x1f, 0xd3, 0xa4, 0x1f, 0xdb, 0x52, 0x56, 0xa1, 0x54, 0x96, 0x85, 0x90,
	0x55, 0x89, 0x04, 0x52, 0x28, 0xea, 0x09, 0x29, 0x6d, 0x51, 0x2b, 0x21, 0xb5, 0x72, 0xc5, 0xa5,
	0x17, 0xe4, 0xda, 0x53, 0xc7, 0xc2, 0xf1, 0x9a, 0xf5, 0xa6, 0x22, 0x79, 0x37, 0xde, 0x80, 0x0b,
	0x12, 0xe2, 0x2d, 0x78, 0x07, 0xb4, 0xeb, 0xac, 0x93, 0x34, 0x89, 0x28, 0x07, 0xa4, 0xff, 0x25,
	0x9e, 0xf9, 0xed, 0x6f, 0xd6, 0xf3, 0x1d, 0xc3, 0xe1, 0x24, 0x47, 0xde, 0x97, 0x3f, 0x2f, 0x71,
	0x82, 0xbd, 0x8c, 0x33, 0xc1, 0x48, 0x33, 0x47, 0xfe, 0x1a, 0x07, 0x98, 0x77, 0xbb, 0x01, 0x1b,
	0x8f, 0x59, 0xda, 0x2f, 0x1e, 0x3f, 0x61, 0x2a, 0x62, 0x31, 0x2d, 0x58, 0xce, 0xef, 0x26, 0x34,
	0x7f, 0xcc, 0x91, 0x7f, 0x1f, 0x27, 0x48, 0xba, 0xd0, 0x8c, 0xc3, 0xe2, 0x98, 0x1a, 0xb6, 0xe1,
	0xb6, 0xbc, 0x52, 0x27, 0x04, 0x6a, 0x23, 0x3f, 0x1f, 0xd1, 0xaa, 0xc2, 0x95, 0x4c, 0x1c, 0x68,
	0xcb, 0x97, 0xde, 0x69, 0x1b, 0xd3, 0x36, 0x5c, 0xd3, 0x5b, 0xc1, 0xa4, 0x5d, 0xe6, 0x8b, 0x11,
	0xad, 0x15, 0x76, 0x52, 0x96, 0x58, 0xea, 0x8f, 0x91, 0x5a, 0x05, 0x26, 0x65, 0xb2, 0x0f, 0x26,
	0xfe, 0x2a, 0x68, 0x5d, 0x41, 0x52, 0x94, 0xac, 0x3c, 0x9e, 0x21, 0x6d, 0xd8, 0x86, 0x5b, 0xf3,
	0x94, 0x4c, 0x8e, 0xa1, 0x9e, 0xf9, 0x1c, 0x53, 0x41, 0x9b, 0x8a, 0x38, 0xd7, 0x24, 0x57, 0x4c,
	0x33, 0xa4, 0x2d, 0xdb, 0x70, 0x2d, 0x4f, 0xc9, 0xe4, 0x04, 0x5a, 0x61, 0xcc, 0x31, 0x10, 0x8c,
	0x4f, 0x29, 0xd8, 0x86, 0xdb, 0xf4, 0x16, 0x00, 0x39, 0x02, 0xcb, 0x17, 0xf1, 0x18, 0xe9, 0x8e,
	0x72, 0xba, 0x50, 0x24, 0x1a, 0x28, 0xb4, 0x5d, 0xa0, 0x81, 0x46, 0xc7, 0x0a, 0xed, 0x14, 0xa8,
	0x52, 0x08, 0x85, 0xc6, 0x2b, 0xf2, 0x3c, 0x66, 0x29, 0xdd, 0xb5, 0x0d, 0xb7, 0xe3, 0x69, 0x55,
	0x9e, 0x24, 0x2c, 0xf8, 0x39, 0x4e, 0x23, 0xba, 0xa7, 0xde, 0xab, 0x55, 0xb2, 0x0b, 0x55, 0x96,
	0xd1, 0x7d, 0x45, 0xaf, 0xb2, 0x8c, 0x9c, 0x02, 0xc4, 0x51, 0xca, 0x38, 0x5e, 0xf9, 0x39, 0xd2,
	0x03, 0x45, 0x5e, 0x42, 0x48, 0x0f, 0x9a, 0xc1, 0x28, 0x4e, 0x42, 0x8e, 0x29, 0x25, 0xb6, 0xe9,
	0xee, 0x0c, 0x48, 0x4f, 0xd7, 0xb5, 0xa7, 0xeb, 0xe6, 0x95, 0x1c, 0xe7, 0x37, 0x03, 0x0e, 0x34,
	0x7c, 0x9f, 0x21, 0xf7, 0x85, 0xf4, 0xe7, 0x0c, 0xea, 0x39, 0x9b, 0xf0, 0x00, 0xa9, 0xb1, 0xf5,
	0x8e, 0x39, 0x83, 0x0c, 0x00, 0x42, 0xcc, 0x45, 0xaa, 0x2c, 0x55, 0xb5, 0x37, 0xf3, 0x97, 0x58,
	0xe4, 0x33, 0xe8, 0x30, 0xfd, 0xb2, 0x2b, 0x16, 0xa2, 0x6a, 0x04, 0xcb, 0x5b, 0x05, 0xd7, 0xba,
	0xa5, 0xb6, 0xde, 0x2d, 0xce, 0x1f, 0x06, 0x74, 0x1e, 0xfc, 0x08, 0xc3, 0xb2, 0x27, 0xcf, 0xca,
	0x8a, 0x1b, 0x5b, 0x7d, 0xd1, 0x5d, 0xf0, 0x39, 0xd4, 0x92, 0x38, 0x17, 0xb4, 0xba, 0x35, 0x4a,
	0x75, 0x2e, 0xb3, 0x2e, 0x98, 0xf0, 0x93, 0x2b, 0x36, 0x49, 0xc5, 0xbc, 0x6b, 0x97, 0x10, 0xd9,
	0x39, 0x4a, 0x93, 0x9e, 0x28, 0x37, 0x2d, 0x6f, 0x01, 0x14, 0x1d, 0x1d, 0x15, 0xdd, 0x6b, 0x79,
	0x4a, 0x96, 0x93, 0x23, 0x9f, 0x8f, 0xb2, 0x5f, 0xeb, 0x0a, 0x2f, 0x75, 0xe7, 0x09, 0x8e, 0xaf,
	0x31, 0x41, 0x81, 0xd2, 0x83, 0xfc, 0xd6, 0xcf, 0x47, 0x1e, 0xfe, 0x32, 0xc1, 0x5c, 0xac, 0x65,
	0xc4, 0xd8, 0x30, 0x3f, 0x27, 0xd0, 0x7a, 0xd1, 0x76, 0xd4, 0xb4, 0x4d, 0xb7, 0xe5, 0x2d, 0x00,
	0xe7, 0x19, 0xda, 0x3a, 0xb6, 0x1f, 0x64, 0x64, 0xff, 0x43, 0xb6, 0x9c, 0x3f, 0x0d, 0x38, 0x5a,
	0xa9, 0x89, 0x76, 0xff, 0x5f, 0xd6, 0x85, 0x1a, 0xfb, 0xea, 0xd2, 0xd8, 0xbf, 0x67, 0x5d, 0xac,
	0x0e, 0x44, 0x6d, 0x6d, 0x20, 0x28, 0x34, 0x18, 0x0f, 0x91, 0x0f, 0xa7, 0xf3, 0xfc, 0x6b, 0xb5,
	0x2c, 0x4b, 0x7d, 0x4b, 0x59, 0x1a, 0x6f, 0xca, 0xf2, 0xb7, 0x01, 0x87, 0x32, 0x67, 0x1f, 0x76,
	0x54, 0x47, 0x60, 0xe5, 0xc2, 0xe7, 0x62, 0x1e, 0x56, 0xa1, 0x48, 0x1f, 0x65, 0x69, 0x96, 0xe3,
	0xd2, 0xba, 0x5c, 0x91, 0x2f, 0x71, 0x22, 0x90, 0xab, 0x15, 0x69, 0x79, 0x73, 0x6d, 0xf0, 0x97,
	0x09, 0x7b, 0x3a, 0xd6, 0xc7, 0xa2, 0xd4, 0x64, 0x00, 0xf5, 0x80, 0xa3, 0x2f, 0x90, 0x6c, 0x28,
	0x7f, 0x77, 0x03, 0xe6, 0x54, 0x48, 0x1f, 0xcc, 0x08, 0xc5, 0x7f, 0x30, 0xb8, 0x00, 0x88, 0x50,
	0xdc, 0xf3, 0x9b, 0x71, 0x26, 0x53, 0xf8, 0x6e, 0xbb, 0x07, 0x38, 0x94, 0x41, 0x5d, 0xeb, 0x95,
	0x3d, 0x9c, 0xaa, 0xf1, 0x3b, 0x5d, 0x90, 0x37, 0x75, 0x65, 0xf7, 0xe3, 0x2d, 0xe7, 0x4e, 0x85,
	0xdc, 0x42, 0x67, 0xe5, 0x46, 0xf2, 0xe9, 0x82, 0xbb, 0xa1, 0x15, 0xba, 0xc7, 0xeb, 0x7e, 0x49,
	0x9a, 0x53, 0x21, 0xdf, 0x41, 0xa3, 0x58, 0x6e, 0x48, 0x3e, 0x59, 0x27, 0x95, 0x9b, 0xb7, 0xfb,
	0xd1, 0xe2, 0xf0, 0x2e, 0x15, 0xe7, 0x83, 0x9b, 0x62, 0xcd, 0x55, 0xc8, 0x1d, 0xb4, 0x43, 0xb5,
	0x14, 0x86, 0x53, 0x39, 0xc8, 0xc4, 0x5e, 0x10, 0x37, 0x2f, 0x8b, 0x37, 0x57, 0x5d, 0x7c, 0xad,
	0xaf, 0x1a, 0x7e, 0xfb, 0xf4, 0x4d, 0x14, 0x8b, 0xd1, 0xe4, 0xb9, 0x17, 0xb0, 0x71, 0x7f, 0x36,
	0x9b, 0x8d, 0xf8, 0x57, 0x97, 0x97, 0x5f, 0xce, 0xff, 0xee, 0xbf, 0x88, 0x78, 0x16, 0xf4, 0x23,
	0xd6, 0xd7, 0xd6, 0xe5, 0x77, 0xc2, 0x73, 0x5d, 0x7d, 0x02, 0x9c, 0xff, 0x13, 0x00, 0x00, 0xff,
	0xff, 0xd2, 0xd2, 0xff, 0x99, 0x3f, 0x08, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// UserFileServiceClient is the client API for UserFileService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type UserFileServiceClient interface {
	// rpc createUser (GrpcUser) returns (BoolEntity) {}
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	Create(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error)
	Get(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error)
	GetOrEmpty(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error)
	ListDirectoryByPage(ctx context.Context, in *PagedUserFileRequest, opts ...grpc.CallOption) (*PagedUserFile, error)
	ListDirectory(ctx context.Context, in *ListUserFileRequest, opts ...grpc.CallOption) (*UserFileList, error)
	Operate(ctx context.Context, in *UserFileOperation, opts ...grpc.CallOption) (*common.Int32Entity, error)
	DeleteByHash(ctx context.Context, in *DeleteFilesHashRequest, opts ...grpc.CallOption) (*common.Int64Entity, error)
}

type userFileServiceClient struct {
	cc *grpc.ClientConn
}

func NewUserFileServiceClient(cc *grpc.ClientConn) UserFileServiceClient {
	return &userFileServiceClient{cc}
}

func (c *userFileServiceClient) Create(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error) {
	out := new(UserFile)
	err := c.cc.Invoke(ctx, "/services.UserFileService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) Get(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error) {
	out := new(UserFile)
	err := c.cc.Invoke(ctx, "/services.UserFileService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) GetOrEmpty(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error) {
	out := new(UserFile)
	err := c.cc.Invoke(ctx, "/services.UserFileService/getOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) ListDirectoryByPage(ctx context.Context, in *PagedUserFileRequest, opts ...grpc.CallOption) (*PagedUserFile, error) {
	out := new(PagedUserFile)
	err := c.cc.Invoke(ctx, "/services.UserFileService/listDirectoryByPage", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) ListDirectory(ctx context.Context, in *ListUserFileRequest, opts ...grpc.CallOption) (*UserFileList, error) {
	out := new(UserFileList)
	err := c.cc.Invoke(ctx, "/services.UserFileService/listDirectory", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) Operate(ctx context.Context, in *UserFileOperation, opts ...grpc.CallOption) (*common.Int32Entity, error) {
	out := new(common.Int32Entity)
	err := c.cc.Invoke(ctx, "/services.UserFileService/operate", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) DeleteByHash(ctx context.Context, in *DeleteFilesHashRequest, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserFileService/deleteByHash", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// UserFileServiceServer is the server API for UserFileService service.
type UserFileServiceServer interface {
	// rpc createUser (GrpcUser) returns (BoolEntity) {}
	// rpc getUser (Uint64Entity) returns (GrpcUser) {}
	Create(context.Context, *UserFile) (*UserFile, error)
	Get(context.Context, *UserFile) (*UserFile, error)
	GetOrEmpty(context.Context, *UserFile) (*UserFile, error)
	ListDirectoryByPage(context.Context, *PagedUserFileRequest) (*PagedUserFile, error)
	ListDirectory(context.Context, *ListUserFileRequest) (*UserFileList, error)
	Operate(context.Context, *UserFileOperation) (*common.Int32Entity, error)
	DeleteByHash(context.Context, *DeleteFilesHashRequest) (*common.Int64Entity, error)
}

func RegisterUserFileServiceServer(s *grpc.Server, srv UserFileServiceServer) {
	s.RegisterService(&_UserFileService_serviceDesc, srv)
}

func _UserFileService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).Create(ctx, req.(*UserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).Get(ctx, req.(*UserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_GetOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).GetOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/GetOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).GetOrEmpty(ctx, req.(*UserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_ListDirectoryByPage_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PagedUserFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).ListDirectoryByPage(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/ListDirectoryByPage",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).ListDirectoryByPage(ctx, req.(*PagedUserFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_ListDirectory_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).ListDirectory(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/ListDirectory",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).ListDirectory(ctx, req.(*ListUserFileRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_Operate_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFileOperation)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).Operate(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/Operate",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).Operate(ctx, req.(*UserFileOperation))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_DeleteByHash_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFilesHashRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).DeleteByHash(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/DeleteByHash",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).DeleteByHash(ctx, req.(*DeleteFilesHashRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _UserFileService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.UserFileService",
	HandlerType: (*UserFileServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _UserFileService_Create_Handler,
		},
		{
			MethodName: "get",
			Handler:    _UserFileService_Get_Handler,
		},
		{
			MethodName: "getOrEmpty",
			Handler:    _UserFileService_GetOrEmpty_Handler,
		},
		{
			MethodName: "listDirectoryByPage",
			Handler:    _UserFileService_ListDirectoryByPage_Handler,
		},
		{
			MethodName: "listDirectory",
			Handler:    _UserFileService_ListDirectory_Handler,
		},
		{
			MethodName: "operate",
			Handler:    _UserFileService_Operate_Handler,
		},
		{
			MethodName: "deleteByHash",
			Handler:    _UserFileService_DeleteByHash_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user/userfile.proto",
}
