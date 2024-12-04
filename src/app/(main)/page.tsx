"use client";

import { useSidebarCtx } from "@/contexts/SidebarCtx";
import { ArrowDown2, Flash, HambergerMenu } from "iconsax-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useEffect, useState } from "react";
import { getModels } from "@/actions/models";
import { chat } from "@/actions/chat";
// import axios from "axios";
import ChatMessage from "@/components/ChatMessage";// Extracted component
import ChatInput from "@/components/ChatInput"; // Extracted component

const Page = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarCtx();
  const [models, setModels] = useState([]);
  const [currentModel, setCurrentModel] = useState("");
  const [chatInput, setChatInput] = useState("");
  const [chatInterface, setChatInterface] = useState(false);
  const [chooseModel, setChooseModel] = useState(false);
  const [chats, setChats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const res = await getModels();
        //@ts-expect-error error
        const textModels = res.filter((model) => model.type === "text");
        setModels(textModels);
        if (textModels.length > 0) setCurrentModel(textModels[0].id);
      } catch (error) {
        console.error("Error fetching models:", error);
      }
    })();
  }, []);

  // const getChats = async () => {
  //   try {
  //     const res = await axios.get("/api/chat?conversationId=456"); // Replace with your endpoint
  //     setChats(res.data || []);
  //   } catch (error) {
  //     console.error("Error fetching chats:", error);
  //   }
  // };

  const startChat = async (message: string) => {
    if (!message.trim()) return;

    try {
      setLoading(true);

      // Simulate a server response for AI completion
      const completion = await chat(message, currentModel);

      console.log(completion)

      //@ts-expect-error error
      setChats((prevChats) => [
        ...prevChats,
        { message, reply: completion.content },
      ]);

      setChatInterface(true);
      setChatInput("");
    } catch (error) {
      console.error("Error sending chat:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-black h-full p-2">
      {/* Sidebar toggle for mobile */}
      <div className="lg:hidden bg-black p-5 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flash size="32" color="#FFF" variant="Bold" />
          <p className="text-white text-xl font-semibold">Polyglot</p>
        </div>
        <HambergerMenu
          size="32"
          color="#FFF"
          onClick={() => toggleSidebar(!sidebarOpen)}
        />
      </div>

      {/* Main chat UI */}
      <div className="relative bg-gradient-to-br from-primary/35 to-secondary/35 w-full h-full rounded-lg flex flex-col items-center justify-center">
        {/* Model Selection */}
        <div className="absolute top-3 left-5">
          <Popover open={chooseModel}>
            <PopoverTrigger className="bg-primary text-white p-3 flex items-center rounded-md gap-2">
              <p>Model</p>
              <ArrowDown2 size="26" color="#FFF" />
            </PopoverTrigger>
            <PopoverContent className="bg-primary border-black">
              <ul>
                {models.map((model) => (
                  <li
                    className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer"
                    //@ts-expect-error error
                    key={model.id}
                    onClick={() => {
                      //@ts-expect-error error
                      setCurrentModel(model.id);
                      setChooseModel(false);
                    }}
                  >
                    {/* @ts-expect-error error */}
                    {model.id}
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>

        {/* Chat Interface */}
        {!chatInterface ? (
          <div className="flex flex-col items-center">
            <h1 className="text-3xl md:text-5xl text-white font-semibold">
              Welcome to Polyglot
            </h1>
            <p className="text-white mt-3">
              The Power of AI at your service - Tame the knowledge
            </p>
            <ChatInput
              chatInput={chatInput}
              setChatInput={setChatInput}
              onSend={() => startChat(chatInput)}
              loading={loading}
            />
          </div>
        ) : (
          <div className="w-full h-full overflow-auto bg-black p-5 rounded-md">
            <div className="mt-24"></div>
            {chats.map((chat, index) => (
              <ChatMessage key={index} chat={chat} />
            ))}
            <ChatInput
              chatInput={chatInput}
              setChatInput={setChatInput}
              onSend={() => startChat(chatInput)}
              loading={loading}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
