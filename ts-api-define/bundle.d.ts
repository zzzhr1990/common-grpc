import * as $protobuf from "protobufjs";
/** Namespace services. */
export namespace services {

    /** Properties of a BoolEntity. */
    interface IBoolEntity {

        /** BoolEntity data */
        data?: (boolean|null);
    }

    /** Represents a BoolEntity. */
    class BoolEntity implements IBoolEntity {

        /**
         * Constructs a new BoolEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IBoolEntity);

        /** BoolEntity data. */
        public data: boolean;

        /**
         * Creates a new BoolEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BoolEntity instance
         */
        public static create(properties?: services.IBoolEntity): services.BoolEntity;

        /**
         * Encodes the specified BoolEntity message. Does not implicitly {@link services.BoolEntity.verify|verify} messages.
         * @param message BoolEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IBoolEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BoolEntity message, length delimited. Does not implicitly {@link services.BoolEntity.verify|verify} messages.
         * @param message BoolEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IBoolEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoolEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BoolEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.BoolEntity;

        /**
         * Decodes a BoolEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BoolEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.BoolEntity;

        /**
         * Verifies a BoolEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BoolEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BoolEntity
         */
        public static fromObject(object: { [k: string]: any }): services.BoolEntity;

        /**
         * Creates a plain object from a BoolEntity message. Also converts values to other types if specified.
         * @param message BoolEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.BoolEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BoolEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an OrderByRequest. */
    interface IOrderByRequest {

        /** OrderByRequest name */
        name?: (string|null);

        /** OrderByRequest asc */
        asc?: (boolean|null);
    }

    /** Represents an OrderByRequest. */
    class OrderByRequest implements IOrderByRequest {

        /**
         * Constructs a new OrderByRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IOrderByRequest);

        /** OrderByRequest name. */
        public name: string;

        /** OrderByRequest asc. */
        public asc: boolean;

        /**
         * Creates a new OrderByRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns OrderByRequest instance
         */
        public static create(properties?: services.IOrderByRequest): services.OrderByRequest;

        /**
         * Encodes the specified OrderByRequest message. Does not implicitly {@link services.OrderByRequest.verify|verify} messages.
         * @param message OrderByRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IOrderByRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified OrderByRequest message, length delimited. Does not implicitly {@link services.OrderByRequest.verify|verify} messages.
         * @param message OrderByRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IOrderByRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OrderByRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns OrderByRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.OrderByRequest;

        /**
         * Decodes an OrderByRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns OrderByRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.OrderByRequest;

        /**
         * Verifies an OrderByRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an OrderByRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns OrderByRequest
         */
        public static fromObject(object: { [k: string]: any }): services.OrderByRequest;

        /**
         * Creates a plain object from an OrderByRequest message. Also converts values to other types if specified.
         * @param message OrderByRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.OrderByRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this OrderByRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a PageInfo. */
    interface IPageInfo {

        /** PageInfo page */
        page?: (number|Long|null);

        /** PageInfo pageSize */
        pageSize?: (number|Long|null);

        /** PageInfo totalPage */
        totalPage?: (number|Long|null);

        /** PageInfo totalRecord */
        totalRecord?: (number|Long|null);
    }

    /** Represents a PageInfo. */
    class PageInfo implements IPageInfo {

        /**
         * Constructs a new PageInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IPageInfo);

        /** PageInfo page. */
        public page: (number|Long);

        /** PageInfo pageSize. */
        public pageSize: (number|Long);

        /** PageInfo totalPage. */
        public totalPage: (number|Long);

        /** PageInfo totalRecord. */
        public totalRecord: (number|Long);

        /**
         * Creates a new PageInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns PageInfo instance
         */
        public static create(properties?: services.IPageInfo): services.PageInfo;

        /**
         * Encodes the specified PageInfo message. Does not implicitly {@link services.PageInfo.verify|verify} messages.
         * @param message PageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified PageInfo message, length delimited. Does not implicitly {@link services.PageInfo.verify|verify} messages.
         * @param message PageInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IPageInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PageInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns PageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.PageInfo;

        /**
         * Decodes a PageInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns PageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.PageInfo;

        /**
         * Verifies a PageInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a PageInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns PageInfo
         */
        public static fromObject(object: { [k: string]: any }): services.PageInfo;

        /**
         * Creates a plain object from a PageInfo message. Also converts values to other types if specified.
         * @param message PageInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.PageInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this PageInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a ListInfo. */
    interface IListInfo {

        /** ListInfo start */
        start?: (number|Long|null);

        /** ListInfo limit */
        limit?: (number|Long|null);
    }

    /** Represents a ListInfo. */
    class ListInfo implements IListInfo {

        /**
         * Constructs a new ListInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IListInfo);

        /** ListInfo start. */
        public start: (number|Long);

        /** ListInfo limit. */
        public limit: (number|Long);

        /**
         * Creates a new ListInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns ListInfo instance
         */
        public static create(properties?: services.IListInfo): services.ListInfo;

        /**
         * Encodes the specified ListInfo message. Does not implicitly {@link services.ListInfo.verify|verify} messages.
         * @param message ListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified ListInfo message, length delimited. Does not implicitly {@link services.ListInfo.verify|verify} messages.
         * @param message ListInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IListInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ListInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns ListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.ListInfo;

        /**
         * Decodes a ListInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns ListInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.ListInfo;

        /**
         * Verifies a ListInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a ListInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns ListInfo
         */
        public static fromObject(object: { [k: string]: any }): services.ListInfo;

        /**
         * Creates a plain object from a ListInfo message. Also converts values to other types if specified.
         * @param message ListInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.ListInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this ListInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringEntity. */
    interface IStringEntity {

