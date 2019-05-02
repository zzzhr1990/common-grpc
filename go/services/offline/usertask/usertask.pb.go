// Code generated by protoc-gen-go. DO NOT EDIT.
// source: offline/usertask.proto

package usertask

import (
	context "context"
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type AddUserOfflineTaskRequest struct {
	Url                  string   `protobuf:"bytes,1,opt,name=url,proto3" json:"url,omitempty"`
	User                 int64    `protobuf:"varint,2,opt,name=user,proto3" json:"user,omitempty"`
	Password             string   `protobuf:"bytes,3,opt,name=password,proto3" json:"password,omitempty"`
	Path                 string   `protobuf:"bytes,4,opt,name=path,proto3" json:"path,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *AddUserOfflineTaskRequest) Reset()         { *m = AddUserOfflineTaskRequest{} }
func (m *AddUserOfflineTaskRequest) String() string { return proto.CompactTextString(m) }
func (*AddUserOfflineTaskRequest) ProtoMessage()    {}
func (*AddUserOfflineTaskRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{0}
}

func (m *AddUserOfflineTaskRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_AddUserOfflineTaskRequest.Unmarshal(m, b)
}
func (m *AddUserOfflineTaskRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_AddUserOfflineTaskRequest.Marshal(b, m, deterministic)
}
func (m *AddUserOfflineTaskRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_AddUserOfflineTaskRequest.Merge(m, src)
}
func (m *AddUserOfflineTaskRequest) XXX_Size() int {
	return xxx_messageInfo_AddUserOfflineTaskRequest.Size(m)
}
func (m *AddUserOfflineTaskRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_AddUserOfflineTaskRequest.DiscardUnknown(m)
}

var xxx_messageInfo_AddUserOfflineTaskRequest proto.InternalMessageInfo

func (m *AddUserOfflineTaskRequest) GetUrl() string {
	if m != nil {
		return m.Url
	}
	return ""
}

func (m *AddUserOfflineTaskRequest) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *AddUserOfflineTaskRequest) GetPassword() string {
	if m != nil {
		return m.Password
	}
	return ""
}

func (m *AddUserOfflineTaskRequest) GetPath() string {
	if m != nil {
		return m.Path
	}
	return ""
}

type UserOfflineTask struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	User                 int64    `protobuf:"varint,2,opt,name=user,proto3" json:"user,omitempty"`
	CreateTime           int64    `protobuf:"varint,3,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Name                 string   `protobuf:"bytes,4,opt,name=name,proto3" json:"name,omitempty"`
	Type                 int32    `protobuf:"varint,5,opt,name=type,proto3" json:"type,omitempty"`
	Status               int32    `protobuf:"varint,6,opt,name=status,proto3" json:"status,omitempty"`
	Size                 int64    `protobuf:"varint,7,opt,name=size,proto3" json:"size,omitempty"`
	DownloadSize         int64    `protobuf:"varint,8,opt,name=downloadSize,proto3" json:"downloadSize,omitempty"`
	Progress             int32    `protobuf:"varint,9,opt,name=progress,proto3" json:"progress,omitempty"`
	Cip                  string   `protobuf:"bytes,10,opt,name=cip,proto3" json:"cip,omitempty"`
	Data                 string   `protobuf:"bytes,11,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserOfflineTask) Reset()         { *m = UserOfflineTask{} }
func (m *UserOfflineTask) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTask) ProtoMessage()    {}
func (*UserOfflineTask) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{1}
}

func (m *UserOfflineTask) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTask.Unmarshal(m, b)
}
func (m *UserOfflineTask) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTask.Marshal(b, m, deterministic)
}
func (m *UserOfflineTask) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTask.Merge(m, src)
}
func (m *UserOfflineTask) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTask.Size(m)
}
func (m *UserOfflineTask) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTask.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTask proto.InternalMessageInfo

func (m *UserOfflineTask) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UserOfflineTask) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *UserOfflineTask) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *UserOfflineTask) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserOfflineTask) GetType() int32 {
	if m != nil {
		return m.Type
	}
	return 0
}

func (m *UserOfflineTask) GetStatus() int32 {
	if m != nil {
		return m.Status
	}
	return 0
}

func (m *UserOfflineTask) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UserOfflineTask) GetDownloadSize() int64 {
	if m != nil {
		return m.DownloadSize
	}
	return 0
}

func (m *UserOfflineTask) GetProgress() int32 {
	if m != nil {
		return m.Progress
	}
	return 0
}

func (m *UserOfflineTask) GetCip() string {
	if m != nil {
		return m.Cip
	}
	return ""
}

func (m *UserOfflineTask) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

type UserOfflineTaskFile struct {
	Identity             string   `protobuf:"bytes,1,opt,name=identity,proto3" json:"identity,omitempty"`
	Name                 string   `protobuf:"bytes,2,opt,name=name,proto3" json:"name,omitempty"`
	Size                 int64    `protobuf:"varint,3,opt,name=size,proto3" json:"size,omitempty"`
	Order                int32    `protobuf:"varint,4,opt,name=order,proto3" json:"order,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserOfflineTaskFile) Reset()         { *m = UserOfflineTaskFile{} }
func (m *UserOfflineTaskFile) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTaskFile) ProtoMessage()    {}
func (*UserOfflineTaskFile) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{2}
}

