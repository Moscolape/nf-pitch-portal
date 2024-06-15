import AuthWrapper from "@/components/general/auth-wrapper";
import { arrowLogin, eye, eyeSlash } from "@/constants/assets";
import { ChangeEvent, useState } from "react";
import { Link } from "react-router-dom";

const Login = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // Define functions to handle email change, password change, and form submission
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the email state with the new value from the input
    const newEmail = event.target.value;
    setEmail(newEmail);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    // Update the password state with the new value from the input
    const newPassword = event.target.value;
    setPassword(newPassword);
  };

  return (
    <AuthWrapper>
      <div className="p-10 bg-white rounded-2xl border border-primary-bordered flex flex-col w-[40%]">
        <div>
          <span className="block font-DM-Sans text-main-1 text-h6 font-semibold">
            Welcome Back
          </span>
          <span className="text-main-2 text-h12 font-DM-Sans">
            Please sign in to your account
          </span>
        </div>
        <div className="my-5">
          {/* Email input */}
          <div className="mt-5">
            <label
              htmlFor="email"
              className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
            >
              Email Address
            </label>
            <input
              type="email"
              className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
              placeholder="nf-portal"
              onChange={handleEmailChange}
              value={email}
              // disabled={loading}
            />
          </div>
          {/* Password input */}
          <div className="mt-5">
            <label
              htmlFor="pwd"
              className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
            >
              Your Password
            </label>
            <div className="relative">
              <input
                type={passwordVisible ? "text" : "password"}
                className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                placeholder="***********"
                onChange={handlePasswordChange}
                value={password}
                // disabled={loading}
              />
              {/* Toggle password visibility */}
              <img
                onClick={() => setPasswordVisible(!passwordVisible)}
                src={passwordVisible ? eye : eyeSlash}
                className="absolute sm:right-3 mo:right-3 bottom-3 cursor-pointer"
              />
            </div>
          </div>
        </div>
        <Link to="/dashboard">
          <button
            type="submit"
            className="flex items-center justify-center hover:bg-primary-dark bg-primary text-white py-3 w-full rounded-full mt-5 text-h11 cursor-pointer"
          >
            {/* {loading ? (
            <Spinner
              size="md"
              color="white"
              mr={2}
              thickness="3px"
              speed="0.8s"
            />
          ) : ( */}
            <span className="mr-3 font-medium font-DM-Sans">Login</span>
            <img src={arrowLogin} alt="" className="scale-110 mt-1" />
            {/* )} */}
          </button>
        </Link>
        <div className="mt-3 font-DM-Sans">
          <span className="text-main-2 text-h12">New User?</span>
          <Link to="/create-account">
            <span className="text-primary font-medium ml-1 text-h12">
              Create new account
            </span>
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default Login;
