import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="">
      <ChatEngine height="100vh" 
      projectID={`${process.env.projectID}`}
      userName={`${process.env.userName}`}
      userSecret={`${process.env.userSecret}`}
      />
    </div>
  );
}

export default App;