func (m *UserOfflineTaskFile) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTaskFile.Unmarshal(m, b)
}
func (m *UserOfflineTaskFile) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTaskFile.Marshal(b, m, deterministic)
}
func (m *UserOfflineTaskFile) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTaskFile.Merge(m, src)
}
func (m *UserOfflineTaskFile) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTaskFile.Size(m)
}
func (m *UserOfflineTaskFile) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTaskFile.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTaskFile proto.InternalMessageInfo

func (m *UserOfflineTaskFile) GetIdentity() string {
	if m != nil {
		return m.Identity
	}
	return ""
}

func (m *UserOfflineTaskFile) GetName() string {
	if m != nil {
		return m.Name
	}
	return ""
}

func (m *UserOfflineTaskFile) GetSize() int64 {
	if m != nil {
		return m.Size
	}
	return 0
}

func (m *UserOfflineTaskFile) GetOrder() int32 {
	if m != nil {
		return m.Order
	}
	return 0
}

type UserOfflineTaskResponse struct {
	Success              bool                   `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	Count                int32                  `protobuf:"varint,2,opt,name=count,proto3" json:"count,omitempty"`
	Files                []*UserOfflineTaskFile `protobuf:"bytes,3,rep,name=files,proto3" json:"files,omitempty"`
	XXX_NoUnkeyedLiteral struct{}               `json:"-"`
	XXX_unrecognized     []byte                 `json:"-"`
	XXX_sizecache        int32                  `json:"-"`
}

func (m *UserOfflineTaskResponse) Reset()         { *m = UserOfflineTaskResponse{} }
func (m *UserOfflineTaskResponse) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTaskResponse) ProtoMessage()    {}
func (*UserOfflineTaskResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{3}
}

func (m *UserOfflineTaskResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTaskResponse.Unmarshal(m, b)
}
func (m *UserOfflineTaskResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTaskResponse.Marshal(b, m, deterministic)
}
func (m *UserOfflineTaskResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTaskResponse.Merge(m, src)
}
func (m *UserOfflineTaskResponse) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTaskResponse.Size(m)
}
func (m *UserOfflineTaskResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTaskResponse.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTaskResponse proto.InternalMessageInfo

func (m *UserOfflineTaskResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

func (m *UserOfflineTaskResponse) GetCount() int32 {
	if m != nil {
		return m.Count
	}
	return 0
}

func (m *UserOfflineTaskResponse) GetFiles() []*UserOfflineTaskFile {
	if m != nil {
		return m.Files
	}
	return nil
}

type UserTaskListener struct {
	TaskIdentity         string   `protobuf:"bytes,1,opt,name=taskIdentity,proto3" json:"taskIdentity,omitempty"`
	User                 int64    `protobuf:"varint,3,opt,name=user,proto3" json:"user,omitempty"`
	CreateTime           int64    `protobuf:"varint,4,opt,name=createTime,proto3" json:"createTime,omitempty"`
	Deadline             int64    `protobuf:"varint,5,opt,name=deadline,proto3" json:"deadline,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *UserTaskListener) Reset()         { *m = UserTaskListener{} }
func (m *UserTaskListener) String() string { return proto.CompactTextString(m) }
func (*UserTaskListener) ProtoMessage()    {}
func (*UserTaskListener) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{4}
}

