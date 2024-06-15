import { profilePic } from "@/constants/assets";

const PersonalInfo = () => {
  return (
    <div className="mt-10">
      <div className="flex items-center justify-between bg-white pr-5 py-5 rounded-2xl shadow-lg font-DM-Sans">
        <img src={profilePic} alt="" className="block scale-75" />
        <span className="block text-h9 text-main-3 -ml-5 font-semibold">
          Rayna, Stanton Victoria
        </span>
        <span className="block text-h12 text-main-3 my-4">
          <b>Email:</b><br /> Rayc@gmail.com
        </span>
        <span className="block text-h12 text-main-3 my-4">
          <b>Phone:</b><br /> 08115456386
        </span>
        <span className="block text-h12 text-main-3 my-4">
          <b>NIN:</b><br /> 1762318972
        </span>
        <span className="block text-h12 text-main-3 my-4">
          <b>State of Origin:</b><br /> FCT
        </span>
        <span className="block text-h12 text-main-3 my-4">
          <b>State of Service:</b><br /> Delta
        </span>
      </div>
    </div>
  );
};

export default PersonalInfo;
