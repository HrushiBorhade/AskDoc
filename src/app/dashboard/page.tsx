import { db } from "@/lib/db";
import { auth, clerkClient } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import React from "react";
import Dashboard from "@/components/Dashboard";
type Props = {};

/*
  ignore- (just for reference)
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  const email = user?.emailAddresses[0]?.emailAddress;
  console.log(userId);
  console.log(user?.emailAddresses[0].emailAddress);
  */

const Page = async (props: Props) => {
  const { userId } = await auth();
  if (!userId) redirect("/auth-callback?origin=dashboard");
  const dbUser = await db.user.findFirst({
    where: {
      id: userId,
    },
  });
  if (!dbUser) redirect("/auth-callback?origin=dashboard");

  return <Dashboard />;
};

export default Page;
