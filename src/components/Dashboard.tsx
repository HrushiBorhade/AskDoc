"use client";
import React, { useState } from "react";
import UploadButton from "./UploadButton";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { trpc } from "@/app/_trpc/client";
import {
  Bot,
  Calendar,
  Ghost,
  Loader2,
  MessageCircle,
  MessageSquare,
  MessagesSquare,
  Plus,
  Trash,
} from "lucide-react";
import Link from "next/link";
import { Button, buttonVariants } from "./ui/button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { format } from "date-fns";
import { getUserSubscriptionPlan } from "@/lib/stripe";
interface PageProps {
  subscriptionPlan: Awaited<ReturnType<typeof getUserSubscriptionPlan>>;
}

const Dashboard = ({ subscriptionPlan }: PageProps) => {
  const [currentlyDeletingFile, setCurrentlyDeletingFile] = useState<
    string | null
  >(null);

  const utils = trpc.useContext();

  const { data: files, isLoading } = trpc.getUserFiles.useQuery();

  const { mutate: deleteFile } = trpc.deleteFile.useMutation({
    onSuccess: () => {
      utils.getUserFiles.invalidate();
    },
    onMutate({ id }) {
      setCurrentlyDeletingFile(id);
    },
    onSettled() {
      setCurrentlyDeletingFile(null);
    },
  });
  return (
    <main className="mx-auto bg-black font-sans max-w-7xl md:p-10">
      <MaxWidthWrapper>
        <div className="mt-10 flex  items-center justify-between gap-4 border-b border-gray-700 pb-4 md:pb-5 ">
          <h1 className="mb-3 font-heading font-bold  text-4xl md:text-5xl  text-white">
            Documents
          </h1>

          <UploadButton isSubscribed={subscriptionPlan.isSubscribed} />
        </div>
        {files && files?.length !== 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
            {files
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((file, i) => (
                <li
                  key={file.id}
                  className="col-span-1 border divide-y divide-gray-900 rounded-2xl  shadow transition hover:shadow-lg"
                >
                  <Link
                    href={`/dashboard/${file.id}`}
                    className="flex flex-col gap-2"
                  >
                    <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                      <div
                        className={`h-8 w-8 flex-shrink-0 rounded-full ${
                          i % 2 == 0
                            ? "bg-gradient-to-r from-cyan-500 to-blue-500"
                            : "bg-gradient-to-r from-pink-400 to-red-500"
                        }`}
                      />
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="truncate text-lg tracking-tight font-poppins font-medium text-white">
                            {file.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="px-6 mt-4 grid grid-cols-2 place-items-center py-2 gap-6 text-sm text-slate-300">
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-slate-300" />
                      {format(new Date(file.createdAt), "MMM yyyy")}
                    </div>

                    <Button
                      onClick={() => deleteFile({ id: file.id })}
                      size="sm"
                      className="w-full rounded-3xl px-2 bg-transaprent hover:bg-red-200 text-red-400 hover:text-red-600"
                      variant="destructive"
                    >
                      {currentlyDeletingFile === file.id ? (
                        <Loader2 className="h-4 w-4 animate-spin" />
                      ) : (
                        <Trash className="h-4 w-4" />
                      )}
                    </Button>
                  </div>
                </li>
              ))}
          </ul>
        ) : isLoading ? (
          <SkeletonTheme baseColor="#0a0a0e" highlightColor="#12101a">
            <Skeleton height={100} className="my-2 text-gray-900" count={4} />
          </SkeletonTheme>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Bot className="h-8 w-8 text-white" />
            <h3 className="font-semibold text-xl">No files uploaded yet</h3>
            Let&apos;s upload your first PDF.
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default Dashboard;
