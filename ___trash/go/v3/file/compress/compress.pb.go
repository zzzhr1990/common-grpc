// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.5
// source: file/compress.proto

package compress

import (
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

type CreateZipDownloadRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity     []string `protobuf:"bytes,1,rep,name=identity,proto3" json:"identity,omitempty"`
	Path         []string `protobuf:"bytes,2,rep,name=path,proto3" json:"path,omitempty"`
	UserIdentity int64    `protobuf:"varint,3,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Password     string   `protobuf:"bytes,4,opt,name=password,proto3" json:"password,omitempty"`
	Op           int32    `protobuf:"varint,5,opt,name=op,proto3" json:"op,omitempty"`
}

func (x *CreateZipDownloadRequest) Reset() {
	*x = CreateZipDownloadRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_compress_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CreateZipDownloadRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CreateZipDownloadRequest) ProtoMessage() {}

func (x *CreateZipDownloadRequest) ProtoReflect() protoreflect.Message {
	mi := &file_file_compress_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CreateZipDownloadRequest.ProtoReflect.Descriptor instead.
func (*CreateZipDownloadRequest) Descriptor() ([]byte, []int) {
	return file_file_compress_proto_rawDescGZIP(), []int{0}
}

func (x *CreateZipDownloadRequest) GetIdentity() []string {
	if x != nil {
		return x.Identity
	}
	return nil
}

func (x *CreateZipDownloadRequest) GetPath() []string {
	if x != nil {
		return x.Path
	}
	return nil
}

func (x *CreateZipDownloadRequest) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *CreateZipDownloadRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *CreateZipDownloadRequest) GetOp() int32 {
	if x != nil {
		return x.Op
	}
	return 0
}

type ZipDownloadInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity        string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity    int64  `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Count           int64  `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	Size            int64  `protobuf:"varint,4,opt,name=size,proto3" json:"size,omitempty"`
	Password        string `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
	DownloadAddress string `protobuf:"bytes,6,opt,name=download_address,json=downloadAddress,proto3" json:"download_address,omitempty"`
}

func (x *ZipDownloadInfo) Reset() {
	*x = ZipDownloadInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_compress_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZipDownloadInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZipDownloadInfo) ProtoMessage() {}

func (x *ZipDownloadInfo) ProtoReflect() protoreflect.Message {
	mi := &file_file_compress_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZipDownloadInfo.ProtoReflect.Descriptor instead.
func (*ZipDownloadInfo) Descriptor() ([]byte, []int) {
	return file_file_compress_proto_rawDescGZIP(), []int{1}
}

func (x *ZipDownloadInfo) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ZipDownloadInfo) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *ZipDownloadInfo) GetCount() int64 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *ZipDownloadInfo) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ZipDownloadInfo) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *ZipDownloadInfo) GetDownloadAddress() string {
	if x != nil {
		return x.DownloadAddress
	}
	return ""
}

type ZipDownloadDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity     string        `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity int64         `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Count        int64         `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	Size         int64         `protobuf:"varint,4,opt,name=size,proto3" json:"size,omitempty"`
	Data         []*SimpleFile `protobuf:"bytes,5,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *ZipDownloadDetail) Reset() {
	*x = ZipDownloadDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_compress_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ZipDownloadDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ZipDownloadDetail) ProtoMessage() {}

func (x *ZipDownloadDetail) ProtoReflect() protoreflect.Message {
	mi := &file_file_compress_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ZipDownloadDetail.ProtoReflect.Descriptor instead.
func (*ZipDownloadDetail) Descriptor() ([]byte, []int) {
	return file_file_compress_proto_rawDescGZIP(), []int{2}
}

func (x *ZipDownloadDetail) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ZipDownloadDetail) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *ZipDownloadDetail) GetCount() int64 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *ZipDownloadDetail) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *ZipDownloadDetail) GetData() []*SimpleFile {
	if x != nil {
		return x.Data
	}
	return nil
}

type SimpleFile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Path      string `protobuf:"bytes,2,opt,name=path,proto3" json:"path,omitempty"`
	Directory bool   `protobuf:"varint,3,opt,name=directory,proto3" json:"directory,omitempty"`
	Hash      string `protobuf:"bytes,4,opt,name=hash,proto3" json:"hash,omitempty"`
	Size      int64  `protobuf:"varint,5,opt,name=size,proto3" json:"size,omitempty"`
}

func (x *SimpleFile) Reset() {
	*x = SimpleFile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_file_compress_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SimpleFile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SimpleFile) ProtoMessage() {}

func (x *SimpleFile) ProtoReflect() protoreflect.Message {
	mi := &file_file_compress_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SimpleFile.ProtoReflect.Descriptor instead.
func (*SimpleFile) Descriptor() ([]byte, []int) {
	return file_file_compress_proto_rawDescGZIP(), []int{3}
}

func (x *SimpleFile) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *SimpleFile) GetDirectory() bool {
	if x != nil {
		return x.Directory
	}
	return false
}

func (x *SimpleFile) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *SimpleFile) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

var File_file_compress_proto protoreflect.FileDescriptor

