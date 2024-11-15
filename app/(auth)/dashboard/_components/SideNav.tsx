"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Home, History, Cog, IndianRupee } from "lucide-react";
import { usePathname } from "next/navigation";

function SideNav() {
  const menuList = [
    {
      name: "Home",
      icon: Home,
      path: "/dashboard",
    },
    {
      name: "History",
      icon: History,
      path: "/dashboard/history",
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

  const path = usePathname();

  useEffect(() => {
    console.log(path);
  }, [path]);

  return (
    <div className="h-screen p-5 shadow-sm border">
      <div className="flex justify-center">
        <Image
          src="/logo.svg"
          alt="logo"
          width={60}
          height={60}
          className="hidden md:block"
        />
      </div>
      <hr className="my-6 border" />
      <div className="mt-3">
        {menuList.map((menu, index) => (
          <div
            key={index}
            className={`flex gap-2 mb-2 p-3 cursor-pointer rounded-lg font-semibold items-center transition-colors 
              ${
                path === menu.path
                  ? "bg-primary"
                  : "bg-transparent text-black hover:bg-primary"
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
