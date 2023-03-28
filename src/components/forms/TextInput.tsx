import React from "react";
import { Field } from "formik";

type Props = {
  type: "text" | "password";
  id: "string";
  name: "string";
  placeholder: "string";
};

const TextInput = (props: Props) => {
  return (
    <Field
      id={props.id}
      name={props.name}
      placeholder={props.placeholder}
      className="px-4 py-2 rounded focus:outline-none border-[#B2C1D6] border"
      type={props.type}
    />
  );
};

export default TextInput;
