"use client";

import React, { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextInput from "@/components/forms/TextInput";
import Link from "next/link";
import Btn from "@/components/global/Btn";
import SelectInput from "@/components/forms/SelectInput";
import INewProfile from "@/assets/interfaces/newProfile";
import ICareer from "@/assets/interfaces/career";
import { GetServerSideProps } from "next";
import axios from "axios";
import { useRouter } from "next/router";

type Props = {
  profile: INewProfile;
  careers: ICareer[];
};

const SignUpForm = ({ profile, careers }: Props) => {
  const router = useRouter();

  const postUser = (data: any) => {
    console.log(data);
    axios
      .post("https://rackdat.onrender.com/api/RackDAT/usuario", data)
      .catch((error) => {
        console.error(error);
        throw new Error("Error en la solicitud POST");
      });
  };

  const redirect = () => {
    router.push({
      pathname: "/wait",
    });
  };

  return (
    <Formik
      initialValues={{
        nombre: profile.nombre,
        apellido_pat: profile.apellido,
        apellido_mat: "",
        correo: profile.correo,
        tipo_usuario: 7,
        imagen: profile.imagen,
        clave: "",
        carrera: 0,
      }}
      onSubmit={(values) => {
        postUser(values);
        redirect();
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
              id={"clave"}
              name="clave"
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
              <option value="" key="">
                Selecciona tu carrera
              </option>
              {careers.map((career) => (
                <option key={career.id} value={career.id}>
                  {career.carrera}
                </option>
              ))}
            </SelectInput>
          </div>
          <button
            className="bg-primary text-white tracking-wider hover:bg-yellow-300 duration-100 rounded-md p-1"
            type="submit"
          >
            Registrarse
          </button>
        </div>
      </Form>
    </Formik>
  );
};

export default SignUpForm;
