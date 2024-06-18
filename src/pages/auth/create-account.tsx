import AuthWrapper from "@/components/general/auth-wrapper";
import {
  arrowLogin,
  bottomgradient,
  check,
  corper,
  eye,
  eyeSlash,
} from "@/constants/assets";
import { countryCodes } from "@/utils/country-codes";
import { states } from "@/utils/states";
import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import Select, { CSSObjectWithLabel, SingleValue } from "react-select";
import Flag from "react-world-flags";

interface OptionType {
  value: string;
  label: JSX.Element;
}

const CreateAccount = () => {
  const [passwordVisible, setPasswordVisible] = useState<boolean>(false);

  const options: OptionType[] = countryCodes.map((country) => ({
    value: country.code,
    label: (
      <div style={{ display: "flex", alignItems: "center" }}>
        <Flag
          code={country.flag}
          style={{ width: "20px", height: "15px", marginRight: "10px" }}
        />
        {country.flag} ({country.code})
      </div>
    ),
  }));

  const [selectedOption, setSelectedOption] = React.useState<OptionType | null>(
    options[0]
  );
  const [inputValue, setInputValue] = useState<string>("");

  const handleSelectChange = (option: SingleValue<OptionType>) => {
    setSelectedOption(option);
  };

  const handleInputChange = (value: string) => {
    setInputValue(value);
  };

  return (
    <AuthWrapper>
      <div className="flex">
        <div className="mr-5 rounded-2xl bg-gradient-to-b from-[#1E5E3F] to-[#0E2B1D] relative">
          <img src={corper} alt="" />
          <img
            src={bottomgradient}
            alt=""
            className="absolute bottom-0 rounded-b-2xl"
          />
          <div className="absolute bottom-32 z-10 w-full flex justify-center items-center">
            <img src={check} alt="" className="mr-1 mt-2" />
            <div className="mt-3 font-DM-Sans">
              <span className="text-white text-h12">
                Do you have an account?
              </span>
              <Link to="/">
                <span className="text-accented-1 font-medium ml-1 text-h12 hover:underline">
                  Login here
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="p-10 bg-white rounded-2xl border border-primary-bordered flex flex-col w-[70%]">
          <div>
            <span className="block font-DM-Sans text-main-1 text-h6 font-semibold">
              Create an account
            </span>
            <span className="text-main-2 text-h12 font-DM-Sans">
              Complete the form to get started
            </span>
          </div>
          <div className="my-5">
            <div className="w-full flex justify-between">
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="firstName"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="First Name"
                />
              </div>
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="lastName"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="Last Name"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="middleName"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  Middle Name
                </label>
                <input
                  type="text"
                  id="middleName"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="Middle Name"
                />
              </div>
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="email"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="Email Address"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="nin"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  NIN Number
                </label>
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="NIN Number"
                />
              </div>
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="password"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  Your Password
                </label>
                <div className="relative">
                  <input
                    type={passwordVisible ? "text" : "password"}
                    id="password"
                    className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                    placeholder="***********"
                  />
                  <img
                    onClick={() => setPasswordVisible(!passwordVisible)}
                    src={passwordVisible ? eye : eyeSlash}
                    className="absolute sm:right-3 mo:right-3 bottom-3 cursor-pointer"
                  />
                </div>
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="mt-5 w-[20%]">
                <label
                  htmlFor="state"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  Phone Number
                </label>
                <Select
                  id="country-code-select"
                  value={selectedOption}
                  onChange={handleSelectChange}
                  options={options}
                  inputValue={inputValue}
                  onInputChange={handleInputChange}
                  styles={{
                    control: (base: CSSObjectWithLabel) => ({
                      ...base,
                      minWidth: 170,
                    }),
                    menu: (base: CSSObjectWithLabel) => ({
                      ...base,
                      zIndex: 9999,
                      minWidth: 170
                    }),
                  }}
                  onMenuOpen={() => {}}
                  onMenuClose={() => {}}
                />
              </div>
              <div className="mt-12 w-[72%]">
                <input
                  type="text"
                  id="phone"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                  placeholder="Phone Number"
                />
              </div>
            </div>
            <div className="w-full flex justify-between">
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="state"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  State of Origin
                </label>
                <select
                  id="state"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                >
                  <option value="">--select state-</option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
              <div className="mt-5 w-[48%]">
                <label
                  htmlFor="city"
                  className="block font-DM-Sans font-Inter font-medium text-h12 mb-2 text-main-3"
                >
                  State of Service
                </label>
                <select
                  id="state"
                  className="px-4 py-2 border border-gray-2 rounded-full outline-none w-full"
                >
                  <option value="">--select state-</option>
                  {states.map((state) => (
                    <option key={state.name} value={state.name}>
                      {state.name}
                    </option>
                  ))}
                </select>
              </div>
            </div>
          </div>
          <div className="mt-3 font-DM-Sans">
            <span className="text-main-2 text-h12">
              By clicking create account, you agree to our Consent Clause for
            </span>
            <span className="text-red-600 font-medium ml-1 text-h12">
              Data Collection and Privacy Policy
            </span>
          </div>
          <Link to="/verify-email">
            <button
              type="submit"
              className="flex items-center justify-center hover:bg-primary-dark bg-primary text-white py-3 w-1/3 rounded-full mt-5 text-h11 cursor-pointer"
            >
              <span className="mr-3 font-medium font-DM-Sans">
                Create Account
              </span>
              <img src={arrowLogin} alt="" className="scale-110 mt-1" />
            </button>
          </Link>
        </div>
      </div>
    </AuthWrapper>
  );
};

export default CreateAccount;