        /** StringEntity data */
        data?: (string|null);
    }

    /** Represents a StringEntity. */
    class StringEntity implements IStringEntity {

        /**
         * Constructs a new StringEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IStringEntity);

        /** StringEntity data. */
        public data: string;

        /**
         * Creates a new StringEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringEntity instance
         */
        public static create(properties?: services.IStringEntity): services.StringEntity;

        /**
         * Encodes the specified StringEntity message. Does not implicitly {@link services.StringEntity.verify|verify} messages.
         * @param message StringEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IStringEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringEntity message, length delimited. Does not implicitly {@link services.StringEntity.verify|verify} messages.
         * @param message StringEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IStringEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.StringEntity;

        /**
         * Decodes a StringEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.StringEntity;

        /**
         * Verifies a StringEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringEntity
         */
        public static fromObject(object: { [k: string]: any }): services.StringEntity;

        /**
         * Creates a plain object from a StringEntity message. Also converts values to other types if specified.
         * @param message StringEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.StringEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a StringListEntity. */
    interface IStringListEntity {

        /** StringListEntity data */
        data?: (string[]|null);
    }

    /** Represents a StringListEntity. */
    class StringListEntity implements IStringListEntity {

        /**
         * Constructs a new StringListEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IStringListEntity);

        /** StringListEntity data. */
        public data: string[];

        /**
         * Creates a new StringListEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns StringListEntity instance
         */
        public static create(properties?: services.IStringListEntity): services.StringListEntity;

        /**
         * Encodes the specified StringListEntity message. Does not implicitly {@link services.StringListEntity.verify|verify} messages.
         * @param message StringListEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IStringListEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified StringListEntity message, length delimited. Does not implicitly {@link services.StringListEntity.verify|verify} messages.
         * @param message StringListEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IStringListEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StringListEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns StringListEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.StringListEntity;

        /**
         * Decodes a StringListEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns StringListEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.StringListEntity;

        /**
         * Verifies a StringListEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a StringListEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns StringListEntity
         */
        public static fromObject(object: { [k: string]: any }): services.StringListEntity;

        /**
         * Creates a plain object from a StringListEntity message. Also converts values to other types if specified.
         * @param message StringListEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.StringListEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this StringListEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Int32Entity. */
    interface IInt32Entity {

        /** Int32Entity data */
        data?: (number|null);
    }

    /** Represents an Int32Entity. */
    class Int32Entity implements IInt32Entity {

        /**
         * Constructs a new Int32Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IInt32Entity);

        /** Int32Entity data. */
        public data: number;

        /**
         * Creates a new Int32Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int32Entity instance
         */
        public static create(properties?: services.IInt32Entity): services.Int32Entity;

        /**
         * Encodes the specified Int32Entity message. Does not implicitly {@link services.Int32Entity.verify|verify} messages.
         * @param message Int32Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IInt32Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Int32Entity message, length delimited. Does not implicitly {@link services.Int32Entity.verify|verify} messages.
         * @param message Int32Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IInt32Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Int32Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int32Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.Int32Entity;

        /**
         * Decodes an Int32Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Int32Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.Int32Entity;

        /**
         * Verifies an Int32Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Int32Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Int32Entity
         */
        public static fromObject(object: { [k: string]: any }): services.Int32Entity;

        /**
         * Creates a plain object from an Int32Entity message. Also converts values to other types if specified.
         * @param message Int32Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.Int32Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Int32Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Int32ListEntity. */
    interface IInt32ListEntity {

        /** Int32ListEntity data */
        data?: (number[]|null);
    }

    /** Represents an Int32ListEntity. */
    class Int32ListEntity implements IInt32ListEntity {

        /**
         * Constructs a new Int32ListEntity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IInt32ListEntity);

        /** Int32ListEntity data. */
        public data: number[];

        /**
         * Creates a new Int32ListEntity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int32ListEntity instance
         */
        public static create(properties?: services.IInt32ListEntity): services.Int32ListEntity;

        /**
         * Encodes the specified Int32ListEntity message. Does not implicitly {@link services.Int32ListEntity.verify|verify} messages.
         * @param message Int32ListEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IInt32ListEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Int32ListEntity message, length delimited. Does not implicitly {@link services.Int32ListEntity.verify|verify} messages.
         * @param message Int32ListEntity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IInt32ListEntity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Int32ListEntity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int32ListEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.Int32ListEntity;

        /**
         * Decodes an Int32ListEntity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Int32ListEntity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.Int32ListEntity;

        /**
         * Verifies an Int32ListEntity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Int32ListEntity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Int32ListEntity
         */
        public static fromObject(object: { [k: string]: any }): services.Int32ListEntity;

        /**
         * Creates a plain object from an Int32ListEntity message. Also converts values to other types if specified.
         * @param message Int32ListEntity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.Int32ListEntity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Int32ListEntity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Int64Entity. */
    interface IInt64Entity {

        /** Int64Entity data */
        data?: (number|Long|null);
    }

    /** Represents an Int64Entity. */
    class Int64Entity implements IInt64Entity {

        /**
         * Constructs a new Int64Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IInt64Entity);

        /** Int64Entity data. */
        public data: (number|Long);

        /**
         * Creates a new Int64Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Int64Entity instance
         */
        public static create(properties?: services.IInt64Entity): services.Int64Entity;

        /**
         * Encodes the specified Int64Entity message. Does not implicitly {@link services.Int64Entity.verify|verify} messages.
         * @param message Int64Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IInt64Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Int64Entity message, length delimited. Does not implicitly {@link services.Int64Entity.verify|verify} messages.
         * @param message Int64Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IInt64Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Int64Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Int64Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.Int64Entity;

        /**
         * Decodes an Int64Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Int64Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.Int64Entity;

        /**
         * Verifies an Int64Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Int64Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Int64Entity
         */
        public static fromObject(object: { [k: string]: any }): services.Int64Entity;

