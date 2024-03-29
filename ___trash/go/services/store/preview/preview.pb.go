// Code generated by protoc-gen-go. DO NOT EDIT.
// versions:
// 	protoc-gen-go v1.26.0
// 	protoc        v3.15.5
// source: store/preview.proto

package preview

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

type MediaPreview struct {
	state         protoimpl.MessageState
	sizeCache     protoimpl.SizeCache
	unknownFields protoimpl.UnknownFields

	Hash          string `protobuf:"bytes,1,opt,name=hash,proto3" json:"hash,omitempty"`
	Type          int32  `protobuf:"varint,2,opt,name=type,proto3" json:"type,omitempty"`
	Status        int32  `protobuf:"varint,3,opt,name=status,proto3" json:"status,omitempty"`
	Title         string `protobuf:"bytes,4,opt,name=title,proto3" json:"title,omitempty"`
	Duration      int64  `protobuf:"varint,5,opt,name=duration,proto3" json:"duration,omitempty"`
	Width         int32  `protobuf:"varint,6,opt,name=width,proto3" json:"width,omitempty"`
	Height        int32  `protobuf:"varint,7,opt,name=height,proto3" json:"height,omitempty"`
	SourceWidth   int32  `protobuf:"varint,8,opt,name=source_width,json=sourceWidth,proto3" json:"source_width,omitempty"`
	SourceHeight  int32  `protobuf:"varint,9,opt,name=source_height,json=sourceHeight,proto3" json:"source_height,omitempty"`
	AccessCode    string `protobuf:"bytes,10,opt,name=access_code,json=accessCode,proto3" json:"access_code,omitempty"`
	AccessAddress string `protobuf:"bytes,11,opt,name=access_address,json=accessAddress,proto3" json:"access_address,omitempty"`
	Screenshot    string `protobuf:"bytes,12,opt,name=screenshot,proto3" json:"screenshot,omitempty"`
	Subtitle      string `protobuf:"bytes,13,opt,name=subtitle,proto3" json:"subtitle,omitempty"`
	File          string `protobuf:"bytes,14,opt,name=file,proto3" json:"file,omitempty"`
	Rotate        int32  `protobuf:"varint,15,opt,name=rotate,proto3" json:"rotate,omitempty"`
	Addon         string `protobuf:"bytes,16,opt,name=addon,proto3" json:"addon,omitempty"`
	CreateAddress string `protobuf:"bytes,17,opt,name=create_address,json=createAddress,proto3" json:"create_address,omitempty"`
	Flag          int32  `protobuf:"varint,18,opt,name=flag,proto3" json:"flag,omitempty"`
	CreateTime    int64  `protobuf:"varint,19,opt,name=create_time,json=createTime,proto3" json:"create_time,omitempty"`
	UpdateTime    int64  `protobuf:"varint,20,opt,name=update_time,json=updateTime,proto3" json:"update_time,omitempty"`
}

func (x *MediaPreview) Reset() {
	*x = MediaPreview{}
	if protoimpl.UnsafeEnabled {
		mi := &file_store_preview_proto_msgTypes[0]
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		ms.StoreMessageInfo(mi)
	}
}

func (x *MediaPreview) String() string {
	return protoimpl.X.MessageStringOf(x)
}

func (*MediaPreview) ProtoMessage() {}

func (x *MediaPreview) ProtoReflect() protoreflect.Message {
	mi := &file_store_preview_proto_msgTypes[0]
	if protoimpl.UnsafeEnabled && x != nil {
		ms := protoimpl.X.MessageStateOf(protoimpl.Pointer(x))
		if ms.LoadMessageInfo() == nil {
			ms.StoreMessageInfo(mi)
		}
		return ms
	}
	return mi.MessageOf(x)
}

// Deprecated: Use MediaPreview.ProtoReflect.Descriptor instead.
func (*MediaPreview) Descriptor() ([]byte, []int) {
	return file_store_preview_proto_rawDescGZIP(), []int{0}
}

func (x *MediaPreview) GetHash() string {
	if x != nil {
		return x.Hash
	}
	return ""
}

func (x *MediaPreview) GetType() int32 {
	if x != nil {
		return x.Type
	}
	return 0
}

func (x *MediaPreview) GetStatus() int32 {
	if x != nil {
		return x.Status
	}
	return 0
}

