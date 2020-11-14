// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.25.0
// 	protoc        v3.13.0
// source: system/system.proto

package sysinfo

import (
	proto "github.com/golang/protobuf/proto"
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

type SystemInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	RequestTime int64  `protobuf:"varint,1,opt,name=request_time,json=requestTime,proto3" json:"request_time,omitempty"`
	RequestUser string `protobuf:"bytes,2,opt,name=request_user,json=requestUser,proto3" json:"request_user,omitempty"`
	ServerName  string `protobuf:"bytes,3,opt,name=server_name,json=serverName,proto3" json:"server_name,omitempty"`
	ServerTime  int64  `protobuf:"varint,4,opt,name=server_time,json=serverTime,proto3" json:"server_time,omitempty"`
	AccessCount int64  `protobuf:"varint,5,opt,name=access_count,json=accessCount,proto3" json:"access_count,omitempty"`
}

func (x *SystemInfo) Reset() {
	*x = SystemInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_system_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *SystemInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*SystemInfo) ProtoMessage() {}

func (x *SystemInfo) ProtoReflect() protoreflect.Message {
	mi := &file_system_system_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use SystemInfo.ProtoReflect.Descriptor instead.
func (*SystemInfo) Descriptor() ([]byte, []int) {
	return file_system_system_proto_rawDescGZIP(), []int{0}
}

func (x *SystemInfo) GetRequestTime() int64 {
	if x != nil {
		return x.RequestTime
	}
	return 0
}

func (x *SystemInfo) GetRequestUser() string {
	if x != nil {
		return x.RequestUser
	}
	return ""
}

func (x *SystemInfo) GetServerName() string {
	if x != nil {
		return x.ServerName
	}
	return ""
}

func (x *SystemInfo) GetServerTime() int64 {
	if x != nil {
		return x.ServerTime
	}
	return 0
}

func (x *SystemInfo) GetAccessCount() int64 {
	if x != nil {
		return x.AccessCount
	}
	return 0
}

type UpdateInfoList struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Data []*UpdateInfo `protobuf:"bytes,1,rep,name=data,proto3" json:"data,omitempty"`
}

func (x *UpdateInfoList) Reset() {
	*x = UpdateInfoList{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_system_proto_msgTypes[1]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateInfoList) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateInfoList) ProtoMessage() {}

