import React, { useState } from "react";
import {
  arrowLogin,
  avatar1,
  avatar2,
  avatar3,
  avatar4,
  avatar5,
} from "@constants/assets";

type Panelist = {
  id: number;
  avatar: string;
  name: string;
  email: string;
};

type ListOfPanelistsModalProps = {
  close: () => void;
  open: () => void;
};

const panelistsData: Panelist[] = [
  { id: 1, avatar: avatar1, name: "John Doe", email: "john@example.com" },
  { id: 2, avatar: avatar2, name: "Jane Smith", email: "jane@example.com" },
  { id: 3, avatar: avatar3, name: "Alice Johnson", email: "alice@example.com" },
  { id: 4, avatar: avatar4, name: "Bob Brown", email: "bob@example.com" },
  {
    id: 5,
    avatar: avatar5,
    name: "Charlie Black",
    email: "charlie@example.com",
  },
  { id: 6, avatar: avatar1, name: "Eve White", email: "eve@example.com" },
];

const ListOfPanelists: React.FC<ListOfPanelistsModalProps> = ({
  close,
  open,
}) => {
  const [selectedPanelists, setSelectedPanelists] = useState<number[]>([]);

  const handleSelect = (id: number) => {
    if (selectedPanelists.includes(id)) {
      setSelectedPanelists(
        selectedPanelists.filter((panelistId) => panelistId !== id)
      );
    } else if (selectedPanelists.length < 5) {
      setSelectedPanelists([...selectedPanelists, id]);
    }
  };

  return (
    <div className="w-screen h-screen bg-[#0000008c] flex items-center justify-center z-50 fixed top-0 left-0">
      <div className="bg-white w-[80%] m-auto rounded-lg p-10 font-DM-Sans">
        <span className="block text-center font-Inter font-bold text-h8 mt-4">
          Select from the list of panelists
        </span>
        <div className="my-5">
          <span className="block text-center font-Inter font-normal text-main-2 text-h12 my-1">
            You can add up to 5 members to a single team
          </span>
        </div>
        <div className="grid grid-cols-4 gap-4 mt-6">
          {panelistsData.map((panelist) => (
            <div
              key={panelist.id}
              className={`flex items-center p-4 rounded-lg cursor-pointer hover:bg-accented-6 ${
                selectedPanelists.includes(panelist.id)
                  ? "bg-accented-6"
                  : "bg-[#EEEFEF]"
              }`}
              onClick={() => handleSelect(panelist.id)}
            >
              <img
                src={panelist.avatar}
                alt={panelist.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <span className="block font-bold text-h12">
                  {panelist.name}
                </span>
                <span className="block text-gray-500 text-h12">
                  {panelist.email}
                </span>
              </div>
            </div>
          ))}
        </div>
        <div className="w-full bg-[#FFE6E6] px-4 py-2 rounded-full mt-5">
          <span className="text-accented-2 text-h12">
            {selectedPanelists.length}/5 members selected
          </span>
        </div>
        <div className="flex justify-between items-center mt-6">
          <button
            type="submit"
            className="flex items-center justify-center hover:bg-primary-sidebar bg-primary text-white py-3 w-1/5 rounded-full cursor-pointer"
            onClick={open}
          >
            <span className="mr-3 text-h12 font-medium font-DM-Sans">Next</span>
            <img src={arrowLogin} alt="" className="mt-1 scale-110" />
          </button>
          <button
            className="bg-primary hover:bg-primary-sidebar font-Inter text-white text-h12 font-medium rounded-full py-3 w-1/5"
            onClick={close}
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListOfPanelists;
