import React from "react";

type Props = {
  type: "text" | "password";
};

const TextInput = (props: Props) => {
  return (
    <input
      className="px-4 py-2 rounded focus:outline-none border-[#B2C1D6] border"
      type={props.type}
    />
  );
};

export default TextInput;
