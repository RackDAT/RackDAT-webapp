import React from "react";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { CgProfile } from "react-icons/cg";
import { MdLocationPin } from "react-icons/md";
import { BsFillBoxSeamFill } from "react-icons/bs";
import Btn from "@/components/global/Btn";
import { userIsLogged } from "@/assets/middlewares/authUser";
import Link from "next/link";
import app from "../../../assets/img/app.png";
import Image from "next/image";

type Props = {};

const features = [
  {
    icon: <CgProfile className="w-14 h-14" />,
    name: "Administracion de cuenta y solicitudes",
  },
  {
    icon: <MdLocationPin className="w-14 h-14" />,
    name: "Reservacion de espacios",
  },
  {
    icon: <BsFillBoxSeamFill className="w-14 h-14" />,
    name: "Prestamos de equipo del inventario",
  },
];

const index = (props: Props) => {
  userIsLogged();
  return (
    <Layout>
      <LayoutHeader title="Home" />
      <div className="w-[80%] m-auto flex flex-col gap-10">
        <div className="w-full flex justify-around items-center py-4 h-[150px]">
          {/* text */}
          <div className="w-1/2 flex flex-col gap-3">
            <h1 className="text-2xl">
              Bienvenido a{" "}
              <label className="text-primary font-bold">RackDAT</label>
            </h1>
            <p>
              El administrador para los items y espacios localizados en el DAT
              de CETYS universidad campus Ensenada.{" "}
            </p>
          </div>
          {/* img */}
          <div className=" w-1/2 h-full overflow-hidden relative">
            <Image
              src={app}
              alt=""
              width={500}
              height={500}
              style={{ objectFit: "cover", objectPosition: "bottom" }}
            />
          </div>
        </div>

        {/* features de la app */}
        <div className="flex flex-col items-center max-w-xl m-auto text-center gap-2">
          <h3 className="text-lg font-bold">Features de la App</h3>
          <p className="text-sm text-slate-700 font-light">
            Explora todas las features de reservacion y administracion del DAT
            en cetys ensenada al crearte una cuenta de estudiante
          </p>
        </div>

        {/* icons */}
        <div className="flex justify-around w-full">
          {features.map((feature, index) => {
            return (
              <div
                className="flex flex-col items-center gap-4 text-center max-w-[150px]"
                key={index}
              >
                {feature.icon}
                <label className="text-sm"> {feature.name}</label>
              </div>
            );
          })}
        </div>
        <Link className="m-auto" href={"items"}>
          <Btn style="strong">Ve los items disponibles</Btn>
        </Link>
      </div>
    </Layout>
  );
};

export default index;
