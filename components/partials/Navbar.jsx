"use client";
import { NAV_LINKS, SLOGAN } from "@/constants";
import { IoMdMenu } from "react-icons/io";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="w-full fixed z-50">
      <div className="p-2 text-white text-sm text-center bg-gradient-to-r from-cyan-500 to-blue-700">
        {SLOGAN}
      </div>
      <nav className="p-6 lg:px-28 flex items-center justify-between lg:justify-around text-white backdrop-blur-xl shadow">
        <Link href="/">
          <Image src="/logo.svg" alt="logo" width={111} height={44} />
        </Link>

        <ul className="hidden h-full gap-6 lg:flex">
          {NAV_LINKS.map((link) => (
            <Link
              href={link.href}
              key={link.key}
              className="cursor-pointer hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-500"
            >
              {link.label}
            </Link>
          ))}
        </ul>

        <div
          className="lg:hidden text-2xl cursor-pointer"
          onClick={toggleMobileMenu}
        >
          <IoMdMenu />
        </div>

        {isMobileMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 right-0 bg-slate-800 text-white p-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="block py-2 hover:underline hover:underline-offset-4 hover:decoration-2 hover:decoration-sky-500"
                onClick={toggleMobileMenu}
              >
                {link.label}
              </Link>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
