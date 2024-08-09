import React, { useState } from 'react'
import { SendOutlined, PictureOutlined } from "@ant-design/icons"
import { sendMessage, isTyping } from "react-chat-engine"

const MessageForm = (props) => {

  const [value, setValue] = useState('')
  const {chatIde, creds} = props;

  return (
    <div className="message-form" onSubmit={handleSubmit}>
      <input 
      className="message-input" 
      placeholder="Send a message" 
      value={value}
      onChange={handleChange}
      onSubmit={handleSubmit} 
    />
    <label htmlFor="upload-button">
      <span  className="image-button">
        <PictureOutlined className="picture-icon" />
      </span>
    </label>
    <input 
    type="file" 
    multiple={false}
    id="upload-button"
    />
    </div>
  )
}

export default MessageForm