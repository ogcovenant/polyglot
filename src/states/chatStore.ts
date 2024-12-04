import { create } from "zustand";
import { persist } from "zustand/middleware";

interface CHAT {
  message: string;
  reply: string;
}

interface ChatStore {
  chats: CHAT[];
  addChat: (chat: CHAT) => void;
  clearChats: () => void;
}

const useChatStore = create<ChatStore>()(
  persist(
    (set) => ({
      chats: JSON.parse(localStorage.getItem("chats") || "[]"), // Initialize from local storage
      addChat: (chat) => {
        set((state) => {
          const updatedChats = [...state.chats, chat];
          localStorage.setItem("chats", JSON.stringify(updatedChats)); // Save to local storage
          return { chats: updatedChats };
        });
      },
      clearChats: () => {
        localStorage.removeItem("chats"); // Clear local storage
        set({ chats: [] });
      },
    }),
    {
      name: "chat-storage", // Key used in local storage
    }
  )
);

export default useChatStore;
