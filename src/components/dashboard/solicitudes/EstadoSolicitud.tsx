import React, { useEffect } from "react";
import Estatus from "@/assets/interfaces/estatus";

type Props = {
  estatus: Estatus;
};

const estatusSolicitud = ({ estatus }: any) => {
  console.log(estatus);
  useEffect(() => {
    let color;
    if (estatus.estatus_solicitud === "pendiente") {
      color = "bg-yellow-400";
    }
    if (estatus.estatus_solicitud === "aprobado") {
    }
    if (estatus.estatus_solicitud === "rechazado") {
    }
  }, [estatus]);
  const color = () => {
    if (estatus.estatus_solicitud === "pendiente") return "bg-yellow-400";
    if (estatus.estatus_solicitud === "aprobado") return "bg-green-400";
    if (estatus.estatus_solicitud === "rechazado") return "bg-red-400";
  };
  return (
    <div className="flex items-center uppercase gap-2">
      <div
        className={
          "rounded-full h-3 w-3 " +
          (estatus.estatus_solicitud === "pendiente"
            ? "bg-orange-400"
            : estatus.estatus_solicitud === "aprobado"
            ? "bg-green-400"
            : "bg-red-400")
        }
      />
      <label>{estatus.estatus_solicitud}</label>
    </div>
  );
};

export default estatusSolicitud;
