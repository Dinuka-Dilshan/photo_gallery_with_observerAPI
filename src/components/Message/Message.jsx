import "./Message.css";

const Message = ({ message }) => {
  return (
    <div className="blur-screen-message">
      <div className="message-container">{message}</div>
    </div>
  );
};

export default Message;
