// Code generated by protoc-gen-go. DO NOT EDIT.
// source: common/common_response.proto

package common

import (
	fmt "fmt"
	proto "github.com/golang/protobuf/proto"
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

type BoolResponse struct {
	Success              bool     `protobuf:"varint,1,opt,name=success,proto3" json:"success,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *BoolResponse) Reset()         { *m = BoolResponse{} }
func (m *BoolResponse) String() string { return proto.CompactTextString(m) }
func (*BoolResponse) ProtoMessage()    {}
func (*BoolResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{0}
}

func (m *BoolResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_BoolResponse.Unmarshal(m, b)
}
func (m *BoolResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_BoolResponse.Marshal(b, m, deterministic)
}
func (m *BoolResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_BoolResponse.Merge(m, src)
}
func (m *BoolResponse) XXX_Size() int {
	return xxx_messageInfo_BoolResponse.Size(m)
}
func (m *BoolResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_BoolResponse.DiscardUnknown(m)
}

var xxx_messageInfo_BoolResponse proto.InternalMessageInfo

func (m *BoolResponse) GetSuccess() bool {
	if m != nil {
		return m.Success
	}
	return false
}

type StringResponse struct {
	Data                 string   `protobuf:"bytes,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *StringResponse) Reset()         { *m = StringResponse{} }
func (m *StringResponse) String() string { return proto.CompactTextString(m) }
func (*StringResponse) ProtoMessage()    {}
func (*StringResponse) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{1}
}

func (m *StringResponse) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_StringResponse.Unmarshal(m, b)
}
func (m *StringResponse) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_StringResponse.Marshal(b, m, deterministic)
}
func (m *StringResponse) XXX_Merge(src proto.Message) {
	xxx_messageInfo_StringResponse.Merge(m, src)
}
func (m *StringResponse) XXX_Size() int {
	return xxx_messageInfo_StringResponse.Size(m)
}
func (m *StringResponse) XXX_DiscardUnknown() {
	xxx_messageInfo_StringResponse.DiscardUnknown(m)
}

var xxx_messageInfo_StringResponse proto.InternalMessageInfo

func (m *StringResponse) GetData() string {
	if m != nil {
		return m.Data
	}
	return ""
}

