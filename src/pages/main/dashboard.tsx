import ComposedPitch from "@/components/dashboard-components/composed-pitch";
import UploadedDocs from "@/components/dashboard-components/uploaded-documents";
import MainWrapper from "@/components/general/main-wrapper";

import { camera, profilePic } from "@/constants/assets";


const Dashboard = () => {

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[89vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-semibold">
          Dashboard
        </span>
        <div className="grid grid-cols-3 gap-x-5 mt-7 font-DM-Sans">
          <div className="col-span-1 bg-white drop-shadow-md rounded-2xl p-8">
            <div className="flex flex-col justify-center items-center">
              <div className="relative">
                <img src={profilePic} alt="" className="" />
                <img
                  src={camera}
                  alt=""
                  className="absolute bottom-1 right-1 bg-primary p-2 rounded-full"
                />
              </div>
              <div className="mt-5 text-center">
                <span className="block text-h9 text-main-3 font-semibold mb-5">
                  Rayna, Stanton Victoria
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>Email:</b> Raystavic@gmail.com
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>Phone:</b> 08115456386
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>NIN:</b> 176238917218972
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>State of Origin:</b> FCT
                </span>
                <span className="block text-h12 text-main-3 my-4">
                  <b>State of Service:</b> Delta
                </span>
              </div>
            </div>
          </div>
          <div className="col-span-2 bg-white drop-shadow-md rounded-2xl p-8">
            <span className="text-h8 text-main-5 font-semibold">Documents</span>
            <div className="mt-10">
              <UploadedDocs />
            </div>
          </div>
        </div>
        <ComposedPitch />
      </div>
    </MainWrapper>
  );
};

export default Dashboard;