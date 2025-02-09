"use client";
import { useIsMobile } from "@/hooks/use-mobile";
import { useSidebar } from "@/hooks/use-sidebar";
import Link from "next/link";
import { useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Button } from "./ui/button";

interface ChatProps {
    chat_id : string;
    end_time: Date;
    messages: { text: string }[];
    start_time: Date;
}

const Sidebar = () => {
  const { isSidebarOpen, toggleSidebar } = useSidebar();
  const [chats, setChats] = useState<ChatProps[]>([]);
  const isMobile = useIsMobile();

  useEffect(() => {
    fetch('/data/chats.json')
      .then((res) => res.json())
      .then((data) => setChats(data));
  }, []);

  console.log(isMobile);


  return (
    <div className={`
        fixed md:relative
        ${isMobile ? "inset-y-0 left-0 z-30" : ""}
        ${
          isSidebarOpen
            ? "translate-x-0 w-64"
            : "-translate-x-full md:translate-x-0 md:w-16"
        }
        bg-gray-800 transition-all duration-300 flex flex-col
      `}>
        {/* Overlay for mobile when sidebar is open */}
      {isMobile && isSidebarOpen && (
        <div
          className="fixed inset-0 bg-opacity-50 z-20"
          onClick={toggleSidebar}
        />
      )}
      <div className={`${!isSidebarOpen || isMobile ? " flex items-center justify-center": "flex" }`}>
        <Button variant={"outline"} className="mt-4 flex items-center justify-center bg-gray-700 rounded hover:bg-gray-600" onClick={toggleSidebar}>
            <AiOutlineMenu size={20} />
        </Button>
      </div>
      <ul className="mt-4">
        <li className="w-full flex items-center justify-center">
          <Link href="/chat">
            <Button variant={"outline"} className=" bg-gray-700  hover:bg-gray-600 rounded">
                {(isSidebarOpen && !isMobile) ? "New Chat" : "➕"}
            </Button>
          </Link>
        </li>
        {(isSidebarOpen && !isMobile) &&
        <>
        {chats?.map((chat) => (
          <li key={chat.chat_id}>
            <Link href={`/chat/${chat.chat_id}`}>
              <p className="flex items-center p-2 hover:bg-gray-700 rounded truncate">{chat?.messages[0]?.text}</p>
            </Link>
          </li>
        ))}
        </>
        }
      </ul>
    </div>
  );
};

export default Sidebar;
