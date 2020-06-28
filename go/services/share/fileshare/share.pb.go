// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.12.3
// source: share/share.proto

package fileshare

import (
	context "context"
	proto "github.com/golang/protobuf/proto"
	common "github.com/zzzhr1990/common-grpc/go/common"
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

// FC
type FileShare struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity         string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`          // used for identity file
	Size             int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`                 // size
	Mime             string `protobuf:"bytes,3,opt,name=mime,proto3" json:"mime,omitempty"`                  // mime
	UserIdentity     int64  `protobuf:"varint,4,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"` //
	Ctime            int64  `protobuf:"varint,5,opt,name=ctime,proto3" json:"ctime,omitempty"`
	Name             string `protobuf:"bytes,6,opt,name=name,proto3" json:"name,omitempty"`
	Flag             int32  `protobuf:"varint,7,opt,name=flag,proto3" json:"flag,omitempty"`
	PasswordEnabled  bool   `protobuf:"varint,8,opt,name=passwordEnabled,proto3" json:"passwordEnabled,omitempty"`
	Password         string `protobuf:"bytes,9,opt,name=password,proto3" json:"password,omitempty"`
	ExpireEnabled    bool   `protobuf:"varint,10,opt,name=expireEnabled,proto3" json:"expireEnabled,omitempty"`
	Expire           int64  `protobuf:"varint,11,opt,name=expire,proto3" json:"expire,omitempty"`       //expire
	CopyCount        int64  `protobuf:"varint,12,opt,name=copyCount,proto3" json:"copyCount,omitempty"` //copyCount
	CopyCountLimit   int64  `protobuf:"varint,13,opt,name=copyCountLimit,proto3" json:"copyCountLimit,omitempty"`
	CopyCountEnabled bool   `protobuf:"varint,14,opt,name=copyCountEnabled,proto3" json:"copyCountEnabled,omitempty"`
	Status           int32  `protobuf:"varint,15,opt,name=status,proto3" json:"status,omitempty"`
	UserName         string `protobuf:"bytes,16,opt,name=userName,proto3" json:"userName,omitempty"`
	WebURL           string `protobuf:"bytes,17,opt,name=webURL,proto3" json:"webURL,omitempty"`
}

func (x *FileShare) Reset() {
	*x = FileShare{}
	if protoimpl.UnsafeEnabled {
		mi := &file_share_share_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FileShare) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FileShare) ProtoMessage() {}

func (x *FileShare) ProtoReflect() protoreflect.Message {
	mi := &file_share_share_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FileShare.ProtoReflect.Descriptor instead.
func (*FileShare) Descriptor() ([]byte, []int) {
	return file_share_share_proto_rawDescGZIP(), []int{0}
}

func (x *FileShare) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *FileShare) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *FileShare) GetMime() string {
	if x != nil {
		return x.Mime
	}
	return ""
}

func (x *FileShare) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *FileShare) GetCtime() int64 {
	if x != nil {
		return x.Ctime
	}
	return 0
}

func (x *FileShare) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *FileShare) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *FileShare) GetPasswordEnabled() bool {
	if x != nil {
		return x.PasswordEnabled
	}
	return false
}

func (x *FileShare) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

func (x *FileShare) GetExpireEnabled() bool {
	if x != nil {
		return x.ExpireEnabled
	}
	return false
}

func (x *FileShare) GetExpire() int64 {
	if x != nil {
		return x.Expire
	}
	return 0
}

func (x *FileShare) GetCopyCount() int64 {
	if x != nil {
		return x.CopyCount
	}
	return 0
}

func (x *FileShare) GetCopyCountLimit() int64 {
	if x != nil {
		return x.CopyCountLimit
	}
	return 0
}

func (x *FileShare) GetCopyCountEnabled() bool {
	if x != nil {
		return x.CopyCountEnabled
	}
	return false
}

