interface ChatMessageProps {
    chat: {
      message: string;
      reply: string;
    };
  }
  
  const ChatMessage: React.FC<ChatMessageProps> = ({ chat }) => {
    return (
      <div className="p-3 rounded-md text-white mt-12 flex flex-col items-end">
        <div className="bg-secondary p-3 rounded-md w-[80%] self-start">
          <p className="text-lg font-bold">User:</p>
          <p>{chat.message}</p>
        </div>
  
        <div className="bg-primary mt-6 p-3 rounded-md w-[80%] self-end">
          <p className="text-lg font-bold">Polyglot:</p>
          <p>{chat.reply}</p>
        </div>
      </div>
    );
  };
  
  export default ChatMessage;
  