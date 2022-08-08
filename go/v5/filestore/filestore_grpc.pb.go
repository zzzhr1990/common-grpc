// Code generated by protoc-gen-go-grpc. DO NOT EDIT.
// versions:
// - protoc-gen-go-grpc v1.2.0
// - protoc             v3.21.4
// source: filestore/filestore.proto

package filestore

import (
	context "context"
	common "github.com/zzzhr1990/common-grpc/go/common"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
// Requires gRPC-Go v1.32.0 or later.
const _ = grpc.SupportPackageIsVersion7

// FileStoreServiceClient is the client API for FileStoreService service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type FileStoreServiceClient interface {
	Create(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	// rpc tryCreate (FileStore) returns (FileStore) {}
	// rpc batchCreate (FileStoreList) returns (FileStoreList) {}
	Get(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	Random(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	Update(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	BatchGet(ctx context.Context, in *FileStoreList, opts ...grpc.CallOption) (*FileStoreList, error)
	GetDownloadAddress(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	BatchDownloadAddress(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*FileStoreList, error)
	OnFileUpload(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error)
	CreateQuickMapping(ctx context.Context, in *QuickMapping, opts ...grpc.CallOption) (*QuickMapping, error)
	GetQuickMapping(ctx context.Context, in *QuickMapping, opts ...grpc.CallOption) (*QuickMapping, error)
	CreateSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error)
	AppendSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error)
	GetSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error)
	GetSliceIndex(ctx context.Context, in *SliceIndex, opts ...grpc.CallOption) (*SliceIndex, error)
}

type fileStoreServiceClient struct {
	cc grpc.ClientConnInterface
}

func NewFileStoreServiceClient(cc grpc.ClientConnInterface) FileStoreServiceClient {
	return &fileStoreServiceClient{cc}
}

func (c *fileStoreServiceClient) Create(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/Create", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) Get(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/Get", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) Random(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/Random", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) Update(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) BatchGet(ctx context.Context, in *FileStoreList, opts ...grpc.CallOption) (*FileStoreList, error) {
	out := new(FileStoreList)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/BatchGet", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) GetDownloadAddress(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/GetDownloadAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) BatchDownloadAddress(ctx context.Context, in *common.StringListEntity, opts ...grpc.CallOption) (*FileStoreList, error) {
	out := new(FileStoreList)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/BatchDownloadAddress", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) OnFileUpload(ctx context.Context, in *FileStore, opts ...grpc.CallOption) (*FileStore, error) {
	out := new(FileStore)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/OnFileUpload", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) CreateQuickMapping(ctx context.Context, in *QuickMapping, opts ...grpc.CallOption) (*QuickMapping, error) {
	out := new(QuickMapping)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/CreateQuickMapping", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) GetQuickMapping(ctx context.Context, in *QuickMapping, opts ...grpc.CallOption) (*QuickMapping, error) {
	out := new(QuickMapping)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/GetQuickMapping", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) CreateSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error) {
	out := new(FileSliceCollection)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/CreateSliceCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) AppendSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error) {
	out := new(FileSliceCollection)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/AppendSliceCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) GetSliceCollection(ctx context.Context, in *FileSliceCollection, opts ...grpc.CallOption) (*FileSliceCollection, error) {
	out := new(FileSliceCollection)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/GetSliceCollection", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

func (c *fileStoreServiceClient) GetSliceIndex(ctx context.Context, in *SliceIndex, opts ...grpc.CallOption) (*SliceIndex, error) {
	out := new(SliceIndex)
	err := c.cc.Invoke(ctx, "/v5.services.FileStoreService/GetSliceIndex", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// FileStoreServiceServer is the server API for FileStoreService service.
// All implementations must embed UnimplementedFileStoreServiceServer
// for forward compatibility
type FileStoreServiceServer interface {
	Create(context.Context, *FileStore) (*FileStore, error)
	// rpc tryCreate (FileStore) returns (FileStore) {}
	// rpc batchCreate (FileStoreList) returns (FileStoreList) {}
	Get(context.Context, *FileStore) (*FileStore, error)
	Random(context.Context, *FileStore) (*FileStore, error)
	Update(context.Context, *FileStore) (*FileStore, error)
	BatchGet(context.Context, *FileStoreList) (*FileStoreList, error)
	GetDownloadAddress(context.Context, *FileStore) (*FileStore, error)
	BatchDownloadAddress(context.Context, *common.StringListEntity) (*FileStoreList, error)
	OnFileUpload(context.Context, *FileStore) (*FileStore, error)
	CreateQuickMapping(context.Context, *QuickMapping) (*QuickMapping, error)
	GetQuickMapping(context.Context, *QuickMapping) (*QuickMapping, error)
	CreateSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error)
	AppendSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error)
	GetSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error)
	GetSliceIndex(context.Context, *SliceIndex) (*SliceIndex, error)
	mustEmbedUnimplementedFileStoreServiceServer()
}

// UnimplementedFileStoreServiceServer must be embedded to have forward compatible implementations.
type UnimplementedFileStoreServiceServer struct {
}

func (UnimplementedFileStoreServiceServer) Create(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Create not implemented")
}
func (UnimplementedFileStoreServiceServer) Get(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Get not implemented")
}
func (UnimplementedFileStoreServiceServer) Random(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Random not implemented")
}
func (UnimplementedFileStoreServiceServer) Update(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedFileStoreServiceServer) BatchGet(context.Context, *FileStoreList) (*FileStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchGet not implemented")
}
func (UnimplementedFileStoreServiceServer) GetDownloadAddress(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetDownloadAddress not implemented")
}
func (UnimplementedFileStoreServiceServer) BatchDownloadAddress(context.Context, *common.StringListEntity) (*FileStoreList, error) {
	return nil, status.Errorf(codes.Unimplemented, "method BatchDownloadAddress not implemented")
}
func (UnimplementedFileStoreServiceServer) OnFileUpload(context.Context, *FileStore) (*FileStore, error) {
	return nil, status.Errorf(codes.Unimplemented, "method OnFileUpload not implemented")
}
func (UnimplementedFileStoreServiceServer) CreateQuickMapping(context.Context, *QuickMapping) (*QuickMapping, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateQuickMapping not implemented")
}
func (UnimplementedFileStoreServiceServer) GetQuickMapping(context.Context, *QuickMapping) (*QuickMapping, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetQuickMapping not implemented")
}
func (UnimplementedFileStoreServiceServer) CreateSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method CreateSliceCollection not implemented")
}
func (UnimplementedFileStoreServiceServer) AppendSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method AppendSliceCollection not implemented")
}
func (UnimplementedFileStoreServiceServer) GetSliceCollection(context.Context, *FileSliceCollection) (*FileSliceCollection, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSliceCollection not implemented")
}
func (UnimplementedFileStoreServiceServer) GetSliceIndex(context.Context, *SliceIndex) (*SliceIndex, error) {
	return nil, status.Errorf(codes.Unimplemented, "method GetSliceIndex not implemented")
}
func (UnimplementedFileStoreServiceServer) mustEmbedUnimplementedFileStoreServiceServer() {}

// UnsafeFileStoreServiceServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to FileStoreServiceServer will
// result in compilation errors.
type UnsafeFileStoreServiceServer interface {
	mustEmbedUnimplementedFileStoreServiceServer()
}

func RegisterFileStoreServiceServer(s grpc.ServiceRegistrar, srv FileStoreServiceServer) {
	s.RegisterService(&FileStoreService_ServiceDesc, srv)
}

func _FileStoreService_Create_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).Create(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/Create",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).Create(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_Get_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).Get(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/Get",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).Get(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_Random_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).Random(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/Random",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).Random(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).Update(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_BatchGet_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStoreList)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).BatchGet(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/BatchGet",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).BatchGet(ctx, req.(*FileStoreList))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_GetDownloadAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).GetDownloadAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/GetDownloadAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).GetDownloadAddress(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_BatchDownloadAddress_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(common.StringListEntity)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).BatchDownloadAddress(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/BatchDownloadAddress",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).BatchDownloadAddress(ctx, req.(*common.StringListEntity))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_OnFileUpload_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileStore)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).OnFileUpload(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/OnFileUpload",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).OnFileUpload(ctx, req.(*FileStore))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_CreateQuickMapping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuickMapping)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).CreateQuickMapping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/CreateQuickMapping",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).CreateQuickMapping(ctx, req.(*QuickMapping))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_GetQuickMapping_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(QuickMapping)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).GetQuickMapping(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/GetQuickMapping",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).GetQuickMapping(ctx, req.(*QuickMapping))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_CreateSliceCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileSliceCollection)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).CreateSliceCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/CreateSliceCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).CreateSliceCollection(ctx, req.(*FileSliceCollection))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_AppendSliceCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileSliceCollection)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).AppendSliceCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/AppendSliceCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).AppendSliceCollection(ctx, req.(*FileSliceCollection))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_GetSliceCollection_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(FileSliceCollection)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).GetSliceCollection(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/GetSliceCollection",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).GetSliceCollection(ctx, req.(*FileSliceCollection))
	}
	return interceptor(ctx, in, info, handler)
}

