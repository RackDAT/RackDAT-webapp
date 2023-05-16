import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";
import React from "react";
import { useRouter } from "next/router";
import Solicitud from "@/assets/interfaces/solicitud";
import EstadoSolicitud from "@/components/dashboard/solicitudes/EstadoSolicitud";
import getDateString from "@/components/functions/getDate";
import Image from "next/image";
import getIconFromString from "@/utils/icons";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
} from "react-icons/ai";

type Props = {
  solicitud: Solicitud;
  index: number;
};

const SolicitudDiv = ({ solicitud, index }: Props) => {
  const router = useRouter();
  const tipoSolicitudId = solicitud.id_tipo_solicitud;

  const redirectSingleSolicitudView = (folio: number) => {
    router.push({
      pathname: `/dashboard/solicitudes/${solicitud.folio}`,
    });
  };

  const convertDateToString = (date: Date): string => {
    const dateString = date.toString();
    return dateString;
  };

  return (
    <div
      className={`w-full flex bg-white rounded-md flex-col hover:scale-[100.5%] duration-200 shadow-md text-sm animate-[spawnKeyFrames_${index}s_ease-in-out]
      `}
    >
      {/* header */}
      <div className="border-b-[1px] w-full border-neutral-300 px-2 py-2 flex justify-between">
        <div className="flex gap-4">
          <span className="font-bold flex gap-1">
            {getIconFromString(solicitud.tipo_solicitud.tipo_solicitud)}
            {solicitud.tipo_solicitud.tipo_solicitud}
          </span>
          <span className="text-neutral-400 font-">
            {getDateString(convertDateToString(solicitud.fecha_pedido))}
          </span>
        </div>
        <div className="flex gap-3">
          <label className="flex items-center gap-1">
            {solicitud.aprobacion_coordinador == null ? (
              <AiFillExclamationCircle className="text-orange-400" />
            ) : solicitud.aprobacion_coordinador == true ? (
              <AiFillCheckCircle className="text-green-400" />
            ) : (
              <AiFillCloseCircle className="text-red-400" />
            )}
            Coordinador
          </label>
          <label className="flex items-center gap-1">
            {solicitud.aprobacion_tecnico == null ? (
              <AiFillExclamationCircle className="text-orange-400" />
            ) : solicitud.aprobacion_tecnico == true ? (
              <AiFillCheckCircle className="text-green-400" />
            ) : (
              <AiFillCloseCircle className="text-red-400" />
            )}
            Tecnico
          </label>
        </div>
        <EstadoSolicitud estatus={solicitud.estatus_solicitud} />
      </div>

      {/* content? */}
      <div className="px-2 py-2 flex gap-2 items-center  text-sm justify-between">
        <div className="flex items-center space-x-3.5 ">
          {solicitud.imagen != null && (
            <Image
              src={solicitud.imagen}
              alt=""
              className="w-20 h-20 rounded"
              height={100}
              width={100}
            />
          )}
          <div className="flex flex-col justify-between h-20 py-2">
            <h1>
              {solicitud.usuario.nombre + " " + solicitud.usuario.apellido_pat}
            </h1>
            <h1 className="text-neutral-500 text-sm">
              {solicitud.id_tipo_solicitud === 1
                ? solicitud.cantidad_equipos + " unidades"
                : //@ts-ignore
                  "Laboratorio " + solicitud.laboratorio_obtenido}
            </h1>
          </div>
        </div>
        <div className="max-w-xs h-20 justify-center  py-2 text-xs flex flex-col gap-4 text-ellipsis overflow-hidden ">
          <label>{solicitud.comentario}</label>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2 text-xs">
          <Btn
            style="strong"
            onClick={() => {
              redirectSingleSolicitudView(solicitud.folio);
            }}
          >
            Ver solicitud
          </Btn>
          <Btn style="light">Volver a solicitar</Btn>
        </div>
      </div>
    </div>
  );
};

export default SolicitudDiv;
