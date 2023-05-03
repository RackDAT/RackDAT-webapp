import React from "react";
import Layout from "../../../../components/dashboard/Layout";
import LayoutHeader from "../../../../components/dashboard/LayoutHeader";
import Image from "next/image";
import img from "@/assets/img/lab.jpg";
import Btn from "@/components/global/Btn";
type Props = {};

const Laboratory = (props: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Laboratorios" />
      <div className="flex w-5/6 flex-col m-auto">
        <div className="flex w-full justify-center gap-6 mt-6">
          <div className="w-1/2">
            <Image
              src={img}
              alt="laboratorio"
              className=" w-full h-[300px] object-cover m-auto rounded-xl"
            />
          </div>
          <div className="flex flex-col py-2 max-w-lg w-1/2 h-[300px] justify-between">
            <div>
              <h3 className="font-thin text-slate-400 text-sm">
                Cetys campus Ensenada
              </h3>
              <h1 className="text-xl uppercase">
                Laboratorio{" "}
                <span className="font-bold text-orange-400">Industrial</span>
              </h1>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex gap-3 items-center">
                <span>Capacidad: 30 personas</span>
                <div className="rounded-full bg-green-300 text-green-800 py-1 px-2 w-fit text-sm">
                  Disponible
                </div>
              </div>
              <p className="text-sm text-slate-500">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Suscipit dolor vel, et eligendi sit sapiente enim ab consequatur
                beatae expedita maiores voluptatibus aperiam iusto obcaecati
                incidunt quae dolorem? Quidem, illo!
              </p>
            </div>

            <div className="">
              <Btn style="strong">Reservar Ahora</Btn>
            </div>
          </div>
        </div>
        <hr className="mt-6" />
      </div>
    </Layout>
  );
};

export default Laboratory;
