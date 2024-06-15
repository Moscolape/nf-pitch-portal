import React from "react";
import { recorded } from "@constants/assets";

type AssessmentRecordedModalProps = {
  close: () => void;
};

const AssessmentRecorded: React.FC<AssessmentRecordedModalProps> = ({
  close,
}) => {
  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white w-[50%] m-auto rounded-lg py-10 animate-fadeDownFast">
        <img src={recorded} alt="" className="w-auto m-auto animate-bump" />
        <span className="block text-center font-Inter font-bold text-h8 mt-4">
          Assessment Recorded
        </span>
        <div className="my-5">
          <span className="block text-center font-Inter font-normal text-main-2 text-h12 my-1">
            Thank you, the assessment have been recorded successfully
          </span>
        </div>
        <div className="flex justify-center mt-6">
          <button
            className="bg-primary hover:bg-primary-sidebar font-Inter text-white text-sub font-medium rounded-lg py-2 px-4"
            onClick={close}
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentRecorded;
