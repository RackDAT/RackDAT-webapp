import React from "react";

type Props = {
  style: "strong" | "light" | "dark";
  children: React.ReactNode;
  onClick?: () => void;
};

const Btn = (props: Props) => {
  const styles = {
    strong:
      "bg-primary text-white tracking-wider hover:bg-yellow-300 duration-100",
    light:
      "bg-white border-2 text-black hover:bg-yellow-30 hover:shadow duration-100",
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
