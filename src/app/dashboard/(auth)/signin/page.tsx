import { Metadata } from "next";
import FormSignIn from "./form";
import React, { FC } from "react";
import { getUser } from "@/lib/auth";
import { redirect } from "next/navigation";

interface SignInPageProps {}

export const metadata: Metadata = {
  title: "Dashboard | Sign In",
};


const SignInPage: FC<SignInPageProps> =async ({}) => {
  const {session, user} = await getUser()

  if (session && user.role === "ADMIN") {
    redirect("/dashboard")
  
  }

  return (
    <FormSignIn />
  );
};

export default SignInPage;
