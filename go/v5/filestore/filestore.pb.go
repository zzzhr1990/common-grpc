// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: filestore/filestore.proto

package filestore

import (
	common "github.com/zzzhr1990/common-grpc/go/common"
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

type FileStore struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash             string `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size             int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime             string `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	UploadUser       int64  `protobuf:"varint,4,opt,name=upload_user,json=uploadUser,proto3" json:"upload_user,omitempty"`
	CreateTime       int64  `protobuf:"varint,5,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	OriginalFilename string `protobuf:"bytes,6,opt,name=original_filename,json=originalFilename,proto3" json:"original_filename,omitempty"`
	Bucket           int32  `protobuf:"varint,7,opt,name=bucket,proto3" json:"bucket,omitempty"`
	Key              string `protobuf:"bytes,8,opt,name=key,proto3" json:"key,omitempty"`
	OssHeader        string `protobuf:"bytes,9,opt,name=oss_header,json=ossHeader,proto3" json:"oss_header,omitempty"`
	OssBucket        string `protobuf:"bytes,10,opt,name=oss_bucket,json=ossBucket,proto3" json:"oss_bucket,omitempty"`
	OssKey           string `protobuf:"bytes,11,opt,name=oss_key,json=ossKey,proto3" json:"oss_key,omitempty"`
	Sha1             string `protobuf:"bytes,12,opt,name=sha1,proto3" json:"sha1,omitempty"`
	Flag             int32  `protobuf:"varint,13,opt,name=flag,proto3" json:"flag,omitempty"`
	Status           int32  `protobuf:"varint,14,opt,name=status,proto3" json:"status,omitempty"`
	FetchTime        int64  `protobuf:"varint,15,opt,name=fetch_time,json=fetchTime,proto3" json:"fetch_time,omitempty"`
	Md5              string `protobuf:"bytes,16,opt,name=md5,proto3" json:"md5,omitempty"`
	Etag             string `protobuf:"bytes,17,opt,name=etag,proto3" json:"etag,omitempty"`
	EncodedEtag      string `protobuf:"bytes,18,opt,name=encoded_etag,json=encodedEtag,proto3" json:"encoded_etag,omitempty"`
	DownloadAddress  string `protobuf:"bytes,19,opt,name=download_address,json=downloadAddress,proto3" json:"download_address,omitempty"`
}

func (x *FileStore) Reset() {
	*x = FileStore{}
	if protoimpl.UnsafeEnabled {
		mi := &file_filestore_filestore_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileStore) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileStore) ProtoMessage() {}

func (x *FileStore) ProtoReflect() protoreflect.Message {
	mi := &file_filestore_filestore_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileStore.ProtoReflect.Descriptor instead.
func (*FileStore) Descriptor() ([]byte, []int) {
	return file_filestore_filestore_proto_rawDescGZIP(), []int{0}
}

func (x *FileStore) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *FileStore) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *FileStore) GetMime() string {
	if x != nil {
		return x.Mime
	}
	return ""
}

func (x *FileStore) GetUploadUser() int64 {
	if x != nil {
		return x.UploadUser
	}
	return 0
}

func (x *FileStore) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *FileStore) GetOriginalFilename() string {
	if x != nil {
		return x.OriginalFilename
	}
	return ""
}

func (x *FileStore) GetBucket() int32 {
	if x != nil {
		return x.Bucket
	}
	return 0
}

func (x *FileStore) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *FileStore) GetOssHeader() string {
	if x != nil {
		return x.OssHeader
	}
	return ""
}

func (x *FileStore) GetOssBucket() string {
	if x != nil {
		return x.OssBucket
	}
	return ""
}

func (x *FileStore) GetOssKey() string {
	if x != nil {
		return x.OssKey
	}
	return ""
}

func (x *FileStore) GetSha1() string {
	if x != nil {
		return x.Sha1
	}
	return ""
}

func (x *FileStore) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *FileStore) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *FileStore) GetFetchTime() int64 {
	if x != nil {
		return x.FetchTime
	}
	return 0
}

func (x *FileStore) GetMd5() string {
	if x != nil {
		return x.Md5
	}
	return ""
}

func (x *FileStore) GetEtag() string {
	if x != nil {
		return x.Etag
	}
	return ""
}

func (x *FileStore) GetEncodedEtag() string {
	if x != nil {
		return x.EncodedEtag
	}
	return ""
}

func (x *FileStore) GetDownloadAddress() string {
	if x != nil {
		return x.DownloadAddress
	}
	return ""
}

type FileStoreList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*FileStore `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *FileStoreList) Reset() {
	*x = FileStoreList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_filestore_filestore_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileStoreList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileStoreList) ProtoMessage() {}

