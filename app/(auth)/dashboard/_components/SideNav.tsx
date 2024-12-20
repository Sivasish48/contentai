"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { useRouter, usePathname } from "next/navigation";
import { Home, History, Cog, IndianRupee } from "lucide-react";
import multitoolLogo from "@/public/multitoolai.png";

function SideNav() {
  const router = useRouter(); // Initialize the router
  const path = usePathname();

  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "Settings",
      icon: Cog,
      path: "/dashboard/settings",
    },
    {
      name: "Billing",
      icon: IndianRupee,
      path: "/dashboard/billing",
    },
  ];

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-md bg-black text-white">
      <div className="flex justify-center mt-2">
        <Image
          src={multitoolLogo}
          alt="logo"
          width={100}
          height={130}
          className="hidden md:block"
        />
      </div>
      
      <div className="mt-12">
        {menuList.map((menu, index) => (
          <div
            key={index}
            onClick={() => router.push(menu.path)} // Navigate on click
            className={`flex gap-2 mb-2 p-3 cursor-pointer rounded-lg font-semibold items-center transition-colors 
              ${
                path === menu.path
                  ? "bg-purple-700 text-white"
                  : "bg-transparent text-gray-300 hover:bg-purple-600 hover:text-white"
              }`}
          >
            <menu.icon className="w-6 h-6" />
            <h2>{menu.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
}

export default SideNav;
