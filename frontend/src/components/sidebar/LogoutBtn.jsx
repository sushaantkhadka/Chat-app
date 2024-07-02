import React, { useState } from 'react'
import { BiLogOut } from "react-icons/bi";
import useLogout from '../../hooks/useLogout';

export default function LogoutBtn() {
  const {loading, logout} = useLogout();
  return (
    <div className='mt-atuo'>
        <BiLogOut className='w-6 h-6 mt-2 text-gray-400 cursor-pointer'
        onClick={logout} />
    </div>
  )
}
