import React, { PropsWithChildren } from "react";
import DashBoardNavbar from "./navbar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      {/* <DashBoardNavbar /> */}
      {children}
    </div>
  );
};

export default layout;
