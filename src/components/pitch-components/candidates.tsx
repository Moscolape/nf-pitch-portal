import MainWrapper from "@/components/general/main-wrapper";
import { useState } from "react";
import PersonalInfo from "./candidate-personal-info";
import CandidateDocs from "./candidate-docs";
import { add, check, reject } from "@/constants/assets";
import CandidateApproved from "../modals/candidate-approved";
import CandidateRejected from "../modals/candidate-rejected";
import ComposedPitch from "../dashboard-components/composed-pitch";
import CandidateAssessment from "./candidate-assessment";
import AssessmentModal from "../modals/assessment-modal";

const CandidateDetails = () => {
  const [activeTab, setActiveTab] = useState<
    "details" | "pitch" | "assessment"
  >(() => {
    const storedTab = sessionStorage.getItem("secondTab");
    return storedTab === "assessment"
      ? "assessment"
      : storedTab === "pitch"
      ? "pitch"
      : "details";
  });

  const toggleTab = (tab: "details" | "pitch" | "assessment") => {
    setActiveTab(tab);
    sessionStorage.setItem("secondTab", tab);
  };

  const [openApprove, setOpenApprove] = useState(false);
  const [openRejected, setOpenRejected] = useState(false);

  const [openAssesment, setOpenAssessment] = useState(false);

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[91vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-medium">
          Pitch / <span className="text-main-6">Pitch list detail</span>
        </span>
        <div className="flex justify-between items-center">
          <div className="flex mt-7 items-center font-DM-Sans">
            <button
              className={`${
                activeTab === "details"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium mr-3`}
              onClick={() => toggleTab("details")}
            >
              Candidate Details
            </button>
            <button
              className={`${
                activeTab === "pitch"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium mr-3`}
              onClick={() => toggleTab("pitch")}
            >
              Pitch
            </button>{" "}
            <button
              className={`${
                activeTab === "assessment"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium`}
              onClick={() => toggleTab("assessment")}
            >
              Assessment
            </button>{" "}
          </div>
          <button
            className="bg-primary hover:bg-primary-sidebar py-2 px-5 rounded-full flex items-center font-DM-Sans"
            onClick={() => setOpenAssessment(true)}
          >
            <img src={add} alt="" className="mr-1" />
            <span className="text-white text-h12">Start Assessment</span>
          </button>
        </div>
        <PersonalInfo />
        {activeTab === "details" && (
          <>
            <CandidateDocs />
            <div className="flex justify-between items-center mt-5">
              <button
                type="submit"
                className="flex items-center justify-center hover:bg-primary-dark bg-primary text-white py-3 w-1/5 rounded-full mt-5 text-h11 cursor-pointer"
                onClick={() => setOpenApprove(true)}
              >
                <img src={check} alt="" className="scale-110" />
                <span className="ml-3 font-medium font-DM-Sans">Approve</span>
              </button>
              <button
                type="submit"
                className="flex items-center justify-center bg-accented-4 hover:bg-white hover:border hover:border-accented-4 hover:text-accented-4 text-white py-3 w-1/5 rounded-full mt-5 text-h11 cursor-pointer"
                onClick={() => setOpenRejected(true)}
              >
                <img src={reject} alt="" className="scale-110" />
                <span className="ml-3 font-medium font-DM-Sans">Reject</span>
              </button>
            </div>
          </>
        )}
        {activeTab === "pitch" && <ComposedPitch />}
        {activeTab === "assessment" && <CandidateAssessment />}
        {openApprove && (
          <CandidateApproved close={() => setOpenApprove(false)} />
        )}
        {openRejected && (
          <CandidateRejected close={() => setOpenRejected(false)} />
        )}
        {openAssesment && (
          <AssessmentModal closed={() => setOpenAssessment(false)} />
        )}
      </div>
    </MainWrapper>
  );
};

export default CandidateDetails;
