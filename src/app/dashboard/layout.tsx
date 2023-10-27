import React, { PropsWithChildren } from "react";
import DashBoardNavbar from "./navbar";
import Navbar from "./navbar";

const layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
};

export default layout;
