import React from "react";
import Image from "next/image";
import person from "@assets/img/software.png";

type Props = {};

const SolicitudUserColumn = (props: Props) => {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow py-6 px-4 gap-4">
      <div className="text-center flex flex-col items-center gap-2">
        <Image
          src={
            "https://firebasestorage.googleapis.com/v0/b/rackdat-b06a8.appspot.com/o/Laboratorios%2Fperson.jpg?alt=media&token=97bc9991-b0b8-4009-9a0a-04e6816122d6"
          }
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full w-24 h-24 object-cover"
        />
        <div>
          <h1 className="font-semibold text-lg">Daniel Barocio</h1>
          <h2 className="text-md text-slate-700">
            daniel.barocio@cetys.edu.mx
          </h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 text-sm">
        <h1 className="text-center text-lg font-semibold text-primary">
          Informacion
        </h1>
        <div>
          <label className="text-slate-400 uppercase">Carrera</label>
          <h1 className="font-semibold">Ingenieria en software</h1>
        </div>
        <div>
          <label className="text-slate-400 uppercase">Tipo de Usuario</label>
          <h2 className="font-semibold">Alumno</h2>
        </div>
      </div>
    </div>
  );
};

export default SolicitudUserColumn;
