"use client";
import React from "react";
import { SignInButton, SignUpButton, UserButton, useUser } from "@clerk/nextjs";
import { MaskContainer } from "../components/MaskContainer";

function MyComponent() {
  const textColor = "red";
  const { user, isSignedIn } = useUser();
  return (
    <>
      <div className="h-[90vh] w-full flex justify-center items-center">
        {isSignedIn ? (
          <UserButton afterSignOutUrl="/" />
        ) : (
          <div className="flex gap-4">
            <SignUpButton mode="modal">Sign Up</SignUpButton>
            <SignInButton mode="modal">Sign in</SignInButton>
          </div>
        )}
      </div>
    </>
  );
}

export default MyComponent;
