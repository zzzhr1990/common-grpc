// Code generated by protoc-gen-go. DO NOT EDIT.
// source: file/userfile.proto

package userfile

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

type UserFile struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Hash                 string   `protobuf:"bytes,2,opt,name=hash,proto3" json:"hash,omitempty"`
	UserIdentity         int64    `protobuf:"varint,3,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Path                 string   `protobuf:"bytes,4,opt,name=path,proto3" json:"path,omitempty"`
	Name                 string   `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Ext                  string   `protobuf:"bytes,6,opt,name=ext,proto3" json:"ext,omitempty"`
	Size                 int64    `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	Mime                 string   `protobuf:"bytes,8,opt,name=mime,proto3" json:"mime,omitempty"`
	Deleted              bool     `protobuf:"varint,9,opt,name=deleted,proto3" json:"deleted,omitempty"`
	Parent               string   `protobuf:"bytes,10,opt,name=parent,proto3" json:"parent,omitempty"`
	Type                 int32    `protobuf:"varint,11,opt,name=type,proto3" json:"type,omitempty"`
	Directory            bool     `protobuf:"varint,12,opt,name=directory,proto3" json:"directory,omitempty"`
	Atime                int64    `protobuf:"varint,13,opt,name=atime,proto3" json:"atime,omitempty"`
	Ctime                int64    `protobuf:"varint,14,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Mtime                int64    `protobuf:"varint,15,opt,name=mtime,proto3" json:"mtime,omitempty"`
	Version              int32    `protobuf:"varint,16,opt,name=version,proto3" json:"version,omitempty"`
	Locking              bool     `protobuf:"varint,17,opt,name=locking,proto3" json:"locking,omitempty"`
	Op                   int32    `protobuf:"varint,18,opt,name=op,proto3" json:"op,omitempty"`
	Preview              bool     `protobuf:"varint,19,opt,name=preview,proto3" json:"preview,omitempty"`
	PreviewType          int32    `protobuf:"varint,20,opt,name=preview_type,json=previewType,proto3" json:"preview_type,omitempty"`
	Flag                 int32    `protobuf:"varint,21,opt,name=flag,proto3" json:"flag,omitempty"`
	UniqueIdentity       string   `protobuf:"bytes,22,opt,name=unique_identity,json=uniqueIdentity,proto3" json:"unique_identity,omitempty"`
	Share                bool     `protobuf:"varint,23,opt,name=share,proto3" json:"share,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserFile) Reset()         { *m = UserFile{} }
func (m *UserFile) String() string { return proto.CompactTextString(m) }
func (*UserFile) ProtoMessage()    {}
func (*UserFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_8869c2ca76fd1758, []int{0}
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

func (m *UserFile) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UserFile) GetMime() string {
	if m != nil {
		return m.Mime
	}
	return ""
}

func (m *UserFile) GetDeleted() bool {
	if m != nil {
		return m.Deleted
	}
	return false
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

func (m *UserFile) GetVersion() int32 {
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

func (m *UserFile) GetOp() int32 {
	if m != nil {
		return m.Op
	}
	return 0
}

func (m *UserFile) GetPreview() bool {
	if m != nil {
		return m.Preview
	}
	return false
}

func (m *UserFile) GetPreviewType() int32 {
	if m != nil {
		return m.PreviewType
	}
	return 0
}

func (m *UserFile) GetFlag() int32 {
	if m != nil {
		return m.Flag
	}
	return 0
}

func (m *UserFile) GetUniqueIdentity() string {
	if m != nil {
		return m.UniqueIdentity
	}
	return ""
}

func (m *UserFile) GetShare() bool {
	if m != nil {
		return m.Share
	}
	return false
}

type UserFilePageRequest struct {
	Identity             string                   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity         int64                    `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Path                 string                   `protobuf:"bytes,3,opt,name=path,proto3" json:"path,omitempty"`
	PageInfo             *common.PageInfo         `protobuf:"bytes,4,opt,name=page_info,json=pageInfo,proto3" json:"page_info,omitempty"`
	OrderBy              []*common.OrderByRequest `protobuf:"bytes,5,rep,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"`
	Filter               *UserFile                `protobuf:"bytes,6,opt,name=filter,proto3" json:"filter,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *UserFilePageRequest) Reset()         { *m = UserFilePageRequest{} }
func (m *UserFilePageRequest) String() string { return proto.CompactTextString(m) }
func (*UserFilePageRequest) ProtoMessage()    {}
func (*UserFilePageRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8869c2ca76fd1758, []int{1}
}

func (m *UserFilePageRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFilePageRequest.Unmarshal(m, b)
}
func (m *UserFilePageRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFilePageRequest.Marshal(b, m, deterministic)
}
func (m *UserFilePageRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFilePageRequest.Merge(m, src)
}
func (m *UserFilePageRequest) XXX_Size() int {
	return xxx_messageInfo_UserFilePageRequest.Size(m)
}
func (m *UserFilePageRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFilePageRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UserFilePageRequest proto.InternalMessageInfo

func (m *UserFilePageRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UserFilePageRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *UserFilePageRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *UserFilePageRequest) GetPageInfo() *common.PageInfo {
	if m != nil {
		return m.PageInfo
	}
	return nil
}

func (m *UserFilePageRequest) GetOrderBy() []*common.OrderByRequest {
	if m != nil {
		return m.OrderBy
	}
	return nil
}

func (m *UserFilePageRequest) GetFilter() *UserFile {
	if m != nil {
		return m.Filter
	}
	return nil
}

type UserFileListRequest struct {
	Identity             string                   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity         int64                    `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Path                 string                   `protobuf:"bytes,3,opt,name=path,proto3" json:"path,omitempty"`
	ListInfo             *common.ListInfo         `protobuf:"bytes,4,opt,name=list_info,json=listInfo,proto3" json:"list_info,omitempty"`
	OrderBy              []*common.OrderByRequest `protobuf:"bytes,5,rep,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"`
	Filter               *UserFile                `protobuf:"bytes,6,opt,name=filter,proto3" json:"filter,omitempty"`
	XXX_NoUnkeyedLiteral struct{}                 `json:"-"`
	XXX_unrecognized     []byte                   `json:"-"`
	XXX_sizecache        int32                    `json:"-"`
}