func (x *UpdateInfoList) ProtoReflect() protoreflect.Message {
	mi := &file_system_system_proto_msgTypes[1]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateInfoList.ProtoReflect.Descriptor instead.
func (*UpdateInfoList) Descriptor() ([]byte, []int) {
	return file_system_system_proto_rawDescGZIP(), []int{1}
}

func (x *UpdateInfoList) GetData() []*UpdateInfo {
	if x != nil {
		return x.Data
	}
	return nil
}

type UpdateInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Identity        int64  `protobuf:"varint,1,opt,name=identity,proto3" json:"identity,omitempty"`
	NumberVersion   int64  `protobuf:"varint,2,opt,name=number_version,json=numberVersion,proto3" json:"number_version,omitempty"`
	Hash            string `protobuf:"bytes,3,opt,name=hash,proto3" json:"hash,omitempty"`
	Force           bool   `protobuf:"varint,5,opt,name=force,proto3" json:"force,omitempty"`
	Version         string `protobuf:"bytes,6,opt,name=version,proto3" json:"version,omitempty"`
	Platform        string `protobuf:"bytes,7,opt,name=platform,proto3" json:"platform,omitempty"`
	Debug           bool   `protobuf:"varint,8,opt,name=debug,proto3" json:"debug,omitempty"`
	Lang            string `protobuf:"bytes,9,opt,name=lang,proto3" json:"lang,omitempty"`
	DownloadAddress string `protobuf:"bytes,10,opt,name=download_address,json=downloadAddress,proto3" json:"download_address,omitempty"`
	StoreAddress    string `protobuf:"bytes,11,opt,name=store_address,json=storeAddress,proto3" json:"store_address,omitempty"`
	WebsiteAddress  string `protobuf:"bytes,12,opt,name=website_address,json=websiteAddress,proto3" json:"website_address,omitempty"`
	Title           string `protobuf:"bytes,13,opt,name=title,proto3" json:"title,omitempty"`
	Description     string `protobuf:"bytes,14,opt,name=description,proto3" json:"description,omitempty"`
	CreateTime      int64  `protobuf:"varint,15,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	Size            int64  `protobuf:"varint,16,opt,name=size,proto3" json:"size,omitempty"` // bool latest = 17;
}

func (x *UpdateInfo) Reset() {
	*x = UpdateInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_system_proto_msgTypes[2]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *UpdateInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*UpdateInfo) ProtoMessage() {}

func (x *UpdateInfo) ProtoReflect() protoreflect.Message {
	mi := &file_system_system_proto_msgTypes[2]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use UpdateInfo.ProtoReflect.Descriptor instead.
func (*UpdateInfo) Descriptor() ([]byte, []int) {
	return file_system_system_proto_rawDescGZIP(), []int{2}
}

func (x *UpdateInfo) GetIdentity() int64 {
	if x != nil {
		return x.Identity
	}
	return 0
}

func (x *UpdateInfo) GetNumberVersion() int64 {
	if x != nil {
		return x.NumberVersion
	}
	return 0
}

func (x *UpdateInfo) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *UpdateInfo) GetForce() bool {
	if x != nil {
		return x.Force
	}
	return false
}

func (x *UpdateInfo) GetVersion() string {
	if x != nil {
		return x.Version
	}
	return ""
}

func (x *UpdateInfo) GetPlatform() string {
	if x != nil {
		return x.Platform
	}
	return ""
}

func (x *UpdateInfo) GetDebug() bool {
	if x != nil {
		return x.Debug
	}
	return false
}

func (x *UpdateInfo) GetLang() string {
	if x != nil {
		return x.Lang
	}
	return ""
}

func (x *UpdateInfo) GetDownloadAddress() string {
	if x != nil {
		return x.DownloadAddress
	}
	return ""
}

func (x *UpdateInfo) GetStoreAddress() string {
	if x != nil {
		return x.StoreAddress
	}
	return ""
}

func (x *UpdateInfo) GetWebsiteAddress() string {
	if x != nil {
		return x.WebsiteAddress
	}
	return ""
}

func (x *UpdateInfo) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *UpdateInfo) GetDescription() string {
	if x != nil {
		return x.Description
	}
	return ""
}

func (x *UpdateInfo) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *UpdateInfo) GetSize() int64 {
	if x != nil {
		return x.Size
	}
	return 0
}

type ClientInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	ClientName string `protobuf:"bytes,1,opt,name=client_name,json=clientName,proto3" json:"client_name,omitempty"`
	Address    string `protobuf:"bytes,2,opt,name=address,proto3" json:"address,omitempty"`
}

func (x *ClientInfo) Reset() {
	*x = ClientInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_system_proto_msgTypes[3]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *ClientInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*ClientInfo) ProtoMessage() {}

func (x *ClientInfo) ProtoReflect() protoreflect.Message {
	mi := &file_system_system_proto_msgTypes[3]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use ClientInfo.ProtoReflect.Descriptor instead.
func (*ClientInfo) Descriptor() ([]byte, []int) {
	return file_system_system_proto_rawDescGZIP(), []int{3}
}

func (x *ClientInfo) GetClientName() string {
	if x != nil {
		return x.ClientName
	}
	return ""
}

func (x *ClientInfo) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

type AddressInfo struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Address        string `protobuf:"bytes,1,opt,name=address,proto3" json:"address,omitempty"`
	CountryName    string `protobuf:"bytes,2,opt,name=country_name,json=countryName,proto3" json:"country_name,omitempty"`
	RegionName     string `protobuf:"bytes,3,opt,name=region_name,json=regionName,proto3" json:"region_name,omitempty"`
	CityName       string `protobuf:"bytes,4,opt,name=city_name,json=cityName,proto3" json:"city_name,omitempty"`
	OwnerDomain    string `protobuf:"bytes,5,opt,name=owner_domain,json=ownerDomain,proto3" json:"owner_domain,omitempty"`
	IspDomain      string `protobuf:"bytes,6,opt,name=isp_domain,json=ispDomain,proto3" json:"isp_domain,omitempty"`
	Latitude       string `protobuf:"bytes,7,opt,name=latitude,proto3" json:"latitude,omitempty"`
	Longitude      string `protobuf:"bytes,8,opt,name=longitude,proto3" json:"longitude,omitempty"`
	Timezone       string `protobuf:"bytes,9,opt,name=timezone,proto3" json:"timezone,omitempty"`
	UtcOffset      string `protobuf:"bytes,10,opt,name=utc_offset,json=utcOffset,proto3" json:"utc_offset,omitempty"`
	ChinaAdminCode string `protobuf:"bytes,11,opt,name=china_admin_code,json=chinaAdminCode,proto3" json:"china_admin_code,omitempty"`
	IddCode        string `protobuf:"bytes,12,opt,name=idd_code,json=iddCode,proto3" json:"idd_code,omitempty"`
	CountryCode    string `protobuf:"bytes,13,opt,name=country_code,json=countryCode,proto3" json:"country_code,omitempty"`
	ContinentCode  string `protobuf:"bytes,14,opt,name=continent_code,json=continentCode,proto3" json:"continent_code,omitempty"`
	Idc            string `protobuf:"bytes,15,opt,name=idc,proto3" json:"idc,omitempty"`
	BaseStation    string `protobuf:"bytes,16,opt,name=base_station,json=baseStation,proto3" json:"base_station,omitempty"`
	CountryCode3   string `protobuf:"bytes,17,opt,name=country_code3,json=countryCode3,proto3" json:"country_code3,omitempty"`
	EuropeanUnion  string `protobuf:"bytes,18,opt,name=european_union,json=europeanUnion,proto3" json:"european_union,omitempty"`
	CurrencyCode   string `protobuf:"bytes,19,opt,name=currency_code,json=currencyCode,proto3" json:"currency_code,omitempty"`
	CurrencyName   string `protobuf:"bytes,20,opt,name=currency_name,json=currencyName,proto3" json:"currency_name,omitempty"`
	Anycast        string `protobuf:"bytes,21,opt,name=anycast,proto3" json:"anycast,omitempty"`
	Line           string `protobuf:"bytes,22,opt,name=line,proto3" json:"line,omitempty"`
	Route          string `protobuf:"bytes,23,opt,name=route,proto3" json:"route,omitempty"`
	Asn            string `protobuf:"bytes,24,opt,name=asn,proto3" json:"asn,omitempty"`
	AreaCode       string `protobuf:"bytes,25,opt,name=area_code,json=areaCode,proto3" json:"area_code,omitempty"`
	UsageType      string `protobuf:"bytes,26,opt,name=usage_type,json=usageType,proto3" json:"usage_type,omitempty"`
}

func (x *AddressInfo) Reset() {
	*x = AddressInfo{}
	if protoimpl.UnsafeEnabled {
		mi := &file_system_system_proto_msgTypes[4]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *AddressInfo) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*AddressInfo) ProtoMessage() {}

func (x *AddressInfo) ProtoReflect() protoreflect.Message {
	mi := &file_system_system_proto_msgTypes[4]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use AddressInfo.ProtoReflect.Descriptor instead.
func (*AddressInfo) Descriptor() ([]byte, []int) {
	return file_system_system_proto_rawDescGZIP(), []int{4}
}

func (x *AddressInfo) GetAddress() string {
	if x != nil {
		return x.Address
	}
	return ""
}

func (x *AddressInfo) GetCountryName() string {
	if x != nil {
		return x.CountryName
	}
	return ""
}

func (x *AddressInfo) GetRegionName() string {
	if x != nil {
		return x.RegionName
	}
	return ""
}

func (x *AddressInfo) GetCityName() string {
	if x != nil {
		return x.CityName
	}
	return ""
}

func (x *AddressInfo) GetOwnerDomain() string {
	if x != nil {
		return x.OwnerDomain
	}
	return ""
}

func (x *AddressInfo) GetIspDomain() string {
	if x != nil {
		return x.IspDomain
	}
	return ""
}

func (x *AddressInfo) GetLatitude() string {
	if x != nil {
		return x.Latitude
	}
	return ""
}

func (x *AddressInfo) GetLongitude() string {
	if x != nil {
		return x.Longitude
	}
	return ""
}

func (x *AddressInfo) GetTimezone() string {
	if x != nil {
		return x.Timezone
	}
	return ""
}

func (x *AddressInfo) GetUtcOffset() string {
	if x != nil {
		return x.UtcOffset
	}
	return ""
}

func (x *AddressInfo) GetChinaAdminCode() string {
	if x != nil {
		return x.ChinaAdminCode
	}
	return ""
}

func (x *AddressInfo) GetIddCode() string {
	if x != nil {
		return x.IddCode
	}
	return ""
}

func (x *AddressInfo) GetCountryCode() string {
	if x != nil {
		return x.CountryCode
	}
	return ""
}

func (x *AddressInfo) GetContinentCode() string {
	if x != nil {
		return x.ContinentCode
	}
	return ""
}

func (x *AddressInfo) GetIdc() string {
	if x != nil {
		return x.Idc
	}
	return ""
}

func (x *AddressInfo) GetBaseStation() string {
	if x != nil {
		return x.BaseStation
	}
	return ""
}

func (x *AddressInfo) GetCountryCode3() string {
	if x != nil {
		return x.CountryCode3
	}
	return ""
}

func (x *AddressInfo) GetEuropeanUnion() string {
	if x != nil {
		return x.EuropeanUnion
	}
	return ""
}

func (x *AddressInfo) GetCurrencyCode() string {
	if x != nil {
		return x.CurrencyCode
	}
	return ""
}

func (x *AddressInfo) GetCurrencyName() string {
	if x != nil {
		return x.CurrencyName
	}
	return ""
}

func (x *AddressInfo) GetAnycast() string {
	if x != nil {
		return x.Anycast
	}
	return ""
}

func (x *AddressInfo) GetLine() string {
	if x != nil {
		return x.Line
	}
	return ""
}

func (x *AddressInfo) GetRoute() string {
	if x != nil {
		return x.Route
	}
	return ""
}

func (x *AddressInfo) GetAsn() string {
	if x != nil {
		return x.Asn
	}
	return ""
}

func (x *AddressInfo) GetAreaCode() string {
	if x != nil {
		return x.AreaCode
	}
	return ""
}

func (x *AddressInfo) GetUsageType() string {
	if x != nil {
		return x.UsageType
	}
	return ""
}

var File_system_system_proto protoreflect.FileDescriptor

var file_system_system_proto_rawDesc = []byte{
	0x0a, 0x13, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x22,
	0xb7, 0x01, 0x0a, 0x0a, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x21,
	0x0a, 0x0c, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x01,
	0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x54, 0x69, 0x6d,
	0x65, 0x12, 0x21, 0x0a, 0x0c, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74, 0x5f, 0x75, 0x73, 0x65,
	0x72, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x72, 0x65, 0x71, 0x75, 0x65, 0x73, 0x74,
	0x55, 0x73, 0x65, 0x72, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x5f, 0x6e,
	0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x65, 0x72, 0x76, 0x65,
	0x72, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x73, 0x65, 0x72, 0x76, 0x65, 0x72, 0x5f,
	0x74, 0x69, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x73, 0x65, 0x72, 0x76,
	0x65, 0x72, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73,
	0x5f, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0b, 0x61, 0x63,
	0x63, 0x65, 0x73, 0x73, 0x43, 0x6f, 0x75, 0x6e, 0x74, 0x22, 0x3a, 0x0a, 0x0e, 0x55, 0x70, 0x64,
	0x61, 0x74, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x4c, 0x69, 0x73, 0x74, 0x12, 0x28, 0x0a, 0x04, 0x64,
	0x61, 0x74, 0x61, 0x18, 0x01, 0x20, 0x03, 0x28, 0x0b, 0x32, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x52,
	0x04, 0x64, 0x61, 0x74, 0x61, 0x22, 0xbf, 0x03, 0x0a, 0x0a, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65,
	0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1a, 0x0a, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x18, 0x01, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x69, 0x64, 0x65, 0x6e, 0x74, 0x69, 0x74, 0x79,
	0x12, 0x25, 0x0a, 0x0e, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72, 0x5f, 0x76, 0x65, 0x72, 0x73, 0x69,
	0x6f, 0x6e, 0x18, 0x02, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0d, 0x6e, 0x75, 0x6d, 0x62, 0x65, 0x72,
	0x56, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18,
	0x03, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x68, 0x61, 0x73, 0x68, 0x12, 0x14, 0x0a, 0x05, 0x66,
	0x6f, 0x72, 0x63, 0x65, 0x18, 0x05, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x66, 0x6f, 0x72, 0x63,
	0x65, 0x12, 0x18, 0x0a, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x07, 0x76, 0x65, 0x72, 0x73, 0x69, 0x6f, 0x6e, 0x12, 0x1a, 0x0a, 0x08, 0x70,
	0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x70,
	0x6c, 0x61, 0x74, 0x66, 0x6f, 0x72, 0x6d, 0x12, 0x14, 0x0a, 0x05, 0x64, 0x65, 0x62, 0x75, 0x67,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x08, 0x52, 0x05, 0x64, 0x65, 0x62, 0x75, 0x67, 0x12, 0x12, 0x0a,
	0x04, 0x6c, 0x61, 0x6e, 0x67, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x61, 0x6e,
	0x67, 0x12, 0x29, 0x0a, 0x10, 0x64, 0x6f, 0x77, 0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x5f, 0x61, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0f, 0x64, 0x6f, 0x77,
	0x6e, 0x6c, 0x6f, 0x61, 0x64, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x23, 0x0a, 0x0d,
	0x73, 0x74, 0x6f, 0x72, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x0b, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0c, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x12, 0x27, 0x0a, 0x0f, 0x77, 0x65, 0x62, 0x73, 0x69, 0x74, 0x65, 0x5f, 0x61, 0x64, 0x64,
	0x72, 0x65, 0x73, 0x73, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x77, 0x65, 0x62, 0x73,
	0x69, 0x74, 0x65, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x14, 0x0a, 0x05, 0x74, 0x69,
	0x74, 0x6c, 0x65, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65,
	0x12, 0x20, 0x0a, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69, 0x6f, 0x6e, 0x18,
	0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x64, 0x65, 0x73, 0x63, 0x72, 0x69, 0x70, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d,
	0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54,
	0x69, 0x6d, 0x65, 0x12, 0x12, 0x0a, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x18, 0x10, 0x20, 0x01, 0x28,
	0x03, 0x52, 0x04, 0x73, 0x69, 0x7a, 0x65, 0x22, 0x47, 0x0a, 0x0a, 0x43, 0x6c, 0x69, 0x65, 0x6e,
	0x74, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x5f,
	0x6e, 0x61, 0x6d, 0x65, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x63, 0x6c, 0x69, 0x65,
	0x6e, 0x74, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73,
	0x73, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x22, 0xab, 0x06, 0x0a, 0x0b, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x49, 0x6e, 0x66, 0x6f,
	0x12, 0x18, 0x0a, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x01, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x07, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6f,
	0x75, 0x6e, 0x74, 0x72, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x02, 0x20, 0x01, 0x28, 0x09,
	0x52, 0x0b, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1f, 0x0a,
	0x0b, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x03, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0a, 0x72, 0x65, 0x67, 0x69, 0x6f, 0x6e, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x1b,
	0x0a, 0x09, 0x63, 0x69, 0x74, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x08, 0x63, 0x69, 0x74, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x6f,
	0x77, 0x6e, 0x65, 0x72, 0x5f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0b, 0x6f, 0x77, 0x6e, 0x65, 0x72, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x1d,
	0x0a, 0x0a, 0x69, 0x73, 0x70, 0x5f, 0x64, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x18, 0x06, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x09, 0x69, 0x73, 0x70, 0x44, 0x6f, 0x6d, 0x61, 0x69, 0x6e, 0x12, 0x1a, 0x0a,
	0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x07, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x08, 0x6c, 0x61, 0x74, 0x69, 0x74, 0x75, 0x64, 0x65, 0x12, 0x1c, 0x0a, 0x09, 0x6c, 0x6f, 0x6e,
	0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x18, 0x08, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x6c, 0x6f,
	0x6e, 0x67, 0x69, 0x74, 0x75, 0x64, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x74, 0x69, 0x6d, 0x65, 0x7a,
	0x6f, 0x6e, 0x65, 0x18, 0x09, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x74, 0x69, 0x6d, 0x65, 0x7a,
	0x6f, 0x6e, 0x65, 0x12, 0x1d, 0x0a, 0x0a, 0x75, 0x74, 0x63, 0x5f, 0x6f, 0x66, 0x66, 0x73, 0x65,
	0x74, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x74, 0x63, 0x4f, 0x66, 0x66, 0x73,
	0x65, 0x74, 0x12, 0x28, 0x0a, 0x10, 0x63, 0x68, 0x69, 0x6e, 0x61, 0x5f, 0x61, 0x64, 0x6d, 0x69,
	0x6e, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0b, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0e, 0x63, 0x68,
	0x69, 0x6e, 0x61, 0x41, 0x64, 0x6d, 0x69, 0x6e, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x19, 0x0a, 0x08,
	0x69, 0x64, 0x64, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0c, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07,
	0x69, 0x64, 0x64, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x21, 0x0a, 0x0c, 0x63, 0x6f, 0x75, 0x6e, 0x74,
	0x72, 0x79, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0d, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x63, 0x6f,
	0x6e, 0x74, 0x69, 0x6e, 0x65, 0x6e, 0x74, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0e, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x0d, 0x63, 0x6f, 0x6e, 0x74, 0x69, 0x6e, 0x65, 0x6e, 0x74, 0x43, 0x6f, 0x64,
	0x65, 0x12, 0x10, 0x0a, 0x03, 0x69, 0x64, 0x63, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03,
	0x69, 0x64, 0x63, 0x12, 0x21, 0x0a, 0x0c, 0x62, 0x61, 0x73, 0x65, 0x5f, 0x73, 0x74, 0x61, 0x74,
	0x69, 0x6f, 0x6e, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0b, 0x62, 0x61, 0x73, 0x65, 0x53,
	0x74, 0x61, 0x74, 0x69, 0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x6f, 0x75, 0x6e, 0x74, 0x72,
	0x79, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x33, 0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x63,
	0x6f, 0x75, 0x6e, 0x74, 0x72, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x33, 0x12, 0x25, 0x0a, 0x0e, 0x65,
	0x75, 0x72, 0x6f, 0x70, 0x65, 0x61, 0x6e, 0x5f, 0x75, 0x6e, 0x69, 0x6f, 0x6e, 0x18, 0x12, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x0d, 0x65, 0x75, 0x72, 0x6f, 0x70, 0x65, 0x61, 0x6e, 0x55, 0x6e, 0x69,
	0x6f, 0x6e, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x5f, 0x63,
	0x6f, 0x64, 0x65, 0x18, 0x13, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x63, 0x79, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x23, 0x0a, 0x0d, 0x63, 0x75, 0x72, 0x72, 0x65,
	0x6e, 0x63, 0x79, 0x5f, 0x6e, 0x61, 0x6d, 0x65, 0x18, 0x14, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0c,
	0x63, 0x75, 0x72, 0x72, 0x65, 0x6e, 0x63, 0x79, 0x4e, 0x61, 0x6d, 0x65, 0x12, 0x18, 0x0a, 0x07,
	0x61, 0x6e, 0x79, 0x63, 0x61, 0x73, 0x74, 0x18, 0x15, 0x20, 0x01, 0x28, 0x09, 0x52, 0x07, 0x61,
	0x6e, 0x79, 0x63, 0x61, 0x73, 0x74, 0x12, 0x12, 0x0a, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x18, 0x16,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x6c, 0x69, 0x6e, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x72, 0x6f,
	0x75, 0x74, 0x65, 0x18, 0x17, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x72, 0x6f, 0x75, 0x74, 0x65,
	0x12, 0x10, 0x0a, 0x03, 0x61, 0x73, 0x6e, 0x18, 0x18, 0x20, 0x01, 0x28, 0x09, 0x52, 0x03, 0x61,
	0x73, 0x6e, 0x12, 0x1b, 0x0a, 0x09, 0x61, 0x72, 0x65, 0x61, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18,
	0x19, 0x20, 0x01, 0x28, 0x09, 0x52, 0x08, 0x61, 0x72, 0x65, 0x61, 0x43, 0x6f, 0x64, 0x65, 0x12,
	0x1d, 0x0a, 0x0a, 0x75, 0x73, 0x61, 0x67, 0x65, 0x5f, 0x74, 0x79, 0x70, 0x65, 0x18, 0x1a, 0x20,
	0x01, 0x28, 0x09, 0x52, 0x09, 0x75, 0x73, 0x61, 0x67, 0x65, 0x54, 0x79, 0x70, 0x65, 0x32, 0xc3,
	0x01, 0x0a, 0x11, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x53, 0x65, 0x72,
	0x76, 0x69, 0x63, 0x65, 0x12, 0x34, 0x0a, 0x04, 0x49, 0x6e, 0x66, 0x6f, 0x12, 0x14, 0x2e, 0x73,
	0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x6e,
	0x66, 0x6f, 0x1a, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x53, 0x79,
	0x73, 0x74, 0x65, 0x6d, 0x49, 0x6e, 0x66, 0x6f, 0x22, 0x00, 0x12, 0x38, 0x0a, 0x07, 0x41, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x43, 0x6c, 0x69, 0x65, 0x6e, 0x74, 0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x15, 0x2e, 0x73, 0x65,
	0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x49, 0x6e,
	0x66, 0x6f, 0x22, 0x00, 0x12, 0x3e, 0x0a, 0x0a, 0x4c, 0x69, 0x73, 0x74, 0x55, 0x70, 0x64, 0x61,
	0x74, 0x65, 0x12, 0x14, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x55, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x1a, 0x18, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x49, 0x6e, 0x66, 0x6f, 0x4c, 0x69,
	0x73, 0x74, 0x22, 0x00, 0x42, 0x4e, 0x5a, 0x3b, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63,
	0x6f, 0x6d, 0x2f, 0x7a, 0x7a, 0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d,
	0x6d, 0x6f, 0x6e, 0x2d, 0x67, 0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2f, 0x73, 0x79, 0x73, 0x74, 0x65, 0x6d, 0x2f, 0x73, 0x79, 0x73, 0x69,
	0x6e, 0x66, 0x6f, 0xaa, 0x02, 0x0e, 0x47, 0x72, 0x70, 0x63, 0x53, 0x79, 0x73, 0x74, 0x65, 0x6d,
	0x49, 0x6e, 0x66, 0x6f, 0x62, 0x06, 0x70, 0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_system_system_proto_rawDescOnce sync.Once
	file_system_system_proto_rawDescData = file_system_system_proto_rawDesc
)

func file_system_system_proto_rawDescGZIP() []byte {
	file_system_system_proto_rawDescOnce.Do(func() {
		file_system_system_proto_rawDescData = protoimpl.X.CompressGZIP(file_system_system_proto_rawDescData)
	})
	return file_system_system_proto_rawDescData
}

var file_system_system_proto_msgTypes = make([]protoimpl.MessageInfo, 5)
var file_system_system_proto_goTypes = []interface{}{
	(*SystemInfo)(nil),     // 0: services.SystemInfo
	(*UpdateInfoList)(nil), // 1: services.UpdateInfoList
	(*UpdateInfo)(nil),     // 2: services.UpdateInfo
	(*ClientInfo)(nil),     // 3: services.ClientInfo
	(*AddressInfo)(nil),    // 4: services.AddressInfo
}
var file_system_system_proto_depIdxs = []int32{
	2, // 0: services.UpdateInfoList.data:type_name -> services.UpdateInfo
	3, // 1: services.SystemInfoService.Info:input_type -> services.ClientInfo
	3, // 2: services.SystemInfoService.Address:input_type -> services.ClientInfo
	2, // 3: services.SystemInfoService.ListUpdate:input_type -> services.UpdateInfo
	0, // 4: services.SystemInfoService.Info:output_type -> services.SystemInfo
	4, // 5: services.SystemInfoService.Address:output_type -> services.AddressInfo
	1, // 6: services.SystemInfoService.ListUpdate:output_type -> services.UpdateInfoList
	4, // [4:7] is the sub-list for method output_type
	1, // [1:4] is the sub-list for method input_type
	1, // [1:1] is the sub-list for extension type_name
	1, // [1:1] is the sub-list for extension extendee
	0, // [0:1] is the sub-list for field type_name
}

func init() { file_system_system_proto_init() }
func file_system_system_proto_init() {
	if File_system_system_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_system_system_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*SystemInfo); i {
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
		file_system_system_proto_msgTypes[1].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateInfoList); i {
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
		file_system_system_proto_msgTypes[2].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*UpdateInfo); i {
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
		file_system_system_proto_msgTypes[3].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*ClientInfo); i {
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
		file_system_system_proto_msgTypes[4].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*AddressInfo); i {
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
			RawDescriptor: file_system_system_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   5,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_system_system_proto_goTypes,
		DependencyIndexes: file_system_system_proto_depIdxs,
		MessageInfos:      file_system_system_proto_msgTypes,
	}.Build()
	File_system_system_proto = out.File
	file_system_system_proto_rawDesc = nil
	file_system_system_proto_goTypes = nil
	file_system_system_proto_depIdxs = nil
}
