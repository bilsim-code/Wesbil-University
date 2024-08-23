import { useState } from "react";
import { FaEye, FaEyeSlash,} from "react-icons/fa";
import {XSquare} from 'react-feather'
import { useNavigate } from "react-router-dom";
const StudentPortalLogin = () => {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  return (
    <>
    <div className="h-screen flex items-center justify-center">
      <form className="bg-gold p-10 rounded-md shadow-xl relative">
      <XSquare className="absolute right-2 top-4 hover:bg-red hover:font-bold" role="button" onClick={() => navigate("/")}/>
        <h2 className="font-medium text-2xl text-center pb-10 mx-2">
          Login to your Student&apos;s Portal
        </h2>
        <label htmlFor="username" hidden>
          Username
        </label>
        <input
          className="form-input w-full rounded-md mb-5 border-2 border-gold focus:border-none"
          type="text"
          name="username"
          id="username"
          placeholder="Enter your username"
        />
        <label htmlFor="password" hidden>
          Password
        </label>
        <div className="relative flex flex-col items-center pb-5 justify-center">
          <input
            className="form-input w-full rounded-md  border-2 border-gold focus:border-none "
            type={`${showPassword ? "text" : "password"}`}
            name="password"
            id="password"
            placeholder="Enter your password"
          />
          {showPassword ? (
            <FaEyeSlash
              className="absolute right-2.5 text-gray "
              role="button"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          ) : (
            <FaEye
              className="absolute right-2.5 text-gray "
              role="button"
              onClick={() => setShowPassword((prev) => !prev)}
            />
          )}
        </div>

        <div className="flex items-center gap-1">
            <input type="checkbox" name="check" id="check" required className="form-checkbox rounded-md cursor-pointer" />
            <label htmlFor="check">save password for your next login</label>
        </div>

        <button
          type="submit"
          className="mt-6 bg-royalblue text-white p-2 grid mx-auto w-1/2 rounded-md font-semibold font-serif"
        >
          Login
        </button>
      </form>
    </div>
    </>
  );
};

export default StudentPortalLogin;
