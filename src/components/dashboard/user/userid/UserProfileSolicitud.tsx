import React from "react";
import Solicitud from "@/assets/interfaces/solicitud";
import getIconFromString from "@/utils/icons";

type Props = { solicitud: Solicitud };

const UserSolicitud = ({ solicitud }: Props) => {
  return (
    <div className="rounded-lx flex p-4 shadow-lg bg-slate-50 gap-4 items-center hover:scale-[1.005] duration-75 animation-spawn">
      <div className="flex flex-col gap-3">
        <div className="flex items-center gap-2">
          {getIconFromString(solicitud.tipo_solicitud.tipo_solicitud)}
          {solicitud.tipo_solicitud.tipo_solicitud}
        </div>
        <h3>
          {solicitud.tipo_solicitud.tipo_solicitud === "Equipo"
            ? solicitud.cantidad_equipos + " unidades"
            : solicitud.nombre_lab}
        </h3>
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
