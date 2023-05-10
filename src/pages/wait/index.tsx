import React from "react";
import Image from "next/image";
import LogoRackDAT from "../../assets/img/rackdat_logo_blanco.png";

const waitPage = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center gap-8">
      <div className="flex flex-col text-center m-6">
        <label className="text-4xl font-bold text-white">
          Tu solicitud de cuenta se ha enviado.
        </label>
        <label className="text-4xl font-bold text-white">
          Espera a que tu coordinador de carrera acepte la solicitud
        </label>
      </div>
      <Image
        src={LogoRackDAT}
        height={500}
        width={500}
        alt={"RackDAT Logo"}
      ></Image>
    </div>
  );
};

export default waitPage;
