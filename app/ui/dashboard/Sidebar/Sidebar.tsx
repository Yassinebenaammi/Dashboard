
import {menuItems} from "@/app/constants/constants"
import MenuLinks from "../MenuLinks/MenuLinks";
import Image from "next/image";

const Sidebar = () => {

  return (
    <div>
        <div className="flex items-center" >
          <div >
            <Image className="rounded-full" src={"/user.jpg"} alt="User Avatar" width={40} height={40} />
          </div>
          <div className="flex-col ml-5">
            <div className="text-xs">BEN.AAMMI Yassine</div>
            <div className="text-xs text-textSoft ">Administrator</div>
          </div>
        </div>
        <div>
        <ul className="text-sm my-5">
          {menuItems.map((cat,index)=>(
            <li key={index}>
              <span className="text-xs text-textSoft">{cat.title}</span>
              <div>
                {cat.list.map((link,index)=>(
                <MenuLinks item={link} key={index} />
              ))}
              </div>
            </li>
          ))}
        </ul>
        </div>
    </div>
  );
}

export default Sidebar;
