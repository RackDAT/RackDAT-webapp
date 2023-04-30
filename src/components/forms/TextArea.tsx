import React from "react";
import { Field } from "formik";

type Props = {
  type: "text" | "password";
  id: string;
  name: string;
  placeholder: string;
};

const TextArea = (props: Props) => {
  return (
    <Field
      id={props.id}
      as="textarea"
      name={props.name}
      placeholder={props.placeholder}
      rows="5"
      className="px-4 py-2 rounded focus:outline-none border-[#B2C1D6] border w-full h-full resize-none"
      type={props.type}
    />
  );
};

export default TextArea;
