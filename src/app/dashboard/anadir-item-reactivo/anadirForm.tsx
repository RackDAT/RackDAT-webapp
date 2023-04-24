"use client";

import TextInput from "@/components/forms/TextInput";
import { Form, Formik } from "formik";
import React from "react";
import Btn from "@/components/global/Btn";
import SelectInput from "@/components/forms/SelectInput";
import TextArea from "@/components/forms/TextArea";
import SelectNums from "@/components/forms/SelectNums";
import Dropzone from "@/components/forms/Dropzone";

const AnadirForm = () => {
  interface ILaboratorio {
    id: number;
    nombre: string;
  }

  const labs: ILaboratorio[] = [
    { id: 1, nombre: "Redes" },
    { id: 2, nombre: "Industrial" },
    { id: 3, nombre: "Energías renovables" },
  ];

  return (
    <Formik
      initialValues={{
        nombre: "",
        laboratorio: "",
        marca: "",
        inventario: "",
        modelo: "",
        fecha: new Date().toLocaleDateString(),
        cantidad: 0,
        observaciones: "",
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="h-screen flex flex-col justify-center items-center">
        <div className="grid grid-cols-3 justify-items-between gap-3 w-8/12">
          <div className="p-2 flex flex-col justify-center items-center col-span-1 h-full w-full">
            <Dropzone w={500} h={40} fileType="image/*" />
          </div>
          <div className="flex flex-col col-span-1">
            <div className="p-2 flex flex-col">
              <label>Nombre</label>
              <TextInput
                type="text"
                id={"nombre"}
                name="nombre"
                placeholder="Calculadora"
              />
            </div>
            <div className="p-2 flex flex-col">
              <label>Marca</label>
              <TextInput
                type="text"
                id={"marca"}
                name="marca"
                placeholder="Casio"
              />
            </div>
            <div className="p-2 flex flex-col">
              <label>Modelo</label>
              <TextInput
                type="text"
                id={"modelo"}
                name="modelo"
                placeholder="JX-1932B"
              />
            </div>
          </div>
          <div className=" flex flex-col col-span-1">
            <div className="p-2 flex flex-col">
              <label>Laboratorio</label>
              <SelectInput
                id="carrera"
                name="carrera"
                placeholder="Select an option"
              >
                <option value="">Selecciona tu carrera</option>
                {labs.map((lab) => (
                  <option key={lab.id} value={lab.id}>
                    {lab.nombre}
                  </option>
                ))}
              </SelectInput>
            </div>
            <div className="p-2 flex flex-col">
              <label>Inventario</label>
              <SelectInput
                id="carrera"
                name="carrera"
                placeholder="Select an option"
              >
                <option value="">Selecciona el inventario</option>
              </SelectInput>
            </div>
            <div className="p-2 flex flex-col">
              <label>Fecha de alta</label>
              <TextInput
                type="text"
                id={"fecha"}
                name="fecha"
                placeholder="01/01/1900"
              />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-3 justify-between gap-4 w-8/12 ">
          <div className="col-span-2 flex items-center justify-center flex-col h-[350px]">
            <div className="p-2 flex flex-col w-full h-[50%]">
              <label>Adjunta manual o documentación aquí</label>
              <Dropzone h="full" w="full" fileType="document/*" />
            </div>
            <div className="p-2 flex flex-col w-full h-[50%]">
              <label>Observaciones</label>
              <TextArea
                type="text"
                id={"observaciones"}
                name="observaciones"
                placeholder="Anota observaciones, notas o especifícaciones aquí"
              />
            </div>
          </div>
          <div className="flex flex-col content-between justify-between items-end p-2">
            <div className="flex flex-col w-full items-end">
              <label>Cantidad</label>
              <SelectNums id="quantity" name="quantity" placeholder="0">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
              </SelectNums>
            </div>
            <Btn style="strong">Registrar</Btn>
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AnadirForm;