func (m *UserTaskListener) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserTaskListener.Unmarshal(m, b)
}
func (m *UserTaskListener) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserTaskListener.Marshal(b, m, deterministic)
}
func (m *UserTaskListener) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserTaskListener.Merge(m, src)
}
func (m *UserTaskListener) XXX_Size() int {
	return xxx_messageInfo_UserTaskListener.Size(m)
}
func (m *UserTaskListener) XXX_DiscardUnknown() {
	xxx_messageInfo_UserTaskListener.DiscardUnknown(m)
}

var xxx_messageInfo_UserTaskListener proto.InternalMessageInfo

func (m *UserTaskListener) GetTaskIdentity() string {
	if m != nil {
		return m.TaskIdentity
	}
	return ""
}

func (m *UserTaskListener) GetUser() int64 {
	if m != nil {
		return m.User
	}
	return 0
}

func (m *UserTaskListener) GetCreateTime() int64 {
	if m != nil {
		return m.CreateTime
	}
	return 0
}

func (m *UserTaskListener) GetDeadline() int64 {
	if m != nil {
		return m.Deadline
	}
	return 0
}

type PageUserOfflineTaskRequest struct {
	UserIdentity         int64    `protobuf:"varint,1,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	OrderBy              int32    `protobuf:"varint,2,opt,name=orderBy,proto3" json:"orderBy,omitempty"`
	Page                 int32    `protobuf:"varint,3,opt,name=page,proto3" json:"page,omitempty"`
	PageSize             int32    `protobuf:"varint,4,opt,name=pageSize,proto3" json:"pageSize,omitempty"`
	Filter               int32    `protobuf:"varint,5,opt,name=filter,proto3" json:"filter,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *PageUserOfflineTaskRequest) Reset()         { *m = PageUserOfflineTaskRequest{} }
func (m *PageUserOfflineTaskRequest) String() string { return proto.CompactTextString(m) }
func (*PageUserOfflineTaskRequest) ProtoMessage()    {}
func (*PageUserOfflineTaskRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{5}
}

func (m *PageUserOfflineTaskRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_PageUserOfflineTaskRequest.Unmarshal(m, b)
}
func (m *PageUserOfflineTaskRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_PageUserOfflineTaskRequest.Marshal(b, m, deterministic)
}
func (m *PageUserOfflineTaskRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_PageUserOfflineTaskRequest.Merge(m, src)
}
func (m *PageUserOfflineTaskRequest) XXX_Size() int {
	return xxx_messageInfo_PageUserOfflineTaskRequest.Size(m)
}
func (m *PageUserOfflineTaskRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_PageUserOfflineTaskRequest.DiscardUnknown(m)
}

var xxx_messageInfo_PageUserOfflineTaskRequest proto.InternalMessageInfo

func (m *PageUserOfflineTaskRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *PageUserOfflineTaskRequest) GetOrderBy() int32 {
	if m != nil {
		return m.OrderBy
	}
	return 0
}

func (m *PageUserOfflineTaskRequest) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *PageUserOfflineTaskRequest) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

func (m *PageUserOfflineTaskRequest) GetFilter() int32 {
	if m != nil {
		return m.Filter
	}
	return 0
}

type ListUserOfflineTaskRequest struct {
	UserIdentity         int64    `protobuf:"varint,1,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	OrderBy              int32    `protobuf:"varint,2,opt,name=orderBy,proto3" json:"orderBy,omitempty"`
	Filter               int32    `protobuf:"varint,3,opt,name=filter,proto3" json:"filter,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *ListUserOfflineTaskRequest) Reset()         { *m = ListUserOfflineTaskRequest{} }
func (m *ListUserOfflineTaskRequest) String() string { return proto.CompactTextString(m) }
func (*ListUserOfflineTaskRequest) ProtoMessage()    {}
func (*ListUserOfflineTaskRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{6}
}

func (m *ListUserOfflineTaskRequest) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_ListUserOfflineTaskRequest.Unmarshal(m, b)
}
func (m *ListUserOfflineTaskRequest) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_ListUserOfflineTaskRequest.Marshal(b, m, deterministic)
}
func (m *ListUserOfflineTaskRequest) XXX_Merge(src proto.Message) {
	xxx_messageInfo_ListUserOfflineTaskRequest.Merge(m, src)
}
func (m *ListUserOfflineTaskRequest) XXX_Size() int {
	return xxx_messageInfo_ListUserOfflineTaskRequest.Size(m)
}
func (m *ListUserOfflineTaskRequest) XXX_DiscardUnknown() {
	xxx_messageInfo_ListUserOfflineTaskRequest.DiscardUnknown(m)
}

