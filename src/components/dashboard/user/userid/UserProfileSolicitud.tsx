import React from "react";

type Props = {};

const UserSolicitud = (props: Props) => {
  return (
    <div className="rounded-lx flex p-4 shadow-lg bg-slate-50 gap-4 items-center hover:scale-[1.005] duration-75">
      <div className="flex flex-col gap-3">
        <h1>Solicitud de material</h1>
        <h3>4 unidades</h3>
      </div>
      <div className="flex flex-col text-center">
        <h1>Fecha Inicio</h1>
        <p>12/12/2021</p>
      </div>
      <div className="flex flex-col text-center">
        <h1>Horario</h1>
        <p>8:00 - 10:00</p>
      </div>
    </div>
  );
};

export default UserSolicitud;
