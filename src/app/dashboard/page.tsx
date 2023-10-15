import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";

type Props = {};

const DashBoard = async (props: Props) => {
  const { userId } = await auth();
  if (!userId) redirect("/auth-callback?origin=dashboard");
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  const email = user?.emailAddresses[0]?.emailAddress;
  console.log(userId);
  console.log(user?.emailAddresses[0].emailAddress);
  return <div className="font-sans">{email}</div>;
};

export default DashBoard;
