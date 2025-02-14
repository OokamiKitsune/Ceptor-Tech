import Image from "next/image";
import React, { useState, useRef } from "react";
import Link from "next/link";
import WalletConnectButton from "../WalletConnectButton";
import DiceDashboard from "../DiceDashboard";

export default function NavbarMdUp() {
  const [navMenuVisible, setNavMenuVisible] = useState(true);
  // Define the toggleNavMenu function
  const toggleNavMenu = () => {
    setNavMenuVisible(!navMenuVisible);
  };

  return (
    <>
      {/* Large screens */}
      <div className="hidden md:block ">
        <nav
          className={`${
            navMenuVisible ? `w-60` : "w-20"
          } h-12 fixed z-20 md:h-full left-0 bg-black bg-opacity-80`}
        >
          <div
            className="bg-white w-8 h-8 rounded-full absolute -right-4 top-6 cursor-pointer"
            onClick={toggleNavMenu}
          ></div>

          {navMenuVisible ? (
            <>
              <div className="w-full flex flex-col ml-6 mt-6">
                <Image
                  src="/logo.png"
                  alt=""
                  width={50}
                  height={50}
                  className="mb-6"
                />
                {/* TODO: Check all hrefs */}
                <div className="flex flex-col text-xl">
                  <Link href="/QuizPage">QUIZ</Link>
                  <Link href="/">CREATE </Link>
                  <Link href="/nftpage">EXPLORE </Link>
                  <Link href="/profile">PROFILE </Link>
                </div>
              </div>
              <div className="fixed bottom-6 space-x-4 flex flex-col">
                <DiceDashboard />
                <WalletConnectButton />
              </div>
            </>
          ) : null}
        </nav>
      </div>
    </>
  );
}
