import React from "react";
import MessageText from "./MessageText";
import { useAuthContext } from "../../context/AuthContext";
import useConversation from "../../store/useConversation";
import { extractTime } from "../../utils/extractTime";

export default function Message({ message }) {
  const { authUser } = useAuthContext();
  const { selectedConversation } = useConversation();
  const formattedTime = extractTime(message.createdAt);
  const fromMe = message.senderId === authUser._id;
  const profilePic = fromMe
    ? authUser.profilePic
    : selectedConversation?.profilePic;

  return (
    <>
      {!fromMe ? (
        <div className="flex gap-2.5 mb-4 mx-auto">
          <img src={profilePic} alt={profilePic} className="w-10 h-11" />
          <div className="grid">
            <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
            {selectedConversation.fullName}
            </h5>
            <div className="w-max grid">
              <div className="px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
                <h5 className="text-gray-900 text-sm font-normal leading-snug">
                  {message.message}
                </h5>
              </div>
              <div className="justify-end items-center inline-flex mb-2.5">
                <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  {formattedTime}
                </h6>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex gap-2.5 justify-end pb-40">
          <div className="">
            <div className="grid mb-2">
              <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
                You
              </h5>
              <div className="px-3 py-2 bg-indigo-600 rounded">
                <h2 className="text-white text-sm font-normal leading-snug">
                  {message.message}
                </h2>
              </div>
              <div className="justify-start items-center inline-flex">
                <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                  {formattedTime}
                </h3>
              </div>
            </div>
          </div>
          <img src={profilePic} alt={profilePic} className="w-10 h-11" />
        </div>
      )}
    </>
  );
}