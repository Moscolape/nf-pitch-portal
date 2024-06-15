import React from "react";

type AddDocumentModalProps = {
  close: () => void;
};

const AddDocument: React.FC<AddDocumentModalProps> = ({
  close,
}) => {
  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white w-[50%] m-auto rounded-lg py-10 animate-fadeDownFast">
        <span className="block text-center font-DM-Sans font-semibold text-h8 mt-4">
        Add new document
        </span>
        <div className="w-4/5 m-auto">
          <div className="my-5">
            <span className="block text-center font-Inter font-normal text-main-2 text-h12 my-1">
            Please enter the name of the document below
            </span>
          </div>
          <div className="my-10">
            <input
              type="text"
              id="nin"
              className="px-4 py-2 border rounded-full outline-none w-full block mb-5"
              placeholder="Enter document name"
            />
            <select
              id="state"
              className="px-4 py-2 border rounded-full outline-none w-full"
            >
              <option value="">--Select the format--</option>
              <option value="jpg">JPG</option>
              <option value="pdf">PDF</option>
              <option value="mp4">MP4</option>
              <option value="others">Others</option>
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

export default AddDocument;