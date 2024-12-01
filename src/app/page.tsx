"use client"

import { useSidebarCtx } from "@/contexts/SidebarCtx";
import { Flash, HambergerMenu, Send } from "iconsax-react";

const page = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarCtx();

  return (
    <div className="bg-black h-full p-2">
      <div className="lg:hidden bg-black p-5 rounded-lg flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Flash size="32" color="#FFF" variant="Bold" />
          <p className="text-white text-xl font-semibold">Polyglot</p>
        </div>
        <HambergerMenu
          size="32"
          color="#FFF"
          onClick={() => {
            toggleSidebar(!sidebarOpen);
          }}
        />
      </div>
      <div className="bg-gradient-to-br from-primary/35 to-secondary/35 w-full h-full rounded-lg flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-5xl text-white font-semibold">
          Welcome to Polyglot
        </h1>
        <p className="text-white mt-3">
          The Power of AI at your service - Tame the knowledge
        </p>
        <div className="mt-3 flex items-center bg-primary w-[90%] lg:w-[50%] p-2 rounded-md gap-1 border-[1px]">
          <input
            type="text"
            name="prompt"
            id="prompt"
            className="bg-transparent p-2 w-[80%] md:w-[90%] outline-none text-white"
            placeholder="What do you need help with"
          />
          <button className="w-[20%] md:w-[10%] bg-secondary flex justify-center rounded-lg p-2">
            <Send size="26" color="#FFF" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default page;
