import { Mic, Send } from "lucide-react";
import React from "react";
import Suggetions from "./Suggestions";

function MainChatSection() {
  return (

    <div className="w-full flex p-4 md:p-6 flex-col justify-center items-center bg-green-200">
    <div className="flex flex-col w-full max-w-2xl space-y-6">
      <h2 className="text-2xl font-semibold text-center">
        What can I help with?
      </h2>

      {/* Chat Input */}
      <div className="flex items-center bg-gray-800 rounded-lg p-2 space-x-2">
        <button className="p-2 bg-gray-700 rounded-lg">
          <Mic size={20} />
        </button>
        <input
          type="text"
          placeholder="Write here..."
          className="flex-1 bg-transparent px-4 py-2 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <button className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600">
          <Send size={20} />
        </button>
      </div>

      {/* Suggestions */}
      <div className="w-full">
        <Suggetions />
      </div>
    </div>
  </div>
  );
}

export default MainChatSection;
