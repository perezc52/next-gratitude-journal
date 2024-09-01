import React from "react";
import Guest from "@/components/Guest";
import { SignedIn, SignedOut } from "@clerk/nextjs";

const page = () => {
  return (
    <div>
      <SignedOut>
        <Guest />
      </SignedOut>
      <SignedIn>gratitude journal home page</SignedIn>
    </div>
  );
};

export default page;
