import React from "react";
import SearchInput from "./SearchInput";
import Conversations from "./Conversations";
import LogoutBtn from "./LogoutBtn";

export default function Sidebar() {
  return (
    <>
      <div className="border-r border-slate-500 p-4 flex flex-col">
        <SearchInput />
        <hr className="my-3 h-0.5 border-t-0 bg-gray-100" />
        <Conversations />
        <LogoutBtn />
      </div>
    </>
  );
}
