"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

interface MenuItem {
  path: string;
  icon: React.ReactNode; // You can adjust this type based on the type of 'item.icon'
  title: string;
}



const MenuLinks: React.FC<{ item: MenuItem }> = ({ item }) => {

    const pathname= usePathname()
    console.log(pathname)

    return (
      <div>
        <Link href={item.path} className={`flex items-center my-2 rounded-sm p-3 hover:bg-secondary ${pathname===item.path && "bg-secondary" }`}>
        <div className="ml-4 mr-2">
            {item.icon}
        </div>
        <div className='mx-1'>
          {item.title}
        </div>
        </Link>
      </div>
    );
  }
  
  export default MenuLinks;