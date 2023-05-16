import React, { useEffect } from "react";
import Estatus from "@/assets/interfaces/estatus";

type Props = {
  estatus: Estatus;
};

const EstadoSolicitud = ({ estatus }: any) => {
  console.log(estatus);
  return (
    <div className="flex items-center uppercase gap-2">
      <div
        className={
          "rounded-full h-3 w-3 " +
          (estatus == "pendiente"
            ? "bg-orange-400"
            : estatus == "aprobado"
            ? "bg-green-400"
            : "bg-red-400")
        }
      />
      <label>{estatus}</label>
    </div>
  );
};

export default EstadoSolicitud;
