import { ChatEngine } from "react-chat-engine";
import "./App.css";
import ChatFeed from "./components/ChatFeed";
import LoginForm from "./components/LoginForm";

function App() {

  if(!localStorage.getItem('username')) return<LoginForm/>
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={process.env.REACT_APP_USERNAME}
        userSecret={process.env.REACT_APP_USERSECRET}
        renderChatFeed = {(chatAppProps)=> <ChatFeed {...chatAppProps}/>}
        onNewMessage = {()=>new Audio('https://chat-engine-assets.s3.amazonaws.com/click.mp3'.play())}
      />
    </div>
  );
}

export default App;
