"use client";

import ContentTemplate from "@/components/global/ContentTemplate";
import { Form, Formik, Field } from "formik";
import Link from "next/link";
import React from "react";
ContentTemplate;
import Image from "next/image";
import TextInput from "@/components/forms/TextInput";
import logo from "../../assets/img/logo.svg";
import Btn from "@/components/global/Btn";

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
      <Form className="h-full">
        <div className="w-1/2 h-full ml-20 flex flex-col gap-5 justify-center">
          {/* imagen */}
          <div style={{ width: "100px", height: "100px" }} className="border border-l-green-800">
            <Image src={logo} alt="logo" width={300} height={100} onError={(e) => console.log(e)} />
          </div>
          <span className="text-xl font-bold">Bienvenidos nuevamente</span>
          <div className="flex flex-col gap-2">
            <label>Correo</label>
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
          <Btn>Ingresar</Btn>
        </div>
      </Form>
    </Formik>
  );
};

export default LoginForm;
