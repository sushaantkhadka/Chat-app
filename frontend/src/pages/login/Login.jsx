import React from "react";
import { styles } from "../../styles";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useLogin } from "../../hooks/useLogin";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { loading, login } = useLogin();

  const _handleSubmit = async (e) => {
    e.preventDefault();
    await login({username,password});
  };

  return (
    <>
      <div className="flex items-center justify-center">
        <div
          className={`mt-[10vh] h-[600px] w-[400px] backdrop-blur-[20px] webkit-backdrop-blur-[20px] flex flex-col items-center justify-center text-center ${styles.primary}`}
        >
          <h1 className="text-gery-600 text-3xl">
            Login
            <span className="text-[#4daecb] font-bold"> TeamCHAT</span>
          </h1>

          <form onSubmit={_handleSubmit}>
            <div className="flex flex-col justify-center items-center mt-5">
              <input
                type="text"
                className={`${styles.input}`}
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <input
                type="password"
                className={`${styles.input}`}
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <button
                disabled={loading}
                className={`${styles.buttton} m-4 px-6 py-4 w-[90%] text-medium font-bold text-[#dde2e8] border-none 
               bg-[#4daecb] rounded-[50px]`}
              >
                {loading ? "Loading.." : "Login"}
              </button>

            </div>
          </form>

          <p className="text-[#b5b6b9] ">
            <Link to={"/"} className="hover:text-[#4daecb]">
              Forgot Password?{" "}
            </Link>{" "}
            <strong className="text-[#333333]">Or</strong>{" "}
            <Link to={"/signup"} className="hover:text-[#4daecb]">
              Signup
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
