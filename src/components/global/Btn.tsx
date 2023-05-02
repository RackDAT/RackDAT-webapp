import React from "react";

type Props = {
  style: "strong" | "light" | "dark";
  children: React.ReactNode;
  onClick?: () => void;
};

const Btn = (props: Props) => {
  const styles = {
    strong: "bg-orange-400 text-white hover:bg-orange-300",
    light: "bg-orange-100 text-orange-400 hover:bg-orange-200",
    dark: "bg-black text-white border hover:bg-white hover:text-black hover:border hover:border-black duration-100",
  };
  return (
    <button
      className={"px-7 py-2  rounded-md " + styles[props.style]}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
};

export default Btn;
