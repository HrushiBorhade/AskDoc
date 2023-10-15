import { auth, clerkClient } from "@clerk/nextjs";
import { publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";

export const appRouter = router({
  authCallback: publicProcedure.query(async () => {
    const { userId } = auth();
    const user = userId ? await clerkClient.users.getUser(userId) : null;
    const email = user?.emailAddresses[0]?.emailAddress;
    if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" });
    const dbUser = await db.user.findUnique({
      where: {
        id: userId,
      },
    });
    if (!dbUser) {
      //create user
      await db.user.create({
        data: {
          id: userId,
          email: email!,
        },
      });
    }
    return { success: true };
  }),
});

export type AppRouter = typeof appRouter;
