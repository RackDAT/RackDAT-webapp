import React, { useEffect } from "react";
import Estatus from "@/assets/interfaces/estatus";

type Props = {
  estatus: Estatus;
};

const EstadoSolicitud = ({ estatus }: any) => {
  useEffect(() => {
    let color;
    if (estatus === "pendiente") {
      color = "bg-yellow-400";
    }
    if (estatus === "aprobado") {
    }
    if (estatus === "rechazado") {
    }
  }, [estatus]);
  const color = () => {
    if (estatus.estatus === "pendiente") return "bg-yellow-400";
    if (estatus.estatus === "aprobado") return "bg-green-400";
    if (estatus.estatus === "rechazado") return "bg-red-400";
  };

  return (
    <div className="flex items-center uppercase gap-2">
      <div
        className={
          "rounded-full h-3 w-3 " +
          (estatus === "pendiente"
            ? "bg-orange-400"
            : estatus.estatus === "aprobado"
            ? "bg-green-400"
            : "bg-red-400")
        }
      />
      <label>{estatus}</label>
    </div>
  );
};

export default EstadoSolicitud;