var file_file_compress_proto_rawDesc = []byte{
	0x0a, 0x13, 0x66, 0x69, 0x6c, 0x65, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x72, 0x65, 0x73, 0x73, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x22,
	0x9b, 0x01, 0x0a, 0x18, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77,
	0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x03, 0x28, 0x09, 0x52, 0x08,
	0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68,
	0x18, 0x02, 0x20, 0x03, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68, 0x12, 0x23, 0x0a, 0x0d,
	0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x0e, 0x0a,
	0x02, 0x6f, 0x70, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x6f, 0x70, 0x22, 0xc3, 0x01,
	0x0a, 0x0f, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x49, 0x6e, 0x66,
	0x6f, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x23, 0x0a,
	0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x1a, 0x0a, 0x08,
	0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08,
	0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x12, 0x29, 0x0a, 0x10, 0x64, 0x6f, 0x77, 0x6e,
	0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0f, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41, 0x64, 0x64, 0x72,
	0x65, 0x73, 0x73, 0x22, 0xa8, 0x01, 0x0a, 0x11, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c,
	0x6f, 0x61, 0x64, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73,
	0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04,
	0x73, 0x69, 0x7a, 0x65, 0x12, 0x28, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x05, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69,
	0x6d, 0x70, 0x6c, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x66,
	0x0a, 0x0a, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x70, 0x61, 0x74, 0x68, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x70, 0x61, 0x74, 0x68,
	0x12, 0x1c, 0x0a, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x08, 0x52, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x6f, 0x72, 0x79, 0x12, 0x12,
	0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61,
	0x73, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x32, 0xfa, 0x01, 0x0a, 0x0e, 0x5a, 0x69, 0x70, 0x46, 0x69,
	0x6c, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x54, 0x0a, 0x11, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x22,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x52, 0x65, 0x71, 0x75, 0x65,
	0x73, 0x74, 0x1a, 0x19, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x5a, 0x69,
	0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0x00, 0x12,
	0x48, 0x0a, 0x0e, 0x47, 0x65, 0x74, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61,
	0x64, 0x12, 0x19, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x5a, 0x69, 0x70,
	0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x19, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c,
	0x6f, 0x61, 0x64, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0x00, 0x12, 0x48, 0x0a, 0x0c, 0x47, 0x65, 0x74,
	0x5a, 0x69, 0x70, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x19, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64,
	0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x5a, 0x69, 0x70, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x44, 0x65, 0x74, 0x61, 0x69,
	0x6c, 0x22, 0x00, 0x42, 0x36, 0x5a, 0x34, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f,
	0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d, 0x6d,
	0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x33, 0x2f, 0x66, 0x69,
	0x6c, 0x65, 0x2f, 0x63, 0x6f, 0x6d, 0x70, 0x72, 0x65, 0x73, 0x73, 0x62, 0x06, 0x70, 0x72, 0x6f,
	0x74, 0x6f, 0x33,
}

var (
	file_file_compress_proto_rawDescOnce sync.Once
	file_file_compress_proto_rawDescData = file_file_compress_proto_rawDesc
)

func file_file_compress_proto_rawDescGZIP() []byte {
	file_file_compress_proto_rawDescOnce.Do(func() {
		file_file_compress_proto_rawDescData = protoimpl.X.CompressGZIP(file_file_compress_proto_rawDescData)
	})
	return file_file_compress_proto_rawDescData
}

var file_file_compress_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_file_compress_proto_goTypes = []interface{}{
	(*CreateZipDownloadRequest)(nil), // 0: services.CreateZipDownloadRequest
	(*ZipDownloadInfo)(nil),          // 1: services.ZipDownloadInfo
	(*ZipDownloadDetail)(nil),        // 2: services.ZipDownloadDetail
	(*SimpleFile)(nil),               // 3: services.SimpleFile
}
var file_file_compress_proto_depIdxs = []int32{
	3, // 0: services.ZipDownloadDetail.data:type_name -> services.SimpleFile
	0, // 1: services.ZipFileService.CreateZipDownload:input_type -> services.CreateZipDownloadRequest
	1, // 2: services.ZipFileService.GetZipDownload:input_type -> services.ZipDownloadInfo
	1, // 3: services.ZipFileService.GetZipDetail:input_type -> services.ZipDownloadInfo
	1, // 4: services.ZipFileService.CreateZipDownload:output_type -> services.ZipDownloadInfo
	1, // 5: services.ZipFileService.GetZipDownload:output_type -> services.ZipDownloadInfo
	2, // 6: services.ZipFileService.GetZipDetail:output_type -> services.ZipDownloadDetail
	4, // [4:7] is the sub-list for method output_type
	1, // [1:4] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_file_compress_proto_init() }
func file_file_compress_proto_init() {
	if File_file_compress_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_file_compress_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CreateZipDownloadRequest); i {
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
		file_file_compress_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZipDownloadInfo); i {
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
		file_file_compress_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ZipDownloadDetail); i {
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
		file_file_compress_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SimpleFile); i {
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
			RawDescriptor: file_file_compress_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_file_compress_proto_goTypes,
		DependencyIndexes: file_file_compress_proto_depIdxs,
		MessageInfos:      file_file_compress_proto_msgTypes,
	}.Build()
	File_file_compress_proto = out.File
	file_file_compress_proto_rawDesc = nil
	file_file_compress_proto_goTypes = nil
	file_file_compress_proto_depIdxs = nil
}