import {
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
  configUsergroup,
  greentick,
  redcross,
} from "@/constants/assets";
import React, { useState } from "react";

type Member = {
  avatar: string;
  name: string;
};

type Team = {
  name: string;
  members: Member[];
};

type AddMembersToTeamModalProps = {
  close: () => void;
};

const initialTeams: Team[] = [
  {
    name: "Team A",
    members: [
      { avatar: avatar1, name: "Member 1" },
      { avatar: avatar2, name: "Member 2" },
    ],
  },
  {
    name: "Team B",
    members: [
      { avatar: avatar3, name: "Member 3" },
      { avatar: avatar4, name: "Member 4" },
      { avatar: avatar5, name: "Member 5" },
    ],
  },
];

const AddMembersToTeam: React.FC<AddMembersToTeamModalProps> = ({ close }) => {
  const [teams, setTeams] = useState<Team[]>(initialTeams);
  const [isAddingNewTeam, setIsAddingNewTeam] = useState(false);
  const [newTeamName, setNewTeamName] = useState("");

  const handleAddMember = (teamIndex: number) => {
    const newMember: Member = {
      avatar: redcross,
      name: `Member ${teams[teamIndex].members.length + 1}`,
    };
    const updatedTeams = teams.map((team, index) =>
      index === teamIndex && team.members.length < 5
        ? { ...team, members: [...team.members, newMember] }
        : team
    );
    setTeams(updatedTeams);
  };

  const handleCreateTeam = () => {
    setIsAddingNewTeam(true);
  };

  const handleSaveNewTeam = () => {
    if (newTeamName.trim()) {
      const newTeam: Team = { name: newTeamName, members: [] };
      setTeams([...teams, newTeam]);
      setIsAddingNewTeam(false);
      setNewTeamName("");
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="font-DM-Sans bg-white w-[30%] m-auto rounded-lg py-5 animate-fadeDownFast">
        <span className="block text-center font-Inter font-bold text-h9 mt-4">
          Add Members to Team
        </span>
        <div className="w-4/5 m-auto mt-5 ">
          {teams.map((team, index) => (
            <div key={index} className="py-3 border-b">
              <span className="block text-h12 font-semibold">{team.name}</span>
              <span className="text-h13">{team.members.length} members</span>
              <div className="flex justify-between items-start">
                <div className="flex">
                  {team.members.map((member, idx) => (
                    <img
                      key={idx}
                      src={member.avatar}
                      alt={member.name}
                      className={idx > 0 ? "-ml-2" : ""}
                    />
                  ))}
                </div>
                {team.members.length < 5 && (
                  <img
                    src={redcross}
                    alt="Add Member"
                    className="cursor-pointer -ml-2"
                    onClick={() => handleAddMember(index)}
                  />
                )}
              </div>
            </div>
          ))}
          {isAddingNewTeam ? (
            <div className="py-3 flex justify-between">
              <img src={configUsergroup} alt="" />
              <input
                type="text"
                className="w-[85%] px-2 py-1 border rounded-md outline-none"
                placeholder="Enter team name"
                value={newTeamName}
                onChange={(e) => setNewTeamName(e.target.value)}
              />
              <img
                src={greentick}
                alt=""
                className="cursor-pointer"
                onClick={handleSaveNewTeam}
              />
            </div>
          ) : (
            <div
              className="flex items-center mt-3 cursor-pointer"
              onClick={handleCreateTeam}
            >
              <img src={redcross} alt="Create Team" />
              <span className="text-accented-4 ml-2">New Team</span>
            </div>
          )}
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

export default AddMembersToTeam;