func (x *FileShare) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *FileShare) GetUserName() string {
	if x != nil {
		return x.UserName
	}
	return ""
}

func (x *FileShare) GetWebURL() string {
	if x != nil {
		return x.WebURL
	}
	return ""
}

type ShareSaveRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity     string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`          // used for identity file
	UserIdentity int64  `protobuf:"varint,2,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"` //
	SavePath     string `protobuf:"bytes,3,opt,name=savePath,proto3" json:"savePath,omitempty"`
	SaveIdentity string `protobuf:"bytes,4,opt,name=saveIdentity,proto3" json:"saveIdentity,omitempty"`
	Password     string `protobuf:"bytes,5,opt,name=password,proto3" json:"password,omitempty"`
}

func (x *ShareSaveRequest) Reset() {
	*x = ShareSaveRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_share_share_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ShareSaveRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ShareSaveRequest) ProtoMessage() {}

func (x *ShareSaveRequest) ProtoReflect() protoreflect.Message {
	mi := &file_share_share_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ShareSaveRequest.ProtoReflect.Descriptor instead.
func (*ShareSaveRequest) Descriptor() ([]byte, []int) {
	return file_share_share_proto_rawDescGZIP(), []int{1}
}

func (x *ShareSaveRequest) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ShareSaveRequest) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *ShareSaveRequest) GetSavePath() string {
	if x != nil {
		return x.SavePath
	}
	return ""
}

func (x *ShareSaveRequest) GetSaveIdentity() string {
	if x != nil {
		return x.SaveIdentity
	}
	return ""
}

func (x *ShareSaveRequest) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

var File_share_share_proto protoreflect.FileDescriptor

var file_share_share_proto_rawDesc = []byte{
	0x0a, 0x11, 0x73, 0x68, 0x61, 0x72, 0x65, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x2e, 0x70, 0x72,
	0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x1a, 0x1a, 0x63,
	0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xf3, 0x03, 0x0a, 0x09, 0x46, 0x69,
	0x6c, 0x65, 0x53, 0x68, 0x61, 0x72, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6d, 0x69, 0x6d, 0x65, 0x12, 0x22, 0x0a, 0x0c, 0x75,
	0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12,
	0x14, 0x0a, 0x05, 0x63, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x05,
	0x63, 0x74, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x06, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x6c, 0x61,
	0x67, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x12, 0x28, 0x0a,
	0x0f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0f, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x12, 0x24, 0x0a, 0x0d, 0x65, 0x78, 0x70, 0x69, 0x72, 0x65, 0x45, 0x6e, 0x61,
	0x62, 0x6c, 0x65, 0x64, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x08, 0x52, 0x0d, 0x65, 0x78, 0x70, 0x69,
	0x72, 0x65, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x65, 0x78, 0x70,
	0x69, 0x72, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x03, 0x52, 0x06, 0x65, 0x78, 0x70, 0x69, 0x72,
	0x65, 0x12, 0x1c, 0x0a, 0x09, 0x63, 0x6f, 0x70, 0x79, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x09, 0x63, 0x6f, 0x70, 0x79, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12,
	0x26, 0x0a, 0x0e, 0x63, 0x6f, 0x70, 0x79, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x4c, 0x69, 0x6d, 0x69,
	0x74, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x63, 0x6f, 0x70, 0x79, 0x43, 0x6f, 0x75,
	0x6e, 0x74, 0x4c, 0x69, 0x6d, 0x69, 0x74, 0x12, 0x2a, 0x0a, 0x10, 0x63, 0x6f, 0x70, 0x79, 0x43,
	0x6f, 0x75, 0x6e, 0x74, 0x45, 0x6e, 0x61, 0x62, 0x6c, 0x65, 0x64, 0x18, 0x0e, 0x20, 0x01, 0x28,
	0x08, 0x52, 0x10, 0x63, 0x6f, 0x70, 0x79, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x45, 0x6e, 0x61, 0x62,
	0x6c, 0x65, 0x64, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0f, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1a, 0x0a, 0x08, 0x75,
	0x73, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75,
	0x73, 0x65, 0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x77, 0x65, 0x62, 0x55, 0x52,
	0x4c, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x77, 0x65, 0x62, 0x55, 0x52, 0x4c, 0x22,
	0xae, 0x01, 0x0a, 0x10, 0x53, 0x68, 0x61, 0x72, 0x65, 0x53, 0x61, 0x76, 0x65, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x12, 0x22, 0x0a, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x73, 0x61, 0x76, 0x65, 0x50, 0x61, 0x74, 0x68,
	0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x73, 0x61, 0x76, 0x65, 0x50, 0x61, 0x74, 0x68,
	0x12, 0x22, 0x0a, 0x0c, 0x73, 0x61, 0x76, 0x65, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x61, 0x76, 0x65, 0x49, 0x64, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77, 0x6f, 0x72, 0x64,
	0x32, 0xf4, 0x01, 0x0a, 0x10, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x68, 0x61, 0x72, 0x65, 0x53, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x06, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12,
	0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53,
	0x68, 0x61, 0x72, 0x65, 0x1a, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x46, 0x69, 0x6c, 0x65, 0x53, 0x68, 0x61, 0x72, 0x65, 0x22, 0x00, 0x12, 0x35, 0x0a, 0x06, 0x63,
	0x61, 0x6e, 0x63, 0x65, 0x6c, 0x12, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x68, 0x61, 0x72, 0x65, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x42, 0x6f, 0x6f, 0x6c, 0x45, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x22, 0x00, 0x12, 0x38, 0x0a, 0x0a, 0x67, 0x65, 0x74, 0x4f, 0x72, 0x45, 0x6d, 0x70, 0x74, 0x79,
	0x12, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65,
	0x53, 0x68, 0x61, 0x72, 0x65, 0x1a, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x46, 0x69, 0x6c, 0x65, 0x53, 0x68, 0x61, 0x72, 0x65, 0x22, 0x00, 0x12, 0x39, 0x0a, 0x04,
	0x73, 0x61, 0x76, 0x65, 0x12, 0x1a, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x53, 0x68, 0x61, 0x72, 0x65, 0x53, 0x61, 0x76, 0x65, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x69, 0x6c, 0x65,
	0x53, 0x68, 0x61, 0x72, 0x65, 0x22, 0x00, 0x42, 0x3e, 0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75,
	0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x73, 0x68, 0x61, 0x72, 0x65, 0x2f, 0x66, 0x69,
	0x6c, 0x65, 0x73, 0x68, 0x61, 0x72, 0x65, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_share_share_proto_rawDescOnce sync.Once
	file_share_share_proto_rawDescData = file_share_share_proto_rawDesc
)

func file_share_share_proto_rawDescGZIP() []byte {
	file_share_share_proto_rawDescOnce.Do(func() {
		file_share_share_proto_rawDescData = protoimpl.X.CompressGZIP(file_share_share_proto_rawDescData)
	})
	return file_share_share_proto_rawDescData
}

var file_share_share_proto_msgTypes = make([]protoimpl.MessageInfo, 2)
var file_share_share_proto_goTypes = []interface{}{
	(*FileShare)(nil),         // 0: services.FileShare
	(*ShareSaveRequest)(nil),  // 1: services.ShareSaveRequest
	(*common.BoolEntity)(nil), // 2: services.BoolEntity
}
var file_share_share_proto_depIdxs = []int32{
	0, // 0: services.FileShareService.create:input_type -> services.FileShare
	0, // 1: services.FileShareService.cancel:input_type -> services.FileShare
	0, // 2: services.FileShareService.getOrEmpty:input_type -> services.FileShare
	1, // 3: services.FileShareService.save:input_type -> services.ShareSaveRequest
	0, // 4: services.FileShareService.create:output_type -> services.FileShare
	2, // 5: services.FileShareService.cancel:output_type -> services.BoolEntity
	0, // 6: services.FileShareService.getOrEmpty:output_type -> services.FileShare
	0, // 7: services.FileShareService.save:output_type -> services.FileShare
	4, // [4:8] is the sub-list for method output_type
	0, // [0:4] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_share_share_proto_init() }
func file_share_share_proto_init() {
	if File_share_share_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_share_share_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FileShare); i {
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
		file_share_share_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ShareSaveRequest); i {
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
			RawDescriptor: file_share_share_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   2,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_share_share_proto_goTypes,
		DependencyIndexes: file_share_share_proto_depIdxs,
		MessageInfos:      file_share_share_proto_msgTypes,
	}.Build()
	File_share_share_proto = out.File
	file_share_share_proto_rawDesc = nil
	file_share_share_proto_goTypes = nil
	file_share_share_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// FileShareServiceClient is the client API for FileShareService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type FileShareServiceClient interface {
	Create(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error)
	Cancel(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*common.BoolEntity, error)
	GetOrEmpty(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error)
	Save(ctx context.Context, in *ShareSaveRequest, opts ...grpc.CallOption) (*FileShare, error)
}

type fileShareServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFileShareServiceClient(cc grpc.ClientConnInterface) FileShareServiceClient {
	return &fileShareServiceClient{cc}
}

func (c *fileShareServiceClient) Create(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileShareServiceClient) Cancel(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.FileShareService/cancel", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileShareServiceClient) GetOrEmpty(ctx context.Context, in *FileShare, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/getOrEmpty", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileShareServiceClient) Save(ctx context.Context, in *ShareSaveRequest, opts ...grpc.CallOption) (*FileShare, error) {
	out := new(FileShare)
	err := c.cc.Invoke(ctx, "/services.FileShareService/save", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileShareServiceServer is the server API for FileShareService service.
type FileShareServiceServer interface {
	Create(context.Context, *FileShare) (*FileShare, error)
	Cancel(context.Context, *FileShare) (*common.BoolEntity, error)
	GetOrEmpty(context.Context, *FileShare) (*FileShare, error)
	Save(context.Context, *ShareSaveRequest) (*FileShare, error)
}

// UnimplementedFileShareServiceServer can be embedded to have forward compatible implementations.
type UnimplementedFileShareServiceServer struct {
}

func (*UnimplementedFileShareServiceServer) Create(context.Context, *FileShare) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedFileShareServiceServer) Cancel(context.Context, *FileShare) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Cancel not implemented")
}
func (*UnimplementedFileShareServiceServer) GetOrEmpty(context.Context, *FileShare) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetOrEmpty not implemented")
}
func (*UnimplementedFileShareServiceServer) Save(context.Context, *ShareSaveRequest) (*FileShare, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Save not implemented")
}

func RegisterFileShareServiceServer(s *grpc.Server, srv FileShareServiceServer) {
	s.RegisterService(&_FileShareService_serviceDesc, srv)
}

func _FileShareService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Create(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileShareService_Cancel_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Cancel(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Cancel",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Cancel(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileShareService_GetOrEmpty_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileShare)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).GetOrEmpty(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/GetOrEmpty",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).GetOrEmpty(ctx, req.(*FileShare))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileShareService_Save_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ShareSaveRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileShareServiceServer).Save(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.FileShareService/Save",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileShareServiceServer).Save(ctx, req.(*ShareSaveRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _FileShareService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.FileShareService",
	HandlerType: (*FileShareServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _FileShareService_Create_Handler,
		},
		{
			MethodName: "cancel",
			Handler:    _FileShareService_Cancel_Handler,
		},
		{
			MethodName: "getOrEmpty",
			Handler:    _FileShareService_GetOrEmpty_Handler,
		},
		{
			MethodName: "save",
			Handler:    _FileShareService_Save_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "share/share.proto",
}