        /**
         * Creates a plain object from an Int64Entity message. Also converts values to other types if specified.
         * @param message Int64Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.Int64Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Int64Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint32Entity. */
    interface IUint32Entity {

        /** Uint32Entity data */
        data?: (number|null);
    }

    /** Represents an Uint32Entity. */
    class Uint32Entity implements IUint32Entity {

        /**
         * Constructs a new Uint32Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUint32Entity);

        /** Uint32Entity data. */
        public data: number;

        /**
         * Creates a new Uint32Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint32Entity instance
         */
        public static create(properties?: services.IUint32Entity): services.Uint32Entity;

        /**
         * Encodes the specified Uint32Entity message. Does not implicitly {@link services.Uint32Entity.verify|verify} messages.
         * @param message Uint32Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUint32Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uint32Entity message, length delimited. Does not implicitly {@link services.Uint32Entity.verify|verify} messages.
         * @param message Uint32Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUint32Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint32Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint32Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.Uint32Entity;

        /**
         * Decodes an Uint32Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uint32Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.Uint32Entity;

        /**
         * Verifies an Uint32Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Uint32Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint32Entity
         */
        public static fromObject(object: { [k: string]: any }): services.Uint32Entity;

        /**
         * Creates a plain object from an Uint32Entity message. Also converts values to other types if specified.
         * @param message Uint32Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.Uint32Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint32Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an Uint64Entity. */
    interface IUint64Entity {

        /** Uint64Entity data */
        data?: (number|Long|null);
    }

    /** Represents an Uint64Entity. */
    class Uint64Entity implements IUint64Entity {

        /**
         * Constructs a new Uint64Entity.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUint64Entity);

        /** Uint64Entity data. */
        public data: (number|Long);

        /**
         * Creates a new Uint64Entity instance using the specified properties.
         * @param [properties] Properties to set
         * @returns Uint64Entity instance
         */
        public static create(properties?: services.IUint64Entity): services.Uint64Entity;

        /**
         * Encodes the specified Uint64Entity message. Does not implicitly {@link services.Uint64Entity.verify|verify} messages.
         * @param message Uint64Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUint64Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified Uint64Entity message, length delimited. Does not implicitly {@link services.Uint64Entity.verify|verify} messages.
         * @param message Uint64Entity message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUint64Entity, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Uint64Entity message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns Uint64Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.Uint64Entity;

        /**
         * Decodes an Uint64Entity message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns Uint64Entity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.Uint64Entity;

        /**
         * Verifies an Uint64Entity message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an Uint64Entity message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns Uint64Entity
         */
        public static fromObject(object: { [k: string]: any }): services.Uint64Entity;

        /**
         * Creates a plain object from an Uint64Entity message. Also converts values to other types if specified.
         * @param message Uint64Entity
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.Uint64Entity, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this Uint64Entity to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Represents a FileService */
    class FileService extends $protobuf.rpc.Service {

        /**
         * Constructs a new FileService service.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         */
        constructor(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean);

        /**
         * Creates new FileService service using the specified rpc implementation.
         * @param rpcImpl RPC implementation
         * @param [requestDelimited=false] Whether requests are length-delimited
         * @param [responseDelimited=false] Whether responses are length-delimited
         * @returns RPC service. Useful where requests and/or responses are streamed.
         */
        public static create(rpcImpl: $protobuf.RPCImpl, requestDelimited?: boolean, responseDelimited?: boolean): FileService;

        /**
         * Calls Create.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFile
         */
        public create(request: services.IUserFile, callback: services.FileService.CreateCallback): void;

        /**
         * Calls Create.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public create(request: services.IUserFile): Promise<services.UserFile>;

        /**
         * Calls FlushStore.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFile
         */
        public flushStore(request: services.IUserFile, callback: services.FileService.FlushStoreCallback): void;

        /**
         * Calls FlushStore.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public flushStore(request: services.IUserFile): Promise<services.UserFile>;

        /**
         * Calls UpdateCount.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFile
         */
        public updateCount(request: services.IUserFile, callback: services.FileService.UpdateCountCallback): void;

        /**
         * Calls UpdateCount.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public updateCount(request: services.IUserFile): Promise<services.UserFile>;

        /**
         * Calls Get.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFile
         */
        public get(request: services.IUserFile, callback: services.FileService.GetCallback): void;

        /**
         * Calls Get.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public get(request: services.IUserFile): Promise<services.UserFile>;

        /**
         * Calls UploadToken.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UploadTokenResponse
         */
        public uploadToken(request: services.IUserFile, callback: services.FileService.UploadTokenCallback): void;

        /**
         * Calls UploadToken.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public uploadToken(request: services.IUserFile): Promise<services.UploadTokenResponse>;

        /**
         * Calls Rename.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFile
         */
        public rename(request: services.IUserFile, callback: services.FileService.RenameCallback): void;

        /**
         * Calls Rename.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public rename(request: services.IUserFile): Promise<services.UserFile>;

        /**
         * Calls Lock.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and BoolEntity
         */
        public lock(request: services.IUserFile, callback: services.FileService.LockCallback): void;

        /**
         * Calls Lock.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public lock(request: services.IUserFile): Promise<services.BoolEntity>;

        /**
         * Calls ReleaseLock.
         * @param request UserFile message or plain object
         * @param callback Node-style callback called with the error, if any, and BoolEntity
         */
        public releaseLock(request: services.IUserFile, callback: services.FileService.ReleaseLockCallback): void;

        /**
         * Calls ReleaseLock.
         * @param request UserFile message or plain object
         * @returns Promise
         */
        public releaseLock(request: services.IUserFile): Promise<services.BoolEntity>;

