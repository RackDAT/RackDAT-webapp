"use client";

import ContentTemplate from "@/components/global/ContentTemplate";
import { Form, Formik, Field } from "formik";
import Link from "next/link";
import React from "react";
ContentTemplate;
import TextInput from "@/components/forms/TextInput";

type Props = {};
const LoginForm = () => {
  return (
    <Formik
      initialValues={{
        matricula: "",
        contraseña: "",
      }}
      onSubmit={(values) => {
        alert(values);
      }}
    >
      <Form>
        <div className="w-1/2 ml-20 flex flex-col gap-5">
          {/* imagen */}
          <span className="text-xl font-bold">Bienvenidos nuevamente</span>
          <div className="flex flex-col gap-2">
            <label>Matricula</label>
            <Field
              as={TextInput}
              id="firstName"
              name="firstName"
              placeholder="John"
              type="text"
            />
          </div>
          <div className="flex flex-col gap-2">
            <label>Contraseña</label>
            <Field
              as={TextInput}
              id="contraseña"
              name="contraseña"
              placeholder="*******"
              type="password"
            />
          </div>
          <label className="text-center">
            No tienes cuenta? Crea una{" "}
            <Link href="/hello" className="text-yellow-400">
              {" "}
              aqui
            </Link>
          </label>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
