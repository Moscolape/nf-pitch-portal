import React, { useState } from "react";
import "../../App.css";
import AssessmentRecorded from "./assessment-recorded";

type AssessmentModalModalProps = {
  closed: () => void;
};

const AssessmentModal: React.FC<AssessmentModalModalProps> = ({ closed }) => {
  const [openRecorded, setOpenRecorded] = useState(false);

  const openModal = () => {
    setOpenRecorded(true);
  }

  const closeModals = () => {
    setOpenRecorded(false);
    closed()
  }

  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className={`${openRecorded ? 'hidden' : 'block'} bg-white w-[60%] m-auto rounded-lg p-8 animate-fadeDownFast`}>
        <span className="block font-Inter font-bold text-h8 mt-4">
          Assessment
        </span>
        <div className="font-DM-Sans max-h-[55vh] custom-scrollbar-example overflow-y-scroll">
          <div className="grid grid-cols-2 mt-7 gap-5">
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Feasibility & Sustainability (30 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /30
                </span>
              </div>
            </div>
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Market Relevance (20 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /20
                </span>
              </div>
            </div>
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Competitive edge / Innovation (15 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /15
                </span>
              </div>
            </div>
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Risk assessment / Mitigation plans (15 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /15
                </span>
              </div>
            </div>
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Scalabiity (15 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /15
                </span>
              </div>
            </div>
            <div className="p-5 border rounded-xl">
              <span className="text-h12 block font-medium mb-2">
                Overall Impression (5 marks)
              </span>
              <div className="flex items-center">
                <input
                  type="text"
                  id="nin"
                  className="px-4 py-2 border rounded-full outline-none w-full block mr-3"
                />
                <span className="inline-block p-2 rounded-lg text-white bg-gradient-to-b from-[#FC0305] to-[#900305]">
                  /5
                </span>
              </div>
            </div>
          </div>
          <div className="p-5 border rounded-xl mt-5 font-DM-Sans">
            <span className="text-h11 block font-semibold mb-2">Comments</span>
            <div className="flex w-full my-3">
              <input
                type="text"
                id="nin"
                className="px-4 py-2 border border-gray-2 rounded-full outline-none w-[85%] mr-5"
                placeholder="Type your comment here..."
              />
              <button
                className="bg-accented-2 text-white py-3 w-[15%] rounded-full"
                onClick={openModal}
              >
                Post
              </button>
            </div>
            <div className="m-5 border-l px-5">
              <div className="">
                <span className="text-h12">
                  <b>Assessor 1</b> 5h
                </span>
                <span className="text-main-2 mt-1 text-h12 block">
                  What is the nature of your business?
                </span>
              </div>
              <div className="mt-3">
                <span className="text-h12">
                  <b>Assessor 2</b> 5h
                </span>
                <span className="text-main-2 mt-1 text-h12 block">
                  What is the purpose of your business?
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {openRecorded && <AssessmentRecorded close={closeModals} />}
    </div>
  );
};

export default AssessmentModal;
