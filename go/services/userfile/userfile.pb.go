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

type DeleteFilesRequest struct {
	UserIdentity         int64    `protobuf:"varint,1,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	FilesIdentity        []string `protobuf:"bytes,2,rep,name=filesIdentity,proto3" json:"filesIdentity,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFilesRequest) Reset()         { *m = DeleteFilesRequest{} }
func (m *DeleteFilesRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteFilesRequest) ProtoMessage()    {}
func (*DeleteFilesRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_d6806edd9a7324ee, []int{3}
}

func (m *DeleteFilesRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_DeleteFilesRequest.Unmarshal(m, b)
}
func (m *DeleteFilesRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_DeleteFilesRequest.Marshal(b, m, deterministic)
}
func (m *DeleteFilesRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_DeleteFilesRequest.Merge(m, src)
}
func (m *DeleteFilesRequest) XXX_Size() int {
	return xxx_messageInfo_DeleteFilesRequest.Size(m)
}
func (m *DeleteFilesRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_DeleteFilesRequest.DiscardUnknown(m)
}

var xxx_messageInfo_DeleteFilesRequest proto.InternalMessageInfo

func (m *DeleteFilesRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *DeleteFilesRequest) GetFilesIdentity() []string {
	if m != nil {
		return m.FilesIdentity
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
	proto.RegisterType((*DeleteFilesRequest)(nil), "services.DeleteFilesRequest")
	proto.RegisterType((*UserFileList)(nil), "services.UserFileList")
	proto.RegisterType((*PagedUserFileRequest)(nil), "services.PagedUserFileRequest")
	proto.RegisterType((*ListUserFileRequest)(nil), "services.ListUserFileRequest")
}

func init() { proto.RegisterFile("user/userfile.proto", fileDescriptor_d6806edd9a7324ee) }

var fileDescriptor_d6806edd9a7324ee = []byte{
	// 827 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xcc, 0x56, 0x5f, 0x6f, 0xe2, 0x46,
	0x10, 0xc7, 0x80, 0xf9, 0x33, 0x09, 0xf9, 0xb3, 0xa1, 0xe9, 0x8a, 0xa6, 0x11, 0xb2, 0xa2, 0x0a,
	0x45, 0x2a, 0xb4, 0xa4, 0x4d, 0x95, 0xbe, 0x54, 0x22, 0x49, 0x55, 0xa4, 0x54, 0x89, 0x9c, 0xf4,
	0xa5, 0x0f, 0xad, 0x1c, 0x7b, 0x62, 0xac, 0x1a, 0xaf, 0xbb, 0x5e, 0xa2, 0x83, 0xef, 0x76, 0xdf,
	0xe0, 0x5e, 0x4e, 0xba, 0x6f, 0x70, 0xcf, 0xf7, 0x1d, 0x4e, 0xbb, 0x66, 0x0d, 0x04, 0xd0, 0xe5,
	0x4e, 0x3a, 0xe9, 0x5e, 0xf0, 0xce, 0x6f, 0x7f, 0xb3, 0x9e, 0xd9, 0xf9, 0xcd, 0x60, 0xd8, 0x1b,
	0x25, 0xc8, 0x3b, 0xf2, 0xe7, 0x21, 0x08, 0xb1, 0x1d, 0x73, 0x26, 0x18, 0xa9, 0x24, 0xc8, 0x1f,
	0x03, 0x17, 0x93, 0x46, 0xc3, 0x65, 0xc3, 0x21, 0x8b, 0x3a, 0xe9, 0xe3, 0x5f, 0x8c, 0x44, 0x20,
	0xc6, 0x29, 0xcb, 0x7a, 0x55, 0x80, 0xca, 0x5f, 0x09, 0xf2, 0xdf, 0x83, 0x10, 0x49, 0x03, 0x2a,
	0x81, 0x97, 0x6e, 0x53, 0xa3, 0x69, 0xb4, 0xaa, 0x76, 0x66, 0x13, 0x02, 0xc5, 0x81, 0x93, 0x0c,
	0x68, 0x5e, 0xe1, 0x6a, 0x4d, 0x2c, 0xd8, 0x94, 0x2f, 0xed, 0x6b, 0x9f, 0x42, 0xd3, 0x68, 0x15,
	0xec, 0x05, 0x4c, 0xfa, 0xc5, 0x8e, 0x18, 0xd0, 0x62, 0xea, 0x27, 0xd7, 0x12, 0x8b, 0x9c, 0x21,
	0x52, 0x33, 0xc5, 0xe4, 0x9a, 0xec, 0x40, 0x01, 0x5f, 0x08, 0x5a, 0x52, 0x90, 0x5c, 0x4a, 0x56,
	0x12, 0x4c, 0x90, 0x96, 0x9b, 0x46, 0xab, 0x68, 0xab, 0x35, 0xd9, 0x87, 0x52, 0xec, 0x70, 0x8c,
	0x04, 0xad, 0x28, 0xe2, 0xd4, 0x92, 0x5c, 0x31, 0x8e, 0x91, 0x56, 0x9b, 0x46, 0xcb, 0xb4, 0xd5,
	0x9a, 0x1c, 0x40, 0xd5, 0x0b, 0x38, 0xba, 0x82, 0xf1, 0x31, 0x85, 0xa6, 0xd1, 0xaa, 0xd8, 0x33,
	0x80, 0xd4, 0xc1, 0x74, 0x44, 0x30, 0x44, 0xba, 0xa1, 0x82, 0x4e, 0x0d, 0x89, 0xba, 0x0a, 0xdd,
	0x4c, 0x51, 0x57, 0xa3, 0x43, 0x85, 0xd6, 0x52, 0x54, 0x19, 0x84, 0x42, 0xf9, 0x11, 0x79, 0x12,
	0xb0, 0x88, 0x6e, 0x35, 0x8d, 0x56, 0xcd, 0xd6, 0xa6, 0xdc, 0x09, 0x99, 0xfb, 0x5f, 0x10, 0xf9,
	0x74, 0x5b, 0xbd, 0x57, 0x9b, 0x64, 0x0b, 0xf2, 0x2c, 0xa6, 0x3b, 0x8a, 0x9e, 0x67, 0x31, 0x39,
	0x04, 0x08, 0xfc, 0x88, 0x71, 0x3c, 0x77, 0x12, 0xa4, 0xbb, 0x8a, 0x3c, 0x87, 0x90, 0x36, 0x54,
	0xdc, 0x41, 0x10, 0x7a, 0x1c, 0x23, 0x4a, 0x9a, 0x85, 0xd6, 0x46, 0x97, 0xb4, 0x75, 0x5d, 0xdb,
	0xba, 0x6e, 0x76, 0xc6, 0xb1, 0x5e, 0x1a, 0xb0, 0xab, 0xe1, 0xeb, 0x18, 0xb9, 0x23, 0x64, 0x3c,
	0xc7, 0x50, 0x4a, 0xd8, 0x88, 0xbb, 0x48, 0x8d, 0xb5, 0x67, 0x4c, 0x19, 0xa4, 0x0b, 0xe0, 0x61,
	0x22, 0x22, 0xe5, 0xa9, 0xaa, 0xbd, 0x9a, 0x3f, 0xc7, 0x22, 0x47, 0x50, 0x63, 0xfa, 0x65, 0xe7,
	0xcc, 0x43, 0x25, 0x04, 0xd3, 0x5e, 0x04, 0x97, 0xd4, 0x52, 0x5c, 0x56, 0x8b, 0xf5, 0xda, 0x80,
	0xda, 0x8d, 0xe3, 0xa3, 0x97, 0x69, 0xf2, 0x38, 0xab, 0xb8, 0xb1, 0x36, 0x16, 0xad, 0x82, 0xef,
	0xa0, 0x18, 0x06, 0x89, 0xa0, 0xf9, 0xb5, 0x59, 0xaa, 0x7d, 0x79, 0xeb, 0x82, 0x09, 0x27, 0x3c,
	0x67, 0xa3, 0x48, 0x4c, 0x55, 0x3b, 0x87, 0x48, 0xe5, 0x28, 0x4b, 0x46, 0xa2, 0xc2, 0x34, 0xed,
	0x19, 0x90, 0x2a, 0xda, 0x4f, 0xd5, 0x6b, 0xda, 0x6a, 0x2d, 0x3b, 0x47, 0x3e, 0x6f, 0xa5, 0x5e,
	0x4b, 0x0a, 0xcf, 0x6c, 0xeb, 0x1f, 0x20, 0x17, 0x18, 0xa2, 0x40, 0x19, 0x41, 0x62, 0xe3, 0xff,
	0x23, 0x4c, 0xc4, 0xd2, 0x6d, 0x18, 0x2b, 0x7a, 0xe7, 0x08, 0x6a, 0xb2, 0xa1, 0x93, 0x8c, 0x24,
	0x13, 0xab, 0xda, 0x8b, 0xa0, 0x75, 0x0f, 0x9b, 0x3a, 0xbf, 0x2b, 0x99, 0xdd, 0x67, 0xb8, 0x31,
	0xeb, 0x8d, 0x01, 0xf5, 0x85, 0xba, 0xe8, 0x34, 0x3e, 0x30, 0x32, 0x54, 0xeb, 0xe7, 0xe7, 0x5a,
	0xff, 0x39, 0x23, 0x63, 0xb1, 0x29, 0x8a, 0x4b, 0x4d, 0x41, 0xa1, 0xcc, 0xb8, 0x87, 0xbc, 0x37,
	0x9e, 0xd6, 0x40, 0x9b, 0x59, 0x69, 0x4a, 0x6b, 0x4a, 0x53, 0x7e, 0x52, 0x9a, 0x77, 0x06, 0xec,
	0xc9, 0x3b, 0xfb, 0xb2, 0xb3, 0xaa, 0x83, 0x99, 0x08, 0x87, 0x8b, 0x69, 0x5a, 0xa9, 0x21, 0x63,
	0x94, 0xa5, 0x99, 0xcf, 0x4b, 0xdb, 0x72, 0x4c, 0x3e, 0x04, 0xa1, 0x40, 0xae, 0xc6, 0xa4, 0x69,
	0x4f, 0xad, 0xee, 0xdb, 0x22, 0x6c, 0xeb, 0x5c, 0x6f, 0xd3, 0x52, 0x93, 0x2e, 0x94, 0x5c, 0x8e,
	0x8e, 0x40, 0xb2, 0xa2, 0xfc, 0x8d, 0x15, 0x98, 0x95, 0x23, 0x1d, 0x28, 0xf8, 0x28, 0x3e, 0xc2,
	0xe1, 0x14, 0xc0, 0x47, 0x71, 0xcd, 0x2f, 0x87, 0xb1, 0xbc, 0xc2, 0x67, 0xfb, 0xdd, 0xc0, 0x9e,
	0x4c, 0xea, 0x42, 0x8f, 0xed, 0xde, 0x58, 0xb5, 0xe0, 0xe1, 0x8c, 0xbc, 0x4a, 0x95, 0x8d, 0xaf,
	0xd7, 0xec, 0x5b, 0x39, 0xf2, 0x07, 0xd4, 0x16, 0x4e, 0x24, 0xdf, 0xce, 0xb8, 0x2b, 0xa4, 0xd0,
	0xd8, 0x5f, 0x8e, 0x4b, 0xd2, 0xac, 0x1c, 0xb9, 0x86, 0xfa, 0xd5, 0xfc, 0x49, 0xfd, 0x48, 0x20,
	0x77, 0xc2, 0x4f, 0x3f, 0xf0, 0x37, 0x28, 0xa7, 0x13, 0x13, 0xc9, 0x37, 0xcb, 0xa4, 0x6c, 0x9c,
	0x37, 0xbe, 0x9a, 0x6d, 0xf6, 0x23, 0x71, 0xd2, 0xbd, 0x4c, 0xe7, 0x40, 0x8e, 0xf4, 0x61, 0xc7,
	0x53, 0x93, 0xa6, 0x37, 0xce, 0x64, 0x77, 0x30, 0x23, 0x2f, 0x4f, 0xa1, 0x27, 0x47, 0x9d, 0xfe,
	0x94, 0x1d, 0xf5, 0x2b, 0x6c, 0xfc, 0xc9, 0x1e, 0xf1, 0x8e, 0xdd, 0x71, 0xf9, 0x4f, 0xbf, 0xaa,
	0x62, 0xeb, 0x7c, 0x7b, 0xbf, 0xfc, 0xfd, 0xb3, 0x1f, 0x88, 0xc1, 0xe8, 0xbe, 0xed, 0xb2, 0x61,
	0x67, 0x32, 0x99, 0x0c, 0xf8, 0x8f, 0x67, 0x67, 0x3f, 0x4c, 0xbf, 0x3f, 0xbe, 0xf7, 0x79, 0xec,
	0x76, 0x7c, 0xd6, 0xd1, 0xde, 0xd9, 0x87, 0xcb, 0x7d, 0x49, 0x7d, 0x93, 0x9c, 0xbc, 0x0f, 0x00,
	0x00, 0xff, 0xff, 0xe2, 0xa2, 0xb2, 0xc1, 0xd0, 0x08, 0x00, 0x00,
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
	ListDirectoryInteral(ctx context.Context, in *ListUserFileRequest, opts ...grpc.CallOption) (*UserFileList, error)
	Operate(ctx context.Context, in *UserFileOperation, opts ...grpc.CallOption) (*common.Int32Entity, error)
	DeleteByIdentity(ctx context.Context, in *DeleteFilesRequest, opts ...grpc.CallOption) (*common.Int64Entity, error)
	MoveToTrash(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*common.Int64Entity, error)
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

func (c *userFileServiceClient) ListDirectoryInteral(ctx context.Context, in *ListUserFileRequest, opts ...grpc.CallOption) (*UserFileList, error) {
	out := new(UserFileList)
	err := c.cc.Invoke(ctx, "/services.UserFileService/ListDirectoryInteral", in, out, opts...)
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

func (c *userFileServiceClient) DeleteByIdentity(ctx context.Context, in *DeleteFilesRequest, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserFileService/deleteByIdentity", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *userFileServiceClient) MoveToTrash(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*common.Int64Entity, error) {
	out := new(common.Int64Entity)
	err := c.cc.Invoke(ctx, "/services.UserFileService/MoveToTrash", in, out, opts...)
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
	ListDirectoryInteral(context.Context, *ListUserFileRequest) (*UserFileList, error)
	Operate(context.Context, *UserFileOperation) (*common.Int32Entity, error)
	DeleteByIdentity(context.Context, *DeleteFilesRequest) (*common.Int64Entity, error)
	MoveToTrash(context.Context, *UserFile) (*common.Int64Entity, error)
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

func _UserFileService_ListDirectoryInteral_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserFileRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).ListDirectoryInteral(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/ListDirectoryInteral",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).ListDirectoryInteral(ctx, req.(*ListUserFileRequest))
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

func _UserFileService_DeleteByIdentity_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(DeleteFilesRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).DeleteByIdentity(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/DeleteByIdentity",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).DeleteByIdentity(ctx, req.(*DeleteFilesRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _UserFileService_MoveToTrash_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(UserFileServiceServer).MoveToTrash(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.UserFileService/MoveToTrash",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(UserFileServiceServer).MoveToTrash(ctx, req.(*UserFile))
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
			MethodName: "ListDirectoryInteral",
			Handler:    _UserFileService_ListDirectoryInteral_Handler,
		},
		{
			MethodName: "operate",
			Handler:    _UserFileService_Operate_Handler,
		},
		{
			MethodName: "deleteByIdentity",
			Handler:    _UserFileService_DeleteByIdentity_Handler,
		},
		{
			MethodName: "MoveToTrash",
			Handler:    _UserFileService_MoveToTrash_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "user/userfile.proto",
}