func (x *FileStoreList) ProtoReflect() protoreflect.Message {
	mi := &file_filestore_filestore_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileStoreList.ProtoReflect.Descriptor instead.
func (*FileStoreList) Descriptor() ([]byte, []int) {
	return file_filestore_filestore_proto_rawDescGZIP(), []int{1}
}

func (x *FileStoreList) GetData() []*FileStore {
	if x != nil {
		return x.Data
	}
	return nil
}

type QuickMapping struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Index     string `protobuf:"bytes,1,opt,name=index,proto3" json:"index,omitempty"`
	Size      int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Sha1      string `protobuf:"bytes,3,opt,name=sha1,proto3" json:"sha1,omitempty"`
	BlockSha1 string `protobuf:"bytes,4,opt,name=block_sha1,json=blockSha1,proto3" json:"block_sha1,omitempty"`
	Etag      string `protobuf:"bytes,5,opt,name=etag,proto3" json:"etag,omitempty"`
	Hash      string `protobuf:"bytes,6,opt,name=hash,proto3" json:"hash,omitempty"`
}

func (x *QuickMapping) Reset() {
	*x = QuickMapping{}
	if protoimpl.UnsafeEnabled {
		mi := &file_filestore_filestore_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *QuickMapping) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*QuickMapping) ProtoMessage() {}

func (x *QuickMapping) ProtoReflect() protoreflect.Message {
	mi := &file_filestore_filestore_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use QuickMapping.ProtoReflect.Descriptor instead.
func (*QuickMapping) Descriptor() ([]byte, []int) {
	return file_filestore_filestore_proto_rawDescGZIP(), []int{2}
}

func (x *QuickMapping) GetIndex() string {
	if x != nil {
		return x.Index
	}
	return ""
}

func (x *QuickMapping) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *QuickMapping) GetSha1() string {
	if x != nil {
		return x.Sha1
	}
	return ""
}

func (x *QuickMapping) GetBlockSha1() string {
	if x != nil {
		return x.BlockSha1
	}
	return ""
}

func (x *QuickMapping) GetEtag() string {
	if x != nil {
		return x.Etag
	}
	return ""
}

func (x *QuickMapping) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

var File_filestore_filestore_proto protoreflect.FileDescriptor

