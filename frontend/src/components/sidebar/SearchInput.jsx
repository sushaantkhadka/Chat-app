import React from "react";
import { styles } from "../../styles";
import { IoSearchSharp } from "react-icons/io5";

export default function SearchInput() {
  return (
    <>
      <form className="flex items-start gap-2">
        <input
          type="text"
          placeholder="Search"
          className={`${styles.primary} px-6 py-2 outline-none text-[#333333] `}
        />
        <button
          type="submit"
          className={`${styles.primary} p-2 flex items-center justify-center text-[#b2b3b8] hover:bg-[#4daecb] hover:text-[#dde2e8] `}
        >
          <IoSearchSharp className={`w-6 h-6 outline-none  `} />
        </button>
      </form>
    </>
  );
}
