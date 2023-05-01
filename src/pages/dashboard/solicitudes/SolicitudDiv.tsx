import Btn from "@/components/global/Btn";
import User from "@/assets/interfaces/users";
import React from "react";

type Props = {};

const SolicitudDiv = (props: Props) => {
  return (
    <div className=" w-full flex bg-white rounded-md flex-col hover:scale-[100.5%] duration-200 shadow-md text-sm">
      {/* header */}
      <div className="border-b-[1px] w-full border-neutral-300 px-4 py-2 flex justify-between">
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
      <div className="px-2 py-2 flex gap-2 items-center justify-between text-sm">
        <div className="flex items-center space-x-3.5">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-20 h-20 rounded"
          />
          <div className="flex flex-col justify-between border- h-20 py-2">
            <h1>Tableta para dibujar</h1>
            <label className="text-neutral-500 text-xs">4 unidades</label>
          </div>
        </div>
        <div className="max-w-xs text-xs flex flex-col gap-4 text-ellipsis overflow-hidden">
          <label>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Corrupti,
            labore autem a porro modi nemo quasi quam.
          </label>
          <label>Entregado el 9 de diciembre</label>
        </div>
        {/* buttons */}
        <div className="flex flex-col gap-2 text-xs">
          <Btn style="strong">Ver solicitud</Btn>
          <Btn style="light">Volver a solicitar</Btn>
        </div>
      </div>
    </div>
  );
};

export default SolicitudDiv;
