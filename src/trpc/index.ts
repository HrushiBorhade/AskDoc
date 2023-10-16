import { auth, clerkClient } from "@clerk/nextjs";
import { privateProcedure, publicProcedure, router } from "./trpc";
import { TRPCError } from "@trpc/server";
import { db } from "@/lib/db";
import { z } from "zod";
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
  getUserFiles: privateProcedure.query(async ({ ctx }) => {
    const { userId, user } = ctx;
    return await db.file.findMany({
      where: {
        userId,
      },
    });
  }),
  deleteFile: privateProcedure
    .input(z.object({ id: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { id } = input;
      const file = await db.file.findFirst({
        where: {
          id: id,
          userId,
        },
      });
      if (!file) throw new TRPCError({ code: "NOT_FOUND" });
      if (file.userId !== userId) throw new TRPCError({ code: "UNAUTHORIZED" });
      await db.file.delete({
        where: {
          id,
        },
      });
      return { success: true };
    }),
  getFile: privateProcedure
    .input(z.object({ key: z.string(), name: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const { userId } = ctx;
      const { key, name } = input;
      const isFileExist = await db.file.findFirst({
        where: {
          key: key,
        },
      });

      if (isFileExist) return;

      const file = await db.file.create({
        data: {
          key: key,
          name: name,
          userId: userId,
          url: `https://${process.env.NEXT_PUBLIC_S3_BUCKET_NAME}.s3.ap-south-1.amazonaws.com/${key}`,
          uploadStatus: "PROCESSING",
        },
      });
      if (!file) throw new TRPCError({ code: "NOT_FOUND" });
      return file;
    }),
});

export type AppRouter = typeof appRouter;
