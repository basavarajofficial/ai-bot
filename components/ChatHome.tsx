import { Mic, Send } from 'lucide-react'
import React from 'react'
import Suggetions from './Suggestions'

const ChatHome = () => {
  return (
    <div className="w-full flex p-4 md:p-6 flex-col justify-center items-center overflow-y-auto">
          <h2 className="text-xl md:text-2xl font-semibold mb-4 md:mb-6 text-center">
            What can I help with?
          </h2>
          <div className="w-full max-w-2xl">
            <div className="flex gap-2">
              <div>
                <div className="flex-1 flex gap-2 min-w-0">
                  <button className="p-2 bg-gray-800 rounded-lg shrink-0">
                    <Mic size={20} />
                  </button>
                  <input
                    type="text"
                    placeholder="Write here....."
                    className="flex-1 bg-gray-800 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-orange-500 min-w-0"
                  />
                  <button className="p-2 bg-orange-500 rounded-lg hover:bg-orange-600 shrink-0">
                    <Send size={20} />
                  </button>
                </div>
                <div className="w-full m-8">
                  <Suggetions />
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default ChatHome
