import { assess, deleteIt, eye, iconhorizon } from "@/constants/assets";
import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";

const pitchList = [
  {
    nameOfCandidate: "Kaylynn Aminoff",
    pitchTitle: "Sweet Haven Bakery: Where Every Bite is a Delight",
    industry: "Agriculture",
    stateOfOrigin: "Imo",
    stateOfService: "Gombe",
    status: "Waiting",
  },
  {
    nameOfCandidate: "Jane Done",
    pitchTitle: "Sweet Haven Bakery: Where Every Bite is a Delight",
    industry: "Agriculture",
    stateOfOrigin: "Imo",
    stateOfService: "Gombe",
    status: "Checked",
  },
  {
    nameOfCandidate: "John Evan",
    pitchTitle: "Sweet Haven Bakery: Where Every Bite is a Delight",
    industry: "Agriculture",
    stateOfOrigin: "Imo",
    stateOfService: "Gombe",
    status: "Unchecked",
  },
  {
    nameOfCandidate: "Mark Henry",
    pitchTitle: "Sweet Haven Bakery: Where Every Bite is a Delight",
    industry: "Agriculture",
    stateOfOrigin: "Imo",
    stateOfService: "Gombe",
    status: "Assessed",
  },
];

const getStatusClasses = (status: string) => {
  switch (status) {
    case "Waiting":
      return "bg-accented-11 text-center rounded-md text-black";
    case "Checked":
      return "bg-accented-7 text-center rounded-md text-accented-9";
    case "Unchecked":
      return "bg-main-4 text-center rounded-md text-white";
    case "Assessed":
      return "bg-accented-5 text-center rounded-md text-accented-1";
    default:
      return "";
  }
};

const PitchList = () => {
  const [showDropdownIndex, setShowDropdownIndex] = useState(-1);

  // Function to handle showing/hiding dropdown menu
  const handleShow = (index: number) => {
    setShowDropdownIndex(index === showDropdownIndex ? -1 : index);
  };

  // Ref for dropdown menu
  const modalRef = useRef<HTMLDivElement>(null);

  // Effect for handling click outside dropdown to close it
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
          <span className="flex w-[17%] text-h12 font-bold">
            Name of Candidate
          </span>
          <span className="flex w-[26%] text-h12 font-bold">Pitch Title</span>
          <span className="block w-[12%] text-h12 font-bold">Industry</span>
          <span className="block w-[14%] text-h12 font-bold">
            State of Origin
          </span>
          <span className="block w-[14%] text-h12 font-bold">
            State of Service
          </span>
          <span className="flex justify-center w-[10%] text-h12 font-bold">
            Status
          </span>
          <span className="block w-[7%] text-h12 font-bold">Actions</span>
        </div>

        <div className="">
          {pitchList.map((pitch, index) => (
            <div
              key={index}
              className={`${
                index % 2 !== 0 ? "bg-main-7" : "bg-white"
              } py-3 px-2 font-DM-Sans`}
            >
              <div className="cursor-pointer flex items-center justify-between w-full relative">
                <span className="block w-[17%] text-h12 text-[#272525] font-normal">
                  <input
                    type="checkbox"
                    className="mr-2 mt-2 inline-block accent-primary"
                  />
                  {pitch.nameOfCandidate}
                </span>
                <div className="flex w-[26%]">{pitch.pitchTitle}</div>
                <span className="block w-[12%] text-h12 text-gray-1 font-normal">
                  {pitch.industry}
                </span>
                <span className="block w-[14%] text-h12 text-main-4 font-normal">
                  {pitch.stateOfOrigin}
                </span>
                <span className="group-hover:scale-105 block w-[14%] text-h12 text-gray-1 font-normal">
                  {pitch.stateOfService}
                </span>
                <span
                  className={`group-hover:scale-105 fle justify-center w-[10%] text-h12 font-normal ${getStatusClasses(
                    pitch.status
                  )}`}
                >
                  {pitch.status}
                </span>
                <span className="flex justify-center w-[7%] text-h12 font-normal">
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
                    <Link to={`/pitch/candidate/${pitch.nameOfCandidate}`}>
                      <span className="text-h13 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                        <img src={eye} alt="" className="-ml-1 scale-75"/> View
                      </span>
                    </Link>
                    <span className="text-h13 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                      <img src={assess} alt="" className="mr-2 scale-90" /> Start assessment
                    </span>
                    <span className="text-h13 text-accented-4 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                      <img src={deleteIt} alt="" className="mr-2 scale-90" /> Remove from list
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

export default PitchList;
