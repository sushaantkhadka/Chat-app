import React, { useState } from 'react'
import { useAuthContext } from "../context/AuthContext";
import toast from "react-hot-toast";


export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const {setAuthUser} =  useAuthContext();

  const login = async ({username,password}) => {
    const success = _handleInputErrors({
      username,
      password,
    });

    if (!success) return

    setLoading(true);
    try {
        const res = await fetch("/api/auth/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({username,password}),
          });

          const data = await res.json();

          // const username = await data.username

          if (data.error) {
            throw new Error(data.error);
          }

        //localstorage
      localStorage.setItem("chat-user",JSON.stringify(data));
      //context
      setAuthUser(data);
    } catch (error) {
        toast.error(error.message);
    } finally {
        setLoading(false);
      }
  };

  return {loading,login}
}

function _handleInputErrors({
  username,
  password,
}) {
  if (!username || !password) {
    toast.error("Please fill all fields");
    return false;
  }

  return true;
}
