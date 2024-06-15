import React from "react";

type CandidateRejectedModalProps = {
  close: () => void;
};

const CandidateRejected: React.FC<CandidateRejectedModalProps> = ({
  close,
}) => {
  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white w-[50%] m-auto rounded-lg py-10 animate-fadeDownFast">
        <span className="block text-center font-Inter font-bold text-h8 mt-4">
          Rejected?
        </span>
        <div className="w-4/5 m-auto">
          <div className="my-5">
            <span className="block text-center font-Inter font-normal text-main-2 text-h12 my-1">
              Please provide a feedback for this candidate to make corrections and
              select the document to be corrected
            </span>
          </div>
          <div className="my-10">
            <input
              type="text"
              id="nin"
              className="px-4 py-2 border rounded-full outline-none w-full block mb-5"
              placeholder="Type your comment here"
            />
            <select
              id="state"
              className="px-4 py-2 border rounded-full outline-none w-full"
            >
              <option value="">--select affected document--</option>
              <option value="quiz">Quiz Certificate-</option>
              <option value="cac">CAC Certificate</option>
              <option value="finance">Financial Model</option>
              <option value="business">Business Plan</option>
            </select>
          </div>
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

export default CandidateRejected;
