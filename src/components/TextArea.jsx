import { useRef } from "react";

const TextArea = ({setMessages}) => {
  const messageRef = useRef();
  const sendMessage = (e) => {
    if(e.key === "Enter"){
      const message = {text:messageRef.current.value,sender:0};
      setMessages(prevMessages => {
        return [...prevMessages,message]
      })
      messageRef.current.value = '';
    }
  }
  return (
    <div className="w-screen h-36">
      <textarea
        name="message"
        id=""
        placeholder="メッセージを入力してください"
        className="resize-none outline-none border-2 px-3 w-full h-full"
        onKeyDown={(e)=>{
          sendMessage(e)
        }}
        ref={messageRef}
      />
    </div>
  );
};
export default TextArea;
