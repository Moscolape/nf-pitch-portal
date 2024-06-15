import AuthWrapper from "@/components/general/auth-wrapper";
import { Link } from "react-router-dom";

const VerifyEmail = () => {
  return (
    <AuthWrapper>
      <div className="p-10 bg-white rounded-2xl border border-primary-bordered flex flex-col items-center justify-center w-[70%] h-[80%]">
        <span className="block font-DM-Sans text-main-1 text-h6 font-semibold">
          Verify your email
        </span>
        <span className="text-h12 font-DM-Sans text-main-2 block w-2/3 text-center my-3">
          Thank you for registering! To complete the process, please check your
          email for a verification link. Click on the link to confirm your email
          address.
        </span>
        <Link to='/'>
          <button
            type="submit"
            className="flex items-center justify-center bg-accented-2 text-white py-3 px-5 w-full rounded-full mt-5 text-h11 font-DM-Sans cursor-pointer"
          >
            Proceed to Login
          </button>
        </Link>
      </div>
    </AuthWrapper>
  );
};

export default VerifyEmail;
