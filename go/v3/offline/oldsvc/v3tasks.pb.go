// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.28.0
// 	protoc        v3.19.4
// source: offline/v3tasks.proto

package oldsvc

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

type OldFileInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash string `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	// string  task_identity = 2;
	Size     int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	Sha      string `protobuf:"bytes,3,opt,name=sha,proto3" json:"sha,omitempty"`
	BlockSha string `protobuf:"bytes,4,opt,name=block_sha,json=blockSha,proto3" json:"block_sha,omitempty"`
}

func (x *OldFileInfo) Reset() {
	*x = OldFileInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_v3tasks_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OldFileInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OldFileInfo) ProtoMessage() {}

func (x *OldFileInfo) ProtoReflect() protoreflect.Message {
	mi := &file_offline_v3tasks_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OldFileInfo.ProtoReflect.Descriptor instead.
func (*OldFileInfo) Descriptor() ([]byte, []int) {
	return file_offline_v3tasks_proto_rawDescGZIP(), []int{0}
}

func (x *OldFileInfo) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *OldFileInfo) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *OldFileInfo) GetSha() string {
	if x != nil {
		return x.Sha
	}
	return ""
}

func (x *OldFileInfo) GetBlockSha() string {
	if x != nil {
		return x.BlockSha
	}
	return ""
}

type OldTaskFile struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity      string       `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	TaskIdentity  string       `protobuf:"bytes,2,opt,name=task_identity,json=taskIdentity,proto3" json:"task_identity,omitempty"`
	CreateTime    int64        `protobuf:"varint,3,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	Name          string       `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Path          string       `protobuf:"bytes,6,opt,name=path,proto3" json:"path,omitempty"`
	Hash          string       `protobuf:"bytes,7,opt,name=hash,proto3" json:"hash,omitempty"`
	Size          int64        `protobuf:"varint,8,opt,name=size,proto3" json:"size,omitempty"`
	ProcessedSize int64        `protobuf:"varint,9,opt,name=processed_size,json=processedSize,proto3" json:"processed_size,omitempty"`
	Status        int32        `protobuf:"varint,10,opt,name=status,proto3" json:"status,omitempty"`
	Flag          int32        `protobuf:"varint,11,opt,name=flag,proto3" json:"flag,omitempty"`
	FileIndex     int32        `protobuf:"varint,12,opt,name=file_index,json=fileIndex,proto3" json:"file_index,omitempty"`
	Finish        bool         `protobuf:"varint,13,opt,name=finish,proto3" json:"finish,omitempty"`
	Directory     bool         `protobuf:"varint,14,opt,name=directory,proto3" json:"directory,omitempty"`
	V3OldFileInfo *OldFileInfo `protobuf:"bytes,15,opt,name=v3_old_file_info,json=v3OldFileInfo,proto3" json:"v3_old_file_info,omitempty"`
}

func (x *OldTaskFile) Reset() {
	*x = OldTaskFile{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_v3tasks_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OldTaskFile) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OldTaskFile) ProtoMessage() {}

func (x *OldTaskFile) ProtoReflect() protoreflect.Message {
	mi := &file_offline_v3tasks_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OldTaskFile.ProtoReflect.Descriptor instead.
func (*OldTaskFile) Descriptor() ([]byte, []int) {
	return file_offline_v3tasks_proto_rawDescGZIP(), []int{1}
}

func (x *OldTaskFile) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *OldTaskFile) GetTaskIdentity() string {
	if x != nil {
		return x.TaskIdentity
	}
	return ""
}

func (x *OldTaskFile) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *OldTaskFile) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *OldTaskFile) GetPath() string {
	if x != nil {
		return x.Path
	}
	return ""
}

func (x *OldTaskFile) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *OldTaskFile) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *OldTaskFile) GetProcessedSize() int64 {
	if x != nil {
		return x.ProcessedSize
	}
	return 0
}

