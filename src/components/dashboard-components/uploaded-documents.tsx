import {
  cancelled,
  checked,
  eye,
  menuIcon,
  message,
  pdf,
  upload,
} from "@/constants/assets";
import { useEffect, useRef, useState } from "react";

const UploadedDocs = () => {
  const documentsToUpload = [
    {
      title: "Quiz Certificate",
      status: "Assessed",
      icon: pdf,
      report: "Approved",
    },
    {
      title: "CAC Certificate",
      status: "Not uploaded",
      icon: pdf,
      report: "Rejected",
    },
    {
      title: "Business Plan",
      status: "Assessed",
      icon: pdf,
    },
    {
      title: "Financial Model",
      status: "Not uploaded",
      icon: pdf,
    },
  ];

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
      {documentsToUpload.map((doc, index) => {
        return (
          <div key={index}>
            <div className="flex items-center justify-between my-3 py-3 relative">
              <div className="flex items-center">
                <img
                  src={doc.icon}
                  alt=""
                  className="px-3 py-4 rounded-lg bg-accented-4"
                />
                <div className="ml-4">
                  <span className="block font-semibold">{doc.title}</span>
                  <span
                    className={`${
                      doc.status === "Assessed"
                        ? "bg-accented-5 text-accented-1"
                        : "bg-accented-6 text-accented-2"
                    } px-2 rounded-md`}
                  >
                    {" "}
                    {doc.status}
                  </span>
                </div>
              </div>
              <div className="flex">
                {doc.report && (
                  <div
                    className={`${
                      doc.report === "Approved"
                        ? "bg-accented-7"
                        : "bg-accented-8"
                    } flex justify-center mr-5 pl-2 pr-3 py-1 rounded-lg`}
                  >
                    <img
                      src={doc.report === "Approved" ? checked : cancelled}
                      alt=""
                      className="scale-75"
                    />
                    <span
                      className={`${
                        doc.report === "Approved"
                          ? "text-accented-9"
                          : "text-accented-4"
                      } text-h12`}
                    >
                      {doc.report}
                    </span>
                  </div>
                )}
                <div className="flex">
                  <img src={message} alt="" className="inline-block w-7 h-7" />
                  <span className="ml-2 mt-1 block">0</span>
                </div>
                <img
                  src={menuIcon}
                  alt=""
                  className="inline-block ml-5 more cursor-pointer"
                  onClick={() => handleShow(index)}
                />
              </div>
              {showDropdownIndex === index && (
                <div
                  ref={modalRef}
                  className="font-Inter bg-white p-2 absolute top-14 right-6 flex flex-col rounded-lg drop-shadow-md z-30 w-32"
                >
                  <span className="text-h12 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                    <img src={upload} alt="" className="mr-2" /> Upload
                  </span>
                  <span className="text-h12 text-gray-3 p-2 hover:bg-main-8 cursor-pointer rounded-lg flex items-center">
                    <img src={eye} alt="" className="mr-2 scale-90" /> View
                  </span>
                </div>
              )}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default UploadedDocs;
