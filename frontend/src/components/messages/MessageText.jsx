import React from "react";

export default function MessageText({ status, img, profileName, message }) {
  return (
    <div>
      {status === "sent" ? (
        <MessageSent img={img} message={message} />
      ) : (
        <MessageReceived
          img={img}
          profileName={profileName}
          message={message}
        />
      )}
    </div>
  );
}

const MessageReceived = ({img, profileName, message}) => {
  return (
    <>
      <div className="flex gap-2.5 mb-4 mx-auto">
        <img src={img} alt={img} className="w-10 h-11" />
        <div className="grid">
          <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
            {profileName}
          </h5>
          <div className="w-max grid">
            <div className="px-3.5 py-2 bg-gray-100 rounded-3xl rounded-tl-none justify-start  items-center gap-3 inline-flex">
              <h5 className="text-gray-900 text-sm font-normal leading-snug">
                {message}
              </h5>
            </div>
            <div className="justify-end items-center inline-flex mb-2.5">
              <h6 className="text-gray-500 text-xs font-normal leading-4 py-1">
                05:14 PM
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const MessageSent = ({img, message}) => {
  return (
    <>
      <div className="flex gap-2.5 justify-end pb-40">
        <div className="">
          <div className="grid mb-2">
            <h5 className="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
              You
            </h5>
            <div className="px-3 py-2 bg-indigo-600 rounded">
              <h2 className="text-white text-sm font-normal leading-snug">
                {message}
              </h2>
            </div>
            <div className="justify-start items-center inline-flex">
              <h3 className="text-gray-500 text-xs font-normal leading-4 py-1">
                05:14 PM
              </h3>
            </div>
          </div>
        </div>
        <img
          src={img}
          alt={img}
          className="w-10 h-11"
        />
      </div>
    </>
  );
};
