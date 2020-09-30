// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: task/task.proto

package task

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

type FetchRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Consumer string  `protobuf:"bytes,1,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Type     []int32 `protobuf:"varint,2,rep,packed,name=type,proto3" json:"type,omitempty"`
	Count    int32   `protobuf:"varint,3,opt,name=count,proto3" json:"count,omitempty"`
	Status   []int32 `protobuf:"varint,4,rep,packed,name=status,proto3" json:"status,omitempty"`
	Next     int32   `protobuf:"varint,5,opt,name=next,proto3" json:"next,omitempty"`
	Deadline int64   `protobuf:"varint,6,opt,name=deadline,proto3" json:"deadline,omitempty"`
	Recover  bool    `protobuf:"varint,7,opt,name=recover,proto3" json:"recover,omitempty"`
	Desc     bool    `protobuf:"varint,8,opt,name=desc,proto3" json:"desc,omitempty"`
}

func (x *FetchRequest) Reset() {
	*x = FetchRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchRequest) ProtoMessage() {}

func (x *FetchRequest) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchRequest.ProtoReflect.Descriptor instead.
func (*FetchRequest) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{0}
}

func (x *FetchRequest) GetConsumer() string {
	if x != nil {
		return x.Consumer
	}
	return ""
}

func (x *FetchRequest) GetType() []int32 {
	if x != nil {
		return x.Type
	}
	return nil
}

func (x *FetchRequest) GetCount() int32 {
	if x != nil {
		return x.Count
	}
	return 0
}

func (x *FetchRequest) GetStatus() []int32 {
	if x != nil {
		return x.Status
	}
	return nil
}

func (x *FetchRequest) GetNext() int32 {
	if x != nil {
		return x.Next
	}
	return 0
}

func (x *FetchRequest) GetDeadline() int64 {
	if x != nil {
		return x.Deadline
	}
	return 0
}

func (x *FetchRequest) GetRecover() bool {
	if x != nil {
		return x.Recover
	}
	return false
}

func (x *FetchRequest) GetDesc() bool {
	if x != nil {
		return x.Desc
	}
	return false
}

type SimpleTask struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity     string `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"` //id
	Type         int32  `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`        // type
	Source       string `protobuf:"bytes,3,opt,name=source,proto3" json:"source,omitempty"`
	Consumer     string `protobuf:"bytes,4,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Producer     string `protobuf:"bytes,5,opt,name=producer,proto3" json:"producer,omitempty"`
	CreateTime   int64  `protobuf:"varint,6,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	ConsumerTime int64  `protobuf:"varint,7,opt,name=consumer_time,json=consumerTime,proto3" json:"consumer_time,omitempty"`
	Deadline     int64  `protobuf:"varint,8,opt,name=deadline,proto3" json:"deadline,omitempty"`
	Data         string `protobuf:"bytes,9,opt,name=data,proto3" json:"data,omitempty"`
	Status       int32  `protobuf:"varint,10,opt,name=status,proto3" json:"status,omitempty"`
}

func (x *SimpleTask) Reset() {
	*x = SimpleTask{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SimpleTask) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SimpleTask) ProtoMessage() {}

func (x *SimpleTask) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SimpleTask.ProtoReflect.Descriptor instead.
func (*SimpleTask) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{1}
}

func (x *SimpleTask) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *SimpleTask) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *SimpleTask) GetSource() string {
	if x != nil {
		return x.Source
	}
	return ""
}

func (x *SimpleTask) GetConsumer() string {
	if x != nil {
		return x.Consumer
	}
	return ""
}

func (x *SimpleTask) GetProducer() string {
	if x != nil {
		return x.Producer
	}
	return ""
}

func (x *SimpleTask) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *SimpleTask) GetConsumerTime() int64 {
	if x != nil {
		return x.ConsumerTime
	}
	return 0
}

func (x *SimpleTask) GetDeadline() int64 {
	if x != nil {
		return x.Deadline
	}
	return 0
}

func (x *SimpleTask) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *SimpleTask) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

