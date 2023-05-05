import React from "react";
import Layout from "@/components/dashboard/Layout";
import LayoutHeader from "@/components/dashboard/LayoutHeader";
import { useRouter } from "next/router";
import axios from "axios";
import { useEffect } from "react";
import User from "@/assets/interfaces/users";
import Image from "next/image";
import UserProfileSolicitud from "@/components/dashboard/user/userid/UserProfileSolicitud";
import { GetServerSideProps } from "next";

type Props = {
  user: User;
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  if (!context.params) return { props: {} };
  const userId = context.params.userId;
  let response: any = null;
  response = await axios
    .get<User>(
      `https://rackdat.onrender.com/api/RackDAT/usuario/id:int?id=${userId}`
    )
    .then((res) => {
      return res.data;
    });

  return {
    props: {
      user: response,
    },
  };
};

const index = ({ user }: Props) => {
  return (
    <Layout>
      <LayoutHeader title="Usuarios" />
      <div className="w-[90%] m-auto">
        <div className="my-10 flex">
          <img
            src="https://picsum.photos/200/300"
            alt=""
            className="w-28 h-28 ml-10 mr-5 rounded-full"
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
        <div className="flex flex-col my-10 gap-4">
          <UserProfileSolicitud />
          <UserProfileSolicitud />
        </div>
      </div>
    </Layout>
  );
};

export default index;
