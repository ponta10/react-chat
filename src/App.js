import { text } from "@fortawesome/fontawesome-svg-core";
import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Message from "./components/Message";
import TextArea from "./components/TextArea";

function App() {
  const [messages, setMessages] = useState([
    { text: "ぽんたった", sender: 0 },
    { text: "りゅうだいだよ", sender: 1 },
  ]);
  return (
    <>
      <Header />
      <Message messages={messages}/>
      <TextArea setMessages={setMessages}/>
    </>
  );
}

export default App;