func (x *MediaPreview) GetTitle() string {
	if x != nil {
		return x.Title
	}
	return ""
}

func (x *MediaPreview) GetDuration() int64 {
	if x != nil {
		return x.Duration
	}
	return 0
}

func (x *MediaPreview) GetWidth() int32 {
	if x != nil {
		return x.Width
	}
	return 0
}

func (x *MediaPreview) GetHeight() int32 {
	if x != nil {
		return x.Height
	}
	return 0
}

func (x *MediaPreview) GetSourceWidth() int32 {
	if x != nil {
		return x.SourceWidth
	}
	return 0
}

func (x *MediaPreview) GetSourceHeight() int32 {
	if x != nil {
		return x.SourceHeight
	}
	return 0
}

func (x *MediaPreview) GetAccessCode() string {
	if x != nil {
		return x.AccessCode
	}
	return ""
}

func (x *MediaPreview) GetAccessAddress() string {
	if x != nil {
		return x.AccessAddress
	}
	return ""
}

func (x *MediaPreview) GetScreenshot() string {
	if x != nil {
		return x.Screenshot
	}
	return ""
}

func (x *MediaPreview) GetSubtitle() string {
	if x != nil {
		return x.Subtitle
	}
	return ""
}

func (x *MediaPreview) GetFile() string {
	if x != nil {
		return x.File
	}
	return ""
}

func (x *MediaPreview) GetRotate() int32 {
	if x != nil {
		return x.Rotate
	}
	return 0
}

func (x *MediaPreview) GetAddon() string {
	if x != nil {
		return x.Addon
	}
	return ""
}

func (x *MediaPreview) GetCreateAddress() string {
	if x != nil {
		return x.CreateAddress
	}
	return ""
}

func (x *MediaPreview) GetFlag() int32 {
	if x != nil {
		return x.Flag
	}
	return 0
}

func (x *MediaPreview) GetCreateTime() int64 {
	if x != nil {
		return x.CreateTime
	}
	return 0
}

func (x *MediaPreview) GetUpdateTime() int64 {
	if x != nil {
		return x.UpdateTime
	}
	return 0
}

var File_store_preview_proto protoreflect.FileDescriptor

