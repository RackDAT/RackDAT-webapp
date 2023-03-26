import React from "react";

type Props = {
  children: React.ReactNode;
};

const Btn = (props: Props) => {
  return (
    <button className="px-7 py-2 bg-orange-400 text-white rounded-md hover:bg-orange-300">
      {props.children}
    </button>
  );
};

export default Btn;
