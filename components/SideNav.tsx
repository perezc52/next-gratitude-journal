import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import SheetC from "./Sheet";
import Link from "next/link";

const SideNav = async () => {
  const user = await checkUser();
  return (
    <header className="bg-blue-700 flex justify-between p-3 md:flex-col md:justify-start md:h-[100vh] md:w-[25vw]">
      <div className="flex items-center gap-2">
        <SheetC />
        <h1 className="text-white md:hidden">
          <Link href="/">Gratitude Journals 456789</Link>
        </h1>
      </div>
      <div className="md:flex md:flex-col md:items-center md:justify-center">
        <SignedOut>
          <SignInButton>
            <button className="bg-sky-500 text-white px-5 py-1 rounded-sm">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton />
          <div className="hidden md:block text-white text-center my-5">
            <ul className="flex flex-col space-y-3">
              <li>
                <Link href="/" className="w-full">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/logs">Logs</Link>
              </li>
              <li>
                <Link href="/about">About</Link>
              </li>
            </ul>
          </div>
        </SignedIn>
      </div>
    </header>
  );
};

export default SideNav;
