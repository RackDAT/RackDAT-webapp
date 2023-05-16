import React, { useEffect, useState } from "react";
import { AiOutlineUnorderedList } from "react-icons/ai";
import SolicitudDiv from "../../../components/dashboard/solicitudes/SolicitudDiv";
import { GoSettings } from "react-icons/go";
import Layout from "../../../components/dashboard/Layout";
import LayoutHeader from "../../../components/dashboard/LayoutHeader";
import { GetServerSideProps } from "next";
import axios from "axios";
import Solicitud from "@/assets/interfaces/solicitud";
import { useRouter } from "next/router";
import { validateUserRole } from "../../../assets/middlewares/validateUserRole";
import { userIsLogged } from "@/assets/middlewares/authUser";
import Btn from "@/components/global/Btn";

export const getServerSideProps: GetServerSideProps = async () => {
  const solicitudesPendientes = await axios
    .get("https://rackdat.onrender.com/Solicitudes/solicitudes-pendientes")
    .then((res) => res.data);

  const solicitudesHistoricas = await axios
    .get("https://rackdat.onrender.com/Solicitudes/solicitudes-historicas")
    .then((res) => res.data);

  return {
    props: {
      solicitudesPendientes: solicitudesPendientes,
      solicitudesHistoricas: solicitudesHistoricas,
    },
  };
};

type Props = { solicitudes: Solicitud[] };

const Solicitudes = ({ solicitudesPendientes, solicitudesHistoricas }: any) => {
  const router = useRouter();

  const [filtroSolicitudes, setFiltroSolicitudes] = useState<
    "Pendientes" | "Historicas"
  >("Pendientes");
  useEffect(() => {
    const validated = validateUserRole();
    if (!validated) {
      router.push("/403");
    }
  }, []);

  // const [solicitudes, setSolicitudes] = useState<any>([]);
  // useEffect(() => {
  //   // equipos.sort((a: any, b: any) => {
  //   //   return a.soli - b.folio;
  //   //   // b.solicitud.fecha_pedido - a.solicitud.fecha_pedido;
  //   // });
  //   setSolicitudes(equipos.concat(laboratorios));
  // }, []);
  console.log(solicitudesPendientes);
  console.log(solicitudesHistoricas);
  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="flex flex-col">
        {/* header */}
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex px-2 mt-7 items-center justify-end gap-2">
            <Btn
              style={filtroSolicitudes == "Historicas" ? "strong" : "light"}
              onClick={() => {
                setFiltroSolicitudes("Historicas");
              }}
            >
              Historicas
            </Btn>
            <Btn
              style={filtroSolicitudes == "Pendientes" ? "strong" : "light"}
              onClick={() => {
                setFiltroSolicitudes("Pendientes");
              }}
            >
              Pendientes
            </Btn>
            <div className="flex gap-2">
              <div className="rounded-full bg-primary w-5 h-5 flex items-center justify-center text-white p-3 ">
                <div>
                  {filtroSolicitudes == "Historicas"
                    ? solicitudesHistoricas.length
                    : solicitudesPendientes.length}
                </div>
              </div>
              <label>solicitudes</label>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            {filtroSolicitudes == "Historicas"
              ? solicitudesHistoricas.map((solicitud: any, index: any) => (
                  <SolicitudDiv
                    solicitud={solicitud}
                    key={index}
                    index={index}
                  />
                ))
              : solicitudesPendientes.map((solicitud: any, index: any) => (
                  <SolicitudDiv
                    solicitud={solicitud}
                    key={index}
                    index={index}
                  />
                ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;
