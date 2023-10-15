import { auth, clerkClient } from "@clerk/nextjs";
import { TRPCError, initTRPC } from "@trpc/server";

const t = initTRPC.create();
const middleware = t.middleware;
const isAuth = middleware(async (opts) => {
  const { userId } = await auth();
  const user = userId ? await clerkClient.users.getUser(userId) : null;
  if (!userId) throw new TRPCError({ code: "UNAUTHORIZED" });
  return opts.next({
    ctx: {
      userId,
      user,
    },
  });
});

export const router = t.router;
export const publicProcedure = t.procedure;
export const privateProcedure = t.procedure.use(isAuth);
