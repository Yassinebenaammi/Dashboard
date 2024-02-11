"use client"
import { usePathname } from "next/navigation";
import { MdNotifications, MdOutlineChat, MdPublic, MdSearch } from "react-icons/md";

const Navbar = () => {
  const pathName = usePathname()
  return (
    <div className="bg-bgSoft p-3 flex justify-between items-center">
      <div className="capitalize font-bold">
        {pathName.split("/").pop()}
      </div>
      <div className="flex gap-2 items-center">
        <div>
          <MdSearch/>
        </div>
        <div>
          <input className="bg-transparent" type="text" placeholder="Search..." />
        </div>
        <div className="flex gap-2">
          <MdOutlineChat/>
          <MdNotifications/>
          <MdPublic/>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
