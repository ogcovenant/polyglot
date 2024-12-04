"use client";

import { useSidebarCtx } from "@/contexts/SidebarCtx";
import useUserStore from "@/states/userStore";
import { Add, CloseSquare, Flash, Logout, MessageText1 } from "iconsax-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "./ui/dialog";
// import { useRouter } from "next/navigation";

const Sidebar = () => {
  const { sidebarOpen, toggleSidebar } = useSidebarCtx();
  const [loginDialogOpen, setLoginDialogOpen] = useState(false);
  // const router = useRouter();

  const user = useUserStore((state) => state.user);
  const clearUser = useUserStore((state) => state.clearUser);

  useEffect(() => {
    if (!user?.token) {
      setLoginDialogOpen(true);
    }
  }, []);

  const logout = () => {
    clearUser();
  };

  return (
    <>
      <div className="hidden lg:flex h-full bg-primary p-3 flex-col justify-between">
        <div>
          <div className="bg-black p-5 rounded-lg flex items-center gap-2">
            <Flash size="32" color="#FFF" variant="Bold" />
            <p className="text-white text-xl font-semibold">Polyglot</p>
          </div>
          {user?.token ? (
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
          ) : (
            <div className="p-3 text-white">
              You need to have an account to be able to save chat history
            </div>
          )}
          {loginDialogOpen ? (
            <Dialog>
              <DialogTrigger className="w-full flex items-center gap-3 bg-secondary p-3 rounded-lg">
                <Add size="32" color="#FFF" />
                <p className="text-white text-lg font-medium">
                  Start a new chat
                </p>
              </DialogTrigger>
              <DialogContent className="bg-primary text-white">
                <DialogHeader>
                  <DialogTitle>Clear current chat?</DialogTitle>
                  <DialogDescription>
                    To start a new chat, your current conversation will be
                    discarded. Sign up or log in to save chats.
                  </DialogDescription>
                </DialogHeader>
                <div>
                  <button className="flex items-center gap-1 text-white text-lg bg-red-500 font-semibold w-full p-3 rounded-lg justify-center">
                    <p className="text-lg text-center">Clear Chat</p>
                  </button>
                  <Link href={"/login"}>
                    <button className="flex items-center gap-1 text-white text-lg bg-secondary font-semibold w-full p-3 rounded-lg justify-center mt-1">
                      <p className="text-lg text-center">Log in</p>
                    </button>
                  </Link>
                  <Link href={"/register"}>
                    <button className="flex items-center gap-1 text-secondary bg-white text-lg font-semibold w-full p-3 rounded-lg justify-center mt-1">
                      <p className="text-lg">Register</p>
                    </button>
                  </Link>
                </div>
              </DialogContent>
            </Dialog>
          ) : (
            <button className="flex items-center gap-3 bg-secondary p-3 w-full rounded-lg">
              <Add size="32" color="#FFF" />
              <p className="text-white text-lg font-medium">Start a new chat</p>
            </button>
          )}
        </div>
        <div className="border-t-[1px] border-gray-600 p-3">
          {user?.token ? (
            <button
              className="flex items-center gap-1 text-[#F00000]"
              onClick={() => {
                logout();
              }}
            >
              <Logout size="32" color="#F00000" />
              <p className="text-lg">Log out</p>
            </button>
          ) : (
            <div>
              <Link href={"/login"}>
                <button className="flex items-center gap-1 text-white text-lg bg-secondary font-semibold w-full p-3 rounded-lg justify-center">
                  <p className="text-lg text-center">Log in</p>
                </button>
              </Link>
              <Link href={"/register"}>
                <button className="flex items-center gap-1 text-secondary bg-white text-lg font-semibold w-full p-3 rounded-lg justify-center mt-1">
                  <p className="text-lg">Register</p>
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
      {sidebarOpen && (
        <div className="absolute top-0 left-0 w-full h-screen bg-primary p-3 flex flex-col justify-between z-50">
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
            {user?.token ? (
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
            ) : (
              <div className="p-3 text-white">
                You need to have an account to be able to save chat history
              </div>
            )}
            {loginDialogOpen ? (
              <Dialog>
                <DialogTrigger className="w-full">
                  <button className="flex items-center gap-3 bg-secondary p-3 w-full rounded-lg">
                    <Add size="32" color="#FFF" />
                    <p className="text-white text-lg font-medium">
                      Start a new chat
                    </p>
                  </button>
                </DialogTrigger>
                <DialogContent className="bg-primary text-white">
                  <DialogHeader>
                    <DialogTitle>Clear current chat?</DialogTitle>
                    <DialogDescription>
                      To start a new chat, your current conversation will be
                      discarded. Sign up or log in to save chats.
                    </DialogDescription>
                  </DialogHeader>
                  <div>
                    <button className="flex items-center gap-1 text-white text-lg bg-red-500 font-semibold w-full p-3 rounded-lg justify-center">
                      <p className="text-lg text-center">Clear Chat</p>
                    </button>
                    <Link href={"/login"}>
                      <button className="flex items-center gap-1 text-white text-lg bg-secondary font-semibold w-full p-3 rounded-lg justify-center mt-1">
                        <p className="text-lg text-center">Log in</p>
                      </button>
                    </Link>
                    <Link href={"/register"}>
                      <button className="flex items-center gap-1 text-secondary bg-white text-lg font-semibold w-full p-3 rounded-lg justify-center mt-1">
                        <p className="text-lg">Register</p>
                      </button>
                    </Link>
                  </div>
                </DialogContent>
              </Dialog>
            ) : (
              <button className="flex items-center gap-3 bg-secondary p-3 w-full rounded-lg">
                <Add size="32" color="#FFF" />
                <p className="text-white text-lg font-medium">
                  Start a new chat
                </p>
              </button>
            )}
          </div>

          <div className="border-t-[1px] border-gray-600 p-3">
            {user?.token ? (
              <button
                className="flex items-center gap-1 text-[#F00000]"
                onClick={() => {
                  logout();
                }}
              >
                <Logout size="32" color="#F00000" />
                <p className="text-lg">Log out</p>
              </button>
            ) : (
              <div>
                <Link href={"/login"}>
                  <button className="flex items-center gap-1 text-white text-lg bg-secondary font-semibold w-full p-3 rounded-lg justify-center">
                    <p className="text-lg text-center">Log in</p>
                  </button>
                </Link>
                <Link href={"/register"}>
                  <button className="flex items-center gap-1 text-secondary bg-white text-lg font-semibold w-full p-3 rounded-lg justify-center mt-1">
                    <p className="text-lg">Register</p>
                  </button>
                </Link>
              </div>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