        /**
         * Calls Trash.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public trash(request: services.IBathFileRequest, callback: services.FileService.TrashCallback): void;

        /**
         * Calls Trash.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public trash(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls Delete.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public delete(request: services.IBathFileRequest, callback: services.FileService.DeleteCallback): void;

        /**
         * Calls Delete.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public delete(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls Copy.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public copy(request: services.IBathFileRequest, callback: services.FileService.CopyCallback): void;

        /**
         * Calls Copy.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public copy(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls Move.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public move(request: services.IBathFileRequest, callback: services.FileService.MoveCallback): void;

        /**
         * Calls Move.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public move(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls Recover.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public recover(request: services.IBathFileRequest, callback: services.FileService.RecoverCallback): void;

        /**
         * Calls Recover.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public recover(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls List.
         * @param request UserFileListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFileListResponse
         */
        public list(request: services.IUserFileListRequest, callback: services.FileService.ListCallback): void;

        /**
         * Calls List.
         * @param request UserFileListRequest message or plain object
         * @returns Promise
         */
        public list(request: services.IUserFileListRequest): Promise<services.UserFileListResponse>;

        /**
         * Calls ListInternal.
         * @param request UserFileListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and UserFileListResponse
         */
        public listInternal(request: services.IUserFileListRequest, callback: services.FileService.ListInternalCallback): void;

        /**
         * Calls ListInternal.
         * @param request UserFileListRequest message or plain object
         * @returns Promise
         */
        public listInternal(request: services.IUserFileListRequest): Promise<services.UserFileListResponse>;

        /**
         * Calls DeleteTrash.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public deleteTrash(request: services.IBathFileRequest, callback: services.FileService.DeleteTrashCallback): void;

        /**
         * Calls DeleteTrash.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public deleteTrash(request: services.IBathFileRequest): Promise<services.Int64Entity>;

        /**
         * Calls ListTrash.
         * @param request UserFileListRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and TrashListResponse
         */
        public listTrash(request: services.IUserFileListRequest, callback: services.FileService.ListTrashCallback): void;

        /**
         * Calls ListTrash.
         * @param request UserFileListRequest message or plain object
         * @returns Promise
         */
        public listTrash(request: services.IUserFileListRequest): Promise<services.TrashListResponse>;

        /**
         * Calls GetTrash.
         * @param request TrashInfo message or plain object
         * @param callback Node-style callback called with the error, if any, and TrashInfo
         */
        public getTrash(request: services.ITrashInfo, callback: services.FileService.GetTrashCallback): void;

        /**
         * Calls GetTrash.
         * @param request TrashInfo message or plain object
         * @returns Promise
         */
        public getTrash(request: services.ITrashInfo): Promise<services.TrashInfo>;

        /**
         * Calls ClearTrash.
         * @param request BathFileRequest message or plain object
         * @param callback Node-style callback called with the error, if any, and Int64Entity
         */
        public clearTrash(request: services.IBathFileRequest, callback: services.FileService.ClearTrashCallback): void;

        /**
         * Calls ClearTrash.
         * @param request BathFileRequest message or plain object
         * @returns Promise
         */
        public clearTrash(request: services.IBathFileRequest): Promise<services.Int64Entity>;
    }

    namespace FileService {

        /**
         * Callback as used by {@link services.FileService#create}.
         * @param error Error, if any
         * @param [response] UserFile
         */
        type CreateCallback = (error: (Error|null), response?: services.UserFile) => void;

        /**
         * Callback as used by {@link services.FileService#flushStore}.
         * @param error Error, if any
         * @param [response] UserFile
         */
        type FlushStoreCallback = (error: (Error|null), response?: services.UserFile) => void;

        /**
         * Callback as used by {@link services.FileService#updateCount}.
         * @param error Error, if any
         * @param [response] UserFile
         */
        type UpdateCountCallback = (error: (Error|null), response?: services.UserFile) => void;

        /**
         * Callback as used by {@link services.FileService#get}.
         * @param error Error, if any
         * @param [response] UserFile
         */
        type GetCallback = (error: (Error|null), response?: services.UserFile) => void;

        /**
         * Callback as used by {@link services.FileService#uploadToken}.
         * @param error Error, if any
         * @param [response] UploadTokenResponse
         */
        type UploadTokenCallback = (error: (Error|null), response?: services.UploadTokenResponse) => void;

        /**
         * Callback as used by {@link services.FileService#rename}.
         * @param error Error, if any
         * @param [response] UserFile
         */
        type RenameCallback = (error: (Error|null), response?: services.UserFile) => void;

        /**
         * Callback as used by {@link services.FileService#lock}.
         * @param error Error, if any
         * @param [response] BoolEntity
         */
        type LockCallback = (error: (Error|null), response?: services.BoolEntity) => void;

        /**
         * Callback as used by {@link services.FileService#releaseLock}.
         * @param error Error, if any
         * @param [response] BoolEntity
         */
        type ReleaseLockCallback = (error: (Error|null), response?: services.BoolEntity) => void;

        /**
         * Callback as used by {@link services.FileService#trash}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type TrashCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#delete_}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type DeleteCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#copy}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type CopyCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#move}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type MoveCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#recover}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type RecoverCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#list}.
         * @param error Error, if any
         * @param [response] UserFileListResponse
         */
        type ListCallback = (error: (Error|null), response?: services.UserFileListResponse) => void;

        /**
         * Callback as used by {@link services.FileService#listInternal}.
         * @param error Error, if any
         * @param [response] UserFileListResponse
         */
        type ListInternalCallback = (error: (Error|null), response?: services.UserFileListResponse) => void;

