import Btn from "@/components/global/Btn";
import React from "react";

type Props = {};

const SolicitudDiv = (props: Props) => {
  return (
    <div className=" w-full flex bg-white rounded-xl flex-col hover:scale-[100.5%] duration-200 shadow-md">
      {/* header */}
      <div className="border-b-2 w-full border-neutral-300 px-4 py-1 flex justify-between">
        <div className="flex gap-4">
          <span className="font-bold">Items</span>
          <span className="text-neutral-400 font-">8 de diciembre de 2021</span>
        </div>
        <div className="flex items-center uppercase gap-2">
          <div className="rounded-full h-3 w-3 bg-red-400" />
          <label>denegado</label>
        </div>
      </div>

      {/* content? */}
      <div className="p-4 flex gap-2 items-center justify-between">
        <div className="flex items-center">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-20 h-20 rounded"
          />
          <div className="flex flex-col justify-between ">
            <h1>Tableta para dibujar</h1>
            <label className="text-neutral-500 text-sm">4 unidades</label>
          </div>
        </div>
        <div className="max-w-xs text-sm flex flex-col gap-4 text-ellipsis overflow-hidden">
          <label>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            labore autem a porro modi nemo quasi quam.
          </label>
          <label>Entregado el 9 de diciembre</label>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2">
          <Btn>Ver solicitud</Btn>
          <Btn>Volver a solicitar</Btn>
        </div>
      </div>
    </div>
  );
};

export default SolicitudDiv;
