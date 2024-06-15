import MainWrapper from "@/components/general/main-wrapper";
import AddMembersToTeam from "@/components/modals/add-members-to-team";
import ListOfPanelists from "@/components/modals/list-of-panelists";
import PanelList from "@/components/panel-components/panel-lists";
import { add } from "@/constants/assets";
import { useState } from "react";

export interface Panelist {
  nameOfMember: string;
  assignedPitches: number;
  completedAssessment: number;
}

export interface PanelData {
  [key: string]: Panelist[];
}

const Panel = () => {
  const [activeTab, setActiveTab] = useState<"A" | "B" | "C">(() => {
    const storedTab = sessionStorage.getItem("team");
    return storedTab === "C" ? "C" : storedTab === "B" ? "B" : "A";
  });

  const toggleTab = (tab: "A" | "B" | "C") => {
    setActiveTab(tab);
    sessionStorage.setItem("team", tab);
  };

  const [panelists, setPanelists] = useState(false);
  const [teamMembers,  setTeamMembers] = useState(false);

  const addMembers = () => {
    setPanelists(false);
    setTeamMembers(true);
  }

  const closeMembers = () => {
    setTeamMembers(false);
  }

  // Define the panel data for each team
  const panelData: PanelData = {
    A: [
      {
        nameOfMember: "Kaylynn Aminoff",
        assignedPitches: 50,
        completedAssessment: 25,
      },
      {
        nameOfMember: "John Doe",
        assignedPitches: 30,
        completedAssessment: 15,
      },
    ],
    B: [
      {
        nameOfMember: "Jane Smith",
        assignedPitches: 40,
        completedAssessment: 20,
      },
      {
        nameOfMember: "Alice Johnson",
        assignedPitches: 35,
        completedAssessment: 18,
      },
    ],
    C: [
      {
        nameOfMember: "Bob Brown",
        assignedPitches: 45,
        completedAssessment: 22,
      },
      {
        nameOfMember: "Charlie Black",
        assignedPitches: 25,
        completedAssessment: 10,
      },
    ],
  };

  return (
    <MainWrapper>
      <div className="p-10 bg-primary-bg min-h-[89vh]">
        <span className="text-main-4 text-h9 font-DM-Sans font-medium">
          Panelists
        </span>
        <div className="flex justify-between items-center">
          <div className="flex mt-7 items-center font-DM-Sans">
            <button
              className={`${
                activeTab === "A"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium mr-3`}
              onClick={() => toggleTab("A")}
            >
              Team A
            </button>
            <button
              className={`${
                activeTab === "B"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium mr-3`}
              onClick={() => toggleTab("B")}
            >
              Team B
            </button>{" "}
            <button
              className={`${
                activeTab === "C"
                  ? "bg-accented-2 text-white"
                  : "hover:bg-accented-6 text-main-4 border border-main-3"
              } rounded-full px-4 py-2 font-medium`}
              onClick={() => toggleTab("C")}
            >
              Team C
            </button>{" "}
          </div>
          <button
            className="bg-primary hover:bg-primary-sidebar py-2 px-5 rounded-full flex items-center font-DM-Sans"
            onClick={() => setPanelists(true)}
          >
            <img src={add} alt="" className="mr-1" />
            <span className="text-white text-h12">Add Team Member(s)</span>
          </button>
        </div>{" "}
        <PanelList panelList={panelData[activeTab]} />
      </div>
      {panelists && <ListOfPanelists open={addMembers} close={() => setPanelists(false)}/>}
      {teamMembers && <AddMembersToTeam close={closeMembers}/>}
    </MainWrapper>
  );
};

export default Panel;