        /**
         * Callback as used by {@link services.FileService#deleteTrash}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type DeleteTrashCallback = (error: (Error|null), response?: services.Int64Entity) => void;

        /**
         * Callback as used by {@link services.FileService#listTrash}.
         * @param error Error, if any
         * @param [response] TrashListResponse
         */
        type ListTrashCallback = (error: (Error|null), response?: services.TrashListResponse) => void;

        /**
         * Callback as used by {@link services.FileService#getTrash}.
         * @param error Error, if any
         * @param [response] TrashInfo
         */
        type GetTrashCallback = (error: (Error|null), response?: services.TrashInfo) => void;

        /**
         * Callback as used by {@link services.FileService#clearTrash}.
         * @param error Error, if any
         * @param [response] Int64Entity
         */
        type ClearTrashCallback = (error: (Error|null), response?: services.Int64Entity) => void;
    }

    /** Properties of a UserFile. */
    interface IUserFile {

        /** UserFile identity */
        identity?: (string|null);

        /** UserFile hash */
        hash?: (string|null);

        /** UserFile userIdentity */
        userIdentity?: (number|Long|null);

        /** UserFile path */
        path?: (string|null);

        /** UserFile name */
        name?: (string|null);

        /** UserFile ext */
        ext?: (string|null);

        /** UserFile size */
        size?: (number|Long|null);

        /** UserFile mime */
        mime?: (string|null);

        /** UserFile deleted */
        deleted?: (boolean|null);

        /** UserFile parent */
        parent?: (string|null);

        /** UserFile type */
        type?: (number|null);

        /** UserFile directory */
        directory?: (boolean|null);

        /** UserFile atime */
        atime?: (number|Long|null);

        /** UserFile ctime */
        ctime?: (number|Long|null);

        /** UserFile mtime */
        mtime?: (number|Long|null);

        /** UserFile version */
        version?: (number|null);

        /** UserFile locking */
        locking?: (boolean|null);

        /** UserFile op */
        op?: (number|null);

        /** UserFile preview */
        preview?: (boolean|null);

        /** UserFile previewType */
        previewType?: (number|null);

        /** UserFile flag */
        flag?: (number|null);

        /** UserFile uniqueIdentity */
        uniqueIdentity?: (string|null);

        /** UserFile share */
        share?: (boolean|null);

        /** UserFile downloadAddress */
        downloadAddress?: (string|null);

        /** UserFile unlockTime */
        unlockTime?: (number|Long|null);
    }

    /** Represents a UserFile. */
    class UserFile implements IUserFile {

        /**
         * Constructs a new UserFile.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUserFile);

        /** UserFile identity. */
        public identity: string;

        /** UserFile hash. */
        public hash: string;

        /** UserFile userIdentity. */
        public userIdentity: (number|Long);

        /** UserFile path. */
        public path: string;

        /** UserFile name. */
        public name: string;

        /** UserFile ext. */
        public ext: string;

        /** UserFile size. */
        public size: (number|Long);

        /** UserFile mime. */
        public mime: string;

        /** UserFile deleted. */
        public deleted: boolean;

        /** UserFile parent. */
        public parent: string;

        /** UserFile type. */
        public type: number;

        /** UserFile directory. */
        public directory: boolean;

        /** UserFile atime. */
        public atime: (number|Long);

        /** UserFile ctime. */
        public ctime: (number|Long);

        /** UserFile mtime. */
        public mtime: (number|Long);

        /** UserFile version. */
        public version: number;

        /** UserFile locking. */
        public locking: boolean;

        /** UserFile op. */
        public op: number;

        /** UserFile preview. */
        public preview: boolean;

        /** UserFile previewType. */
        public previewType: number;

        /** UserFile flag. */
        public flag: number;

        /** UserFile uniqueIdentity. */
        public uniqueIdentity: string;

        /** UserFile share. */
        public share: boolean;

        /** UserFile downloadAddress. */
        public downloadAddress: string;

        /** UserFile unlockTime. */
        public unlockTime: (number|Long);

        /**
         * Creates a new UserFile instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserFile instance
         */
        public static create(properties?: services.IUserFile): services.UserFile;

        /**
         * Encodes the specified UserFile message. Does not implicitly {@link services.UserFile.verify|verify} messages.
         * @param message UserFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUserFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserFile message, length delimited. Does not implicitly {@link services.UserFile.verify|verify} messages.
         * @param message UserFile message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUserFile, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserFile message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.UserFile;

        /**
         * Decodes a UserFile message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserFile
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.UserFile;

        /**
         * Verifies a UserFile message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserFile message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserFile
         */
        public static fromObject(object: { [k: string]: any }): services.UserFile;

        /**
         * Creates a plain object from a UserFile message. Also converts values to other types if specified.
         * @param message UserFile
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.UserFile, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserFile to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TrashInfo. */
    interface ITrashInfo {

        /** TrashInfo identity */
        identity?: (string|null);

        /** TrashInfo userIdentity */
        userIdentity?: (number|Long|null);

        /** TrashInfo path */
        path?: (string|null);

        /** TrashInfo pathIdentity */
        pathIdentity?: (string|null);

        /** TrashInfo createTime */
        createTime?: (number|Long|null);

        /** TrashInfo name */
        name?: (string|null);

        /** TrashInfo type */
        type?: (number|null);

        /** TrashInfo mime */
        mime?: (string|null);

        /** TrashInfo addon */
        addon?: (string|null);

        /** TrashInfo locking */
        locking?: (boolean|null);

        /** TrashInfo op */
        op?: (number|null);

        /** TrashInfo size */
        size?: (number|Long|null);

        /** TrashInfo directory */
        directory?: (boolean|null);
    }

    /** Represents a TrashInfo. */
    class TrashInfo implements ITrashInfo {

