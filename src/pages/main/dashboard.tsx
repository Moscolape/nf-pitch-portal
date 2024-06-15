import PitchSummary from "@/components/dashboard-components/pitch-summary";
import PitchVideo from "@/components/dashboard-components/pitch-video";
import UploadedDocs from "@/components/dashboard-components/uploaded-documents";
import MainWrapper from "@/components/general/main-wrapper";
import { camera, menuIcon, profilePic } from "@/constants/assets";
import { useState } from "react";

const Dashboard = () => {
  // State to manage the active tab (summary or video)
  const [activeTab, setActiveTab] = useState<"summary" | "video">(
    () => {
      const storedTab = sessionStorage.getItem("activeTab");
      return storedTab === "video" ? "video" : "summary";
    }
  );

  const toggleTab = (tab: "summary" | "video") => {
    setActiveTab(tab);
    sessionStorage.setItem("activeTab", tab);
  };

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[89vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-semibold">
          Dashboard
        </span>
        <div className="grid grid-cols-3 gap-x-5 mt-7 font-DM-Sans">
          <div className="col-span-1 bg-white drop-shadow-md rounded-2xl p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="relative">
                <img src={profilePic} alt="" className="" />
                <img
                  src={camera}
                  alt=""
                  className="absolute bottom-1 right-1 bg-primary p-2 rounded-full"
                />
              </div>
              <div className="mt-5 text-center">
                <span className="block text-h9 text-main-3 font-semibold mb-5">
                  Rayna, Stanton Victoria
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>Email:</b> Raystavic@gmail.com
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>Phone:</b> 08115456386
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>NIN:</b> 176238917218972
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>State of Origin:</b> FCT
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>State of Service:</b> Delta
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white drop-shadow-md rounded-2xl p-8">
            <span className="text-h8 text-main-5 font-semibold">Documents</span>
            <div className="mt-10">
              <UploadedDocs />
            </div>
          </div>
        </div>
        <div className="font-DM-Sans mt-8 bg-white p-8 rounded-xl">
          <div className="flex justify-between">
            <span className="text-h8 font-semibold">Pitch</span>
            <img src={menuIcon} alt="" />
          </div>
          <div className="mt-10 flex justify-between items-center">
            <span className="text-accented-10 text-h9 font-semibold">
              Title: Sweet Haven Bakery: Where Every Bite is a Delight
            </span>
            <div className="flex">
              <button
                className={`${
                  activeTab === "summary"
                    ? "bg-accented-2 text-white"
                    : "hover:bg-accented-6 text-main-4 border border-main-3"
                } rounded-full px-4 py-3 font-medium mr-3`}
                onClick={() => toggleTab("summary")}
              >
                Summary
              </button>
              {/* Button to switch to the "Unpublished" tab */}
              <button
                className={`${
                  activeTab === "video"
                    ? "bg-accented-2 text-white"
                    : "hover:bg-accented-6 text-main-4 border border-main-3"
                } rounded-full px-4 py-3 font-medium`}
                onClick={() => toggleTab("video")}
              >
                Pitch Video
              </button>{" "}
            </div>
          </div>
          <div className="mt-10">
            {activeTab === "summary" && <PitchSummary/>}
            {activeTab === "video" && <PitchVideo/>}
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Dashboard;