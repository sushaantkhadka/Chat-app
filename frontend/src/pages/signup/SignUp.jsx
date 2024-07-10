import React, { useState } from 'react'
import GenderCheckBox from './GenderCheckBox'
import { styles } from '../../styles'
import { Link } from 'react-router-dom'
import useSignup from '../../hooks/useSignup'


const SignUp = () => {
  const [inputs, setInputs] = useState({
    fullName: "",
    username: "",
    password: "",
    confirmPassword: "",
    gender: "",
  })

  const {loading, signup} = useSignup();

  const _handleCheckBoxChange = (gender) => {
    setInputs({...inputs,gender})
  }

  const _handleSubmit = async (e) => {
    e.preventDefault();
    await signup(inputs);
  }

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className={`mt-6 h-[700px] w-[400px] backdrop-blur-[20px] webkit-backdrop-blur-[20px] flex flex-col items-center justify-center text-center ${styles.primary}`}
        >
          <h1 className="text-gery-600 text-3xl font-semibold">
            SignUp
            <span className="text-[#4daecb] font-bold"> TeamCHAT</span>
          </h1>

          <form onSubmit={_handleSubmit}>
            <div className="flex flex-col justify-center items-center mt-5">
              <input
                type="text"
                className={`${styles.input}`}
                placeholder="First Name"
                value={inputs.fullName}
                onChange={(e) => setInputs({...inputs, fullName:e.target.value})}
              />
              <input
                type="text"
                className={`${styles.input}`}
                placeholder="Username"
                value={inputs.username}
                onChange={(e) => setInputs({...inputs, username:e.target.value})}
              />

              <input
                type="password"
                className={`${styles.input}`}
                placeholder="Password"
                value={inputs.password}
                onChange={(e) => setInputs({...inputs, password:e.target.value})}
              />
              <input
                type="password"
                className={`${styles.input}`}
                placeholder="Confirm Password"
                value={inputs.confirmPassword}
                onChange={(e) => setInputs({...inputs, confirmPassword:e.target.value})}
              />

             <GenderCheckBox onCheckBoxChange={_handleCheckBoxChange} selectedGender={inputs.gender} />

             <button
                disabled={loading}
                className={`${styles.buttton} m-4 px-6 py-4 w-[90%] text-medium font-bold text-[#dde2e8] border-none 
               bg-[#4daecb] rounded-[50px]`}>
                {loading ? "Loading..." : "Sign Up"}
               </button>
            </div>
          </form>

          <p className="text-[#b5b6b9] ">
            <Link to={"/login"} className="hover:text-[#4daecb]">
              Already have account? Login
            </Link>
          </p>
        </div>
      </div>
    </>
  )
}

export default SignUp