var xxx_messageInfo_ListUserOfflineTaskRequest proto.InternalMessageInfo

func (m *ListUserOfflineTaskRequest) GetUserIdentity() int64 {
	if m != nil {
		return m.UserIdentity
	}
	return 0
}

func (m *ListUserOfflineTaskRequest) GetOrderBy() int32 {
	if m != nil {
		return m.OrderBy
	}
	return 0
}

func (m *ListUserOfflineTaskRequest) GetFilter() int32 {
	if m != nil {
		return m.Filter
	}
	return 0
}

type UserOfflineTaskPage struct {
	List                 []*UserOfflineTask `protobuf:"bytes,1,rep,name=list,proto3" json:"list,omitempty"`
	TotalCount           int64              `protobuf:"varint,2,opt,name=totalCount,proto3" json:"totalCount,omitempty"`
	TotalPage            int32              `protobuf:"varint,3,opt,name=totalPage,proto3" json:"totalPage,omitempty"`
	Page                 int32              `protobuf:"varint,4,opt,name=page,proto3" json:"page,omitempty"`
	PageSize             int32              `protobuf:"varint,5,opt,name=pageSize,proto3" json:"pageSize,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *UserOfflineTaskPage) Reset()         { *m = UserOfflineTaskPage{} }
func (m *UserOfflineTaskPage) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTaskPage) ProtoMessage()    {}
func (*UserOfflineTaskPage) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{7}
}

func (m *UserOfflineTaskPage) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTaskPage.Unmarshal(m, b)
}
func (m *UserOfflineTaskPage) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTaskPage.Marshal(b, m, deterministic)
}
func (m *UserOfflineTaskPage) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTaskPage.Merge(m, src)
}
func (m *UserOfflineTaskPage) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTaskPage.Size(m)
}
func (m *UserOfflineTaskPage) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTaskPage.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTaskPage proto.InternalMessageInfo

func (m *UserOfflineTaskPage) GetList() []*UserOfflineTask {
	if m != nil {
		return m.List
	}
	return nil
}

func (m *UserOfflineTaskPage) GetTotalCount() int64 {
	if m != nil {
		return m.TotalCount
	}
	return 0
}

func (m *UserOfflineTaskPage) GetTotalPage() int32 {
	if m != nil {
		return m.TotalPage
	}
	return 0
}

func (m *UserOfflineTaskPage) GetPage() int32 {
	if m != nil {
		return m.Page
	}
	return 0
}

func (m *UserOfflineTaskPage) GetPageSize() int32 {
	if m != nil {
		return m.PageSize
	}
	return 0
}

type DeleteFilesRequest struct {
	UserIdentity         int64    `protobuf:"varint,1,opt,name=userIdentity,proto3" json:"userIdentity,omitempty"`
	TasksIdentity        []string `protobuf:"bytes,2,rep,name=tasksIdentity,proto3" json:"tasksIdentity,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *DeleteFilesRequest) Reset()         { *m = DeleteFilesRequest{} }
func (m *DeleteFilesRequest) String() string { return proto.CompactTextString(m) }
func (*DeleteFilesRequest) ProtoMessage()    {}
func (*DeleteFilesRequest) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{8}
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

func (m *DeleteFilesRequest) GetTasksIdentity() []string {
	if m != nil {
		return m.TasksIdentity
	}
	return nil
}

type UserOfflineTaskList struct {
	List                 []*UserOfflineTask `protobuf:"bytes,2,rep,name=list,proto3" json:"list,omitempty"`
	XXX_NoUnkeyedLiteral struct{}           `json:"-"`
	XXX_unrecognized     []byte             `json:"-"`
	XXX_sizecache        int32              `json:"-"`
}

func (m *UserOfflineTaskList) Reset()         { *m = UserOfflineTaskList{} }
func (m *UserOfflineTaskList) String() string { return proto.CompactTextString(m) }
func (*UserOfflineTaskList) ProtoMessage()    {}
func (*UserOfflineTaskList) Descriptor() ([]byte, []int) {
	return fileDescriptor_62462ed77fca2601, []int{9}
}

func (m *UserOfflineTaskList) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_UserOfflineTaskList.Unmarshal(m, b)
}
func (m *UserOfflineTaskList) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_UserOfflineTaskList.Marshal(b, m, deterministic)
}
func (m *UserOfflineTaskList) XXX_Merge(src proto.Message) {
	xxx_messageInfo_UserOfflineTaskList.Merge(m, src)
}
func (m *UserOfflineTaskList) XXX_Size() int {
	return xxx_messageInfo_UserOfflineTaskList.Size(m)
}
func (m *UserOfflineTaskList) XXX_DiscardUnknown() {
	xxx_messageInfo_UserOfflineTaskList.DiscardUnknown(m)
}

