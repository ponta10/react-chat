const Message = ({messages}) => {
  const Bubble = ({ text, sender }) => {
    return (
      <div
        className={
          "bg-white shadow-md rounded-md table p-3 " +
          (sender === 0 ? "ml-auto" : "")
        }
      >
        {text}
      </div>
    );
  };
  return (
    <div className="bg-blue-100 w-screen h-[calc(100vh-224px)] p-5">
      {messages.map((message, key) => {
        return <Bubble key={key} text={message.text} sender={message.sender} />;
      })}
    </div>
  );
};
export default Message;
