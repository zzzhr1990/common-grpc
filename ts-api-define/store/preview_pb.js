// source: store/preview.proto
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

goog.exportSymbol('proto.services.MediaPreview', null, global);
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
proto.services.MediaPreview = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.services.MediaPreview, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.services.MediaPreview.displayName = 'proto.services.MediaPreview';
}



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
proto.services.MediaPreview.prototype.toObject = function(opt_includeInstance) {
  return proto.services.MediaPreview.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.services.MediaPreview} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.MediaPreview.toObject = function(includeInstance, msg) {
  var f, obj = {
    hash: jspb.Message.getFieldWithDefault(msg, 1, ""),
    type: jspb.Message.getFieldWithDefault(msg, 2, 0),
    status: jspb.Message.getFieldWithDefault(msg, 3, 0),
    title: jspb.Message.getFieldWithDefault(msg, 4, ""),
    duration: jspb.Message.getFieldWithDefault(msg, 5, 0),
    width: jspb.Message.getFieldWithDefault(msg, 6, 0),
    height: jspb.Message.getFieldWithDefault(msg, 7, 0),
    sourceWidth: jspb.Message.getFieldWithDefault(msg, 8, 0),
    sourceHeight: jspb.Message.getFieldWithDefault(msg, 9, 0),
    accessCode: jspb.Message.getFieldWithDefault(msg, 10, ""),
    accessAddress: jspb.Message.getFieldWithDefault(msg, 11, ""),
    screenshot: jspb.Message.getFieldWithDefault(msg, 12, ""),
    subtitle: jspb.Message.getFieldWithDefault(msg, 13, ""),
    file: jspb.Message.getFieldWithDefault(msg, 14, ""),
    rotate: jspb.Message.getFieldWithDefault(msg, 15, 0),
    addon: jspb.Message.getFieldWithDefault(msg, 16, ""),
    createAddress: jspb.Message.getFieldWithDefault(msg, 17, ""),
    flag: jspb.Message.getFieldWithDefault(msg, 18, 0),
    createTime: jspb.Message.getFieldWithDefault(msg, 19, 0),
    updateTime: jspb.Message.getFieldWithDefault(msg, 20, 0)
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
 * @return {!proto.services.MediaPreview}
 */
proto.services.MediaPreview.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.services.MediaPreview;
  return proto.services.MediaPreview.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.services.MediaPreview} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.services.MediaPreview}
 */
proto.services.MediaPreview.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setHash(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setType(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setStatus(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTitle(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setDuration(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWidth(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setHeight(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceWidth(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSourceHeight(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessCode(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setAccessAddress(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setScreenshot(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubtitle(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setFile(value);
      break;
    case 15:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRotate(value);
      break;
    case 16:
      var value = /** @type {string} */ (reader.readString());
      msg.setAddon(value);
      break;
    case 17:
      var value = /** @type {string} */ (reader.readString());
      msg.setCreateAddress(value);
      break;
    case 18:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setFlag(value);
      break;
    case 19:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreateTime(value);
      break;
    case 20:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdateTime(value);
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
proto.services.MediaPreview.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.services.MediaPreview.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.services.MediaPreview} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.services.MediaPreview.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getHash();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getType();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getStatus();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getTitle();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDuration();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getSourceWidth();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getSourceHeight();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getAccessCode();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getAccessAddress();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getScreenshot();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getSubtitle();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getFile();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getRotate();
  if (f !== 0) {
    writer.writeInt32(
      15,
      f
    );
  }
  f = message.getAddon();
  if (f.length > 0) {
    writer.writeString(
      16,
      f
    );
  }
  f = message.getCreateAddress();
  if (f.length > 0) {
    writer.writeString(
      17,
      f
    );
  }
  f = message.getFlag();
  if (f !== 0) {
    writer.writeInt32(
      18,
      f
    );
  }
  f = message.getCreateTime();
  if (f !== 0) {
    writer.writeInt64(
      19,
      f
    );
  }
  f = message.getUpdateTime();
  if (f !== 0) {
    writer.writeInt64(
      20,
      f
    );
  }
};


/**
 * optional string hash = 1;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getHash = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setHash = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 type = 2;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getType = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setType = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional int32 status = 3;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getStatus = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setStatus = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string title = 4;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setTitle = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int64 duration = 5;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getDuration = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setDuration = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 width = 6;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional int32 height = 7;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional int32 source_width = 8;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getSourceWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setSourceWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional int32 source_height = 9;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getSourceHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setSourceHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string access_code = 10;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getAccessCode = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setAccessCode = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string access_address = 11;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getAccessAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setAccessAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string screenshot = 12;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getScreenshot = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setScreenshot = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string subtitle = 13;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getSubtitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setSubtitle = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string file = 14;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getFile = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setFile = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional int32 rotate = 15;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getRotate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setRotate = function(value) {
  return jspb.Message.setProto3IntField(this, 15, value);
};


/**
 * optional string addon = 16;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getAddon = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 16, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setAddon = function(value) {
  return jspb.Message.setProto3StringField(this, 16, value);
};


/**
 * optional string create_address = 17;
 * @return {string}
 */
proto.services.MediaPreview.prototype.getCreateAddress = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 17, ""));
};


/**
 * @param {string} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setCreateAddress = function(value) {
  return jspb.Message.setProto3StringField(this, 17, value);
};


/**
 * optional int32 flag = 18;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getFlag = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 18, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setFlag = function(value) {
  return jspb.Message.setProto3IntField(this, 18, value);
};


/**
 * optional int64 create_time = 19;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getCreateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 19, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setCreateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 19, value);
};


/**
 * optional int64 update_time = 20;
 * @return {number}
 */
proto.services.MediaPreview.prototype.getUpdateTime = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 20, 0));
};


/**
 * @param {number} value
 * @return {!proto.services.MediaPreview} returns this
 */
proto.services.MediaPreview.prototype.setUpdateTime = function(value) {
  return jspb.Message.setProto3IntField(this, 20, value);
};


goog.object.extend(exports, proto.services);