var xxx_messageInfo_UserOfflineTaskList proto.InternalMessageInfo

func (m *UserOfflineTaskList) GetList() []*UserOfflineTask {
	if m != nil {
		return m.List
	}
	return nil
}

func init() {
	proto.RegisterType((*AddUserOfflineTaskRequest)(nil), "services.AddUserOfflineTaskRequest")
	proto.RegisterType((*UserOfflineTask)(nil), "services.UserOfflineTask")
	proto.RegisterType((*UserOfflineTaskFile)(nil), "services.UserOfflineTaskFile")
	proto.RegisterType((*UserOfflineTaskResponse)(nil), "services.UserOfflineTaskResponse")
	proto.RegisterType((*UserTaskListener)(nil), "services.UserTaskListener")
	proto.RegisterType((*PageUserOfflineTaskRequest)(nil), "services.PageUserOfflineTaskRequest")
	proto.RegisterType((*ListUserOfflineTaskRequest)(nil), "services.ListUserOfflineTaskRequest")
	proto.RegisterType((*UserOfflineTaskPage)(nil), "services.UserOfflineTaskPage")
	proto.RegisterType((*DeleteFilesRequest)(nil), "services.DeleteFilesRequest")
	proto.RegisterType((*UserOfflineTaskList)(nil), "services.UserOfflineTaskList")
}

func init() { proto.RegisterFile("offline/usertask.proto", fileDescriptor_62462ed77fca2601) }