type Int32Response struct {
	Data                 int32    `protobuf:"varint,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Int32Response) Reset()         { *m = Int32Response{} }
func (m *Int32Response) String() string { return proto.CompactTextString(m) }
func (*Int32Response) ProtoMessage()    {}
func (*Int32Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{2}
}

func (m *Int32Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Int32Response.Unmarshal(m, b)
}
func (m *Int32Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Int32Response.Marshal(b, m, deterministic)
}
func (m *Int32Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Int32Response.Merge(m, src)
}
func (m *Int32Response) XXX_Size() int {
	return xxx_messageInfo_Int32Response.Size(m)
}
func (m *Int32Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Int32Response.DiscardUnknown(m)
}

var xxx_messageInfo_Int32Response proto.InternalMessageInfo

func (m *Int32Response) GetData() int32 {
	if m != nil {
		return m.Data
	}
	return 0
}

type Int64Response struct {
	Data                 int64    `protobuf:"varint,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Int64Response) Reset()         { *m = Int64Response{} }
func (m *Int64Response) String() string { return proto.CompactTextString(m) }
func (*Int64Response) ProtoMessage()    {}
func (*Int64Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{3}
}

func (m *Int64Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Int64Response.Unmarshal(m, b)
}
func (m *Int64Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Int64Response.Marshal(b, m, deterministic)
}
func (m *Int64Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Int64Response.Merge(m, src)
}
func (m *Int64Response) XXX_Size() int {
	return xxx_messageInfo_Int64Response.Size(m)
}
func (m *Int64Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Int64Response.DiscardUnknown(m)
}

var xxx_messageInfo_Int64Response proto.InternalMessageInfo

func (m *Int64Response) GetData() int64 {
	if m != nil {
		return m.Data
	}
	return 0
}

type Uint32Response struct {
	Data                 uint32   `protobuf:"varint,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Uint32Response) Reset()         { *m = Uint32Response{} }
func (m *Uint32Response) String() string { return proto.CompactTextString(m) }
func (*Uint32Response) ProtoMessage()    {}
func (*Uint32Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{4}
}

func (m *Uint32Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Uint32Response.Unmarshal(m, b)
}
func (m *Uint32Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Uint32Response.Marshal(b, m, deterministic)
}
func (m *Uint32Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Uint32Response.Merge(m, src)
}
func (m *Uint32Response) XXX_Size() int {
	return xxx_messageInfo_Uint32Response.Size(m)
}
func (m *Uint32Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Uint32Response.DiscardUnknown(m)
}

var xxx_messageInfo_Uint32Response proto.InternalMessageInfo

func (m *Uint32Response) GetData() uint32 {
	if m != nil {
		return m.Data
	}
	return 0
}

type Uint64Response struct {
	Data                 uint64   `protobuf:"varint,1,opt,name=data,proto3" json:"data,omitempty"`
	XXX_NoUnkeyedLiteral struct{} `json:"-"`
	XXX_unrecognized     []byte   `json:"-"`
	XXX_sizecache        int32    `json:"-"`
}

func (m *Uint64Response) Reset()         { *m = Uint64Response{} }
func (m *Uint64Response) String() string { return proto.CompactTextString(m) }
func (*Uint64Response) ProtoMessage()    {}
func (*Uint64Response) Descriptor() ([]byte, []int) {
	return fileDescriptor_f4c3135d11bc2ec2, []int{5}
}

func (m *Uint64Response) XXX_Unmarshal(b []byte) error {
	return xxx_messageInfo_Uint64Response.Unmarshal(m, b)
}
func (m *Uint64Response) XXX_Marshal(b []byte, deterministic bool) ([]byte, error) {
	return xxx_messageInfo_Uint64Response.Marshal(b, m, deterministic)
}
func (m *Uint64Response) XXX_Merge(src proto.Message) {
	xxx_messageInfo_Uint64Response.Merge(m, src)
}
func (m *Uint64Response) XXX_Size() int {
	return xxx_messageInfo_Uint64Response.Size(m)
}
func (m *Uint64Response) XXX_DiscardUnknown() {
	xxx_messageInfo_Uint64Response.DiscardUnknown(m)
}

var xxx_messageInfo_Uint64Response proto.InternalMessageInfo

func (m *Uint64Response) GetData() uint64 {
	if m != nil {
		return m.Data
	}
	return 0
}

func init() {
	proto.RegisterType((*BoolResponse)(nil), "services.BoolResponse")
	proto.RegisterType((*StringResponse)(nil), "services.StringResponse")
	proto.RegisterType((*Int32Response)(nil), "services.Int32Response")
	proto.RegisterType((*Int64Response)(nil), "services.Int64Response")
	proto.RegisterType((*Uint32Response)(nil), "services.Uint32Response")
	proto.RegisterType((*Uint64Response)(nil), "services.Uint64Response")
}

func init() { proto.RegisterFile("common/common_response.proto", fileDescriptor_f4c3135d11bc2ec2) }

var fileDescriptor_f4c3135d11bc2ec2 = []byte{
	// 194 bytes of a gzipped FileDescriptorProto
	0x1f, 0x8b, 0x08, 0x00, 0x00, 0x00, 0x00, 0x00, 0x02, 0xff, 0xe2, 0x92, 0x49, 0xce, 0xcf, 0xcd,
	0xcd, 0xcf, 0xd3, 0x87, 0x50, 0xf1, 0x45, 0xa9, 0xc5, 0x05, 0xf9, 0x79, 0xc5, 0xa9, 0x7a, 0x05,
	0x45, 0xf9, 0x25, 0xf9, 0x42, 0x1c, 0xc5, 0xa9, 0x45, 0x65, 0x99, 0xc9, 0xa9, 0xc5, 0x4a, 0x1a,
	0x5c, 0x3c, 0x4e, 0xf9, 0xf9, 0x39, 0x41, 0x50, 0x79, 0x21, 0x09, 0x2e, 0xf6, 0xe2, 0xd2, 0xe4,
	0xe4, 0xd4, 0xe2, 0x62, 0x09, 0x46, 0x05, 0x46, 0x0d, 0x8e, 0x20, 0x18, 0x57, 0x49, 0x85, 0x8b,
	0x2f, 0xb8, 0xa4, 0x28, 0x33, 0x2f, 0x1d, 0xae, 0x56, 0x88, 0x8b, 0x25, 0x25, 0xb1, 0x24, 0x11,
	0xac, 0x90, 0x33, 0x08, 0xcc, 0x56, 0x52, 0xe6, 0xe2, 0xf5, 0xcc, 0x2b, 0x31, 0x36, 0xc2, 0xaa,
	0x88, 0x15, 0x45, 0x91, 0x99, 0x09, 0x56, 0x45, 0xcc, 0x50, 0x45, 0x2a, 0x5c, 0x7c, 0xa1, 0x99,
	0x38, 0x8d, 0xe2, 0x45, 0x55, 0x85, 0xc3, 0x2c, 0x16, 0x88, 0x2a, 0x27, 0x9d, 0x28, 0xad, 0xf4,
	0xcc, 0x92, 0x8c, 0xd2, 0x24, 0xbd, 0xe4, 0xfc, 0x5c, 0xfd, 0xaa, 0xaa, 0xaa, 0x8c, 0x22, 0x43,
	0x4b, 0x4b, 0x03, 0x68, 0xe8, 0xe8, 0xa6, 0x17, 0x15, 0x24, 0xeb, 0xa7, 0xe7, 0x43, 0xb9, 0x49,
	0x6c, 0xe0, 0x40, 0x32, 0x06, 0x04, 0x00, 0x00, 0xff, 0xff, 0x26, 0x83, 0x3f, 0x31, 0x44, 0x01,
	0x00, 0x00,
}
