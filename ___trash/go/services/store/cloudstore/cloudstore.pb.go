// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.5
// source: store/cloudstore.proto

package cloudstore

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

type WcsUploadToken struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Exists          bool   `protobuf:"varint,1,opt,name=exists,proto3" json:"exists,omitempty"`
	Key             string `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
	Token           string `protobuf:"bytes,3,opt,name=token,proto3" json:"token,omitempty"`
	PartUploadUrl   string `protobuf:"bytes,4,opt,name=part_upload_url,json=partUploadUrl,proto3" json:"part_upload_url,omitempty"`
	DirectUploadUrl string `protobuf:"bytes,5,opt,name=direct_upload_url,json=directUploadUrl,proto3" json:"direct_upload_url,omitempty"`
}

func (x *WcsUploadToken) Reset() {
	*x = WcsUploadToken{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_cloudstore_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *WcsUploadToken) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*WcsUploadToken) ProtoMessage() {}

func (x *WcsUploadToken) ProtoReflect() protoreflect.Message {
	mi := &file_store_cloudstore_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use WcsUploadToken.ProtoReflect.Descriptor instead.
func (*WcsUploadToken) Descriptor() ([]byte, []int) {
	return file_store_cloudstore_proto_rawDescGZIP(), []int{0}
}

func (x *WcsUploadToken) GetExists() bool {
	if x != nil {
		return x.Exists
	}
	return false
}

func (x *WcsUploadToken) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *WcsUploadToken) GetToken() string {
	if x != nil {
		return x.Token
	}
	return ""
}

func (x *WcsUploadToken) GetPartUploadUrl() string {
	if x != nil {
		return x.PartUploadUrl
	}
	return ""
}

func (x *WcsUploadToken) GetDirectUploadUrl() string {
	if x != nil {
		return x.DirectUploadUrl
	}
	return ""
}

type UploadTokenRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Type         string `protobuf:"bytes,1,opt,name=type,proto3" json:"type,omitempty"`
	Key          string `protobuf:"bytes,2,opt,name=key,proto3" json:"key,omitempty"`
	UserIdentity int64  `protobuf:"varint,3,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	Hash         string `protobuf:"bytes,4,opt,name=hash,proto3" json:"hash,omitempty"`
}

func (x *UploadTokenRequest) Reset() {
	*x = UploadTokenRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_cloudstore_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UploadTokenRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UploadTokenRequest) ProtoMessage() {}

func (x *UploadTokenRequest) ProtoReflect() protoreflect.Message {
	mi := &file_store_cloudstore_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UploadTokenRequest.ProtoReflect.Descriptor instead.
func (*UploadTokenRequest) Descriptor() ([]byte, []int) {
	return file_store_cloudstore_proto_rawDescGZIP(), []int{1}
}

func (x *UploadTokenRequest) GetType() string {
	if x != nil {
		return x.Type
	}
	return ""
}

func (x *UploadTokenRequest) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *UploadTokenRequest) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *UploadTokenRequest) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

type CloudStore struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash             string `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Size             int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Mime             string `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`
	UploadUser       int64  `protobuf:"varint,4,opt,name=upload_user,json=uploadUser,proto3" json:"upload_user,omitempty"`
	Ctime            int64  `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	OriginalFilename string `protobuf:"bytes,6,opt,name=original_filename,json=originalFilename,proto3" json:"original_filename,omitempty"`
	Store            int32  `protobuf:"varint,7,opt,name=store,proto3" json:"store,omitempty"`
	Key              string `protobuf:"bytes,8,opt,name=key,proto3" json:"key,omitempty"`
	ColdKey          string `protobuf:"bytes,9,opt,name=cold_key,json=coldKey,proto3" json:"cold_key,omitempty"`
	Type             int32  `protobuf:"varint,10,opt,name=type,proto3" json:"type,omitempty"`
	Preview          bool   `protobuf:"varint,11,opt,name=preview,proto3" json:"preview,omitempty"`
	PreviewType      int32  `protobuf:"varint,12,opt,name=preview_type,json=previewType,proto3" json:"preview_type,omitempty"`
	Flag             int32  `protobuf:"varint,13,opt,name=flag,proto3" json:"flag,omitempty"`
	Status           int32  `protobuf:"varint,14,opt,name=status,proto3" json:"status,omitempty"`
	FetchTime        int64  `protobuf:"varint,15,opt,name=fetch_time,json=fetchTime,proto3" json:"fetch_time,omitempty"`
	Md5              string `protobuf:"bytes,16,opt,name=md5,proto3" json:"md5,omitempty"`
	Sha1             string `protobuf:"bytes,17,opt,name=sha1,proto3" json:"sha1,omitempty"`
	DownloadAddress  string `protobuf:"bytes,18,opt,name=download_address,json=downloadAddress,proto3" json:"download_address,omitempty"`
	Ref              int64  `protobuf:"varint,19,opt,name=ref,proto3" json:"ref,omitempty"`
	LastDown         int64  `protobuf:"varint,20,opt,name=last_down,json=lastDown,proto3" json:"last_down,omitempty"`
}