var fileDescriptor_62462ed77fca2601 = []byte{
	// 701 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xb4, 0x55, 0xcf, 0x4f, 0xdb, 0x4a,
	0x10, 0xc6, 0x71, 0x0c, 0xc9, 0xc0, 0xd3, 0x43, 0xcb, 0x13, 0xcf, 0x44, 0xef, 0x55, 0xa9, 0xcb,
	0x21, 0x17, 0x92, 0x16, 0x4e, 0x1c, 0xaa, 0xaa, 0x14, 0x55, 0xaa, 0x54, 0x09, 0xb4, 0xd0, 0x4b,
	0x55, 0x55, 0x32, 0xf6, 0x24, 0xac, 0x70, 0xbc, 0x66, 0x77, 0x53, 0x44, 0x0e, 0x3d, 0xf6, 0x9f,
	0xe8, 0xad, 0x52, 0xff, 0x81, 0xfe, 0x85, 0xd5, 0xac, 0x1d, 0x27, 0x26, 0xb8, 0x3f, 0x0e, 0xbd,
	0xcd, 0x7c, 0x9e, 0x9d, 0x6f, 0xe7, 0xdb, 0x6f, 0x12, 0xd8, 0x96, 0xc3, 0x61, 0x22, 0x52, 0x1c,
	0x4c, 0x34, 0x2a, 0x13, 0xea, 0xab, 0x7e, 0xa6, 0xa4, 0x91, 0xac, 0xa5, 0x51, 0x7d, 0x10, 0x11,
	0xea, 0xe0, 0x1a, 0x76, 0x9e, 0xc7, 0xf1, 0x1b, 0x8d, 0xea, 0x24, 0x2f, 0x3d, 0x0f, 0xf5, 0x15,
	0xc7, 0xeb, 0x09, 0x6a, 0xc3, 0x36, 0xc1, 0x9d, 0xa8, 0xc4, 0x77, 0xba, 0x4e, 0xaf, 0xcd, 0x29,
	0x64, 0x0c, 0x9a, 0xd4, 0xca, 0x6f, 0x74, 0x9d, 0x9e, 0xcb, 0x6d, 0xcc, 0x3a, 0xd0, 0xca, 0x42,
	0xad, 0x6f, 0xa4, 0x8a, 0x7d, 0xd7, 0x96, 0x96, 0x39, 0xd5, 0x67, 0xa1, 0xb9, 0xf4, 0x9b, 0x16,
	0xb7, 0x71, 0xf0, 0xb9, 0x01, 0x7f, 0xdf, 0x21, 0xa4, 0x1e, 0x22, 0xc6, 0xd4, 0x08, 0x73, 0x5b,
	0xd0, 0x95, 0xf9, 0xbd, 0x9c, 0x0f, 0x00, 0x22, 0x85, 0xa1, 0xc1, 0x73, 0x31, 0x46, 0xcb, 0xea,
	0xf2, 0x05, 0x84, 0xce, 0xa4, 0xe1, 0x18, 0x67, 0xbc, 0x14, 0x13, 0x66, 0x6e, 0x33, 0xf4, 0xbd,
	0xae, 0xd3, 0xf3, 0xb8, 0x8d, 0xd9, 0x36, 0xac, 0x6a, 0x13, 0x9a, 0x89, 0xf6, 0x57, 0x2d, 0x5a,
	0x64, 0x54, 0xab, 0xc5, 0x14, 0xfd, 0xb5, 0x9c, 0x93, 0x62, 0x16, 0xc0, 0x46, 0x2c, 0x6f, 0xd2,
	0x44, 0x86, 0xf1, 0x19, 0x7d, 0x6b, 0xd9, 0x6f, 0x15, 0xcc, 0x6a, 0xa1, 0xe4, 0x48, 0xa1, 0xd6,
	0x7e, 0xdb, 0x76, 0x2c, 0x73, 0x52, 0x33, 0x12, 0x99, 0x0f, 0xb9, 0x9a, 0x91, 0xc8, 0x88, 0x25,
	0x0e, 0x4d, 0xe8, 0xaf, 0xe7, 0xb7, 0xa4, 0x38, 0x90, 0xb0, 0x75, 0x47, 0x9c, 0x97, 0x22, 0xc1,
	0x9f, 0x09, 0x64, 0x87, 0x6d, 0x54, 0x87, 0xb5, 0x03, 0xb8, 0x0b, 0x03, 0xfc, 0x03, 0x9e, 0x54,
	0x31, 0x2a, 0xab, 0x8a, 0xc7, 0xf3, 0x24, 0xf8, 0x08, 0xff, 0x2e, 0x3d, 0xbf, 0xce, 0x64, 0xaa,
	0x91, 0xf9, 0xb0, 0xa6, 0x27, 0x51, 0x44, 0xc3, 0x10, 0x67, 0x8b, 0xcf, 0x52, 0x6a, 0x15, 0xc9,
	0x49, 0x6a, 0x2c, 0xa7, 0xc7, 0xf3, 0x84, 0x1d, 0x80, 0x37, 0x14, 0x09, 0x6a, 0xdf, 0xed, 0xba,
	0xbd, 0xf5, 0xfd, 0xff, 0xfb, 0x33, 0x9b, 0xf5, 0xef, 0x19, 0x89, 0xe7, 0xb5, 0xc1, 0x27, 0x07,
	0x36, 0xe9, 0x33, 0xe1, 0xaf, 0x85, 0x36, 0x98, 0xa2, 0x22, 0xad, 0xc9, 0xae, 0xaf, 0xaa, 0x23,
	0x57, 0xb0, 0xd2, 0x17, 0x6e, 0xad, 0x2f, 0x9a, 0x4b, 0xbe, 0xe8, 0x40, 0x2b, 0xc6, 0x30, 0xa6,
	0x7b, 0x58, 0x1f, 0xb8, 0xbc, 0xcc, 0x83, 0x2f, 0x0e, 0x74, 0x4e, 0xc3, 0x11, 0xd6, 0x2c, 0x43,
	0x00, 0x1b, 0x44, 0x51, 0xb9, 0x92, 0xcb, 0x2b, 0x18, 0x09, 0x66, 0x45, 0x3d, 0xba, 0x2d, 0x84,
	0x99, 0xa5, 0xf9, 0x22, 0x8c, 0xf2, 0xf7, 0xf0, 0xb8, 0x8d, 0xf3, 0xc5, 0x19, 0xa1, 0x35, 0x53,
	0xb3, 0x30, 0x4b, 0x91, 0x93, 0x31, 0x87, 0x22, 0x31, 0xa8, 0x0a, 0xbb, 0x16, 0x59, 0xa0, 0xa0,
	0x43, 0x22, 0xfd, 0x91, 0x3b, 0xce, 0x39, 0xdd, 0x0a, 0xe7, 0x37, 0x67, 0xc9, 0x93, 0xa4, 0x13,
	0xdb, 0x83, 0x66, 0x22, 0xb4, 0xf1, 0x1d, 0xfb, 0xda, 0x3b, 0xb5, 0xaf, 0xcd, 0x6d, 0x19, 0xbd,
	0x8d, 0x91, 0x26, 0x4c, 0x5e, 0x94, 0xc6, 0x71, 0xf9, 0x02, 0xc2, 0xfe, 0x83, 0xb6, 0xcd, 0x4e,
	0xe7, 0x3a, 0xcd, 0x81, 0x52, 0xc0, 0x66, 0x8d, 0x80, 0x5e, 0x55, 0xc0, 0xe0, 0x3d, 0xb0, 0x63,
	0x4c, 0xd0, 0x20, 0x79, 0x4d, 0xff, 0x8e, 0x40, 0xbb, 0xf0, 0x17, 0xf9, 0x4c, 0x97, 0x45, 0x8d,
	0xae, 0xdb, 0x6b, 0xf3, 0x2a, 0x18, 0x1c, 0x2f, 0x69, 0x42, 0xef, 0x52, 0x6a, 0xd2, 0xf8, 0x25,
	0x4d, 0xf6, 0xbf, 0x36, 0x60, 0xbb, 0x40, 0x67, 0x3b, 0x70, 0x96, 0x9f, 0x60, 0x27, 0xe0, 0x86,
	0x71, 0xcc, 0x1e, 0xcd, 0x5b, 0xd4, 0xfe, 0x50, 0x77, 0x1e, 0xd6, 0xf3, 0x14, 0xbb, 0x1c, 0xac,
	0xb0, 0x77, 0xb0, 0x95, 0x2d, 0xdb, 0x9b, 0xed, 0xce, 0xcf, 0xd6, 0xbb, 0xbf, 0x53, 0xbf, 0xcb,
	0x74, 0x28, 0xef, 0x9e, 0x2c, 0x1b, 0x73, 0xb1, 0x7b, 0xbd, 0x6f, 0x7f, 0xd0, 0x9d, 0x0e, 0x05,
	0x2b, 0x47, 0xcf, 0xde, 0x3e, 0x1d, 0x09, 0x73, 0x39, 0xb9, 0xe8, 0x47, 0x72, 0x3c, 0x98, 0x4e,
	0xa7, 0x97, 0xea, 0xc9, 0xe1, 0xe1, 0xe3, 0x41, 0x24, 0xc7, 0x63, 0x99, 0xee, 0x8d, 0x54, 0x16,
	0x0d, 0x46, 0x72, 0x30, 0xeb, 0x32, 0xb8, 0xfb, 0xbf, 0x77, 0xb1, 0x6a, 0xff, 0xf8, 0x0e, 0xbe,
	0x07, 0x00, 0x00, 0xff, 0xff, 0x94, 0x14, 0xd8, 0xb7, 0x12, 0x07, 0x00, 0x00,
}

