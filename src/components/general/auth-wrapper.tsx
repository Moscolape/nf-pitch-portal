import { Logo } from "@/constants/assets";
import { ReactNode } from "react"; // Importing ReactNode type from React

// Define props interface for AuthWrapper component
type AuthWrapperProps = {
  children: ReactNode; // Children prop can be any valid ReactNode
};

// Functional component for the AuthWrapper
const AuthWrapper = ({ children }: AuthWrapperProps) => {
  return (
    <div className="h-screen bg-bg-pattern"> {/* Container covering the entire screen height */}
      <header className="flex items-center w-full px-16 py-5">
        <img src={Logo} alt="" />
        <span className="text-header-logoText text-2xl font-Montserrat font-bold ml-2">NF PITCH PORTAL</span>
      </header>
      <div className="flex justify-center h-[85%] items-center">
        {children}
      </div>
    </div>
  );
}

export default AuthWrapper; // Exporting the AuthWrapper component