import { deleteIt, eye, iconhorizon } from "@/constants/assets";
import { Panelist } from "@/pages/main/panel";
import { useEffect, useRef, useState } from "react";


interface PanelListProps {
  panelList: Panelist[];
}

const PanelList: React.FC<PanelListProps> = ({ panelList }) => {
  const [showDropdownIndex, setShowDropdownIndex] = useState<number>(-1);

  const handleShow = (index: number) => {
    setShowDropdownIndex(index === showDropdownIndex ? -1 : index);
  };

  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      const modalIcons = Array.from(document.querySelectorAll(`.more`));

      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node) &&
        !modalIcons.some((icon) => icon.contains(event.target as Node))
      ) {
        setShowDropdownIndex(-1);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div>
      <div className="w-full mt-10 bg-white m-auto font-Inter border rounded-lg">
        <div className="py-3 px-2 flex items-center bg-gray rounded-lg border-b">
          <span className="flex w-[30%] text-h12 font-bold">
            Name of Member
          </span>
          <span className="flex w-[30%] text-h12 font-bold">
            Number of Assigned Pitch
          </span>
          <span className="block w-[30%] text-h12 font-bold">
            Completed Assessment
          </span>
          <span className="block text-center w-[10%] text-h12 font-bold">Actions</span>
        </div>

        <div className="">
          {panelList.map((panelist, index) => (
            <div
              key={index}
              className={`${
                index % 2 !== 0 ? "bg-main-7" : "bg-white"
              } py-3 px-2 font-DM-Sans`}
            >
              <div className="cursor-pointer flex items-center justify-between w-full relative">
                <span className="block w-[30%] text-h12 text-[#272525] font-normal">
                  <input
                    type="checkbox"
                    className="mr-2 mt-2 inline-block accent-primary"
                  />
                  {panelist.nameOfMember}
                </span>
                <span className="block w-[30%] text-h12 text-gray-1 font-normal">
                  {panelist.assignedPitches}
                </span>
                <span className="block w-[30%] text-h12 text-main-4 font-normal">
                  {panelist.completedAssessment}
                </span>
                <span className="flex justify-center w-[10%] text-h12 font-normal">
                  <img
                    src={iconhorizon}
                    alt=""
                    className="p-2 bg-main-8 more"
                    onClick={() => handleShow(index)}
                  />
                </span>
                {showDropdownIndex === index && (
                  <div
                    ref={modalRef}
                    className="font-Inter bg-white p-2 absolute top-14 right-6 flex flex-col rounded-lg drop-shadow-md z-30"
                  >
                    <span className="text-h13 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                      <img src={eye} alt="" className="-ml-1 scale-75" /> View
                    </span>
                    <span className="text-h13 text-accented-4 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                      <img src={deleteIt} alt="" className="mr-2 scale-90" />{" "}
                      Remove from list
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PanelList;