import React from 'react'
import { styles } from '../../styles'
import Messages from './Messages'
import SendMessage from './SendMessage'
import { TiMessages } from 'react-icons/ti'

export default function MessageBox() {
  const noChatSelected = false
  return (
    <div className='md:min-w-[450px] flex flex-col '>
      {noChatSelected ? <NoChatSelected/> : (
        <>
        <div className={`${styles.primary} rounded-none py-2 px-6 text-[#b2b3b8]`} >
          <span className={`label-text  `} >To: </span>
          <span className={`text-gray-500 font-bold`} >John Doe</span>
        </div>
  
        <Messages />
        <SendMessage />
        </>
      )}
    </div>
  )
}

const NoChatSelected =  () => {
  return (
    <>
    <div className='flex items-center justify-center w-full h-full'>
        <div className='px-4 text-center sm:text-lg md:text-xl text-[#325563] font-bold flex flex-col items-center gap-2'>
          <p>Welcome 🍺 Sushant Khadka</p>
          <p className='font-light'>No Chat Selected, Start A Conversation</p>
          <TiMessages className= {`text-3xl md:text-6xl text-center text-gray-500`} />
        </div>
    </div>
    </>
  )
}