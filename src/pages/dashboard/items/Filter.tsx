import React from "react";

type Props = {
  children: React.ReactNode;
};

const Filter = (props: Props) => {
  return (
    <select className="px-2 py-[.5em] rounded-lg min-w-[100px] shadow-lg bg-[#EDEDED] border-2 border-[#00000020] text-xs">
      {props.children}
    </select>
  );
};

export default Filter;
