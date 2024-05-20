"use client"

import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

import { navLinks } from "@/lib/contants";
import { Menu } from "lucide-react";
import { useState } from "react";
import { usePathname } from "next/navigation";

const TopBar = () => {
  const [dropDownMenu, setDropDownMenu] = useState(false);
  const pathname = usePathname();
  return (
    <div className="sticky top-0 z-20 w-full flex justify-between items-center px-8 py-4 bg-orange-200 shadow-xl lg:hidden">
      <Image src="/logo.png" alt="logo" width={150} height={70} />

      <div className="flex gap-8 max-md:hidden">
        {navLinks.map((link) => (
          <Link
            href={link.url}
            key={link.label}
            className={`flex gap-4 font-semibold hover:text-blue-800 ${pathname === link.url ? "text-blue-800" : "text-slate-500"}`}
          >
            <p>{link.label}</p>
          </Link>
        ))}
      </div>

      <div className="relative flex gap-4 text-body-medium items-center cursor-pointer text-slate-500 hover:text-blue-500">
        <Menu
          className="cursor-pointer md:hiden"
          onClick={() => setDropDownMenu(!dropDownMenu)}
        />
        {dropDownMenu && (
          <div className="absolute top-10 right-6 p-5 shadow-xl rounded-lg bg-slate-50 flex flex-col gap-8">
            {navLinks.map((link) => (
              <Link
                href={link.url}
                key={link.label}
                className="flex gap-4 text-body-semibold text-slate-500 hover:text-blue-800"
              >
                {link.icon}
                <p>{link.label}</p>
              </Link>
            ))}
          </div>
        )}
        <UserButton />
      </div>
    </div>
  );
};

export default TopBar;
