import React from "react";
import Image from "next/image";
import RackDATlogo from "../../assets/img/rackdat_logo_blanco.png";
import Link from "next/link";
import Btn from "@/components/global/Btn";

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
      <Link href="/login" className="mt-6">
        <Btn style="strong">
          <label htmlFor="" className="font-extrabold hover:cursor-pointer">
            Login
          </label>
        </Btn>
      </Link>
    </div>
  );
};

export default forbbiden;
