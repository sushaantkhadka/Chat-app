import React from "react";
import MessageText from "./MessageText";

export default function Message() {
  return (
    <>
      <div className="flex gap-2.5 mb-4 mx-auto">
        <img
          src="https://pagedone.io/asset/uploads/1710412177.png"
          alt="Shanay image"
          className="w-10 h-11"
        />
        <div className="grid">
          <h5 className="text-gray-900 text-sm font-semibold leading-snug pb-1">
            Shanay cruz
          </h5>
          <div className="w-max grid">
            <MessageText status={"received"} />
          </div>
        </div>
      </div>

      <div class="flex gap-2.5 justify-end pb-40">
        <div class="">
          <div class="grid mb-2">
            <h5 class="text-right text-gray-900 text-sm font-semibold leading-snug pb-1">
              You
            </h5>
            <MessageText status={"sent"} />
          </div>
        </div>
        <img
          src="https://pagedone.io/asset/uploads/1704091591.png"
          alt="Hailey image"
          class="w-10 h-11"
        />
      </div>
    </>
  );
}
