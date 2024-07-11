import React, { useEffect, useRef } from 'react'
import Message from './Message'
import useGetMessages from '../../hooks/useGetMessages'
import useConversation from '../../store/useConversation'
import useListenMessages from '../../hooks/useListenMessages'

export default function Messages() {
  const {messages, loading} = useGetMessages()
  const {selectedConversation} = useConversation();
  useListenMessages();
  const lastMessageRef = useRef();

  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behaviour: "smooth" });
    },100 )
  },[messages])

  // console.log("messages:" ,messages);
  return (
    <div className='px-4 flex-1 overflow-auto'>
      {!loading && messages.length > 0 && messages.map((message) => (
         <div key={message._id} ref={lastMessageRef}>
          <Message key={message._id} message={message} />
         </div> 
      ))}

       {!loading && messages.length === 0 && (
        <p className='flex flex-col justify-center h-[100%] text-center text-gray-600 mt-5 font-medium'>Say Hello to {selectedConversation.fullName}👋</p>
       )}

    </div>
  )
}
