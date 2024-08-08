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
            {isMyMessage ? <MyMessage message={message} /> : <ThierMessage message={message} lastMessage={lastMessageKey} />}
          </div>
        </div>
      );
    });
  };

  return (
    <div>
      <ThierMessage />
      <MyMessage />
      <MessageForm />
    </div>
  );
};

export default ChatFeed;
