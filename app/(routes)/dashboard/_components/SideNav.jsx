"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { LayoutGrid, PiggyBank, ReceiptText, ShieldCheck, UserCircle } from "lucide-react";
import { UserButton } from "@clerk/nextjs";
import { usePathname } from "next/navigation";

function SideNav() {
  const menuList = [
    { id: 1, name: "Dashboard", icon: LayoutGrid, path: "/dashboard" },
    { id: 2, name: "Budgets", icon: PiggyBank, path: "/dashboard/budgets" },
    { id: 3, name: "Expenses", icon: ReceiptText, path: "/dashboard/expenses" },
    { id: 4, name: "Upgrade", icon: ShieldCheck, path: "/dashboard/upgrade" },
  ];

  const path= usePathname();
  
  useEffect(()=>{
     console.log(path)
  },[path])
  return (
    <div className="h-screen w-80 p-5 border shadow-sm bg-white flex flex-col relative">
      {/* Logo Section */}
      <div className="flex justify-center items-center py-6">
        <Image src="/logo.svg" alt="logo" width={80} height={80} />
      </div>

      {/* Menu Items */}
      <div className="mt-5 flex-1">
        {menuList.map((menu) => (
          <Link key={menu.id} href={menu.path}>
            <h2
              className={`flex gap-3 items-center text-gray-500 font-medium px-4 py-3 cursor-pointer rounded-md transition-colors
                hover:text-blue-600 hover:bg-blue-100
                ${path === menu.path ? "text-blue-600 bg-blue-100" : ""}`}
            >
              <menu.icon className="w-5 h-5" />
              <span>{menu.name}</span>
            </h2>
          </Link>
        ))}
      </div>

      {/* User Profile at Bottom Left */}
      <div className="fixed bottom-4 left-4 flex gap-3 items-center">
        <UserButton />
        <span className="text-gray-700 font-medium">Profile</span>
      </div>
    </div>
  );
}

export default SideNav;
