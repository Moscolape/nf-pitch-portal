import MainWrapper from "@/components/general/main-wrapper";
import PitchList from "@/components/pitch-components/pitch-list";
import { add, assign, chevron2, deleteIt } from "@/constants/assets";
import { useEffect, useRef, useState } from "react";

const Pitch = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const modalRef = useRef<HTMLDivElement>(null);

  const handleShowDropdown = () => {
    setShowDropdown(!showDropdown);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const modalIcons = Array.from(document.querySelectorAll(`.more`));

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !modalIcons.some((icon) => icon.contains(event.target as Node))
      ) {
        setShowDropdown(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[91vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-medium">
          Pitch / <span className="text-main-6">Pitch list</span>
        </span>
        <div className="bg-white drop-shadow-md rounded-2xl p-8 mt-10">
          <div className="flex justify-between items-center">
            <button className="text-main-4 border border-main-3 py-2 px-5 rounded-full flex items-center more" onClick={handleShowDropdown}>
              <span className="text-h12">Bulk Action</span>
              <img src={chevron2} alt="" className="ml-2" />
            </button>
            {showDropdown && (
              <div
                ref={modalRef}
                className="font-Inter w-[15%] bg-white p-2 absolute top-20 left-5 flex flex-col rounded-lg shadow-lg z-30 animate-fadeDownFast"
              >
                <span className="text-h13 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                  <img src={assign} alt="" className="mr-2 scale-90" /> Assign
                  assessor
                </span>
                <span className="text-h13 text-accented-4 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                  <img src={deleteIt} alt="" className="mr-2 scale-90" /> Remove
                  from list
                </span>
              </div>
            )}
            <button className="bg-primary hover:bg-primary-sidebar py-2 px-5 rounded-full flex items-center font-DM-Sans">
              <img src={add} alt="" className="mr-1" />
              <span className="text-white text-h12">
                Add Candidate Manually
              </span>
            </button>
          </div>
          <PitchList />
        </div>
      </div>
    </MainWrapper>
  );
};

export default Pitch;
