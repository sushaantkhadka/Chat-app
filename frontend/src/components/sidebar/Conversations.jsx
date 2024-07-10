import React from 'react'
import Conversation from './Conversation'
import useGetConversations from '../../hooks/useGetConversations'

export default function Conversations() {

  const {conversations} = useGetConversations();
  console.log("Conversations:", conversations);

  return (
    <div className='py-2 flex flex-col overflow-auto'>
        {conversations.map((conversation, idx) => (
          <Conversation
          key={conversation._id}
          conversation={conversation}
          lastIdx = {idx === conversation.length - 1}
          />
        ))}
    </div>
  )
}
