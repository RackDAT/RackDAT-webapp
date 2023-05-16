import Btn from "@/components/global/Btn";
import React from "react";

type Props = {
  handleSolicitar: (
    horaInicio: string,
    horaEntrega: string,
    cantidadPersonas: string,
    justificacion: string
  ) => void;
};

const ColumnaDateTimePicker = ({ handleSolicitar }: Props) => {
  const [horaInicio, setHoraInicio] = React.useState<string>("");
  const [horaEntrega, setHoraEntrega] = React.useState<string>("");
  const [cantidadPersonas, setCantidadPersonas] = React.useState<string>("0");
  const [justificacion, setJustificacion] = React.useState<string>("");

  return (
    <div className="p3 rounded-lg shadow-lg bg-slate-50 w-1/3 p-3 justify-center flex flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-xl block">Especificaciones</label>
        <label className="text-slate-400 text-base">
          La solicitud sera enviada y debera de ser aprobada por el
          Administrador del DAT y por el coordinador de tu carrera
        </label>
      </div>

      <div>
        <div className="gap-3 flex flex-col w-fit">
          <div className="w-full flex flex-col">
            <h1 className="font-semibold">Horario de Inicio</h1>
            <input
              placeholder="hello"
              type="time"
              className="p-1 rounded-lg border-2"
              value={horaInicio}
              onChange={(e) => setHoraInicio(e.target.value)}
            />
          </div>
          <div className="w-full flex flex-col">
            <h1 className="font-semibold">Horario de Entrega</h1>
            <input
              placeholder="hello"
              type="time"
              className="p-1 rounded-lg border-2"
              value={horaEntrega}
              onChange={(e) => setHoraEntrega(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <h1 className="font-semibold">Cantidad de Personas</h1>
            <input
              type="number"
              className="p-1 rounded-lg border-2"
              placeholder="# de personas"
              value={cantidadPersonas}
              onChange={(e) => setCantidadPersonas(e.target.value)}
            />
          </div>
        </div>
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-semibold">Justificacion</label>
          <textarea
            className="p-2 rounded-lg border-2 resize-none min-h-[80px] text-sm"
            placeholder="Escribe tu justificacion aqui"
            value={justificacion}
            onChange={(e) => setJustificacion(e.target.value)}
          />
          <Btn
            style="strong"
            onClick={() =>
              handleSolicitar(
                horaInicio,
                horaEntrega,
                cantidadPersonas,
                justificacion
              )
            }
            disabled={
              horaInicio == "" ||
              horaEntrega == "" ||
              cantidadPersonas == "0" ||
              justificacion == ""
            }
          >
            Solicitar
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default ColumnaDateTimePicker;