var file_store_preview_proto_rawDesc = []byte{
	0x0a, 0x13, 0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x70, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x2e,
	0x70, 0x72, 0x6f, 0x74, 0x6f, 0x12, 0x08, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x22,
	0xb9, 0x04, 0x0a, 0x0c, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77,
	0x12, 0x12, 0x0a, 0x04, 0x68, 0x61, 0x73, 0x68, 0x18, 0x01, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04,
	0x68, 0x61, 0x73, 0x68, 0x12, 0x12, 0x0a, 0x04, 0x74, 0x79, 0x70, 0x65, 0x18, 0x02, 0x20, 0x01,
	0x28, 0x05, 0x52, 0x04, 0x74, 0x79, 0x70, 0x65, 0x12, 0x16, 0x0a, 0x06, 0x73, 0x74, 0x61, 0x74,
	0x75, 0x73, 0x18, 0x03, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x73, 0x74, 0x61, 0x74, 0x75, 0x73,
	0x12, 0x14, 0x0a, 0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x04, 0x20, 0x01, 0x28, 0x09, 0x52,
	0x05, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x1a, 0x0a, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x18, 0x05, 0x20, 0x01, 0x28, 0x03, 0x52, 0x08, 0x64, 0x75, 0x72, 0x61, 0x74, 0x69,
	0x6f, 0x6e, 0x12, 0x14, 0x0a, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x18, 0x06, 0x20, 0x01, 0x28,
	0x05, 0x52, 0x05, 0x77, 0x69, 0x64, 0x74, 0x68, 0x12, 0x16, 0x0a, 0x06, 0x68, 0x65, 0x69, 0x67,
	0x68, 0x74, 0x18, 0x07, 0x20, 0x01, 0x28, 0x05, 0x52, 0x06, 0x68, 0x65, 0x69, 0x67, 0x68, 0x74,
	0x12, 0x21, 0x0a, 0x0c, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x77, 0x69, 0x64, 0x74, 0x68,
	0x18, 0x08, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0b, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x57, 0x69,
	0x64, 0x74, 0x68, 0x12, 0x23, 0x0a, 0x0d, 0x73, 0x6f, 0x75, 0x72, 0x63, 0x65, 0x5f, 0x68, 0x65,
	0x69, 0x67, 0x68, 0x74, 0x18, 0x09, 0x20, 0x01, 0x28, 0x05, 0x52, 0x0c, 0x73, 0x6f, 0x75, 0x72,
	0x63, 0x65, 0x48, 0x65, 0x69, 0x67, 0x68, 0x74, 0x12, 0x1f, 0x0a, 0x0b, 0x61, 0x63, 0x63, 0x65,
	0x73, 0x73, 0x5f, 0x63, 0x6f, 0x64, 0x65, 0x18, 0x0a, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x61,
	0x63, 0x63, 0x65, 0x73, 0x73, 0x43, 0x6f, 0x64, 0x65, 0x12, 0x25, 0x0a, 0x0e, 0x61, 0x63, 0x63,
	0x65, 0x73, 0x73, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73, 0x18, 0x0b, 0x20, 0x01, 0x28,
	0x09, 0x52, 0x0d, 0x61, 0x63, 0x63, 0x65, 0x73, 0x73, 0x41, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x12, 0x1e, 0x0a, 0x0a, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x73, 0x68, 0x6f, 0x74, 0x18, 0x0c,
	0x20, 0x01, 0x28, 0x09, 0x52, 0x0a, 0x73, 0x63, 0x72, 0x65, 0x65, 0x6e, 0x73, 0x68, 0x6f, 0x74,
	0x12, 0x1a, 0x0a, 0x08, 0x73, 0x75, 0x62, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x18, 0x0d, 0x20, 0x01,
	0x28, 0x09, 0x52, 0x08, 0x73, 0x75, 0x62, 0x74, 0x69, 0x74, 0x6c, 0x65, 0x12, 0x12, 0x0a, 0x04,
	0x66, 0x69, 0x6c, 0x65, 0x18, 0x0e, 0x20, 0x01, 0x28, 0x09, 0x52, 0x04, 0x66, 0x69, 0x6c, 0x65,
	0x12, 0x16, 0x0a, 0x06, 0x72, 0x6f, 0x74, 0x61, 0x74, 0x65, 0x18, 0x0f, 0x20, 0x01, 0x28, 0x05,
	0x52, 0x06, 0x72, 0x6f, 0x74, 0x61, 0x74, 0x65, 0x12, 0x14, 0x0a, 0x05, 0x61, 0x64, 0x64, 0x6f,
	0x6e, 0x18, 0x10, 0x20, 0x01, 0x28, 0x09, 0x52, 0x05, 0x61, 0x64, 0x64, 0x6f, 0x6e, 0x12, 0x25,
	0x0a, 0x0e, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x5f, 0x61, 0x64, 0x64, 0x72, 0x65, 0x73, 0x73,
	0x18, 0x11, 0x20, 0x01, 0x28, 0x09, 0x52, 0x0d, 0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x41, 0x64,
	0x64, 0x72, 0x65, 0x73, 0x73, 0x12, 0x12, 0x0a, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x18, 0x12, 0x20,
	0x01, 0x28, 0x05, 0x52, 0x04, 0x66, 0x6c, 0x61, 0x67, 0x12, 0x1f, 0x0a, 0x0b, 0x63, 0x72, 0x65,
	0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x13, 0x20, 0x01, 0x28, 0x03, 0x52, 0x0a,
	0x63, 0x72, 0x65, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x12, 0x1f, 0x0a, 0x0b, 0x75, 0x70,
	0x64, 0x61, 0x74, 0x65, 0x5f, 0x74, 0x69, 0x6d, 0x65, 0x18, 0x14, 0x20, 0x01, 0x28, 0x03, 0x52,
	0x0a, 0x75, 0x70, 0x64, 0x61, 0x74, 0x65, 0x54, 0x69, 0x6d, 0x65, 0x32, 0xc1, 0x01, 0x0a, 0x0e,
	0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x53, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x12, 0x3a,
	0x0a, 0x06, 0x43, 0x72, 0x65, 0x61, 0x74, 0x65, 0x12, 0x16, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69,
	0x63, 0x65, 0x73, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77,
	0x1a, 0x16, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4d, 0x65, 0x64, 0x69,
	0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x22, 0x00, 0x12, 0x37, 0x0a, 0x03, 0x47, 0x65,
	0x74, 0x12, 0x16, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4d, 0x65, 0x64,
	0x69, 0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x1a, 0x16, 0x2e, 0x73, 0x65, 0x72, 0x76,
	0x69, 0x63, 0x65, 0x73, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65,
	0x77, 0x22, 0x00, 0x12, 0x3a, 0x0a, 0x06, 0x55, 0x70, 0x64, 0x61, 0x74, 0x65, 0x12, 0x16, 0x2e,
	0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x50, 0x72,
	0x65, 0x76, 0x69, 0x65, 0x77, 0x1a, 0x16, 0x2e, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73,
	0x2e, 0x4d, 0x65, 0x64, 0x69, 0x61, 0x50, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x22, 0x00, 0x42,
	0x3c, 0x5a, 0x3a, 0x67, 0x69, 0x74, 0x68, 0x75, 0x62, 0x2e, 0x63, 0x6f, 0x6d, 0x2f, 0x7a, 0x7a,
	0x7a, 0x68, 0x72, 0x31, 0x39, 0x39, 0x30, 0x2f, 0x63, 0x6f, 0x6d, 0x6d, 0x6f, 0x6e, 0x2d, 0x67,
	0x72, 0x70, 0x63, 0x2f, 0x67, 0x6f, 0x2f, 0x73, 0x65, 0x72, 0x76, 0x69, 0x63, 0x65, 0x73, 0x2f,
	0x73, 0x74, 0x6f, 0x72, 0x65, 0x2f, 0x70, 0x72, 0x65, 0x76, 0x69, 0x65, 0x77, 0x62, 0x06, 0x70,
	0x72, 0x6f, 0x74, 0x6f, 0x33,
}

