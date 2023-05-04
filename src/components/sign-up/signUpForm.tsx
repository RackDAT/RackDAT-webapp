"use client";

import React from "react";
import Background from "@/components/global/Background";
import ContentTemplate from "@/components/global/ContentTemplate";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "@/components/forms/TextInput";
import Link from "next/link";
import Btn from "@/components/global/Btn";
import SelectInput from "@/components/forms/SelectInput";

type Props = {};

const SignUpForm = (props: Props) => {
  interface ICareer {
    id: number;
    nombre: string;
  }

  const careers: ICareer[] = [
    { id: 1, nombre: "Ingeniería de Software" },
    { id: 2, nombre: "Ingeniería Mecánica" },
    { id: 3, nombre: "Ingeniería Industrial" },
  ];
  return (
    <Formik
      initialValues={{
        matricula: "",
        carrera: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="h-full">
        <div className="w-1/2 h-full ml-20 flex flex-col gap-5 justify-center">
          {/* imagen */}
          <span className="text-xl font-bold">Solicita una cuenta RackDAT</span>
          <div className="flex flex-col gap-2">
            <label>Matrícula</label>
            <TextInput
              type="text"
              id={"matricula"}
              name="matricula"
              placeholder="e012345"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label htmlFor="carrera">Carrera</label>
            <SelectInput
              id={"carrera"}
              name="carrera"
              placeholder="Select an option"
            >
              <option value="">Selecciona tu carrera</option>
              {careers.map((career) => (
                <option key={career.id} value={career.id}>
                  {career.nombre}
                </option>
              ))}
            </SelectInput>
          </div>
          <label className="text-center">
            ¿Ya tienes cuenta? Ingresa{" "}
            <Link href="/hello" className="text-yellow-500">
              {" "}
              aqui
            </Link>
          </label>
          <Btn style="strong">Registrarse</Btn>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
