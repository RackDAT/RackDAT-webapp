import React from "react";
import { Field } from "formik";

type Props = {
  id: string;
  name: string;
  placeholder: string;
  children: React.ReactNode;
};

const SelectInput = ({ id, name, placeholder, children }: Props) => {
  return (
    <Field
      as="select"
      id={id}
      name={name}
      placeholder={placeholder}
      className="px-4 py-2 rounded focus:outline-none border-[#B2C1D6] border"
    >
      {children}
    </Field>
  );
};

export default SelectInput;
