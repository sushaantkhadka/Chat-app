import React from 'react'
import { BiLogOut } from "react-icons/bi";

export default function LogoutBtn() {
  return (
    <div className='mt-atuo'>
        <button>
            <BiLogOut className='w-6 h-6 mt-2 text-gray-400 cursor-pointer' />
        </button>
    </div>
  )
}
