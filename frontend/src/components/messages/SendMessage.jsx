import React, { useState } from "react";
import { GoPaperclip } from "react-icons/go";
import { LuSend } from "react-icons/lu";
import { styles } from "../../styles";
import { RxAvatar } from "react-icons/rx";
import useSendMessage from "../../hooks/useSendMessage";

export default function SendMessage() {

  const [message, setMessage] = useState("");
  const { loading, sendMessage } = useSendMessage();

  const _handleSubimt = async (e) => {
    e.preventDefault();
    if(!message) return;
    await sendMessage(message);
    setMessage('');
  }
  return (
    <>
      <form onSubmit={_handleSubimt}>
        <div className="w-full pl-3 pr-1 py-1 rounded-3xl border border-gray-200 items-center gap-2 inline-flex justify-between">
          <div className="flex items-center gap-2">
            <RxAvatar className="text-[#4daecb] " />
            <input
              className="grow shrink basis-0 w-[100%] bg-[#f5f3eb] text-black text-xs font-medium leading-4 p-2 rounded-lg outline-none border-none placeholder-gray-300"
              placeholder="Type here..."
              value={message}
              onChange={(e) => setMessage(e.target.value) }
            />
          </div>
          <div className="flex items-center gap-2">
            <GoPaperclip />
            <button
              className={`${styles.buttton} text-medium text-[#dde2e8] border-none 
               bg-[#4daecb] rounded-[50px] items-center flex px-3 py-2`}
            >
              <LuSend />
              <h3 className="text-xs font-semibold leading-4 px-2">Send</h3>
            </button>
          </div>
        </div>
      </form>
    </>
  );
}