// Reference imports to suppress errors if they are not otherwise used.
var _ context.Context
var _ grpc.ClientConn

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion4

// OfflineUserTaskServiceClient is the client API for OfflineUserTaskService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://godoc.org/google.golang.org/grpc#ClientConn.NewStream.
type OfflineUserTaskServiceClient interface {
	// rpc create (UserOfflineTask) returns (UserOfflineTask) {}
	Add(ctx context.Context, in *AddUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskResponse, error)
	PageUserOfflineTask(ctx context.Context, in *PageUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskPage, error)
	ListUserOfflineTask(ctx context.Context, in *ListUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskList, error)
}

type offlineUserTaskServiceClient struct {
	cc *grpc.ClientConn
}

func NewOfflineUserTaskServiceClient(cc *grpc.ClientConn) OfflineUserTaskServiceClient {
	return &offlineUserTaskServiceClient{cc}
}

func (c *offlineUserTaskServiceClient) Add(ctx context.Context, in *AddUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskResponse, error) {
	out := new(UserOfflineTaskResponse)
	err := c.cc.Invoke(ctx, "/services.OfflineUserTaskService/add", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *offlineUserTaskServiceClient) PageUserOfflineTask(ctx context.Context, in *PageUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskPage, error) {
	out := new(UserOfflineTaskPage)
	err := c.cc.Invoke(ctx, "/services.OfflineUserTaskService/pageUserOfflineTask", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *offlineUserTaskServiceClient) ListUserOfflineTask(ctx context.Context, in *ListUserOfflineTaskRequest, opts ...grpc.CallOption) (*UserOfflineTaskList, error) {
	out := new(UserOfflineTaskList)
	err := c.cc.Invoke(ctx, "/services.OfflineUserTaskService/listUserOfflineTask", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// OfflineUserTaskServiceServer is the server API for OfflineUserTaskService service.
type OfflineUserTaskServiceServer interface {
	// rpc create (UserOfflineTask) returns (UserOfflineTask) {}
	Add(context.Context, *AddUserOfflineTaskRequest) (*UserOfflineTaskResponse, error)
	PageUserOfflineTask(context.Context, *PageUserOfflineTaskRequest) (*UserOfflineTaskPage, error)
	ListUserOfflineTask(context.Context, *ListUserOfflineTaskRequest) (*UserOfflineTaskList, error)
}

// UnimplementedOfflineUserTaskServiceServer can be embedded to have forward compatible implementations.
type UnimplementedOfflineUserTaskServiceServer struct {
}

func (*UnimplementedOfflineUserTaskServiceServer) Add(ctx context.Context, req *AddUserOfflineTaskRequest) (*UserOfflineTaskResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Add not implemented")
}
func (*UnimplementedOfflineUserTaskServiceServer) PageUserOfflineTask(ctx context.Context, req *PageUserOfflineTaskRequest) (*UserOfflineTaskPage, error) {
	return nil, status.Errorf(codes.Unimplemented, "method PageUserOfflineTask not implemented")
}
func (*UnimplementedOfflineUserTaskServiceServer) ListUserOfflineTask(ctx context.Context, req *ListUserOfflineTaskRequest) (*UserOfflineTaskList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method ListUserOfflineTask not implemented")
}

func RegisterOfflineUserTaskServiceServer(s *grpc.Server, srv OfflineUserTaskServiceServer) {
	s.RegisterService(&_OfflineUserTaskService_serviceDesc, srv)
}

func _OfflineUserTaskService_Add_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(AddUserOfflineTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineUserTaskServiceServer).Add(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.OfflineUserTaskService/Add",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineUserTaskServiceServer).Add(ctx, req.(*AddUserOfflineTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OfflineUserTaskService_PageUserOfflineTask_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(PageUserOfflineTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineUserTaskServiceServer).PageUserOfflineTask(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.OfflineUserTaskService/PageUserOfflineTask",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineUserTaskServiceServer).PageUserOfflineTask(ctx, req.(*PageUserOfflineTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

func _OfflineUserTaskService_ListUserOfflineTask_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ListUserOfflineTaskRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(OfflineUserTaskServiceServer).ListUserOfflineTask(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/services.OfflineUserTaskService/ListUserOfflineTask",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(OfflineUserTaskServiceServer).ListUserOfflineTask(ctx, req.(*ListUserOfflineTaskRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _OfflineUserTaskService_serviceDesc = grpc.ServiceDesc{
	ServiceName: "services.OfflineUserTaskService",
	HandlerType: (*OfflineUserTaskServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "add",
			Handler:    _OfflineUserTaskService_Add_Handler,
		},
		{
			MethodName: "pageUserOfflineTask",
			Handler:    _OfflineUserTaskService_PageUserOfflineTask_Handler,
		},
		{
			MethodName: "listUserOfflineTask",
			Handler:    _OfflineUserTaskService_ListUserOfflineTask_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "offline/usertask.proto",
}
