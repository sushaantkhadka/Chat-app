import React from "react";
import { styles } from "../../styles";

const Login = () => {
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

          <form>
            <div className="flex flex-col justify-center items-center mt-5">
              <input
                type="text"
                className={`${styles.input}`}
                placeholder="Username"
              />
              <input
                type="password"
                className={`${styles.input}`}
                placeholder="Password"
              />

              <input
                type="button"
                className={`${styles.buttton} m-4 px-6 py-4 w-[90%] text-medium font-bold text-[#dde2e8] border-none 
               bg-[#4daecb] rounded-[50px]`}
                value="Login"
              />
            </div>
          </form>

          <p className="text-[#b5b6b9] ">
            <a href="/" className="hover:text-[#4daecb]">
              Forgot Password?{" "}
            </a>{" "}
            <strong className="text-[#333333]">Or</strong>{" "}
            <a href="/" className="hover:text-[#4daecb]">
              Signup
            </a>
          </p>
        </div>
      </div>
    </>
  );
};

export default Login;