func (x *CloudStore) Reset() {
	*x = CloudStore{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_cloudstore_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CloudStore) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CloudStore) ProtoMessage() {}

func (x *CloudStore) ProtoReflect() protoreflect.Message {
	mi := &file_store_cloudstore_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CloudStore.ProtoReflect.Descriptor instead.
func (*CloudStore) Descriptor() ([]byte, []int) {
	return file_store_cloudstore_proto_rawDescGZIP(), []int{2}
}

func (x *CloudStore) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *CloudStore) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *CloudStore) GetMime() string {
	if x != nil {
		return x.Mime
	}
	return ""
}

func (x *CloudStore) GetUploadUser() int64 {
	if x != nil {
		return x.UploadUser
	}
	return 0
}

func (x *CloudStore) GetCtime() int64 {
	if x != nil {
		return x.Ctime
	}
	return 0
}

func (x *CloudStore) GetOriginalFilename() string {
	if x != nil {
		return x.OriginalFilename
	}
	return ""
}

func (x *CloudStore) GetStore() int32 {
	if x != nil {
		return x.Store
	}
	return 0
}

func (x *CloudStore) GetKey() string {
	if x != nil {
		return x.Key
	}
	return ""
}

func (x *CloudStore) GetColdKey() string {
	if x != nil {
		return x.ColdKey
	}
	return ""
}

func (x *CloudStore) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *CloudStore) GetPreview() bool {
	if x != nil {
		return x.Preview
	}
	return false
}

func (x *CloudStore) GetPreviewType() int32 {
	if x != nil {
		return x.PreviewType
	}
	return 0
}

func (x *CloudStore) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *CloudStore) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *CloudStore) GetFetchTime() int64 {
	if x != nil {
		return x.FetchTime
	}
	return 0
}

func (x *CloudStore) GetMd5() string {
	if x != nil {
		return x.Md5
	}
	return ""
}

func (x *CloudStore) GetSha1() string {
	if x != nil {
		return x.Sha1
	}
	return ""
}

func (x *CloudStore) GetDownloadAddress() string {
	if x != nil {
		return x.DownloadAddress
	}
	return ""
}

func (x *CloudStore) GetRef() int64 {
	if x != nil {
		return x.Ref
	}
	return 0
}

func (x *CloudStore) GetLastDown() int64 {
	if x != nil {
		return x.LastDown
	}
	return 0
}

