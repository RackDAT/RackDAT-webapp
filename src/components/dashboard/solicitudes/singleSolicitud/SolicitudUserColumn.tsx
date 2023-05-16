import React from "react";
import Image from "next/image";
import person from "@assets/img/software.png";
import User from "@/assets/interfaces/users";

type Props = {
  user: User;
};

const SolicitudUserColumn = ({ user }: Props) => {
  return (
    <div className="flex flex-col rounded-xl bg-white shadow py-6 px-4 gap-4 w-1/3">
      <div className="text-center flex flex-col items-center gap-2">
        <Image
          src={user.imagen}
          alt="Picture of the author"
          width={200}
          height={200}
          className="rounded-full w-24 h-24 object-cover"
        />
        <div>
          <h1 className="font-semibold text-lg">
            {user.nombre} {user.apellido_pat}
          </h1>
          <h2 className="text-md text-slate-700">{user.correo}</h2>
        </div>
      </div>
      <div className="flex flex-col items-start gap-4 text-sm">
        <h1 className="text-center text-lg font-semibold text-primary">
          Informacion
        </h1>
        <div>
          <label className="text-slate-400 uppercase">Carrera</label>
          <h1 className="font-semibold">{user.carrera.carrera}</h1>
        </div>
        <div>
          <label className="text-slate-400 uppercase">Tipo de Usuario</label>
          <h2 className="font-semibold">{user.tipo_usuario.tipo_usuario}</h2>
        </div>
      </div>
    </div>
  );
};

export default SolicitudUserColumn;
