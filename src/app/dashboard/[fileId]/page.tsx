import React from "react";

const page = ({ params }: { params: { fileId: string } }) => {
  const { fileId } = params;
  return <div className="font-sans">{fileId}</div>;
};

export default page;