        /**
         * Constructs a new TrashInfo.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.ITrashInfo);

        /** TrashInfo identity. */
        public identity: string;

        /** TrashInfo userIdentity. */
        public userIdentity: (number|Long);

        /** TrashInfo path. */
        public path: string;

        /** TrashInfo pathIdentity. */
        public pathIdentity: string;

        /** TrashInfo createTime. */
        public createTime: (number|Long);

        /** TrashInfo name. */
        public name: string;

        /** TrashInfo type. */
        public type: number;

        /** TrashInfo mime. */
        public mime: string;

        /** TrashInfo addon. */
        public addon: string;

        /** TrashInfo locking. */
        public locking: boolean;

        /** TrashInfo op. */
        public op: number;

        /** TrashInfo size. */
        public size: (number|Long);

        /** TrashInfo directory. */
        public directory: boolean;

        /**
         * Creates a new TrashInfo instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrashInfo instance
         */
        public static create(properties?: services.ITrashInfo): services.TrashInfo;

        /**
         * Encodes the specified TrashInfo message. Does not implicitly {@link services.TrashInfo.verify|verify} messages.
         * @param message TrashInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.ITrashInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrashInfo message, length delimited. Does not implicitly {@link services.TrashInfo.verify|verify} messages.
         * @param message TrashInfo message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.ITrashInfo, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrashInfo message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrashInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.TrashInfo;

        /**
         * Decodes a TrashInfo message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrashInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.TrashInfo;

        /**
         * Verifies a TrashInfo message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrashInfo message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrashInfo
         */
        public static fromObject(object: { [k: string]: any }): services.TrashInfo;

        /**
         * Creates a plain object from a TrashInfo message. Also converts values to other types if specified.
         * @param message TrashInfo
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.TrashInfo, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrashInfo to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a FilterRequest. */
    interface IFilterRequest {

        /** FilterRequest identity */
        identity?: (string[]|null);

        /** FilterRequest type */
        type?: (number[]|null);

        /** FilterRequest directory */
        directory?: (number|null);

        /** FilterRequest name */
        name?: (string|null);
    }

    /** Represents a FilterRequest. */
    class FilterRequest implements IFilterRequest {

        /**
         * Constructs a new FilterRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IFilterRequest);

        /** FilterRequest identity. */
        public identity: string[];

        /** FilterRequest type. */
        public type: number[];

        /** FilterRequest directory. */
        public directory: number;

        /** FilterRequest name. */
        public name: string;

        /**
         * Creates a new FilterRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns FilterRequest instance
         */
        public static create(properties?: services.IFilterRequest): services.FilterRequest;

        /**
         * Encodes the specified FilterRequest message. Does not implicitly {@link services.FilterRequest.verify|verify} messages.
         * @param message FilterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IFilterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified FilterRequest message, length delimited. Does not implicitly {@link services.FilterRequest.verify|verify} messages.
         * @param message FilterRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IFilterRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FilterRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns FilterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.FilterRequest;

        /**
         * Decodes a FilterRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns FilterRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.FilterRequest;

        /**
         * Verifies a FilterRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a FilterRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns FilterRequest
         */
        public static fromObject(object: { [k: string]: any }): services.FilterRequest;

        /**
         * Creates a plain object from a FilterRequest message. Also converts values to other types if specified.
         * @param message FilterRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.FilterRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this FilterRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a BathFileRequest. */
    interface IBathFileRequest {

        /** BathFileRequest identity */
        identity?: (string[]|null);

        /** BathFileRequest path */
        path?: (string[]|null);

        /** BathFileRequest userIdentity */
        userIdentity?: (number|Long|null);

        /** BathFileRequest dest */
        dest?: (services.IUserFile|null);

        /** BathFileRequest op */
        op?: (number|null);
    }

    /** Represents a BathFileRequest. */
    class BathFileRequest implements IBathFileRequest {

        /**
         * Constructs a new BathFileRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IBathFileRequest);

        /** BathFileRequest identity. */
        public identity: string[];

        /** BathFileRequest path. */
        public path: string[];

        /** BathFileRequest userIdentity. */
        public userIdentity: (number|Long);

        /** BathFileRequest dest. */
        public dest?: (services.IUserFile|null);

        /** BathFileRequest op. */
        public op: number;

        /**
         * Creates a new BathFileRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns BathFileRequest instance
         */
        public static create(properties?: services.IBathFileRequest): services.BathFileRequest;

        /**
         * Encodes the specified BathFileRequest message. Does not implicitly {@link services.BathFileRequest.verify|verify} messages.
         * @param message BathFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IBathFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified BathFileRequest message, length delimited. Does not implicitly {@link services.BathFileRequest.verify|verify} messages.
         * @param message BathFileRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IBathFileRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BathFileRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns BathFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.BathFileRequest;

        /**
         * Decodes a BathFileRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns BathFileRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.BathFileRequest;

        /**
         * Verifies a BathFileRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a BathFileRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns BathFileRequest
         */
        public static fromObject(object: { [k: string]: any }): services.BathFileRequest;

        /**
         * Creates a plain object from a BathFileRequest message. Also converts values to other types if specified.
         * @param message BathFileRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.BathFileRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this BathFileRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a MqRequest. */
    interface IMqRequest {

        /** MqRequest source */
        source?: (services.IUserFile|null);

        /** MqRequest dest */
        dest?: (services.IUserFile|null);

        /** MqRequest type */
        type?: (number|null);
    }

    /** Represents a MqRequest. */
    class MqRequest implements IMqRequest {

        /**
         * Constructs a new MqRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IMqRequest);

        /** MqRequest source. */
        public source?: (services.IUserFile|null);

        /** MqRequest dest. */
        public dest?: (services.IUserFile|null);

        /** MqRequest type. */
        public type: number;

