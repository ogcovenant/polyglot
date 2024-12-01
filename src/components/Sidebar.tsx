import { Add, Flash, Logout, MessageText1 } from "iconsax-react";

const Sidebar = () => {
  return (
    <div className="w-full h-full bg-primary p-3 flex flex-col justify-between">
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
  );
};

export default Sidebar;
