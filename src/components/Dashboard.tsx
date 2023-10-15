"use client";
import React from "react";
import UploadButton from "./UploadButton";
import MaxWidthWrapper from "./MaxWidthWrapper";

type Props = {};

const Dashboard = (props: Props) => {
  return (
    <main className="mx-auto font-sans max-w-7xl md:p-10">
      <MaxWidthWrapper>
        <div className="mt-4 flex  items-start justify-between gap-4 border-b border-gray-700 pb-4 md:pb-5 ">
          <h1 className="mb-3 font-heading font-bold  text-4xl md:text-5xl  text-white">
            My Files
          </h1>

          <UploadButton />
        </div>
      </MaxWidthWrapper>
    </main>
  );
};

export default Dashboard;