        /**
         * Creates a new MqRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns MqRequest instance
         */
        public static create(properties?: services.IMqRequest): services.MqRequest;

        /**
         * Encodes the specified MqRequest message. Does not implicitly {@link services.MqRequest.verify|verify} messages.
         * @param message MqRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IMqRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified MqRequest message, length delimited. Does not implicitly {@link services.MqRequest.verify|verify} messages.
         * @param message MqRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IMqRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MqRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns MqRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.MqRequest;

        /**
         * Decodes a MqRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns MqRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.MqRequest;

        /**
         * Verifies a MqRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a MqRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns MqRequest
         */
        public static fromObject(object: { [k: string]: any }): services.MqRequest;

        /**
         * Creates a plain object from a MqRequest message. Also converts values to other types if specified.
         * @param message MqRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.MqRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this MqRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserFileListRequest. */
    interface IUserFileListRequest {

        /** UserFileListRequest identity */
        identity?: (string|null);

        /** UserFileListRequest userIdentity */
        userIdentity?: (number|Long|null);

        /** UserFileListRequest path */
        path?: (string|null);

        /** UserFileListRequest listInfo */
        listInfo?: (services.IListInfo|null);

        /** UserFileListRequest orderBy */
        orderBy?: (services.IOrderByRequest[]|null);

        /** UserFileListRequest filter */
        filter?: (services.IFilterRequest|null);

        /** UserFileListRequest op */
        op?: (number|null);
    }

    /** Represents a UserFileListRequest. */
    class UserFileListRequest implements IUserFileListRequest {

        /**
         * Constructs a new UserFileListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUserFileListRequest);

        /** UserFileListRequest identity. */
        public identity: string;

        /** UserFileListRequest userIdentity. */
        public userIdentity: (number|Long);

        /** UserFileListRequest path. */
        public path: string;

        /** UserFileListRequest listInfo. */
        public listInfo?: (services.IListInfo|null);

        /** UserFileListRequest orderBy. */
        public orderBy: services.IOrderByRequest[];

        /** UserFileListRequest filter. */
        public filter?: (services.IFilterRequest|null);

        /** UserFileListRequest op. */
        public op: number;

        /**
         * Creates a new UserFileListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserFileListRequest instance
         */
        public static create(properties?: services.IUserFileListRequest): services.UserFileListRequest;

        /**
         * Encodes the specified UserFileListRequest message. Does not implicitly {@link services.UserFileListRequest.verify|verify} messages.
         * @param message UserFileListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUserFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserFileListRequest message, length delimited. Does not implicitly {@link services.UserFileListRequest.verify|verify} messages.
         * @param message UserFileListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUserFileListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserFileListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.UserFileListRequest;

        /**
         * Decodes a UserFileListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserFileListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.UserFileListRequest;

        /**
         * Verifies a UserFileListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserFileListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserFileListRequest
         */
        public static fromObject(object: { [k: string]: any }): services.UserFileListRequest;

        /**
         * Creates a plain object from a UserFileListRequest message. Also converts values to other types if specified.
         * @param message UserFileListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.UserFileListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserFileListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a CommonListRequest. */
    interface ICommonListRequest {

        /** CommonListRequest userIdentity */
        userIdentity?: (number|Long|null);

        /** CommonListRequest listInfo */
        listInfo?: (services.IListInfo|null);
    }

    /** Represents a CommonListRequest. */
    class CommonListRequest implements ICommonListRequest {

        /**
         * Constructs a new CommonListRequest.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.ICommonListRequest);

        /** CommonListRequest userIdentity. */
        public userIdentity: (number|Long);

        /** CommonListRequest listInfo. */
        public listInfo?: (services.IListInfo|null);

        /**
         * Creates a new CommonListRequest instance using the specified properties.
         * @param [properties] Properties to set
         * @returns CommonListRequest instance
         */
        public static create(properties?: services.ICommonListRequest): services.CommonListRequest;

        /**
         * Encodes the specified CommonListRequest message. Does not implicitly {@link services.CommonListRequest.verify|verify} messages.
         * @param message CommonListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.ICommonListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified CommonListRequest message, length delimited. Does not implicitly {@link services.CommonListRequest.verify|verify} messages.
         * @param message CommonListRequest message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.ICommonListRequest, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonListRequest message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns CommonListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.CommonListRequest;

        /**
         * Decodes a CommonListRequest message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns CommonListRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.CommonListRequest;

        /**
         * Verifies a CommonListRequest message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a CommonListRequest message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns CommonListRequest
         */
        public static fromObject(object: { [k: string]: any }): services.CommonListRequest;

        /**
         * Creates a plain object from a CommonListRequest message. Also converts values to other types if specified.
         * @param message CommonListRequest
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.CommonListRequest, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this CommonListRequest to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a UserFileListResponse. */
    interface IUserFileListResponse {

        /** UserFileListResponse parent */
        parent?: (services.IUserFile|null);

        /** UserFileListResponse data */
        data?: (services.IUserFile[]|null);
    }

    /** Represents a UserFileListResponse. */
    class UserFileListResponse implements IUserFileListResponse {

        /**
         * Constructs a new UserFileListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUserFileListResponse);

        /** UserFileListResponse parent. */
        public parent?: (services.IUserFile|null);

        /** UserFileListResponse data. */
        public data: services.IUserFile[];

        /**
         * Creates a new UserFileListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UserFileListResponse instance
         */
        public static create(properties?: services.IUserFileListResponse): services.UserFileListResponse;