type ErrorTask struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Seq          int64  `protobuf:"varint,1,opt,name=seq,proto3" json:"seq,omitempty"`
	Identity     string `protobuf:"bytes,2,opt,name=identity,proto3" json:"identity,omitempty"` //id
	Type         int32  `protobuf:"varint,3,opt,name=type,proto3" json:"type,omitempty"`        // type
	Source       string `protobuf:"bytes,4,opt,name=source,proto3" json:"source,omitempty"`
	Consumer     string `protobuf:"bytes,5,opt,name=consumer,proto3" json:"consumer,omitempty"`
	Producer     string `protobuf:"bytes,6,opt,name=producer,proto3" json:"producer,omitempty"`
	CreateTime   int64  `protobuf:"varint,7,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	ConsumerTime int64  `protobuf:"varint,8,opt,name=consumer_time,json=consumerTime,proto3" json:"consumer_time,omitempty"`
	Deadline     int64  `protobuf:"varint,9,opt,name=deadline,proto3" json:"deadline,omitempty"`
	Data         string `protobuf:"bytes,10,opt,name=data,proto3" json:"data,omitempty"`
	Status       int32  `protobuf:"varint,11,opt,name=status,proto3" json:"status,omitempty"`
	ErrorCode    int32  `protobuf:"varint,12,opt,name=error_code,json=errorCode,proto3" json:"error_code,omitempty"`
	ErrorMessage string `protobuf:"bytes,13,opt,name=error_message,json=errorMessage,proto3" json:"error_message,omitempty"`
}

func (x *ErrorTask) Reset() {
	*x = ErrorTask{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ErrorTask) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ErrorTask) ProtoMessage() {}

func (x *ErrorTask) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ErrorTask.ProtoReflect.Descriptor instead.
func (*ErrorTask) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{2}
}

func (x *ErrorTask) GetSeq() int64 {
	if x != nil {
		return x.Seq
	}
	return 0
}

func (x *ErrorTask) GetIdentity() string {
	if x != nil {
		return x.Identity
	}
	return ""
}

func (x *ErrorTask) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *ErrorTask) GetSource() string {
	if x != nil {
		return x.Source
	}
	return ""
}

func (x *ErrorTask) GetConsumer() string {
	if x != nil {
		return x.Consumer
	}
	return ""
}

func (x *ErrorTask) GetProducer() string {
	if x != nil {
		return x.Producer
	}
	return ""
}

func (x *ErrorTask) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *ErrorTask) GetConsumerTime() int64 {
	if x != nil {
		return x.ConsumerTime
	}
	return 0
}

func (x *ErrorTask) GetDeadline() int64 {
	if x != nil {
		return x.Deadline
	}
	return 0
}

func (x *ErrorTask) GetData() string {
	if x != nil {
		return x.Data
	}
	return ""
}

func (x *ErrorTask) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *ErrorTask) GetErrorCode() int32 {
	if x != nil {
		return x.ErrorCode
	}
	return 0
}

func (x *ErrorTask) GetErrorMessage() string {
	if x != nil {
		return x.ErrorMessage
	}
	return ""
}

type FetchResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*SimpleTask `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *FetchResponse) Reset() {
	*x = FetchResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_task_task_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *FetchResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*FetchResponse) ProtoMessage() {}

