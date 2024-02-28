export type ContentType = "text/plain" | "text/markdown" | "vocechat/file";
export type MessageType = "normal" | "reaction" | "reply";
export interface Message {
    created_at: number, //消息创建的时间戳
    detail: {
        content: string, //消息内容
        content_type: ContentType, //消息类型，text/plain：纯文本消息，text/markdown：markdown消息，vocechat/file：文件类消息
        expires_in: number, //消息过期时长，如果有大于0数字，说明该消息是个限时消息
        properties: { local_id: number, mentions: number[] } | null, //一些有关消息的元数据，比如at信息，文件消息的具体类型信息，如果是个图片消息，还会有一些宽高，图片名称等元信息
        type: MessageType //消息类型，normal代表是新消息
    },
    from_uid: number, //来自于谁
    mid: number, //消息ID
    target: { gid: number } | { uid: number } //发送给谁
}