        /**
         * Encodes the specified UserFileListResponse message. Does not implicitly {@link services.UserFileListResponse.verify|verify} messages.
         * @param message UserFileListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUserFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UserFileListResponse message, length delimited. Does not implicitly {@link services.UserFileListResponse.verify|verify} messages.
         * @param message UserFileListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUserFileListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UserFileListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UserFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.UserFileListResponse;

        /**
         * Decodes a UserFileListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UserFileListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.UserFileListResponse;

        /**
         * Verifies a UserFileListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a UserFileListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UserFileListResponse
         */
        public static fromObject(object: { [k: string]: any }): services.UserFileListResponse;

        /**
         * Creates a plain object from a UserFileListResponse message. Also converts values to other types if specified.
         * @param message UserFileListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.UserFileListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UserFileListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of a TrashListResponse. */
    interface ITrashListResponse {

        /** TrashListResponse data */
        data?: (services.ITrashInfo[]|null);
    }

    /** Represents a TrashListResponse. */
    class TrashListResponse implements ITrashListResponse {

        /**
         * Constructs a new TrashListResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.ITrashListResponse);

        /** TrashListResponse data. */
        public data: services.ITrashInfo[];

        /**
         * Creates a new TrashListResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns TrashListResponse instance
         */
        public static create(properties?: services.ITrashListResponse): services.TrashListResponse;

        /**
         * Encodes the specified TrashListResponse message. Does not implicitly {@link services.TrashListResponse.verify|verify} messages.
         * @param message TrashListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.ITrashListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified TrashListResponse message, length delimited. Does not implicitly {@link services.TrashListResponse.verify|verify} messages.
         * @param message TrashListResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.ITrashListResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TrashListResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns TrashListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.TrashListResponse;

        /**
         * Decodes a TrashListResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns TrashListResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.TrashListResponse;

        /**
         * Verifies a TrashListResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates a TrashListResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns TrashListResponse
         */
        public static fromObject(object: { [k: string]: any }): services.TrashListResponse;

        /**
         * Creates a plain object from a TrashListResponse message. Also converts values to other types if specified.
         * @param message TrashListResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.TrashListResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this TrashListResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }

    /** Properties of an UploadTokenResponse. */
    interface IUploadTokenResponse {

        /** UploadTokenResponse uploadToken */
        uploadToken?: (string|null);

        /** UploadTokenResponse type */
        type?: (string|null);

        /** UploadTokenResponse filePath */
        filePath?: (string|null);

        /** UploadTokenResponse created */
        created?: (boolean|null);

        /** UploadTokenResponse createInfo */
        createInfo?: (services.IUserFile|null);

        /** UploadTokenResponse partUploadUrl */
        partUploadUrl?: (string|null);

        /** UploadTokenResponse directUploadUrl */
        directUploadUrl?: (string|null);
    }

    /** Represents an UploadTokenResponse. */
    class UploadTokenResponse implements IUploadTokenResponse {

        /**
         * Constructs a new UploadTokenResponse.
         * @param [properties] Properties to set
         */
        constructor(properties?: services.IUploadTokenResponse);

        /** UploadTokenResponse uploadToken. */
        public uploadToken: string;

        /** UploadTokenResponse type. */
        public type: string;

        /** UploadTokenResponse filePath. */
        public filePath: string;

        /** UploadTokenResponse created. */
        public created: boolean;

        /** UploadTokenResponse createInfo. */
        public createInfo?: (services.IUserFile|null);

        /** UploadTokenResponse partUploadUrl. */
        public partUploadUrl: string;

        /** UploadTokenResponse directUploadUrl. */
        public directUploadUrl: string;

        /**
         * Creates a new UploadTokenResponse instance using the specified properties.
         * @param [properties] Properties to set
         * @returns UploadTokenResponse instance
         */
        public static create(properties?: services.IUploadTokenResponse): services.UploadTokenResponse;

        /**
         * Encodes the specified UploadTokenResponse message. Does not implicitly {@link services.UploadTokenResponse.verify|verify} messages.
         * @param message UploadTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encode(message: services.IUploadTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Encodes the specified UploadTokenResponse message, length delimited. Does not implicitly {@link services.UploadTokenResponse.verify|verify} messages.
         * @param message UploadTokenResponse message or plain object to encode
         * @param [writer] Writer to encode to
         * @returns Writer
         */
        public static encodeDelimited(message: services.IUploadTokenResponse, writer?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UploadTokenResponse message from the specified reader or buffer.
         * @param reader Reader or buffer to decode from
         * @param [length] Message length if known beforehand
         * @returns UploadTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(reader: ($protobuf.Reader|Uint8Array), length?: number): services.UploadTokenResponse;

        /**
         * Decodes an UploadTokenResponse message from the specified reader or buffer, length delimited.
         * @param reader Reader or buffer to decode from
         * @returns UploadTokenResponse
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decodeDelimited(reader: ($protobuf.Reader|Uint8Array)): services.UploadTokenResponse;

        /**
         * Verifies an UploadTokenResponse message.
         * @param message Plain object to verify
         * @returns `null` if valid, otherwise the reason why it is not
         */
        public static verify(message: { [k: string]: any }): (string|null);

        /**
         * Creates an UploadTokenResponse message from a plain object. Also converts values to their respective internal types.
         * @param object Plain object
         * @returns UploadTokenResponse
         */
        public static fromObject(object: { [k: string]: any }): services.UploadTokenResponse;

        /**
         * Creates a plain object from an UploadTokenResponse message. Also converts values to other types if specified.
         * @param message UploadTokenResponse
         * @param [options] Conversion options
         * @returns Plain object
         */
        public static toObject(message: services.UploadTokenResponse, options?: $protobuf.IConversionOptions): { [k: string]: any };

        /**
         * Converts this UploadTokenResponse to JSON.
         * @returns JSON object
         */
        public toJSON(): { [k: string]: any };
    }
}