func (x *OldTaskFile) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *OldTaskFile) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *OldTaskFile) GetFileIndex() int32 {
	if x != nil {
		return x.FileIndex
	}
	return 0
}

func (x *OldTaskFile) GetFinish() bool {
	if x != nil {
		return x.Finish
	}
	return false
}

func (x *OldTaskFile) GetDirectory() bool {
	if x != nil {
		return x.Directory
	}
	return false
}

func (x *OldTaskFile) GetV3OldFileInfo() *OldFileInfo {
	if x != nil {
		return x.V3OldFileInfo
	}
	return nil
}

type OldSystemTask struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity      string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Size          int64  `protobuf:"varint,2,opt,name=size,proto3" json:"size,omitempty"`
	CreateUser    int64  `protobuf:"varint,3,opt,name=create_user,json=createUser,proto3" json:"create_user,omitempty"`
	CreateTime    int64  `protobuf:"varint,4,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	Name          string `protobuf:"bytes,5,opt,name=name,proto3" json:"name,omitempty"`
	Type          int32  `protobuf:"varint,6,opt,name=type,proto3" json:"type,omitempty"`
	Status        int32  `protobuf:"varint,7,opt,name=status,proto3" json:"status,omitempty"`
	Flag          int32  `protobuf:"varint,8,opt,name=flag,proto3" json:"flag,omitempty"`
	ProcessedSize int64  `protobuf:"varint,9,opt,name=processed_size,json=processedSize,proto3" json:"processed_size,omitempty"`
	ErrorCode     int32  `protobuf:"varint,10,opt,name=error_code,json=errorCode,proto3" json:"error_code,omitempty"`
	ErrorMessage  string `protobuf:"bytes,11,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
	CreateAddr    string `protobuf:"bytes,12,opt,name=create_addr,json=createAddr,proto3" json:"create_addr,omitempty"`
	Data          string `protobuf:"bytes,13,opt,name=data,proto3" json:"data,omitempty"`
	TextLink      string `protobuf:"bytes,14,opt,name=text_link,json=textLink,proto3" json:"text_link,omitempty"`
	ErrorCount    int32  `protobuf:"varint,15,opt,name=error_count,json=errorCount,proto3" json:"error_count,omitempty"`
	UpdateTime    int64  `protobuf:"varint,16,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
	Op            int32  `protobuf:"varint,17,opt,name=op,proto3" json:"op,omitempty"`
	FileHash      string `protobuf:"bytes,18,opt,name=file_hash,json=fileHash,proto3" json:"file_hash,omitempty"`
	Username      string `protobuf:"bytes,19,opt,name=username,proto3" json:"username,omitempty"`
	Password      string `protobuf:"bytes,20,opt,name=password,proto3" json:"password,omitempty"`
}

func (x *OldSystemTask) Reset() {
	*x = OldSystemTask{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_v3tasks_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OldSystemTask) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OldSystemTask) ProtoMessage() {}

func (x *OldSystemTask) ProtoReflect() protoreflect.Message {
	mi := &file_offline_v3tasks_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OldSystemTask.ProtoReflect.Descriptor instead.
func (*OldSystemTask) Descriptor() ([]byte, []int) {
	return file_offline_v3tasks_proto_rawDescGZIP(), []int{2}
}

func (x *OldSystemTask) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *OldSystemTask) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

func (x *OldSystemTask) GetCreateUser() int64 {
	if x != nil {
		return x.CreateUser
	}
	return 0
}

func (x *OldSystemTask) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *OldSystemTask) GetName() string {
	if x != nil {
		return x.Name
	}
	return ""
}

func (x *OldSystemTask) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *OldSystemTask) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *OldSystemTask) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *OldSystemTask) GetProcessedSize() int64 {
	if x != nil {
		return x.ProcessedSize
	}
	return 0
}

func (x *OldSystemTask) GetErrorCode() int32 {
	if x != nil {
		return x.ErrorCode
	}
	return 0
}

func (x *OldSystemTask) GetErrorMessage() string {
	if x != nil {
		return x.ErrorMessage
	}
	return ""
}

func (x *OldSystemTask) GetCreateAddr() string {
	if x != nil {
		return x.CreateAddr
	}
	return ""
}

func (x *OldSystemTask) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *OldSystemTask) GetTextLink() string {
	if x != nil {
		return x.TextLink
	}
	return ""
}

func (x *OldSystemTask) GetErrorCount() int32 {
	if x != nil {
		return x.ErrorCount
	}
	return 0
}

func (x *OldSystemTask) GetUpdateTime() int64 {
	if x != nil {
		return x.UpdateTime
	}
	return 0
}

func (x *OldSystemTask) GetOp() int32 {
	if x != nil {
		return x.Op
	}
	return 0
}

func (x *OldSystemTask) GetFileHash() string {
	if x != nil {
		return x.FileHash
	}
	return ""
}

func (x *OldSystemTask) GetUsername() string {
	if x != nil {
		return x.Username
	}
	return ""
}

func (x *OldSystemTask) GetPassword() string {
	if x != nil {
		return x.Password
	}
	return ""
}

type OldSystemTaskDetail struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity string         `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Task     *OldSystemTask `protobuf:"bytes,2,opt,name=task,proto3" json:"task,omitempty"`
	Data     []*OldTaskFile `protobuf:"bytes,3,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *OldSystemTaskDetail) Reset() {
	*x = OldSystemTaskDetail{}
	if protoimpl.UnsafeEnabled {
		mi := &file_offline_v3tasks_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *OldSystemTaskDetail) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*OldSystemTaskDetail) ProtoMessage() {}

func (x *OldSystemTaskDetail) ProtoReflect() protoreflect.Message {
	mi := &file_offline_v3tasks_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use OldSystemTaskDetail.ProtoReflect.Descriptor instead.
func (*OldSystemTaskDetail) Descriptor() ([]byte, []int) {
	return file_offline_v3tasks_proto_rawDescGZIP(), []int{3}
}

func (x *OldSystemTaskDetail) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *OldSystemTaskDetail) GetTask() *OldSystemTask {
	if x != nil {
		return x.Task
	}
	return nil
}

func (x *OldSystemTaskDetail) GetData() []*OldTaskFile {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_offline_v3tasks_proto protoreflect.FileDescriptor

var file_offline_v3tasks_proto_rawDesc = []byte{
	0x0a, 0x15, 0x6f, 0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x2f, 0x76, 0x33, 0x74, 0x61, 0x73, 0x6b,
	0x73, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x0b, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x22, 0x64, 0x0a, 0x0b, 0x4f, 0x6c, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x49,
	0x6e, 0x66, 0x6f, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x10, 0x0a, 0x03, 0x73,
	0x68, 0x61, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x73, 0x68, 0x61, 0x12, 0x1b, 0x0a,
	0x09, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x5f, 0x73, 0x68, 0x61, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x08, 0x62, 0x6c, 0x6f, 0x63, 0x6b, 0x53, 0x68, 0x61, 0x22, 0xaa, 0x03, 0x0a, 0x0b, 0x4f,
	0x6c, 0x64, 0x54, 0x61, 0x73, 0x6b, 0x46, 0x69, 0x6c, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x23, 0x0a, 0x0d, 0x74, 0x61, 0x73, 0x6b, 0x5f, 0x69,
	0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x74,
	0x61, 0x73, 0x6b, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x1f, 0x0a, 0x0b, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03,
	0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65,
	0x12, 0x12, 0x0a, 0x04, 0x70, 0x61, 0x74, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x70, 0x61, 0x74, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x07, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x25, 0x0a, 0x0e,
	0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x5f, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x09,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x53,
	0x69, 0x7a, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x0a, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x66,
	0x6c, 0x61, 0x67, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x12,
	0x1d, 0x0a, 0x0a, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x69, 0x6e, 0x64, 0x65, 0x78, 0x18, 0x0c, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x49, 0x6e, 0x64, 0x65, 0x78, 0x12, 0x16,
	0x0a, 0x06, 0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x08, 0x52, 0x06,
	0x66, 0x69, 0x6e, 0x69, 0x73, 0x68, 0x12, 0x1c, 0x0a, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63, 0x74,
	0x6f, 0x72, 0x79, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x08, 0x52, 0x09, 0x64, 0x69, 0x72, 0x65, 0x63,
	0x74, 0x6f, 0x72, 0x79, 0x12, 0x41, 0x0a, 0x10, 0x76, 0x33, 0x5f, 0x6f, 0x6c, 0x64, 0x5f, 0x66,
	0x69, 0x6c, 0x65, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x18,
	0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64,
	0x46, 0x69, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52, 0x0d, 0x76, 0x33, 0x4f, 0x6c, 0x64, 0x46,
	0x69, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0xb9, 0x04, 0x0a, 0x0d, 0x4f, 0x6c, 0x64, 0x53,
	0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x61, 0x73, 0x6b, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x5f, 0x75, 0x73, 0x65, 0x72, 0x18, 0x03, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x55, 0x73, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6e, 0x61, 0x6d, 0x65, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x07, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x66,
	0x6c, 0x61, 0x67, 0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x12,
	0x25, 0x0a, 0x0e, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73, 0x65, 0x64, 0x5f, 0x73, 0x69, 0x7a,
	0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x70, 0x72, 0x6f, 0x63, 0x65, 0x73, 0x73,
	0x65, 0x64, 0x53, 0x69, 0x7a, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f,
	0x63, 0x6f, 0x64, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x09, 0x65, 0x72, 0x72, 0x6f,
	0x72, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x72,
	0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x64, 0x64, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12,
	0x1b, 0x0a, 0x09, 0x74, 0x65, 0x78, 0x74, 0x5f, 0x6c, 0x69, 0x6e, 0x6b, 0x18, 0x0e, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x74, 0x65, 0x78, 0x74, 0x4c, 0x69, 0x6e, 0x6b, 0x12, 0x1f, 0x0a, 0x0b,
	0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x0f, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x1f, 0x0a,
	0x0b, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x10, 0x20, 0x01,
	0x28, 0x03, 0x52, 0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x0e,
	0x0a, 0x02, 0x6f, 0x70, 0x18, 0x11, 0x20, 0x01, 0x28, 0x05, 0x52, 0x02, 0x6f, 0x70, 0x12, 0x1b,
	0x0a, 0x09, 0x66, 0x69, 0x6c, 0x65, 0x5f, 0x68, 0x61, 0x73, 0x68, 0x18, 0x12, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x66, 0x69, 0x6c, 0x65, 0x48, 0x61, 0x73, 0x68, 0x12, 0x1a, 0x0a, 0x08, 0x75,
	0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x75,
	0x73, 0x65, 0x72, 0x6e, 0x61, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x18, 0x14, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x61, 0x73, 0x73, 0x77,
	0x6f, 0x72, 0x64, 0x22, 0x8f, 0x01, 0x0a, 0x13, 0x4f, 0x6c, 0x64, 0x53, 0x79, 0x73, 0x74, 0x65,
	0x6d, 0x54, 0x61, 0x73, 0x6b, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x12, 0x1a, 0x0a, 0x08, 0x69,
	0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69,
	0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x2e, 0x0a, 0x04, 0x74, 0x61, 0x73, 0x6b, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x1a, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x61, 0x73,
	0x6b, 0x52, 0x04, 0x74, 0x61, 0x73, 0x6b, 0x12, 0x2c, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18,
	0x03, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64, 0x54, 0x61, 0x73, 0x6b, 0x46, 0x69, 0x6c, 0x65, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x32, 0x9c, 0x01, 0x0a, 0x0e, 0x4f, 0x6c, 0x64, 0x54, 0x61, 0x73,
	0x6b, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x45, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12,
	0x1a, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c,
	0x64, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x54, 0x61, 0x73, 0x6b, 0x1a, 0x20, 0x2e, 0x76, 0x35,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64, 0x53, 0x79, 0x73,
	0x74, 0x65, 0x6d, 0x54, 0x61, 0x73, 0x6b, 0x44, 0x65, 0x74, 0x61, 0x69, 0x6c, 0x22, 0x00, 0x12,
	0x43, 0x0a, 0x0b, 0x47, 0x65, 0x74, 0x46, 0x69, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x18,
	0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64,
	0x46, 0x69, 0x6c, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x18, 0x2e, 0x76, 0x35, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x6c, 0x64, 0x46, 0x69, 0x6c, 0x65, 0x49, 0x6e,
	0x66, 0x6f, 0x22, 0x00, 0x42, 0x37, 0x5a, 0x35, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x76, 0x33, 0x2f, 0x6f,
	0x66, 0x66, 0x6c, 0x69, 0x6e, 0x65, 0x2f, 0x6f, 0x6c, 0x64, 0x73, 0x76, 0x63, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_offline_v3tasks_proto_rawDescOnce sync.Once
	file_offline_v3tasks_proto_rawDescData = file_offline_v3tasks_proto_rawDesc
)

func file_offline_v3tasks_proto_rawDescGZIP() []byte {
	file_offline_v3tasks_proto_rawDescOnce.Do(func() {
		file_offline_v3tasks_proto_rawDescData = protoimpl.X.CompressGZIP(file_offline_v3tasks_proto_rawDescData)
	})
	return file_offline_v3tasks_proto_rawDescData
}

var file_offline_v3tasks_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_offline_v3tasks_proto_goTypes = []interface{}{
	(*OldFileInfo)(nil),         // 0: v5.services.OldFileInfo
	(*OldTaskFile)(nil),         // 1: v5.services.OldTaskFile
	(*OldSystemTask)(nil),       // 2: v5.services.OldSystemTask
	(*OldSystemTaskDetail)(nil), // 3: v5.services.OldSystemTaskDetail
}
var file_offline_v3tasks_proto_depIdxs = []int32{
	0, // 0: v5.services.OldTaskFile.v3_old_file_info:type_name -> v5.services.OldFileInfo
	2, // 1: v5.services.OldSystemTaskDetail.task:type_name -> v5.services.OldSystemTask
	1, // 2: v5.services.OldSystemTaskDetail.data:type_name -> v5.services.OldTaskFile
	2, // 3: v5.services.OldTaskService.Get:input_type -> v5.services.OldSystemTask
	0, // 4: v5.services.OldTaskService.GetFileInfo:input_type -> v5.services.OldFileInfo
	3, // 5: v5.services.OldTaskService.Get:output_type -> v5.services.OldSystemTaskDetail
	0, // 6: v5.services.OldTaskService.GetFileInfo:output_type -> v5.services.OldFileInfo
	5, // [5:7] is the sub-list for method output_type
	3, // [3:5] is the sub-list for method input_type
	3, // [3:3] is the sub-list for extension type_name
	3, // [3:3] is the sub-list for extension extendee
	0, // [0:3] is the sub-list for field type_name
}

func init() { file_offline_v3tasks_proto_init() }
func file_offline_v3tasks_proto_init() {
	if File_offline_v3tasks_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_offline_v3tasks_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OldFileInfo); i {
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
		file_offline_v3tasks_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OldTaskFile); i {
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
		file_offline_v3tasks_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OldSystemTask); i {
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
		file_offline_v3tasks_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*OldSystemTaskDetail); i {
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
			RawDescriptor: file_offline_v3tasks_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_offline_v3tasks_proto_goTypes,
		DependencyIndexes: file_offline_v3tasks_proto_depIdxs,
		MessageInfos:      file_offline_v3tasks_proto_msgTypes,
	}.Build()
	File_offline_v3tasks_proto = out.File
	file_offline_v3tasks_proto_rawDesc = nil
	file_offline_v3tasks_proto_goTypes = nil
	file_offline_v3tasks_proto_depIdxs = nil
}