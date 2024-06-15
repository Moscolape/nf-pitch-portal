import {
  configure,
  dashboard,
  Logo,
  logout,
  overview,
  panel,
  pitch,
  reports,
  survey,
} from "@/constants/assets";
import { updateSidebarText } from "@/store/slice/sidebarText-slice";
import React from "react";
import { useState, useCallback } from "react"; // Importing hooks
import { useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"; // Importing Link and useLocation from react-router-dom

const Sidebar = React.memo(() => {
  const [isHovered, setIsHovered] = useState<string | null>(null);

  const location = useLocation();
  const dispatch = useDispatch();

  const handleLinkClick = useCallback(
    (text: string) => {
      dispatch(updateSidebarText(text));
    },
    [dispatch]
  );

  const mainLinks = [
    {
      text: "Overview",
      icon: overview,
      urls: ["/overview"],
    },
    {
      text: "Dashboard",
      icon: dashboard,
      urls: ["/dashboard"],
    },
    {
      text: "Pitch",
      icon: pitch,
      urls: ["/pitch"],
    },
    {
      text: "Survey",
      icon: survey,
      urls: ["/survey"],
    },
    {
      text: "Panel",
      icon: panel,
      urls: ["/panel"],
    },
    {
      text: "Reports",
      icon: reports,
      urls: ["/reports"],
    },
  ];

  const bottomLinks = [
    {
      text: "Configuration",
      icon: configure,
      urls: ["/configurations"],
    },
    {
      text: "Logout",
      icon: logout,
      urls: [],
    },
  ];

  const isActive = useCallback(
    (...to: string[]) => {
      return to.some((url) => location.pathname.startsWith(url));
    },
    [location.pathname]
  );

  return (
    <div className={`fixed w-[20%] z-40 h-full bg-primary-sidebar font-Inter`}>
      <div className="p-4 relative bg-white shadow h-[74px]">
        <div className="flex items-center">
          <img src={Logo} alt="logo" />
          <span className="text-primary-1 text-h9 font-Montserrat font-bold ml-2">
            NF PITCH PORTAL
          </span>
        </div>
      </div>
      <div className="mt-5 flex flex-col justify-between h-[87%]">
        <div className="px-4">
          <div>
            {mainLinks.map((link, index) => (
              <React.Fragment key={index}>
                <Link
                  to={link.urls[0]}
                  onClick={() => handleLinkClick(link.text)}
                >
                  <div
                    className={`mt-2 relative cursor-pointer rounded-full px-4 py-2 flex group ${
                      isActive(...link.urls) || isHovered === link.urls[0]
                        ? "bg-accented-3"
                        : ""
                    }`}
                    onMouseEnter={() => setIsHovered(link.urls[0])}
                    onMouseLeave={() => setIsHovered(null)}
                  >
                    <img src={link.icon} className="mr-2" />
                    <span className="text-white">{link.text}</span>
                  </div>
                </Link>
              </React.Fragment>
            ))}
          </div>
        </div>
        <div className="px-4">
          {bottomLinks.map((link, index) => (
            <React.Fragment key={index}>
              <Link
                to={link.urls[0]}
                onClick={() => handleLinkClick(link.text)}
              >
                <div
                  className={`mt-2 relative cursor-pointer rounded-full px-4 py-2 flex group ${
                    isActive(...link.urls) || isHovered === link.urls[0]
                      ? "bg-accented-3"
                      : ""
                  }`}
                  onMouseEnter={() => setIsHovered(link.urls[0])}
                  onMouseLeave={() => setIsHovered(null)}
                >
                  <img src={link.icon} className="mr-2" />
                  <span className="text-white">{link.text}</span>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Sidebar;
