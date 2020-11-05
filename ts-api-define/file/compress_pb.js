// source: file/compress.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

goog.exportSymbol('proto.services.CreateZipDownloadRequest', null, global);
goog.exportSymbol('proto.services.SimpleFile', null, global);
goog.exportSymbol('proto.services.ZipDownloadDetail', null, global);
goog.exportSymbol('proto.services.ZipDownloadInfo', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.CreateZipDownloadRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.CreateZipDownloadRequest.repeatedFields_, null);
};
goog.inherits(proto.services.CreateZipDownloadRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.CreateZipDownloadRequest.displayName = 'proto.services.CreateZipDownloadRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.ZipDownloadInfo = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.ZipDownloadInfo, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.ZipDownloadInfo.displayName = 'proto.services.ZipDownloadInfo';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.ZipDownloadDetail = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.services.ZipDownloadDetail.repeatedFields_, null);
};
goog.inherits(proto.services.ZipDownloadDetail, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.ZipDownloadDetail.displayName = 'proto.services.ZipDownloadDetail';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.services.SimpleFile = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.SimpleFile, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.SimpleFile.displayName = 'proto.services.SimpleFile';
}

/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.CreateZipDownloadRequest.repeatedFields_ = [1,2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.CreateZipDownloadRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.services.CreateZipDownloadRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.CreateZipDownloadRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CreateZipDownloadRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    identityList: (f = jspb.Message.getRepeatedField(msg, 1)) == null ? undefined : f,
    pathList: (f = jspb.Message.getRepeatedField(msg, 2)) == null ? undefined : f,
    userIdentity: jspb.Message.getFieldWithDefault(msg, 3, 0),
    password: jspb.Message.getFieldWithDefault(msg, 4, ""),
    op: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.CreateZipDownloadRequest}
 */
proto.services.CreateZipDownloadRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.CreateZipDownloadRequest;
  return proto.services.CreateZipDownloadRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.CreateZipDownloadRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.CreateZipDownloadRequest}
 */
proto.services.CreateZipDownloadRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.addIdentity(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.addPath(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserIdentity(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPassword(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setOp(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.CreateZipDownloadRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.CreateZipDownloadRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.CreateZipDownloadRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.CreateZipDownloadRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentityList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      1,
      f
    );
  }
  f = message.getPathList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      2,
      f
    );
  }
  f = message.getUserIdentity();
  if (f !== 0) {
    writer.writeInt64(
      3,
      f
    );
  }
  f = message.getPassword();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getOp();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * repeated string identity = 1;
 * @return {!Array<string>}
 */
proto.services.CreateZipDownloadRequest.prototype.getIdentityList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 1));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.setIdentityList = function(value) {
  return jspb.Message.setField(this, 1, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.addIdentity = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 1, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.clearIdentityList = function() {
  return this.setIdentityList([]);
};


/**
 * repeated string path = 2;
 * @return {!Array<string>}
 */
proto.services.CreateZipDownloadRequest.prototype.getPathList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 2));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.setPathList = function(value) {
  return jspb.Message.setField(this, 2, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.addPath = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 2, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.clearPathList = function() {
  return this.setPathList([]);
};


/**
 * optional int64 user_identity = 3;
 * @return {number}
 */
proto.services.CreateZipDownloadRequest.prototype.getUserIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.setUserIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string password = 4;
 * @return {string}
 */
proto.services.CreateZipDownloadRequest.prototype.getPassword = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.setPassword = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 op = 5;
 * @return {number}
 */
proto.services.CreateZipDownloadRequest.prototype.getOp = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.CreateZipDownloadRequest} returns this
 */
proto.services.CreateZipDownloadRequest.prototype.setOp = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.ZipDownloadInfo.prototype.toObject = function(opt_includeInstance) {
  return proto.services.ZipDownloadInfo.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.ZipDownloadInfo} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.ZipDownloadInfo.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdentity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, ""),
    downloadAddress: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.ZipDownloadInfo}
 */
proto.services.ZipDownloadInfo.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.ZipDownloadInfo;
  return proto.services.ZipDownloadInfo.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.ZipDownloadInfo} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.ZipDownloadInfo}
 */
proto.services.ZipDownloadInfo.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserIdentity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDownloadAddress(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.ZipDownloadInfo.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.ZipDownloadInfo.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.ZipDownloadInfo} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.ZipDownloadInfo.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdentity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDownloadAddress();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string identity = 1;
 * @return {string}
 */
proto.services.ZipDownloadInfo.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadInfo} returns this
 */
proto.services.ZipDownloadInfo.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 user_identity = 2;
 * @return {number}
 */
proto.services.ZipDownloadInfo.prototype.getUserIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.ZipDownloadInfo} returns this
 */
proto.services.ZipDownloadInfo.prototype.setUserIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string count = 3;
 * @return {string}
 */
proto.services.ZipDownloadInfo.prototype.getCount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadInfo} returns this
 */
proto.services.ZipDownloadInfo.prototype.setCount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string size = 4;
 * @return {string}
 */
proto.services.ZipDownloadInfo.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadInfo} returns this
 */
proto.services.ZipDownloadInfo.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string download_address = 5;
 * @return {string}
 */
