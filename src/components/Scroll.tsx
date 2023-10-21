const points = [
  "Infinite AI-Memory",
  "Drag'n Drop Uploads",
  "Instant Loading States",
  "Interactive PDF Viewer",
  "Streaming Response",
  "Infinite Message Loading",
  "Optimistic Updates",
  "Completely Type-safe",
  "Feedback Toast Notifications",
];
import React from "react";

type Props = {};

const Scroll = (props: Props) => {
  return (
    <>
      <div className="scroll-container">
        <div className="scroll-slide ">
          {points.map((point, i) => {
            return (
              <p key={i} className="scroll-item  gradient-button px-10">
                {point}
              </p>
            );
          })}

          {points.map((point, i) => {
            return (
              <p key={i} className="scroll-item  gradient-button">
                {point}
              </p>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Scroll;
