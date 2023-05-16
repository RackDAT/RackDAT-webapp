import React from "react";
import Solicitud from "@/assets/interfaces/solicitud";
import getIconFromString from "@/utils/icons";
import EstadoSolicitud from "../../solicitudes/EstadoSolicitud";
import getDateString from "@/components/functions/getDate";
import Link from "next/link";
import Btn from "@/components/global/Btn";

type Props = { solicitud: Solicitud };

const UserSolicitud = ({ solicitud }: Props) => {
  return (
    <div className="rounded-lx flex p-4 shadow-lg bg-slate-50 gap-4 items-center hover:scale-[1.005] duration-75 animation-spawn w-full justify-between">
      <div className="flex  gap-3">
        <div className="flex items-center gap-2">
          {getIconFromString(solicitud.tipo_solicitud.tipo_solicitud)}
        </div>
        <div className="flex flex-col">
          <label>{solicitud.tipo_solicitud.tipo_solicitud}</label>
          <label className="text-slate-400">
            {solicitud.tipo_solicitud.tipo_solicitud === "Equipo"
              ? solicitud.cantidad_equipos + " unidades"
              : solicitud.laboratorio_obtenido}
          </label>
        </div>
      </div>
      <div className="flex flex-col text-center">
        <h1>Pedido el </h1>
        {getDateString(solicitud.fecha_pedido)}
      </div>
      <div className="flex flex-col text-center">
        <Link href={`/dashboard/solicitudes/${solicitud.folio}`}>
          <Btn style="strong">Ver Solicitud</Btn>
        </Link>
      </div>
      <div>
        <EstadoSolicitud
          estatus={solicitud.estatus_solicitud.estatus_solicitud}
        />
      </div>
    </div>
  );
};

export default UserSolicitud;
