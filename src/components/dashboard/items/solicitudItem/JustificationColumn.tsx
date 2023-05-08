import Btn from "@/components/global/Btn";
import React from "react";

type Props = { handleSolicitar: () => void };

const JustificationColumn = ({ handleSolicitar }: Props) => {
  return (
    <div className="p3 rounded-lg shadow-lg bg-slate-50 w-1/3 p-3 justify-center flex flex-col gap-5 h-full">
      <div className="flex flex-col gap-2">
        <label className="font-semibold text-xl block">Especificaciones</label>
        <label className="text-slate-400 text-base">
          La solicitud sera enviada y debera de ser aprobava por el
          Administrador del DAT y por el coordinador de tu carrera
        </label>
      </div>

      <div>
        <div className="flex flex-col gap-2 mt-2">
          <label className="font-semibold">Justificacion</label>
          <textarea
            className="p-2 rounded-lg border-2 resize-none min-h-[200px] text-sm"
            placeholder="Escribe tu justificacion aqui"
          ></textarea>
          <Btn style="strong" onClick={handleSolicitar}>
            Solicitar
          </Btn>
        </div>
      </div>
    </div>
  );
};

export default JustificationColumn;
