import { ChatEngine } from "react-chat-engine";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ChatEngine
        height="100vh"
        projectID={process.env.REACT_APP_PROJECT_ID}
        userName={process.env.REACT_APP_USERNAME}
        userSecret={process.env.REACT_APP_USERSECRET}
      />
    </div>
  );
}

export default App;
