import React, { useEffect } from "react";
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

export const getServerSideProps: GetServerSideProps = async () => {
  const solicitudes = await axios
    .get("https://rackdat.onrender.com/Solicitudes/solicitudes-pendientes")
    .then((res) => res.data);

  return {
    props: {
      solicitudes: solicitudes,
    },
  };
};

type Props = { solicitudes: Solicitud[] };

const Solicitudes = ({ solicitudes }: Props) => {
  const router = useRouter();
  validateUserRole();

  return (
    <Layout>
      <LayoutHeader title="Solicitudes" />
      <div className="flex flex-col">
        {/* header */}
        <div className=" overflow-y-auto w-[92%] m-auto flex flex-col gap-2  px-2 h-full">
          <div className="flex justify-between px-10 mt-7 items-center">
            <div className="flex gap-2">
              <div className="rounded-full bg-primary w-5 h-5 flex items-center justify-center text-white p-3">
                <div>2</div>
              </div>
              <label>solicitudes</label>
            </div>
          </div>
          {/* assets */}
          <div className=" m-auto h-full w-full py-4 gap-4 flex flex-col">
            {solicitudes.map((solicitud, index) => (
              <SolicitudDiv solicitud={solicitud} key={index} index={index} />
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Solicitudes;
