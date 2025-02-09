// components/Sidebar.tsx
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHome, AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import { useSidebar } from "@/hooks/use-sidebar";
import { Button } from "./ui/button";

interface ChatProps {
    chat_id : string;
    end_time: Date;
    messages: { text: string }[];
    start_time: Date;
}

// Example menu items; you can extend these to include chat history, etc.
const menuItems = [
  { label: "Home", icon: <AiOutlineHome size={20} />, route: "/" },
  { label: "Chat", icon: <AiOutlineMessage size={20} />, route: "/chat" },
  { label: "Profile", icon: <AiOutlineUser size={20} />, route: "/profile" },
];

const Sidebar = () => {
  const { isSidebarOpen, setIsSidebarOpen } = useSidebar();
  const [chats, setChats] = useState<ChatProps[]>([]);

  // Fetch mock chats data from public folder (public/data/chats.json)
  useEffect(() => {
    fetch("/data/chats.json")
      .then((res) => res.json())
      .then((data) => setChats(data));
  }, []);

  return (
    <>
      {/* Mobile header with toggle button (visible on small screens) */}
      <div className="md:hidden p-2 bg-gray-800">
        <button onClick={() => setIsSidebarOpen(true)} className="text-white">
          <AiOutlineMenu size={24} />
        </button>
      </div>

      {/* Sidebar Overlay (only on mobile) */}
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity duration-300 md:hidden ${
          isSidebarOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsSidebarOpen(false)}
      ></div>

      {/* Sidebar Container */}
      <aside
        className={`fixed top-0 left-0 h-full bg-gray-800 text-white z-50 transform transition-transform duration-300
          ${isSidebarOpen ? "translate-x-0" : "-translate-x-full"}
          md:translate-x-0 md:static md:w-64`}
      >
        {/* Mobile Sidebar Header with Close Button */}
        <div className="flex justify-between items-center p-4 md:hidden">
          <h2 className="text-lg font-bold">Menu</h2>
          <button onClick={() => setIsSidebarOpen(false)} className="text-white">
            <AiOutlineClose size={24} />
          </button>
        </div>
        {/* Sidebar Content */}
        <nav className="p-4">
          <ul className="space-y-2">
            {/* New Chat Link */}
            <li>
              <Link href="/chat">
                <Button
                  onClick={() => setIsSidebarOpen(false)}
                  className="flex items-center p-2 hover:bg-gray-700 rounded"
                >
                  <span>➕</span>
                  <span className="ml-4 hidden md:inline">New Chat</span>
                </Button>
              </Link>
            </li>
            {/* Previous Chats from JSON */}
            {chats.map((chat) => (
              <li key={chat.chat_id}>
                <Link href={`/chat/${chat.chat_id}`}>
                  <p
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center p-2 hover:bg-gray-700 rounded"
                  >
                    <span>💬</span>
                    <span className="ml-4 hidden md:inline">{chat.messages[0]?.text}</span>
                  </p>
                </Link>
              </li>
            ))}
            {/* Other Menu Items */}
            {menuItems.map((item) => (
              <li key={item.label}>
                <Link href={item.route}>
                  <Button
                    onClick={() => setIsSidebarOpen(false)}
                    className="flex items-center p-2 hover:bg-gray-700 rounded"
                  >
                    <span>{item.icon}</span>
                    <span className="ml-4 hidden md:inline">{item.label}</span>
                  </Button>
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
    </>
  );
};

export default Sidebar;