type CloudStoreList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*CloudStore `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *CloudStoreList) Reset() {
	*x = CloudStoreList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_cloudstore_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *CloudStoreList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*CloudStoreList) ProtoMessage() {}

func (x *CloudStoreList) ProtoReflect() protoreflect.Message {
	mi := &file_store_cloudstore_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use CloudStoreList.ProtoReflect.Descriptor instead.
func (*CloudStoreList) Descriptor() ([]byte, []int) {
	return file_store_cloudstore_proto_rawDescGZIP(), []int{3}
}

func (x *CloudStoreList) GetData() []*CloudStore {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_store_cloudstore_proto protoreflect.FileDescriptor

var file_store_cloudstore_proto_rawDesc = []byte{
	0x0a, 0x16, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x63, 0x6c, 0x6f, 0x75, 0x64, 0x73, 0x74, 0x6f,
	0x72, 0x65, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x1a, 0x1a, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f,
	0x6e, 0x5f, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xa4,
	0x01, 0x0a, 0x0e, 0x57, 0x63, 0x73, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x54, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x78, 0x69, 0x73, 0x74, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x06, 0x65, 0x78, 0x69, 0x73, 0x74, 0x73, 0x12, 0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65, 0x79, 0x12, 0x14, 0x0a, 0x05, 0x74,
	0x6f, 0x6b, 0x65, 0x6e, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x6f, 0x6b, 0x65,
	0x6e, 0x12, 0x26, 0x0a, 0x0f, 0x70, 0x61, 0x72, 0x74, 0x5f, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x5f, 0x75, 0x72, 0x6c, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x70, 0x61, 0x72, 0x74,
	0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x55, 0x72, 0x6c, 0x12, 0x2a, 0x0a, 0x11, 0x64, 0x69, 0x72,
	0x65, 0x63, 0x74, 0x5f, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x75, 0x72, 0x6c, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74, 0x55, 0x70, 0x6c, 0x6f,
	0x61, 0x64, 0x55, 0x72, 0x6c, 0x22, 0x73, 0x0a, 0x12, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x04,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x22, 0x8b, 0x04, 0x0a, 0x0a, 0x43,
	0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73,
	0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a,
	0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a,
	0x65, 0x12, 0x12, 0x0a, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x04, 0x6d, 0x69, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x75, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x5f,
	0x75, 0x73, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x75, 0x70, 0x6c, 0x6f,
	0x61, 0x64, 0x55, 0x73, 0x65, 0x72, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x74, 0x69, 0x6d, 0x65, 0x18,
	0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05, 0x63, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x2b, 0x0a, 0x11,
	0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x61, 0x6c, 0x5f, 0x66, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d,
	0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x10, 0x6f, 0x72, 0x69, 0x67, 0x69, 0x6e, 0x61,
	0x6c, 0x46, 0x69, 0x6c, 0x65, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x73, 0x74, 0x6f,
	0x72, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x12,
	0x10, 0x0a, 0x03, 0x6b, 0x65, 0x79, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6b, 0x65,
	0x79, 0x12, 0x19, 0x0a, 0x08, 0x63, 0x6f, 0x6c, 0x64, 0x5f, 0x6b, 0x65, 0x79, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x07, 0x63, 0x6f, 0x6c, 0x64, 0x4b, 0x65, 0x79, 0x12, 0x12, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x12, 0x18, 0x0a, 0x07, 0x70, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x18, 0x0b, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x07, 0x70, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x12, 0x21, 0x0a, 0x0c, 0x70, 0x72,
	0x65, 0x76, 0x69, 0x65, 0x77, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x0b, 0x70, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x54, 0x79, 0x70, 0x65, 0x12, 0x12, 0x0a,
	0x04, 0x66, 0x6c, 0x61, 0x67, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x6c, 0x61,
	0x67, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0e, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1d, 0x0a, 0x0a, 0x66, 0x65, 0x74,
	0x63, 0x68, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x66,
	0x65, 0x74, 0x63, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x6d, 0x64, 0x35, 0x18,
	0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x6d, 0x64, 0x35, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x68,
	0x61, 0x31, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x73, 0x68, 0x61, 0x31, 0x12, 0x29,
	0x0a, 0x10, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65,
	0x73, 0x73, 0x18, 0x12, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f,
	0x61, 0x64, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x10, 0x0a, 0x03, 0x72, 0x65, 0x66,
	0x18, 0x13, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x72, 0x65, 0x66, 0x12, 0x1b, 0x0a, 0x09, 0x6c,
	0x61, 0x73, 0x74, 0x5f, 0x64, 0x6f, 0x77, 0x6e, 0x18, 0x14, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08,
	0x6c, 0x61, 0x73, 0x74, 0x44, 0x6f, 0x77, 0x6e, 0x22, 0x3a, 0x0a, 0x0e, 0x43, 0x6c, 0x6f, 0x75,
	0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x52, 0x04,
	0x64, 0x61, 0x74, 0x61, 0x32, 0x9e, 0x04, 0x0a, 0x11, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74,
	0x6f, 0x72, 0x65, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x36, 0x0a, 0x06, 0x43, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65,
	0x22, 0x00, 0x12, 0x33, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a,
	0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64,
	0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x36, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74,
	0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f,
	0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x22, 0x00, 0x12,
	0x40, 0x0a, 0x08, 0x42, 0x61, 0x74, 0x63, 0x68, 0x47, 0x65, 0x74, 0x12, 0x18, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72,
	0x65, 0x4c, 0x69, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c, 0x69, 0x73, 0x74, 0x22,
	0x00, 0x12, 0x42, 0x0a, 0x12, 0x47, 0x65, 0x74, 0x44, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64,
	0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x14, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74,
	0x6f, 0x72, 0x65, 0x22, 0x00, 0x12, 0x4e, 0x0a, 0x14, 0x42, 0x61, 0x74, 0x63, 0x68, 0x44, 0x6f,
	0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x1a, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x74, 0x72, 0x69, 0x6e, 0x67, 0x4c,
	0x69, 0x73, 0x74, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x1a, 0x18, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x4c,
	0x69, 0x73, 0x74, 0x22, 0x00, 0x12, 0x50, 0x0a, 0x14, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x57,
	0x63, 0x73, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x12, 0x1c, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x54,
	0x6f, 0x6b, 0x65, 0x6e, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x18, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x57, 0x63, 0x73, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64,
	0x54, 0x6f, 0x6b, 0x65, 0x6e, 0x22, 0x00, 0x12, 0x3c, 0x0a, 0x0c, 0x4f, 0x6e, 0x46, 0x69, 0x6c,
	0x65, 0x55, 0x70, 0x6c, 0x6f, 0x61, 0x64, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74, 0x6f, 0x72, 0x65, 0x1a, 0x14, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x6f, 0x75, 0x64, 0x53, 0x74,
	0x6f, 0x72, 0x65, 0x22, 0x00, 0x42, 0x3f, 0x5a, 0x3d, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e,
	0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f,
	0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x63, 0x6c, 0x6f, 0x75,
	0x64, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_store_cloudstore_proto_rawDescOnce sync.Once
	file_store_cloudstore_proto_rawDescData = file_store_cloudstore_proto_rawDesc
)

func file_store_cloudstore_proto_rawDescGZIP() []byte {
	file_store_cloudstore_proto_rawDescOnce.Do(func() {
		file_store_cloudstore_proto_rawDescData = protoimpl.X.CompressGZIP(file_store_cloudstore_proto_rawDescData)
	})
	return file_store_cloudstore_proto_rawDescData
}

var file_store_cloudstore_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_store_cloudstore_proto_goTypes = []interface{}{
	(*WcsUploadToken)(nil),          // 0: services.WcsUploadToken
	(*UploadTokenRequest)(nil),      // 1: services.UploadTokenRequest
	(*CloudStore)(nil),              // 2: services.CloudStore
	(*CloudStoreList)(nil),          // 3: services.CloudStoreList
	(*common.StringListEntity)(nil), // 4: services.StringListEntity
}
var file_store_cloudstore_proto_depIdxs = []int32{
	2, // 0: services.CloudStoreList.data:type_name -> services.CloudStore
	2, // 1: services.CloudStoreService.Create:input_type -> services.CloudStore
	2, // 2: services.CloudStoreService.Get:input_type -> services.CloudStore
	2, // 3: services.CloudStoreService.Update:input_type -> services.CloudStore
	3, // 4: services.CloudStoreService.BatchGet:input_type -> services.CloudStoreList
	2, // 5: services.CloudStoreService.GetDownloadAddress:input_type -> services.CloudStore
	4, // 6: services.CloudStoreService.BatchDownloadAddress:input_type -> services.StringListEntity
	1, // 7: services.CloudStoreService.CreateWcsUploadToken:input_type -> services.UploadTokenRequest
	2, // 8: services.CloudStoreService.OnFileUpload:input_type -> services.CloudStore
	2, // 9: services.CloudStoreService.Create:output_type -> services.CloudStore
	2, // 10: services.CloudStoreService.Get:output_type -> services.CloudStore
	2, // 11: services.CloudStoreService.Update:output_type -> services.CloudStore
	3, // 12: services.CloudStoreService.BatchGet:output_type -> services.CloudStoreList
	2, // 13: services.CloudStoreService.GetDownloadAddress:output_type -> services.CloudStore
	3, // 14: services.CloudStoreService.BatchDownloadAddress:output_type -> services.CloudStoreList
	0, // 15: services.CloudStoreService.CreateWcsUploadToken:output_type -> services.WcsUploadToken
	2, // 16: services.CloudStoreService.OnFileUpload:output_type -> services.CloudStore
	9, // [9:17] is the sub-list for method output_type
	1, // [1:9] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_store_cloudstore_proto_init() }
func file_store_cloudstore_proto_init() {
	if File_store_cloudstore_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_store_cloudstore_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*WcsUploadToken); i {
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
		file_store_cloudstore_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UploadTokenRequest); i {
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
		file_store_cloudstore_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CloudStore); i {
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
		file_store_cloudstore_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*CloudStoreList); i {
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
			RawDescriptor: file_store_cloudstore_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_store_cloudstore_proto_goTypes,
		DependencyIndexes: file_store_cloudstore_proto_depIdxs,
		MessageInfos:      file_store_cloudstore_proto_msgTypes,
	}.Build()
	File_store_cloudstore_proto = out.File
	file_store_cloudstore_proto_rawDesc = nil
	file_store_cloudstore_proto_goTypes = nil
	file_store_cloudstore_proto_depIdxs = nil
}