var file_filestore_filestore_proto_rawDesc = []byte{
	0x0a, 0x19, 0x66, 0x69, 0x6c, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x66, 0x69, 0x6c, 0x65,
	0x73, 0x74, 0x6f, 0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x35, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x1a, 0x1a, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e,
	0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x22, 0x8a, 0x04, 0x0a, 0x09, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f,
	0x72, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6d, 0x69,
	0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x12, 0x1f,
	0x0a, 0x0b, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x0a, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x55, 0x73, 0x65, 0x72, 0x12,
	0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65,
	0x12, 0x2b, 0x0a, 0x11, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x61, 0x6c, 0x5f, 0x66, 0x69, 0x6c,
	0x65, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x6f, 0x72, 0x69,
	0x67, 0x69, 0x6e, 0x61, 0x6c, 0x46, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a,
	0x06, 0x62, 0x75, 0x63, 0x6b, 0x65, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x62,
	0x75, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x08, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x1d, 0x0a, 0x0a, 0x6f, 0x73, 0x73, 0x5f, 0x68,
	0x65, 0x61, 0x64, 0x65, 0x72, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6f, 0x73, 0x73,
	0x48, 0x65, 0x61, 0x64, 0x65, 0x72, 0x12, 0x1d, 0x0a, 0x0a, 0x6f, 0x73, 0x73, 0x5f, 0x62, 0x75,
	0x63, 0x6b, 0x65, 0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6f, 0x73, 0x73, 0x42,
	0x75, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x17, 0x0a, 0x07, 0x6f, 0x73, 0x73, 0x5f, 0x6b, 0x65, 0x79,
	0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x6f, 0x73, 0x73, 0x4b, 0x65, 0x79, 0x12, 0x12,
	0x0a, 0x04, 0x73, 0x68, 0x61, 0x31, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x68,
	0x61, 0x31, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x18, 0x0e, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d,
	0x0a, 0x0a, 0x66, 0x65, 0x74, 0x63, 0x68, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x0f, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x09, 0x66, 0x65, 0x74, 0x63, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x10, 0x0a,
	0x03, 0x6d, 0x64, 0x35, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x64, 0x35, 0x12,
	0x12, 0x0a, 0x04, 0x65, 0x74, 0x61, 0x67, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x65,
	0x74, 0x61, 0x67, 0x12, 0x21, 0x0a, 0x0c, 0x65, 0x6e, 0x63, 0x6f, 0x64, 0x65, 0x64, 0x5f, 0x65,
	0x74, 0x61, 0x67, 0x18, 0x12, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x65, 0x6e, 0x63, 0x6f, 0x64,
	0x65, 0x64, 0x45, 0x74, 0x61, 0x67, 0x12, 0x29, 0x0a, 0x10, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f,
	0x61, 0x64, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0f, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x22, 0x3b, 0x0a, 0x0d, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69,
	0x73, 0x74, 0x12, 0x2a, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b,
	0x32, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46,
	0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x93,
	0x01, 0x0a, 0x0c, 0x51, 0x75, 0x69, 0x63, 0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x12,
	0x14, 0x0a, 0x05, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05,
	0x69, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x68, 0x61,
	0x31, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x68, 0x61, 0x31, 0x12, 0x1d, 0x0a,
	0x0a, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x73, 0x68, 0x61, 0x31, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x09, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x53, 0x68, 0x61, 0x31, 0x12, 0x12, 0x0a, 0x04,
	0x65, 0x74, 0x61, 0x67, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x65, 0x74, 0x61, 0x67,
	0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x68, 0x61, 0x73, 0x68, 0x32, 0xfe, 0x04, 0x0a, 0x10, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f,
	0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a, 0x0a, 0x06, 0x43, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x12, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x16, 0x2e, 0x76, 0x35,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74,
	0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x16, 0x2e, 0x76,
	0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53,
	0x74, 0x6f, 0x72, 0x65, 0x1a, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x3a,
	0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65,
	0x1a, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46,
	0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x44, 0x0a, 0x08, 0x42, 0x61,
	0x74, 0x63, 0x68, 0x47, 0x65, 0x74, 0x12, 0x1a, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69,
	0x73, 0x74, 0x1a, 0x1a, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00,
	0x12, 0x46, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41,
	0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x16,
	0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c,
	0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x50, 0x0a, 0x14, 0x42, 0x61, 0x74, 0x63,
	0x68, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x12, 0x1a, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x69,
	0x6e, 0x67, 0x4c, 0x69, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x1a, 0x1a, 0x2e, 0x76,
	0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53,
	0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x40, 0x0a, 0x0c, 0x4f, 0x6e,
	0x46, 0x69, 0x6c, 0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x16, 0x2e, 0x76, 0x35, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f,
	0x72, 0x65, 0x1a, 0x16, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x4c, 0x0a, 0x12,
	0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x51, 0x75, 0x69, 0x63, 0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69,
	0x6e, 0x67, 0x12, 0x19, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x51, 0x75, 0x69, 0x63, 0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x1a, 0x19, 0x2e,
	0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x51, 0x75, 0x69, 0x63,
	0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x22, 0x00, 0x12, 0x49, 0x0a, 0x0f, 0x47, 0x65,
	0x74, 0x51, 0x75, 0x69, 0x63, 0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x12, 0x19, 0x2e,
	0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x51, 0x75, 0x69, 0x63,
	0x6b, 0x4d, 0x61, 0x70, 0x70, 0x69, 0x6e, 0x67, 0x1a, 0x19, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x51, 0x75, 0x69, 0x63, 0x6b, 0x4d, 0x61, 0x70, 0x70,
	0x69, 0x6e, 0x67, 0x22, 0x00, 0x42, 0x42, 0x5a, 0x30, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x35, 0x2f,
	0x66, 0x69, 0x6c, 0x65, 0x73, 0x74, 0x6f, 0x72, 0x65, 0xaa, 0x02, 0x0d, 0x47, 0x72, 0x70, 0x63,
	0x46, 0x69, 0x6c, 0x65, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f,
	0x33,
}