proto.services.ZipDownloadInfo.prototype.getDownloadAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadInfo} returns this
 */
proto.services.ZipDownloadInfo.prototype.setDownloadAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.services.ZipDownloadDetail.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.ZipDownloadDetail.prototype.toObject = function(opt_includeInstance) {
  return proto.services.ZipDownloadDetail.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.ZipDownloadDetail} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.ZipDownloadDetail.toObject = function(includeInstance, msg) {
  var f, obj = {
    identity: jspb.Message.getFieldWithDefault(msg, 1, ""),
    userIdentity: jspb.Message.getFieldWithDefault(msg, 2, 0),
    count: jspb.Message.getFieldWithDefault(msg, 3, ""),
    size: jspb.Message.getFieldWithDefault(msg, 4, ""),
    dataList: jspb.Message.toObjectList(msg.getDataList(),
    proto.services.SimpleFile.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.ZipDownloadDetail}
 */
proto.services.ZipDownloadDetail.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.ZipDownloadDetail;
  return proto.services.ZipDownloadDetail.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.ZipDownloadDetail} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.ZipDownloadDetail}
 */
proto.services.ZipDownloadDetail.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setIdentity(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUserIdentity(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setCount(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSize(value);
      break;
    case 5:
      var value = new proto.services.SimpleFile;
      reader.readMessage(value,proto.services.SimpleFile.deserializeBinaryFromReader);
      msg.addData(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.ZipDownloadDetail.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.ZipDownloadDetail.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.ZipDownloadDetail} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.ZipDownloadDetail.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getIdentity();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getUserIdentity();
  if (f !== 0) {
    writer.writeInt64(
      2,
      f
    );
  }
  f = message.getCount();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSize();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDataList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.services.SimpleFile.serializeBinaryToWriter
    );
  }
};


/**
 * optional string identity = 1;
 * @return {string}
 */
proto.services.ZipDownloadDetail.prototype.getIdentity = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadDetail} returns this
 */
proto.services.ZipDownloadDetail.prototype.setIdentity = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int64 user_identity = 2;
 * @return {number}
 */
proto.services.ZipDownloadDetail.prototype.getUserIdentity = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.ZipDownloadDetail} returns this
 */
proto.services.ZipDownloadDetail.prototype.setUserIdentity = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string count = 3;
 * @return {string}
 */
proto.services.ZipDownloadDetail.prototype.getCount = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadDetail} returns this
 */
proto.services.ZipDownloadDetail.prototype.setCount = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string size = 4;
 * @return {string}
 */
proto.services.ZipDownloadDetail.prototype.getSize = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.ZipDownloadDetail} returns this
 */
proto.services.ZipDownloadDetail.prototype.setSize = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated SimpleFile data = 5;
 * @return {!Array<!proto.services.SimpleFile>}
 */
proto.services.ZipDownloadDetail.prototype.getDataList = function() {
  return /** @type{!Array<!proto.services.SimpleFile>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.services.SimpleFile, 5));
};


/**
 * @param {!Array<!proto.services.SimpleFile>} value
 * @return {!proto.services.ZipDownloadDetail} returns this
*/
proto.services.ZipDownloadDetail.prototype.setDataList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.services.SimpleFile=} opt_value
 * @param {number=} opt_index
 * @return {!proto.services.SimpleFile}
 */
proto.services.ZipDownloadDetail.prototype.addData = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.services.SimpleFile, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.services.ZipDownloadDetail} returns this
 */
proto.services.ZipDownloadDetail.prototype.clearDataList = function() {
  return this.setDataList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.services.SimpleFile.prototype.toObject = function(opt_includeInstance) {
  return proto.services.SimpleFile.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.SimpleFile} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.SimpleFile.toObject = function(includeInstance, msg) {
  var f, obj = {
    path: jspb.Message.getFieldWithDefault(msg, 2, ""),
    directory: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    hash: jspb.Message.getFieldWithDefault(msg, 4, ""),
    size: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.services.SimpleFile}
 */
proto.services.SimpleFile.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.SimpleFile;
  return proto.services.SimpleFile.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.SimpleFile} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.SimpleFile}
 */
proto.services.SimpleFile.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setPath(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setDirectory(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setSize(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.services.SimpleFile.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.SimpleFile.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.SimpleFile} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.SimpleFile.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPath();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDirectory();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSize();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
};


/**
 * optional string path = 2;
 * @return {string}
 */
proto.services.SimpleFile.prototype.getPath = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.SimpleFile} returns this
 */
proto.services.SimpleFile.prototype.setPath = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool directory = 3;
 * @return {boolean}
 */
proto.services.SimpleFile.prototype.getDirectory = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.services.SimpleFile} returns this
 */
proto.services.SimpleFile.prototype.setDirectory = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string hash = 4;
 * @return {string}
 */
proto.services.SimpleFile.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.SimpleFile} returns this
 */
proto.services.SimpleFile.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 size = 5;
 * @return {number}
 */
proto.services.SimpleFile.prototype.getSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.SimpleFile} returns this
 */
proto.services.SimpleFile.prototype.setSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


goog.object.extend(exports, proto.services);
