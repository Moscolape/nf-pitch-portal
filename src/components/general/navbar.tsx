import { avatar, bell, chevronDown } from "@/constants/assets";

const Navbar = () => {
  return (
    <div className="ml-[20%] w-[81%] fixed z-30 h-[74px] bg-white shadow-md px-5 flex items-center justify-end">
      <div className="flex items-center">
        <div className="flex mr-5 cursor-pointer">
          <img src={bell} alt="" />
          <span className="bg-red-600 w-5 h-5 text-white rounded-full text-h12 text-center">0</span>
        </div>
        <div className="flex items-center">
          <img src={avatar} alt="" />
          <span className="mx-3 text-main-4 font-DM-Sans">Stanley</span>
          <img src={chevronDown} alt="" className="mt-2"/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;