func _FileStoreService_GetSliceIndex_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(SliceIndex)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(FileStoreServiceServer).GetSliceIndex(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/v5.services.FileStoreService/GetSliceIndex",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(FileStoreServiceServer).GetSliceIndex(ctx, req.(*SliceIndex))
	}
	return interceptor(ctx, in, info, handler)
}

// FileStoreService_ServiceDesc is the grpc.ServiceDesc for FileStoreService service.
// It's only intended for direct use with grpc.RegisterService,
// and not to be introspected or modified (even as a copy)
var FileStoreService_ServiceDesc = grpc.ServiceDesc{
	ServiceName: "v5.services.FileStoreService",
	HandlerType: (*FileStoreServiceServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Create",
			Handler:    _FileStoreService_Create_Handler,
		},
		{
			MethodName: "Get",
			Handler:    _FileStoreService_Get_Handler,
		},
		{
			MethodName: "Random",
			Handler:    _FileStoreService_Random_Handler,
		},
		{
			MethodName: "Update",
			Handler:    _FileStoreService_Update_Handler,
		},
		{
			MethodName: "BatchGet",
			Handler:    _FileStoreService_BatchGet_Handler,
		},
		{
			MethodName: "GetDownloadAddress",
			Handler:    _FileStoreService_GetDownloadAddress_Handler,
		},
		{
			MethodName: "BatchDownloadAddress",
			Handler:    _FileStoreService_BatchDownloadAddress_Handler,
		},
		{
			MethodName: "OnFileUpload",
			Handler:    _FileStoreService_OnFileUpload_Handler,
		},
		{
			MethodName: "CreateQuickMapping",
			Handler:    _FileStoreService_CreateQuickMapping_Handler,
		},
		{
			MethodName: "GetQuickMapping",
			Handler:    _FileStoreService_GetQuickMapping_Handler,
		},
		{
			MethodName: "CreateSliceCollection",
			Handler:    _FileStoreService_CreateSliceCollection_Handler,
		},
		{
			MethodName: "AppendSliceCollection",
			Handler:    _FileStoreService_AppendSliceCollection_Handler,
		},
		{
			MethodName: "GetSliceCollection",
			Handler:    _FileStoreService_GetSliceCollection_Handler,
		},
		{
			MethodName: "GetSliceIndex",
			Handler:    _FileStoreService_GetSliceIndex_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "filestore/filestore.proto",
}