func (m *UserFileListRequest) Reset()         { *m = UserFileListRequest{} }
func (m *UserFileListRequest) String() string { return proto.CompactTextString(m) }
func (*UserFileListRequest) ProtoMessage()    {}
func (*UserFileListRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_8869c2ca76fd1758, []int{2}
}

func (m *UserFileListRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFileListRequest.Unmarshal(m, b)
}
func (m *UserFileListRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFileListRequest.Marshal(b, m, deterministic)
}
func (m *UserFileListRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFileListRequest.Merge(m, src)
}
func (m *UserFileListRequest) XXX_Size() int {
	return xxx_messageInfo_UserFileListRequest.Size(m)
}
func (m *UserFileListRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFileListRequest.DiscardUnknown(m)
}

var xxx_messageInfo_UserFileListRequest proto.InternalMessageInfo

func (m *UserFileListRequest) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UserFileListRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *UserFileListRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

func (m *UserFileListRequest) GetListInfo() *common.ListInfo {
	if m != nil {
		return m.ListInfo
	}
	return nil
}

func (m *UserFileListRequest) GetOrderBy() []*common.OrderByRequest {
	if m != nil {
		return m.OrderBy
	}
	return nil
}

func (m *UserFileListRequest) GetFilter() *UserFile {
	if m != nil {
		return m.Filter
	}
	return nil
}