var (
	file_store_preview_proto_rawDescOnce sync.Once
	file_store_preview_proto_rawDescData = file_store_preview_proto_rawDesc
)

func file_store_preview_proto_rawDescGZIP() []byte {
	file_store_preview_proto_rawDescOnce.Do(func() {
		file_store_preview_proto_rawDescData = protoimpl.X.CompressGZIP(file_store_preview_proto_rawDescData)
	})
	return file_store_preview_proto_rawDescData
}

var file_store_preview_proto_msgTypes = make([]protoimpl.MessageInfo, 1)
var file_store_preview_proto_goTypes = []interface{}{
	(*MediaPreview)(nil), // 0: services.MediaPreview
}
var file_store_preview_proto_depIdxs = []int32{
	0, // 0: services.PreviewService.Create:input_type -> services.MediaPreview
	0, // 1: services.PreviewService.Get:input_type -> services.MediaPreview
	0, // 2: services.PreviewService.Update:input_type -> services.MediaPreview
	0, // 3: services.PreviewService.Create:output_type -> services.MediaPreview
	0, // 4: services.PreviewService.Get:output_type -> services.MediaPreview
	0, // 5: services.PreviewService.Update:output_type -> services.MediaPreview
	3, // [3:6] is the sub-list for method output_type
	0, // [0:3] is the sub-list for method input_type
	0, // [0:0] is the sub-list for extension type_name
	0, // [0:0] is the sub-list for extension extendee
	0, // [0:0] is the sub-list for field type_name
}

func init() { file_store_preview_proto_init() }
func file_store_preview_proto_init() {
	if File_store_preview_proto != nil {
		return
	}
	if !protoimpl.UnsafeEnabled {
		file_store_preview_proto_msgTypes[0].Exporter = func(v interface{}, i int) interface{} {
			switch v := v.(*MediaPreview); i {
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
			RawDescriptor: file_store_preview_proto_rawDesc,
			NumEnums:      0,
			NumMessages:   1,
			NumExtensions: 0,
			NumServices:   1,
		},
		GoTypes:           file_store_preview_proto_goTypes,
		DependencyIndexes: file_store_preview_proto_depIdxs,
		MessageInfos:      file_store_preview_proto_msgTypes,
	}.Build()
	File_store_preview_proto = out.File
	file_store_preview_proto_rawDesc = nil
	file_store_preview_proto_goTypes = nil
	file_store_preview_proto_depIdxs = nil
}
