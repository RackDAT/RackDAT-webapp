import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import axios from "axios";
import User from "@/assets/interfaces/users";
import Image from "next/image";
import UserProfileSolicitud from "@/components/dashboard/user/userid/UserProfileSolicitud";
import { GetServerSideProps } from "next";
import Solitud from "@/assets/interfaces/solicitud";

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) return { props: {} };
  const userId = context.params.userId;
  let user = await axios
    .get<User>(`https://rackdat.onrender.com/Usuarios/usuario/${userId}`)
    .then((res) => {
      return res.data;
    });

  let solicitudes = await axios
    .get(
      `https://rackdat.onrender.com/Usuarios/solicitudes-historicas/${userId}`
    )
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      user: user,
      solicitudes: solicitudes,
    },
  };
};

type Props = {
  user: User;
  solicitudes: Solitud[];
};

const index = ({ user, solicitudes }: Props) => {
  console.log(solicitudes);
  return (
    <Layout>
      <LayoutHeader title="Usuarios" />
      <div className="w-[90%] m-auto">
        <div className="my-10 flex">
          <Image
            src={user.imagen}
            alt=""
            width={100}
            height={100}
            className="w-28 h-28 ml-10 mr-5 rounded-full object-cover"
          />
          <div className="flex flex-col h-28 justify-around text-lg">
            <h3 className="uppercase font-semibold ">
              Usuario:{" "}
              <label className="lowercase text-xl text-black">
                {user.nombre} {user.apellido_pat}
              </label>
            </h3>
            <h4> Matricula: {user.clave}</h4>
          </div>
        </div>
        <hr />
        <div className="flex flex-col my-10 gap-4 items-center">
          {solicitudes.length > 0 ? (
            solicitudes.map((solicitud, index) => {
              return <UserProfileSolicitud solicitud={solicitud} key={index} />;
            })
          ) : (
            <label className="text-slate-400">
              Este usuario no ha generado solicitudes
            </label>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default index;
