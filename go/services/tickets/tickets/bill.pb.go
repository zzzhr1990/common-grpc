// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.24.0
// 	protoc        v3.11.4
// source: tickets/bill.proto

package tickets

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

type Ticket struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity          int64  `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity      int64  `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	ReplyUserIdentity int64  `protobuf:"varint,4,opt,name=reply_user_identity,json=replyUserIdentity,proto3" json:"reply_user_identity,omitempty"`
	Type              int32  `protobuf:"varint,5,opt,name=type,proto3" json:"type,omitempty"`
	Status            int32  `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	CreateTime        int64  `protobuf:"varint,7,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	RefreshTime       int64  `protobuf:"varint,8,opt,name=refresh_time,json=refreshTime,proto3" json:"refresh_time,omitempty"`
	Message           string `protobuf:"bytes,9,opt,name=message,proto3" json:"message,omitempty"`
	Images            string `protobuf:"bytes,10,opt,name=images,proto3" json:"images,omitempty"`
}

func (x *Ticket) Reset() {
	*x = Ticket{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Ticket) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Ticket) ProtoMessage() {}

func (x *Ticket) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Ticket.ProtoReflect.Descriptor instead.
func (*Ticket) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{0}
}

func (x *Ticket) GetIdentity() int64 {
	if x != nil {
		return x.Identity
	}
	return 0
}

func (x *Ticket) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *Ticket) GetReplyUserIdentity() int64 {
	if x != nil {
		return x.ReplyUserIdentity
	}
	return 0
}

func (x *Ticket) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *Ticket) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *Ticket) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *Ticket) GetRefreshTime() int64 {
	if x != nil {
		return x.RefreshTime
	}
	return 0
}

func (x *Ticket) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *Ticket) GetImages() string {
	if x != nil {
		return x.Images
	}
	return ""
}

type Reply struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity       int64  `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	UserIdentity   int64  `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	TicketIdentity int64  `protobuf:"varint,4,opt,name=ticket_identity,json=ticketIdentity,proto3" json:"ticket_identity,omitempty"`
	Type           int32  `protobuf:"varint,5,opt,name=type,proto3" json:"type,omitempty"`
	Status         int32  `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	CreateTime     int64  `protobuf:"varint,7,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	RefreshTime    int64  `protobuf:"varint,8,opt,name=refresh_time,json=refreshTime,proto3" json:"refresh_time,omitempty"`
	Message        string `protobuf:"bytes,9,opt,name=message,proto3" json:"message,omitempty"`
	Images         string `protobuf:"bytes,10,opt,name=images,proto3" json:"images,omitempty"`
}

func (x *Reply) Reset() {
	*x = Reply{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *Reply) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*Reply) ProtoMessage() {}

func (x *Reply) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use Reply.ProtoReflect.Descriptor instead.
func (*Reply) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{1}
}

func (x *Reply) GetIdentity() int64 {
	if x != nil {
		return x.Identity
	}
	return 0
}

func (x *Reply) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *Reply) GetTicketIdentity() int64 {
	if x != nil {
		return x.TicketIdentity
	}
	return 0
}

func (x *Reply) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *Reply) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *Reply) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *Reply) GetRefreshTime() int64 {
	if x != nil {
		return x.RefreshTime
	}
	return 0
}

func (x *Reply) GetMessage() string {
	if x != nil {
		return x.Message
	}
	return ""
}

func (x *Reply) GetImages() string {
	if x != nil {
		return x.Images
	}
	return ""
}

type TicketListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// string identity = 1;
	UserIdentity int64 `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	// string path = 3;
	ListInfo *common.ListInfo         `protobuf:"bytes,4,opt,name=list_info,json=listInfo,proto3" json:"list_info,omitempty"`
	OrderBy  []*common.OrderByRequest `protobuf:"bytes,5,rep,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"` // OrderFilterRequest filter = 6;
}

func (x *TicketListRequest) Reset() {
	*x = TicketListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TicketListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TicketListRequest) ProtoMessage() {}

func (x *TicketListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TicketListRequest.ProtoReflect.Descriptor instead.
func (*TicketListRequest) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{2}
}

func (x *TicketListRequest) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *TicketListRequest) GetListInfo() *common.ListInfo {
	if x != nil {
		return x.ListInfo
	}
	return nil
}

func (x *TicketListRequest) GetOrderBy() []*common.OrderByRequest {
	if x != nil {
		return x.OrderBy
	}
	return nil
}

type ReplyListRequest struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	// string identity = 1;
	UserIdentity int64 `protobuf:"varint,2,opt,name=user_identity,json=userIdentity,proto3" json:"user_identity,omitempty"`
	// string path = 3;
	ListInfo *common.ListInfo         `protobuf:"bytes,4,opt,name=list_info,json=listInfo,proto3" json:"list_info,omitempty"`
	OrderBy  []*common.OrderByRequest `protobuf:"bytes,5,rep,name=order_by,json=orderBy,proto3" json:"order_by,omitempty"` // OrderFilterRequest filter = 6;
}

func (x *ReplyListRequest) Reset() {
	*x = ReplyListRequest{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReplyListRequest) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReplyListRequest) ProtoMessage() {}

func (x *ReplyListRequest) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReplyListRequest.ProtoReflect.Descriptor instead.
func (*ReplyListRequest) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{3}
}

func (x *ReplyListRequest) GetUserIdentity() int64 {
	if x != nil {
		return x.UserIdentity
	}
	return 0
}

func (x *ReplyListRequest) GetListInfo() *common.ListInfo {
	if x != nil {
		return x.ListInfo
	}
	return nil
}

func (x *ReplyListRequest) GetOrderBy() []*common.OrderByRequest {
	if x != nil {
		return x.OrderBy
	}
	return nil
}

//
//message OrderFilterRequest {
//string identity = 1;
//int64 plan_type = 2;
//string path = 3;
//}
type TicketListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*Ticket `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *TicketListResponse) Reset() {
	*x = TicketListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *TicketListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*TicketListResponse) ProtoMessage() {}

func (x *TicketListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use TicketListResponse.ProtoReflect.Descriptor instead.
func (*TicketListResponse) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{4}
}

func (x *TicketListResponse) GetData() []*Ticket {
	if x != nil {
		return x.Data
	}
	return nil
}

