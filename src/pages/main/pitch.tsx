import MainWrapper from "@/components/general/main-wrapper";
import { add, chevron2 } from "@/constants/assets";

const Pitch = () => {
  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[89vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-medium">
          Pitch / <span className="text-main-6">Pitch list</span>
        </span>
        <div className="bg-white drop-shadow-md rounded-2xl p-8 mt-10">
          <div className="flex justify-between items-center">
            <button className="text-main-4 border border-main-3 py-2 px-5 rounded-full flex items-center">
              <span className="text-h12">Bulk Action</span>
              <img src={chevron2} alt="" className="ml-2" />
            </button>
            <button className="bg-primary hover:bg-primary-sidebar py-2 px-5 rounded-full flex items-center">
              <img src={add} alt="" className="mr-1" />
              <span className="text-white text-h12">
                Add Candidate Manually
              </span>
            </button>
          </div>
        </div>
      </div>
    </MainWrapper>
  );
};

export default Pitch;
