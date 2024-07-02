import React from "react";

export default function MessageText({status}) {

  return <div>{status === "sent" ? <MessageSent /> : <MessageReceived />}</div>;
}

const MessageReceived = () => {
  return (
    <>
      <div className="px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
        <h5 className="text-gray-900 text-sm font-normal leading-snug">
          I’m down! Any ideas??
        </h5>
      </div>
      <div className="justify-end items-center inline-flex mb-2.5">
        <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
          05:14 PM
        </h6>
      </div>
    </>
  );
};

const MessageSent = () => {
  return (
    <>
      <div class="px-3 py-2 bg-indigo-600 rounded">
        <h2 class="text-white text-sm font-normal leading-snug">
          Yes, let’s see, send your work here
        </h2>
      </div>
      <div class="justify-start items-center inline-flex">
        <h3 class="text-gray-500 text-xs font-normal leading-4 py-1">
          05:14 PM
        </h3>
      </div>
    </>
  );
};
