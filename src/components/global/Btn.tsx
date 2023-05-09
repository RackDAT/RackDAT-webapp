import React from "react";

type Props = {
  style: "strong" | "light" | "dark";
  children: React.ReactNode;
  onClick?: () => void;
  disabled?: boolean;
};

const Btn = ({ style, children, onClick, disabled = false }: Props) => {
  const styles = {
    strong: "bg-primary text-white tracking-wider hover:bg-yellow-300",
    light: "bg-white border-2 text-black hover:bg-yellow-30 hover:shadow",
    dark: "bg-black text-white border hover:bg-white hover:text-black hover:border hover:border-black",
  };
  return (
    <button
      className={"px-7 py-2  rounded-md duration-100 " + styles[style]}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Btn;
