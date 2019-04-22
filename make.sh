#!/bin/bash
GOPATH="/Users/zzzhr/go"
export PATH=$PATH:$GOPATH/bin
nodejs_path="/Users/zzzhr/vscode/typescript/ts-api-gateway/src/proto"
#
# protoc -I ../def --go_out=plugins=grpc:../go ../def/helloworld.proto
# -I ../common
rm -rf ./go_temp
mkdir ./go_temp
for file in ./common/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done

echo "Generate User files from ./user"
for file in ./user/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done

echo "Generate User files from ./user"
for file in ./util/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done
for file in ./store/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done
for file in ./file/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done
for file in ./remotetask/*.proto
do
    echo ${file}
    protoc --go_out=plugins=grpc:./go_temp ${file}
done

echo "Clean Go Files"
rm -rf ./go
cp -r ./go_temp/github.com/zzzhr1990/common-grpc/go ./
rm -rf ./go_temp
cd ./go
cp ../main.go ./
go mod init github.com/zzzhr1990/common-grpc/go
# go get github.com/golang/protobuf@master
# go mod tidy
cd ..

echo "Copy JavaScript Files"
rm -rf ${nodejs_path}
mkdir ${nodejs_path}
cp -r ./user ${nodejs_path}
cp -r ./store ${nodejs_path}
cp -r ./file ${nodejs_path}
cp -r ./common ${nodejs_path}