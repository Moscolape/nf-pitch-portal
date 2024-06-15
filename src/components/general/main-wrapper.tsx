import { ReactNode, useEffect, useState } from "react";
import Navbar from "./navbar";
import Sidebar from "./sidebar";

type DashboardWrapperProps = {
  children: ReactNode;
};

// ErrorBoundaryComponent catches errors that occur within its children
const ErrorBoundaryComponent: React.FC<DashboardWrapperProps> = ({
  children,
}) => {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    // Error handler function
    const handleError = () => {
      setHasError(true);
    };

    // Attach error event listener to window
    window.addEventListener("error", handleError);

    // Clean up event listener
    return () => {
      window.removeEventListener("error", handleError);
    };
  }, []);

  // Render error message if an error occurred
  if (hasError) {
    return <div>Oops! Something went wrong.</div>;
  }

  // Render children if no error occurred
  return <>{children}</>;
};

// MainWrapper component wraps the application with a sidebar, navbar, and error boundary
const MainWrapper: React.FC<DashboardWrapperProps> = ({ children }) => {
  // Render DashboardWrapper component with sidebar, navbar, and content area
  return (
    <ErrorBoundaryComponent>
      <div className="w-full h-full">
        <Sidebar />
        <Navbar />
        <div className="ml-[20%] w-[80%] relative transition-all duration-500 pt-[74px]">
          {children}
        </div>
      </div>
    </ErrorBoundaryComponent>
  );
};

export default MainWrapper;
