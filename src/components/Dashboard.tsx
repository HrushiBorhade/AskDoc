"use client";
import React from "react";
import UploadButton from "./UploadButton";
import MaxWidthWrapper from "./MaxWidthWrapper";
import { trpc } from "@/app/_trpc/client";
import { Bot, Ghost, Loader2, MessageSquare, Plus, Trash } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { format } from "date-fns";
type Props = {};

const Dashboard = (props: Props) => {
  const { data: files, isLoading } = trpc.getUserFiles.useQuery();
  return (
    <main className="mx-auto font-sans max-w-7xl md:p-10">
      <MaxWidthWrapper>
        <div className="mt-4 flex  items-start justify-between gap-4 border-b border-gray-700 pb-4 md:pb-5 ">
          <h1 className="mb-3 font-heading font-bold  text-4xl md:text-5xl  text-white">
            Documents
          </h1>

          <UploadButton />
        </div>
        {files && files?.length !== 0 ? (
          <ul className="mt-8 grid grid-cols-1 gap-6 divide-y divide-zinc-200 md:grid-cols-2 lg:grid-cols-3">
            {files
              .sort(
                (a, b) =>
                  new Date(b.createdAt).getTime() -
                  new Date(a.createdAt).getTime()
              )
              .map((file) => (
                <li
                  key={file.id}
                  className="col-span-1 divide-y divide-gray-900 rounded-2xl bg-black shadow transition hover:shadow-lg"
                >
                  <Link
                    href={`/dashboard/${file.id}`}
                    className="flex flex-col gap-2"
                  >
                    <div className="pt-6 px-6 flex w-full items-center justify-between space-x-6">
                      <div className="h-10 w-10 flex-shrink-0 rounded-full bg-gradient-to-r from-cyan-500 to-blue-500" />
                      <div className="flex-1 truncate">
                        <div className="flex items-center space-x-3">
                          <h3 className="truncate text-lg font-medium text-white">
                            {file.name}
                          </h3>
                        </div>
                      </div>
                    </div>
                  </Link>

                  <div className="px-6 mt-4 grid grid-cols-3 place-items-center py-2 gap-6 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <Plus className="h-4 w-4" />
                      {format(new Date(file.createdAt), "MMM yyyy")}
                    </div>

                    <div className="flex items-center gap-2">
                      <MessageSquare className="h-4 w-4" />
                      mocked
                    </div>

                    <Button
                      onClick={
                        () => {}
                        // () =>
                        // deleteFile({ id: file.id })
                      }
                      size="sm"
                      className="w-full"
                      variant="destructive"
                    >
                      {
                        // currentlyDeletingFile === file.id
                        false ? (
                          <Loader2 className="h-4 w-4 animate-spin" />
                        ) : (
                          <Trash className="h-4 w-4" />
                        )
                      }
                    </Button>
                  </div>
                </li>
              ))}
          </ul>
        ) : isLoading ? (
          <SkeletonTheme baseColor="#08080c" highlightColor="#111016">
            <Skeleton height={100} className="my-2 text-gray-900" count={4} />
          </SkeletonTheme>
        ) : (
          <div className="mt-16 flex flex-col items-center gap-2">
            <Bot className="h-8 w-8 text-white" />
            <h3 className="font-semibold text-xl">
              No files have been uploaded yet
            </h3>
            Let&apos;s upload your first PDF.
          </div>
        )}
      </MaxWidthWrapper>
    </main>
  );
};

export default Dashboard;