func (x *FetchResponse) ProtoReflect() protoreflect.Message {
	mi := &file_task_task_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use FetchResponse.ProtoReflect.Descriptor instead.
func (*FetchResponse) Descriptor() ([]byte, []int) {
	return file_task_task_proto_rawDescGZIP(), []int{3}
}

func (x *FetchResponse) GetData() []*SimpleTask {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_task_task_proto protoreflect.FileDescriptor

var file_task_task_proto_rawDesc = []byte{
	0x0a, 0x0f, 0x74, 0x61, 0x73, 0x6b, 0x2f, 0x74, 0x61, 0x73, 0x6b, 0x2e, 0x70, 0x72, 0x6f, 0x74,
	0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x1a, 0x1a, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0xca, 0x01, 0x0a, 0x0c, 0x46, 0x65, 0x74, 0x63,
	0x68, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x6f, 0x6e, 0x73,
	0x75, 0x6d, 0x65, 0x72, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6f, 0x6e, 0x73,
	0x75, 0x6d, 0x65, 0x72, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x03,
	0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x63, 0x6f, 0x75, 0x6e,
	0x74, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x05, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x12, 0x16,
	0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x04, 0x20, 0x03, 0x28, 0x05, 0x52, 0x06,
	0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x6e, 0x65, 0x78, 0x74, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x6e, 0x65, 0x78, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65,
	0x61, 0x64, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x64, 0x65,
	0x61, 0x64, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x72, 0x65, 0x63, 0x6f, 0x76, 0x65,
	0x72, 0x18, 0x07, 0x20, 0x01, 0x28, 0x08, 0x52, 0x07, 0x72, 0x65, 0x63, 0x6f, 0x76, 0x65, 0x72,
	0x12, 0x12, 0x0a, 0x04, 0x64, 0x65, 0x73, 0x63, 0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x04,
	0x64, 0x65, 0x73, 0x63, 0x22, 0x9a, 0x02, 0x0a, 0x0a, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54,
	0x61, 0x73, 0x6b, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18,
	0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12,
	0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74,
	0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x03, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x63,
	0x6f, 0x6e, 0x73, 0x75, 0x6d, 0x65, 0x72, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63,
	0x6f, 0x6e, 0x73, 0x75, 0x6d, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75,
	0x63, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69,
	0x6d, 0x65, 0x18, 0x06, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65,
	0x54, 0x69, 0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x6f, 0x6e, 0x73, 0x75, 0x6d, 0x65, 0x72,
	0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x63, 0x6f, 0x6e,
	0x73, 0x75, 0x6d, 0x65, 0x72, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65, 0x61,
	0x64, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x64, 0x65, 0x61,
	0x64, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x09, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61,
	0x74, 0x75, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x22, 0xef, 0x02, 0x0a, 0x09, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x54, 0x61, 0x73, 0x6b, 0x12,
	0x10, 0x0a, 0x03, 0x73, 0x65, 0x71, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x03, 0x73, 0x65,
	0x71, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a,
	0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70,
	0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x06, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x63, 0x6f, 0x6e,
	0x73, 0x75, 0x6d, 0x65, 0x72, 0x18, 0x05, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x63, 0x6f, 0x6e,
	0x73, 0x75, 0x6d, 0x65, 0x72, 0x12, 0x1a, 0x0a, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x65,
	0x72, 0x18, 0x06, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70, 0x72, 0x6f, 0x64, 0x75, 0x63, 0x65,
	0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65,
	0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69,
	0x6d, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x6f, 0x6e, 0x73, 0x75, 0x6d, 0x65, 0x72, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x63, 0x6f, 0x6e, 0x73, 0x75,
	0x6d, 0x65, 0x72, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x65, 0x61, 0x64, 0x6c,
	0x69, 0x6e, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x64, 0x65, 0x61, 0x64, 0x6c,
	0x69, 0x6e, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x0a, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75,
	0x73, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12,
	0x1d, 0x0a, 0x0a, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0c, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x09, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x23,
	0x0a, 0x0d, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x5f, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18,
	0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x4d, 0x65, 0x73, 0x73,
	0x61, 0x67, 0x65, 0x22, 0x39, 0x0a, 0x0d, 0x46, 0x65, 0x74, 0x63, 0x68, 0x52, 0x65, 0x73, 0x70,
	0x6f, 0x6e, 0x73, 0x65, 0x12, 0x28, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03,
	0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69,
	0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x32, 0x9f,
	0x03, 0x0a, 0x17, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x43, 0x65, 0x6e,
	0x74, 0x65, 0x72, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x36, 0x0a, 0x06, 0x63, 0x72,
	0x65, 0x61, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b,
	0x22, 0x00, 0x12, 0x3a, 0x0a, 0x05, 0x66, 0x65, 0x74, 0x63, 0x68, 0x12, 0x16, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46, 0x65, 0x74, 0x63, 0x68, 0x52, 0x65, 0x71, 0x75,
	0x65, 0x73, 0x74, 0x1a, 0x17, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x46,
	0x65, 0x74, 0x63, 0x68, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x38,
	0x0a, 0x08, 0x63, 0x6f, 0x6d, 0x70, 0x6c, 0x65, 0x74, 0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b,
	0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x42, 0x6f, 0x6f, 0x6c,
	0x45, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x22, 0x00, 0x12, 0x36, 0x0a, 0x06, 0x75, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69,
	0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x22, 0x00,
	0x12, 0x33, 0x0a, 0x05, 0x65, 0x72, 0x72, 0x6f, 0x72, 0x12, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x54, 0x61, 0x73, 0x6b, 0x1a, 0x13,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x45, 0x72, 0x72, 0x6f, 0x72, 0x54,
	0x61, 0x73, 0x6b, 0x22, 0x00, 0x12, 0x33, 0x0a, 0x03, 0x67, 0x65, 0x74, 0x12, 0x14, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61,
	0x73, 0x6b, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x69,
	0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x22, 0x00, 0x12, 0x34, 0x0a, 0x05, 0x72, 0x65,
	0x73, 0x65, 0x74, 0x12, 0x13, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x45,
	0x72, 0x72, 0x6f, 0x72, 0x54, 0x61, 0x73, 0x6b, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x53, 0x69, 0x6d, 0x70, 0x6c, 0x65, 0x54, 0x61, 0x73, 0x6b, 0x22, 0x00,
	0x42, 0x3e, 0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x7a,
	0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2d,
	0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2f, 0x74, 0x61, 0x73, 0x6b, 0x63, 0x65, 0x6e, 0x74, 0x65, 0x72, 0x2f, 0x74, 0x61, 0x73, 0x6b,
	0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_task_task_proto_rawDescOnce sync.Once
	file_task_task_proto_rawDescData = file_task_task_proto_rawDesc
)

func file_task_task_proto_rawDescGZIP() []byte {
	file_task_task_proto_rawDescOnce.Do(func() {
		file_task_task_proto_rawDescData = protoimpl.X.CompressGZIP(file_task_task_proto_rawDescData)
	})
	return file_task_task_proto_rawDescData
}

var file_task_task_proto_msgTypes = make([]protoimpl.MessageInfo, 4)
var file_task_task_proto_goTypes = []interface{}{
	(*FetchRequest)(nil),      // 0: services.FetchRequest
	(*SimpleTask)(nil),        // 1: services.SimpleTask
	(*ErrorTask)(nil),         // 2: services.ErrorTask
	(*FetchResponse)(nil),     // 3: services.FetchResponse
	(*common.BoolEntity)(nil), // 4: services.BoolEntity
}
var file_task_task_proto_depIdxs = []int32{
	1, // 0: services.FetchResponse.data:type_name -> services.SimpleTask
	1, // 1: services.SimpleTaskCenterService.create:input_type -> services.SimpleTask
	0, // 2: services.SimpleTaskCenterService.fetch:input_type -> services.FetchRequest
	1, // 3: services.SimpleTaskCenterService.complete:input_type -> services.SimpleTask
	1, // 4: services.SimpleTaskCenterService.update:input_type -> services.SimpleTask
	2, // 5: services.SimpleTaskCenterService.error:input_type -> services.ErrorTask
	1, // 6: services.SimpleTaskCenterService.get:input_type -> services.SimpleTask
	2, // 7: services.SimpleTaskCenterService.reset:input_type -> services.ErrorTask
	1, // 8: services.SimpleTaskCenterService.create:output_type -> services.SimpleTask
	3, // 9: services.SimpleTaskCenterService.fetch:output_type -> services.FetchResponse
	4, // 10: services.SimpleTaskCenterService.complete:output_type -> services.BoolEntity
	1, // 11: services.SimpleTaskCenterService.update:output_type -> services.SimpleTask
	2, // 12: services.SimpleTaskCenterService.error:output_type -> services.ErrorTask
	1, // 13: services.SimpleTaskCenterService.get:output_type -> services.SimpleTask
	1, // 14: services.SimpleTaskCenterService.reset:output_type -> services.SimpleTask
	8, // [8:15] is the sub-list for method output_type
	1, // [1:8] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_task_task_proto_init() }
func file_task_task_proto_init() {
	if File_task_task_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_task_task_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchRequest); i {
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
		file_task_task_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SimpleTask); i {
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
		file_task_task_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ErrorTask); i {
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
		file_task_task_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*FetchResponse); i {
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
			RawDescriptor: file_task_task_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   4,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_task_task_proto_goTypes,
		DependencyIndexes: file_task_task_proto_depIdxs,
		MessageInfos:      file_task_task_proto_msgTypes,
	}.Build()
	File_task_task_proto = out.File
	file_task_task_proto_rawDesc = nil
	file_task_task_proto_goTypes = nil
	file_task_task_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// SimpleTaskCenterServiceClient is the client API for SimpleTaskCenterService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type SimpleTaskCenterServiceClient interface {
	Create(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error)
	Fetch(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error)
	// rpc delete(SimpleTask) returns (BoolEntity) {} // del
	Complete(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*common.BoolEntity, error)
	Update(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error)
	Error(ctx context.Context, in *ErrorTask, opts ...grpc.CallOption) (*ErrorTask, error)
	// rpc list(ListRequest) returns (FetchResponse) {} // del
	Get(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error)
	Reset(ctx context.Context, in *ErrorTask, opts ...grpc.CallOption) (*SimpleTask, error)
}

type simpleTaskCenterServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewSimpleTaskCenterServiceClient(cc grpc.ClientConnInterface) SimpleTaskCenterServiceClient {
	return &simpleTaskCenterServiceClient{cc}
}

func (c *simpleTaskCenterServiceClient) Create(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error) {
	out := new(SimpleTask)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Fetch(ctx context.Context, in *FetchRequest, opts ...grpc.CallOption) (*FetchResponse, error) {
	out := new(FetchResponse)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/fetch", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Complete(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*common.BoolEntity, error) {
	out := new(common.BoolEntity)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/complete", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Update(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error) {
	out := new(SimpleTask)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Error(ctx context.Context, in *ErrorTask, opts ...grpc.CallOption) (*ErrorTask, error) {
	out := new(ErrorTask)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/error", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Get(ctx context.Context, in *SimpleTask, opts ...grpc.CallOption) (*SimpleTask, error) {
	out := new(SimpleTask)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *simpleTaskCenterServiceClient) Reset(ctx context.Context, in *ErrorTask, opts ...grpc.CallOption) (*SimpleTask, error) {
	out := new(SimpleTask)
	err := c.cc.Invoke(ctx, "/services.SimpleTaskCenterService/reset", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// SimpleTaskCenterServiceServer is the server API for SimpleTaskCenterService service.
type SimpleTaskCenterServiceServer interface {
	Create(context.Context, *SimpleTask) (*SimpleTask, error)
	Fetch(context.Context, *FetchRequest) (*FetchResponse, error)
	// rpc delete(SimpleTask) returns (BoolEntity) {} // del
	Complete(context.Context, *SimpleTask) (*common.BoolEntity, error)
	Update(context.Context, *SimpleTask) (*SimpleTask, error)
	Error(context.Context, *ErrorTask) (*ErrorTask, error)
	// rpc list(ListRequest) returns (FetchResponse) {} // del
	Get(context.Context, *SimpleTask) (*SimpleTask, error)
	Reset(context.Context, *ErrorTask) (*SimpleTask, error)
}

// UnimplementedSimpleTaskCenterServiceServer can be embedded to have forward compatible implementations.
type UnimplementedSimpleTaskCenterServiceServer struct {
}

func (*UnimplementedSimpleTaskCenterServiceServer) Create(context.Context, *SimpleTask) (*SimpleTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Fetch(context.Context, *FetchRequest) (*FetchResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Fetch not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Complete(context.Context, *SimpleTask) (*common.BoolEntity, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Complete not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Update(context.Context, *SimpleTask) (*SimpleTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Error(context.Context, *ErrorTask) (*ErrorTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Error not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Get(context.Context, *SimpleTask) (*SimpleTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedSimpleTaskCenterServiceServer) Reset(context.Context, *ErrorTask) (*SimpleTask, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Reset not implemented")
}

func RegisterSimpleTaskCenterServiceServer(s *grpc.Server, srv SimpleTaskCenterServiceServer) {
	s.RegisterService(&_SimpleTaskCenterService_serviceDesc, srv)
}

func _SimpleTaskCenterService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SimpleTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Create(ctx, req.(*SimpleTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Fetch_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FetchRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Fetch(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Fetch",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Fetch(ctx, req.(*FetchRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Complete_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SimpleTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Complete(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Complete",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Complete(ctx, req.(*SimpleTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SimpleTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Update(ctx, req.(*SimpleTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Error_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ErrorTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Error(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Error",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Error(ctx, req.(*ErrorTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SimpleTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Get(ctx, req.(*SimpleTask))
	}
	return interceptor(ctx, in, info, handler)
}

func _SimpleTaskCenterService_Reset_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ErrorTask)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(SimpleTaskCenterServiceServer).Reset(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.SimpleTaskCenterService/Reset",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(SimpleTaskCenterServiceServer).Reset(ctx, req.(*ErrorTask))
	}
	return interceptor(ctx, in, info, handler)
}

var _SimpleTaskCenterService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.SimpleTaskCenterService",
	HandlerType: (*SimpleTaskCenterServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "create",
			Handler:    _SimpleTaskCenterService_Create_Handler,
		},
		{
			MethodName: "fetch",
			Handler:    _SimpleTaskCenterService_Fetch_Handler,
		},
		{
			MethodName: "complete",
			Handler:    _SimpleTaskCenterService_Complete_Handler,
		},
		{
			MethodName: "update",
			Handler:    _SimpleTaskCenterService_Update_Handler,
		},
		{
			MethodName: "error",
			Handler:    _SimpleTaskCenterService_Error_Handler,
		},
		{
			MethodName: "get",
			Handler:    _SimpleTaskCenterService_Get_Handler,
		},
		{
			MethodName: "reset",
			Handler:    _SimpleTaskCenterService_Reset_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "task/task.proto",
}
