import React, { Dispatch, SetStateAction, useState } from "react";
import MainWrapper from "@/components/general/main-wrapper";
import {
  add,
  configarrow,
  configdoc,
  configUser,
  configUsergroup,
  leftarrow,
  pdf2,
} from "@/constants/assets";
import AddDocument from "@/components/modals/add-document";

// Define the type for the configuration settings
interface ConfigSetting {
  header: string;
  icon: string;
  settings: string;
}

const candidateDocs = [
  {
    title: "Quiz Certificate",
    mimeType: "PDF",
    icon: pdf2,
  },
  {
    title: "CAC Certificate",
    mimeType: "JPG",
    icon: pdf2,
  },
  {
    title: "Business Plan",
    mimeType: "PDF",
    icon: pdf2,
  },
  {
    title: "Financial Model",
    mimeType: "PDF",
    icon: pdf2,
  },
];

// Detailed view components for each setting
const UserConfiguration: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold text-main-5 mb-4">
      User Type Configuration
    </h2>
    <p>Configure user types and their permissions here.</p>
  </div>
);

type docProps = {
  addIt: boolean;
  setIt: Dispatch<SetStateAction<boolean>>;
}

const DocumentConfiguration: React.FC<docProps> = ({addIt, setIt}) => (
  <div>
    <h2 className="text-xl font-semibold text-main-5 mb-4">
      Document Configuration
    </h2>
    <p>
      Configure the documents that candidates are to upload during registration
    </p>
    <div className="flex items-center mt-7">
      {candidateDocs.map((doc, index) => {
        return (
          <div key={index}>
            <div className="flex flex-col items-center justify-center bg-main-8 p-5 rounded-xl border mr-5">
              <img src={doc.icon} alt="" className="" />
              <span className="inline-block my-1 text-main-2">
                {doc.mimeType}
              </span>
              <span className="font-medium mt-2">{doc.title}</span>
            </div>
          </div>
        );
      })}
      <button className="p-4 bg-accented-4 rounded-full" onClick={() => setIt(true)}>
        <img src={add} alt="" title="add new document" />
      </button>
    </div>
    {addIt && <AddDocument close={() => setIt(false)}/>}
  </div>
);

const PanelConfiguration: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold text-main-5 mb-4">
      Panel Configuration
    </h2>
    <p>Configure the number of panelists that can be in a team.</p>
    <div className="mt-5">
      <span className="text-h11 block font-semibold mb-2">
        No. of Team Panelists
      </span>
      <div className="flex w-3/5 my-3">
        <input
          type="text"
          id="nin"
          className="px-4 py-2 border rounded-full outline-none w-[85%] mr-5"
          placeholder="5"
        />
        <button className="bg-primary text-white py-3 w-[15%] rounded-full">
          Update
        </button>
      </div>
    </div>
  </div>
);

const AssessmentConfiguration: React.FC = () => (
  <div>
    <h2 className="text-xl font-semibold text-main-5 mb-4">
      Assessment Configuration
    </h2>
    <p>Setup assessment criteria and processes here.</p>
  </div>
);

const Configurations: React.FC = () => {
  const [currentView, setCurrentView] = useState<"list" | "details">("list");
  const [selectedSetting, setSelectedSetting] = useState<ConfigSetting | null>(
    null
  );
  const [addDocument, setAddDocument] = useState(false);

  const configSettings: ConfigSetting[] = [
    {
      header: "Users",
      icon: configUser,
      settings: "User Type Configuration",
    },
    {
      header: "Documents",
      icon: configdoc,
      settings: "Required Documents for Application",
    },
    {
      header: "Panel",
      icon: configUsergroup,
      settings: "Panel Configuration",
    },
    {
      header: "Assessment",
      icon: configUsergroup,
      settings: "Assessment Configuration",
    },
  ];

  const handleSettingClick = (setting: ConfigSetting) => {
    setSelectedSetting(setting);
    setCurrentView("details");
  };

  const handleBackClick = () => {
    setCurrentView("list");
  };

  const renderDetails = () => {
    switch (selectedSetting?.settings) {
      case "User Type Configuration":
        return <UserConfiguration />;
      case "Required Documents for Application":
        return <DocumentConfiguration addIt={addDocument} setIt={setAddDocument}/>;
      case "Panel Configuration":
        return <PanelConfiguration />;
      case "Assessment Configuration":
        return <AssessmentConfiguration />;
      default:
        return null;
    }
  };

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[89vh]">
        <div className="bg-white p-5 rounded-2xl shadow-lg text-main-4">
          {currentView === "list" &&
            configSettings.map((setIt, index) => (
              <div key={index}>
                <div className="w-1/2 pt-5 mb-10 border-t relative">
                  <span className="absolute bg-white py-1 px-2 -top-5">
                    {setIt.header}
                  </span>
                  <div
                    className="p-4 border rounded-xl w-3/5 cursor-pointer"
                    onClick={() => handleSettingClick(setIt)}
                  >
                    <img src={setIt.icon} alt="" />
                    <div className="flex justify-between mt-2">
                      <span>{setIt.settings}</span>
                      <img src={configarrow} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          {currentView === "details" && selectedSetting && (
            <div className="font-DM-Sans">
              <button
                className="mb-4 p-2 rounded flex items-center"
                onClick={handleBackClick}
              >
                <img src={leftarrow} alt="" className="rotate-90 mr-2" />
                <span className="font-semibold text-accented-4">
                  Configurations
                </span>
                <span className="ml-1">/ {selectedSetting.header}</span>
              </button>
              {renderDetails()}
            </div>
          )}
        </div>
      </div>
    </MainWrapper>
  );
};

export default Configurations;
