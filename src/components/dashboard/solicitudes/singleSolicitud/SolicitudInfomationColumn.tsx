import React, { useEffect, useState } from "react";
import {
  AiFillCheckCircle,
  AiFillCloseCircle,
  AiFillExclamationCircle,
  AiOutlineLogout,
} from "react-icons/ai";
import { ImLab } from "react-icons/im";
import { TbClockHour3 } from "react-icons/tb";
import { BiLogIn, BiLogOut } from "react-icons/bi";
import { GetServerSideProps } from "next";
import { BsFillGearFill } from "react-icons/bs";
import ISolicitud from "@/assets/interfaces/solicitud";
import EstadoSolicitud from "../EstadoSolicitud";

export const getServerSideProps: GetServerSideProps = async (context) => {
  const date2 = new Date();
  return {
    props: {
      date: 1,
    },
  };
};

type Props = {
  id_tipo_solicitud: any;
  solicitud: ISolicitud;
};

const SolicitudInfomationColumn = ({ id_tipo_solicitud, solicitud }: Props) => {
  const [date, setDate] = useState<Date | null>(null);
  useEffect(() => {
    const date = new Date();
    setDate(date);
  }, []);

  if (date === null) return <div></div>;

  const formattingDate = (date: Date) => {
    const fechapedido = new Date(date);
    const formattedDate = fechapedido.toLocaleDateString([], {
      weekday: "short",
      year: "numeric",
      month: "short",
      day: "2-digit",
    });
    const formattedTime = fechapedido.toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    });

    return { date: formattedDate, time: formattedTime };
  };

  return (
    <div className="flex flex-col rounded-xl bg-white shadow py-6 px-4 gap-4 w-3/4">
      <div className="flex justify-between items-center gap-2">
        {id_tipo_solicitud === 3 ? (
          <div className="flex items-center gap-2">
            <ImLab className="w-6 h-6" />
            <h1 className="text-lg font-semibold">Solicitud de Laboratorio</h1>
          </div>
        ) : (
          <div className="flex items-center gap-2">
            <BsFillGearFill className="w-6 h-6" />
            <h1 className="text-lg font-semibold">Solicitud de Equipos</h1>
          </div>
        )}
        <div className="flex flex-col items-end">
          <EstadoSolicitud estatus={solicitud.estatus_solicitud} />
        </div>
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
      {id_tipo_solicitud === 3 ? (
        <div className="flex flex-col gap-4 px-4">
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-400">Laboratorio</label>
            <label>{solicitud.laboratorio_obtenido}</label>
          </div>
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-400">Justificacion</label>
            <p className="text-sm">{solicitud.comentario}</p>
          </div>
        </div>
      ) : (
        <div className="flex flex-col gap-4 px-4">
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-400">Justificacion</label>
            <p className="text-sm">{solicitud.comentario}</p>
          </div>
          <div className=" flex flex-col gap-2">
            <label className="uppercase text-slate-400">Items</label>
            <ul className="list-disc px-5">
              {solicitud.modelos.map((modelo, index) => (
                <li key={index}>
                  {solicitud.descripciones[index]} {modelo}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      <div className="w-full justify-center flex">
        <div className="flex gap-10">
          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">Solicitud</label>
            <TbClockHour3 className="w-10 h-10 text-primary" />
            <label>{formattingDate(solicitud.fecha_pedido).date}</label>
            <label>{formattingDate(solicitud.fecha_pedido).time}</label>
          </div>

          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">
              {id_tipo_solicitud === 3 ? (
                <label>Ingreso</label>
              ) : (
                <label>Préstamo</label>
              )}
            </label>
            <BiLogIn className="w-10 h-10 text-primary" />
            <label>{formattingDate(solicitud.fechas[0]).date}</label>
            <label>{formattingDate(solicitud.fechas[0]).time}</label>
          </div>

          <div className="flex flex-col items-center text-sm">
            <label className="font-semibold text-base">
              {id_tipo_solicitud === 3 ? (
                <label>Egreso</label>
              ) : (
                <label>Devolución</label>
              )}
            </label>
            <BiLogOut className="w-10 h-10 text-primary" />
            <label>{formattingDate(solicitud.fechas[1]).date}</label>
            <label>{formattingDate(solicitud.fechas[1]).time}</label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SolicitudInfomationColumn;