type UserFileListResponse struct {
	Parent               *UserFile   `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	File                 []*UserFile `protobuf:"bytes,2,rep,name=file,proto3" json:"file,omitempty"`
	XXX_NoUnkeyedLiteral struct{}    `json:"-"`
	XXX_unrecognized     []byte      `json:"-"`
	XXX_sizecache        int32       `json:"-"`
}

func (m *UserFileListResponse) Reset()         { *m = UserFileListResponse{} }
func (m *UserFileListResponse) String() string { return proto.CompactTextString(m) }
func (*UserFileListResponse) ProtoMessage()    {}
func (*UserFileListResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8869c2ca76fd1758, []int{3}
}

func (m *UserFileListResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFileListResponse.Unmarshal(m, b)
}
func (m *UserFileListResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFileListResponse.Marshal(b, m, deterministic)
}
func (m *UserFileListResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFileListResponse.Merge(m, src)
}
func (m *UserFileListResponse) XXX_Size() int {
	return xxx_messageInfo_UserFileListResponse.Size(m)
}
func (m *UserFileListResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFileListResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UserFileListResponse proto.InternalMessageInfo

func (m *UserFileListResponse) GetParent() *UserFile {
	if m != nil {
		return m.Parent
	}
	return nil
}

func (m *UserFileListResponse) GetFile() []*UserFile {
	if m != nil {
		return m.File
	}
	return nil
}

type UserFilePageResponse struct {
	Parent               *UserFile        `protobuf:"bytes,1,opt,name=parent,proto3" json:"parent,omitempty"`
	File                 []*UserFile      `protobuf:"bytes,2,rep,name=file,proto3" json:"file,omitempty"`
	PageInfo             *common.PageInfo `protobuf:"bytes,3,opt,name=page_info,json=pageInfo,proto3" json:"page_info,omitempty"`
	XXX_NoUnkeyedLiteral struct{}         `json:"-"`
	XXX_unrecognized     []byte           `json:"-"`
	XXX_sizecache        int32            `json:"-"`
}

func (m *UserFilePageResponse) Reset()         { *m = UserFilePageResponse{} }
func (m *UserFilePageResponse) String() string { return proto.CompactTextString(m) }
func (*UserFilePageResponse) ProtoMessage()    {}
func (*UserFilePageResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_8869c2ca76fd1758, []int{4}
}

func (m *UserFilePageResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserFilePageResponse.Unmarshal(m, b)
}
func (m *UserFilePageResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserFilePageResponse.Marshal(b, m, deterministic)
}
func (m *UserFilePageResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserFilePageResponse.Merge(m, src)
}
func (m *UserFilePageResponse) XXX_Size() int {
	return xxx_messageInfo_UserFilePageResponse.Size(m)
}
func (m *UserFilePageResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UserFilePageResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UserFilePageResponse proto.InternalMessageInfo

func (m *UserFilePageResponse) GetParent() *UserFile {
	if m != nil {
		return m.Parent
	}
	return nil
}

func (m *UserFilePageResponse) GetFile() []*UserFile {
	if m != nil {
		return m.File
	}
	return nil
}

func (m *UserFilePageResponse) GetPageInfo() *common.PageInfo {
	if m != nil {
		return m.PageInfo
	}
	return nil
}

func init() {
	proto.RegisterType((*UserFile)(nil), "services.UserFile")
	proto.RegisterType((*UserFilePageRequest)(nil), "services.UserFilePageRequest")
	proto.RegisterType((*UserFileListRequest)(nil), "services.UserFileListRequest")
	proto.RegisterType((*UserFileListResponse)(nil), "services.UserFileListResponse")
	proto.RegisterType((*UserFilePageResponse)(nil), "services.UserFilePageResponse")
}

func init() { proto.RegisterFile("file/userfile.proto", fileDescriptor_8869c2ca76fd1758) }

var fileDescriptor_8869c2ca76fd1758 = []byte{
	// 662 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x55, 0x4d, 0x6f, 0xd3, 0x30,
	0x18, 0x5e, 0x9a, 0xb6, 0x4b, 0xdd, 0x7d, 0xe1, 0x95, 0x61, 0x55, 0x80, 0x4a, 0x91, 0xa0, 0x42,
	0xa2, 0x81, 0xee, 0x34, 0xc4, 0x69, 0x48, 0x4c, 0x93, 0x90, 0x40, 0x01, 0x2e, 0x5c, 0xaa, 0x2c,
	0x7d, 0x9b, 0x1a, 0x92, 0x38, 0xb3, 0xdd, 0x41, 0x7b, 0xe6, 0x5f, 0xf0, 0x53, 0xf8, 0x6b, 0x1c,
	0xd0, 0x6b, 0x27, 0x6b, 0xab, 0x75, 0x43, 0x1c, 0x76, 0xea, 0xf3, 0x3e, 0xef, 0x77, 0xfc, 0xb8,
	0x26, 0xfb, 0x63, 0x9e, 0x80, 0x3f, 0x55, 0x20, 0x11, 0xf4, 0x73, 0x29, 0xb4, 0xa0, 0x9e, 0x02,
	0x79, 0xc1, 0x23, 0x50, 0xed, 0x76, 0x24, 0xd2, 0x54, 0x64, 0xbe, 0xfd, 0x19, 0x42, 0xa6, 0xb9,
	0x9e, 0xd9, 0xa8, 0xee, 0xef, 0x2a, 0xf1, 0x3e, 0x2b, 0x90, 0x6f, 0x79, 0x02, 0xb4, 0x4d, 0x3c,
	0x3e, 0xb2, 0x6e, 0xe6, 0x74, 0x9c, 0x5e, 0x23, 0xb8, 0xb4, 0x29, 0x25, 0xd5, 0x49, 0xa8, 0x26,
	0xac, 0x62, 0x78, 0x83, 0xe9, 0x63, 0xb2, 0x8d, 0x4d, 0x87, 0x97, 0x49, 0x6e, 0xc7, 0xe9, 0xb9,
	0xc1, 0x16, 0x92, 0xa7, 0x4b, 0x89, 0x79, 0xa8, 0x27, 0xac, 0x6a, 0x13, 0x11, 0x23, 0x97, 0x85,
	0x29, 0xb0, 0x9a, 0xe5, 0x10, 0xd3, 0x3d, 0xe2, 0xc2, 0x0f, 0xcd, 0xea, 0x86, 0x42, 0x88, 0x51,
	0x8a, 0xcf, 0x81, 0x6d, 0x9a, 0xaa, 0x06, 0x23, 0x97, 0xf2, 0x14, 0x98, 0x67, 0x33, 0x11, 0x53,
	0x46, 0x36, 0x47, 0x90, 0x80, 0x86, 0x11, 0x6b, 0x74, 0x9c, 0x9e, 0x17, 0x94, 0x26, 0x3d, 0x20,
	0xf5, 0x3c, 0x94, 0x90, 0x69, 0x46, 0x4c, 0x7c, 0x61, 0x61, 0x15, 0x3d, 0xcb, 0x81, 0x35, 0x3b,
	0x4e, 0xaf, 0x16, 0x18, 0x4c, 0xef, 0x93, 0xc6, 0x88, 0x4b, 0x88, 0xb4, 0x90, 0x33, 0xb6, 0x65,
	0xea, 0x2c, 0x08, 0xda, 0x22, 0xb5, 0x50, 0x63, 0xe3, 0x6d, 0x33, 0x8c, 0x35, 0x90, 0x8d, 0x0c,
	0xbb, 0x63, 0xd9, 0xa8, 0x64, 0x53, 0xc3, 0xee, 0x5a, 0xd6, 0x18, 0x38, 0xe5, 0x05, 0x48, 0xc5,
	0x45, 0xc6, 0xf6, 0x4c, 0xdb, 0xd2, 0x44, 0x4f, 0x22, 0xa2, 0x6f, 0x3c, 0x8b, 0xd9, 0x1d, 0x3b,
	0x7f, 0x61, 0xd2, 0x1d, 0x52, 0x11, 0x39, 0xa3, 0x26, 0xbc, 0x22, 0x72, 0x8c, 0xcc, 0x25, 0x5c,
	0x70, 0xf8, 0xce, 0xf6, 0x6d, 0x64, 0x61, 0xd2, 0x47, 0x64, 0xab, 0x80, 0x43, 0xb3, 0x59, 0xcb,
	0xe4, 0x34, 0x0b, 0xee, 0x13, 0x2e, 0x48, 0x49, 0x75, 0x9c, 0x84, 0x31, 0xbb, 0x6b, 0x97, 0x46,
	0x4c, 0x9f, 0x92, 0xdd, 0x69, 0xc6, 0xcf, 0xa7, 0xb0, 0x38, 0xc3, 0x03, 0xf3, 0xa5, 0x76, 0x2c,
	0x7d, 0x79, 0x8a, 0x2d, 0x52, 0x53, 0x93, 0x50, 0x02, 0xbb, 0x67, 0xfa, 0x5a, 0xa3, 0xfb, 0xc7,
	0x21, 0xfb, 0xa5, 0x7a, 0x3e, 0x84, 0x31, 0x04, 0x70, 0x3e, 0x05, 0xa5, 0x6f, 0x14, 0xd2, 0x15,
	0xd1, 0x54, 0x6e, 0x10, 0x8d, 0xbb, 0x24, 0x1a, 0x9f, 0x34, 0xf2, 0x30, 0x86, 0x21, 0xcf, 0xc6,
	0xc2, 0xa8, 0xa9, 0x39, 0xa0, 0xfd, 0x52, 0xe4, 0x7d, 0x6c, 0x7f, 0x9a, 0x8d, 0x45, 0xe0, 0xe5,
	0x05, 0xa2, 0x87, 0xc4, 0x13, 0x72, 0x04, 0x72, 0x78, 0x36, 0x63, 0xb5, 0x8e, 0xdb, 0x6b, 0x0e,
	0xd8, 0x22, 0xfe, 0x3d, 0x7a, 0x8e, 0x67, 0xc5, 0xc4, 0xc1, 0xa6, 0xb0, 0x36, 0x7d, 0x46, 0xea,
	0x63, 0x9e, 0x68, 0x90, 0x46, 0x89, 0x2b, 0x2d, 0xca, 0x4d, 0x83, 0x22, 0x62, 0x65, 0xfd, 0x77,
	0x5c, 0xe9, 0xdb, 0x5e, 0x3f, 0xe1, 0x4a, 0x5f, 0xb3, 0x3e, 0xb6, 0xb7, 0xeb, 0x27, 0x05, 0xba,
	0xfd, 0xf5, 0xbf, 0x92, 0xd6, 0xea, 0xf6, 0x2a, 0x17, 0x99, 0x02, 0xac, 0x51, 0xdc, 0x3a, 0xe7,
	0xfa, 0x1a, 0xc5, 0x4d, 0x7c, 0x42, 0xaa, 0xf8, 0x9f, 0xc5, 0x2a, 0x66, 0xc0, 0x75, 0x91, 0xc6,
	0xdf, 0xfd, 0xe5, 0x2c, 0x9a, 0x59, 0xa5, 0xdd, 0x5e, 0xb3, 0x55, 0xa5, 0xb9, 0xff, 0x56, 0xda,
	0xe0, 0x67, 0x85, 0x34, 0x31, 0xff, 0xa3, 0x8d, 0xa1, 0x03, 0x52, 0x7f, 0x23, 0x21, 0xd4, 0x40,
	0xd7, 0x34, 0x69, 0xaf, 0xe1, 0xba, 0x1b, 0xd4, 0x27, 0xee, 0x09, 0xe8, 0xff, 0x48, 0x38, 0x21,
	0x55, 0x1c, 0x85, 0x3e, 0xb8, 0xea, 0x5d, 0xba, 0x8b, 0xed, 0x87, 0xd7, 0xb9, 0xed, 0x07, 0xb4,
	0x85, 0xf0, 0xfc, 0xd6, 0x15, 0x5a, 0x52, 0xf5, 0xba, 0x42, 0xcb, 0xc7, 0xde, 0xdd, 0x38, 0x7e,
	0xfd, 0xe5, 0x55, 0xcc, 0xf5, 0x64, 0x7a, 0xd6, 0x8f, 0x44, 0xea, 0xcf, 0xe7, 0xf3, 0x89, 0x7c,
	0x79, 0x74, 0xf4, 0xa2, 0x78, 0x78, 0x9e, 0xc7, 0x32, 0x8f, 0xfc, 0x58, 0xf8, 0x65, 0x19, 0x7f,
	0xe5, 0xd9, 0x3a, 0xab, 0x9b, 0x17, 0xe9, 0xf0, 0x6f, 0x00, 0x00, 0x00, 0xff, 0xff, 0xf0, 0x64,
	0x7b, 0x2e, 0xce, 0x06, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// FileServiceClient is the client API for FileService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileServiceClient interface {
	Create(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error)
	Get(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error)
	Page(ctx context.Context, in *UserFilePageRequest, opts ...grpc.CallOption) (*UserFilePageResponse, error)
	List(ctx context.Context, in *UserFileListRequest, opts ...grpc.CallOption) (*UserFileListResponse, error)
}

type fileServiceClient struct {
	cc *grpc.ClientConn
}

func NewFileServiceClient(cc *grpc.ClientConn) FileServiceClient {
	return &fileServiceClient{cc}
}

func (c *fileServiceClient) Create(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error) {
	out := new(UserFile)
	err := c.cc.Invoke(ctx, "/services.FileService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileServiceClient) Get(ctx context.Context, in *UserFile, opts ...grpc.CallOption) (*UserFile, error) {
	out := new(UserFile)
	err := c.cc.Invoke(ctx, "/services.FileService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileServiceClient) Page(ctx context.Context, in *UserFilePageRequest, opts ...grpc.CallOption) (*UserFilePageResponse, error) {
	out := new(UserFilePageResponse)
	err := c.cc.Invoke(ctx, "/services.FileService/Page", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileServiceClient) List(ctx context.Context, in *UserFileListRequest, opts ...grpc.CallOption) (*UserFileListResponse, error) {
	out := new(UserFileListResponse)
	err := c.cc.Invoke(ctx, "/services.FileService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileServiceServer is the server API for FileService service.
type FileServiceServer interface {
	Create(context.Context, *UserFile) (*UserFile, error)
	Get(context.Context, *UserFile) (*UserFile, error)
	Page(context.Context, *UserFilePageRequest) (*UserFilePageResponse, error)
	List(context.Context, *UserFileListRequest) (*UserFileListResponse, error)
}

// UnimplementedFileServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFileServiceServer struct {
}

func (*UnimplementedFileServiceServer) Create(ctx context.Context, req *UserFile) (*UserFile, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedFileServiceServer) Get(ctx context.Context, req *UserFile) (*UserFile, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedFileServiceServer) Page(ctx context.Context, req *UserFilePageRequest) (*UserFilePageResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Page not implemented")
}
func (*UnimplementedFileServiceServer) List(ctx context.Context, req *UserFileListRequest) (*UserFileListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}

func RegisterFileServiceServer(s *grpc.Server, srv FileServiceServer) {
	s.RegisterService(&_FileService_serviceDesc, srv)
}

func _FileService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileServiceServer).Create(ctx, req.(*UserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFile)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileServiceServer).Get(ctx, req.(*UserFile))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileService_Page_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFilePageRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileServiceServer).Page(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileService/Page",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileServiceServer).Page(ctx, req.(*UserFilePageRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(UserFileListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileServiceServer).List(ctx, req.(*UserFileListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.FileService",
	HandlerType: (*FileServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _FileService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _FileService_Get_Handler,
		},
		{
			MethodName: "Page",
			Handler:    _FileService_Page_Handler,
		},
		{
			MethodName: "List",
			Handler:    _FileService_List_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "file/userfile.proto",
}
