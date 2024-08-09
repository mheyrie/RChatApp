import React from "react";
import ThierMessage from "./ThierMessage";
import MyMessage from "./MyMessage";
import MessageForm from "./MessageForm";

const ChatFeed = (props) => {
  const { chats, activeChat, userName, messages } = props;

  const chat = chats && chats[activeChat];

  const rendermessages = () => {
    const keys = Object.keys(messages);

    return keys.map((key, index) => {
      const message = messages[key];
      const lastMessageKey = index === 0 ? null : keys[index - 1];
      const isMyMessage = userName === message.sender.userName;

      return (
        <div key={`msg_${index}`} style={{ width: "100%" }}>
          <div className="message-block">
            {isMyMessage ? (
              <MyMessage message={message} />
            ) : (
              <ThierMessage
                message={message}
                lastMessage={message[lastMessageKey]}
              />
            )}
          </div>
          <div
            className="read-reciepts"
            style={{
              marginRight: isMyMessage ? "18px" : "0px",
              marginLeft: isMyMessage ? "0px" : "68px",
            }}
          ></div>
        </div>
      );
    });
  };
  console.log(props);
  return (
    <div className="chat-feed">
      <div className="chat-title-container">
        <div className="chat-title">{chat?.title}</div>
        <div className="chat-subtitle"></div>
        {rendermessages()}
        <div style={{height: '100px'}}/>
        <div className="message-form-container">
          <MessageForm {...props} chatId = {activeChat}/>
        </div>
      </div>
    </div>
  );
};

export default ChatFeed;