type ReplyListResponse struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Ticket *Ticket  `protobuf:"bytes,1,opt,name=Ticket,proto3" json:"Ticket,omitempty"`
	Data   []*Reply `protobuf:"bytes,2,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *ReplyListResponse) Reset() {
	*x = ReplyListResponse{}
	if protoimpl.UnsafeEnabled {
		mi := &file_tickets_bill_proto_msgTypes[5]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ReplyListResponse) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ReplyListResponse) ProtoMessage() {}

func (x *ReplyListResponse) ProtoReflect() protoreflect.Message {
	mi := &file_tickets_bill_proto_msgTypes[5]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ReplyListResponse.ProtoReflect.Descriptor instead.
func (*ReplyListResponse) Descriptor() ([]byte, []int) {
	return file_tickets_bill_proto_rawDescGZIP(), []int{5}
}

func (x *ReplyListResponse) GetTicket() *Ticket {
	if x != nil {
		return x.Ticket
	}
	return nil
}

func (x *ReplyListResponse) GetData() []*Reply {
	if x != nil {
		return x.Data
	}
	return nil
}

var File_tickets_bill_proto protoreflect.FileDescriptor

var file_tickets_bill_proto_rawDesc = []byte{
	0x0a, 0x12, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x73, 0x2f, 0x62, 0x69, 0x6c, 0x6c, 0x2e, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x1a, 0x1a,
	0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x5f, 0x65, 0x6e,
	0x74, 0x69, 0x74, 0x79, 0x2e, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x22, 0x9b, 0x02, 0x0a, 0x06, 0x54,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74,
	0x79, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69,
	0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x2e, 0x0a, 0x13, 0x72, 0x65, 0x70, 0x6c, 0x79, 0x5f,
	0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x04, 0x20,
	0x01, 0x28, 0x03, 0x52, 0x11, 0x72, 0x65, 0x70, 0x6c, 0x79, 0x55, 0x73, 0x65, 0x72, 0x49, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x05,
	0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74,
	0x61, 0x74, 0x75, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54,
	0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x5f, 0x74,
	0x69, 0x6d, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x72, 0x65, 0x66, 0x72, 0x65,
	0x73, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67,
	0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x06, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x22, 0x93, 0x02, 0x0a, 0x05, 0x52, 0x65, 0x70,
	0x6c, 0x79, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x23,
	0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18,
	0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65, 0x72, 0x49, 0x64, 0x65, 0x6e, 0x74,
	0x69, 0x74, 0x79, 0x12, 0x27, 0x0a, 0x0f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x5f, 0x69, 0x64,
	0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0e, 0x74, 0x69,
	0x63, 0x6b, 0x65, 0x74, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x12, 0x0a, 0x04,
	0x74, 0x79, 0x70, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x18, 0x06, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61,
	0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63,
	0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x66,
	0x72, 0x65, 0x73, 0x68, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x0b, 0x72, 0x65, 0x66, 0x72, 0x65, 0x73, 0x68, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07,
	0x6d, 0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x6d,
	0x65, 0x73, 0x73, 0x61, 0x67, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73,
	0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x06, 0x69, 0x6d, 0x61, 0x67, 0x65, 0x73, 0x22, 0x9e,
	0x01, 0x0a, 0x11, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x2f, 0x0a, 0x09, 0x6c, 0x69, 0x73,
	0x74, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x08, 0x6c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x33, 0x0a, 0x08, 0x6f, 0x72,
	0x64, 0x65, 0x72, 0x5f, 0x62, 0x79, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x07, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x22,
	0x9d, 0x01, 0x0a, 0x10, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71,
	0x75, 0x65, 0x73, 0x74, 0x12, 0x23, 0x0a, 0x0d, 0x75, 0x73, 0x65, 0x72, 0x5f, 0x69, 0x64, 0x65,
	0x6e, 0x74, 0x69, 0x74, 0x79, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0c, 0x75, 0x73, 0x65,
	0x72, 0x49, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79, 0x12, 0x2f, 0x0a, 0x09, 0x6c, 0x69, 0x73,
	0x74, 0x5f, 0x69, 0x6e, 0x66, 0x6f, 0x18, 0x04, 0x20, 0x01, 0x28, 0x0b, 0x32, 0x12, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f,
	0x52, 0x08, 0x6c, 0x69, 0x73, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x33, 0x0a, 0x08, 0x6f, 0x72,
	0x64, 0x65, 0x72, 0x5f, 0x62, 0x79, 0x18, 0x05, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x18, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x52,
	0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x52, 0x07, 0x6f, 0x72, 0x64, 0x65, 0x72, 0x42, 0x79, 0x22,
	0x3a, 0x0a, 0x12, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x12, 0x24, 0x0a, 0x04, 0x64, 0x61, 0x74, 0x61, 0x18, 0x01, 0x20,
	0x03, 0x28, 0x0b, 0x32, 0x10, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0x62, 0x0a, 0x11, 0x52,
	0x65, 0x70, 0x6c, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65,
	0x12, 0x28, 0x0a, 0x06, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x18, 0x01, 0x20, 0x01, 0x28, 0x0b,
	0x32, 0x10, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b,
	0x65, 0x74, 0x52, 0x06, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x23, 0x0a, 0x04, 0x64, 0x61,
	0x74, 0x61, 0x18, 0x02, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x0f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x52, 0x04, 0x64, 0x61, 0x74, 0x61, 0x32,
	0x8c, 0x03, 0x0a, 0x0e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x73, 0x53, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x12, 0x2e, 0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x10, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x1a, 0x10,
	0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74,
	0x22, 0x00, 0x12, 0x43, 0x0a, 0x04, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x1b, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74,
	0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x1a, 0x1c, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63,
	0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73,
	0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12, 0x46, 0x0a, 0x09, 0x4c, 0x69, 0x73, 0x74, 0x52,
	0x65, 0x70, 0x6c, 0x79, 0x12, 0x1a, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e,
	0x52, 0x65, 0x70, 0x6c, 0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x1a, 0x1b, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c,
	0x79, 0x4c, 0x69, 0x73, 0x74, 0x52, 0x65, 0x73, 0x70, 0x6f, 0x6e, 0x73, 0x65, 0x22, 0x00, 0x12,
	0x2b, 0x0a, 0x03, 0x47, 0x65, 0x74, 0x12, 0x10, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65,
	0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x1a, 0x10, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x00, 0x12, 0x2e, 0x0a, 0x08,
	0x47, 0x65, 0x74, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x12, 0x0f, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x1a, 0x0f, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12, 0x31, 0x0a, 0x0b,
	0x52, 0x65, 0x70, 0x6c, 0x79, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x12, 0x0f, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x1a, 0x0f, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x52, 0x65, 0x70, 0x6c, 0x79, 0x22, 0x00, 0x12,
	0x2d, 0x0a, 0x05, 0x43, 0x6c, 0x6f, 0x73, 0x65, 0x12, 0x10, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x1a, 0x10, 0x2e, 0x73, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x54, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x22, 0x00, 0x42, 0x3e,
	0x5a, 0x3c, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a,
	0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72,
	0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f, 0x74,
	0x69, 0x63, 0x6b, 0x65, 0x74, 0x73, 0x2f, 0x74, 0x69, 0x63, 0x6b, 0x65, 0x74, 0x73, 0x62, 0x06,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_tickets_bill_proto_rawDescOnce sync.Once
	file_tickets_bill_proto_rawDescData = file_tickets_bill_proto_rawDesc
)

func file_tickets_bill_proto_rawDescGZIP() []byte {
	file_tickets_bill_proto_rawDescOnce.Do(func() {
		file_tickets_bill_proto_rawDescData = protoimpl.X.CompressGZIP(file_tickets_bill_proto_rawDescData)
	})
	return file_tickets_bill_proto_rawDescData
}

var file_tickets_bill_proto_msgTypes = make([]protoimpl.MessageInfo, 6)
var file_tickets_bill_proto_goTypes = []interface{}{
	(*Ticket)(nil),                // 0: services.Ticket
	(*Reply)(nil),                 // 1: services.Reply
	(*TicketListRequest)(nil),     // 2: services.TicketListRequest
	(*ReplyListRequest)(nil),      // 3: services.ReplyListRequest
	(*TicketListResponse)(nil),    // 4: services.TicketListResponse
	(*ReplyListResponse)(nil),     // 5: services.ReplyListResponse
	(*common.ListInfo)(nil),       // 6: services.ListInfo
	(*common.OrderByRequest)(nil), // 7: services.OrderByRequest
}
var file_tickets_bill_proto_depIdxs = []int32{
	6,  // 0: services.TicketListRequest.list_info:type_name -> services.ListInfo
	7,  // 1: services.TicketListRequest.order_by:type_name -> services.OrderByRequest
	6,  // 2: services.ReplyListRequest.list_info:type_name -> services.ListInfo
	7,  // 3: services.ReplyListRequest.order_by:type_name -> services.OrderByRequest
	0,  // 4: services.TicketListResponse.data:type_name -> services.Ticket
	0,  // 5: services.ReplyListResponse.Ticket:type_name -> services.Ticket
	1,  // 6: services.ReplyListResponse.data:type_name -> services.Reply
	0,  // 7: services.TicketsService.Create:input_type -> services.Ticket
	2,  // 8: services.TicketsService.List:input_type -> services.TicketListRequest
	3,  // 9: services.TicketsService.ListReply:input_type -> services.ReplyListRequest
	0,  // 10: services.TicketsService.Get:input_type -> services.Ticket
	1,  // 11: services.TicketsService.GetReply:input_type -> services.Reply
	1,  // 12: services.TicketsService.ReplyTicket:input_type -> services.Reply
	0,  // 13: services.TicketsService.Close:input_type -> services.Ticket
	0,  // 14: services.TicketsService.Create:output_type -> services.Ticket
	4,  // 15: services.TicketsService.List:output_type -> services.TicketListResponse
	5,  // 16: services.TicketsService.ListReply:output_type -> services.ReplyListResponse
	0,  // 17: services.TicketsService.Get:output_type -> services.Ticket
	1,  // 18: services.TicketsService.GetReply:output_type -> services.Reply
	1,  // 19: services.TicketsService.ReplyTicket:output_type -> services.Reply
	0,  // 20: services.TicketsService.Close:output_type -> services.Ticket
	14, // [14:21] is the sub-list for method output_type
	7,  // [7:14] is the sub-list for method input_type
	7,  // [7:7] is the sub-list for extension type_name
	7,  // [7:7] is the sub-list for extension extendee
	0,  // [0:7] is the sub-list for field type_name
}

func init() { file_tickets_bill_proto_init() }
func file_tickets_bill_proto_init() {
	if File_tickets_bill_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_tickets_bill_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Ticket); i {
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
		file_tickets_bill_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*Reply); i {
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
		file_tickets_bill_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TicketListRequest); i {
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
		file_tickets_bill_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReplyListRequest); i {
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
		file_tickets_bill_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*TicketListResponse); i {
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
		file_tickets_bill_proto_msgTypes[5].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ReplyListResponse); i {
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
			RawDescriptor: file_tickets_bill_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   6,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_tickets_bill_proto_goTypes,
		DependencyIndexes: file_tickets_bill_proto_depIdxs,
		MessageInfos:      file_tickets_bill_proto_msgTypes,
	}.Build()
	File_tickets_bill_proto = out.File
	file_tickets_bill_proto_rawDesc = nil
	file_tickets_bill_proto_goTypes = nil
	file_tickets_bill_proto_depIdxs = nil
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConnInterface

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion6

// TicketsServiceClient is the client API for TicketsService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type TicketsServiceClient interface {
	// Create bill（仅后台使用）
	Create(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	List(ctx context.Context, in *TicketListRequest, opts ...grpc.CallOption) (*TicketListResponse, error)
	ListReply(ctx context.Context, in *ReplyListRequest, opts ...grpc.CallOption) (*ReplyListResponse, error)
	Get(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
	GetReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error)
	ReplyTicket(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error)
	Close(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error)
}

type ticketsServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewTicketsServiceClient(cc grpc.ClientConnInterface) TicketsServiceClient {
	return &ticketsServiceClient{cc}
}

func (c *ticketsServiceClient) Create(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) List(ctx context.Context, in *TicketListRequest, opts ...grpc.CallOption) (*TicketListResponse, error) {
	out := new(TicketListResponse)
	err := c.cc.Invoke(ctx, "/services.TicketsService/List", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) ListReply(ctx context.Context, in *ReplyListRequest, opts ...grpc.CallOption) (*ReplyListResponse, error) {
	out := new(ReplyListResponse)
	err := c.cc.Invoke(ctx, "/services.TicketsService/ListReply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) Get(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) GetReply(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error) {
	out := new(Reply)
	err := c.cc.Invoke(ctx, "/services.TicketsService/GetReply", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) ReplyTicket(ctx context.Context, in *Reply, opts ...grpc.CallOption) (*Reply, error) {
	out := new(Reply)
	err := c.cc.Invoke(ctx, "/services.TicketsService/ReplyTicket", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *ticketsServiceClient) Close(ctx context.Context, in *Ticket, opts ...grpc.CallOption) (*Ticket, error) {
	out := new(Ticket)
	err := c.cc.Invoke(ctx, "/services.TicketsService/Close", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// TicketsServiceServer is the server API for TicketsService service.
type TicketsServiceServer interface {
	// Create bill（仅后台使用）
	Create(context.Context, *Ticket) (*Ticket, error)
	List(context.Context, *TicketListRequest) (*TicketListResponse, error)
	ListReply(context.Context, *ReplyListRequest) (*ReplyListResponse, error)
	Get(context.Context, *Ticket) (*Ticket, error)
	GetReply(context.Context, *Reply) (*Reply, error)
	ReplyTicket(context.Context, *Reply) (*Reply, error)
	Close(context.Context, *Ticket) (*Ticket, error)
}

// UnimplementedTicketsServiceServer can be embedded to have forward compatible implementations.
type UnimplementedTicketsServiceServer struct {
}

func (*UnimplementedTicketsServiceServer) Create(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (*UnimplementedTicketsServiceServer) List(context.Context, *TicketListRequest) (*TicketListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method List not implemented")
}
func (*UnimplementedTicketsServiceServer) ListReply(context.Context, *ReplyListRequest) (*ReplyListResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListReply not implemented")
}
func (*UnimplementedTicketsServiceServer) Get(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (*UnimplementedTicketsServiceServer) GetReply(context.Context, *Reply) (*Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetReply not implemented")
}
func (*UnimplementedTicketsServiceServer) ReplyTicket(context.Context, *Reply) (*Reply, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ReplyTicket not implemented")
}
func (*UnimplementedTicketsServiceServer) Close(context.Context, *Ticket) (*Ticket, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Close not implemented")
}

func RegisterTicketsServiceServer(s *grpc.Server, srv TicketsServiceServer) {
	s.RegisterService(&_TicketsService_serviceDesc, srv)
}

func _TicketsService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Create(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_List_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(TicketListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).List(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/List",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).List(ctx, req.(*TicketListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_ListReply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ReplyListRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).ListReply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/ListReply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).ListReply(ctx, req.(*ReplyListRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Get(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_GetReply_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Reply)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).GetReply(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/GetReply",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).GetReply(ctx, req.(*Reply))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_ReplyTicket_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Reply)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).ReplyTicket(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/ReplyTicket",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).ReplyTicket(ctx, req.(*Reply))
	}
	return interceptor(ctx, in, info, handler)
}

func _TicketsService_Close_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(Ticket)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(TicketsServiceServer).Close(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.TicketsService/Close",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(TicketsServiceServer).Close(ctx, req.(*Ticket))
	}
	return interceptor(ctx, in, info, handler)
}

var _TicketsService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.TicketsService",
	HandlerType: (*TicketsServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _TicketsService_Create_Handler,
		},
		{
			MethodName: "List",
			Handler:    _TicketsService_List_Handler,
		},
		{
			MethodName: "ListReply",
			Handler:    _TicketsService_ListReply_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _TicketsService_Get_Handler,
		},
		{
			MethodName: "GetReply",
			Handler:    _TicketsService_GetReply_Handler,
		},
		{
			MethodName: "ReplyTicket",
			Handler:    _TicketsService_ReplyTicket_Handler,
		},
		{
			MethodName: "Close",
			Handler:    _TicketsService_Close_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "tickets/bill.proto",
}
