import { menuIcon } from "@/constants/assets";
import PitchSummary from "./pitch-summary";
import PitchVideo from "./pitch-video";
import { useState } from "react";

// type ComposedPitchProps = {
//   activeTab: string;
//   toggleTab: (tab: "summary" | "video") => void;
// };

const ComposedPitch = () => {
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
    <div>
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
          {activeTab === "summary" && <PitchSummary />}
          {activeTab === "video" && <PitchVideo />}
        </div>
      </div>
    </div>
  );
};

export default ComposedPitch;
