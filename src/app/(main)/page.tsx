"use client";

import { useSidebarCtx } from "@/contexts/SidebarCtx";
import { ArrowDown2, Flash, HambergerMenu, Send } from "iconsax-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Page = () => {
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

      <div className="relative bg-gradient-to-br from-primary/35 to-secondary/35 w-full h-full rounded-lg flex flex-col items-center justify-center">
        <div className="absolute top-3 left-5">
          <Popover>
            <PopoverTrigger className="bg-primary text-white p-3 flex items-center rounded-md gap-2">
              <p>Model</p>
              <ArrowDown2 size="26" color="#FFF"/>
            </PopoverTrigger>
            <PopoverContent className="bg-primary border-black">
              <ul>
                <li className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer">Nous Theta 8B</li>
                <li className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer">Nous Theta 8B</li>
                <li className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer">Nous Theta 8B</li>
                <li className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer">Nous Theta 8B</li>
                <li className="text-white p-3 rounded-md hover:bg-[#424242] cursor-pointer">Nous Theta 8B</li>
              </ul>
            </PopoverContent>
          </Popover>
        </div>

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

export default Page;
