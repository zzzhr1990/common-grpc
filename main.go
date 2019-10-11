package main

import (
	"encoding/json"
	"log"

	"github.com/zzzhr1990/common-grpc/go/services/user/info"
)

// "github.com/zzzhr1990/common-grpc/go/services/user/info"
// proto "github.com/golang/protobuf/proto"
// "encoding/json"

func main() {
	usr := &info.User{
		CreateAddr: "aaaa",
	}
	b, _ := json.Marshal(usr)
	log.Println(string(b))
}
