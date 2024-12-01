"use client";

import { useSidebarCtx } from "@/contexts/SidebarCtx";
import { Add, CloseSquare, Flash, Logout, MessageText1 } from "iconsax-react";

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarCtx();

  return (
    <>
      <div className="hidden lg:flex h-full bg-primary p-3 flex-col justify-between">
        <div>
          <div className="bg-black p-5 rounded-lg flex items-center gap-2">
            <Flash size="32" color="#FFF" variant="Bold" />
            <p className="text-white text-xl font-semibold">Polyglot</p>
          </div>
          <div className="mt-3 p-3 flex flex-col gap-3">
            <div className="flex items-center text-white gap-2 cursor-pointer p-2">
              <MessageText1 size="22" color="#FFF" />
              <p>How to center a div</p>
            </div>
            <div className="flex items-center text-white gap-2 cursor-pointer p-2">
              <MessageText1 size="22" color="#FFF" />
              <p>Web Accessiibilty</p>
            </div>
            <div className="flex items-center text-white gap-2 cursor-pointer p-2">
              <MessageText1 size="22" color="#FFF" />
              <p>Design Inspiration</p>
            </div>
          </div>
          <button className="flex items-center gap-3 bg-secondary p-3 w-full rounded-lg">
            <Add size="32" color="#FFF" />
            <p className="text-white text-lg font-medium">Start a new chat</p>
          </button>
        </div>
        <div className="border-t-[1px] border-gray-600 p-3">
          <button className="flex items-center gap-1 text-[#F00000]">
            <Logout size="32" color="#F00000" />
            <p className="text-lg">Log out</p>
          </button>
        </div>
      </div>
      {sidebarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary p-3 flex flex-col justify-between">
          <div>
            <div className="bg-black p-5 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Flash size="32" color="#FFF" variant="Bold" />
                <p className="text-white text-xl font-semibold">Polyglot</p>
              </div>
              <CloseSquare
                size="32"
                color="#FFF"
                onClick={() => {
                  toggleSidebar(!sidebarOpen);
                }}
              />
            </div>
            <div className="mt-3 p-3 flex flex-col gap-3">
              <div className="flex items-center text-white gap-2 cursor-pointer p-2">
                <MessageText1 size="22" color="#FFF" />
                <p>How to center a div</p>
              </div>
              <div className="flex items-center text-white gap-2 cursor-pointer p-2">
                <MessageText1 size="22" color="#FFF" />
                <p>Web Accessiibilty</p>
              </div>
              <div className="flex items-center text-white gap-2 cursor-pointer p-2">
                <MessageText1 size="22" color="#FFF" />
                <p>Design Inspiration</p>
              </div>
            </div>
            <button className="flex items-center gap-3 bg-secondary p-3 w-full rounded-lg">
              <Add size="32" color="#FFF" />
              <p className="text-white text-lg font-medium">Start a new chat</p>
            </button>
          </div>

          <div className="border-t-[1px] border-gray-600 p-3">
            <button className="flex items-center gap-1 text-[#F00000]">
              <Logout size="32" color="#F00000" />
              <p className="text-lg">Log out</p>
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
