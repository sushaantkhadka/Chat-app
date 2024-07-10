import React, { useState } from "react";
import { styles } from "../../styles";
import useConversation from '../../store/useConversation'
import { IoSearchSharp } from "react-icons/io5";
import useGetConversation from '../../hooks/useGetConversations'
import toast from "react-hot-toast";

export default function SearchInput() {
  const [search, setSearch] = useState("");
  const {setSelectedConversation} = useConversation();
  const { conversations } = useGetConversation()

  const _handleSubmit = (e) => {
    e.preventDefault();
    if(!search) return;
    if(search.length < 3){
      return toast.error('Search should be atleast 3 Character Long')
    }

    const conversation = conversations.find((c) => c.fullName.toLowerCase().includes(search.toLocaleLowerCase()))

    if(conversation) {
      setSelectedConversation(conversation)
      setSearch('');
    } else toast.error("No such user found")
  }
  return (
    <>
      <form onSubmit={_handleSubmit} className="flex items-start gap-2">
        <input
          type="text"
          placeholder="Search"
          className={`${styles.primary} px-6 py-2 outline-none text-[#333333] `}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
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
