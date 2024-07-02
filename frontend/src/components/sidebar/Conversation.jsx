import React from "react";

export default function Conversation() {
  return (
    <>
      <div className="flex gap-2 item-center hover:bg-sky-500 rounded p-2 py-1 curser-pointer ">
        <div className="relative inline-block">
          <img
            className="w-12 rounded-full border-2 border-white"
            src="https://pbs.twimg.com/profile_images/1333896976602193922/MtWztkxt_400x400.jpg"
          />
          <span className="w-4 h-4 rounded-full bg-green-500 border-2 border-white absolute bottom-0.5 right-0.5"></span>
        </div>
        <div className="Flex flex-col flex-1">
          <div className="flex gap-3 justify-between">
            <p className="font-bold text-gray-600">John Doe</p>
            <span className="text-xl">☎️</span>
          </div>
        </div>
      </div>

      <hr className="my-1 h-0.5 border-t-0 bg-gray-100" />
    </>
  );
}
