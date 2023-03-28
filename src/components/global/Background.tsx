import React from "react";

type Props = {
  children: React.ReactNode;
};

const Background = (props: Props) => {
  return (
    <div className="w-full h-full bg-[#1E1C27] flex">{props.children}</div>
  );
};

export default Background;
