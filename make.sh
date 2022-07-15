#!/bin/bash
# go get -u github.com/golang/protobuf/protoc-gen-go
go get -u google.golang.org/protobuf/cmd/protoc-gen-go
go get -u google.golang.org/grpc/cmd/protoc-gen-go-grpc
go install google.golang.org/protobuf/cmd/protoc-gen-go
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc
GOPATH=$(go env GOPATH)
export PATH=$PATH:$GOPATH/bin
# export PATH="$PATH:$(go env GOPATH)/bin"
# nodejs_path="/Users/herui/vscode/typescript/ts-api-gateway/src/proto"
#
# protoc -I ../def --go_out=plugins=grpc:../go ../def/helloworld.proto
# -I ../common
DIRS=("common" "task" "filestore" "offline" "system")


rm -rf ./go_temp
mkdir ./go_temp
###for(( i=0;i<${#DIRS[@]};i++)) 
###do
###    name=${DIRS[i]}
###    rm -rf ./ts-api-define/${name}
###done
###cd ./ts-api-define
# npm init --silent -y --save
# npm install ts-protoc-gen --save
# npm install grpc --save
# npm install
OUT_DIR=`pwd`
###cd ..
###PROTOC_GEN_TS_PATH=${OUT_DIR}/node_modules/.bin/protoc-gen-ts
###PROTOC_GEN_GRPC_PATH=${OUT_DIR}/node_modules/.bin/grpc_tools_node_protoc_plugin
###echo ${PROTOC_GEN_TS_PATH}

function makeFile(){
    file=$1
    echo "Generate: ${file}"
    protoc --go_out=./go_temp --go-grpc_out=./go_temp ${file}
    # protoc --go_out=./go_temp --go-grpc_out=./go_temp --go_opt=paths=source_relative --go-grpc_opt=paths=source_relative ${file}
    # protoc --go_out=. --go_opt=paths=
    # protoc --go-grpc_out=./go_temp ${file}
    # protoc --go_out=./go_temp ${file}
###    protoc --plugin=protoc-gen-grpc=${PROTOC_GEN_GRPC_PATH}  --js_out="import_style=commonjs,binary:${OUT_DIR}" --grpc_out=grpc_js:"${OUT_DIR}" ${file}
###    protoc --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" --ts_out="generate_package_definition:${OUT_DIR}" ${file}
}


# for name in ${DIRS}
for(( i=0;i<${#DIRS[@]};i++)) 
do
    name=${DIRS[i]}
    echo "Generate from: ${name}"
    for file in ./${name}/*.proto   
    do
        makeFile $file
    done
done


echo "Clean Go Files"
rm -rf ./go
cp -r ./go_temp/github.com/zzzhr1990/common-grpc/go ./
rm -rf ./go_temp
cd ./go
# cp ../main.go ./
go mod init github.com/zzzhr1990/common-grpc/go
# go get google.golang.org/grpc
go get
# go get github.com/golang/protobuf@master
go mod tidy
cd ..

# echo "Copy JavaScript Files"
# rm -rf ${nodejs_path}
# mkdir ${nodejs_path}
# cp -r ./user ${nodejs_path}
# cp -r ./store ${nodejs_path}
# cp -r ./file ${nodejs_path}
# cp -r ./common ${nodejs_path}
# cp -r ./remotetask ${nodejs_path}
# cp -r ./offline ${nodejs_path}
# cp -r ./share ${nodejs_path}
# cp -r ./ext ${nodejs_path}
# cp -r ./report ${nodejs_path}

#rm -rf ./temp
#mkdir ./temp
#cd ./temp
#git clone https://github.com/zzzhr1990/ts-api-define.git
#cd ./ts-api-define
#cp -R ../../ts-api-define/* ./
#rm -rf ./node_modules
git add .
git commit -m "Auto commit"
git push
cd ../..
echo "Done at:"`pwd`