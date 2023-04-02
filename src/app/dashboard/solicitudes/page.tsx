import React from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import SolicitudDiv from "./SolicitudDiv";

type Props = {};

const Solicitudes = (props: Props) => {
  return (
    <div className="flex flex-col">
      {/* header */}
      <div className="border-b-2 border-neutral-300 w-full py-4 px-4 flex items-center gap-2 sticky top-0 z-20 bg-[#F5F5F5]">
        <AiOutlineUnorderedList className="w-6 h-6" />
        <div className="text-xl">Solicitudes</div>
      </div>
      <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
        <h1 className="m-auto">filters</h1>
        <div></div>
        {/* assets */}
        <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
          <SolicitudDiv />
          <SolicitudDiv />
          <SolicitudDiv />
          <SolicitudDiv />
          <SolicitudDiv />
        </div>

        <div></div>
      </div>
    </div>
  );
};

export default Solicitudes;
