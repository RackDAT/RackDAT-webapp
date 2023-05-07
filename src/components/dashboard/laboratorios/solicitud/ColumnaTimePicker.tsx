import Btn from "@/components/global/Btn";
import React from "react";

type Props = { handleSolicitar: () => void };

const ColumnaDateTimePicker = ({ handleSolicitar }: Props) => {
  return (
    <div className="p3 rounded-lg shadow-lg bg-slate-50 w-1/3 p-2 justify-center flex flex-col  gap-3 h-full">
      <div>
        <h1>Horario de Inicio</h1>
        <input
          placeholder="hello"
          type="time"
          className="p-1 rounded-lg border-2"
        />
      </div>
      <div>
        <h1>Horario de Entrega</h1>
        <input
          placeholder="hello"
          type="time"
          className="p-1 rounded-lg border-2"
        />
      </div>
      <div>
        <h1>Cantidad de Personas</h1>
        <input
          placeholder="hello"
          type="time"
          className="p-1 rounded-lg border-2"
        />
      </div>
      <div className="flex flex-col">
        <label>Justificacion</label>
        <textarea
          className="p-2 rounded-lg border-2 resize-none min-h-[80px] text-sm"
          placeholder="Escribe tu justificacion aqui"
        ></textarea>
      </div>

      <Btn style="strong" onClick={handleSolicitar}>
        Solicitar
      </Btn>
    </div>
  );
};

export default ColumnaDateTimePicker;
