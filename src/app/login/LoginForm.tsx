"use client";

import ContentTemplate from "@/components/global/ContentTemplate";
import { Form, Formik, Field } from "formik";
import Link from "next/link";
import React from "react";
ContentTemplate;
import TextInput from "@/components/forms/TextInput";
import Btn from "@/components/global/Btn";

type Props = {};
const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        correo: "",
        contrasena: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="h-full">
        <div className="w-1/2 h-full ml-20 flex flex-col gap-5 justify-center">
          {/* imagen */}
          <span className="text-xl font-bold">Bienvenido nuevamente</span>
          <div className="flex flex-col gap-2">
            <label>Correo</label>
            <TextInput
              type="text"
              id={"correo"}
              name="correo"
              placeholder="daniel.barocio@cetys.edu.mx"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Contraseña</label>
            <TextInput
              type="text"
              id={"contrasena"}
              name="contrasena"
              placeholder="**********"
            />
          </div>
          <label className="text-center">
            No tienes cuenta? Crea una{" "}
            <Link href="/hello" className="text-yellow-400">
              {" "}
              aqui
            </Link>
          </label>
          <Btn>Ingresar</Btn>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
