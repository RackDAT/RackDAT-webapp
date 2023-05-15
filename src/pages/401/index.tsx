import React from "react";
import Image from "next/image";
import RackDATlogo from "../../assets/img/rackdat_logo_blanco.png";

const forbbiden = () => {
  return (
    <div className="w-full h-screen bg-black flex flex-col justify-center items-center p-4">
      <h1 className="text-white text-8xl font-bold">401</h1>
      <h4 className="text-white text-4xl">No te has identificado</h4>
      <Image
        className="mt-24"
        src={RackDATlogo}
        width={500}
        height={500}
        alt="Logo RackDAT"
      ></Image>
    </div>
  );
};

export default forbbiden;
