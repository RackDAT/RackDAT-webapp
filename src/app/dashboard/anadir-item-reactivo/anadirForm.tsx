"use client";

import TextInput from "@/components/forms/TextInput";
import { Form, Formik } from "formik";
import React from "react";
import Btn from "@/components/global/Btn";
import SelectInput from "@/components/forms/SelectInput";
import TextArea from "@/components/forms/TextArea";

const AnadirForm = () => {
  interface ILaboratorio {
    id: number;
    nombre: string;
  }
  
  const labs: ILaboratorio[] = [
    { id: 1, nombre: 'Redes' },
    { id: 2, nombre: 'Industrial' },
    { id: 3, nombre: 'Energías renovables' },
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
        observaciones: ""
      }}
      onSubmit={(values) => {
        alert(JSON.stringify(values));
      }}
    >
      <Form className="h-screen flex flex-col justify-center items-center border border-black">
        <div className="grid grid-cols-3 place-items-center gap-4 w-2/4 border border-black">
          <div className="border border-black">Column 1</div>
          <div className="border border-black flex flex-col">
            <div className="p-2 flex flex-col">
              <label>Nombre</label>
              <TextInput
                type="text"
                id={"nombre"}
                name="nombre"
                placeholder="Juan"
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
          <div className="border border-black flex flex-col">
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
        <div className="grid grid-cols-3 justify-between gap-4 w-2/4 border border-black">
          <div className="col-span-2 flex items-center justify-center flex-col h-[350px]">
            <div className="p-2 flex flex-col border border-black w-full h-[50%]">
              <label>Fecha de alta</label>
              <TextArea
                type="text"
                id={"fecha"}
                name="fecha"
                placeholder="01/01/1900"
              />
            </div>
            <div className="p-2 flex flex-col border border-black w-full h-[50%]">
              <label>Fecha de alta</label>
              <TextArea
                type="text"
                id={"fecha"}
                name="fecha"
                placeholder="01/01/1900"
              />
            </div>
          </div>
          <div className="flex flex-col content-between justify-center">
            hola
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default AnadirForm;