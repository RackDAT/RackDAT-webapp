import React from "react";
import Btn from "./Btn";
import Person from "@/assets/img/person.svg";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const ContentTemplate = (props: Props) => {
  return (
    <div className="w-[90%] h-[100%] max-h-[700px] m-auto bg-[#F5F5F5] rounded-md flex justify-between overflow-hidden">
      <div className="w-1/2">{props.children}</div>
      <div className="w-1/2 bg-[#E1E5F0] flex flex-col p-4 justify-center items-center border-black">
        <Image src={Person} alt="person" className="w-3/5 h-1/2" />
        <div className="flex flex-col w-1/2 m-auto text-center align-center gap-4 mt-8">
          <h3 className="font-bold text-lg">
            Si gustas entrar como visitante, tambien puedes!
          </h3>
          <Btn style="strong">Entar como visitante</Btn>
          <label className="text-xs">
            <label className="font-bold"> Nota: </label>reservaciones y
            prestamos solo estan disponibles para usuarios onc cuenta
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContentTemplate;
