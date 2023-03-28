import React from "react";
import Btn from "./Btn";
import Person from "@/assets/img/person.svg";
import Image from "next/image";

type Props = {
  children: React.ReactNode;
};

const ContentTemplate = (props: Props) => {
  return (
    <div className="w-[90%] h-[90%] max-h-[700px] m-auto bg-[#F5F5F5] rounded-md flex justify-between overflow-hidden">
      <div className="w-1/2">{props.children}</div>
      <div className="w-1/2 bg-[#E1E5F0] flex flex-col p-4 justify-center align-center ">
        <Image src={Person} alt="person" className="w-4/5" />
        <div className="flex flex-col w-1/2 m-auto text-center align-center gap-2">
          <h3 className="font-bold text-xl">
            Si gustas entrar como visitante, tambien puedes!
          </h3>
          <Btn>Entar como visitante</Btn>
          <label className="text-sm">
            <label className="font-bold"> Nota: </label>reservaciones y
            prestamos solo estan disponibles para usuarios onc cuenta
          </label>
        </div>
      </div>
    </div>
  );
};

export default ContentTemplate;