var (
	file_filestore_filestore_proto_rawDescOnce sync.Once
	file_filestore_filestore_proto_rawDescData = file_filestore_filestore_proto_rawDesc
)

func file_filestore_filestore_proto_rawDescGZIP() []byte {
	file_filestore_filestore_proto_rawDescOnce.Do(func() {
		file_filestore_filestore_proto_rawDescData = protoimpl.X.CompressGZIP(file_filestore_filestore_proto_rawDescData)
	})
	return file_filestore_filestore_proto_rawDescData
}

var file_filestore_filestore_proto_msgTypes = make([]protoimpl.MessageInfo, 3)
var file_filestore_filestore_proto_goTypes = []interface{}{
	(*FileStore)(nil),               // 0: v5.services.FileStore
	(*FileStoreList)(nil),           // 1: v5.services.FileStoreList
	(*QuickMapping)(nil),            // 2: v5.services.QuickMapping
	(*common.StringListEntity)(nil), // 3: services.StringListEntity
}
var file_filestore_filestore_proto_depIdxs = []int32{
	0,  // 0: v5.services.FileStoreList.data:type_name -> v5.services.FileStore
	0,  // 1: v5.services.FileStoreService.Create:input_type -> v5.services.FileStore
	0,  // 2: v5.services.FileStoreService.Get:input_type -> v5.services.FileStore
	0,  // 3: v5.services.FileStoreService.Update:input_type -> v5.services.FileStore
	1,  // 4: v5.services.FileStoreService.BatchGet:input_type -> v5.services.FileStoreList
	0,  // 5: v5.services.FileStoreService.GetDownloadAddress:input_type -> v5.services.FileStore
	3,  // 6: v5.services.FileStoreService.BatchDownloadAddress:input_type -> services.StringListEntity
	0,  // 7: v5.services.FileStoreService.OnFileUpload:input_type -> v5.services.FileStore
	2,  // 8: v5.services.FileStoreService.CreateQuickMapping:input_type -> v5.services.QuickMapping
	2,  // 9: v5.services.FileStoreService.GetQuickMapping:input_type -> v5.services.QuickMapping
	0,  // 10: v5.services.FileStoreService.Create:output_type -> v5.services.FileStore
	0,  // 11: v5.services.FileStoreService.Get:output_type -> v5.services.FileStore
	0,  // 12: v5.services.FileStoreService.Update:output_type -> v5.services.FileStore
	1,  // 13: v5.services.FileStoreService.BatchGet:output_type -> v5.services.FileStoreList
	0,  // 14: v5.services.FileStoreService.GetDownloadAddress:output_type -> v5.services.FileStore
	1,  // 15: v5.services.FileStoreService.BatchDownloadAddress:output_type -> v5.services.FileStoreList
	0,  // 16: v5.services.FileStoreService.OnFileUpload:output_type -> v5.services.FileStore
	2,  // 17: v5.services.FileStoreService.CreateQuickMapping:output_type -> v5.services.QuickMapping
	2,  // 18: v5.services.FileStoreService.GetQuickMapping:output_type -> v5.services.QuickMapping
	10, // [10:19] is the sub-list for method output_type
	1,  // [1:10] is the sub-list for method input_type
	1,  // [1:1] is the sub-list for extension type_name
	1,  // [1:1] is the sub-list for extension extendee
	0,  // [0:1] is the sub-list for field type_name
}

func init() { file_filestore_filestore_proto_init() }
func file_filestore_filestore_proto_init() {
	if File_filestore_filestore_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_filestore_filestore_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileStore); i {
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
		file_filestore_filestore_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileStoreList); i {
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
		file_filestore_filestore_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*QuickMapping); i {
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
			RawDescriptor: file_filestore_filestore_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   3,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_filestore_filestore_proto_goTypes,
		DependencyIndexes: file_filestore_filestore_proto_depIdxs,
		MessageInfos:      file_filestore_filestore_proto_msgTypes,
	}.Build()
	File_filestore_filestore_proto = out.File
	file_filestore_filestore_proto_rawDesc = nil
	file_filestore_filestore_proto_goTypes = nil
	file_filestore_filestore_proto_depIdxs = nil
}
