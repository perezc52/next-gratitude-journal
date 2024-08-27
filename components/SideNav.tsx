import React from "react";
import { SignInButton, SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { checkUser } from "@/lib/checkUser";
import SheetC from "./Sheet";
import Link from "next/link";

const SideNav = async () => {
  const user = await checkUser();
  return (
    <header className="bg-blue-700 flex justify-between p-3">
      <div className="flex items-center gap-2">
        <SheetC />
        <h1 className="text-white">
          <Link href="/">Gratitude Journal</Link>
        </h1>
      </div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </header>
  );
};

export default SideNav;
